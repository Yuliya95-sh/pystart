/* =========================================================
   PyStart — логика приложения.
   Разделы файла:
     1. Утилиты
     2. Хранилище прогресса (localStorage)
     3. Python-движок (Pyodide в Web Worker + таймаут)
     4. Редактор кода (CodeMirror) и подсветка
     5. Автопроверка задач (Auto-Grader)
     6. Тесты (Quiz)
     7. Экраны: главная, модуль (теория / практика / тест), песочница
     8. Сайдбар, роутер, запуск
   Контент курса живёт в courses_data.js (window.COURSE).
   ========================================================= */
(function () {
  "use strict";

  const COURSE = window.COURSE;
  const PYODIDE_VERSION = "0.26.4";
  const PYODIDE_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;
  const QUIZ_PASS = 70;          // % для зачёта теста
  const RUN_TIMEOUT = 6000;      // мс на запуск в песочнице
  const TEST_TIMEOUT = 3000;     // мс на один тест автопроверки

  /* ========== 1. Утилиты ========== */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const h = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("show"), 2200);
  }

  function shuffle(arr, seed) {
    const a = arr.slice();
    let s = seed || 1;
    const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  const getModule = (id) => COURSE.modules.find((m) => m.id === id);
  const isReady = (m) => m.status !== "soon";

  /* ========== 2. Хранилище прогресса ========== */
  const STORE_KEY = "pystart.progress.v1";
  const Store = {
    data: { lessons: {}, tasks: {}, code: {}, quiz: {}, fails: {}, sandbox: "" },
    load() {
      try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw) this.data = Object.assign(this.data, JSON.parse(raw));
      } catch (e) { /* приватный режим или запрет хранилища — работаем без сохранения */ }
    },
    save: debounce(function () {
      try { localStorage.setItem(STORE_KEY, JSON.stringify(Store.data)); } catch (e) {}
    }, 250),
    reset() { this.data = { lessons: {}, tasks: {}, code: {}, quiz: {}, fails: {}, sandbox: "" }; this.save(); },
  };

  function moduleProgress(m) {
    if (!isReady(m)) return { done: 0, total: 0, pct: 0, complete: false };
    const L = m.lessons.filter((l) => Store.data.lessons[`${m.id}.${l.id}`]).length;
    const main = m.tasks.filter((t) => !t.extra);
    const T = main.filter((t) => Store.data.tasks[`${m.id}.${t.id}`]).length;
    const X = m.tasks.filter((t) => t.extra && Store.data.tasks[`${m.id}.${t.id}`]).length;
    const q = Store.data.quiz[m.id];
    const Q = q && q.passed ? 1 : 0;
    const total = m.lessons.length + main.length + 1;
    const done = L + T + Q;
    return { L, T, Q, X, mainTotal: main.length, done, total, pct: Math.round((done / total) * 100), complete: done === total, quiz: q };
  }

  function overallProgress() {
    let done = 0, total = 0, lessons = 0, tasks = 0, quizzes = 0;
    COURSE.modules.filter(isReady).forEach((m) => {
      const p = moduleProgress(m);
      done += p.done; total += p.total; lessons += p.L; tasks += p.T; quizzes += p.Q;
    });
    return { done, total, lessons, tasks, quizzes, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  /* ========== 3. Python-движок ========== */
  // Код Python, выполняющий программу ученика в изолированном пространстве имён.
  const PY_RUNNER = String.raw`
import sys, io, os, json, builtins, traceback, tempfile

def _pystart_run(code, stdin, extra, echo, files="{}"):
    # Каждый запуск — в своей чистой папке: файлы из прошлых запусков не мешают
    prev_dir = os.getcwd()
    os.chdir(tempfile.mkdtemp())
    for _name, _content in json.loads(files or "{}").items():
        with open(_name, "w", encoding="utf-8") as _f:
            _f.write(_content)
    try:
        return _pystart_exec(code, stdin, extra, echo)
    finally:
        os.chdir(prev_dir)

def _pystart_exec(code, stdin, extra, echo):
    out = io.StringIO()
    inp = io.StringIO(stdin)
    def _input(prompt=""):
        if echo and prompt != "":
            out.write(str(prompt))
        line = inp.readline()
        if line == "":
            raise EOFError("EOF when reading a line")
        if line.endswith("\n"):
            line = line[:-1]
        if line.endswith("\r"):
            line = line[:-1]
        if echo and prompt != "":
            out.write(line + "\n")
        return line
    g = {"__name__": "__main__", "__builtins__": builtins, "input": _input}
    old = sys.stdout, sys.stderr, sys.stdin
    sys.stdout = out
    sys.stderr = out
    sys.stdin = inp
    status, err, etype = "ok", "", ""
    src = {"main.py": code.split("\n"), "test.py": (extra or "").split("\n")}
    try:
        exec(compile(code, "main.py", "exec"), g)
        if extra:
            exec(compile(extra, "test.py", "exec"), g)
    except SystemExit:
        pass
    except BaseException as e:
        etype = type(e).__name__
        status = "assert" if isinstance(e, AssertionError) else "error"
        if isinstance(e, SyntaxError):
            err = "".join(traceback.format_exception_only(type(e), e))
        else:
            frames = [f for f in traceback.extract_tb(e.__traceback__) if f.filename in src]
            lines = ["Traceback (most recent call last):"]
            for f in frames:
                where = "программа" if f.filename == "main.py" else "проверка"
                lines.append(f'  {where}, строка {f.lineno}' + (f', в {f.name}' if f.name != "<module>" else ""))
                try:
                    code_line = src[f.filename][f.lineno - 1].strip()
                    if code_line:
                        lines.append("    " + code_line)
                except Exception:
                    pass
            lines.append("".join(traceback.format_exception_only(type(e), e)).rstrip())
            err = "\n".join(lines) + "\n"
    finally:
        sys.stdout, sys.stderr, sys.stdin = old
    return json.dumps({"out": out.getvalue(), "err": err, "status": status, "etype": etype})
`;

  const WORKER_SRC = `
    let py = null;
    self.onmessage = async (e) => {
      const m = e.data;
      if (m.type === "init") {
        try {
          importScripts(m.url + "pyodide.js");
          py = await loadPyodide({ indexURL: m.url });
          py.runPython(m.runner);
          self.postMessage({ type: "ready" });
        } catch (err) {
          self.postMessage({ type: "fail", error: String(err) });
        }
        return;
      }
      if (m.type === "run") {
        try {
          const fn = py.globals.get("_pystart_run");
          const res = fn(m.code, m.stdin || "", m.extra || "", !!m.echo, m.files || "{}");
          fn.destroy && fn.destroy();
          self.postMessage({ type: "result", id: m.id, res: JSON.parse(res) });
        } catch (err) {
          self.postMessage({ type: "result", id: m.id, res: { out: "", err: String(err), status: "error", etype: "InternalError" } });
        }
      }
    };`;

  const Py = {
    state: "loading",
    worker: null,
    mainThread: null,      // запасной вариант без воркера
    readyPromise: null,
    pending: null,
    queue: Promise.resolve(),
    seq: 0,

    setStatus(state, label) {
      this.state = state;
      const el = $("#pyStatus");
      if (!el) return;
      el.className = "py-status " + state;
      $(".label", el).textContent = label;
    },

    init() {
      this.setStatus("loading", "Python загружается…");
      this.readyPromise = new Promise((resolve, reject) => {
        try {
          const blob = new Blob([WORKER_SRC], { type: "text/javascript" });
          this.worker = new Worker(URL.createObjectURL(blob));
        } catch (e) {
          // file:// в некоторых браузерах запрещает воркеры — запускаем в основном потоке
          return this.initMainThread().then(resolve, reject);
        }
        this.worker.onmessage = (e) => {
          const m = e.data;
          if (m.type === "ready") { this.setStatus("ready", "Python 3 готов"); resolve(); }
          else if (m.type === "fail") {
            this.worker.terminate(); this.worker = null;
            this.initMainThread().then(resolve, reject);
          }
          else if (m.type === "result" && this.pending && this.pending.id === m.id) {
            clearTimeout(this.pending.timer);
            const p = this.pending; this.pending = null; p.resolve(m.res);
          }
        };
        this.worker.onerror = () => {
          if (this.state === "loading") { this.worker = null; this.initMainThread().then(resolve, reject); }
        };
        this.worker.postMessage({ type: "init", url: PYODIDE_URL, runner: PY_RUNNER });
      });
      this.readyPromise.catch(() => this.setStatus("error", "Python не загрузился"));
      return this.readyPromise;
    },

    async initMainThread() {
      await new Promise((res, rej) => {
        const s = document.createElement("script");
        s.src = PYODIDE_URL + "pyodide.js";
        s.onload = res; s.onerror = rej;
        document.head.appendChild(s);
      });
      this.mainThread = await window.loadPyodide({ indexURL: PYODIDE_URL });
      this.mainThread.runPython(PY_RUNNER);
      this.setStatus("ready", "Python 3 готов (без таймаута)");
    },

    restart() {
      if (this.worker) this.worker.terminate();
      this.worker = null;
      this.init();
    },

    // Выполнить код. Возвращает {out, err, status: ok|error|assert|timeout, etype}
    run(code, { stdin = "", extra = "", echo = true, timeout = RUN_TIMEOUT, files = null } = {}) {
      const filesJson = JSON.stringify(files || {});
      const job = async () => {
        await this.readyPromise;
        if (this.mainThread) {
          const fn = this.mainThread.globals.get("_pystart_run");
          return JSON.parse(fn(code, stdin, extra, echo, filesJson));
        }
        return new Promise((resolve) => {
          const id = ++this.seq;
          const timer = setTimeout(() => {
            this.pending = null;
            resolve({ out: "", err: "", status: "timeout", etype: "Timeout" });
            this.restart();                // бесконечный цикл: убиваем воркер и поднимаем новый
          }, timeout);
          this.pending = { id, resolve, timer };
          this.setStatus("busy", "Выполняется…");
          this.worker.postMessage({ type: "run", id, code, stdin, extra, echo, files: filesJson });
        }).finally(() => { if (this.state === "busy") this.setStatus("ready", "Python 3 готов"); });
      };
      const p = this.queue.then(job, job);
      this.queue = p.catch(() => {});
      return p;
    },
  };

  const ERROR_HINTS = {
    NameError: "Имя не найдено: переменная или функция используется до того, как ей присвоено значение, либо в имени опечатка. Помните: Python различает регистр (Sum ≠ sum).",
    TypeError: "Операция применена к несовместимым типам. Частая причина — забыли преобразовать ввод: input() всегда возвращает строку, нужно int(input()).",
    ValueError: "Неподходящее значение: например, int('3.5') или int('abc'). Проверьте формат входных данных.",
    ZeroDivisionError: "Деление на ноль. Проверьте делитель перед операциями /, // и %.",
    IndentationError: "Ошибка отступов: тело if / for / while / def сдвигается на одинаковое число пробелов (обычно 4).",
    TabError: "Смешаны табуляции и пробелы в отступах. Используйте только пробелы.",
    SyntaxError: "Синтаксическая ошибка: проверьте двоеточие после if / elif / else / for / while, парность скобок и кавычек, = вместо ==.",
    IndexError: "Обращение к несуществующему индексу. Индексы начинаются с 0, последний — len(x) - 1.",
    KeyError: "В словаре нет такого ключа.",
    AttributeError: "У объекта нет такого метода/атрибута. Проверьте тип переменной и написание метода.",
    RecursionError: "Слишком глубокая рекурсия: проверьте базовый случай.",
    EOFError: "Программа вызвала input(), но входные данные закончились. Заполните поле «Ввод (stdin)» — по одной строке на каждый input().",
    FileNotFoundError: "Файл не найден. Проверьте имя файла (с расширением) и режим: в режиме \"r\" файл должен уже существовать.",
    AssertionError:"Проверка assert не прошла: функция вернула не то значение.",
  };

  /* ========== 4. Редактор и подсветка ========== */
  function createEditor(host, value, { onChange, onRun } = {}) {
    const cm = CodeMirror(host, {
      value: value || "",
      mode: "python",
      lineNumbers: true,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: false,
      matchBrackets: true,
      autoCloseBrackets: true,
      viewportMargin: Infinity,
      extraKeys: {
        Tab: (c) => (c.somethingSelected() ? c.indentSelection("add") : c.replaceSelection("    ", "end")),
        "Shift-Tab": (c) => c.indentSelection("subtract"),
        "Ctrl-Enter": () => onRun && onRun(),
        "Cmd-Enter": () => onRun && onRun(),
        "Ctrl-/": "toggleComment",
      },
    });
    if (onChange) cm.on("change", () => onChange(cm.getValue()));
    setTimeout(() => cm.refresh(), 0);
    return cm;
  }

  function highlight(code) {
    const pre = document.createElement("pre");
    pre.className = "cm-s-static";
    if (window.CodeMirror && CodeMirror.runMode) CodeMirror.runMode(code, "python", pre);
    else pre.textContent = code;
    return pre;
  }

  // Консоль вывода
  function consoleWrite(con, res, { clear = true } = {}) {
    if (clear) con.innerHTML = "";
    const add = (cls, text) => { const s = document.createElement("span"); if (cls) s.className = cls; s.textContent = text; con.appendChild(s); };
    if (res.out) add("", res.out);
    if (res.status === "timeout") {
      add("err", "\n⏱ Превышено время выполнения. Скорее всего, в программе бесконечный цикл (условие while никогда не становится ложным) или она ждёт ввода.\n");
    } else if (res.err) {
      add("err", (res.out && !res.out.endsWith("\n") ? "\n" : "") + res.err);
      const hint = ERROR_HINTS[res.etype];
      if (hint) add("hint", "💡 " + hint + "\n");
    }
    if (!res.out && !res.err && res.status === "ok") add("sys", "Программа завершилась без вывода.");
    con.scrollTop = con.scrollHeight;
  }

  // Блок «редактор + ввод + консоль». Используется в песочнице и в задачах.
  // Текст «ввода» теста: файлы (если есть) + stdin
  function fmtInput(t) {
    const files = t.files ? Object.entries(t.files).map(([n, c]) => `📄 ${n}:\n${c}`).join("\n") : "";
    return [files, t.input || ""].filter(Boolean).join("\n") || "(пусто)";
  }

  function buildIDE({ code, onChange, extraButtons = [], fileName = "main.py", stdin = "", files = null }) {
    const root = h(`
      <div class="ide">
        <div class="ide-editor">
          <div class="ide-toolbar">
            <span class="fname">${esc(fileName)}</span>
            <div class="btn-row">
              <button class="btn btn-ghost btn-sm" data-act="clear">Очистить консоль</button>
              <button class="btn btn-primary btn-sm" data-act="run">▶ Запустить <span class="kbd">Ctrl+Enter</span></button>
            </div>
          </div>
          <div class="cm-host"></div>
        </div>
        <div class="io-grid">
          <div class="panel">
            <div class="panel-head">Ввод (stdin)</div>
            <textarea class="stdin" spellcheck="false" placeholder="Данные для input(): по одной строке на каждый вызов"></textarea>
          </div>
          <div class="panel">
            <div class="panel-head"><span>Консоль вывода</span><span class="run-time"></span></div>
            <pre class="console"><span class="sys">Нажмите «Запустить», чтобы выполнить программу.</span></pre>
          </div>
        </div>
      </div>`);
    const con = $(".console", root);
    const stdinEl = $(".stdin", root);
    stdinEl.value = stdin;
    const run = async () => {
      const src = cm.getValue();
      if (/\binput\s*\(/.test(src) && !stdinEl.value.trim() && !files) {
        con.innerHTML = '<span class="hint">💡 Программа использует input(). Впишите входные данные в поле «Ввод (stdin)» — по одной строке на каждый вызов input().</span>\n';
      } else con.innerHTML = "";
      const sys = document.createElement("span"); sys.className = "sys"; sys.textContent = Py.state === "loading" ? "Ждём загрузки Python…\n" : "Выполняется…\n";
      con.appendChild(sys);
      const t0 = performance.now();
      const res = await Py.run(src, { stdin: stdinEl.value, echo: true, files });
      sys.remove();
      consoleWrite(con, res, { clear: false });
      $(".run-time", root).textContent = `${Math.round(performance.now() - t0)} мс`;
    };
    const cm = createEditor($(".cm-host", root), code, { onChange, onRun: run });
    $('[data-act="run"]', root).onclick = run;
    $('[data-act="clear"]', root).onclick = () => { con.innerHTML = ""; };
    const row = $(".ide-toolbar .btn-row", root);
    extraButtons.forEach((b) => row.insertBefore(b, row.firstChild));
    return { root, cm, con, stdinEl, run };
  }

  /* ========== 5. Автопроверка ========== */
  function normOut(s) {
    return String(s ?? "").replace(/\r/g, "").split("\n").map((l) => l.replace(/\s+$/, "")).join("\n").replace(/\n+$/, "");
  }

  // Если у теста не указан output, ожидаемый вывод вычисляется запуском эталонного решения
  // (результат кэшируется). Так автору достаточно написать входные данные и solution.
  const expectedCache = new WeakMap();
  function expectedFor(task, t) {
    if (t.output !== undefined || t.assert || !task.solution) return Promise.resolve(t.output);
    if (!expectedCache.has(t)) {
      expectedCache.set(t, Py.run(task.solution, { stdin: t.input || "", files: t.files, extra: t.after || "", echo: false, timeout: 15000 })
        .then((r) => (r.status === "ok" ? r.out : null)));
    }
    return expectedCache.get(t);
  }

  async function gradeTask(task, code, onStep) {
    const results = [];
    for (let i = 0; i < task.tests.length; i++) {
      const t = task.tests[i];
      const expected = await expectedFor(task, t);
      // t.after — код, который выполняется после программы ученика (например, печатает записанный ею файл)
      const res = await Py.run(code, { stdin: t.input || "", extra: t.assert || t.after || "", echo: false, timeout: t.timeout || TEST_TIMEOUT, files: t.files });
      let pass, reason = "";
      if (expected === null) { pass = false; reason = "Ошибка в эталонном решении задачи"; }
      else if (res.status === "timeout") { pass = false; reason = "Превышено время (бесконечный цикл?)"; }
      else if (res.status === "error") { pass = false; reason = `Ошибка выполнения: ${res.etype}`; }
      else if (res.status === "assert") { pass = false; reason = "Функция вернула неверный результат"; }
      else if (t.assert && t.output === undefined) { pass = true; }
      else { pass = normOut(res.out) === normOut(expected); if (!pass) reason = "Неверный ответ"; }
      const r = { test: t, res, pass, reason, index: i, expected };
      results.push(r);
      onStep && onStep(r);
    }
    return results;
  }

  /* ========== 6. Тесты (Quiz) ========== */
  const Q_TYPES = { single: "Один ответ", multiple: "Несколько ответов", matching: "Соответствие", fill: "Впишите ответ" };
  const qMax = (q) => (q.type === "multiple" || q.type === "matching" ? 2 : 1);

  function normFill(s, ignoreCase) {
    let v = String(s ?? "").trim().replace(/\s+/g, " ");
    if (ignoreCase) v = v.toLowerCase();
    return v;
  }

  // Подсчёт баллов в стиле ЕНТ: 1 балл за single/fill, 2 балла за multiple/matching (1 балл при одной ошибке).
  function scoreQuestion(q, ans) {
    const max = qMax(q);
    if (q.type === "single") return ans === q.answer ? 1 : 0;
    if (q.type === "fill") {
      const a = normFill(ans, q.ignoreCase);
      if (!a) return 0;
      const ok = q.answer.some((v) => normFill(v, q.ignoreCase) === a || normFill(v, q.ignoreCase).replace(/ /g, "") === a.replace(/ /g, ""));
      return ok ? 1 : 0;
    }
    if (q.type === "multiple") {
      const sel = new Set(ans || []);
      if (!sel.size) return 0;
      let errors = 0;
      q.options.forEach((_, i) => { if (sel.has(i) !== q.answer.includes(i)) errors++; });
      return errors === 0 ? max : errors === 1 ? 1 : 0;
    }
    if (q.type === "matching") {
      const a = ans || {};
      const wrong = q.pairs.filter((p, i) => a[i] !== p.right).length;
      return wrong === 0 ? max : wrong === 1 ? 1 : 0;
    }
    return 0;
  }

  // ctx — общий контекст (ситуация + код), к которому относится несколько вопросов (формат ЕНТ)
  function renderQuizQuestion(q, i, state, seed, ctx, ctxOpen) {
    const card = h(`<div class="card q" data-i="${i}">
      <div class="q-head"><span class="q-num">Вопрос ${i + 1} · ${qMax(q)} ${qMax(q) === 1 ? "балл" : "балла"}</span><span class="q-type">${Q_TYPES[q.type]}</span></div>
    </div>`);
    if (ctx) {
      const box = h(`<details class="ctx-box" ${ctxOpen ? "open" : ""}><summary>📄 Контекст: ${esc(ctx.title || "")}</summary><div class="ctx-body">${ctx.text || ""}</div></details>`);
      if (ctx.code) { const cb = h(`<div class="codeblock"></div>`); cb.appendChild(highlight(ctx.code)); $(".ctx-body", box).appendChild(cb); }
      card.appendChild(box);
    }
    card.appendChild(h(`<div class="q-text">${q.q}</div>`));
    if (q.code) { const cb = h(`<div class="codeblock"></div>`); cb.appendChild(highlight(q.code)); card.appendChild(cb); }

    if (q.type === "single" || q.type === "multiple") {
      const box = h(`<div class="opts"></div>`);
      q.options.forEach((o, k) => {
        const isCode = q.codeOptions;
        const lab = h(`<label class="opt"><input type="${q.type === "single" ? "radio" : "checkbox"}" name="q${i}" value="${k}"><b class="opt-letter">${"АБВГДЕ"[k] || k + 1})</b><div>${isCode ? `<pre>${esc(o)}</pre>` : o}</div></label>`);
        const inp = $("input", lab);
        inp.onchange = () => {
          if (q.type === "single") { state[i] = k; $$(".opt", box).forEach((x) => x.classList.remove("selected")); }
          else {
            const s = new Set(state[i] || []);
            inp.checked ? s.add(k) : s.delete(k);
            state[i] = [...s].sort();
          }
          lab.classList.toggle("selected", inp.checked);
        };
        box.appendChild(lab);
      });
      if (q.type === "multiple") card.appendChild(h(`<p class="small muted" style="margin:-4px 0 8px">Отметьте все верные варианты.</p>`));
      card.appendChild(box);
    }

    if (q.type === "matching") {
      const rights = shuffle([...new Set(q.pairs.map((p) => p.right).concat(q.distractors || []))], seed + i * 7);
      const box = h(`<div class="match"></div>`);
      state[i] = state[i] || {};
      q.pairs.forEach((p, k) => {
        const row = h(`<div class="match-row"><div class="match-left">${esc(p.left)}</div><div class="match-arrow">→</div>
          <select><option value="">— выберите —</option>${rights.map((r) => `<option value="${esc(r)}">${esc(r)}</option>`).join("")}</select></div>`);
        $("select", row).onchange = (e) => { state[i][k] = e.target.value || undefined; };
        box.appendChild(row);
      });
      card.appendChild(box);
    }

    if (q.type === "fill") {
      const w = h(`<div class="fill-wrap"><input type="text" spellcheck="false" autocomplete="off" placeholder="Ваш ответ"></div>`);
      $("input", w).oninput = (e) => { state[i] = e.target.value; };
      card.appendChild(w);
    }
    return card;
  }

  function showQuizReview(card, q, ans) {
    const got = scoreQuestion(q, ans), max = qMax(q);
    card.classList.add(got === max ? "res-ok" : got > 0 ? "res-part" : "res-bad");
    $$("input, select", card).forEach((x) => (x.disabled = true));
    let right = "";
    if (q.type === "single" || q.type === "multiple") {
      const correct = q.type === "single" ? [q.answer] : q.answer;
      $$(".opt", card).forEach((lab, k) => {
        if (correct.includes(k)) lab.classList.add("correct");
        else if ($("input", lab).checked) lab.classList.add("wrong");
      });
      right = "Верно: " + correct.map((k) => (q.codeOptions ? `<code>${esc(q.options[k]).replace(/\n/g, "; ")}</code>` : q.options[k])).join(", ");
    }
    if (q.type === "matching") {
      $$(".match-row", card).forEach((row, k) => {
        const sel = $("select", row);
        sel.classList.add((ans || {})[k] === q.pairs[k].right ? "correct" : "wrong");
      });
      right = "Верные пары: " + q.pairs.map((p) => `<code>${esc(p.left)}</code> → <code>${esc(p.right)}</code>`).join("; ");
    }
    if (q.type === "fill") {
      $("input", card).classList.add(got ? "correct" : "wrong");
      right = "Правильный ответ: <code>" + esc(q.answer[0]) + "</code>";
    }
    const verdict = got === max ? ["ok", "✓ Верно"] : got > 0 ? ["part", `◐ Частично верно (${got} из ${max})`] : ["bad", "✗ Неверно"];
    card.appendChild(h(`<div class="explain">
      <div class="ex-verdict ${verdict[0]}">${verdict[1]}</div>
      ${got === max ? "" : `<div class="right-ans">${right}</div>`}
      <div>${q.explain || ""}</div></div>`));
    return got;
  }

  /* ========== 7. Экраны ========== */
  const app = () => $("#app");

  function renderBlocks(blocks, container) {
    blocks.forEach((b) => {
      if (b.t === "html") container.insertAdjacentHTML("beforeend", b.html);
      else if (b.t === "note") {
        container.appendChild(h(`<div class="note ${b.kind || ""}">${b.title ? `<div class="note-title">${esc(b.title)}</div>` : ""}${b.html}</div>`));
      } else if (b.t === "code") container.appendChild(codeBlock(b));
    });
  }

  function codeBlock(b) {
    const box = h(`<div class="codeblock"></div>`);
    if (b.files) {
      Object.entries(b.files).forEach(([name, content]) => {
        const f = h(`<div class="cb-file"><div class="cb-file-name">📄 ${esc(name)}</div><pre></pre></div>`);
        $("pre", f).textContent = content;
        box.appendChild(f);
      });
    }
    box.appendChild(highlight(b.code));
    if (b.run !== false) {
      const bar = h(`<div class="cb-bar"><span>${b.input ? "Ввод: " + esc(b.input.replace(/\n/g, " ⏎ ")) : "Python"}</span>
        <div class="btn-row"><button class="btn btn-ghost btn-sm" data-a="sb">В песочницу</button><button class="btn btn-primary btn-sm" data-a="run">▶ Выполнить</button></div></div>`);
      box.appendChild(bar);
      let out = null;
      $('[data-a="run"]', bar).onclick = async (e) => {
        const btn = e.currentTarget; btn.disabled = true;
        if (!out) { out = h(`<pre class="cb-out"></pre>`); box.appendChild(out); }
        out.textContent = Py.state === "loading" ? "Ждём загрузки Python…" : "Выполняется…";
        const res = await Py.run(b.code, { stdin: b.input || "", echo: true, files: b.files });
        out.innerHTML = "";
        out.textContent = res.out || "";
        if (res.status === "timeout") out.textContent += "⏱ Превышено время выполнения";
        else if (res.err) { const s = document.createElement("span"); s.style.color = "var(--bad)"; s.textContent = res.err; out.appendChild(s); }
        if (!res.out && !res.err && res.status === "ok") out.textContent = "(нет вывода)";
        btn.disabled = false;
      };
      $('[data-a="sb"]', bar).onclick = () => {
        Store.data.sandbox = b.code; Store.data.sandboxInput = b.input || ""; Store.save();
        location.hash = "#/sandbox";
      };
    }
    return box;
  }

  function viewHome() {
    const o = overallProgress();
    const next = findNext();
    const el = h(`<div class="container">
      <section class="hero">
        <h1>${esc(COURSE.title)}</h1>
        <p>${COURSE.subtitle}</p>
        <div class="btn-row">
          ${next ? `<a class="btn btn-primary" href="${next.href}">${o.done ? "Продолжить" : "Начать обучение"}: ${esc(next.label)}</a>` : `<span class="badge ok">Все доступные модули пройдены 🎉</span>`}
          <a class="btn btn-ghost" href="#/sandbox">Открыть песочницу</a>
        </div>
        <div class="stats">
          <div class="stat"><b>${o.pct}%</b><span>общий прогресс</span></div>
          <div class="stat"><b>${o.lessons}</b><span>уроков изучено</span></div>
          <div class="stat"><b>${o.tasks}</b><span>задач решено</span></div>
          <div class="stat"><b>${o.quizzes}</b><span>тестов сдано</span></div>
        </div>
      </section>
      <h2>Программа курса</h2>
      <div class="grid-mods"></div>
      <h2>Как устроен каждый модуль</h2>
      <div class="grid-mods">
        <div class="card"><h3>1. Теория</h3><p class="muted small">Короткие уроки с примерами. Любой пример можно выполнить прямо на странице или отправить в песочницу.</p></div>
        <div class="card"><h3>2. Практика</h3><p class="muted small">2–3 задачи от лёгкой к сложной. Кнопка «Проверить» прогоняет решение через открытые и скрытые тесты.</p></div>
        <div class="card"><h3>3. Тест</h3><p class="muted small">Вопросы в формате ЕНТ четырёх типов. После сдачи — баллы, процент и разбор каждой ошибки. Зачёт от ${QUIZ_PASS}%.</p></div>
      </div>
      <p class="small muted" style="margin-top:24px">Прогресс хранится только в этом браузере. <a href="#" id="resetProgress">Сбросить прогресс</a></p>
    </div>`);
    const grid = $(".grid-mods", el);
    COURSE.modules.forEach((m, i) => {
      const p = moduleProgress(m);
      grid.appendChild(h(`<a class="card mod-card ${isReady(m) ? "" : "soon"}" href="#/m/${m.id}">
        <div class="top"><span class="icon">${m.icon || "📘"}</span>
          ${isReady(m) ? (p.complete ? `<span class="badge ok">Пройден</span>` : `<span class="badge">${p.done}/${p.total}</span>`) : `<span class="badge">Скоро</span>`}</div>
        <h3>Модуль ${i + 1}. ${esc(m.title)}</h3>
        <p>${esc(m.summary)}</p>
        ${isReady(m) ? `<div class="bar ${p.complete ? "ok" : ""}"><span style="width:${p.pct}%"></span></div>` : ""}
      </a>`));
    });
    $("#resetProgress", el).onclick = (e) => {
      e.preventDefault();
      if (confirm("Удалить весь прогресс, сохранённый код и результаты тестов?")) { Store.reset(); render(); toast("Прогресс сброшен"); }
    };
    return el;
  }

  function findNext() {
    for (const m of COURSE.modules.filter(isReady)) {
      const li = m.lessons.findIndex((l) => !Store.data.lessons[`${m.id}.${l.id}`]);
      if (li >= 0) return { href: `#/m/${m.id}/theory/${li}`, label: m.lessons[li].title };
      const ti = m.tasks.findIndex((t) => !t.extra && !Store.data.tasks[`${m.id}.${t.id}`]);
      if (ti >= 0) return { href: `#/m/${m.id}/tasks/${ti}`, label: m.tasks[ti].title };
      if (!(Store.data.quiz[m.id] || {}).passed) return { href: `#/m/${m.id}/quiz`, label: `Тест: ${m.title}` };
    }
    return null;
  }

  function moduleHeader(m, tab) {
    const idx = COURSE.modules.indexOf(m) + 1;
    const p = moduleProgress(m);
    const q = p.quiz;
    return h(`<div>
      <div class="crumbs"><a href="#/">Курс</a> / Модуль ${idx}</div>
      <div class="page-head"><h1>${m.icon || ""} ${esc(m.title)}</h1>
        <div style="min-width:200px"><div class="small muted" style="margin-bottom:4px">Прогресс модуля: <b>${p.pct}%</b></div><div class="bar ${p.complete ? "ok" : ""}"><span style="width:${p.pct}%"></span></div></div></div>
      <nav class="tabs">
        <a class="tab ${tab === "theory" ? "active" : ""}" href="#/m/${m.id}/theory/0">📖 Теория <span class="count">${p.L}/${m.lessons.length}</span></a>
        ${m.tasks.length ? `<a class="tab ${tab === "tasks" ? "active" : ""}" href="#/m/${m.id}/tasks/0">💻 Практика <span class="count">${p.T}/${p.mainTotal}</span></a>` : ""}
        <a class="tab ${tab === "quiz" ? "active" : ""}" href="#/m/${m.id}/quiz">📝 Тест ${q ? `<span class="count">${q.best}%</span>` : ""}</a>
      </nav></div>`);
  }

  function viewSoon(m) {
    const idx = COURSE.modules.indexOf(m) + 1;
    return h(`<div class="container">
      <div class="crumbs"><a href="#/">Курс</a> / Модуль ${idx}</div>
      <h1>${m.icon || ""} Модуль ${idx}. ${esc(m.title)}</h1>
      <div class="card soon-box"><div class="big">🚧</div><h2 style="margin-top:8px">Модуль в разработке</h2>
        <p class="muted">${esc(m.summary)}</p></div>
      <h2>Что будет в модуле</h2>
      <ul class="topic-list">${(m.plan || []).map((t) => `<li>${t}</li>`).join("")}</ul>
      <div class="note"><div class="note-title">Для преподавателя</div><p>Чтобы открыть модуль, заполните в <code>courses_data.js</code> поля <code>lessons</code>, <code>tasks</code>, <code>quiz</code> и удалите <code>status: "soon"</code>. Инструкция — в README.md.</p></div>
    </div>`);
  }

  function viewTheory(m, n) {
    n = Math.min(Math.max(0, n | 0), m.lessons.length - 1);
    const lesson = m.lessons[n];
    const el = h(`<div class="container"></div>`);
    el.appendChild(moduleHeader(m, "theory"));
    const nav = h(`<div class="lesson-nav"></div>`);
    m.lessons.forEach((l, k) => {
      const done = Store.data.lessons[`${m.id}.${l.id}`];
      nav.appendChild(h(`<a class="lesson-pill ${k === n ? "active" : ""}" href="#/m/${m.id}/theory/${k}"><span class="check ${done ? "on" : ""}"></span>${k + 1}. ${esc(l.title)}</a>`));
    });
    el.appendChild(nav);
    const art = h(`<article class="card lesson"><h2>${esc(lesson.title)}</h2></article>`);
    renderBlocks(lesson.blocks, art);
    const key = `${m.id}.${lesson.id}`;
    const last = n === m.lessons.length - 1;
    const foot = h(`<div class="lesson-foot">
      ${n > 0 ? `<a class="btn btn-ghost" href="#/m/${m.id}/theory/${n - 1}">← Назад</a>` : "<span></span>"}
      <button class="btn btn-ok">${Store.data.lessons[key] ? "✓ Изучено — " : "Я изучил(а) урок — "}${last ? "к практике →" : "дальше →"}</button></div>`);
    $("button", foot).onclick = () => {
      Store.data.lessons[key] = true; Store.save();
      location.hash = last ? (m.tasks.length ? `#/m/${m.id}/tasks/0` : `#/m/${m.id}/quiz`) : `#/m/${m.id}/theory/${n + 1}`;
    };
    art.appendChild(foot);
    el.appendChild(art);
    return el;
  }

  const LEVEL_CLASS = { "Лёгкая": "l1", "Средняя": "l2", "Сложная": "l3" };

  function viewTasks(m, n) {
    n = Math.min(Math.max(0, n | 0), m.tasks.length - 1);
    const task = m.tasks[n];
    const key = `${m.id}.${task.id}`;
    const el = h(`<div class="container"></div>`);
    el.appendChild(moduleHeader(m, "tasks"));

    const list = h(`<div class="task-list"></div>`);
    const extraList = h(`<div class="task-list"></div>`);
    let mainNo = 0, extraNo = 0;
    m.tasks.forEach((t, k) => {
      const solved = Store.data.tasks[`${m.id}.${t.id}`];
      const label = t.extra ? `Доп. ${++extraNo}` : `Задача ${++mainNo}`;
      (t.extra ? extraList : list).appendChild(h(`<a class="task-item ${k === n ? "active" : ""}" href="#/m/${m.id}/tasks/${k}">
        <span class="check ${solved ? "on" : ""}"></span><span class="t-title">${label}. ${esc(t.title)}</span>
        <span class="level ${LEVEL_CLASS[t.level] || "l1"}">${esc(t.level)}</span></a>`));
    });
    el.appendChild(list);
    if (extraNo) {
      const p = moduleProgress(m);
      const det = h(`<details class="extra-tasks" ${task.extra ? "open" : ""}><summary>➕ Дополнительные задачи для отработки <span class="count">${p.X}/${extraNo}</span>
        <span class="small muted">— не обязательны для зачёта модуля</span></summary></details>`);
      det.appendChild(extraList);
      el.appendChild(det);
    }

    const card = h(`<div class="card"><h2 style="margin-top:0">${esc(task.title)}</h2><div class="statement">${task.statement}</div></div>`);
    const examples = task.tests.filter((t) => !t.hidden && (t.input !== undefined || t.files));
    if (examples.length) {
      const ex = h(`<div><h3>Примеры</h3><div class="examples"></div></div>`);
      examples.slice(0, 3).forEach((t) => {
        const exEl = h(`<div class="example"><div class="ex-row"><div class="ex-h">Ввод</div><div class="ex-h">Вывод</div></div>
          <div class="ex-row"><div><pre>${esc(fmtInput(t))}</pre></div><div><pre class="ex-out"></pre></div></div></div>`);
        const outEl = $(".ex-out", exEl);
        if (t.output !== undefined) outEl.textContent = t.output;
        else {
          outEl.textContent = "вычисляется…";
          expectedFor(task, t).then((o) => { outEl.textContent = o === null ? "(ошибка эталона)" : o.replace(/\n+$/, ""); });
        }
        $(".examples", ex).appendChild(exEl);
      });
      card.appendChild(ex);
    }
    if (task.hint) card.appendChild(h(`<details class="hint-box"><summary>💡 Подсказка</summary><div style="margin-top:8px">${task.hint}</div></details>`));

    const saveCode = debounce((v) => { Store.data.code[key] = v; Store.save(); }, 400);
    const checkBtn = h(`<button class="btn btn-ok btn-sm">✓ Проверить решение</button>`);
    const resetBtn = h(`<button class="btn btn-ghost btn-sm" title="Вернуть стартовый код">↺ Сброс</button>`);
    const ide = buildIDE({
      code: Store.data.code[key] ?? task.starter ?? "",
      onChange: saveCode,
      stdin: examples[0] ? examples[0].input || "" : "",
      files: examples[0] && examples[0].files,
      extraButtons: [checkBtn, resetBtn],
    });
    if (examples[0] && examples[0].files) {
      card.appendChild(h(`<p class="small muted">При запуске кнопкой «Запустить» рядом с программой создаются файлы из первого примера: ${Object.keys(examples[0].files).map((n) => `<code>${esc(n)}</code>`).join(", ")}. При проверке — файлы каждого теста.</p>`));
    }
    // Порядок кнопок: Сброс, Очистить, Проверить, Запустить
    resetBtn.onclick = () => { if (confirm("Вернуть стартовый код? Текущее решение будет потеряно.")) ide.cm.setValue(task.starter || ""); };
    card.appendChild(h(`<h3>Ваше решение</h3>`));
    card.appendChild(ide.root);

    const verdictBox = h(`<div></div>`);
    card.appendChild(verdictBox);

    const solBox = h(`<div></div>`);
    card.appendChild(solBox);
    const renderSolution = () => {
      const fails = Store.data.fails[key] || 0;
      solBox.innerHTML = "";
      if (!task.solution) return;
      if (Store.data.tasks[key] || fails >= 3) {
        const d = h(`<details class="hint-box"><summary>🔓 Эталонное решение</summary><div class="codeblock" style="margin-top:10px"></div></details>`);
        $(".codeblock", d).appendChild(highlight(task.solution));
        solBox.appendChild(d);
      } else {
        solBox.appendChild(h(`<p class="small muted" style="margin-top:10px">Эталонное решение откроется после решения задачи или после 3 неудачных проверок (сейчас: ${fails}).</p>`));
      }
    };
    renderSolution();

    checkBtn.onclick = async () => {
      checkBtn.disabled = true;
      const code = ide.cm.getValue();
      const box = h(`<div class="verdict run"><div class="verdict-head">⏳ Проверка… 0 / ${task.tests.length}</div>
        <table class="tests"><thead><tr><th>#</th><th>Ввод</th><th>Ожидается</th><th>Получено</th><th>Результат</th></tr></thead><tbody></tbody></table></div>`);
      verdictBox.innerHTML = ""; verdictBox.appendChild(box);
      const tbody = $("tbody", box);
      const results = await gradeTask(task, code, (r) => {
        $(".verdict-head", box).textContent = `⏳ Проверка… ${r.index + 1} / ${task.tests.length}`;
        const t = r.test;
        const hidden = t.hidden;
        let got = r.res.status === "timeout" ? "—" : (r.res.out || "") + (r.res.err ? "\n" + r.res.err : "");
        if (t.assert && r.res.status === "ok") got = "✓ " + (t.expect || "без ошибок");
        if (t.assert && r.res.status === "assert") got = r.res.err.trim().split("\n").pop().replace(/^AssertionError:\s*/, "");
        const shown = (s) => `<pre>${esc(s)}</pre>`;
        tbody.appendChild(h(`<tr><td>${r.index + 1}${hidden ? " 🔒" : ""}</td>
          <td>${hidden ? '<span class="t-wait">скрытый тест</span>' : shown(t.label || t.assert || fmtInput(t))}</td>
          <td>${hidden ? "—" : shown(r.expected ?? t.expect ?? "без ошибок")}</td>
          <td>${hidden && r.pass ? "—" : hidden ? '<span class="t-wait">скрыто</span>' : shown(got.trim() || "(пусто)")}</td>
          <td class="${r.pass ? "t-ok" : "t-bad"}">${r.pass ? "✓ пройден" : "✗ " + esc(r.reason)}</td></tr>`));
      });
      const passed = results.filter((r) => r.pass).length;
      const all = passed === results.length;
      box.className = "verdict " + (all ? "ok" : "bad");
      if (all) {
        $(".verdict-head", box).innerHTML = `🎉 Решение принято! Пройдено тестов: ${passed} из ${results.length}`;
        const first = !Store.data.tasks[key];
        Store.data.tasks[key] = true; Store.save();
        if (first) toast("Задача решена! +1 к прогрессу");
        renderSidebar();
        $$(".task-item")[n].querySelector(".check").classList.add("on");
      } else {
        const firstBad = results.find((r) => !r.pass);
        let msg = `Пройдено ${passed} из ${results.length}. Первая ошибка — тест №${firstBad.index + 1}${firstBad.test.hidden ? " (скрытый)" : ""}: ${firstBad.reason}.`;
        if (firstBad.test.hidden && firstBad.reason === "Неверный ответ") msg += " Подумайте о граничных случаях (ноль, отрицательные числа, равные значения).";
        $(".verdict-head", box).textContent = "✗ " + msg;
        const hint = ERROR_HINTS[firstBad.res.etype];
        if (hint) box.appendChild(h(`<div class="small" style="padding:10px 16px;border-top:1px solid var(--border)">💡 ${esc(hint)}</div>`));
        Store.data.fails[key] = (Store.data.fails[key] || 0) + 1; Store.save();
      }
      renderSolution();
      checkBtn.disabled = false;
    };

    el.appendChild(card);
    const nextIdx = m.tasks.findIndex((t, k) => k > n && !!t.extra === !!task.extra);
    if (nextIdx >= 0) el.appendChild(h(`<div class="lesson-foot" style="border:0"><span></span><a class="btn btn-ghost" href="#/m/${m.id}/tasks/${nextIdx}">Следующая задача →</a></div>`));
    else el.appendChild(h(`<div class="lesson-foot" style="border:0"><span></span><a class="btn btn-primary" href="#/m/${m.id}/quiz">Перейти к тесту →</a></div>`));
    return el;
  }

  function scoreRing(pct) {
    const r = 52, c = 2 * Math.PI * r;
    const color = pct >= QUIZ_PASS ? "var(--ok)" : pct >= 40 ? "var(--warn)" : "var(--bad)";
    return `<div class="score-ring"><svg width="120" height="120"><circle class="bg" cx="60" cy="60" r="${r}"/>
      <circle class="fg" cx="60" cy="60" r="${r}" stroke="${color}" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct / 100)}"/></svg>
      <div class="v">${pct}%</div></div>`;
  }

  // Модуль может иметь один тест (m.quiz) или несколько вариантов (m.quizzes = [{id, title, questions}]).
  function viewQuiz(m, vn) {
    const el = h(`<div class="container"></div>`);
    el.appendChild(moduleHeader(m, "quiz"));
    let quiz = m.quiz, recKey = m.id, title = "Итоговый тест модуля";
    if (m.quizzes) {
      vn = Math.min(Math.max(0, vn | 0), m.quizzes.length - 1);
      const v = m.quizzes[vn];
      quiz = v.questions; recKey = `${m.id}:${v.id}`; title = `Вариант ${vn + 1}. ${v.title}`;
      const nav = h(`<div class="lesson-nav"></div>`);
      m.quizzes.forEach((x, k) => {
        const r = Store.data.quiz[`${m.id}:${x.id}`];
        nav.appendChild(h(`<a class="lesson-pill ${k === vn ? "active" : ""}" href="#/m/${m.id}/quiz/${k}"><span class="check ${r && r.passed ? "on" : ""}"></span>Вариант ${k + 1}${r ? ` · ${r.best}%` : ""}</a>`));
      });
      el.appendChild(nav);
    }
    const maxScore = quiz.reduce((s, q) => s + qMax(q), 0);
    const prev = Store.data.quiz[recKey];
    const intro = h(`<div class="card" style="margin-bottom:16px"><div class="quiz-intro">
      <div style="flex:1;min-width:240px"><h2 style="margin-top:0">${esc(title)}</h2>
      <p class="muted" style="margin:0">${quiz.length} вопросов · максимум ${maxScore} баллов · зачёт от ${QUIZ_PASS}%.<br>
      ${m.quizzes ? "Вопросы опираются на общий контекст — ситуацию и программу, как в ЕНТ. Модуль зачтён, если сдан хотя бы один вариант." : "Типы вопросов: один ответ, несколько ответов, соответствие, ввод ответа."}</p></div>
      ${prev ? `<div><div class="small muted">Лучший результат</div><b style="font-size:24px">${prev.best}%</b> ${prev.passed ? '<span class="badge ok">зачёт</span>' : ""}<div class="small muted">попыток: ${prev.attempts}</div></div>` : ""}
    </div></div>`);
    el.appendChild(intro);

    const state = {};
    const seed = Date.now() % 1000 + 1;
    const qBox = h(`<div></div>`);
    let lastCtx = null;
    quiz.forEach((q, i) => {
      const ctx = q.ctx && m.contexts ? m.contexts[q.ctx] : null;
      qBox.appendChild(renderQuizQuestion(q, i, state, seed, ctx, q.ctx !== lastCtx));
      lastCtx = q.ctx;
    });
    el.appendChild(qBox);

    const bar = h(`<div class="card quiz-sticky"><span class="small muted">Ответьте на вопросы и нажмите «Завершить тест».</span>
      <button class="btn btn-primary">Завершить тест</button></div>`);
    el.appendChild(bar);

    $("button", bar).onclick = () => {
      const unanswered = quiz.filter((q, i) => {
        const a = state[i];
        if (q.type === "matching") return !a || Object.values(a).filter(Boolean).length < q.pairs.length;
        if (q.type === "multiple") return !a || !a.length;
        return a === undefined || a === "";
      }).length;
      if (unanswered && !confirm(`Без ответа (полностью или частично): ${unanswered}. Всё равно завершить?`)) return;

      let score = 0;
      const wrong = [];
      $$(".q", qBox).forEach((card, i) => {
        const got = showQuizReview(card, quiz[i], state[i]);
        score += got;
        if (got < qMax(quiz[i])) wrong.push(i + 1);
      });
      const pct = Math.round((score / maxScore) * 100);
      const passed = pct >= QUIZ_PASS;
      const keys = recKey === m.id ? [m.id] : [recKey, m.id];   // для вариантов храним и общий итог модуля
      keys.forEach((key) => {
        const rec = Store.data.quiz[key] || { best: 0, attempts: 0, passed: false };
        rec.attempts++; rec.last = pct; rec.best = Math.max(rec.best, pct); rec.passed = rec.passed || passed;
        Store.data.quiz[key] = rec;
      });
      Store.save();
      renderSidebar();

      const res = h(`<div class="card" style="margin-bottom:16px">
        <div class="score-card">${scoreRing(pct)}
          <div><h2 style="margin:0 0 4px">${passed ? "Тест сдан! 🎉" : "Тест не сдан"}</h2>
          <p style="margin:0 0 4px">Баллы: <b>${score} из ${maxScore}</b> · Процент: <b>${pct}%</b></p>
          <p class="muted small" style="margin:0">${wrong.length ? `Вопросы с ошибками: ${wrong.join(", ")}. Ниже — разбор каждого вопроса.` : "Ни одной ошибки — отличная работа!"}</p></div></div>
        <div class="btn-row"><button class="btn btn-primary" data-a="again">Пройти заново</button>
        <a class="btn btn-ghost" href="#/m/${m.id}/theory/0">Повторить теорию</a>
        ${nextModuleLink(m)}</div></div>`);
      $('[data-a="again"]', res).onclick = () => render();
      intro.replaceWith(res);
      bar.remove();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return el;
  }

  function nextModuleLink(m) {
    const i = COURSE.modules.indexOf(m);
    const nm = COURSE.modules[i + 1];
    return nm ? `<a class="btn btn-ghost" href="#/m/${nm.id}">Следующий модуль →</a>` : "";
  }

  function viewSandbox() {
    const el = h(`<div class="container">
      <div class="crumbs"><a href="#/">Курс</a> / Песочница</div>
      <div class="page-head"><h1>🧪 Песочница</h1><span class="muted small">Свободный запуск Python 3 в браузере. Код сохраняется автоматически.</span></div>
    </div>`);
    const save = debounce((v) => { Store.data.sandbox = v; Store.save(); }, 400);
    const defaultCode = `# Напишите свою программу и нажмите «Запустить» (Ctrl+Enter)\nimport math\n\nname = input("Как вас зовут? ")\nprint("Привет,", name + "!")\nprint("√2 =", round(math.sqrt(2), 4))\n`;
    const ide = buildIDE({ code: Store.data.sandbox || defaultCode, onChange: save, stdin: Store.data.sandboxInput ?? "Айгерим" });
    ide.stdinEl.addEventListener("input", debounce(() => { Store.data.sandboxInput = ide.stdinEl.value; Store.save(); }, 400));
    el.appendChild(h(`<div class="card"></div>`)).appendChild(ide.root);
    el.appendChild(h(`<div class="note" style="margin-top:16px"><div class="note-title">Как работает ввод</div>
      <p>Браузер не может «остановиться» на <code>input()</code>, поэтому данные вводятся заранее в поле «Ввод (stdin)»: каждая строка поля — результат одного вызова <code>input()</code>. Если программа зависла (бесконечный цикл), она будет остановлена через ${RUN_TIMEOUT / 1000} с.</p></div>`));
    return el;
  }

  /* ========== 8. Сайдбар, роутер, запуск ========== */
  function ring(pct, done) {
    const r = 13, c = 2 * Math.PI * r;
    return `<svg width="30" height="30"><circle class="ring-bg" cx="15" cy="15" r="${r}" fill="none" stroke-width="2.5"/>
      <circle class="ring-fg" cx="15" cy="15" r="${r}" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct / 100)}"/></svg>`;
  }

  function renderSidebar() {
    const route = parseRoute();
    const o = overallProgress();
    const sb = $("#sidebar");
    sb.innerHTML = "";
    sb.appendChild(h(`<div class="side-overall"><div class="row"><span>Прогресс курса</span><b>${o.pct}%</b></div><div class="bar"><span style="width:${o.pct}%"></span></div></div>`));
    sb.appendChild(h(`<a class="side-link ${route.view === "home" ? "active" : ""}" href="#/">🏠 Главная</a>`));
    sb.appendChild(h(`<a class="side-link ${route.view === "sandbox" ? "active" : ""}" href="#/sandbox">🧪 Песочница</a>`));
    sb.appendChild(h(`<div class="side-title">Модули</div>`));
    COURSE.modules.forEach((m, i) => {
      const p = moduleProgress(m);
      const active = route.mid === m.id;
      const ready = isReady(m);
      const node = h(`<div class="mod ${active ? "active" : ""} ${ready ? "" : "soon"}">
        <a class="mod-head" href="#/m/${m.id}">
          <span class="mod-num ${p.complete ? "done" : ""}">${ring(p.pct, p.complete)}<span>${i + 1}</span></span>
          <span class="mod-info"><div class="mod-title">${esc(m.title)}</div>
            <div class="mod-sub">${ready ? (p.complete ? "Пройден ✓" : `${p.done} из ${p.total} шагов`) : "В разработке"}</div></span>
        </a></div>`);
      if (ready && active) {
        const items = h(`<div class="mod-items"></div>`);
        const lessonsDone = p.L === m.lessons.length, tasksDone = p.T === p.mainTotal;
        items.appendChild(h(`<a class="${route.tab === "theory" ? "active" : ""}" href="#/m/${m.id}/theory/0"><span class="check ${lessonsDone ? "on" : ""}"></span>Теория (${p.L}/${m.lessons.length})</a>`));
        if (m.tasks.length) items.appendChild(h(`<a class="${route.tab === "tasks" ? "active" : ""}" href="#/m/${m.id}/tasks/0"><span class="check ${tasksDone ? "on" : ""}"></span>Практика (${p.T}/${p.mainTotal}${p.X ? ` + ${p.X} доп.` : ""})</a>`));
        items.appendChild(h(`<a class="${route.tab === "quiz" ? "active" : ""}" href="#/m/${m.id}/quiz"><span class="check ${p.Q ? "on" : ""}"></span>Тест${p.quiz ? ` (${p.quiz.best}%)` : ""}</a>`));
        node.appendChild(items);
      }
      sb.appendChild(node);
    });
  }

  function parseRoute() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (!parts.length) return { view: "home" };
    if (parts[0] === "sandbox") return { view: "sandbox" };
    if (parts[0] === "m") return { view: "module", mid: parts[1], tab: parts[2] || "theory", n: parseInt(parts[3] || "0", 10) || 0 };
    return { view: "home" };
  }

  function render() {
    const r = parseRoute();
    let view;
    if (r.view === "sandbox") view = viewSandbox();
    else if (r.view === "module") {
      const m = getModule(r.mid);
      if (!m) view = viewHome();
      else if (!isReady(m)) view = viewSoon(m);
      else if (r.tab === "tasks" && m.tasks.length) view = viewTasks(m, r.n);
      else if (r.tab === "quiz") view = viewQuiz(m, r.n);
      else view = viewTheory(m, r.n);
    } else view = viewHome();
    const root = app();
    root.innerHTML = "";
    root.appendChild(view);
    renderSidebar();
    document.body.classList.remove("menu-open");
    window.scrollTo(0, 0);
    // CodeMirror нужно обновить после вставки в DOM
    $$(".CodeMirror", root).forEach((c) => c.CodeMirror && c.CodeMirror.refresh());
  }

  // Самопроверка контента: прогоняет эталонные решения через тесты. Вызов в консоли: PyStart.selfTest()
  async function selfTest() {
    const report = [];
    for (const m of COURSE.modules.filter(isReady)) {
      for (const t of m.tasks) {
        if (!t.solution) { report.push(`${m.id}.${t.id}: нет эталонного решения`); continue; }
        const res = await gradeTask(t, t.solution);
        const bad = res.filter((r) => !r.pass);
        report.push(`${m.id}.${t.id}: ${res.length - bad.length}/${res.length}` + (bad.length ? " ✗ " + bad.map((b) => `#${b.index + 1} got=${JSON.stringify(b.res.out + b.res.err)} exp=${JSON.stringify(b.test.output)}`).join(" | ") : " ✓"));
      }
      (m.quiz || m.quizzes.flatMap((v) => v.questions)).forEach((q, i) => {
        if (q.ctx && !(m.contexts || {})[q.ctx]) report.push(`${m.id} quiz#${i + 1}: нет контекста ${q.ctx}`);
        if (q.type === "single" && !(q.answer >= 0 && q.answer < q.options.length)) report.push(`${m.id} quiz#${i + 1}: answer вне диапазона`);
        if (q.type === "multiple" && q.answer.some((a) => a >= q.options.length)) report.push(`${m.id} quiz#${i + 1}: answer вне диапазона`);
      });
    }
    console.log(report.join("\n"));
    return report;
  }

  function init() {
    Store.load();
    $("#themeBtn").onclick = () => {
      const t = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", t);
      try { localStorage.setItem("pystart.theme", t); } catch (e) {}
    };
    $("#menuBtn").onclick = () => document.body.classList.toggle("menu-open");
    $("#backdrop").onclick = () => document.body.classList.remove("menu-open");
    window.addEventListener("hashchange", render);
    render();
    Py.init();
    window.PyStart = { Py, Store, selfTest, gradeTask, COURSE };
  }

  if (!COURSE) {
    document.getElementById("app").innerHTML = "<p style='padding:24px'>Не найден файл courses_data.js — проверьте, что он лежит рядом с index.html.</p>";
  } else init();
})();
