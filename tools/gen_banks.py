"""
Генератор банков тестовых вопросов (по 100 на модуль 1–8) для Easy Python.

Принцип: каждый вопрос с кодом ВЫПОЛНЯЕТСЯ настоящим Python — правильный ответ
не угадывается, а вычисляется. Неверные варианты — результаты «ошибочных»
версий того же кода (типичные ошибки учеников: off-by-one, не тот оператор,
не тот срез…), поэтому они правдоподобны.

Запуск:  python -X utf8 tools/gen_banks.py   →  question_banks.js
"""
import contextlib, io, json, math, os, random, sys, tempfile, textwrap

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PER_MODULE = {"single": 60, "multiple": 20, "matching": 20}


# ---------------------------------------------------------------- выполнение
_CACHE = {}


def run(code, files=None):
    """Выполняет код, возвращает вывод (без завершающего перевода строки) или 'Ошибка'."""
    code = textwrap.dedent(code).strip("\n")
    key = (code, json.dumps(files, sort_keys=True) if files else "")
    if key in _CACHE:
        return _CACHE[key]
    buf = io.StringIO()
    old = os.getcwd()
    tmp = tempfile.TemporaryDirectory() if files else None
    try:
        if tmp:
            os.chdir(tmp.name)
            for name, text in files.items():
                with open(name, "w", encoding="utf-8") as fh:
                    fh.write(text)
        g = {"__name__": "__main__"}
        steps = [0]

        def tracer(frame, event, arg):
            if frame.f_code.co_filename == "<q>":
                steps[0] += 1
                if steps[0] > 200000:
                    raise TimeoutError("слишком долго")
            return tracer
        sys.settrace(tracer)
        try:
            with contextlib.redirect_stdout(buf):
                exec(compile(code, "<q>", "exec"), g)
        finally:
            sys.settrace(None)
        # хвостовые пробелы не видны на экране — убираем, чтобы варианты не «совпадали» визуально
        out = "\n".join(line.rstrip() for line in buf.getvalue().rstrip("\n").split("\n"))
    except Exception:
        out = "Ошибка"
    finally:
        if tmp:
            os.chdir(old)
            tmp.cleanup()
    _CACHE[key] = out
    return out


def ev(expr, pre=""):
    """Значение выражения в виде repr (как в интерпретаторе) или 'Ошибка'."""
    return run(f"{pre}\nprint(repr({expr}))")


def evs(expr, pre=""):
    """Значение выражения, как его напечатает print, или 'Ошибка'."""
    return run(f"{pre}\nprint({expr})")


# ---------------------------------------------------------------- сборка вопросов
class Bank:
    def __init__(self, mid, seed):
        self.mid = mid
        self.r = random.Random(seed)
        self.items = {"single": [], "multiple": [], "matching": []}
        self.seen = set()

    def _add(self, kind, q):
        key = json.dumps([q.get("q"), q.get("code"), q.get("options"), q.get("pairs")], ensure_ascii=False, sort_keys=True)
        if key in self.seen or len(self.items[kind]) >= PER_MODULE[kind]:
            return False
        self.seen.add(key)
        self.items[kind].append(q)
        return True

    def single(self, text, answer, wrong, code=None, explain="", code_opts=True):
        wrong = [w for w in dict.fromkeys(wrong) if w is not None and w.strip() and w.strip() != answer.strip()]
        if len(wrong) < 3:
            wrong += [w for w in fallback_wrong(answer, self.r) if w.strip() and w != answer and w not in wrong]
        if len(wrong) < 3:
            return False
        opts = [answer] + self.r.sample(wrong[:6], 3)
        self.r.shuffle(opts)
        q = {"type": "single", "q": text, "options": opts, "answer": opts.index(answer), "explain": explain}
        if code:
            q["code"] = textwrap.dedent(code).strip("\n")
        if code_opts:
            q["codeOptions"] = True
        return self._add("single", q)

    def single_code(self, text, code, wrong_codes=(), explain="", extra_wrong=(), files=None):
        ans = run(code, files)
        wrong = [run(c, files) for c in wrong_codes] + list(extra_wrong)
        return self.single(text, ans, wrong, code=code, explain=explain + f" Программа выводит: <code>{esc(ans)}</code>.")

    def multiple(self, text, options, correct, explain="", code=None, code_opts=True):
        """options — список строк, correct — множество индексов (2–4 верных из 5–6)."""
        idx = list(range(len(options)))
        self.r.shuffle(idx)
        opts = [options[i] for i in idx]
        ans = sorted(k for k, i in enumerate(idx) if i in correct)
        if not (2 <= len(ans) <= len(opts) - 1) or len(set(opts)) != len(opts):
            return False
        q = {"type": "multiple", "q": text, "options": opts, "answer": ans, "explain": explain}
        if code:
            q["code"] = textwrap.dedent(code).strip("\n")
        if code_opts:
            q["codeOptions"] = True
        return self._add("multiple", q)

    def multiple_pick(self, text, pool, is_ok, explain="", code=None, n=6, code_opts=True):
        """Берёт n вариантов из пула так, чтобы верных было 2–4."""
        for _ in range(40):
            cand = self.r.sample(pool, min(n, len(pool)))
            ok = {i for i, c in enumerate(cand) if is_ok(c)}
            if 2 <= len(ok) <= min(4, len(cand) - 2):
                return self.multiple(text, cand, ok, explain, code, code_opts)
        return False

    def matching(self, text, pairs, explain="", distractors=()):
        lefts = [p[0] for p in pairs]
        rights = [p[1] for p in pairs]
        if len(set(lefts)) != len(lefts) or len(set(rights)) != len(rights) or "Ошибка" in rights and rights.count("Ошибка") > 1:
            return False
        dis = [d for d in dict.fromkeys(distractors) if d not in rights][:2]
        q = {"type": "matching", "q": text, "pairs": [{"left": a, "right": b} for a, b in pairs], "explain": explain}
        if dis:
            q["distractors"] = dis
        return self._add("matching", q)

    def matching_exprs(self, text, exprs, pre="", explain="", k=4, show=evs):
        """Сопоставление «выражение → значение» по вычисленным значениям."""
        for _ in range(30):
            pick = self.r.sample(exprs, min(k, len(exprs)))
            vals = [show(e, pre) for e in pick]
            if len(set(vals)) == len(vals) and "Ошибка" not in vals:
                others = [show(e, pre) for e in exprs if e not in pick]
                dis = [v for v in others if v not in vals and v != "Ошибка"]
                return self.matching(text, list(zip(pick, vals)), explain, dis[:2])
        return False

    def concept(self, kind, data):
        if kind == "single":
            text, answer, wrong, explain = data
            return self.single(text, answer, wrong, explain=explain, code_opts=False)
        if kind == "multiple":
            text, right, wrong, explain = data
            opts = right + wrong
            return self.multiple(text, opts, set(range(len(right))), explain, code_opts=False)

    def done(self):
        return all(len(self.items[k]) >= PER_MODULE[k] for k in PER_MODULE)

    def fill(self, families):
        """Крутит семейства по кругу, пока не наберётся 60/20/20."""
        guard = 0
        while not self.done():
            guard += 1
            if guard % 200 == 0:
                print(" ", self.mid, guard, {k: len(v) for k, v in self.items.items()}, flush=True)
            if guard > 1500:
                raise RuntimeError(f"{self.mid}: не хватает вопросов {[(k, len(v)) for k, v in self.items.items()]}")
            for kind, fn in families:
                if len(self.items[kind]) < PER_MODULE[kind]:
                    try:
                        fn(self)
                    except IndexError:
                        pass


def esc(s):
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def fallback_wrong(ans, r):
    out = []
    toks = ans.split()
    if len(toks) >= 2 and "\n" not in ans:
        # последовательность значений: типичные ошибки — лишний/потерянный элемент, обратный порядок
        out = [" ".join(toks[:-1]), " ".join(toks[1:]), " ".join(toks[::-1]), " ".join(toks + [toks[-1]])]
        try:
            nums = [int(t) for t in toks]
            out += [" ".join(map(str, nums + [nums[-1] + (nums[-1] - nums[-2])])), " ".join(str(v + 1) for v in nums)]
        except ValueError:
            pass
        return [o for o in dict.fromkeys(out) if o and o != ans]
    if len(toks) == 1 and ans.lstrip("-").isdigit():
        v = int(ans)
        return [str(x) for x in dict.fromkeys([v + 1, v - 1, v * 2 if v else 2, v + 2, -v if v else 3]) if str(x) != ans]
    try:
        v = int(ans)
        out = [str(v + d) for d in (1, -1, 2, -2, 10, v and -v or 3)]
    except ValueError:
        try:
            v = float(ans)
            out = [repr(v + 1), repr(v - 1), repr(v * 2), str(int(v))]
        except ValueError:
            out = ["Ошибка", ans[:-1] if len(ans) > 2 else "None", ans[1:] if len(ans) > 2 else "",ans[::-1] if len(ans) > 1 else "0", ans.upper() if ans != ans.upper() else ans.lower(), "None"]
    return [o for o in out if o != ans]


R = lambda b: b.r  # краткость


# ================================================================ МОДУЛЬ 1
def m1_families():
    def arith(b):
        r = b.r
        a, c = r.randint(-20, 30), r.choice([2, 3, 4, 5, 7])
        op = r.choice(["//", "%", "/", "**"])
        if op == "**":
            a, c = r.randint(2, 5), r.randint(2, 4)
        code = f"a = {a}\nb = {c}\nprint(a {op} b)"
        wrongs = [code.replace(op, o) for o in ["//", "%", "/", "*"] if o != op]
        b.single_code("Что выведет программа?", code, wrongs,
                      "<code>//</code> — целочисленное деление (округление вниз), <code>%</code> — остаток, <code>/</code> — всегда float, <code>**</code> — степень.")

    def sepend(b):
        r = b.r
        w = r.sample(["1", "2", "3", "A", "B", "x"], 3)
        sep, end = r.choice(["-", "", "*", ", "]), r.choice(["!", ".", ""])
        code = f'print({", ".join(repr(x) for x in w)}, sep={sep!r}, end={end!r})\nprint("|")'
        wrongs = [f'print({", ".join(repr(x) for x in w)}, end={sep!r}, sep={end!r})\nprint("|")',
                  f'print({", ".join(repr(x) for x in w)})\nprint("|")',
                  f'print({", ".join(repr(x) for x in w)}, sep={sep!r})\nprint("|")',
                  f'print({", ".join(repr(x) for x in w)}, sep={sep!r}, end={end!r} + "\\n")\nprint("|")']
        b.single_code("Что выведет программа?", code, wrongs, "<code>sep</code> ставится между значениями, <code>end</code> — один раз в конце вместо перевода строки.")

    def trace(b):
        r = b.r
        x, y = r.randint(1, 9), r.randint(1, 9)
        steps = r.choice([
            ["a = a + b", "b = a - b", "a = a - b"],
            ["a, b = b, a + b", "a = a * 2"],
            ["a = a * b", "b = a // b", "a = a % 7"],
            ["b = a", "a = b + 3", "b = b * 2"],
            ["a += b", "b *= a", "a -= 1"],
        ])
        code = f"a = {x}\nb = {y}\n" + "\n".join(steps) + "\nprint(a, b)"
        wrongs = [f"a = {x}\nb = {y}\n" + "\n".join(steps[:-1]) + "\nprint(a, b)",
                  f"a = {x}\nb = {y}\n" + "\n".join(steps) + "\nprint(b, a)",
                  f"a = {y}\nb = {x}\n" + "\n".join(steps) + "\nprint(a, b)"]
        b.single_code("Каковы значения переменных после выполнения программы?", code, wrongs, "Выполняйте присваивания строго по порядку, каждый раз подставляя текущие значения.")

    def types(b):
        pool = ["7 / 7", "7 // 7", "7 % 7", "'7' * 2", "7 > 2", "int('7')", "float(7)", "str(7.0)", "7 ** 0", "2 ** -1", "True + 1", "round(7.5)", "abs(-7.0)", "len('777')"]
        e = b.r.choice(pool)
        ans = evs(f"type({e}).__name__")
        b.single(f"Какой тип имеет значение выражения?", ans, ["int", "float", "str", "bool"], code=e,
                 explain="Деление <code>/</code> всегда даёт float; сравнение — bool; умножение строки — str; <code>round()</code> и <code>len()</code> возвращают int.")

    def conv(b):
        r = b.r
        n = r.randint(2, 9)
        e = r.choice([f"int('{n}') + {n}", f"'{n}' + str({n})", f"'{n}' * {n % 4 + 1}", f"int({n}.9)", f"float('{n}') * 2", f"str({n}) * 2 + '!'", f"int('1' + '{n}') // 2"])
        code = f"print({e})"
        wrongs = [code.replace("int(", "str(", 1), code.replace("str(", "int(", 1), code.replace("float(", "int(", 1)]
        b.single_code("Что выведет программа?", code, wrongs, "<code>+</code> складывает числа, но склеивает строки; строку можно умножить на целое число; <code>int()</code> отбрасывает дробную часть.")

    def mathf(b):
        r = b.r
        v = r.choice([2.5, 3.5, -2.5, 4.7, -4.7, 7.2, -0.5, 9.99, 16, 2.0])
        f = r.choice(["math.floor", "math.ceil", "round", "math.trunc", "int", "abs"])
        if f == "abs" or (f in ("math.floor", "math.ceil") and isinstance(v, int)):
            f = "math.ceil"
        code = f"import math\nprint({f}({v}))"
        wrongs = [f"import math\nprint({g}({v}))" for g in ["math.floor", "math.ceil", "round", "math.trunc", "int"] if g != f]
        b.single_code("Что выведет программа?", code, wrongs,
                      "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code>/<code>int</code> — отбросить дробную часть, <code>round</code> — к ближайшему, а .5 — к чётному.")

    def digits(b):
        r = b.r
        n = r.randint(1000, 9999)
        e, desc = r.choice([("n % 10", "последняя цифра"), ("n // 10 % 10", "цифра десятков"), ("n // 100 % 10", "цифра сотен"), ("n // 1000", "первая цифра"), ("n % 100", "две последние цифры"), ("n // 100", "число без двух последних цифр")])
        code = f"n = {n}\nprint({e})"
        wrongs = [f"n = {n}\nprint({w})" for w in ["n % 10", "n // 10 % 10", "n // 100 % 10", "n // 1000", "n % 100", "n // 10"] if w != e]
        b.single_code("Что выведет программа?", code, wrongs, f"Здесь вычисляется {desc}: <code>// 10</code> отбрасывает последнюю цифру, <code>% 10</code> берёт последнюю.")

    def prec(b):
        r = b.r
        a, c, d = r.randint(2, 6), r.randint(2, 5), r.randint(2, 4)
        e = r.choice([f"{a} + {c} * {d}", f"({a} + {c}) * {d}", f"{a} ** 2 * {d}", f"-{a} ** 2", f"{a} * {c} % {d}", f"{a} + {c} // {d} * {d}", f"2 ** {d} ** 2" if d < 3 else f"{a} - {c} - {d}"])
        ans = evs(e)
        alts = [evs(x) for x in [f"({e.split(' ', 1)[0]} {e.split(' ', 1)[1]})", e.replace("*", "+", 1), e.replace("+", "*", 1), e.replace("-", "", 1)]]
        alts += [str(eval(e.replace("**", "*"))) if "**" in e else str(int(ans) + d)]
        b.single("Чему равно значение выражения?", ans, alts, code=e, explain="Приоритет: <code>**</code> (справа налево), затем унарный минус, затем <code>* / // %</code>, затем <code>+ -</code>.")

    def m_equal(b):
        v = b.r.randint(2, 6)
        pool = [f"{v * 2} // 2", f"{v * 2} / 2", f"{v} ** 1", f"{v + 1} - 1", f"int({v}.9)", f"round({v}.4)", f"{v * 3} % {v * 3 + 1} // 3", f"len('{'a' * v}')", f"{v} * 1.0", f"abs(-{v})", f"{v + 1} // 1 - 1", f"int('{v}')", f"{v * 10} % 10", f"{v}0 // 10"]
        target = str(v)
        b.multiple_pick(f"Какие выражения имеют значение {v} — ровно целое число {v} (тип int)?", pool,
                        lambda e: evs(f"repr({e})") == target, "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, " + f"{v}.0), а не int.")

    def m_float(b):
        pool = ["8 / 4", "8 // 4", "8.0 // 4", "2 ** 3", "2 ** -1", "int(2.5)", "float(3)", "abs(-2)", "round(2.6)", "3 * 1.0", "10 % 3", "10 % 3.0", "len('ab')", "7 / 7"]
        b.multiple_pick("Значения каких выражений имеют тип float?", pool, lambda e: evs(f"type({e}).__name__") == "float",
                        "Результат — float, если есть деление <code>/</code>, отрицательная степень или хотя бы один операнд float.")

    def mt_expr(b):
        pool = ["17 // 5", "17 % 5", "-17 // 5", "-17 % 5", "17 / 5", "2 ** 5", "5 ** 0", "round(3.5)", "round(4.5)", "int(-3.7)", "abs(-12)", "10 - 3 * 2", "(10 - 3) * 2", "7 // 2 * 2", "7 % 2 + 7 // 2"]
        b.matching_exprs("Установите соответствие между выражением и его значением.", pool, explain="Помните: <code>//</code> округляет вниз (−17 // 5 = −4), остаток всегда того же знака, что и делитель.")

    def mt_math(b):
        pool = ["math.floor(-2.5)", "math.ceil(-2.5)", "math.trunc(-2.5)", "round(-2.5)", "math.sqrt(49)", "math.pi > 3.14", "math.fabs(-3)", "math.floor(7.99)", "math.ceil(7.01)", "math.gcd(12, 18)", "math.factorial(4)", "math.pow(2, 3)"]
        b.matching_exprs("Сопоставьте вызов и результат (модуль math импортирован).", pool, pre="import math",
                         explain="<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code> — к нулю, <code>sqrt</code>/<code>pow</code>/<code>fabs</code> возвращают float.")

    def mt_types(b):
        pool = ["'5' + '5'", "5 + 5", "5 / 5", "5 > 5", "'5' * 2", "[5] * 2", "5 // 2.0", "str(5)", "(5,)"]
        b.matching_exprs("Сопоставьте выражение и тип его значения.", pool, show=lambda e, pre: evs(f"type({e}).__name__"),
                         explain="Тип определяется операцией и типами операндов.")

    concepts = [
        ("single", ("Какая функция считывает строку, введённую с клавиатуры?", "input()", ["print()", "read()", "scan()", "int()"], "<code>input()</code> всегда возвращает строку (str).")),
        ("single", ("Какое значение вернёт input(), если пользователь ввёл 15?", "строку '15'", ["число 15", "число 15.0", "None"], "input() всегда возвращает строку; для числа нужно int(input()).")),
        ("single", ("Какое имя переменной допустимо в Python?", "_total2", ["2total", "total-2", "for"], "Имя начинается с буквы или _, состоит из букв, цифр и _ и не совпадает с ключевым словом.")),
        ("single", ("Как правильно ввести два целых числа, записанных в одной строке через пробел?", "a, b = map(int, input().split())", ["a, b = int(input())", "a, b = input().split(int)", "a = b = int(input().split())"], "split() делит строку по пробелам, map(int, …) превращает части в числа.")),
        ("single", ("Что делает операция x %= 3?", "записывает в x остаток от деления x на 3", ["делит x на 3", "умножает x на 3 %", "сравнивает x с 3"], "x %= 3 — то же, что x = x % 3.")),
        ("single", ("Какой символ начинает однострочный комментарий в Python?", "#", ["//", "--", "/*"], "Всё после # до конца строки интерпретатор игнорирует.")),
        ("multiple", ("Какие операции изменяют тип результата на float даже для целых операндов?", ["деление /", "возведение в отрицательную степень **"], ["целочисленное деление //", "остаток %", "сложение +"], "Только / и отрицательная степень дают float из int.")),
        ("multiple", ("Какие функции возвращают число с плавающей точкой (float)?", ["math.sqrt(16)", "float('3')", "math.pow(2, 2)"], ["math.floor(2.5)", "round(2.5)", "int('3')"], "floor, round (с одним аргументом) и int возвращают int.")),
    ]
    fams = [("single", f) for f in (arith, sepend, trace, types, conv, mathf, digits, prec)]
    fams += [("multiple", m_equal), ("multiple", m_float), ("matching", mt_expr), ("matching", mt_math), ("matching", mt_types)]
    return fams, concepts


# ================================================================ МОДУЛЬ 2
def m2_families():
    def boolexpr(b):
        r = b.r
        x, y = r.randint(-5, 10), r.randint(-5, 10)
        e = r.choice([f"x > 0 and y > 0", f"x > 0 or y > 0", f"not x > y", f"x % 2 == 0 and y % 2 == 1", f"x == y or x > 5", f"not (x > 0 and y < 0)", f"-3 < x <= y", f"x != y and not y"])
        code = f"x = {x}\ny = {y}\nprint({e})"
        b.single("Что выведет программа?", run(code), ["True", "False", "Ошибка", "None"], code=code,
                 explain="<code>and</code> — истинно, только если оба истинны; <code>or</code> — если хотя бы одно; <code>not</code> меняет значение; цепочка <code>a &lt; x &lt;= b</code> проверяет оба сравнения.")

    def shortc(b):
        r = b.r
        a, c = r.choice([0, 3, "''", "'a'", "None", "[]", "[0]"]), r.choice([0, 5, "'b'", "''", "None"])
        op = r.choice(["or", "and"])
        e = f"{a} {op} {c}"
        ans = ev(e)
        alt = [ev(f"{a} {'and' if op == 'or' else 'or'} {c}"), ev(f"bool({e})"), ev(f"not ({e})"), repr(c) if repr(c) != ans else repr(a)]
        b.single("Чему равно значение выражения? (как его покажет repr)", ans, alt, code=e,
                 explain="<code>or</code> возвращает первый истинный операнд (или последний), <code>and</code> — первый ложный (или последний). Ложны: 0, '', None, [], {}.")

    def ifchain(b):
        r = b.r
        t1, t2 = sorted(r.sample(range(-5, 20), 2))
        x = r.choice([t1 - 1, t1, t1 + 1, t2, t2 + 1, (t1 + t2) // 2])
        s1, s2 = r.choice([(">", ">="), (">=", ">"), ("<", "<=")])
        code = f"x = {x}\nif x {s1} {t2}:\n    print('A')\nelif x {s2} {t1}:\n    print('B')\nelse:\n    print('C')"
        b.single_code("Что выведет программа?", code, [code.replace("elif", "if"), code.replace(s1, s2, 1)], extra_wrong=["A", "B", "C", "A\nB"],
                      explain="В цепочке if–elif–else выполняется только первая ветка с истинным условием; граничные значения проверяйте по знаку (&gt; или &gt;=).")

    def ifsep(b):
        r = b.r
        x = r.randint(-6, 15)
        code = f"x = {x}\ns = 0\nif x > 0:\n    s += 1\nif x % 2 == 0:\n    s += 10\nif x > 5:\n    s += 100\nelse:\n    s -= 1\nprint(s)"
        b.single_code("Что выведет программа?", code, [code.replace("if x % 2", "elif x % 2").replace("if x > 5", "elif x > 5")], extra_wrong=["111", "11", "0", "-1", "101", "10"],
                      explain="Отдельные if проверяются независимо друг от друга; else относится только к ближайшему if.")

    def nested(b):
        r = b.r
        a, c = r.randint(-5, 9), r.randint(-5, 9)
        code = f"a = {a}\nb = {c}\nif a > 0:\n    if b > 0:\n        print('I')\n    else:\n        print('IV')\nelse:\n    if b > 0:\n        print('II')\n    else:\n        print('III')"
        b.single_code("Что выведет программа?", code, extra_wrong=["I", "II", "III", "IV", "0"], explain="Сначала проверяется внешнее условие, затем — вложенное внутри выбранной ветки.")

    def ternary(b):
        r = b.r
        x = r.randint(-9, 20)
        e = r.choice(["'чётное' if x % 2 == 0 else 'нечётное'", "x if x > 0 else -x", "'да' if 0 < x < 10 else 'нет'", "x // 2 if x > 5 else x * 2"])
        code = f"x = {x}\nprint({e})"
        b.single_code("Что выведет программа?", code, extra_wrong=[str(x), str(-x), "да", "нет", "чётное", "нечётное", str(x * 2), str(x // 2)],
                      explain="<code>A if условие else B</code> даёт A, когда условие истинно, иначе B.")

    def compare(b):
        pool = ["'abc' < 'abd'", "'Z' < 'a'", "'10' < '9'", "10 < 9", "'apple' > 'app'", "1 == 1.0", "'1' == 1", "3 < 5 > 4", "[1, 2] < [1, 3]", "'b' > 'abc'", "True == 1", "None == 0"]
        e = b.r.choice(pool)
        b.single("Чему равно значение выражения?", evs(e), ["True", "False", "Ошибка", "None"], code=e,
                 explain="Строки сравниваются посимвольно по кодам символов (заглавные латинские меньше строчных; '10' &lt; '9', потому что '1' &lt; '9').")

    def m_values(b):
        r = b.r
        lo, hi = sorted(r.sample(range(-5, 15), 2))
        cond = r.choice([f"x > {lo} and x <= {hi}", f"x < {lo} or x >= {hi}", f"not (x > {hi}) and x % 2 == 0", f"x % 3 == 0 or x > {hi}"])
        code = f"x = int(input())\nif {cond}:\n    print('YES')\nelse:\n    print('NO')"
        cands = sorted(set(r.sample(range(lo - 4, hi + 5), 6)))
        ok = lambda v: bool(eval(cond, {"x": v}))
        b.multiple_pick("При каких введённых значениях x программа выведет YES?", [str(v) for v in cands], lambda s: ok(int(s)), code=code,
                        explain="Подставьте каждое значение в условие и проверьте обе части (and — обе истинны, or — хотя бы одна).")

    def m_true(b):
        pool = ["5 > 3 and 2 > 1", "5 > 3 and 2 > 7", "0 or 0", "not 0", "'' or 'x'", "bool([])", "bool(' ')", "3 == 3.0", "'a' < 'B'", "not (1 and 0)", "10 % 4 == 2", "None is None", "1 < 2 < 3", "3 > 2 > 1 > 0 > -1 > 0"]
        b.multiple_pick("Значения каких выражений истинны (bool даёт True)?", pool, lambda e: evs(f"bool({e})") == "True",
                        explain="Ложны: 0, 0.0, '', [], None, False. Пробел ' ' — непустая строка, значит истина.")

    def mt_input(b):
        r = b.r
        t = r.randint(3, 8)
        code = f"if x < 0:\n    r = 'A'\nelif x < {t}:\n    r = 'B'\nelif x == {t}:\n    r = 'C'\nelse:\n    r = 'D'"
        vals = [-r.randint(1, 5), r.randint(0, t - 1), t, t + r.randint(1, 5)]
        pairs = [(f"x = {v}", run(f"x = {v}\n{code}\nprint(r)")) for v in vals]
        b.matching(f"Дан фрагмент программы. Сопоставьте значение x и значение r после его выполнения.<pre>{esc(code)}</pre>", pairs,
                   "Проверяйте условия сверху вниз: срабатывает первое истинное.")

    def mt_logic(b):
        pool = ["0 or 7", "5 and 0", "5 and 7", "'' or 'py'", "None or 0", "not ''", "not 3", "3 or 5", "[] and 5"]
        b.matching_exprs("Сопоставьте выражение и его значение.", pool, show=lambda e, pre: ev(e),
                         explain="<code>or</code> — первый истинный или последний; <code>and</code> — первый ложный или последний; <code>not</code> всегда даёт bool.")

    concepts = [
        ("single", ("Сколько веток выполнится в конструкции if – elif – elif – else?", "ровно одна", ["все с истинными условиями", "не больше двух", "ни одной, если есть else"], "Выполняется первая ветка с истинным условием, а если таких нет — else.")),
        ("single", ("Какой оператор проверяет равенство значений?", "==", ["=", "===", ":="], "= — присваивание, == — сравнение.")),
        ("single", ("Чему равно not True or True?", "True", ["False", "Ошибка", "None"], "not выполняется раньше or: (not True) or True = False or True = True.")),
        ("single", ("Какое условие проверяет, что x — двузначное натуральное число?", "10 <= x <= 99", ["10 < x < 99", "x // 10 == 2", "len(x) == 2"], "Двузначные натуральные: от 10 до 99 включительно.")),
        ("single", ("Какое условие верно описывает «год високосный»?", "y % 4 == 0 and y % 100 != 0 or y % 400 == 0", ["y % 4 == 0", "y % 4 == 0 or y % 100 == 0", "y % 400 == 0 and y % 4 != 0"], "Кратен 4, но не кратен 100; либо кратен 400.")),
        ("multiple", ("Какие значения считаются ложными в условии if?", ["0", "''", "None", "[]"], ["'0'", "' '", "[0]"], "Ложны нули, пустые коллекции и None. Строка '0' и список [0] не пустые — истинны.")),
        ("multiple", ("Какие записи являются правильными по синтаксису?", ["if x > 0: print(x)", "y = 1 if x else 2", "if 0 < x < 5:\n    pass"], ["if x > 0 print(x)", "if (x > 0) then:", "elif x > 0:  # без if перед ним"], "После условия обязательно двоеточие; then в Python нет; elif без if недопустим.")),
    ]
    # ---------- шахматы (обязательная тема ЕНТ в блоке условий) ----------
    PIECES = {
        "ладья": "x1 == x2 or y1 == y2",
        "король": "abs(x1 - x2) <= 1 and abs(y1 - y2) <= 1",
        "слон": "abs(x1 - x2) == abs(y1 - y2)",
        "ферзь": "x1 == x2 or y1 == y2 or abs(x1 - x2) == abs(y1 - y2)",
        "конь": "abs(x1 - x2) == 1 and abs(y1 - y2) == 2 or abs(x1 - x2) == 2 and abs(y1 - y2) == 1",
    }

    def cell(r):
        return r.randint(1, 8), r.randint(1, 8)

    def ch_which(b):
        r = b.r
        (x1, y1), (x2, y2) = cell(r), cell(r)
        if (x1, y1) == (x2, y2):
            return
        prog = ("dx, dy = abs(x1 - x2), abs(y1 - y2)\nres = ''\nif dx == 0 or dy == 0:\n    res += 'Л'\nif dx <= 1 and dy <= 1:\n    res += 'К'\n"
                "if dx == dy:\n    res += 'С'\nif dx == 1 and dy == 2 or dx == 2 and dy == 1:\n    res += 'Н'\nprint(res if res else '-')")
        code = f"x1, y1 = {x1}, {y1}\nx2, y2 = {x2}, {y2}\n{prog}"
        b.single_code("Шахматы. Программа выводит буквы фигур, которые могут перейти с клетки (x1, y1) на (x2, y2): Л — ладья, К — король, С — слон, Н — конь. Что выведет программа?", code,
                      [code.replace("if dx == dy", "elif dx == dy"), code.replace("dx <= 1 and dy <= 1", "dx == 1 and dy == 1"), code.replace("dx == dy:", "x1 - x2 == y1 - y2:")],
                      extra_wrong=["-", "ЛК", "С", "Н", "К", "КС"],
                      explain="dx, dy — модули разностей. Ладья: dx = 0 или dy = 0; король: dx ≤ 1 и dy ≤ 1; слон: dx = dy; конь: пара 1 и 2. Отдельные if — потому что подходить могут сразу несколько фигур.")

    def ch_color(b):
        r = b.r
        (x1, y1), (x2, y2) = cell(r), cell(r)
        code = (f"x1, y1 = {x1}, {y1}\nx2, y2 = {x2}, {y2}\nc1 = 'black' if (x1 + y1) % 2 == 0 else 'white'\n"
                f"c2 = 'black' if (x2 + y2) % 2 == 0 else 'white'\nprint(c1, c2)")
        b.single("Шахматы. Клетка a1 = (1, 1) чёрная. Что выведет программа?", run(code), ["black black", "black white", "white black", "white white"], code=code,
                 explain="Клетка чёрная, если сумма координат чётная; у соседних клеток чётность суммы разная.")

    def ch_bishop(b):
        r = b.r
        (x1, y1), (x2, y2) = cell(r), cell(r)
        code = (f"x1, y1, x2, y2 = {x1}, {y1}, {x2}, {y2}\nif x1 == x2 and y1 == y2:\n    print(0)\nelif abs(x1 - x2) == abs(y1 - y2):\n    print(1)\n"
                f"elif (x1 + y1) % 2 == (x2 + y2) % 2:\n    print(2)\nelse:\n    print(-1)")
        b.single("Шахматы. Программа находит, за сколько ходов слон дойдёт с (x1, y1) до (x2, y2). Что она выведет?", run(code), ["0", "1", "2", "-1"], code=code,
                 explain="Слон не меняет цвет клетки: одна диагональ — 1 ход, другие клетки того же цвета — 2 хода, клетки другого цвета недостижимы (−1).")

    def ch_knight(b):
        r = b.r
        x, y = cell(r)
        code = (f"x, y = {x}, {y}\nk = 0\nfor dx, dy in [(1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1), (-2, 1), (-1, 2)]:\n"
                f"    if 1 <= x + dx <= 8 and 1 <= y + dy <= 8:\n        k += 1\nprint(k)")
        b.single_code("Шахматы. Сколько ходов есть у коня на клетке (x, y)? Что выведет программа?", code,
                      [code.replace("1 <= x + dx <= 8", "1 <= x + dx < 8"), code.replace("1 <= y + dy <= 8", "0 <= y + dy <= 8")], extra_wrong=["8", "2", "4", "6", "3"],
                      explain="У коня до 8 ходов; у края и в углу часть ходов выводит за доску (в углу их всего 2).")

    def ch_cond(b):
        r = b.r
        piece = r.choice(list(PIECES))
        wrong = {"ладья": ["abs(x1 - x2) == abs(y1 - y2)", "x1 == x2 and y1 == y2", "x1 == y1 or x2 == y2"],
                 "король": ["abs(x1 - x2) == 1 and abs(y1 - y2) == 1", "abs(x1 - x2) + abs(y1 - y2) == 1", "abs(x1 - x2) < 1 or abs(y1 - y2) < 1"],
                 "слон": ["x1 - x2 == y1 - y2", "x1 == x2 or y1 == y2", "(x1 + y1) % 2 == (x2 + y2) % 2"],
                 "ферзь": ["x1 == x2 or y1 == y2", "abs(x1 - x2) == abs(y1 - y2)", "abs(x1 - x2) <= 1 and abs(y1 - y2) <= 1"],
                 "конь": ["abs(x1 - x2) + abs(y1 - y2) == 3", "abs(x1 - x2) == 2 or abs(y1 - y2) == 2", "abs(x1 - x2) == 1 and abs(y1 - y2) == 1"]}[piece]
        b.single(f"Шахматы. Какое условие истинно ровно тогда, когда {piece} может пойти с клетки (x1, y1) на другую клетку (x2, y2)?", PIECES[piece], wrong,
                 explain="Проверьте условие на нескольких клетках: оно должно подходить ко всем ходам фигуры и не подходить к остальным.")

    def m_chess(b):
        r = b.r
        piece = r.choice(list(PIECES))
        x1, y1 = r.randint(2, 7), r.randint(2, 7)
        cand = []
        while len(cand) < 7:
            c = cell(r)
            if c != (x1, y1) and c not in cand:
                cand.append(c)
        ok = lambda s: eval(PIECES[piece], {"abs": abs, "x1": x1, "y1": y1, "x2": int(s[1]), "y2": int(s[4])})
        b.multiple_pick(f"Шахматы. На какие клетки может пойти {piece} с клетки ({x1}, {y1}) за один ход? Других фигур на доске нет.",
                        [f"({a}, {c})" for a, c in cand], ok, code_opts=False,
                        explain=f"Условие хода: <code>{esc(PIECES[piece])}</code>.")

    def mt_chess(b):
        r = b.r
        pts = r.sample([(1, 1), (1, 2), (2, 2), (1, 4), (3, 3), (2, 1), (8, 8), (4, 5)], 8)
        code = "k = 0\nfor dx, dy in [(1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1), (-2, 1), (-1, 2)]:\n    if 1 <= x + dx <= 8 and 1 <= y + dy <= 8:\n        k += 1"
        pairs, used = [], set()
        for x, y in pts:
            v = run(f"x, y = {x}, {y}\n{code}\nprint(k)")
            if v not in used:
                used.add(v)
                pairs.append((f"({x}, {y})", v))
        if len(pairs) >= 4:
            b.matching("Шахматы. Сопоставьте клетку, на которой стоит конь, и число его возможных ходов.", pairs[:4],
                       "В углу — 2 хода, рядом с углом — 3, у края — 4, ближе к центру — 6 или 8.", ["5", "7"])

    def mt_piece(b):
        r = b.r
        rows = [("ладья", "x1 == x2 or y1 == y2"), ("король", "dx <= 1 and dy <= 1"), ("слон", "dx == dy"), ("ферзь", "dx == 0 or dy == 0 or dx == dy"),
                ("конь", "{dx, dy} == {1, 2}"), ("одного цвета", "(x1 + y1) % 2 == (x2 + y2) % 2")]
        pick = r.sample(rows, 4)
        b.matching("Шахматы. Сопоставьте фигуру (или свойство клеток) и условие. dx, dy — модули разностей координат.", pick,
                   "Король: обе разности ≤ 1; слон: разности равны; ферзь = ладья + слон; конь: разности 1 и 2.",
                   [c for _, c in rows if (_, c) not in pick][:1] + ["dx == 1 and dy == 1"])

    fams = [("single", f) for f in (boolexpr, shortc, ifchain, ifsep, nested, ternary, compare)]
    fams += [("single", f) for f in (ch_which, ch_color, ch_bishop, ch_knight, ch_cond)]
    fams += [("multiple", m_values), ("multiple", m_true), ("multiple", m_chess), ("matching", mt_input), ("matching", mt_logic), ("matching", mt_chess), ("matching", mt_piece)]
    return fams, concepts


# ================================================================ МОДУЛЬ 3
def m3_families():
    def forsum(b):
        r = b.r
        a, c, s = r.randint(0, 5), r.randint(6, 15), r.choice([1, 2, 3])
        body = r.choice(["s += i", "s += i * i", "s = s + 1", "s += i % 3"])
        code = f"s = 0\nfor i in range({a}, {c}, {s}):\n    {body}\nprint(s)"
        b.single_code("Что выведет программа?", code, [code.replace(f"range({a}, {c}", f"range({a}, {c + 1}"), code.replace(f"range({a},", f"range({a + 1},"), code.replace(f", {s})", ")")],
                      "range(a, b, step) не включает b. Переберите значения i и выполните тело цикла для каждого.")

    def rangel(b):
        r = b.r
        a, c, s = r.randint(-3, 6), r.randint(-5, 15), r.choice([1, 2, 3, -1, -2])
        if (s > 0 and c <= a) or (s < 0 and c >= a):
            a, c = c, a
        code = f"print(list(range({a}, {c}, {s})))"
        b.single_code("Что выведет программа?", code, [f"print(list(range({a}, {c + (1 if s > 0 else -1)}, {s})))", f"print(list(range({a + (1 if s > 0 else -1)}, {c}, {s})))", f"print(list(range({a}, {c})))"],
                      "range не включает правую границу; при отрицательном шаге значения убывают.")

    def whilet(b):
        r = b.r
        n = r.randint(20, 400)
        body = r.choice([("n //= 2", "c += 1"), ("n -= 7", "c += 1"), ("n //= 10", "c += n % 10")])
        cond = r.choice(["n > 0", "n > 5", "n >= 10"])
        code = f"n = {n}\nc = 0\nwhile {cond}:\n    {body[0]}\n    {body[1]}\nprint(c)"
        swapped = f"n = {n}\nc = 0\nwhile {cond}:\n    {body[1]}\n    {body[0]}\nprint(c)"
        lim = int(cond.split()[-1])
        b.single_code("Что выведет программа?", code, [swapped, code.replace(cond, cond.rsplit(" ", 1)[0] + f" {lim + 1}")],
                      "Трассируйте: проверка условия → тело → снова проверка. Цикл заканчивается, когда условие ложно.")

    def digitsum(b):
        n = b.r.randint(100, 99999)
        what = b.r.choice(["s += n % 10", "s = s * 10 + n % 10", "s = max(s, n % 10)", "s += 1"])
        code = f"n = {n}\ns = 0\nwhile n > 0:\n    {what}\n    n //= 10\nprint(s)"
        b.single_code("Что выведет программа?", code, [code.replace("n //= 10", "n //= 100"), code.replace("n % 10", "n // 10", 1)],
                      "<code>n % 10</code> — последняя цифра, <code>n //= 10</code> — убрать её. Цикл перебирает цифры справа налево.")

    def brk(b):
        r = b.r
        k = r.randint(3, 8)
        stmt = r.choice(["break", "continue"])
        code = f"for i in range(1, 10):\n    if i % {k % 4 + 2} == 0:\n        {stmt}\n    print(i, end=' ')"
        other = "continue" if stmt == "break" else "break"
        b.single_code("Что выведет программа?", code, [code.replace(stmt, other), code.replace(stmt, "pass")],
                      "<code>break</code> завершает цикл полностью, <code>continue</code> пропускает остаток текущего шага.")

    def forelse(b):
        r = b.r
        t = r.randint(2, 12)
        code = f"for i in range(2, 8):\n    if i == {t}:\n        print('найдено', i)\n        break\nelse:\n    print('нет')"
        b.single_code("Что выведет программа?", code, extra_wrong=["нет", f"найдено {t}\nнет", "найдено 7", "найдено 2"],
                      explain="Ветка else цикла выполняется, только если цикл завершился без break.")

    def nestc(b):
        r = b.r
        a, c = r.randint(2, 5), r.randint(2, 5)
        inner = r.choice([f"range({c})", "range(i)", f"range(i, {c + 2})", "range(i + 1)"])
        code = f"k = 0\nfor i in range({a}):\n    for j in {inner}:\n        k += 1\nprint(k)"
        b.single_code("Сколько раз выполнится k += 1? Что выведет программа?", code, [code.replace(f"range({a})", f"range({a + 1})", 1), code.replace(f"range({a})", f"range(1, {a})", 1)],
                      "Для каждого значения i внутренний цикл выполняется полностью; сложите количество повторов.")

    def minmax(b):
        r = b.r
        a = [r.randint(-9, 30) for _ in range(6)]
        alg = r.choice(["m = a[0]\nfor x in a:\n    if x > m:\n        m = x", "m = a[0]\nfor x in a:\n    if x < m:\n        m = x", "m = 0\nfor x in a:\n    if x % 2 == 0:\n        m += 1", "m = 0\nfor x in a:\n    if x > m:\n        m = x"])
        code = f"a = {a}\n{alg}\nprint(m)"
        b.single_code("Что выведет программа?", code, [code.replace(">", "<"), code.replace("a[0]", "0")], extra_wrong=[str(sum(a)), str(len(a))],
                      explain="Начальное значение важно: если искать максимум, начиная с 0, для отрицательных чисел ответ будет неверным.")

    def m_ranges(b):
        r = b.r
        a, s = r.randint(0, 4), r.choice([2, 3])
        target = list(range(a, a + 4 * s, s))
        pool = [f"range({a}, {a + 4 * s}, {s})", f"range({a}, {a + 4 * s - 1}, {s})", f"range({a}, {a + 3 * s + 1}, {s})", f"range({a}, {a + 4 * s + 1}, {s})",
                f"range({a + 1}, {a + 4 * s}, {s})", f"range({a}, {a + 3 * s}, {s})", f"range({a}, {a + 4 * s})", f"range({a - 1}, {a + 4 * s}, {s})"]
        b.multiple_pick(f"Какие вызовы range дают последовательность {', '.join(map(str, target))}?", pool, lambda e: list(eval(e)) == target,
                        explain="Правая граница не включается, поэтому подходит любое число больше последнего элемента, но не больше следующего за ним по шагу.")

    def m_loops(b):
        code_pool = {
            "for i in range(5): print(i)": 5, "for i in range(1, 5): print(i)": 4, "for i in range(0, 10, 2): print(i)": 5,
            "i = 0\nwhile i < 5:\n    print(i)\n    i += 1": 5, "i = 5\nwhile i > 0:\n    print(i)\n    i -= 2": 3,
            "for c in 'hello': print(c)": 5, "for i in range(10, 0, -2): print(i)": 5, "for i in range(5, 0): print(i)": 0,
            "i = 1\nwhile i < 32:\n    print(i)\n    i *= 2": 5,
        }
        keys = list(code_pool)
        n = b.r.choice([4, 5, 3])
        b.multiple_pick(f"Какие фрагменты выведут ровно {n} строк(и)?", keys, lambda k: run(k).count("\n") + (1 if run(k) else 0) == n,
                        explain="Посчитайте количество повторений тела цикла.")

    def mt_range(b):
        pool = ["list(range(4))", "list(range(1, 4))", "list(range(4, 0, -1))", "list(range(0, 9, 3))", "list(range(2, 9, 3))", "list(range(5, 5))", "list(range(-2, 2))", "list(range(3, 0, -2))"]
        b.matching_exprs("Сопоставьте вызов и получающийся список.", pool, explain="range(start, stop, step): stop не включается.")

    def mt_loopout(b):
        r = b.r
        n = r.randint(4, 7)
        variants = [f"for i in range({n}):\n    s += i", f"for i in range(1, {n} + 1):\n    s += i", f"for i in range({n}):\n    s += 1", f"for i in range(1, {n}):\n    s *= i", f"for i in range(0, {n}, 2):\n    s += i"]
        r.shuffle(variants)
        pairs = []
        for v in variants[:4]:
            init = "1" if "*=" in v else "0"
            pairs.append((f"s = {init}\n{v}", run(f"s = {init}\n{v}\nprint(s)")))
        b.matching("Сопоставьте фрагмент и значение s после его выполнения.", pairs, "Переберите значения i и аккуратно накопите s.")

    concepts = [
        ("single", ("Сколько раз выполнится тело цикла for i in range(3, 15, 4)?", "3", ["4", "12", "5"], "Значения i: 3, 7, 11 (15 не включается).")),
        ("single", ("Что произойдёт при выполнении while True: без break внутри?", "бесконечный цикл", ["ошибка синтаксиса", "цикл не выполнится ни разу", "цикл выполнится один раз"], "Условие всегда истинно, а выхода нет.")),
        ("single", ("Какой цикл удобнее, если число повторений заранее неизвестно?", "while", ["for i in range(n)", "for без range", "никакой"], "while повторяет, пока выполняется условие.")),
        ("single", ("Какое начальное значение у произведения перед накоплением в цикле?", "1", ["0", "-1", "None"], "Умножение на 0 обнулит результат, поэтому начинают с 1.")),
        ("multiple", ("Что верно о break и continue?", ["break прерывает ближайший цикл", "continue переходит к следующему шагу цикла", "else цикла не выполняется после break"], ["continue завершает программу", "break прерывает все вложенные циклы сразу"], "break выходит только из того цикла, в котором записан.")),
        ("multiple", ("Какие циклы ни разу не выполнят тело?", ["for i in range(5, 2):", "while 0:", "for c in '':"], ["for i in range(2, 5):", "for i in range(5, 2, -1):", "while 1 < 2:  # с break внутри"], "Пустой range, ложное условие и пустая строка — тело не выполняется.")),
    ]
    fams = [("single", f) for f in (forsum, rangel, whilet, digitsum, brk, forelse, nestc, minmax)]
    fams += [("multiple", m_ranges), ("multiple", m_loops), ("matching", mt_range), ("matching", mt_loopout)]
    return fams, concepts


# ================================================================ МОДУЛЬ 4
WORDS = ["python", "информатика", "программа", "keyboard", "алгоритм", "monitor", "variable", "компьютер", "function", "massiv"]


def m4_families():
    def idx(b):
        r = b.r
        s = r.choice(WORDS)
        i = r.randint(-len(s), len(s) - 1)
        code = f"s = '{s}'\nprint(s[{i}])"
        b.single_code("Что выведет программа?", code, [f"s = '{s}'\nprint(s[{i + 1}])" if i + 1 < len(s) else f"s = '{s}'\nprint(s[0])", f"s = '{s}'\nprint(s[{i - 1}])"],
                      extra_wrong=["Ошибка", s[i - 2] if len(s) > 2 else "x"], explain="Индексы начинаются с 0; отрицательный индекс −1 — последний символ.")

    def slc(b):
        r = b.r
        s = r.choice(WORDS)
        a, c = sorted(r.sample(range(0, len(s)), 2))
        st = r.choice(["", ":2", ":-1", "", ":3"])
        e = r.choice([f"s[{a}:{c}{st}]", f"s[:{c}]", f"s[{a}:]", f"s[::-1]", f"s[-{c}:]", f"s[{a}:-1]", f"s[::{r.choice([2, 3])}]"])
        code = f"s = '{s}'\nprint({e})"
        alt = [f"s = '{s}'\nprint({e.replace(str(c), str(c + 1), 1)})", f"s = '{s}'\nprint({e.replace(str(a), str(a + 1), 1)})", f"s = '{s}'\nprint(s[{a}:{c + 1}])", f"s = '{s}'\nprint(s[{a - 1 if a else 1}:{c}])"]
        b.single_code("Что выведет программа?", code, alt, explain="Срез s[a:b:k] берёт символы с индекса a до b (не включая b) с шагом k.")

    def meth(b):
        r = b.r
        s = r.choice(["Hello, World", "  python  ", "a,b,,c", "мама мыла раму", "Banana", "2025-11-17", "one two three", "abracadabra"])
        e = r.choice(["s.upper()", "s.lower()", "s.count('a')", "s.find('a')", "s.rfind('a')", "s.replace('a', '*')", "s.strip()", "len(s)", "s.split(',')", "s.split()", "s.title()", "s.index('o')", "s.startswith('B')", "s.isdigit()", "s.capitalize()", "s.swapcase()"])
        code = f"s = {s!r}\nprint({e})"
        alts = [f"s = {s!r}\nprint({x})" for x in ["s.upper()", "s.count('a')", "s.find('a')", "len(s)", "s.split()", "s.strip()", "s.rfind('a')", "s.title()"] if x != e]
        b.single_code("Что выведет программа?", code, r.sample(alts, 4), extra_wrong=["Ошибка", "-1"],
                      explain="Методы строк не изменяют исходную строку, а возвращают новый результат; find возвращает −1, если подстроки нет, а index — ошибку.")

    def fstr(b):
        r = b.r
        x = r.choice([3.14159, 2.5, 7, 12.345, -0.5, 1000])
        f = r.choice([":.2f", ":.0f", ":5", ":<5", ":^7", ":05", ":+", ":.1f"])
        code = f"x = {x}\nprint(f'[{{x{f}}}]')"
        alts = [f"x = {x}\nprint(f'[{{x{g}}}]')" for g in [":.2f", ":.0f", ":5", ":<5", ":^7", ":05", ":.1f", ""] if g != f]
        b.single_code("Что выведет программа?", code, r.sample(alts, 4), explain="<code>.2f</code> — 2 знака после точки; число — ширина поля; &lt; ^ &gt; — выравнивание; 0 перед шириной — дополнение нулями.")

    def ordchr(b):
        r = b.r
        e = r.choice(["ord('A')", "ord('a')", "ord('0')", "chr(66)", "chr(ord('a') + 2)", "ord('Z') - ord('A')", "chr(ord('5') + 1)", "ord('b') - ord('a') + 1", "chr(97).upper()"])
        ans = evs(e)
        alt = [evs(x) for x in ["ord('A')", "ord('a')", "ord('0')", "chr(66)", "ord('Z')", "chr(98)", "'c'", "26"]]
        b.single("Чему равно значение выражения?", ans, alt, code=e, explain="Коды: 'A' = 65, 'a' = 97, '0' = 48; chr — обратная к ord.")

    def loopstr(b):
        r = b.r
        s = r.choice(["programma", "a1b2c3d4", "Hello World", "level", "информатика", "2+3=5"])
        body = r.choice([("k = 0\nfor c in s:\n    if c in 'aeiouаеиоуыэюя':\n        k += 1\nprint(k)"), ("t = ''\nfor c in s:\n    t = c + t\nprint(t)"), ("k = 0\nfor c in s:\n    if c.isdigit():\n        k += int(c)\nprint(k)"), ("t = ''\nfor i in range(0, len(s), 2):\n    t += s[i]\nprint(t)"), ("t = ''\nfor c in s:\n    if c not in t:\n        t += c\nprint(t)")])
        code = f"s = {s!r}\n{body}"
        b.single_code("Что выведет программа?", code, [code.replace("t = c + t", "t = t + c"), code.replace("range(0,", "range(1,")], extra_wrong=[s, s[::-1], str(len(s))],
                      explain="Цикл for c in s перебирает символы строки по одному слева направо.")

    def m_slices(b):
        r = b.r
        s = r.choice(["informatics", "programming", "algorithm", "keyboard"])
        a = r.randint(1, len(s) - 4)
        target = s[a:a + 3]
        L = len(s)
        pool = [f"s[{a}:{a + 3}]", f"s[{a - L}:{a + 3 - L}]", f"s[{a}:{a + 3 - L}]", f"s[{a}:{a + 4}]", f"s[{a + 1}:{a + 4}]", f"s[{a}:{a + 2}]", f"s[{a - 1}:{a + 2}]", f"s[{a}:{a + 3}:1]"]
        b.multiple_pick(f"Дана строка s = '{s}'. Какие срезы равны '{target}'?", pool, lambda e: eval(e, {"s": s}) == target,
                        explain="Отрицательный индекс −k означает len(s) − k; правая граница среза не включается.")

    def m_meth(b):
        pool = ["'abc'.upper() == 'ABC'", "'a b c'.split() == ['a', 'b', 'c']", "'-'.join('abc') == 'a-b-c'", "'hello'.find('z') == -1", "'Hello'.lower() == 'Hello'", "len(' ab ') == 2",
                "'aaa'.count('aa') == 2", "'abc'[::-1] == 'cba'", "'abc' * 2 == 'abcabc'", "'12'.isdigit()", "'1.5'.isdigit()", "'ab'.replace('b', '') == 'a'", "'Python'[10:] == ''"]
        b.multiple_pick("Какие утверждения истинны (выражение равно True)?", pool, lambda e: evs(e) == "True",
                        explain="count считает непересекающиеся вхождения ('aaa'.count('aa') = 1); isdigit для '1.5' — False (есть точка); срез за пределами строки даёт пустую строку, а не ошибку.")

    def mt_meth(b):
        pool = ["'banana'.count('a')", "'banana'.find('n')", "'banana'.rfind('n')", "'banana'.upper()", "'banana'.replace('an', '-')", "'banana'[1:4]", "'banana'[::-1]", "len('banana')", "'banana'.index('b')", "'banana'.title()"]
        b.matching_exprs("Сопоставьте выражение и результат.", pool, explain="find — первое вхождение, rfind — последнее, replace заменяет все вхождения.")

    def mt_fmt(b):
        pool = ["f'{7:03}'", "f'{3.14159:.2f}'", "f'{5:>4}'", "f'{5:<4}|'", "f'{2.5:.0f}'", "f'{1234567:,}'", "f'{0.25:.0%}'", "f'{42:b}'", "f'{255:x}'", "'{} + {}'.format(2, 3)"]
        b.matching_exprs("Сопоставьте форматирование и результат.", pool, show=lambda e, pre: ev(e), explain=".2f — 2 знака после точки, :03 — ширина 3 с нулями, :b — двоичная, :x — шестнадцатеричная запись.")

    concepts = [
        ("single", ("Что произойдёт при выполнении s[0] = 'X', если s — строка?", "ошибка TypeError: строки неизменяемы", ["первый символ заменится на X", "в начало добавится X", "ничего не произойдёт"], "Строку нельзя изменить по индексу — создают новую: s = 'X' + s[1:].")),
        ("single", ("Какой метод разбивает строку на список слов по пробелам?", "split()", ["join()", "strip()", "partition()"], "split() без аргумента делит по любым пробельным символам.")),
        ("single", ("Что вернёт 'abc'.find('d')?", "-1", ["0", "None", "ошибку"], "find при отсутствии подстроки возвращает −1 (а index — ошибку ValueError).")),
        ("single", ("Как получить строку s в обратном порядке?", "s[::-1]", ["s[-1]", "s.reverse()", "reversed(s)"], "Срез с шагом −1. Метода reverse у строк нет, reversed возвращает итератор.")),
        ("multiple", ("Какие операции допустимы со строками в Python?", ["сложение 'a' + 'b'", "умножение на целое 'a' * 3", "проверка вхождения 'a' in 'cat'"], ["вычитание 'abc' - 'c'", "изменение символа s[0] = 'z'"], "Строки складываются и умножаются на целое, но неизменяемы и не вычитаются.")),
        ("multiple", ("Какие методы возвращают число?", ["count", "find", "index"], ["split", "upper", "replace"], "count, find, index возвращают int; остальные — строки или списки.")),
    ]
    fams = [("single", f) for f in (idx, slc, meth, fstr, ordchr, loopstr)]
    fams += [("multiple", m_slices), ("multiple", m_meth), ("matching", mt_meth), ("matching", mt_fmt)]
    return fams, concepts


# ================================================================ МОДУЛЬ 5
def m5_families():
    def lst(b):
        r = b.r
        a = [r.randint(-5, 20) for _ in range(r.randint(5, 7))]
        e = r.choice(["a[2]", "a[-1]", "a[1:4]", "a[::2]", "a[::-1]", "len(a)", "sum(a)", "max(a)", "a[-3:]", "a.index(a[3])", "a[len(a) // 2]", "sorted(a)[1]", "a.count(a[0])"])
        code = f"a = {a}\nprint({e})"
        alts = [f"a = {a}\nprint({x})" for x in ["a[2]", "a[1]", "a[3]", "a[-1]", "a[1:3]", "a[1:5]", "a[0]", "min(a)", "a[-2:]", "a[::3]"] if x != e]
        b.single_code("Что выведет программа?", code, r.sample(alts, 5), explain="Индексация с 0, срез не включает правую границу.")

    def mut(b):
        r = b.r
        a = [r.randint(1, 9) for _ in range(4)]
        ops = r.sample(["a.append(5)", "a.insert(1, 0)", "a.pop()", "a.pop(0)", "a.remove(a[1])", "a.extend([7, 7])", "a.reverse()", "a.sort()", "a[0] = a[-1]", "del a[1]", "a += [1]"], 2)
        code = f"a = {a}\n" + "\n".join(ops) + "\nprint(a)"
        alt = [f"a = {a}\n" + "\n".join(ops[::-1]) + "\nprint(a)", f"a = {a}\n{ops[0]}\nprint(a)", f"a = {a}\n{ops[1]}\nprint(a)"]
        b.single_code("Что выведет программа?", code, alt, explain="append добавляет в конец, insert(i, x) — перед индексом i, pop() удаляет последний, remove(x) — первое вхождение значения x.")

    def alias(b):
        r = b.r
        a = [r.randint(1, 9) for _ in range(3)]
        cp = r.choice(["b = a", "b = a[:]", "b = a.copy()", "b = list(a)"])
        code = f"a = {a}\n{cp}\nb.append(0)\nb[0] = 99\nprint(a)"
        b.single_code("Что выведет программа?", code, [code.replace(cp, "b = a[:]"), code.replace(cp, "b = a")], extra_wrong=[str([99] + a[1:] + [0]), str(a + [0])],
                      explain="b = a не создаёт копию: оба имени ссылаются на один список. Копию дают a[:], a.copy(), list(a).")

    def comp(b):
        r = b.r
        n = r.randint(4, 8)
        e = r.choice([f"[i * i for i in range({n})]", f"[i for i in range({n}) if i % 2]", f"[x * 2 for x in [3, 1, 4, 1, 5] if x > 1]", f"[len(w) for w in 'я люблю python'.split()]", f"[c.upper() for c in 'abc']", f"[i % 3 for i in range({n})]", f"[[0] * 2 for _ in range(2)]"])
        code = f"print({e})"
        b.single_code("Что выведет программа?", code, [code.replace(f"range({n})", f"range(1, {n + 1})"), code.replace("if i % 2", "if i % 2 == 0"), code.replace("x > 1", "x >= 1")],
                      explain="Генератор списка: [выражение for элемент in последовательность if условие].")

    def tup(b):
        r = b.r
        e = r.choice(["t[1]", "len(t)", "t + (4,)", "t * 2", "t.count(2)", "t.index(3)", "t[::-1]", "max(t)"])
        code = f"t = (1, 2, 3, 2)\nprint({e})"
        b.single_code("Что выведет программа?", code, [f"t = (1, 2, 3, 2)\nprint({x})" for x in ["t[0]", "t[2]", "len(t) - 1", "t + 4", "t.count(3)", "t[1:]"]],
                      explain="Кортеж похож на список, но неизменяем; поддерживает индексацию, срезы, + и *.")

    def matrix(b):
        r = b.r
        m = [[r.randint(0, 9) for _ in range(3)] for _ in range(3)]
        e = r.choice(["m[1][2]", "m[2][0]", "m[-1][-1]", "sum(m[1])", "[row[0] for row in m]", "sum(m[i][i] for i in range(3))", "sum(m[i][2 - i] for i in range(3))", "len(m) * len(m[0])", "max(max(row) for row in m)", "[list(r) for r in zip(*m)][0]"])
        code = f"m = {m}\nprint({e})"
        alts = [f"m = {m}\nprint({x})" for x in ["m[2][1]", "m[1][2]", "m[0][2]", "sum(m[0])", "[row[1] for row in m]", "m[0]", "sum(m[i][i] for i in range(3))", "sum(m[i][2 - i] for i in range(3))"] if x != e]
        b.single_code("Что выведет программа?", code, r.sample(alts, 5), explain="m[i][j] — элемент строки i и столбца j. Главная диагональ — m[i][i], побочная — m[i][n−1−i].")

    def bubble(b):
        r = b.r
        a = r.sample(range(1, 20), 5)
        code = f"a = {a}\nfor j in range(len(a) - 1):\n    if a[j] > a[j + 1]:\n        a[j], a[j + 1] = a[j + 1], a[j]\nprint(a)"
        b.single_code("Как будет выглядеть список после ОДНОГО прохода пузырьковой сортировки?", code, [f"print(sorted({a}))", f"print(sorted({a}, reverse=True))", code.replace(">", "<", 1)],
                      explain="За один проход пузырька наибольший элемент «всплывает» в конец; остальные сортируются не полностью.")

    def m_lists(b):
        pool = ["[1, 2] + [3]", "[1, 2].append(3)", "[1] * 3", "list(range(1, 4))", "[i for i in range(1, 4)]", "sorted([3, 1, 2])", "[3, 1, 2].sort()", "list('123')", "[1, 2, 3][::-1][::-1]", "[1, 2, 3, 4][:3]", "[1, 3][:] + [2]"]
        b.multiple_pick("Какие выражения дают список [1, 2, 3]?", pool, lambda e: evs(e) == "[1, 2, 3]",
                        explain="append и sort изменяют список на месте и возвращают None; list('123') даёт ['1', '2', '3'] — строки.")

    def m_matrix(b):
        n = 3
        pool = ["[[0] * 3 for _ in range(3)]", "[[0, 0, 0] for i in range(3)]", "[[0] * 3] * 3", "[0] * 9", "[[0] * 3, [0] * 3, [0] * 3]", "[[0 for j in range(3)] for i in range(3)]", "[[0] * 9]"]
        good = {"[[0] * 3 for _ in range(3)]", "[[0, 0, 0] for i in range(3)]", "[[0] * 3, [0] * 3, [0] * 3]", "[[0 for j in range(3)] for i in range(3)]"}
        b.multiple_pick("Какие способы создают матрицу 3×3 из нулей с НЕЗАВИСИМЫМИ строками?", pool, lambda e: e in good,
                        explain="[[0] * 3] * 3 копирует ссылку на одну и ту же строку: изменение m[0][0] изменит все строки.")

    def mt_methods(b):
        r = b.r
        a = [r.randint(1, 9) for _ in range(4)]
        ops = ["a.append(0)", "a.insert(0, 0)", "a.pop()", "a.pop(0)", "a.reverse()", "a.sort()", "a.extend([0, 0])", "del a[1:3]", "a.remove(a[-1])"]
        rr = r.sample(ops, 4)
        pairs = [(op, run(f"a = {a}\n{op}\nprint(a)")) for op in rr]
        b.matching(f"Дан список a = {a}. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).", pairs, "Операции изменяют список на месте.")

    def mt_expr(b):
        pool = ["len([[1, 2], [3]])", "[1, 2, 3][-2]", "[5, 6, 7][1:]", "sum([1, 2, 3]) // 2", "[1, 2] * 2", "max([3, 9, 2])", "[0] * 3", "list(zip([1, 2], 'ab'))", "sorted([3, 1, 2], reverse=True)", "(1, 2) + (3,)"]
        b.matching_exprs("Сопоставьте выражение и результат.", pool, explain="len вложенного списка считает элементы верхнего уровня.")

    concepts = [
        ("single", ("Чем кортеж отличается от списка?", "кортеж нельзя изменить после создания", ["кортеж может хранить только числа", "у кортежа нет индексов", "кортеж всегда отсортирован"], "Кортежи неизменяемы: нельзя присвоить элемент, добавить или удалить.")),
        ("single", ("Что вернёт метод a.sort()?", "None (список сортируется на месте)", ["новый отсортированный список", "копию списка", "длину списка"], "sort изменяет сам список и возвращает None; новый список даёт sorted(a).")),
        ("single", ("Какова сложность поиска элемента линейным поиском в списке из n элементов (в худшем случае)?", "O(n)", ["O(1)", "O(log n)", "O(n²)"], "Линейный поиск может проверить все n элементов.")),
        ("single", ("Какое условие обязательно для двоичного (бинарного) поиска?", "список отсортирован", ["список без повторов", "в списке чётное число элементов", "элементы — только целые"], "Бинарный поиск отбрасывает половину на каждом шаге, что возможно только в упорядоченном списке.")),
        ("multiple", ("Какие методы изменяют сам список?", ["append", "sort", "pop", "reverse"], ["sorted", "len", "count"], "sorted создаёт новый список; len и count ничего не меняют.")),
        ("multiple", ("Какие сортировки имеют сложность O(n²) в худшем случае?", ["пузырьком", "выбором", "вставками"], ["слиянием", "встроенная sorted (Timsort)"], "Простые сортировки — квадратичные; слиянием и Timsort — O(n log n).")),
    ]
    fams = [("single", f) for f in (lst, mut, alias, comp, tup, matrix, bubble)]
    fams += [("multiple", m_lists), ("multiple", m_matrix), ("matching", mt_methods), ("matching", mt_expr)]
    return fams, concepts


# ================================================================ МОДУЛЬ 6
def m6_families():
    def fret(b):
        r = b.r
        a, c = r.randint(1, 9), r.randint(1, 9)
        body = r.choice(["return x * 2 + y", "return x if x > y else y", "return x // y, x % y", "if x > y:\n        return x - y\n    return y - x", "s = 0\n    for i in range(x):\n        s += y\n    return s", "print(x + y)"])
        code = f"def f(x, y):\n    {body}\n\nprint(f({a}, {c}))"
        b.single_code("Что выведет программа?", code, [code.replace(f"f({a}, {c})", f"f({c}, {a})")], extra_wrong=["None", str(a + c), "Ошибка", f"{a + c}\nNone"],
                      explain="Функция без return возвращает None; return сразу завершает функцию.")

    def defaults(b):
        r = b.r
        a = r.randint(1, 9)
        call = r.choice([f"f({a})", f"f({a}, 3)", f"f(b=2, a={a})", f"f({a}, c=10)", f"f({a}, 2, 3)"])
        code = f"def f(a, b=1, c=0):\n    return a * b + c\n\nprint({call})"
        b.single_code("Что выведет программа?", code, extra_wrong=[str(a), str(a + 1), str(a * 2), "Ошибка", str(a + 10)],
                      explain="Параметры по умолчанию используются, если аргумент не передан; именованные аргументы передаются по имени в любом порядке.")

    def args(b):
        r = b.r
        call = r.choice(["f(1, 2, 3)", "f()", "f(5)", "f(*[4, 5])", "f(1, 2, 3, 4)"])
        body = r.choice(["return len(args)", "return sum(args)", "return args", "return max(args, default=0)"])
        code = f"def f(*args):\n    {body}\n\nprint({call})"
        b.single_code("Что выведет программа?", code, extra_wrong=["0", "Ошибка", "()", "None", "[1, 2, 3]", "6", "3"],
                      explain="*args собирает все позиционные аргументы в кортеж.")

    def scope(b):
        r = b.r
        x = r.randint(1, 9)
        body = r.choice([("x = 100", ""), ("global x\n    x = 100", ""), ("y = x + 1\n    return y", "print(f())\n"), ("x += 1", "")])
        code = f"x = {x}\ndef f():\n    {body[0]}\n\n{body[1]}f()\nprint(x)" if not body[1] else f"x = {x}\ndef f():\n    {body[0]}\n\n{body[1]}print(x)"
        b.single_code("Что выведет программа?", code, extra_wrong=[str(x), "100", "Ошибка", str(x + 1), f"{x + 1}\n{x}"],
                      explain="Присваивание внутри функции создаёт локальную переменную, если нет global; x += 1 без global даёт ошибку UnboundLocalError.")

    def rec(b):
        r = b.r
        n = r.randint(3, 7)
        fn = r.choice([
            ("def f(n):\n    if n <= 1:\n        return 1\n    return n * f(n - 1)", "f"),
            ("def f(n):\n    if n < 2:\n        return n\n    return f(n - 1) + f(n - 2)", "f"),
            ("def f(n):\n    if n == 0:\n        return 0\n    return n % 10 + f(n // 10)", "f"),
            ("def f(n):\n    if n == 0:\n        return ''\n    return f(n // 2) + str(n % 2)", "f"),
            ("def f(n):\n    if n <= 0:\n        return 0\n    return n + f(n - 2)", "f"),
        ])
        arg = n if "n % 10" not in fn[0] else r.randint(100, 9999)
        if "n // 2" in fn[0]:
            arg = r.randint(5, 40)
        code = f"{fn[0]}\n\nprint(f({arg}))"
        b.single_code("Что выведет программа?", code, [code.replace(f"f({arg}))", f"f({arg - 1}))"), code.replace(f"f({arg}))", f"f({arg + 1}))")],
                      explain="Рекурсия: функция вызывает сама себя с меньшим аргументом до базового случая; результат собирается на обратном ходе.")

    def recprint(b):
        r = b.r
        n = r.randint(2, 4)
        body = r.choice(["print(n, end=' ')\n        f(n - 1)", "f(n - 1)\n        print(n, end=' ')", "print(n, end=' ')\n        f(n - 1)\n        print(n, end=' ')"])
        code = f"def f(n):\n    if n > 0:\n        {body}\n\nf({n})"
        b.single_code("Что выведет программа?", code, [code.replace("f(n - 1)\n        print", "XX").replace("print(n, end=' ')\n        f(n - 1)", "f(n - 1)\n        print(n, end=' ')").replace("XX", "print(n, end=' ')\n        f(n - 1)\n        print")],
                      extra_wrong=[" ".join(map(str, range(n, 0, -1))), " ".join(map(str, range(1, n + 1))), "0"],
                      explain="Печать ДО рекурсивного вызова выполняется на прямом ходе (n, n−1, …), ПОСЛЕ — на обратном (1, 2, …, n).")

    def lam(b):
        r = b.r
        e = r.choice(["list(map(lambda x: x * 2, [1, 2, 3]))", "list(filter(lambda x: x % 2, range(6)))", "sorted(['bb', 'a', 'ccc'], key=len)", "sorted([3, -5, 1], key=abs)", "(lambda a, b=2: a ** b)(3)", "list(map(int, '305'))", "sorted(['Bob', 'alice', 'Carl'], key=str.lower)", "max(['ab', 'abc', 'z'], key=len)", "sorted([(1, 'b'), (1, 'a'), (0, 'c')])"])
        code = f"print({e})"
        b.single_code("Что выведет программа?", code, [code.replace("key=len", "key=str"), code.replace("x % 2", "x % 2 == 0"), code.replace("x * 2", "x + 2")], extra_wrong=["Ошибка"],
                      explain="map применяет функцию к каждому элементу, filter оставляет элементы, для которых функция истинна, key задаёт, по какому признаку сравнивать.")

    def closure(b):
        r = b.r
        k = r.randint(2, 5)
        code = r.choice([
            f"def make(k):\n    def g(x):\n        return x * k\n    return g\n\nt = make({k})\nprint(t(5))",
            f"def counter():\n    c = 0\n    def inc():\n        nonlocal c\n        c += 1\n        return c\n    return inc\n\nf = counter()\nfor _ in range({k}):\n    f()\nprint(f())",
            f"def deco(fn):\n    def w(x):\n        return fn(x) + 1\n    return w\n\n@deco\ndef sq(x):\n    return x * x\n\nprint(sq({k}))",
        ])
        b.single_code("Что выведет программа?", code, extra_wrong=[str(k), str(k * 5 + 1), str(k + 1), str(k * k), "Ошибка", "1"],
                      explain="Вложенная функция «запоминает» переменные внешней (замыкание); nonlocal позволяет их менять; декоратор оборачивает функцию.")

    def m_calls(b):
        code = "def f(a, b=0, *args, c=1):\n    return a + b + sum(args) + c"
        pool = {"f(1)": True, "f(1, 2)": True, "f(1, 2, 3, 4)": True, "f(1, c=5)": True, "f()": False, "f(c=1)": False, "f(1, 2, c=3, d=4)": False, "f(a=1, b=2)": True, "f(1, a=2)": False}
        b.multiple_pick("Какие вызовы функции выполнятся без ошибки?", list(pool), lambda k: run(f"{code}\n{k}") != "Ошибка", code=code,
                        explain="Параметр a обязателен; c можно передать только по имени; неизвестный именованный аргумент d — ошибка; a нельзя передать дважды.")

    def m_none(b):
        pool = {"def f(): pass": True, "def f(): return": True, "def f(): return 0": False, "def f(): print(1)": True, "def f(): return None": True, "def f(): return []": False, "def f(): return ''": False, "def f():\n    if False:\n        return 5": True}
        b.multiple_pick("Какие функции при вызове f() вернут None?", list(pool), lambda k: run(f"{k}\nprint(f() is None)").endswith("True"),
                        explain="Без return, с пустым return или если до return дело не дошло — функция возвращает None. 0, [] и '' — это не None.")

    def mt_rec(b):
        fn = "def f(n):\n    if n <= 1:\n        return 1\n    return f(n - 1) + f(n - 2)"
        vals = b.r.sample(range(0, 9), 4)
        pairs = [(f"f({v})", run(f"{fn}\nprint(f({v}))")) for v in vals]
        b.matching(f"Дана функция:<pre>{esc(fn)}</pre>Сопоставьте вызов и результат.", pairs, "f(0) = f(1) = 1, далее каждое значение — сумма двух предыдущих.")

    def mt_fun(b):
        pool = ["list(map(str, [1, 2]))", "list(filter(None, [0, 1, '', 'a']))", "sorted('cab')", "list(map(len, ['a', 'bb']))", "(lambda x: x[::-1])('abc')", "sum(map(int, '123'))", "max([1, 5, 3], key=lambda x: -x)", "list(map(lambda x: x ** 2, range(3)))"]
        b.matching_exprs("Сопоставьте выражение и результат.", pool, explain="filter(None, …) оставляет истинные значения; key=lambda x: −x превращает max в поиск минимума.")

    concepts = [
        ("single", ("Что обязательно должно быть в рекурсивной функции, чтобы она завершилась?", "базовый случай (условие выхода)", ["цикл while", "глобальная переменная", "ровно один параметр"], "Без базового случая рекурсия бесконечна → RecursionError.")),
        ("single", ("Чем процедура отличается от функции (в терминологии ЕНТ)?", "процедура не возвращает значение", ["процедура не может иметь параметров", "процедура пишется через lambda", "отличий нет"], "В Python процедура — это функция без return (возвращает None).")),
        ("single", ("Что делает ключевое слово global внутри функции?", "позволяет изменять глобальную переменную", ["создаёт новую локальную переменную", "удаляет переменную", "делает функцию видимой везде"], "Без global присваивание создаёт локальную переменную.")),
        ("single", ("Какую ошибку вызовет бесконечная рекурсия в Python?", "RecursionError", ["ZeroDivisionError", "IndexError", "SyntaxError"], "Глубина рекурсии ограничена (около 1000 вызовов).")),
        ("multiple", ("Что верно о lambda-функциях?", ["содержат одно выражение", "могут иметь параметры по умолчанию", "часто передаются в sorted(key=…)"], ["могут содержать несколько операторов и циклы", "обязательно имеют имя"], "lambda — анонимная функция из одного выражения.")),
        ("multiple", ("Какие объявления параметров синтаксически правильны?", ["def f(a, b=1):", "def f(*args, **kwargs):", "def f(a, *, key=0):"], ["def f(a=1, b):", "def f(**kwargs, *args):"], "Параметры без значения по умолчанию идут раньше параметров со значением; *args — раньше **kwargs.")),
    ]
    fams = [("single", f) for f in (fret, defaults, args, scope, rec, recprint, lam, closure)]
    fams += [("multiple", m_calls), ("multiple", m_none), ("matching", mt_rec), ("matching", mt_fun)]
    return fams, concepts


# ================================================================ МОДУЛЬ 7
def m7_families():
    def dct(b):
        r = b.r
        d = dict(zip(r.sample("abcdef", 4), r.sample(range(1, 10), 4)))
        k0 = list(d)[0]
        e = r.choice([f"d['{k0}']", "len(d)", "d.get('z', 0)", "d.get('z')", "list(d.keys())", "sum(d.values())", "max(d, key=d.get)", f"'{k0}' in d", "list(d.items())[0]", "sorted(d)", "d['z']"])
        code = f"d = {d}\nprint({e})"
        alts = [f"d = {d}\nprint({x})" for x in ["len(d)", "list(d.values())", "max(d)", "d.get('z', 0)", f"d['{list(d)[1]}']", "sum(d)"] if x != e]
        b.single_code("Что выведет программа?", code, r.sample(alts, 3), extra_wrong=["Ошибка", "None"], explain="d[k] при отсутствии ключа — ошибка KeyError; d.get(k) — None, d.get(k, x) — x.")

    def dupd(b):
        r = b.r
        code = r.choice([
            "d = {}\nfor c in '%s':\n    d[c] = d.get(c, 0) + 1\nprint(d)" % r.choice(["abca", "mississippi"[:r.randint(4, 8)], "банан", "aabbbc"]),
            "d = {'a': 1, 'b': 2}\nd['c'] = 3\nd['a'] += 10\ndel d['b']\nprint(d)",
            "d = {1: 'x', 2: 'y'}\nd[1] = 'z'\nd.update({3: 'w'})\nprint(len(d), d[1])",
            "d = {'x': 1, 'y': 2}\nfor k, v in d.items():\n    print(k * v, end=' ')",
            "d = dict.fromkeys('ab', 0)\nd['a'] += 1\nprint(d)",
        ])
        b.single_code("Что выведет программа?", code, [code.replace("+ 1", "+ 2"), code.replace("d['a'] += 10", "d['a'] = 10")], extra_wrong=["Ошибка", "{}"],
                      explain="Присваивание по новому ключу добавляет пару, по существующему — заменяет значение; d.get(c, 0) + 1 — шаблон подсчёта.")

    def sets(b):
        r = b.r
        A, B = set(r.sample(range(1, 9), 4)), set(r.sample(range(1, 9), 4))
        e = r.choice(["A & B", "A | B", "A - B", "B - A", "A ^ B", "len(A | B)", "A <= B", "len(A & B)"])
        code = f"A = {sorted(A)}\nB = {sorted(B)}\nA, B = set(A), set(B)\nprint(sorted({e}) if isinstance({e}, set) else {e})"
        alts = [code.replace(e, x) for x in ["A & B", "A | B", "A - B", "B - A", "A ^ B"] if x != e]
        b.single_code("Что выведет программа?", code, r.sample(alts, 3), extra_wrong=["[]"],
                      explain="&amp; — пересечение, | — объединение, − — разность, ^ — симметрическая разность (элементы ровно одного множества).")

    def setmisc(b):
        e = b.r.choice(["len(set('banana'))", "sorted(set([3, 1, 3, 2, 1]))", "set() == {}", "type({}).__name__", "len({1, 1.0, True})", "sorted({'b', 'a'} | {'c'})", "{1, 2} < {1, 2, 3}", "len(set('Hello') - set('lol'))"])
        ans = evs(e)
        b.single("Чему равно значение выражения?", ans, [evs(x) for x in ["len('banana')", "[1, 2, 3]", "True", "'set'", "3", "2", "False", "['a', 'b', 'c']"]], code=e,
                 explain="Множество хранит только уникальные значения; {} — пустой словарь, а не множество; 1, 1.0 и True равны и дают один элемент.")

    def files(b):
        r = b.r
        lines = [f"{r.choice(['Ali', 'Dana', 'Erlan', 'Aru', 'Timur'])} {r.randint(50, 100)}" for _ in range(r.randint(3, 5))]
        content = "\n".join(lines) + "\n"
        code = r.choice([
            "f = open('data.txt')\nprint(len(f.readlines()))\nf.close()",
            "with open('data.txt') as f:\n    s = 0\n    for line in f:\n        s += int(line.split()[1])\nprint(s)",
            "with open('data.txt') as f:\n    print(f.readline().strip())",
            "with open('data.txt') as f:\n    data = f.read()\nprint(data.count('\\n'))",
            "with open('data.txt') as f:\n    names = [line.split()[0] for line in f]\nprint(max(names))",
        ])
        b.single_code(f"Файл data.txt содержит строки:<pre>{esc(content.rstrip())}</pre>Что выведет программа?", code,
                      [code.replace("[1]", "[0]"), code.replace("max(", "min(")], extra_wrong=["Ошибка", str(len(lines) + 1), str(len(lines) - 1)], files={"data.txt": content},
                      explain="readlines() возвращает список строк; for line in f перебирает строки файла; split() делит строку по пробелам.")

    def tryex(b):
        r = b.r
        x = r.choice(["'5'", "'abc'", "'0'", "'2.5'", "'-4'"])
        code = f"s = {x}\ntry:\n    n = int(s)\n    print(10 // n)\nexcept ValueError:\n    print('не число')\nexcept ZeroDivisionError:\n    print('деление на 0')\nelse:\n    print('ok')\nfinally:\n    print('конец')"
        b.single_code("Что выведет программа?", code, [code.replace("finally:\n    print('конец')", "pass"), code.replace("else:\n    print('ok')\n", "")], extra_wrong=["Ошибка", "конец", "не число"],
                      explain="else выполняется, если исключения не было; finally — всегда.")

    def m_dict(b):
        pool = ["{'a': 1}", "{(1, 2): 'x'}", "{[1, 2]: 'x'}", "dict(a=1)", "{1: [1, 2]}", "{{1}: 2}", "dict([('a', 1)])", "{'a': {'b': 1}}", "dict(1, 2)"]
        b.multiple_pick("Какие выражения создают словарь без ошибки?", pool, lambda e: run(f"x = {e}") != "Ошибка",
                        explain="Ключом может быть только неизменяемый (хешируемый) объект: число, строка, кортеж. Список и множество — нельзя.")

    def m_set(b):
        A, B = {1, 2, 3, 4}, {3, 4, 5}
        pool = ["A & B", "B & A", "A - (A - B)", "A | B", "A ^ B", "{3, 4}", "B - {5}", "A - B", "set([3, 4, 4])"]
        b.multiple_pick("Даны A = {1, 2, 3, 4} и B = {3, 4, 5}. Какие выражения равны {3, 4}?", pool, lambda e: eval(e, {"A": A, "B": B}) == {3, 4},
                        explain="Пересечение — общие элементы. A − (A − B) — тоже пересечение.")

    def mt_dict(b):
        pool = ["d.get('x', 0)", "len(d)", "list(d)", "d['b']", "sum(d.values())", "'a' in d", "1 in d", "sorted(d.values(), reverse=True)", "list(d.items())[-1]"]
        b.matching_exprs("Дан d = {'a': 1, 'b': 5, 'c': 2}. Сопоставьте выражение и результат.", pool, pre="d = {'a': 1, 'b': 5, 'c': 2}",
                         explain="in проверяет КЛЮЧИ словаря, а не значения.")

    def mt_err(b):
        pool = {"int('abc')": "ValueError", "1 / 0": "ZeroDivisionError", "[1, 2][5]": "IndexError", "{'a': 1}['b']": "KeyError", "'a' + 1": "TypeError", "undefined_name": "NameError", "open('нет_такого.txt')": "FileNotFoundError", "int(None)": "TypeError"}
        keys = b.r.sample(list(pool), 4)
        pairs = [(k, pool[k]) for k in keys]
        dis = [v for v in pool.values() if v not in [p[1] for p in pairs]]
        b.matching("Сопоставьте выражение и исключение, которое оно вызовет.", pairs, "Тип исключения подсказывает причину: неверное значение, индекс, ключ, тип, имя.", dis)

    concepts = [
        ("single", ("Что будет при обращении d['k'], если ключа 'k' нет?", "ошибка KeyError", ["вернётся None", "вернётся 0", "ключ создастся автоматически"], "Чтобы избежать ошибки, используют d.get('k') или проверку 'k' in d.")),
        ("single", ("Какой режим открытия файла дописывает данные в конец?", "'a'", ["'w'", "'r'", "'x'"], "'w' перезаписывает файл, 'a' — дописывает, 'r' — только чтение.")),
        ("single", ("Зачем нужна конструкция with open(...) as f?", "файл закроется автоматически", ["файл откроется быстрее", "файл станет доступен только для чтения", "файл создастся в облаке"], "with гарантирует закрытие файла даже при ошибке.")),
        ("single", ("Как создать пустое множество?", "set()", ["{}", "[]", "()"], "{} — это пустой словарь.")),
        ("single", ("Какой формат хранит данные в виде строк с разделителями (например, запятыми)?", "CSV", ["JSON", "PNG", "EXE"], "CSV — comma-separated values.")),
        ("multiple", ("Что верно о множествах (set)?", ["элементы не повторяются", "порядок элементов не гарантирован", "проверка x in s выполняется быстро"], ["к элементу можно обратиться по индексу s[0]", "можно хранить списки"], "Множества неупорядочены и хранят только хешируемые значения.")),
        ("multiple", ("Какие блоки может содержать конструкция try?", ["except", "else", "finally"], ["elif", "catch"], "В Python: try / except / else / finally. catch — из других языков.")),
    ]
    fams = [("single", f) for f in (dct, dupd, sets, setmisc, files, tryex)]
    fams += [("multiple", m_dict), ("multiple", m_set), ("matching", mt_dict), ("matching", mt_err)]
    return fams, concepts


# ================================================================ МОДУЛЬ 8
def m8_families():
    def tobase(b):
        r = b.r
        n = r.randint(5, 300)
        f = r.choice(["bin", "oct", "hex"])
        code = f"print({f}({n}))"
        b.single_code("Что выведет программа?", code, [f"print({g}({n}))" for g in ["bin", "oct", "hex"] if g != f] + [f"print({f}({n + 1}))", f"print({f}({n - 1}))"],
                      explain="bin — двоичная (0b), oct — восьмеричная (0o), hex — шестнадцатеричная (0x).")

    def frombase(b):
        r = b.r
        base = r.choice([2, 8, 16, 3, 5])
        n = r.randint(5, 200)
        s = ""
        x = n
        while x:
            s = "0123456789abcdef"[x % base] + s
            x //= base
        code = f"print(int('{s}', {base}))"
        b.single_code(f"Что выведет программа?", code, [f"print(int('{s}', {bb}))" for bb in (2, 8, 10, 16) if bb != base and all(c in '0123456789abcdef'[:bb] for c in s)] + [f"print({n + 1})", f"print({n - 1})", f"print({n * 2})"],
                      explain=f"int(строка, основание) переводит запись числа из системы с указанным основанием в десятичную.")

    def manual(b):
        r = b.r
        n = r.randint(10, 255)
        base = r.choice([2, 3, 8])
        code = f"n = {n}\ns = ''\nwhile n > 0:\n    s = str(n % {base}) + s\n    n //= {base}\nprint(s)"
        b.single_code("Что выведет программа?", code, [code.replace(f"s = str(n % {base}) + s", f"s = s + str(n % {base})"), code.replace(f"% {base}", f"% {base + 1 if base < 9 else 2}", 1).replace(f"//= {base}", f"//= {base + 1 if base < 9 else 2}")],
                      explain="Перевод делением: остатки от деления на основание, записанные в обратном порядке.")

    def bits(b):
        r = b.r
        n = r.randint(20, 1000)
        e = r.choice(["bin(n).count('1')", "len(bin(n)) - 2", "bin(n)[-1]", "n & 1", "n >> 1", "n << 2", "bin(n)[2:].count('0')", "n % 8"])
        code = f"n = {n}\nprint({e})"
        alts = [f"n = {n}\nprint({x})" for x in ["bin(n).count('1')", "len(bin(n))", "bin(n).count('0')", "n // 2", "n * 2", "n % 2"] if x != e]
        b.single_code("Что выведет программа?", code, r.sample(alts, 4), explain="bin(n) возвращает строку с префиксом '0b' — его длину 2 нужно вычитать; n &gt;&gt; 1 — целочисленное деление на 2, n &lt;&lt; 2 — умножение на 4.")

    def compare_bases(b):
        r = b.r
        nums = [r.randint(20, 120) for _ in range(4)]
        reps = [r.choice([("bin", 2), ("oct", 8), ("hex", 16)]) for _ in nums]
        shown = []
        for n, (f, _) in zip(nums, reps):
            s = eval(f"{f}({n})")[2:]
            shown.append(f"{s} ({ {'bin': 'двоичн.', 'oct': 'восьмер.', 'hex': 'шестнадцатер.'}[f]})")
        mx = shown[nums.index(max(nums))]
        if nums.count(max(nums)) > 1:
            return
        b.single("Какое из чисел наибольшее?", mx, [s for s in shown if s != mx], explain="Переведите все числа в десятичную систему и сравните.", code_opts=False)

    def rnd(b):
        r = b.r
        a, c = sorted(r.sample(range(0, 12), 2))
        f = r.choice([("random.randint", "randint({a}, {c})", lambda: set(range(a, c + 1))), ("random.randrange", "randrange({a}, {c})", lambda: set(range(a, c))), ("random.randrange", "randrange({a}, {c}, 2)", lambda: set(range(a, c, 2)))])
        expr = f[1].format(a=a, c=c)
        vals = sorted(f[2]())
        if not vals:
            return
        b.single(f"Сколько различных значений может вернуть вызов random.{expr}?", str(len(vals)), [str(len(vals) + 1), str(len(vals) - 1), str(c - a + 2), str(max(1, (c - a) // 2))],
                 explain="randint(a, b) включает обе границы, randrange(a, b) — не включает b (как range).", code_opts=False)

    def m_equal(b):
        r = b.r
        n = r.randint(20, 120)
        pool = [f"0b{n:b}", f"0o{n:o}", f"0x{n:x}", f"{n}", f"0b{n + 1:b}", f"0o{n - 1:o}", f"0x{n * 2:x}", f"int('{n:b}', 2)", f"int('{n:o}', 10)", f"0x{n:X}"]
        b.multiple_pick(f"Какие записи на Python равны числу {n}?", pool, lambda e: eval(e) == n,
                        explain="Префиксы 0b, 0o, 0x задают двоичную, восьмеричную и шестнадцатеричную запись; регистр букв в hex не важен.")

    def m_random(b):
        a, c = b.r.sample(range(1, 6), 2)
        a, c = min(a, c), max(a, c) + 2
        pool = [str(v) for v in range(a - 1, c + 2)]
        b.multiple_pick(f"Какие значения может вернуть random.randint({a}, {c})?", pool, lambda s: a <= int(s) <= c, code_opts=False,
                        explain="randint включает обе границы.")

    def mt_bases(b):
        r = b.r
        nums = r.sample(range(5, 64), 4)
        f = r.choice([("bin", "двоичной"), ("oct", "восьмеричной"), ("hex", "шестнадцатеричной")])
        pairs = [(str(n), eval(f"{f[0]}({n})")[2:]) for n in nums]
        dis = [eval(f"{f[0]}({n + 1})")[2:] for n in nums[:2]]
        b.matching(f"Сопоставьте десятичное число и его запись в {f[1]} системе.", pairs, "Переводите делением на основание с записью остатков в обратном порядке.", dis)

    def mt_rand(b):
        pool = {"random.randint(1, 6)": "целое от 1 до 6 включительно", "random.random()": "вещественное от 0 до 1 (1 не включается)", "random.choice('abc')": "один символ из 'abc'",
                "random.randrange(0, 10, 2)": "чётное от 0 до 8", "random.uniform(1, 2)": "вещественное от 1 до 2", "random.sample(range(10), 3)": "список из 3 разных чисел"}
        keys = b.r.sample(list(pool), 4)
        b.matching("Сопоставьте вызов и то, что он возвращает.", [(k, pool[k]) for k in keys], "randint включает правую границу, randrange — нет; sample выбирает без повторов.",
                   [pool[k] for k in pool if k not in keys])

    concepts = [
        ("single", ("Сколько цифр используется в шестнадцатеричной системе счисления?", "16", ["15", "10", "8"], "Цифры 0–9 и буквы A–F.")),
        ("single", ("Какое наибольшее число можно записать восемью двоичными разрядами?", "255", ["256", "128", "127"], "2⁸ − 1 = 255.")),
        ("single", ("Что нужно, чтобы random выдавал одну и ту же последовательность при каждом запуске?", "вызвать random.seed с одним и тем же числом", ["использовать randint вместо random", "импортировать random дважды", "это невозможно"], "seed задаёт начальное состояние генератора.")),
        ("single", ("Какой цифре соответствует F в шестнадцатеричной системе?", "15", ["16", "14", "F не является цифрой"], "A = 10, B = 11, …, F = 15.")),
        ("multiple", ("Какие числа являются чётными (последняя двоичная цифра — 0)?", ["1010₂", "110₂", "100₂"], ["111₂", "1011₂", "1₂"], "Число чётно, если последний двоичный разряд равен 0.")),
        ("multiple", ("Какие функции модуля random возвращают целое число?", ["randint", "randrange"], ["random", "uniform", "shuffle"], "random и uniform дают float; shuffle перемешивает список на месте и возвращает None.")),
    ]
    fams = [("single", f) for f in (tobase, frombase, manual, bits, compare_bases, rnd)]
    fams += [("multiple", m_equal), ("multiple", m_random), ("matching", mt_bases), ("matching", mt_rand)]
    return fams, concepts


# ================================================================ МОДУЛЬ 12 (практикум)
def m12_families():
    """Сквозной практикум: шаблоны тем модулей 1–7 + match/case и последовательности."""
    def pick(src, names):
        fams, _ = src()
        return [(k, f) for k, f in fams if f.__name__ in names]

    fams = []
    fams += pick(m1_families, {"arith", "digits", "mathf", "m_equal", "mt_expr"})          # формулы, целые числа
    fams += pick(m2_families, {"boolexpr", "ifchain", "nested", "m_values", "mt_input"})    # логика, условия
    fams += pick(m3_families, {"forsum", "whilet", "digitsum", "minmax", "m_loops"})        # циклы, min/max
    fams += pick(m4_families, {"slc", "meth", "loopstr", "mt_meth"})                         # строки
    fams += pick(m5_families, {"lst", "matrix", "comp", "mt_methods"})                       # массивы, матрицы
    fams += pick(m6_families, {"fret", "rec", "recprint", "mt_rec"})                         # функции, рекурсия
    fams += pick(m7_families, {"files"})                                                     # файлы

    def match_val(b):
        r = b.r
        x = r.randint(0, 9)
        code = (f"x = {x}\nmatch x:\n    case 0:\n        print('ноль')\n    case 1 | 3 | 5 | 7 | 9:\n        print('нечётная')\n"
                f"    case 2 | 4:\n        print('малая чётная')\n    case _:\n        print('другая')")
        b.single_code("Что выведет программа?", code, extra_wrong=["ноль", "нечётная", "малая чётная", "другая"],
                      explain="match сверяет значение с образцами сверху вниз; | означает «или», case _ срабатывает, если не подошёл ни один образец.")

    def match_guard(b):
        r = b.r
        n = r.randint(-20, 120)
        code = (f"n = {n}\nmatch n:\n    case k if k < 0:\n        print('отрицательное')\n    case 0:\n        print('ноль')\n"
                f"    case k if k < 10:\n        print('цифра')\n    case k if k < 100:\n        print('двузначное')\n    case _:\n        print('большое')")
        b.single_code("Что выведет программа?", code, extra_wrong=["отрицательное", "ноль", "цифра", "двузначное", "большое"],
                      explain="Условие после if в case (guard) проверяется только для подошедшего образца; срабатывает первый case с истинным условием.")

    def match_cmd(b):
        r = b.r
        cmd = r.choice(["go north", "go", "look", "take key", "quit", "jump high", "take"])
        code = (f"cmd = '{cmd}'\nmatch cmd.split():\n    case ['go', d]:\n        print('идём', d)\n    case ['take', item]:\n        print('берём', item)\n"
                f"    case ['look'] | ['quit']:\n        print('команда', cmd)\n    case _:\n        print('непонятно')")
        b.single_code("Что выведет программа?", code, extra_wrong=["непонятно", f"команда {cmd}", "идём north", "берём key", "Ошибка"],
                      explain="Образец-список ['go', d] подходит только к списку ровно из двух элементов, где первый — 'go'; d получает второй элемент.")

    def match_vs_if(b):
        r = b.r
        m = r.randint(1, 12)
        code = (f"m = {m}\nmatch m:\n    case 12 | 1 | 2:\n        s = 'зима'\n    case 3 | 4 | 5:\n        s = 'весна'\n    case 6 | 7 | 8:\n        s = 'лето'\n    case _:\n        s = 'осень'\nprint(s)")
        b.single_code("Месяц задан номером m. Что выведет программа?", code, extra_wrong=["зима", "весна", "лето", "осень"],
                      explain="Каждый case перечисляет подходящие значения через |; case _ ловит всё остальное.")

    def mt_match(b):
        code = ("match t:\n    case (0, 0):\n        r = 'начало'\n    case (0, y):\n        r = 'ось Y'\n    case (x, 0):\n        r = 'ось X'\n    case _:\n        r = 'плоскость'")
        pts = b.r.sample([(0, 0), (0, 5), (0, -2), (3, 0), (-4, 0), (2, 2), (-1, 7)], 6)
        pairs, seen = [], set()
        for p in pts:
            v = run(f"t = {p}\n{code}\nprint(r)")
            if v not in seen:
                seen.add(v)
                pairs.append((f"t = {p}", v))
        if len(pairs) >= 3:
            b.matching(f"Дан фрагмент:<pre>{esc(code)}</pre>Сопоставьте значение t и результат r.", pairs[:4],
                       "Образец (0, y) подходит к любой паре с первым элементом 0 и записывает второй элемент в y.")

    def series(b):
        r = b.r
        a = [r.randint(-9, 15) for _ in range(r.randint(6, 9))]
        if 0 not in a[2:]:
            a[r.randint(3, len(a) - 1)] = 0
        body = r.choice([
            "s = 0\nfor x in a:\n    if x == 0:\n        break\n    s += x\nprint(s)",
            "k = 0\nfor x in a:\n    if x > 0:\n        k += 1\nprint(k)",
            "k = 0\nfor i in range(1, len(a)):\n    if a[i] > a[i - 1]:\n        k += 1\nprint(k)",
            "s = 0\nfor i in range(len(a)):\n    if i % 2 == 0:\n        s += a[i]\nprint(s)",
            "best = 0\ncur = 0\nfor x in a:\n    cur = cur + 1 if x > 0 else 0\n    best = max(best, cur)\nprint(best)",
        ])
        code = f"a = {a}\n{body}"
        b.single_code("Последовательность чисел задана списком. Что выведет программа?", code,
                      [code.replace("break", "continue"), code.replace("x > 0", "x >= 0"), code.replace("range(1,", "range(2,"), code.replace("i % 2 == 0", "i % 2 == 1")],
                      explain="Задачи на последовательности: проход по элементам с накоплением суммы, счётчика или длины серии; break останавливает обработку.")

    fams += [("single", match_val), ("single", match_guard), ("single", match_cmd), ("single", match_vs_if), ("single", series), ("matching", mt_match)]

    concepts = [
        ("single", ("С какой версии Python доступен оператор match / case?", "3.10", ["3.6", "3.8", "2.7"], "match/case появился в Python 3.10; в старых версиях вызовет SyntaxError.")),
        ("single", ("Что означает образец case _: в конструкции match?", "любое значение (ветка «иначе»)", ["пустую строку", "None", "ошибку"], "_ — образец-джокер, подходит ко всему; обычно его ставят последним.")),
        ("single", ("Какой конструкцией можно заменить match / case в ЕНТ-задачах?", "цепочкой if – elif – else", ["циклом while", "функцией map", "конструкцией try – except"], "Каждый case соответствует одной ветке elif.")),
        ("single", ("Что выполнится, если ни один case не подошёл и нет case _?", "ничего — выполнение продолжится после match", ["ошибка MatchError", "первый case", "последний case"], "В отличие от некоторых языков, отсутствие совпадения — не ошибка.")),
        ("multiple", ("Какие записи образцов в case допустимы?", ["case 1 | 2 | 3:", "case [x, y]:", "case n if n > 0:", "case _:"], ["case > 5:", "case x == 3:"], "Сравнения пишут в guard (if), а не прямо в образце.")),
        ("multiple", ("Какие типы задач входят в классические задачники (раздел — тема)?", ["Integer — целочисленная арифметика", "Boolean — логические выражения", "Series — последовательности"], ["Graphics — рисование", "Network — работа с сетью"], "Разделы практикума: Begin, Integer, Boolean, If, Case, For, While, Series, Proc, Minmax, Array, Matrix, String, Recursion, File.")),
    ]
    return fams, concepts


MODULES = {"m1": m1_families, "m2": m2_families, "m3": m3_families, "m4": m4_families,
           "m5": m5_families, "m6": m6_families, "m7": m7_families, "m8": m8_families,
           "m12": m12_families}


def build(mid, seed, seen=None):
    fams, concepts = MODULES[mid]()
    b = Bank(mid, seed)
    if seen:
        b.seen |= seen   # не повторять вопросы других модулей
    for kind, data in concepts:          # сначала теория — она всегда входит
        b.concept(kind, data)
    b.fill(fams)
    # перемешиваем типы, чтобы в каждой части были все три вида вопросов
    qs = b.items["single"] + b.items["multiple"] + b.items["matching"]
    b.r.shuffle(qs)
    ALL_SEEN.update(b.seen)
    return qs


ALL_SEEN = set()


def validate(mid, qs):
    assert len(qs) == 100, (mid, len(qs))
    for i, q in enumerate(qs):
        t = q["type"]
        if t == "single":
            assert len(q["options"]) == 4 and len(set(q["options"])) == 4, (mid, i, q)
            assert 0 <= q["answer"] < 4
        elif t == "multiple":
            assert 2 <= len(q["answer"]) < len(q["options"]), (mid, i, q)
        elif t == "matching":
            rs = [p["right"] for p in q["pairs"]]
            assert len(set(rs)) == len(rs) and len(rs) >= 3, (mid, i, q)
        # ответ «Ошибка» допустим, но варианты не должны состоять сплошь из ошибок
        if t == "single":
            assert sum(o == "Ошибка" for o in q["options"]) <= 1, (mid, i, q)


# Подключение к модулям: вариант 0 — прежний итоговый тест (он и даёт зачёт модуля),
# варианты 1–4 — тренажёр по 25 вопросов (тренировка, на зачёт не влияет).
ATTACH = """
(function () {
  if (typeof COURSE === "undefined") return;
  COURSE.modules.forEach(function (m) {
    var qs = window.QUESTION_BANKS[m.id];
    if (!qs || !m.quiz || m.quizzes) return;
    m.quizzes = [{ id: "final", title: "Итоговый тест модуля", questions: m.quiz }];
    for (var k = 0; k < 4; k++) {
      m.quizzes.push({ id: "bank" + (k + 1), label: "Тренажёр " + (k + 1), bank: true, counts: false,
        title: "Тренажёр, часть " + (k + 1) + " (вопросы " + (k * 25 + 1) + "–" + (k * 25 + 25) + " из 100)",
        questions: qs.slice(k * 25, k * 25 + 25) });
    }
  });
})();
"""


if __name__ == "__main__":
    out = {}
    for k, mid in enumerate(MODULES):
        # модули 1–8 строятся как раньше (те же вопросы), практикум — без повторов с ними
        qs = build(mid, 1000 + k, set(ALL_SEEN) if mid == "m12" else None)
        validate(mid, qs)
        out[mid] = qs
        c = {t: sum(q["type"] == t for q in qs) for t in PER_MODULE}
        print(mid, c, "с «Ошибка» в ответе:", sum(1 for q in qs if q["type"] == "single" and q["options"][q["answer"]] == "Ошибка"))
    js = ("/* Банки тренировочных вопросов (по 100 на модули 1–8 и 12).\n"
          "   Сгенерировано tools/gen_banks.py: каждый ответ вычислен запуском кода. Не редактируйте вручную. */\n"
          "window.QUESTION_BANKS = " + json.dumps(out, ensure_ascii=False, indent=0) + ";\n" + ATTACH)
    with open(os.path.join(ROOT, "question_banks.js"), "w", encoding="utf-8") as f:
        f.write(js)
    print("question_banks.js:", round(len(js) / 1024), "КБ")
