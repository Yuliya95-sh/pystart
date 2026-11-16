/* =========================================================
   Easy Python — журнал действий ученика.
   Ученик один раз вводит имя, класс и PIN. Действия (уроки, проверки
   задач, тесты, открытые страницы) копятся в очереди в localStorage
   и отправляются в Google-таблицу учителя (config.js → endpoint).
   Если связи нет, очередь ждёт и уйдёт позже — история не теряется.
   ========================================================= */
(function () {
  "use strict";
  const LS_ID = "ep.student.v1";
  const LS_Q = "ep.queue.v1";
  const MAX_Q = 3000;

  const ls = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} },
  };
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function endpoint() {
    const c = (window.EP_CONFIG && window.EP_CONFIG.endpoint) || "";
    return c || ls.get("ep.endpoint.override", "");   // переопределение — только для локальной проверки
  }

  async function sha256(s) {
    try {
      const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
      return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
    } catch (e) { return "plain:" + s; }
  }
  const pinHash = (name, cls, pin) => sha256(`ep|${norm(name)}|${norm(cls)}|${pin}`);
  const norm = (s) => String(s || "").trim().toLowerCase().replace(/\s+/g, " ").replace(/ё/g, "е");
  const newId = () => "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

  const T = {
    student: ls.get(LS_ID, null),
    queue: ls.get(LS_Q, []),
    hooks: { snapshot: () => null, progress: () => null, onRestore: () => {} },
    sending: false,
    lastOpen: "",
    enabled() { return !!endpoint(); },

    init(hooks) {
      Object.assign(this.hooks, hooks || {});
      if (!this.enabled()) return;
      setInterval(() => this.flush(), 15000);
      addEventListener("online", () => this.flush());
      addEventListener("pagehide", () => this.flush(true));
      document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") this.flush(true); });
      if (!this.student) this.showGate();
      else this.flush();
    },

    log(ev) {
      if (!this.enabled() || !this.student) return;
      ev = Object.assign({ ts: new Date().toISOString(), sid: this.student.sid, name: this.student.name, cls: this.student.cls }, ev);
      if (ev.code && ev.code.length > 20000) ev.code = ev.code.slice(0, 20000);
      this.queue.push(ev);
      if (this.queue.length > MAX_Q) this.queue = this.queue.slice(-MAX_Q);
      ls.set(LS_Q, this.queue);
      // важные события отправляем сразу, просмотры страниц — пачкой
      if (ev.type !== "open") setTimeout(() => this.flush(), 300);
    },

    open(route, title) {
      const key = route + "|" + title;
      if (key === this.lastOpen) return;
      this.lastOpen = key;
      this.log({ type: "open", module: route.mid || "", item: route.view === "module" ? `${route.tab}/${route.n}` : route.view, title });
    },

    payload(events) {
      return JSON.stringify({ student: this.student, events, snapshot: this.hooks.snapshot(), progress: this.hooks.progress() });
    },

    async flush(beacon) {
      const url = endpoint();
      if (!url || !this.student || this.sending) return;
      const batch = this.queue.slice(0, 150);
      // даже без новых событий иногда отправляем снимок прогресса
      if (!batch.length && !this._dirtySnap) return;
      const body = this.payload(batch);
      if (beacon && navigator.sendBeacon) {
        if (navigator.sendBeacon(url, new Blob([body], { type: "text/plain;charset=utf-8" }))) this.drop(batch.length);
        return;
      }
      this.sending = true;
      try {
        // text/plain — «простой» запрос без предварительной проверки CORS
        const r = await fetch(url, { method: "POST", body, headers: { "Content-Type": "text/plain;charset=utf-8" }, redirect: "follow" });
        const j = await r.json().catch(() => ({ ok: r.ok }));
        if (j.ok) { this.drop(batch.length); this._dirtySnap = false; }
      } catch (e) { /* нет связи — попробуем позже */ }
      this.sending = false;
      if (this.queue.length) setTimeout(() => this.flush(), 2000);
    },
    drop(n) { this.queue = this.queue.slice(n); ls.set(LS_Q, this.queue); },
    markSnapshot() { this._dirtySnap = true; },

    /* ---------- окно входа ---------- */
    showGate(mode) {
      if (location.hash.startsWith("#/teacher")) {
        // учителю окно входа не мешает: покажем, когда уйдёт со страницы учителя
        const again = () => { if (!location.hash.startsWith("#/teacher") && !this.student) { removeEventListener("hashchange", again); this.showGate(); } };
        addEventListener("hashchange", again);
        return;
      }
      document.querySelector(".ep-gate")?.remove();
      const restore = mode === "restore";
      const g = document.createElement("div");
      g.className = "ep-gate";
      g.innerHTML = `<form class="ep-gate-box card" autocomplete="off">
        <span class="ep-label">Easy Python</span>
        <h2>${restore ? "Восстановить прогресс" : "Давай познакомимся"}</h2>
        <p class="muted small">${restore
          ? "Введите те же имя, класс и PIN, что и в первый раз, — прогресс загрузится на это устройство."
          : "Учитель будет видеть ваши уроки, проверки задач и результаты тестов. PIN нужен, чтобы продолжить с другого устройства."}</p>
        <label>Фамилия и имя<input type="text" name="name" required minlength="3" maxlength="60" placeholder="Например: Ахметова Алия"></label>
        <label>Класс<input type="text" name="cls" required maxlength="12" placeholder="Например: 11А"></label>
        <label>PIN — 4 цифры<input type="text" name="pin" required inputmode="numeric" pattern="[0-9]{4}" maxlength="4" placeholder="Придумайте и запомните"></label>
        <div class="ep-gate-err small"></div>
        <button class="btn btn-primary" type="submit">${restore ? "Восстановить" : "Начать"}</button>
        <button class="btn btn-ghost" type="button" data-a="switch">${restore ? "Я здесь впервые" : "Я уже занимался(ась) — восстановить прогресс"}</button>
      </form>`;
      document.body.appendChild(g);
      document.body.classList.add("gate-open");
      const f = g.querySelector("form");
      const err = g.querySelector(".ep-gate-err");
      g.querySelector('[data-a="switch"]').onclick = () => this.showGate(restore ? "" : "restore");
      setTimeout(() => f.name.focus(), 50);
      f.onsubmit = async (e) => {
        e.preventDefault();
        const name = f.name.value.trim().replace(/\s+/g, " "), cls = f.cls.value.trim().toUpperCase(), pin = f.pin.value.trim();
        if (!/^\d{4}$/.test(pin)) { err.textContent = "PIN — ровно 4 цифры."; return; }
        const hash = await pinHash(name, cls, pin);
        const btn = f.querySelector('[type="submit"]');
        if (restore) {
          btn.disabled = true; err.textContent = "Ищем…";
          try {
            const u = new URL(endpoint()); u.searchParams.set("action", "restore");
            u.searchParams.set("name", name); u.searchParams.set("cls", cls); u.searchParams.set("pin", hash);
            const j = await (await fetch(u)).json();
            if (!j.ok) { err.textContent = j.error || "Не найдено."; btn.disabled = false; return; }
            this.setStudent({ sid: j.sid, name: j.name, cls: j.cls, pin: hash });
            if (j.progress) this.hooks.onRestore(j.progress);
            this.log({ type: "login", title: "Восстановление прогресса" });
            this.closeGate();
          } catch (x) { err.textContent = "Нет связи с журналом. Проверьте интернет."; btn.disabled = false; }
          return;
        }
        this.setStudent({ sid: newId(), name, cls, pin: hash });
        this.log({ type: "login", title: "Первый вход" });
        this.markSnapshot();
        this.closeGate();
      };
    },
    closeGate() {
      document.querySelector(".ep-gate")?.remove();
      document.body.classList.remove("gate-open");
      this.hooks.onLogin && this.hooks.onLogin();
    },
    setStudent(s) { this.student = s; ls.set(LS_ID, s); },
    logout() {
      if (!confirm("Сменить ученика? Прогресс на этом устройстве будет очищен (его можно восстановить по имени, классу и PIN).")) return;
      this.flush(true);
      this.student = null; ls.del(LS_ID);
      this.hooks.onLogout && this.hooks.onLogout();
      this.showGate();
    },
    badge() {
      if (!this.enabled()) return "";
      if (!this.student) return "";
      return `<div class="ep-me small"><span>👤 <b>${esc(this.student.name)}</b>, ${esc(this.student.cls)}</span>
        <a href="#" data-ep="logout">Сменить</a></div>`;
    },
  };
  window.EPTrack = T;
})();
