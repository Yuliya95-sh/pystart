/* =========================================================
   Easy Python — страница учителя (#/teacher).
   Читает журнал из Google-таблицы по паролю учителя:
   сводка по ученикам, лента действий, история каждого ученика.
   ========================================================= */
(function () {
  "use strict";
  const LS_KEY = "ep.teacherKey";
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const h = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const getKey = () => { try { return localStorage.getItem(LS_KEY) || ""; } catch (e) { return ""; } };
  const setKey = (k) => { try { k ? localStorage.setItem(LS_KEY, k) : localStorage.removeItem(LS_KEY); } catch (e) {} };
  const endpoint = () => (window.EP_CONFIG && window.EP_CONFIG.endpoint) || (() => { try { return JSON.parse(localStorage.getItem("ep.endpoint.override") || '""'); } catch (e) { return ""; } })();

  const TYPE = {
    login: ["👤", "Вход"], open: ["👁", "Открыл(а)"], lesson: ["📖", "Урок изучен"],
    check: ["💻", "Проверка задачи"], quiz: ["📝", "Тест"], run: ["▶", "Запуск"],
  };
  let state = { data: null, filterCls: "", search: "", sort: "last", showOpens: false, timer: null };

  function when(v) {
    const d = new Date(v);
    if (isNaN(d)) return esc(v);
    const s = (Date.now() - d) / 1000;
    const rel = s < 60 ? "только что" : s < 3600 ? `${Math.floor(s / 60)} мин назад` : s < 86400 ? `${Math.floor(s / 3600)} ч назад` : s < 7 * 86400 ? `${Math.floor(s / 86400)} дн назад` : "";
    const abs = d.toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
    return rel ? `<span title="${abs}">${rel}</span>` : abs;
  }
  const modTitle = (C, id) => { const i = C.modules.findIndex((m) => m.id === id); return i < 0 ? id || "" : `М${i + 1}. ${C.modules[i].title}`; };
  const ok = (v) => v === true || v === "да";
  const bad = (v) => v === false || v === "нет";

  async function api(params) {
    const u = new URL(endpoint());
    Object.entries(params).forEach(([k, v]) => u.searchParams.set(k, v));
    u.searchParams.set("key", getKey());
    u.searchParams.set("_", Date.now());
    const r = await fetch(u);
    return r.json();
  }

  // Google-таблица превращала результат «1/5» в дату. Восстанавливаем такие старые записи:
  // число пройденных тестов не больше общего, поэтому берём меньшее из «день / месяц».
  function fixScore(s) {
    s = String(s ?? "");
    if (/^\d{4}-\d{2}-\d{2}T/.test(s)) {
      const d = new Date(s);
      const a = d.getDate(), b = d.getMonth() + 1;
      return `${Math.min(a, b)} из ${Math.max(a, b)}`;
    }
    return s.replace(/^(\d+)\/(\d+)$/, "$1 из $2");
  }

  function resultBadge(e) {
    if (e.type === "check") {
      if (ok(e.ok)) return `<span class="tl-badge good">✓ решено</span>`;
      const sc = fixScore(e.score);
      return `<span class="tl-badge bad">✗ ${esc(sc)}${sc ? " тестов" : ""}</span>`;
    }
    if (e.type === "quiz") return `<span class="tl-badge ${ok(e.ok) ? "good" : "bad"}">${esc(e.score)}% · ${ok(e.ok) ? "сдан" : "не сдан"}</span>`;
    if (e.type === "lesson") return `<span class="tl-badge good">✓ изучен</span>`;
    return "";
  }

  // Подряд идущие одинаковые действия одного ученика (например, 5 неудачных проверок одной задачи) — одной строкой
  function compact(list) {
    const out = [];
    for (const e of list) {
      const p = out[out.length - 1];
      if (p && p.sid === e.sid && p.type === e.type && p.module === e.module && p.item === e.item && String(p.ok) === String(e.ok) && e.type !== "quiz") {
        p.times = (p.times || 1) + 1;
        continue;
      }
      out.push(Object.assign({}, e));
    }
    return out;
  }

  function eventLine(C, e, withName) {
    const [ic, label] = TYPE[e.type] || ["•", e.type];
    const what = e.type === "check" ? `Задача «${esc(e.title)}»` : e.type === "quiz" ? esc(e.title || "Тест") : e.type === "lesson" ? `Урок «${esc(e.title)}»` : esc(e.title || label);
    return `<div class="tl-row ev-${esc(e.type)}">
      <span class="tl-time">${when(e.ts || e.at)}</span>
      <div class="tl-body">
        ${withName ? `<div class="tl-who"><b>${esc(e.name)}</b> <span class="tl-cls">${esc(e.cls)}</span></div>` : ""}
        <div class="tl-what"><span class="tl-ic">${ic}</span> ${what}${e.times > 1 ? ` <span class="tl-times">× ${e.times} ${e.times < 5 ? "попытки" : "попыток"}</span>` : ""}</div>
        <div class="tl-meta">${e.module ? esc(modTitle(C, e.module)) : label}${e.detail ? ` · ${esc(e.detail)}` : ""}</div>
      </div>
      <span class="tl-res">${resultBadge(e)}</span></div>`;
  }

  function view(C) {
    const el = h(`<div class="container teacher"></div>`);
    clearInterval(state.timer);
    if (!endpoint()) {
      el.appendChild(h(`<div class="card"><span class="ep-label">Для учителя</span><h1 style="margin:8px 0 10px">Журнал учеников</h1>
        <p>Журнал ещё не подключён. Нужно один раз создать Google-таблицу со скриптом и вписать её адрес в файл <code>config.js</code> — инструкция в файле <code>teacher/НАСТРОЙКА.md</code> в репозитории сайта.</p>
        <p class="muted small">Пока журнал выключен, ученики занимаются без входа, прогресс хранится только в их браузере.</p></div>`));
      return el;
    }
    if (!getKey()) {
      const f = h(`<form class="card" style="max-width:460px"><span class="ep-label">Для учителя</span><h1 style="margin:8px 0 10px">Вход для учителя</h1>
        <p class="muted small">Введите пароль учителя (значение TEACHER_KEY в скрипте таблицы). Он сохранится только в этом браузере.</p>
        <input type="password" name="k" required placeholder="Пароль учителя" style="width:100%;height:44px;padding:0 12px;border-radius:12px;border:1px solid var(--border);background:var(--surface);color:var(--text);font:inherit">
        <div class="small t-bad" style="min-height:1.4em;margin:6px 0"></div>
        <button class="btn btn-primary">Войти</button></form>`);
      f.onsubmit = async (e) => {
        e.preventDefault(); setKey(f.k.value.trim());
        $err.textContent = "Проверяем…";
        try { const j = await api({ action: "summary" }); if (!j.ok) { setKey(""); $err.textContent = j.error || "Ошибка"; return; } state.data = j; location.hash = "#/teacher"; window.dispatchEvent(new HashChangeEvent("hashchange")); }
        catch (x) { setKey(""); $err.textContent = "Нет связи с таблицей. Проверьте адрес в config.js."; }
      };
      const $err = f.querySelector(".t-bad");
      el.appendChild(f);
      return el;
    }

    const route = location.hash.split("/");
    const sid = route[2] ? decodeURIComponent(route[2]) : "";
    const head = h(`<div class="page-head"><div><span class="ep-label">Для учителя</span><h1 style="margin:6px 0 0">${sid ? "История ученика" : "Журнал учеников"}</h1></div>
      <div class="btn-row">${sid ? `<a class="btn btn-ghost btn-sm" href="#/teacher">← Все ученики</a>` : ""}<button class="btn btn-ghost btn-sm" data-a="reload">↻ Обновить</button><button class="btn btn-ghost btn-sm" data-a="out">Выйти</button></div></div>`);
    el.appendChild(head);
    const body = h(`<div><p class="muted">Загрузка…</p></div>`);
    el.appendChild(body);
    head.querySelector('[data-a="out"]').onclick = () => { setKey(""); state.data = null; window.dispatchEvent(new HashChangeEvent("hashchange")); };
    const load = async () => {
      try {
        const j = await api({ action: "summary" });
        if (!j.ok) { body.innerHTML = `<p class="t-bad">${esc(j.error)}</p>`; if (/парол/i.test(j.error || "")) setKey(""); return; }
        state.data = j;
        if (sid) await renderStudent(C, body, sid); else renderAll(C, body);
      } catch (x) { body.innerHTML = `<p class="t-bad">Нет связи с таблицей. Попробуйте обновить позже.</p>`; }
    };
    head.querySelector('[data-a="reload"]').onclick = load;
    if (state.data && !sid) renderAll(C, body);
    load();
    if (!sid) state.timer = setInterval(() => { if (location.hash.startsWith("#/teacher") && document.visibilityState === "visible") load(); else clearInterval(state.timer); }, 60000);
    return el;
  }

  function renderAll(C, body) {
    const { students, events } = state.data;
    const classes = [...new Set(students.map((s) => String(s.cls)))].sort();
    const q = state.search.toLowerCase();
    let list = students.filter((s) => (!state.filterCls || String(s.cls) === state.filterCls) && (!q || String(s.name).toLowerCase().includes(q)));
    const sorters = { last: (a, b) => new Date(b.last) - new Date(a.last), name: (a, b) => String(a.name).localeCompare(String(b.name), "ru"), pct: (a, b) => b.pct - a.pct };
    list.sort(sorters[state.sort]);
    const ready = C.modules.filter((m) => m.status !== "soon");
    const dayAgo = Date.now() - 86400000;
    const activeToday = students.filter((s) => new Date(s.last) > dayAgo).length;
    const avg = students.length ? Math.round(students.reduce((a, s) => a + (Number(s.pct) || 0), 0) / students.length) : 0;

    body.innerHTML = "";
    body.appendChild(h(`<div class="stats ep-stats" style="margin-bottom:16px">
      <div class="stat hl"><b>${students.length}</b><span>учеников</span></div>
      <div class="stat"><b>${activeToday}</b><span>активны за 24 часа</span></div>
      <div class="stat"><b>${avg}%</b><span>средний прогресс</span></div>
      <div class="stat"><b>${events.filter((e) => e.type === "check" && ok(e.ok)).length}</b><span>задач решено (в ленте)</span></div></div>`));

    const tools = h(`<div class="t-tools">
      <select data-f="cls"><option value="">Все классы</option>${classes.map((c) => `<option ${c === state.filterCls ? "selected" : ""}>${esc(c)}</option>`).join("")}</select>
      <input type="text" data-f="q" placeholder="Поиск по имени" value="${esc(state.search)}">
      <select data-f="sort"><option value="last" ${state.sort === "last" ? "selected" : ""}>Сначала активные</option><option value="name" ${state.sort === "name" ? "selected" : ""}>По алфавиту</option><option value="pct" ${state.sort === "pct" ? "selected" : ""}>По прогрессу</option></select></div>`);
    tools.querySelector('[data-f="cls"]').onchange = (e) => { state.filterCls = e.target.value; renderAll(C, body); };
    tools.querySelector('[data-f="sort"]').onchange = (e) => { state.sort = e.target.value; renderAll(C, body); };
    tools.querySelector('[data-f="q"]').oninput = (e) => { state.search = e.target.value; clearTimeout(state.st); state.st = setTimeout(() => { renderAll(C, body); const i = body.querySelector('[data-f="q"]'); i.focus(); i.setSelectionRange(i.value.length, i.value.length); }, 250); };
    body.appendChild(tools);

    if (!students.length) {
      body.appendChild(h(`<div class="card"><p style="margin:0">Пока никто не входил. Как только ученик введёт имя на сайте, он появится здесь.</p></div>`));
    } else {
      const tbl = h(`<div class="t-table-wrap card" style="padding:0"><table class="t-table"><thead><tr>
        <th>Ученик</th><th>Класс</th><th>Прогресс</th><th>Уроки</th><th>Задачи</th><th>Отработка</th><th>Тесты</th>
        ${ready.map((m, i) => `<th title="${esc(m.title)}">М${C.modules.indexOf(m) + 1}</th>`).join("")}<th>Активность</th></tr></thead><tbody></tbody></table></div>`);
      const tb = tbl.querySelector("tbody");
      list.forEach((s) => {
        const cells = ready.map((m) => {
          const v = s.mods && s.mods[m.id] != null ? Number(s.mods[m.id]) : 0;
          return `<td class="t-heat" style="--v:${v}" title="${esc(m.title)}: ${v}%">${v ? v : "·"}</td>`;
        }).join("");
        const tr = h(`<tr data-sid="${esc(s.sid)}"><td><a href="#/teacher/${encodeURIComponent(s.sid)}"><b>${esc(s.name)}</b></a></td><td>${esc(s.cls)}</td>
          <td><div class="t-pct"><div class="bar"><span style="width:${Number(s.pct) || 0}%"></span></div><b>${Number(s.pct) || 0}%</b></div></td>
          <td>${s.lessons}</td><td>${s.tasks}</td><td>${s.extra}</td><td>${s.quizzes}</td>${cells}<td class="nowrap">${when(s.last)}</td></tr>`);
        tr.onclick = (e) => { if (!e.target.closest("a")) location.hash = `#/teacher/${encodeURIComponent(s.sid)}`; };
        tb.appendChild(tr);
      });
      body.appendChild(tbl);
      body.appendChild(h(`<p class="small muted">М1, М2… — процент прохождения модуля (уроки, задачи, отработка и тест). Нажмите на ученика, чтобы открыть всю его историю.</p>`));
    }

    const feed = h(`<div class="card"><div class="t-feed-head"><h2 style="margin:0">Лента действий</h2>
      <label class="small"><input type="checkbox" ${state.showOpens ? "checked" : ""}> показывать открытия страниц</label></div><div class="tl"></div></div>`);
    feed.querySelector("input").onchange = (e) => { state.showOpens = e.target.checked; renderAll(C, body); };
    const evs = compact(events.filter((e) => (state.showOpens || e.type !== "open") && (!state.filterCls || String(e.cls) === state.filterCls))).slice(0, 150);
    feed.querySelector(".tl").innerHTML = evs.length ? evs.map((e) => eventLine(C, e, true)).join("") : `<p class="muted">Пока пусто.</p>`;
    body.appendChild(h(`<h2>Последние действия</h2>`));
    body.appendChild(feed);
  }

  async function renderStudent(C, body, sid) {
    const s = state.data.students.find((x) => x.sid === sid);
    if (!s) { body.innerHTML = `<p>Ученик не найден.</p>`; return; }
    const j = await api({ action: "student", sid });
    const events = (j.events || []);
    const checks = events.filter((e) => e.type === "check");
    const quizzes = events.filter((e) => e.type === "quiz");
    const solvedSet = new Set(checks.filter((e) => ok(e.ok)).map((e) => e.module + "." + e.item));
    const tries = checks.length;

    body.innerHTML = "";
    body.appendChild(h(`<div class="card" style="margin-bottom:14px"><h2 style="margin:0 0 4px;text-transform:none">${esc(s.name)} <span class="muted" style="font-weight:500">${esc(s.cls)}</span></h2>
      <p class="small muted" style="margin:0">Первый вход: ${when(s.first)} · последняя активность: ${when(s.last)} · действий: ${s.actions}</p></div>`));
    body.appendChild(h(`<div class="stats ep-stats" style="margin-bottom:16px">
      <div class="stat hl"><b>${Number(s.pct) || 0}%</b><span>общий прогресс</span></div>
      <div class="stat"><b>${s.lessons}</b><span>уроков изучено</span></div>
      <div class="stat"><b>${s.tasks} + ${s.extra}</b><span>задач решено (основные + отработка)</span></div>
      <div class="stat"><b>${tries}</b><span>проверок решений${tries ? `, успешных ${Math.round(checks.filter((e) => ok(e.ok)).length / tries * 100)}%` : ""}</span></div>
      <div class="stat"><b>${s.quizzes}</b><span>тестов сдано</span></div></div>`));

    const mods = h(`<div class="card" style="margin-bottom:14px"><h2 style="margin-top:0">По модулям</h2><div class="t-mods"></div></div>`);
    C.modules.filter((m) => m.status !== "soon").forEach((m) => {
      const v = s.mods && s.mods[m.id] != null ? Number(s.mods[m.id]) : 0;
      const mine = quizzes.filter((e) => e.module === m.id);
      const qz = mine.filter((e) => !String(e.item).includes(":bank"));
      const tr = mine.filter((e) => String(e.item).includes(":bank"));
      const best = qz.length ? Math.max(...qz.map((e) => Number(e.score) || 0)) : null;
      const trBest = tr.length ? Math.max(...tr.map((e) => Number(e.score) || 0)) : null;
      mods.querySelector(".t-mods").appendChild(h(`<div class="t-mod"><div class="small"><b>${esc(modTitle(C, m.id))}</b></div>
        <div class="t-pct"><div class="bar"><span style="width:${v}%"></span></div><b>${v}%</b></div>
        <div class="small muted">${best != null ? `тест: лучший ${best}%, попыток ${qz.length}` : "тест не начат"}${trBest != null ? ` · тренажёр: лучший ${trBest}%, попыток ${tr.length}` : ""}</div></div>`));
    });
    body.appendChild(mods);

    // Трудные задачи: много неудачных проверок
    const byTask = {};
    checks.forEach((e) => { const k = e.module + "." + e.item; (byTask[k] = byTask[k] || { e, fails: 0, solved: false }); if (ok(e.ok)) byTask[k].solved = true; else byTask[k].fails++; });
    const hard = Object.values(byTask).filter((t) => t.fails >= 3).sort((a, b) => b.fails - a.fails).slice(0, 10);
    if (hard.length) {
      body.appendChild(h(`<div class="card" style="margin-bottom:14px"><h2 style="margin-top:0">Где трудно</h2>
        ${hard.map((t) => `<div class="tl-row"><span class="tl-time">⚠️</span><div class="tl-body"><div class="tl-what">Задача «${esc(t.e.title)}»</div><div class="tl-meta">${esc(modTitle(C, t.e.module))}</div></div>
          <span class="tl-res"><span class="tl-badge ${t.solved ? "good" : "bad"}">${t.fails} неудачных · ${t.solved ? "в итоге решил(а)" : "не решено"}</span></span></div>`).join("")}</div>`));
    }

    const tl = h(`<div class="card"><div class="t-feed-head"><h2 style="margin:0">Вся история</h2>
      <label class="small"><input type="checkbox" ${state.showOpens ? "checked" : ""}> показывать открытия страниц</label></div><div class="tl"></div></div>`);
    const draw = () => {
      const evs = events.filter((e) => state.showOpens || e.type !== "open");
      tl.querySelector(".tl").innerHTML = evs.length ? "" : `<p class="muted">Пока пусто.</p>`;
      evs.forEach((e) => {
        const row = h(eventLine(C, e, false));
        if (e.code) {
          const d = h(`<details class="t-code"><summary class="small">код решения</summary><pre></pre></details>`);
          d.querySelector("pre").textContent = e.code;
          row.querySelector(".tl-body").appendChild(d);
        }
        tl.querySelector(".tl").appendChild(row);
      });
    };
    tl.querySelector("input").onchange = (e) => { state.showOpens = e.target.checked; draw(); };
    draw();
    body.appendChild(tl);
  }

  window.EPTeacher = { view };
})();
