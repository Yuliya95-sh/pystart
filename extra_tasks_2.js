/* =========================================================
   PyStart — дополнительные задачи, часть 2: модули 1–4.
   Формат и правила — как в extra_tasks.js (output можно не писать).
   ========================================================= */
(function () {
  const T = {
    /* ==================== МОДУЛЬ 1 ==================== */
    m1: [
      {
        id: "e1", title: "Произведение, сумма и среднее", level: "Лёгкая",
        statement: `<p>Даны два целых числа a и b (каждое на отдельной строке; числа могут быть многозначными). Выведите в отдельных строках их произведение, сумму и среднее арифметическое.</p>`,
        starter: py`
a = int(input())
b = int(input())
`,
        hint: `<p>Среднее — <code>(a + b) / 2</code>; деление <code>/</code> даёт float, поэтому, например, для 2 и 3 получится 2.5, а для 2 и 4 — 3.0.</p>`,
        solution: py`
a = int(input())
b = int(input())
print(a * b)
print(a + b)
print((a + b) / 2)`,
        tests: [
          { input: "12\n8" },
          { input: "2\n3" },
          { input: "1234\n-56", hidden: true },
          { input: "0\n0", hidden: true },
          { input: "999999\n999999", hidden: true },
        ],
      },
    ],

    /* ==================== МОДУЛЬ 2 ==================== */
    m2: [
      {
        id: "c1", title: "Покупка со скидкой", level: "Лёгкая",
        statement: `<p>Дана цена товара в тенге (целое число). Если цена 2000 тенге или больше, действует скидка 10%. Выведите итоговую цену с двумя знаками после точки.</p>`,
        starter: py`
price = int(input())
`,
        hint: `<p>Цена со скидкой — <code>price * 0.9</code>. Формат с двумя знаками: <code>f"{x:.2f}"</code>. Обратите внимание на «2000 или больше» — это <code>&gt;=</code>.</p>`,
        solution: py`
price = int(input())
if price >= 2000:
    price = price * 0.9
print(f"{price:.2f}")`,
        tests: [{ input: "2500" }, { input: "1999" }, { input: "2000", hidden: true }, { input: "0", hidden: true }, { input: "15999", hidden: true }],
      },
      {
        id: "c2", title: "Время в пути", level: "Лёгкая",
        statement: `<p>Расстояние от Алматы до Кокшетау — 1614 км. Даны расстояние (км) и скорость поезда (км/ч), каждое на отдельной строке. Выведите время в пути в часах с двумя знаками после точки. Если время больше 24 часов, второй строкой выведите <code>более 1 суток</code>.</p>`,
        starter: py`
distance = int(input())
speed = int(input())
`,
        solution: py`
distance = int(input())
speed = int(input())
t = distance / speed
print(f"{t:.2f}")
if t > 24:
    print("более 1 суток")`,
        tests: [{ input: "1614\n50" }, { input: "600\n100" }, { input: "1200\n50", hidden: true }, { input: "1201\n50", hidden: true }],
      },
      {
        id: "c3", title: "Проверки числа", level: "Лёгкая",
        statement: `<p>Дано целое число x. Выведите три строки <code>да</code> или <code>нет</code>:</p>
          <ol><li>принадлежит ли x отрезку [1, 10];</li><li>верно ли, что 10 ≤ x ≤ 100;</li><li>является ли x двузначным (для отрицательных смотрим на модуль: −42 тоже двузначное).</li></ol>`,
        starter: py`
x = int(input())
`,
        hint: `<p>Используйте двойные неравенства <code>1 &lt;= x &lt;= 10</code>. Двузначность: <code>10 &lt;= abs(x) &lt;= 99</code>.</p>`,
        solution: py`
x = int(input())
print("да" if 1 <= x <= 10 else "нет")
print("да" if 10 <= x <= 100 else "нет")
print("да" if 10 <= abs(x) <= 99 else "нет")`,
        tests: [{ input: "42" }, { input: "10" }, { input: "-42", hidden: true }, { input: "0", hidden: true }, { input: "100", hidden: true }, { input: "1", hidden: true }],
      },
      {
        id: "c4", title: "Все ли числа положительные", level: "Лёгкая",
        statement: `<p>Даны три целых числа в одной строке. Используя логические операции, выведите <code>да</code>, если все три положительные, иначе <code>нет</code>.</p>`,
        starter: py`
a, b, c = map(int, input().split())
`,
        solution: py`
a, b, c = map(int, input().split())
if a > 0 and b > 0 and c > 0:
    print("да")
else:
    print("нет")`,
        tests: [{ input: "1 2 3" }, { input: "5 0 7" }, { input: "-1 -2 -3", hidden: true }, { input: "100 1 -1", hidden: true }],
      },
      {
        id: "c5", title: "Два числа", level: "Средняя",
        statement: `<p>Даны два целых числа a и b в одной строке. Выведите две строки:</p>
          <ol><li>если числа не равны — <code>yes</code>; если равны — оба числа, увеличенные в 5 раз, через пробел;</li>
          <li>если оба числа положительные — их среднее арифметическое; если оба отрицательные — сумму их квадратов; иначе — <code>нет действия</code>.</li></ol>`,
        starter: py`
a, b = map(int, input().split())
`,
        solution: py`
a, b = map(int, input().split())
if a != b:
    print("yes")
else:
    print(a * 5, b * 5)
if a > 0 and b > 0:
    print((a + b) / 2)
elif a < 0 and b < 0:
    print(a ** 2 + b ** 2)
else:
    print("нет действия")`,
        tests: [{ input: "3 7" }, { input: "-2 -2" }, { input: "0 5", hidden: true }, { input: "4 4", hidden: true }, { input: "-3 6", hidden: true }],
      },
      {
        id: "c6", title: "Периметры двух треугольников", level: "Средняя",
        statement: `<p>В первой строке — стороны первого треугольника a, b, c, во второй — второго: d, e, f (целые числа). Выведите:</p>
          <ol><li>периметр первого треугольника, а если он нечётный — периметр, умноженный на 3;</li><li>то же для второго;</li>
          <li><code>периметры равны</code> или <code>периметры не равны</code> (сравниваются исходные периметры).</li></ol>`,
        starter: py`
a, b, c = map(int, input().split())
d, e, f = map(int, input().split())
`,
        solution: py`
a, b, c = map(int, input().split())
d, e, f = map(int, input().split())
p1 = a + b + c
p2 = d + e + f
print(p1 * 3 if p1 % 2 == 1 else p1)
print(p2 * 3 if p2 % 2 == 1 else p2)
print("периметры равны" if p1 == p2 else "периметры не равны")`,
        tests: [{ input: "3 4 5\n2 5 5" }, { input: "3 3 3\n1 1 1" }, { input: "5 5 6\n4 6 6", hidden: true }, { input: "7 8 9\n6 6 6", hidden: true }],
      },
      {
        id: "c7", title: "Площадь квадрата", level: "Лёгкая",
        statement: `<p>Дана площадь квадрата S (квадрат целого числа). Если сторона квадрата чётная, выведите площадь, уменьшенную в 2 раза, иначе — саму площадь.</p>`,
        starter: py`
import math

s = int(input())
`,
        hint: `<p>Сторона — <code>math.isqrt(s)</code> (целый квадратный корень) или <code>int(s ** 0.5)</code>. Если сторона чётная, площадь делится на 4, поэтому <code>s // 2</code> — целое.</p>`,
        solution: py`
import math

s = int(input())
side = math.isqrt(s)
if side % 2 == 0:
    print(s // 2)
else:
    print(s)`,
        tests: [{ input: "16" }, { input: "25" }, { input: "100", hidden: true }, { input: "1", hidden: true }, { input: "0", hidden: true }],
      },
      {
        id: "c8", title: "Деньги Ернура", level: "Лёгкая",
        statement: `<p>Дано количество денег у Ернура (тенге). Если больше 1000 — выведите <code>много денег</code>, если от 100 до 1000 включительно — <code>достаточно денег</code>, если меньше 100 — <code>недостаточно денег</code>.</p>
          <p class="small muted">В исходной формулировке не было сказано, что делать ровно при 100 и 1000 тенге; здесь границы уточнены.</p>`,
        starter: py`
money = int(input())
`,
        solution: py`
money = int(input())
if money > 1000:
    print("много денег")
elif money >= 100:
    print("достаточно денег")
else:
    print("недостаточно денег")`,
        tests: [{ input: "1500" }, { input: "500" }, { input: "99", hidden: true }, { input: "100", hidden: true }, { input: "1000", hidden: true }, { input: "1001", hidden: true }],
      },
      {
        id: "c9", title: "Знак и чётность числа", level: "Средняя",
        statement: `<p>Дано целое число x. Если x = 0, выведите одну строку <code>введите число, отличное от 0</code>. Иначе выведите две строки:</p>
          <ol><li>x + 5, если x положительное, или x − 10, если отрицательное;</li><li>x + 5, если x нечётное, или x, уменьшенное в 2 раза (целое), если чётное.</li></ol>`,
        starter: py`
x = int(input())
`,
        solution: py`
x = int(input())
if x == 0:
    print("введите число, отличное от 0")
else:
    print(x + 5 if x > 0 else x - 10)
    print(x + 5 if x % 2 != 0 else x // 2)`,
        tests: [{ input: "7" }, { input: "0" }, { input: "-4", hidden: true }, { input: "10", hidden: true }, { input: "-3", hidden: true }],
      },
      {
        id: "c10", title: "Вид треугольника по углам", level: "Средняя",
        statement: `<p>Даны три угла треугольника в градусах (целые, в одной строке). Если такого треугольника нет (какой-то угол ≤ 0 или сумма не равна 180°), выведите <code>не существует</code>. Иначе выведите <code>прямоугольный</code>, <code>тупоугольный</code> или <code>остроугольный</code>.</p>`,
        starter: py`
a, b, c = map(int, input().split())
`,
        solution: py`
a, b, c = map(int, input().split())
if a <= 0 or b <= 0 or c <= 0 or a + b + c != 180:
    print("не существует")
elif a == 90 or b == 90 or c == 90:
    print("прямоугольный")
elif a > 90 or b > 90 or c > 90:
    print("тупоугольный")
else:
    print("остроугольный")`,
        tests: [{ input: "60 60 60" }, { input: "90 45 45" }, { input: "120 30 30", hidden: true }, { input: "100 50 50", hidden: true }, { input: "0 90 90", hidden: true }, { input: "89 1 90", hidden: true }],
      },
      {
        id: "c11", title: "Модули и замены", level: "Средняя",
        statement: `<p>Даны целые x и y. Если оба отрицательные — замените каждое его модулем. Если отрицательно ровно одно из них — увеличьте оба на 5. Иначе (оба неотрицательные) — увеличьте оба в 10 раз. Выведите новые x и y через пробел.</p>`,
        starter: py`
x, y = map(int, input().split())
`,
        solution: py`
x, y = map(int, input().split())
if x < 0 and y < 0:
    x, y = abs(x), abs(y)
elif x < 0 or y < 0:
    x, y = x + 5, y + 5
else:
    x, y = x * 10, y * 10
print(x, y)`,
        tests: [{ input: "-3 -7" }, { input: "-2 4" }, { input: "3 8", hidden: true }, { input: "0 -1", hidden: true }, { input: "0 0", hidden: true }],
      },
      {
        id: "c12", title: "Минимум и максимум из трёх", level: "Лёгкая",
        statement: `<p>Даны три целых числа в одной строке. Не используя <code>min</code> и <code>max</code>, выведите минимальное и максимальное через пробел.</p>`,
        starter: py`
a, b, c = map(int, input().split())
`,
        solution: py`
a, b, c = map(int, input().split())
mn = a
mx = a
if b < mn:
    mn = b
if c < mn:
    mn = c
if b > mx:
    mx = b
if c > mx:
    mx = c
print(mn, mx)`,
        tests: [{ input: "4 9 2" }, { input: "5 5 5" }, { input: "-1 -8 0", hidden: true }, { input: "3 2 1", hidden: true }],
      },
      {
        id: "c13", title: "Алинур идёт в магазин", level: "Средняя",
        statement: `<p>Мама попросила Алинура купить 2 литра молока (320 тг за литр), 10 яиц (36 тг за штуку) и 3 лепёшки (100 тг за штуку). Дана сумма денег у Алинура.</p>
          <p>Если денег хватает на весь заказ, выведите <code>Хватает на весь заказ</code> и второй строкой <code>Сдача: X</code>. Иначе выведите <code>Не хватает X тенге</code>, а второй строкой — <code>Хватит, чтобы купить по одному продукту</code> или <code>Не хватит даже по одному продукту</code>.</p>`,
        starter: py`
money = int(input())
`,
        hint: `<p>Весь заказ стоит 2·320 + 10·36 + 3·100 = 1300 тг, по одному продукту — 320 + 36 + 100 = 456 тг. Лучше вычислять эти суммы в программе, а не подставлять готовые числа.</p>`,
        solution: py`
money = int(input())
total = 2 * 320 + 10 * 36 + 3 * 100
one_each = 320 + 36 + 100
if money >= total:
    print("Хватает на весь заказ")
    print("Сдача:", money - total)
else:
    print("Не хватает", total - money, "тенге")
    if money >= one_each:
        print("Хватит, чтобы купить по одному продукту")
    else:
        print("Не хватит даже по одному продукту")`,
        tests: [{ input: "2000" }, { input: "1000" }, { input: "1300", hidden: true }, { input: "455", hidden: true }, { input: "456", hidden: true }],
      },
      {
        id: "c14", title: "Болельщики бокса", level: "Средняя",
        statement: `<p>В городе X жителей, 40% из них интересуются боксом. В первой строке дано X, во второй — процент p (от 0 до 99), который выбрал пользователь.</p>
          <p>Выведите количество жителей, интересующихся боксом (целое: <code>X * 40 // 100</code>). Второй строкой: если p ≤ 50 — <code>смотрит 1 раз в месяц</code>, если p ≤ 70 — <code>смотрит бокс только в выходные дни</code>, иначе — <code>смотрит бокс ежедневно</code>.</p>
          <p class="small muted">Исходное условие было сформулировано неоднозначно, здесь оно уточнено.</p>`,
        starter: py`
x = int(input())
p = int(input())
`,
        solution: py`
x = int(input())
p = int(input())
print(x * 40 // 100)
if p <= 50:
    print("смотрит 1 раз в месяц")
elif p <= 70:
    print("смотрит бокс только в выходные дни")
else:
    print("смотрит бокс ежедневно")`,
        tests: [{ input: "10000\n45" }, { input: "2500\n70" }, { input: "333\n71", hidden: true }, { input: "1\n0", hidden: true }, { input: "50000\n99", hidden: true }],
      },
    ],

    /* ==================== МОДУЛЬ 3 ==================== */
    m3: [
      {
        id: "d1", title: "Сумма квадратов 10 чисел", level: "Лёгкая",
        statement: `<p>Вводятся 10 целых чисел, по одному в строке. Найдите сумму их квадратов.</p>`,
        starter: py`
s = 0
`,
        solution: py`
s = 0
for _ in range(10):
    x = int(input())
    s += x * x
print(s)`,
        tests: [{ input: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10" }, { input: "0\n0\n0\n0\n0\n0\n0\n0\n0\n-1" }, { input: "-5\n5\n-5\n5\n-5\n5\n-5\n5\n-5\n5", hidden: true }, { input: "100\n1\n1\n1\n1\n1\n1\n1\n1\n1", hidden: true }],
      },
      {
        id: "d2", title: "Таблица значений функции", level: "Средняя",
        statement: `<p>Даны a, b и шаг h (вещественные числа в одной строке, a ≤ b). Выведите таблицу значений функции <code>y = 3x² − 5x − 9</code> для x от a до b с шагом h: в каждой строке x с одним знаком после точки и y с двумя знаками через пробел.</p>
          <p>Например, для исходной задачи (x от −3 до 3 с шагом 0,5) ввод: <code>-3 3 0.5</code>.</p>`,
        starter: py`
a, b, h = map(float, input().split())
`,
        hint: `<p>Не прибавляйте h к x в цикле — накопится погрешность float, и последнее значение может «потеряться». Вычислите количество шагов <code>n = round((b - a) / h)</code> и в цикле <code>for i in range(n + 1)</code> берите <code>x = a + i * h</code>.</p>`,
        solution: py`
a, b, h = map(float, input().split())
n = round((b - a) / h)
for i in range(n + 1):
    x = a + i * h
    y = 3 * x ** 2 - 5 * x - 9
    print(f"{x:.1f} {y:.2f}")`,
        tests: [{ input: "-3 3 0.5" }, { input: "0 2 0.5" }, { input: "-1 1 0.1", hidden: true }, { input: "2 2 1", hidden: true }],
      },
      {
        id: "d3", title: "Чётные числа и суммы на отрезке", level: "Лёгкая",
        statement: `<p>Даны N и M (в одной строке, в любом порядке). Рассмотрим все целые числа от меньшего до большего включительно. Выведите:</p>
          <ol><li>все чётные числа через пробел (или <code>нет</code>);</li><li>сумму чётных чисел;</li><li>сумму нечётных чисел.</li></ol>
          <p>Например, для 26 и 88 — сумма чётных чисел от 26 до 88; для 2 и 30 — от 2 до 30; для 1 и 15 — сумма нечётных от 1 до 15.</p>`,
        starter: py`
n, m = map(int, input().split())
`,
        solution: py`
n, m = map(int, input().split())
if n > m:
    n, m = m, n
evens = []
odd_sum = 0
for x in range(n, m + 1):
    if x % 2 == 0:
        evens.append(x)
    else:
        odd_sum += x
print(*evens if evens else ["нет"])
print(sum(evens))
print(odd_sum)`,
        tests: [{ input: "26 88" }, { input: "15 1" }, { input: "2 30", hidden: true }, { input: "7 7", hidden: true }, { input: "-4 3", hidden: true }],
      },
      {
        id: "d4", title: "Сумма до 1000", level: "Средняя",
        statement: `<p>Вводятся целые числа, по одному в строке. Складывайте их, пока сумма не <b>превысит</b> 1000 (гарантируется, что это произойдёт). Выведите сумму и количество введённых чисел через пробел.</p>`,
        starter: py`
s = 0
k = 0
`,
        solution: py`
s = 0
k = 0
while s <= 1000:
    s += int(input())
    k += 1
print(s, k)`,
        tests: [{ input: "500\n400\n200" }, { input: "1001" }, { input: "1000\n0\n1", hidden: true }, { input: "300\n-100\n500\n301\n5", hidden: true }],
      },
      {
        id: "d5", title: "Положительные и отрицательные", level: "Лёгкая",
        statement: `<p>В первой строке — n, далее n целых чисел, по одному в строке (читаются в одну и ту же переменную в цикле). Выведите количество положительных и отрицательных чисел через пробел. В исходной задаче n = 14.</p>`,
        starter: py`
n = int(input())
`,
        solution: py`
n = int(input())
pos = neg = 0
for _ in range(n):
    x = int(input())
    if x > 0:
        pos += 1
    elif x < 0:
        neg += 1
print(pos, neg)`,
        tests: [{ input: "5\n3\n-1\n0\n7\n-2" }, { input: "3\n0\n0\n0" }, { input: "14\n1\n-1\n2\n-2\n3\n-3\n4\n0\n5\n6\n-7\n8\n9\n10", hidden: true }],
      },
      {
        id: "d6", title: "Строка стихотворения k раз", level: "Лёгкая",
        statement: `<p>В первой строке — строчка из стихотворения, во второй — k. Выведите строчку k раз, каждый раз с новой строки, с номером: <code>1. текст</code>.</p>`,
        starter: py`
line = input()
k = int(input())
`,
        solution: py`
line = input()
k = int(input())
for i in range(1, k + 1):
    print(f"{i}. {line}")`,
        tests: [{ input: "Я памятник себе воздвиг нерукотворный\n7" }, { input: "Ой, мороз, мороз\n1" }, { input: "abc\n3", hidden: true }],
      },
      {
        id: "d7", title: "Первые 10 степеней", level: "Лёгкая",
        statement: `<p>Даны три целых числа в одной строке. Для каждого числа выведите в отдельной строке его степени с 1-й по 10-ю через пробел.</p>`,
        starter: py`
nums = list(map(int, input().split()))
`,
        solution: py`
nums = list(map(int, input().split()))
for a in nums:
    print(*[a ** k for k in range(1, 11)])`,
        tests: [{ input: "2 3 10" }, { input: "-1 0 1" }, { input: "-2 5 7", hidden: true }],
      },
      {
        id: "d8", title: "Среднее, минимум, максимум", level: "Средняя",
        statement: `<p>В первой строке — n (n ≥ 1), далее n целых чисел, по одному в строке. Не используя <code>min</code>, <code>max</code> и <code>sum</code>, выведите: среднее арифметическое с двумя знаками после точки, наименьшее и наибольшее число (каждое с новой строки).</p>`,
        starter: py`
n = int(input())
`,
        hint: `<p>Первое число прочитайте до цикла и сделайте его начальным значением и минимума, и максимума — так программа будет правильно работать и с отрицательными числами.</p>`,
        solution: py`
n = int(input())
x = int(input())
s = mn = mx = x
for _ in range(n - 1):
    x = int(input())
    s += x
    if x < mn:
        mn = x
    if x > mx:
        mx = x
print(f"{s / n:.2f}")
print(mn)
print(mx)`,
        tests: [{ input: "4\n3\n8\n-2\n5" }, { input: "1\n-7" }, { input: "3\n-5\n-1\n-9", hidden: true }, { input: "5\n10\n10\n10\n10\n11", hidden: true }],
      },
      {
        id: "d9", title: "Таблица стоимости", level: "Лёгкая",
        statement: `<p>Один банан стоит p тенге. Даны p и n. Выведите таблицу стоимости для 2, 3, …, n бананов: в каждой строке количество и стоимость через пробел. В исходной задаче p = 100, n = 30.</p>`,
        starter: py`
p = int(input())
n = int(input())
`,
        solution: py`
p = int(input())
n = int(input())
for k in range(2, n + 1):
    print(k, k * p)`,
        tests: [{ input: "100\n5" }, { input: "100\n30" }, { input: "75\n2", hidden: true }],
      },
      {
        id: "d10", title: "Расстояние до горизонта", level: "Средняя",
        statement: `<p>Считая Землю шаром радиуса R, найдите расстояние до линии горизонта от точки на высоте h = 1, 2, …, n км. Расстояние — это касательная: <code>d = √((R + h)² − R²)</code>.</p>
          <p>Даны R и n. Для каждого h выведите строку «h d», где d — с двумя знаками после точки. В исходной задаче R = 6350, n = 10.</p>`,
        starter: py`
import math

r = int(input())
n = int(input())
`,
        solution: py`
import math

r = int(input())
n = int(input())
for h in range(1, n + 1):
    d = math.sqrt((r + h) ** 2 - r ** 2)
    print(f"{h} {d:.2f}")`,
        tests: [{ input: "6350\n10" }, { input: "6371\n3" }, { input: "1000\n5", hidden: true }],
      },
      {
        id: "d11", title: "Есть ли среди данных…", level: "Лёгкая",
        statement: `<p>В первой строке — мощности двигателей нескольких моделей автомобилей (л. с.), во второй — оценки учеников по информатике (2–5). Выведите две строки <code>да</code> / <code>нет</code>:</p>
          <ol><li>есть ли модель мощнее 200 л. с.;</li><li>есть ли оценка «неудовлетворительно» (2).</li></ol>
          <p>Решите через цикл с флагом и <code>break</code> (без <code>in</code> и <code>max</code>).</p>`,
        starter: py`
powers = list(map(int, input().split()))
marks = list(map(int, input().split()))
`,
        solution: py`
powers = list(map(int, input().split()))
marks = list(map(int, input().split()))
found = False
for p in powers:
    if p > 200:
        found = True
        break
print("да" if found else "нет")
found = False
for m in marks:
    if m == 2:
        found = True
        break
print("да" if found else "нет")`,
        tests: [{ input: "150 180 249 120\n5 4 4 3 5" }, { input: "200 199\n2 5" }, { input: "201\n3 3 3 2", hidden: true }, { input: "90 100 110\n5 5 5", hidden: true }],
      },
      {
        id: "d12", title: "Пропуск символов: continue", level: "Лёгкая",
        statement: `<p>В первой строке — словосочетание, во второй — буквы, которые нужно пропустить (например, <code>ad</code> или <code>L</code>). Используя цикл и <code>continue</code>, выведите:</p>
          <ol><li>только гласные буквы словосочетания (русские и латинские, в любом регистре) подряд, без пробелов;</li>
          <li>словосочетание без пропускаемых букв (регистр учитывается).</li></ol>`,
        starter: py`
phrase = input()
skip = input()
`,
        solution: py`
phrase = input()
skip = input()
vowels = "аеёиоуыэюяaeiou"
res = ""
for ch in phrase:
    if ch.lower() not in vowels:
        continue
    res += ch
print(res)
res = ""
for ch in phrase:
    if ch in skip:
        continue
    res += ch
print(res)`,
        tests: [{ input: "abcdef\nad" }, { input: "Hello LOL world\nL" }, { input: "Мама мыла раму\nм", hidden: true }, { input: "Python 3.12\nxyz", hidden: true }],
      },
    ],

    /* ==================== МОДУЛЬ 4 ==================== */
    m4: [
      {
        id: "s1", title: "Базовые операции и срезы", level: "Лёгкая",
        statement: `<p>Дана строка s (не короче 3 символов). Выведите по одному результату в строке:</p>
          <ol><li>длину;</li><li>первый и последний символы через пробел;</li><li>строку, повторённую 3 раза;</li><li>второй символ;</li><li>предпоследний символ;</li>
          <li>строку, где первый и последний символы поменяны местами;</li><li>первые 3 символа;</li><li>последние 3 символа;</li><li>строку наоборот (например, «Информатика» → «акитамрофнИ»);</li><li>каждый второй символ, начиная с первого.</li></ol>`,
        starter: py`
s = input()
`,
        solution: py`
s = input()
print(len(s))
print(s[0], s[-1])
print(s * 3)
print(s[1])
print(s[-2])
print(s[-1] + s[1:-1] + s[0])
print(s[:3])
print(s[-3:])
print(s[::-1])
print(s[::2])`,
        tests: [{ input: "Информатика" }, { input: "abc" }, { input: "hello world", hidden: true }, { input: "Python 3", hidden: true }],
      },
      {
        id: "s2", title: "Поиск и подсчёт в строке", level: "Лёгкая",
        statement: `<p>Дана строка s. Выведите:</p>
          <ol><li>сколько раз встречается латинская буква <code>a</code> (посчитайте циклом <code>for</code>);</li>
          <li>количество гласных (русских и латинских, без учёта регистра);</li>
          <li>позицию первого вхождения буквы <code>o</code> (или −1);</li><li>позицию последнего вхождения буквы <code>a</code> (или −1);</li>
          <li>сколько раз встречается слово <code>python</code> без учёта регистра.</li></ol>`,
        starter: py`
s = input()
`,
        solution: py`
s = input()
k = 0
for ch in s:
    if ch == "a":
        k += 1
print(k)
vowels = "аеёиоуыэюяaeiou"
print(sum(1 for ch in s.lower() if ch in vowels))
print(s.find("o"))
print(s.rfind("a"))
print(s.lower().count("python"))`,
        tests: [{ input: "I love Python and python loves me" }, { input: "банан" }, { input: "PYTHON python PyThOn", hidden: true }, { input: "aaa ooo", hidden: true }],
      },
      {
        id: "s3", title: "Регистр, замена и очистка", level: "Лёгкая",
        statement: `<p>Дана строка s (может начинаться и заканчиваться пробелами или символами <code>#</code>). Выведите в отдельных строках:</p>
          <ol><li>строку заглавными буквами;</li><li>строчными;</li><li>с заглавной первой буквой (<code>capitalize</code>);</li>
          <li>все пробелы заменены на <code>_</code>;</li><li>буква <code>a</code> заменена на <code>*</code>, но только первые 2 раза;</li>
          <li>без пробелов в начале и конце, обёрнутую в квадратные скобки: <code>[текст]</code>;</li><li>без символов <code>#</code> в начале и конце, тоже в квадратных скобках.</li></ol>`,
        starter: py`
s = input()
`,
        solution: py`
s = input()
print(s.upper())
print(s.lower())
print(s.capitalize())
print(s.replace(" ", "_"))
print(s.replace("a", "*", 2))
print("[" + s.strip() + "]")
print("[" + s.strip("#") + "]")`,
        tests: [{ input: "  banana and apple  " }, { input: "##python##" }, { input: "## a b c ##", hidden: true }, { input: "Mama", hidden: true }],
      },
      {
        id: "s4", title: "Проверки содержимого строки", level: "Лёгкая",
        statement: `<p>Дана строка s. Выведите <code>True</code> или <code>False</code> для каждой проверки (по строке на проверку):</p>
          <ol><li>состоит только из цифр;</li><li>состоит только из букв;</li><li>есть ли в ней пробел;</li><li>начинается ли с <code>Hello</code>;</li><li>заканчивается ли на <code>.txt</code>;</li><li>содержит ли <code>cat</code>.</li></ol>`,
        starter: py`
s = input()
`,
        solution: py`
s = input()
print(s.isdigit())
print(s.isalpha())
print(" " in s)
print(s.startswith("Hello"))
print(s.endswith(".txt"))
print("cat" in s)`,
        tests: [{ input: "2026" }, { input: "Hello cat.txt" }, { input: "Concatenate", hidden: true }, { input: "Hello", hidden: true }],
      },
      {
        id: "s5", title: "split, join и форматирование", level: "Средняя",
        statement: `<p>Даны пять строк: предложение; перечисление через запятую (например, <code>яблоко,груша,банан</code>); имя; возраст; целое число n. Выведите:</p>
          <ol><li>список слов предложения (как печатает Python: <code>['I', 'love', 'Python']</code>);</li>
          <li>список элементов перечисления;</li><li>слова предложения, склеенные через <code>-</code>;</li>
          <li><code>Имя: …, возраст: …</code> через f-строку;</li><li>n в шестнадцатеричной системе (заглавными буквами);</li>
          <li>n в экспоненциальном формате с двумя знаками (<code>1.23e+03</code>);</li><li>код первой буквы имени;</li>
          <li>фразу <code>Он сказал: "Я люблю эту жизнь"</code> (с кавычками).</li></ol>`,
        starter: py`
sentence = input()
items = input()
name = input()
age = int(input())
n = int(input())
`,
        solution: py`
sentence = input()
items = input()
name = input()
age = int(input())
n = int(input())
words = sentence.split()
print(words)
print(items.split(","))
print("-".join(words))
print(f"Имя: {name}, возраст: {age}")
print(f"{n:X}")
print(f"{n:.2e}")
print(ord(name[0]))
print("Он сказал: \"Я люблю эту жизнь\"")`,
        tests: [{ input: "I love Python\nяблоко,груша,банан\nИван\n15\n255" }, { input: "Мама мыла раму\na,b\nAida\n16\n1234" }, { input: "один\nx\nЖан\n17\n0", hidden: true }],
      },
      {
        id: "s6", title: "Перебор с enumerate", level: "Лёгкая",
        statement: `<p>Дана строка s. Используя <code>enumerate</code>, выведите для каждого символа его индекс и сам символ через пробел (каждый символ — с новой строки). Пробелы тоже считаются символами.</p>`,
        starter: py`
s = input()
`,
        solution: py`
s = input()
for i, ch in enumerate(s):
    print(i, ch)`,
        tests: [{ input: "кот" }, { input: "Py 3" }, { input: "abcdef", hidden: true }],
      },
      {
        id: "s7", title: "Алгоритмы со строками", level: "Сложная",
        statement: `<p>Дана строка s из слов, разделённых пробелами. Выведите:</p>
          <ol><li><code>да</code>, если строка — палиндром без учёта пробелов и регистра, иначе <code>нет</code>;</li>
          <li>строку без пробелов;</li><li>количество слов;</li><li>самое длинное слово (первое из самых длинных);</li>
          <li>строку, в которой оставлено только первое вхождение каждого символа (включая пробел);</li>
          <li>самый частый символ без учёта пробелов (при равенстве — тот, что раньше встречается) и его количество через пробел;</li>
          <li>строку, где каждая латинская буква заменена на следующую по алфавиту (z → a, Z → A), остальные символы без изменений.</li></ol>`,
        starter: py`
s = input()
`,
        solution: py`
s = input()
t = s.replace(" ", "").lower()
print("да" if t == t[::-1] else "нет")
print(s.replace(" ", ""))
words = s.split()
print(len(words))
longest = words[0]
for w in words:
    if len(w) > len(longest):
        longest = w
print(longest)
res = ""
for ch in s:
    if ch not in res:
        res += ch
print(res)
best = None
for ch in s:
    if ch != " " and (best is None or s.count(ch) > s.count(best)):
        best = ch
print(best, s.count(best))
shifted = ""
for ch in s:
    if "a" <= ch <= "z":
        shifted += chr((ord(ch) - 97 + 1) % 26 + 97)
    elif "A" <= ch <= "Z":
        shifted += chr((ord(ch) - 65 + 1) % 26 + 65)
    else:
        shifted += ch
print(shifted)`,
        tests: [{ input: "А роза упала на лапу Азора" }, { input: "abc xyz Zoo" }, { input: "hello world", hidden: true }, { input: "level", hidden: true }, { input: "aa bb aa cc", hidden: true }],
      },
    ],
  };

  for (const [mid, list] of Object.entries(T)) {
    const mod = window.COURSE.modules.find((m) => m.id === mid);
    if (mod) list.forEach((t) => mod.tasks.push(Object.assign({ extra: true }, t)));
  }
})();
