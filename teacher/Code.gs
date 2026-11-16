/**
 * Easy Python — серверная часть журнала учеников (Google Apps Script).
 *
 * Хранит всё в этой Google-таблице:
 *   лист «События» — каждое действие ученика (урок, проверка задачи, тест, открытие страницы);
 *   лист «Ученики» — одна строка на ученика: последний снимок прогресса.
 *
 * Установка — см. teacher/НАСТРОЙКА.md. Обязательно поменяйте TEACHER_KEY.
 */

// Пароль учителя: его вводят на странице «Для учителя». Поменяйте на свой!
const TEACHER_KEY = "поменяйте-меня";

const EVENTS = "События";
const STUDENTS = "Ученики";
const EV_HEAD = ["Время (сервер)", "Время (ученик)", "ID ученика", "Ученик", "Класс", "Действие", "Модуль", "Элемент", "Название", "Успех", "Результат", "Подробности", "Код"];
const ST_HEAD = ["ID ученика", "Ученик", "Класс", "PIN (хэш)", "Первый вход", "Последняя активность", "Прогресс %", "Уроки", "Задачи", "Отработка", "Тесты", "Модули (JSON)", "Прогресс (JSON)", "Действий"];

function sheet_(name, head) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(head);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, head.length).setFontWeight("bold");
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

const cut_ = (s, n) => (s == null ? "" : String(s).slice(0, n));

/* ---------- приём событий от учеников ---------- */
function doPost(e) {
  let body;
  try { body = JSON.parse(e.postData.contents); } catch (err) { return json_({ ok: false, error: "bad json" }); }
  const st = body.student || {};
  if (!st.sid || !st.name) return json_({ ok: false, error: "no student" });

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const now = new Date();
    const events = (body.events || []).slice(0, 200);
    if (events.length) {
      const rows = events.map((ev) => [
        now, cut_(ev.ts, 40), cut_(ev.sid || st.sid, 40), cut_(ev.name || st.name, 80), cut_(ev.cls || st.cls, 20),
        cut_(ev.type, 20), cut_(ev.module, 20), cut_(ev.item, 60), cut_(ev.title, 200),
        ev.ok === true ? "да" : ev.ok === false ? "нет" : "", cut_(ev.score, 40), cut_(ev.detail, 1000), cut_(ev.code, 20000),
      ]);
      const sh = sheet_(EVENTS, EV_HEAD);
      sh.getRange(sh.getLastRow() + 1, 1, rows.length, EV_HEAD.length).setValues(rows);
    }
    upsertStudent_(st, body.snapshot, body.progress, events.filter((ev) => !ev.sid || ev.sid === st.sid).length, now);
  } finally {
    lock.releaseLock();
  }
  return json_({ ok: true });
}

function upsertStudent_(st, snap, progress, nEvents, now) {
  const sh = sheet_(STUDENTS, ST_HEAD);
  const ids = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, 1).getValues().map((r) => r[0]) : [];
  const i = ids.indexOf(st.sid);
  const s = snap || {};
  const prev = i >= 0 ? sh.getRange(i + 2, 1, 1, ST_HEAD.length).getValues()[0] : null;
  const row = [
    st.sid, cut_(st.name, 80), cut_(st.cls, 20), st.pin || (prev ? prev[3] : ""),
    prev ? prev[4] : now, now,
    s.pct != null ? s.pct : prev ? prev[6] : 0,
    s.lessons != null ? s.lessons : prev ? prev[7] : 0,
    s.tasks != null ? s.tasks : prev ? prev[8] : 0,
    s.extra != null ? s.extra : prev ? prev[9] : 0,
    s.quizzes != null ? s.quizzes : prev ? prev[10] : 0,
    s.mods ? cut_(JSON.stringify(s.mods), 20000) : prev ? prev[11] : "{}",
    progress ? cut_(JSON.stringify(progress), 49000) : prev ? prev[12] : "",
    (prev ? Number(prev[13]) || 0 : 0) + nEvents,
  ];
  if (i >= 0) sh.getRange(i + 2, 1, 1, ST_HEAD.length).setValues([row]);
  else sh.appendRow(row);
}

/* ---------- чтение: страница учителя и восстановление прогресса ---------- */
function doGet(e) {
  const p = e.parameter || {};
  if (p.action === "restore") return restore_(p);
  if (p.key !== TEACHER_KEY) return json_({ ok: false, error: "Неверный пароль учителя" });
  if (p.action === "summary") return json_({ ok: true, students: students_(), events: lastEvents_(400, null) });
  if (p.action === "student") return json_({ ok: true, events: lastEvents_(2000, p.sid) });
  return json_({ ok: true, hello: "Easy Python" });
}

function students_() {
  const sh = sheet_(STUDENTS, ST_HEAD);
  if (sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, ST_HEAD.length).getValues().map((r) => ({
    sid: r[0], name: r[1], cls: r[2], first: r[4], last: r[5], pct: r[6], lessons: r[7], tasks: r[8], extra: r[9], quizzes: r[10],
    mods: safeParse_(r[11], {}), actions: r[13],
  }));
}

function lastEvents_(limit, sid) {
  const sh = sheet_(EVENTS, EV_HEAD);
  const n = sh.getLastRow() - 1;
  if (n < 1) return [];
  // для одного ученика просматриваем больше строк с конца, для общей ленты — только последние
  const take = Math.min(n, sid ? 20000 : limit);
  const rows = sh.getRange(n + 1 - take + 1, 1, take, EV_HEAD.length).getValues();
  const out = [];
  for (let k = rows.length - 1; k >= 0 && out.length < limit; k--) {
    const r = rows[k];
    if (sid && r[2] !== sid) continue;
    out.push({ at: r[0], ts: r[1], sid: r[2], name: r[3], cls: r[4], type: r[5], module: r[6], item: r[7], title: r[8], ok: r[9], score: r[10], detail: r[11], code: sid ? r[12] : (r[12] ? "1" : "") });
  }
  return out;
}

function restore_(p) {
  const sh = sheet_(STUDENTS, ST_HEAD);
  if (sh.getLastRow() < 2 || !p.pin) return json_({ ok: false, error: "Ученик не найден" });
  const rows = sh.getRange(2, 1, sh.getLastRow() - 1, ST_HEAD.length).getValues();
  const norm = (s) => String(s || "").trim().toLowerCase().replace(/\s+/g, " ").replace(/ё/g, "е");
  for (let k = rows.length - 1; k >= 0; k--) {
    const r = rows[k];
    if (norm(r[1]) === norm(p.name) && norm(r[2]) === norm(p.cls) && r[3] && r[3] === p.pin) {
      return json_({ ok: true, sid: r[0], name: r[1], cls: r[2], progress: safeParse_(r[12], null) });
    }
  }
  return json_({ ok: false, error: "Ученик с таким именем, классом и PIN не найден" });
}

function safeParse_(s, d) {
  try { return s ? JSON.parse(s) : d; } catch (e) { return d; }
}
