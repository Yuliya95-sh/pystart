/* =========================================================
   PyStart — дополнительные задачи, часть 5: модули 6 и 8.
   Формат — как в extra_tasks.js (output можно не писать;
   chk(...) — проверка функции ученика).
   ========================================================= */
(function () {
  const T = {
    /* ==================== МОДУЛЬ 6: функции и рекурсия ==================== */
    m6: [
      {
        id: "k1", title: "Палиндром-фраза", level: "Лёгкая",
        statement: `<p>Напишите функцию <code>is_palindrome(s)</code>, которая возвращает True, если строка читается одинаково в обе стороны без учёта регистра и пробелов.</p>`,
        starter: py`
def is_palindrome(s):
    pass
`,
        solution: py`
def is_palindrome(s):
    t = s.replace(" ", "").lower()
    return t == t[::-1]`,
        tests: [chk('is_palindrome("level")', "True"), chk('is_palindrome("А роза упала на лапу Азора")', "True"), chk('is_palindrome("python")', "False"),
          chk('is_palindrome("")', "True", true), chk('is_palindrome("ab")', "False", true), chk('is_palindrome("Никон  ноКИН")', "True", true)],
      },
      {
        id: "k2", title: "НОД и НОК", level: "Лёгкая",
        statement: `<p>Напишите функции <code>gcd(a, b)</code> (алгоритм Евклида, без <code>math.gcd</code>) и <code>lcm(a, b)</code>, которая использует <code>gcd</code>.</p>`,
        starter: py`
def gcd(a, b):
    pass


def lcm(a, b):
    pass
`,
        solution: py`
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a


def lcm(a, b):
    return a * b // gcd(a, b)`,
        tests: [chk("gcd(12, 18)", "6"), chk("lcm(4, 6)", "12"), chk("gcd(17, 5)", "1", true), chk("lcm(21, 6)", "42", true), chk("gcd(0, 9)", "9", true), chk("lcm(7, 7)", "7", true)],
      },
      {
        id: "k3", title: "Быстрый Фибоначчи с запоминанием", level: "Средняя",
        statement: `<p>Наивная рекурсия <code>fib(n - 1) + fib(n - 2)</code> для n = 90 работала бы годами. Напишите рекурсивную функцию <code>fib(n)</code> (fib(0) = 0, fib(1) = 1) с <b>запоминанием</b> уже посчитанных значений в словаре.</p>`,
        starter: py`
memo = {}


def fib(n):
    pass
`,
        hint: `<p>В начале функции: если n уже есть в словаре <code>memo</code> — вернуть сохранённое значение. Иначе посчитать, записать в <code>memo[n]</code> и вернуть. Готовый декоратор для этого — <code>functools.lru_cache</code>.</p>`,
        solution: py`
memo = {}


def fib(n):
    if n < 2:
        return n
    if n not in memo:
        memo[n] = fib(n - 1) + fib(n - 2)
    return memo[n]`,
        tests: [chk("fib(10)", "55"), chk("fib(1)", "1"), chk("fib(90)", "2880067194370816120", true), chk("fib(0)", "0", true), chk("fib(50)", "12586269025", true)],
      },
      {
        id: "k4", title: "Быстрое возведение в степень", level: "Средняя",
        statement: `<p>Напишите рекурсивную функцию <code>power(a, n)</code> (n ≥ 0) без <code>**</code> и <code>pow</code>, которая делает O(log n) умножений: если n чётное, то aⁿ = (a^(n/2))², иначе aⁿ = a · aⁿ⁻¹.</p>`,
        starter: py`
def power(a, n):
    pass
`,
        solution: py`
def power(a, n):
    if n == 0:
        return 1
    if n % 2 == 0:
        half = power(a, n // 2)
        return half * half
    return a * power(a, n - 1)`,
        tests: [chk("power(2, 10)", "1024"), chk("power(3, 0)", "1"), chk("power(2, 64)", "18446744073709551616", true), chk("power(-3, 3)", "-27", true), chk("power(7, 1)", "7", true)],
      },
      {
        id: "k5", title: "Подсчёт гласных и согласных", level: "Лёгкая",
        statement: `<p>Напишите функцию <code>count_letters(s)</code>, которая возвращает кортеж (количество гласных, количество согласных) — русских и латинских букв без учёта регистра. Гласные: <code>аеёиоуыэюя</code> и <code>aeiou</code>; все остальные буквы — согласные; не буквы не считаются.</p>`,
        starter: py`
def count_letters(s):
    pass
`,
        solution: py`
def count_letters(s):
    v = c = 0
    for ch in s.lower():
        if ch.isalpha():
            if ch in "аеёиоуыэюяaeiou":
                v += 1
            else:
                c += 1
    return v, c`,
        tests: [chk('count_letters("Python")', "(1, 5)"), chk('count_letters("Мама мыла раму")', "(6, 6)"), chk('count_letters("123 !")', "(0, 0)", true), chk('count_letters("AEIOU bcd")', "(5, 3)", true)],
      },
      {
        id: "k6", title: "Цифровой корень", level: "Лёгкая",
        statement: `<p>Цифровой корень числа — результат многократного сложения цифр, пока не останется одна цифра: 9875 → 29 → 11 → 2. Напишите <b>рекурсивные</b> функции <code>digit_sum(n)</code> (сумма цифр) и <code>digital_root(n)</code>.</p>`,
        starter: py`
def digit_sum(n):
    pass


def digital_root(n):
    pass
`,
        solution: py`
def digit_sum(n):
    return n if n < 10 else n % 10 + digit_sum(n // 10)


def digital_root(n):
    return n if n < 10 else digital_root(digit_sum(n))`,
        tests: [chk("digit_sum(9875)", "29"), chk("digital_root(9875)", "2"), chk("digital_root(7)", "7", true), chk("digital_root(999999999999)", "9", true), chk("digit_sum(0)", "0", true)],
      },
      {
        id: "k7", title: "Бинарный поиск функцией", level: "Средняя",
        statement: `<p>Напишите функцию <code>bin_search(a, x)</code>, которая в отсортированном по возрастанию списке a находит индекс элемента x бинарным поиском, или возвращает −1, если x нет. Если x встречается несколько раз, верните индекс <b>первого</b> вхождения.</p>`,
        starter: py`
def bin_search(a, x):
    pass
`,
        hint: `<p>Найдя x в середине, не останавливайтесь: запомните индекс и продолжайте искать левее (<code>right = mid - 1</code>).</p>`,
        solution: py`
def bin_search(a, x):
    left, right = 0, len(a) - 1
    res = -1
    while left <= right:
        mid = (left + right) // 2
        if a[mid] == x:
            res = mid
            right = mid - 1
        elif a[mid] < x:
            left = mid + 1
        else:
            right = mid - 1
    return res`,
        tests: [chk("bin_search([1, 3, 5, 7, 9], 7)", "3"), chk("bin_search([1, 3, 5], 4)", "-1"), chk("bin_search([2, 2, 2, 3], 2)", "0", true),
          chk("bin_search([], 1)", "-1", true), chk("bin_search(list(range(0, 1000000, 2)), 777778)", "388889", true)],
      },
      {
        id: "k8", title: "Ханойская башня", level: "Сложная",
        statement: `<p>Нужно перенести n дисков со стержня 1 на стержень 3, перекладывая по одному диску и не кладя больший на меньший. Напишите рекурсивную функцию <code>hanoi(n, a=1, b=3, c=2)</code>, которая возвращает <b>список ходов</b> — пар (откуда, куда).</p>
          <p>Идея: перенести n − 1 диск на вспомогательный стержень, переложить самый большой диск, затем перенести n − 1 дисков на него сверху.</p>`,
        starter: py`
def hanoi(n, a=1, b=3, c=2):
    pass
`,
        solution: py`
def hanoi(n, a=1, b=3, c=2):
    if n == 0:
        return []
    return hanoi(n - 1, a, c, b) + [(a, b)] + hanoi(n - 1, c, b, a)`,
        tests: [chk("hanoi(1)", "[(1, 3)]"), chk("hanoi(2)", "[(1, 2), (1, 3), (2, 3)]"), chk("len(hanoi(3))", "7", true), chk("len(hanoi(10))", "1023", true), chk("hanoi(3)[3]", "(1, 3)", true)],
      },
      {
        id: "k9", title: "Распрямление вложенного списка", level: "Средняя",
        statement: `<p>Напишите рекурсивную функцию <code>flatten(lst)</code>, которая превращает список с любой глубиной вложенности в плоский: <code>[1, [2, [3, 4]], 5]</code> → <code>[1, 2, 3, 4, 5]</code>.</p>`,
        starter: py`
def flatten(lst):
    pass
`,
        hint: `<p>Для каждого элемента: если это список (<code>isinstance(x, list)</code>) — добавьте к результату <code>flatten(x)</code>, иначе — сам элемент.</p>`,
        solution: py`
def flatten(lst):
    res = []
    for x in lst:
        if isinstance(x, list):
            res += flatten(x)
        else:
            res.append(x)
    return res`,
        tests: [chk("flatten([1, [2, [3, 4]], 5])", "[1, 2, 3, 4, 5]"), chk("flatten([])", "[]"), chk("flatten([[[[7]]], [], [8, [9]]])", "[7, 8, 9]", true), chk('flatten(["a", ["b"]])', '["a", "b"]', true)],
      },
      {
        id: "k10", title: "Все перестановки", level: "Сложная",
        statement: `<p>Напишите рекурсивную функцию <code>perms(s)</code>, которая возвращает <b>отсортированный список различных</b> перестановок букв строки s (без <code>itertools</code>).</p>`,
        starter: py`
def perms(s):
    pass
`,
        hint: `<p>Перестановки строки — это каждая буква s[i], к которой приписаны перестановки остальных букв <code>s[:i] + s[i + 1:]</code>. Повторы уберите множеством, потом отсортируйте.</p>`,
        solution: py`
def perms(s):
    if len(s) <= 1:
        return [s]
    res = set()
    for i in range(len(s)):
        for p in perms(s[:i] + s[i + 1:]):
            res.add(s[i] + p)
    return sorted(res)`,
        tests: [chk('perms("ab")', '["ab", "ba"]'), chk('perms("aab")', '["aab", "aba", "baa"]'), chk('len(perms("abcd"))', "24", true), chk('perms("a")', '["a"]', true), chk('perms("abc")[3]', '"bca"', true)],
      },
      {
        id: "k11", title: "Счётчик-замыкание", level: "Средняя",
        statement: `<p>Напишите функцию <code>make_counter(start=0, step=1)</code>, которая возвращает функцию без параметров: при каждом вызове та увеличивает внутренний счётчик на step и возвращает его новое значение. У разных счётчиков значения независимы.</p>`,
        starter: py`
def make_counter(start=0, step=1):
    pass
`,
        hint: `<p>Внутри — вложенная функция, которая меняет переменную внешней функции через <code>nonlocal</code>.</p>`,
        solution: py`
def make_counter(start=0, step=1):
    value = start

    def counter():
        nonlocal value
        value += step
        return value

    return counter`,
        tests: [chk("(lambda c: [c(), c(), c()])(make_counter())", "[1, 2, 3]"), chk("(lambda c: [c(), c()])(make_counter(10, 5))", "[15, 20]"),
          chk("(lambda a, b: [a(), a(), b()])(make_counter(), make_counter())", "[1, 2, 1]", true), chk("make_counter(step=-1)()", "-1", true)],
      },
      {
        id: "k12", title: "Карточка ученика (**kwargs)", level: "Лёгкая",
        statement: `<p>Напишите функцию <code>card(name, **info)</code>, которая возвращает строку вида <code>Айгерим: класс=11, город=Алматы</code> — пары ключ=значение в порядке передачи через запятую с пробелом. Если дополнительных данных нет, вернуть просто имя.</p>`,
        starter: py`
def card(name, **info):
    pass
`,
        solution: py`
def card(name, **info):
    if not info:
        return name
    return name + ": " + ", ".join(f"{k}={v}" for k, v in info.items())`,
        tests: [chk('card("Айгерим", класс=11, город="Алматы")', '"Айгерим: класс=11, город=Алматы"'), chk('card("Тимур")', '"Тимур"'), chk('card("A", b=1)', '"A: b=1"', true), chk('card("X", z=0, y=None)', '"X: z=0, y=None"', true)],
      },
    ],

    /* ==================== МОДУЛЬ 8: системы счисления и random ==================== */
    m8: [
      {
        id: "n1", title: "Из двоичной в десятичную вручную", level: "Лёгкая",
        statement: `<p>Дана двоичная запись числа. Переведите её в десятичную систему схемой Горнера (<code>n = n * 2 + цифра</code>), не используя <code>int(s, 2)</code>.</p>`,
        starter: py`s = input()`,
        solution: py`
s = input()
n = 0
for ch in s:
    n = n * 2 + int(ch)
print(n)`,
        tests: [{ input: "1011" }, { input: "0" }, { input: "11111111", hidden: true }, { input: "10000000000", hidden: true }],
      },
      {
        id: "n2", title: "Восьмеричная и шестнадцатеричная запись", level: "Лёгкая",
        statement: `<p>Дано целое неотрицательное n. Выведите его двоичную, восьмеричную и шестнадцатеричную (заглавными буквами) записи без префиксов — каждую с новой строки.</p>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
print(format(n, "b"))
print(format(n, "o"))
print(format(n, "X"))`,
        tests: [{ input: "255" }, { input: "0" }, { input: "2026", hidden: true }],
      },
      {
        id: "n3", title: "Сложение двоичных чисел", level: "Средняя",
        statement: `<p>Даны два двоичных числа (каждое на отдельной строке). Сложите их «столбиком» справа налево с переносом и выведите результат в двоичной записи (без <code>int</code> и <code>bin</code>).</p>`,
        starter: py`
a = input()
b = input()
`,
        hint: `<p>Выровняйте длины: <code>a.zfill(n)</code>. Идите с конца: цифра суммы — <code>(x + y + carry) % 2</code>, перенос — <code>// 2</code>. Не забудьте перенос в старший разряд.</p>`,
        solution: py`
a = input()
b = input()
n = max(len(a), len(b))
a, b = a.zfill(n), b.zfill(n)
res = ""
carry = 0
for i in range(n - 1, -1, -1):
    s = int(a[i]) + int(b[i]) + carry
    res = str(s % 2) + res
    carry = s // 2
if carry:
    res = "1" + res
print(res)`,
        tests: [{ input: "1011\n110" }, { input: "1\n1" }, { input: "0\n0", hidden: true }, { input: "11111111\n1", hidden: true }],
      },
      {
        id: "n4", title: "Нули, единицы и разрядность", level: "Лёгкая",
        statement: `<p>Дано натуральное n. Выведите через пробел количество единиц, количество нулей в его двоичной записи и число двоичных разрядов.</p>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
b = bin(n)[2:]
print(b.count("1"), b.count("0"), len(b))`,
        tests: [{ input: "10" }, { input: "1" }, { input: "1024", hidden: true }, { input: "1000000", hidden: true }],
      },
      {
        id: "n5", title: "Сумма цифр в k-ичной системе", level: "Средняя",
        statement: `<p>Даны n и основание k (2 ≤ k ≤ 36). Найдите сумму цифр записи n в системе с основанием k (цифры считаются по значению: A = 10 и т.д.). Делением с остатком, без перевода в строку.</p>`,
        starter: py`
n = int(input())
k = int(input())
`,
        solution: py`
n = int(input())
k = int(input())
s = 0
while n > 0:
    s += n % k
    n //= k
print(s)`,
        tests: [{ input: "255\n16" }, { input: "10\n2" }, { input: "0\n7", hidden: true }, { input: "1000000\n3", hidden: true }],
      },
      {
        id: "n6", title: "Минимальное основание", level: "Средняя",
        statement: `<p>Дана запись числа из цифр и заглавных латинских букв (A = 10, …, Z = 35). Определите минимальное основание системы, в которой такая запись возможна (не меньше 2), и значение числа в этой системе. Выведите через пробел.</p>`,
        starter: py`s = input()`,
        solution: py`
DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
s = input()
base = max(2, max(DIGITS.index(ch) for ch in s) + 1)
print(base, int(s, base))`,
        tests: [{ input: "1011" }, { input: "777" }, { input: "1F", hidden: true }, { input: "Z", hidden: true }, { input: "0", hidden: true }],
      },
      {
        id: "n7", title: "Какое число больше", level: "Средняя",
        statement: `<p>В каждой из двух строк — запись числа и основание его системы через пробел (например, <code>1011 2</code>, <code>1F 16</code>). Выведите <code>&gt;</code>, <code>&lt;</code> или <code>=</code> — как первое число относится ко второму.</p>`,
        starter: py`
s1, b1 = input().split()
s2, b2 = input().split()
`,
        solution: py`
s1, b1 = input().split()
s2, b2 = input().split()
x, y = int(s1, int(b1)), int(s2, int(b2))
print(">" if x > y else "<" if x < y else "=")`,
        tests: [{ input: "1011 2\n13 8" }, { input: "FF 16\n400 8" }, { input: "101 10\n1100100 2", hidden: true }, { input: "Z 36\n100 3", hidden: true }, { input: "777 8\n1FF 16", hidden: true }],
      },
      {
        id: "n8", title: "Римские цифры → арабские", level: "Средняя",
        statement: `<p>Дано число римскими цифрами (I, V, X, L, C, D, M; от 1 до 3999). Переведите его в десятичную систему. Если цифра меньше следующей за ней, она вычитается (IV = 4, XC = 90).</p>`,
        starter: py`s = input()`,
        solution: py`
s = input()
v = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
total = 0
for i in range(len(s)):
    if i + 1 < len(s) and v[s[i]] < v[s[i + 1]]:
        total -= v[s[i]]
    else:
        total += v[s[i]]
print(total)`,
        tests: [{ input: "XIV" }, { input: "MMXXVI" }, { input: "MCMXCIX", hidden: true }, { input: "I", hidden: true }, { input: "MMMCMXCIX", hidden: true }],
      },
      {
        id: "n9", title: "Арабские → римские цифры", level: "Средняя",
        statement: `<p>Дано число от 1 до 3999. Запишите его римскими цифрами.</p>`,
        starter: py`n = int(input())`,
        hint: `<p>Таблица значений по убыванию, включая «вычитательные» пары: 1000 M, 900 CM, 500 D, 400 CD, 100 C, 90 XC, 50 L, 40 XL, 10 X, 9 IX, 5 V, 4 IV, 1 I. Пока n ≥ значения — дописываем символы и вычитаем.</p>`,
        solution: py`
n = int(input())
table = [(1000, "M"), (900, "CM"), (500, "D"), (400, "CD"), (100, "C"), (90, "XC"),
         (50, "L"), (40, "XL"), (10, "X"), (9, "IX"), (5, "V"), (4, "IV"), (1, "I")]
res = ""
for value, sym in table:
    while n >= value:
        res += sym
        n -= value
print(res)`,
        tests: [{ input: "14" }, { input: "2026" }, { input: "3999", hidden: true }, { input: "444", hidden: true }, { input: "1", hidden: true }],
      },
      {
        id: "n10", title: "Броски кубика с seed", level: "Лёгкая",
        statement: `<p>Даны seed и n. Выполните <code>random.seed(seed)</code>, затем получите n бросков кубика: <code>[random.randint(1, 6) for _ in range(n)]</code>. Выведите броски через пробел и их сумму. Благодаря seed результат одинаков при каждом запуске.</p>`,
        starter: py`
import random

seed, n = map(int, input().split())
`,
        solution: py`
import random

seed, n = map(int, input().split())
random.seed(seed)
rolls = [random.randint(1, 6) for _ in range(n)]
print(*rolls)
print(sum(rolls))`,
        tests: [{ input: "42 5" }, { input: "2026 10" }, { input: "1 1", hidden: true }],
      },
      {
        id: "n11", title: "Сколько попыток у бинарного поиска", level: "Средняя",
        statement: `<p>Компьютер угадывает число от 1 до N, каждый раз называя середину оставшегося диапазона: <code>(lo + hi) // 2</code>. Даны N и загаданное число. Выведите названные числа через пробел и количество попыток.</p>`,
        starter: py`n, secret = map(int, input().split())`,
        solution: py`
n, secret = map(int, input().split())
lo, hi = 1, n
guesses = []
while True:
    g = (lo + hi) // 2
    guesses.append(g)
    if g == secret:
        break
    if g < secret:
        lo = g + 1
    else:
        hi = g - 1
print(*guesses)
print(len(guesses))`,
        tests: [{ input: "100 73" }, { input: "100 50" }, { input: "1000 1", hidden: true }, { input: "1 1", hidden: true }],
      },
      {
        id: "n12", title: "Пароль по seed", level: "Лёгкая",
        statement: `<p>Даны seed и длина пароля. Выполните <code>random.seed(seed)</code> и составьте пароль из <code>length</code> символов, каждый — <code>random.choice(alphabet)</code>, где <code>alphabet = string.ascii_letters + string.digits</code>.</p>`,
        starter: py`
import random
import string

seed, length = map(int, input().split())
`,
        solution: py`
import random
import string

seed, length = map(int, input().split())
random.seed(seed)
alphabet = string.ascii_letters + string.digits
print("".join(random.choice(alphabet) for _ in range(length)))`,
        tests: [{ input: "7 12" }, { input: "2026 8" }, { input: "0 20", hidden: true }],
      },
      {
        id: "n13", title: "Монетка: самая длинная серия", level: "Средняя",
        statement: `<p>Даны seed и n. После <code>random.seed(seed)</code> подбросьте монетку n раз: <code>random.choice("ОР")</code>. Выведите строку результатов и длину самой длинной серии одинаковых результатов подряд.</p>`,
        starter: py`
import random

seed, n = map(int, input().split())
`,
        solution: py`
import random

seed, n = map(int, input().split())
random.seed(seed)
s = "".join(random.choice("ОР") for _ in range(n))
print(s)
best = cur = 1
for i in range(1, n):
    cur = cur + 1 if s[i] == s[i - 1] else 1
    best = max(best, cur)
print(best)`,
        tests: [{ input: "1 20" }, { input: "99 50" }, { input: "5 1", hidden: true }],
      },
      {
        id: "n14", title: "Перемешивание колоды", level: "Лёгкая",
        statement: `<p>Даны seed и n. После <code>random.seed(seed)</code> перемешайте список <code>list(range(1, n + 1))</code> функцией <code>random.shuffle</code>. Выведите перемешанный список, а второй строкой — сколько чисел остались на своих местах.</p>`,
        starter: py`
import random

seed, n = map(int, input().split())
`,
        solution: py`
import random

seed, n = map(int, input().split())
random.seed(seed)
deck = list(range(1, n + 1))
random.shuffle(deck)
print(*deck)
print(sum(1 for i, x in enumerate(deck, 1) if i == x))`,
        tests: [{ input: "3 10" }, { input: "2026 5" }, { input: "11 1", hidden: true }],
      },
      {
        id: "n15", title: "Число π методом Монте-Карло", level: "Средняя",
        statement: `<p>Бросаем n случайных точек в квадрат [0, 1) × [0, 1). Доля точек внутри четверти круга <code>x² + y² ≤ 1</code>, умноженная на 4, приближает π. Даны seed и n. После <code>random.seed(seed)</code> для каждой точки берите сначала <code>x = random.random()</code>, потом <code>y = random.random()</code>. Выведите оценку π с четырьмя знаками после точки.</p>`,
        starter: py`
import random

seed, n = map(int, input().split())
`,
        solution: py`
import random

seed, n = map(int, input().split())
random.seed(seed)
inside = 0
for _ in range(n):
    x = random.random()
    y = random.random()
    if x * x + y * y <= 1:
        inside += 1
print(f"{4 * inside / n:.4f}")`,
        tests: [{ input: "1 1000" }, { input: "42 100000" }, { input: "7 10", hidden: true }],
      },
      {
        id: "n16", title: "Двоичный палиндром", level: "Лёгкая",
        statement: `<p>Дано натуральное n. Выведите его двоичную запись и <code>да</code>, если она читается одинаково в обе стороны, иначе <code>нет</code>.</p>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
b = bin(n)[2:]
print(b)
print("да" if b == b[::-1] else "нет")`,
        tests: [{ input: "9" }, { input: "10" }, { input: "1", hidden: true }, { input: "585", hidden: true }],
      },
      {
        id: "n17", title: "Числа Армстронга", level: "Средняя",
        statement: `<p>Число Армстронга равно сумме своих цифр, возведённых в степень, равную количеству цифр: 153 = 1³ + 5³ + 3³. Даны a и b. Выведите все такие числа на отрезке [a, b] через пробел или <code>нет</code>.</p>`,
        starter: py`a, b = map(int, input().split())`,
        solution: py`
a, b = map(int, input().split())
res = []
for x in range(a, b + 1):
    d = str(x)
    if sum(int(c) ** len(d) for c in d) == x:
        res.append(x)
print(*res if res else ["нет"])`,
        tests: [{ input: "100 999" }, { input: "10 99" }, { input: "1 10000", hidden: true }],
      },
      {
        id: "n18", title: "Ровно k единиц", level: "Средняя",
        statement: `<p>Даны n и k. Сколько чисел от 1 до n включительно имеют в двоичной записи ровно k единиц? (Типичная задача ЕНТ.)</p>`,
        starter: py`n, k = map(int, input().split())`,
        solution: py`
n, k = map(int, input().split())
print(sum(1 for x in range(1, n + 1) if bin(x).count("1") == k))`,
        tests: [{ input: "10 2" }, { input: "100 1" }, { input: "1000 5", hidden: true }, { input: "1 0", hidden: true }],
      },
      {
        id: "n19", title: "Взлом шифра Цезаря", level: "Сложная",
        statement: `<p>Латинский текст зашифрован шифром Цезаря со сдвигом k вперёд (0 ≤ k ≤ 25, регистр сохраняется). Известно слово, которое есть в исходном тексте. Даны зашифрованный текст и это слово. Перебором найдите <b>наименьший</b> сдвиг, при котором расшифровка содержит слово, и выведите k и расшифрованный текст (две строки).</p>`,
        starter: py`
text = input()
word = input()
`,
        solution: py`
text = input()
word = input()


def shift(s, k):
    res = ""
    for ch in s:
        if "a" <= ch <= "z":
            res += chr((ord(ch) - 97 + k) % 26 + 97)
        elif "A" <= ch <= "Z":
            res += chr((ord(ch) - 65 + k) % 26 + 65)
        else:
            res += ch
    return res


for k in range(26):
    plain = shift(text, -k)
    if word in plain:
        print(k)
        print(plain)
        break`,
        tests: [{ input: "Khoor, Zruog!\nHello" }, { input: "abc\nabc" }, { input: "Wkh txlfn eurzq ira mxpsv\nquick", hidden: true }],
      },
      {
        id: "n20", title: "Калькулятор в системе счисления", level: "Сложная",
        statement: `<p>Дана строка вида <code>A op B base</code>: два числа в системе с основанием base (2–16, цифры больше 9 — заглавные буквы), операция <code>+</code>, <code>-</code> или <code>*</code>. Выведите результат в той же системе (для отрицательного результата — со знаком минус).</p>`,
        starter: py`
a, op, b, base = input().split()
base = int(base)
DIGITS = "0123456789ABCDEF"
`,
        solution: py`
a, op, b, base = input().split()
base = int(base)
DIGITS = "0123456789ABCDEF"
x, y = int(a, base), int(b, base)
r = x + y if op == "+" else x - y if op == "-" else x * y
sign = "-" if r < 0 else ""
r = abs(r)
if r == 0:
    print(0)
else:
    s = ""
    while r > 0:
        s = DIGITS[r % base] + s
        r //= base
    print(sign + s)`,
        tests: [{ input: "1010 + 11 2" }, { input: "FF * 2 16" }, { input: "7 - 15 8", hidden: true }, { input: "12 - 12 3", hidden: true }, { input: "777 * 777 8", hidden: true }],
      },
    ],
  };

  for (const [mid, list] of Object.entries(T)) {
    const mod = window.COURSE.modules.find((m) => m.id === mid);
    if (mod) list.forEach((t) => mod.tasks.push(Object.assign({ extra: true }, t)));
  }
})();
