/* =========================================================
   PyStart — дополнительные задачи, часть 4: модули 1–4.
   Цель: не меньше 20 дополнительных задач в каждом модуле.
   Формат — как в extra_tasks.js (output можно не писать).
   ========================================================= */
(function () {
  const T = {
    /* ==================== МОДУЛЬ 1: линейные программы ==================== */
    m1: [
      {
        id: "g1", title: "Сумма цифр четырёхзначного числа", level: "Лёгкая",
        statement: `<p>Дано четырёхзначное натуральное число. Выведите сумму его цифр (только арифметика: <code>//</code> и <code>%</code>).</p>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
print(n // 1000 + n // 100 % 10 + n // 10 % 10 + n % 10)`,
        tests: [{ input: "1234" }, { input: "9090" }, { input: "1000", hidden: true }, { input: "9999", hidden: true }],
      },
      {
        id: "g2", title: "Секунды в часы, минуты и секунды", level: "Лёгкая",
        statement: `<p>Дано количество секунд n. Выведите через пробел, сколько это полных часов, оставшихся полных минут и оставшихся секунд.</p>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
print(n // 3600, n % 3600 // 60, n % 60)`,
        tests: [{ input: "3725" }, { input: "59" }, { input: "86400", hidden: true }, { input: "100000", hidden: true }],
      },
      {
        id: "g3", title: "Прямоугольник", level: "Лёгкая",
        statement: `<p>Даны длина и ширина прямоугольника (целые, в одной строке). Выведите его площадь и периметр через пробел.</p>`,
        starter: py`a, b = map(int, input().split())`,
        solution: py`
a, b = map(int, input().split())
print(a * b, 2 * (a + b))`,
        tests: [{ input: "3 5" }, { input: "10 10" }, { input: "1 1000", hidden: true }],
      },
      {
        id: "g4", title: "Круг", level: "Лёгкая",
        statement: `<p>Дан радиус круга r. Выведите площадь круга и длину окружности с двумя знаками после точки, каждое с новой строки. Используйте <code>math.pi</code>.</p>`,
        starter: py`
import math

r = float(input())
`,
        solution: py`
import math

r = float(input())
print(f"{math.pi * r ** 2:.2f}")
print(f"{2 * math.pi * r:.2f}")`,
        tests: [{ input: "1" }, { input: "2.5" }, { input: "10", hidden: true }],
      },
      {
        id: "g5", title: "Прямоугольный треугольник", level: "Лёгкая",
        statement: `<p>Даны катеты a и b. Выведите гипотенузу, периметр и площадь треугольника — каждое с двумя знаками после точки и с новой строки.</p>`,
        starter: py`
import math

a = float(input())
b = float(input())
`,
        solution: py`
import math

a = float(input())
b = float(input())
c = math.sqrt(a ** 2 + b ** 2)
print(f"{c:.2f}")
print(f"{a + b + c:.2f}")
print(f"{a * b / 2:.2f}")`,
        tests: [{ input: "3\n4" }, { input: "1\n1" }, { input: "5\n12", hidden: true }],
      },
      {
        id: "g6", title: "Расстояние между точками", level: "Лёгкая",
        statement: `<p>Даны координаты двух точек x1 y1 x2 y2 (в одной строке). Выведите расстояние между ними с тремя знаками после точки.</p>`,
        starter: py`
import math

x1, y1, x2, y2 = map(float, input().split())
`,
        solution: py`
import math

x1, y1, x2, y2 = map(float, input().split())
print(f"{math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2):.3f}")`,
        tests: [{ input: "0 0 3 4" }, { input: "1 1 2 2" }, { input: "-1.5 2 3 -4", hidden: true }],
      },
      {
        id: "g7", title: "Единицы и десятки", level: "Лёгкая",
        statement: `<p>Дано натуральное число n ≥ 10. Выведите через пробел его последнюю цифру и число десятков (вторую цифру справа).</p>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
print(n % 10, n // 10 % 10)`,
        tests: [{ input: "179" }, { input: "10" }, { input: "123456", hidden: true }],
      },
      {
        id: "g8", title: "Обмен значений", level: "Лёгкая",
        statement: `<p>Даны два числа a и b (в одной строке). Поменяйте значения переменных местами (без третьей переменной) и выведите a и b через пробел.</p>`,
        starter: py`a, b = input().split()`,
        solution: py`
a, b = input().split()
a, b = b, a
print(a, b)`,
        tests: [{ input: "1 2" }, { input: "-5 100" }, { input: "7 7", hidden: true }],
      },
      {
        id: "g9", title: "Градусы Цельсия и Фаренгейта", level: "Лёгкая",
        statement: `<p>Дана температура в градусах Цельсия C. Выведите её в градусах Фаренгейта (<code>F = C · 9 / 5 + 32</code>) и в кельвинах (<code>K = C + 273.15</code>) — с одним знаком после точки, каждое с новой строки.</p>`,
        starter: py`c = float(input())`,
        solution: py`
c = float(input())
print(f"{c * 9 / 5 + 32:.1f}")
print(f"{c + 273.15:.1f}")`,
        tests: [{ input: "100" }, { input: "-40" }, { input: "36.6", hidden: true }],
      },
      {
        id: "g10", title: "Делим яблоки", level: "Лёгкая",
        statement: `<p>n школьников делят k яблок поровну, остаток остаётся в корзине. Даны n и k (каждое на отдельной строке). Выведите, сколько яблок получит каждый, и сколько останется в корзине (две строки).</p>`,
        starter: py`
n = int(input())
k = int(input())
`,
        solution: py`
n = int(input())
k = int(input())
print(k // n)
print(k % n)`,
        tests: [{ input: "3\n14" }, { input: "5\n5" }, { input: "10\n3", hidden: true }],
      },
      {
        id: "g11", title: "Который будет час", level: "Средняя",
        statement: `<p>Сейчас h часов m минут. Даны h, m и t — сколько минут прошло (каждое на отдельной строке). Выведите новое время в формате <code>H:MM</code> (24-часовой формат, после 23:59 идёт 0:00). Решите без условного оператора.</p>`,
        starter: py`
h = int(input())
m = int(input())
t = int(input())
`,
        hint: `<p>Переведите всё в минуты от начала суток и возьмите остаток от деления на 1440. Минуты двумя цифрами: <code>print(h, ":", m // 10, m % 10, sep="")</code>.</p>`,
        solution: py`
h = int(input())
m = int(input())
t = int(input())
total = (h * 60 + m + t) % 1440
mm = total % 60
print(total // 60, ":", mm // 10, mm % 10, sep="")`,
        tests: [{ input: "9\n30\n45" }, { input: "23\n50\n15" }, { input: "0\n0\n1440", hidden: true }, { input: "12\n5\n10000", hidden: true }],
      },
      {
        id: "g12", title: "Среднее трёх чисел", level: "Лёгкая",
        statement: `<p>Даны три целых числа в одной строке. Выведите их среднее арифметическое с двумя знаками после точки.</p>`,
        starter: py`a, b, c = map(int, input().split())`,
        solution: py`
a, b, c = map(int, input().split())
print(f"{(a + b + c) / 3:.2f}")`,
        tests: [{ input: "1 2 3" }, { input: "10 0 1" }, { input: "-5 -6 7", hidden: true }],
      },
      {
        id: "g13", title: "Куб", level: "Лёгкая",
        statement: `<p>Дано ребро куба a (целое). Выведите объём куба, площадь его поверхности и длину диагонали куба (<code>a·√3</code>, два знака после точки) — каждое с новой строки.</p>`,
        starter: py`
import math

a = int(input())
`,
        solution: py`
import math

a = int(input())
print(a ** 3)
print(6 * a ** 2)
print(f"{a * math.sqrt(3):.2f}")`,
        tests: [{ input: "2" }, { input: "1" }, { input: "15", hidden: true }],
      },
      {
        id: "g14", title: "Соседние числа", level: "Лёгкая",
        statement: `<p>Дано целое число n. Выведите две строки точно в таком виде (подставив числа):</p>
          <pre>Следующее за числом 179 число: 180
Для числа 179 предыдущее число: 178</pre>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
print("Следующее за числом", n, "число:", n + 1)
print("Для числа", n, "предыдущее число:", n - 1)`,
        tests: [{ input: "179" }, { input: "0" }, { input: "-10", hidden: true }],
      },
      {
        id: "g15", title: "Парты в классах", level: "Средняя",
        statement: `<p>В школе открывают три класса, в них a, b и c учеников (в одной строке). За одну парту садятся два ученика. Сколько парт нужно купить? Решите без условного оператора.</p>`,
        starter: py`a, b, c = map(int, input().split())`,
        hint: `<p>Для класса из x учеников нужно <code>(x + 1) // 2</code> парт: к нечётному числу прибавляем 1, и деление нацело даёт округление вверх.</p>`,
        solution: py`
a, b, c = map(int, input().split())
print((a + 1) // 2 + (b + 1) // 2 + (c + 1) // 2)`,
        tests: [{ input: "20 21 22" }, { input: "1 1 1" }, { input: "0 2 3", hidden: true }, { input: "25 25 25", hidden: true }],
      },
      {
        id: "g16", title: "Четыре способа округления", level: "Лёгкая",
        statement: `<p>Дано вещественное число x. Выведите через пробел: <code>math.floor(x)</code>, <code>math.ceil(x)</code>, <code>round(x)</code> и <code>int(x)</code>. Сравните результаты для положительных и отрицательных чисел.</p>`,
        starter: py`
import math

x = float(input())
`,
        solution: py`
import math

x = float(input())
print(math.floor(x), math.ceil(x), round(x), int(x))`,
        tests: [{ input: "2.7" }, { input: "-2.7" }, { input: "2.5", hidden: true }, { input: "-3.5", hidden: true }, { input: "4", hidden: true }],
      },
      {
        id: "g17", title: "Возраст в единицах времени", level: "Лёгкая",
        statement: `<p>Дан возраст в полных годах. Считая, что в году 365 дней, выведите возраст в днях, часах и минутах (три строки).</p>`,
        starter: py`years = int(input())`,
        solution: py`
years = int(input())
days = years * 365
print(days)
print(days * 24)
print(days * 24 * 60)`,
        tests: [{ input: "16" }, { input: "1" }, { input: "100", hidden: true }],
      },
      {
        id: "g18", title: "Степени и корни", level: "Лёгкая",
        statement: `<p>Дано неотрицательное число x. Выведите x², x³, квадратный корень и кубический корень из x (корни — с двумя знаками после точки), каждое с новой строки.</p>`,
        starter: py`x = float(input())`,
        hint: `<p>Кубический корень — это степень 1/3: <code>x ** (1 / 3)</code>.</p>`,
        solution: py`
x = float(input())
print(x ** 2)
print(x ** 3)
print(f"{x ** 0.5:.2f}")
print(f"{x ** (1 / 3):.2f}")`,
        tests: [{ input: "8" }, { input: "2" }, { input: "0", hidden: true }],
      },
      {
        id: "g19", title: "Циклический сдвиг цифр", level: "Средняя",
        statement: `<p>Дано трёхзначное число с цифрами abc. Выведите число bca — первая цифра переносится в конец (для 120 получится 201, для 102 — 21). Только арифметика.</p>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
print(n % 100 * 10 + n // 100)`,
        tests: [{ input: "123" }, { input: "120" }, { input: "102", hidden: true }, { input: "999", hidden: true }],
      },
    ],

    /* ==================== МОДУЛЬ 2: условия ==================== */
    m2: [
      {
        id: "h1", title: "Квадратное уравнение", level: "Средняя",
        statement: `<p>Даны коэффициенты a, b, c уравнения ax² + bx + c = 0 (a ≠ 0, в одной строке). Если корней нет, выведите <code>нет корней</code>; если корень один — выведите его; если два — выведите их по возрастанию через пробел. Корни — с двумя знаками после точки.</p>`,
        starter: py`
import math

a, b, c = map(float, input().split())
`,
        hint: `<p>Дискриминант D = b² − 4ac. При D = 0 корень −b / (2a). Чтобы не получить «−0.00», прибавьте к корню <code>0.0</code>.</p>`,
        solution: py`
import math

a, b, c = map(float, input().split())
d = b * b - 4 * a * c
if d < 0:
    print("нет корней")
elif d == 0:
    print(f"{-b / (2 * a) + 0.0:.2f}")
else:
    x1 = (-b - math.sqrt(d)) / (2 * a) + 0.0
    x2 = (-b + math.sqrt(d)) / (2 * a) + 0.0
    if x1 > x2:
        x1, x2 = x2, x1
    print(f"{x1:.2f} {x2:.2f}")`,
        tests: [{ input: "1 -3 2" }, { input: "1 2 1" }, { input: "1 0 1", hidden: true }, { input: "-2 0 8", hidden: true }, { input: "1 0 0", hidden: true }],
      },
      {
        id: "h2", title: "Шахматные ходы", level: "Средняя",
        statement: `<p>Даны две разные клетки шахматной доски: x1 y1 x2 y2 (номера столбцов и строк от 1 до 8). Выведите три строки <code>YES</code>/<code>NO</code>: может ли за один ход попасть из первой клетки во вторую ладья, король, слон.</p>`,
        starter: py`x1, y1, x2, y2 = map(int, input().split())`,
        hint: `<p>Ладья — та же строка или тот же столбец. Король — обе разности по модулю не больше 1. Слон — модули разностей по x и по y равны.</p>`,
        solution: py`
x1, y1, x2, y2 = map(int, input().split())
dx, dy = abs(x1 - x2), abs(y1 - y2)
print("YES" if dx == 0 or dy == 0 else "NO")
print("YES" if dx <= 1 and dy <= 1 else "NO")
print("YES" if dx == dy else "NO")`,
        tests: [{ input: "1 1 1 8" }, { input: "4 4 5 5" }, { input: "2 3 5 7", hidden: true }, { input: "8 8 1 1", hidden: true }],
      },
      {
        id: "h3", title: "Такси", level: "Лёгкая",
        statement: `<p>Поездка до 3 км включительно стоит 500 тг, каждый следующий километр — 120 тг. Ночью тариф выше на 20%. Даны расстояние (целое, км) и время суток (<code>день</code> или <code>ночь</code>). Выведите стоимость (целое число тенге; ночная цена — <code>цена * 12 // 10</code>).</p>`,
        starter: py`
km = int(input())
time = input()
`,
        solution: py`
km = int(input())
time = input()
price = 500 if km <= 3 else 500 + (km - 3) * 120
if time == "ночь":
    price = price * 12 // 10
print(price)`,
        tests: [{ input: "2\nдень" }, { input: "10\nночь" }, { input: "3\nночь", hidden: true }, { input: "25\nдень", hidden: true }],
      },
      {
        id: "h4", title: "Результат ЕНТ", level: "Лёгкая",
        statement: `<p>Дан балл ЕНТ (от 0 до 140). Выведите:</p>
          <ul><li>меньше 50 — <code>порог не пройден</code>;</li><li>от 50 до 99 — <code>порог пройден</code>;</li><li>от 100 до 119 — <code>хороший результат</code>;</li><li>120 и больше — <code>отличный результат</code>.</li></ul>
          <p>Если балл вне диапазона 0–140, выведите <code>ошибка</code>.</p><p class="small muted">Границы условные, для тренировки каскадных условий.</p>`,
        starter: py`score = int(input())`,
        solution: py`
score = int(input())
if score < 0 or score > 140:
    print("ошибка")
elif score < 50:
    print("порог не пройден")
elif score < 100:
    print("порог пройден")
elif score < 120:
    print("хороший результат")
else:
    print("отличный результат")`,
        tests: [{ input: "45" }, { input: "125" }, { input: "50", hidden: true }, { input: "119", hidden: true }, { input: "141", hidden: true }, { input: "-1", hidden: true }],
      },
      {
        id: "h5", title: "Месяц: время года и число дней", level: "Лёгкая",
        statement: `<p>Дан номер месяца. Выведите время года (<code>зима</code>, <code>весна</code>, <code>лето</code>, <code>осень</code>) и количество дней в месяце (год не високосный) — две строки. Если номер не от 1 до 12, выведите <code>ошибка</code>.</p>`,
        starter: py`m = int(input())`,
        solution: py`
m = int(input())
if m < 1 or m > 12:
    print("ошибка")
else:
    if m == 12 or m <= 2:
        print("зима")
    elif m <= 5:
        print("весна")
    elif m <= 8:
        print("лето")
    else:
        print("осень")
    if m == 2:
        print(28)
    elif m in (4, 6, 9, 11):
        print(30)
    else:
        print(31)`,
        tests: [{ input: "2" }, { input: "9" }, { input: "12", hidden: true }, { input: "7", hidden: true }, { input: "13", hidden: true }],
      },
      {
        id: "h6", title: "Максимум из четырёх и различность", level: "Средняя",
        statement: `<p>Даны четыре целых числа в одной строке. Не используя <code>max</code>, выведите наибольшее. Второй строкой выведите <code>все различны</code> или <code>есть одинаковые</code>.</p>`,
        starter: py`a, b, c, d = map(int, input().split())`,
        solution: py`
a, b, c, d = map(int, input().split())
m = a
if b > m:
    m = b
if c > m:
    m = c
if d > m:
    m = d
print(m)
if a != b and a != c and a != d and b != c and b != d and c != d:
    print("все различны")
else:
    print("есть одинаковые")`,
        tests: [{ input: "3 9 1 4" }, { input: "5 2 5 1" }, { input: "-1 -2 -3 -4", hidden: true }, { input: "1 2 3 3", hidden: true }],
      },
    ],

    /* ==================== МОДУЛЬ 3: циклы ==================== */
    m3: [
      {
        id: "i1", title: "Факториалы", level: "Лёгкая",
        statement: `<p>Дано n (1 ≤ n ≤ 20). Выведите n! и сумму 1! + 2! + … + n! (две строки). Используйте один цикл.</p>`,
        starter: py`n = int(input())`,
        hint: `<p>В одном цикле храните текущий факториал <code>f *= i</code> и прибавляйте его к сумме.</p>`,
        solution: py`
n = int(input())
f = 1
s = 0
for i in range(1, n + 1):
    f *= i
    s += f
print(f)
print(s)`,
        tests: [{ input: "4" }, { input: "1" }, { input: "10", hidden: true }, { input: "20", hidden: true }],
      },
      {
        id: "i2", title: "НОД и НОК: алгоритм Евклида", level: "Средняя",
        statement: `<p>Даны натуральные a и b. Найдите их НОД алгоритмом Евклида в цикле <code>while</code> и НОК (<code>a · b / НОД</code>). Выведите через пробел.</p>`,
        starter: py`a, b = map(int, input().split())`,
        solution: py`
a, b = map(int, input().split())
x, y = a, b
while y:
    x, y = y, x % y
print(x, a * b // x)`,
        tests: [{ input: "12 18" }, { input: "7 13" }, { input: "100 75", hidden: true }, { input: "1 1", hidden: true }],
      },
      {
        id: "i3", title: "Числа Фибоначчи", level: "Лёгкая",
        statement: `<p>Дано n ≥ 1. Выведите первые n чисел Фибоначчи через пробел: 0 1 1 2 3 5 8 … (каждое следующее — сумма двух предыдущих).</p>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
a, b = 0, 1
res = []
for _ in range(n):
    res.append(a)
    a, b = b, a + b
print(*res)`,
        tests: [{ input: "7" }, { input: "1" }, { input: "20", hidden: true }],
      },
      {
        id: "i4", title: "Совершенные числа", level: "Средняя",
        statement: `<p>Число совершенное, если оно равно сумме своих делителей, меньших его самого (6 = 1 + 2 + 3). Дано n (до 10000). Выведите все совершенные числа от 1 до n через пробел или <code>нет</code>.</p>`,
        starter: py`n = int(input())`,
        hint: `<p>Делители достаточно перебирать до √x: вместе с d в сумму попадает и парный делитель x // d (если он не равен d и не равен x).</p>`,
        solution: py`
n = int(input())
res = []
for x in range(2, n + 1):
    s = 1
    d = 2
    while d * d <= x:
        if x % d == 0:
            s += d
            if d != x // d:
                s += x // d
        d += 1
    if s == x:
        res.append(x)
print(*res if res else ["нет"])`,
        tests: [{ input: "30" }, { input: "5" }, { input: "10000", hidden: true }],
      },
      {
        id: "i5", title: "Перевёрнутое число", level: "Лёгкая",
        statement: `<p>Дано натуральное n. Циклом <code>while</code> получите число, записанное в обратном порядке (без строк), и выведите его. Второй строкой — <code>да</code>, если n — палиндром (читается одинаково), иначе <code>нет</code>.</p>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
r = 0
x = n
while x > 0:
    r = r * 10 + x % 10
    x //= 10
print(r)
print("да" if r == n else "нет")`,
        tests: [{ input: "12345" }, { input: "12321" }, { input: "1200", hidden: true }, { input: "7", hidden: true }],
      },
      {
        id: "i6", title: "Таблица умножения", level: "Лёгкая",
        statement: `<p>Дано n. Выведите таблицу умножения n × n: в строке i — произведения i·1, i·2, …, i·n через пробел. Используйте вложенные циклы.</p>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
for i in range(1, n + 1):
    for j in range(1, n + 1):
        print(i * j, end=" ")
    print()`,
        tests: [{ input: "3" }, { input: "1" }, { input: "9", hidden: true }],
      },
      {
        id: "i7", title: "Суммы рядов", level: "Средняя",
        statement: `<p>Дано n. Выведите с четырьмя знаками после точки две суммы: 1 + 1/2 + 1/3 + … + 1/n и знакопеременную 1 − 1/2 + 1/3 − 1/4 + … ± 1/n.</p>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
s1 = s2 = 0
sign = 1
for i in range(1, n + 1):
    s1 += 1 / i
    s2 += sign / i
    sign = -sign
print(f"{s1:.4f}")
print(f"{s2:.4f}")`,
        tests: [{ input: "4" }, { input: "1" }, { input: "1000", hidden: true }],
      },
      {
        id: "i8", title: "Вклад в банке", level: "Средняя",
        statement: `<p>На вклад положили S тенге под p% годовых (проценты прибавляются раз в год к текущей сумме). Через сколько лет сумма впервые станет не меньше T? Даны S, p, T (в одной строке). Выведите число лет и итоговую сумму с двумя знаками после точки через пробел.</p>`,
        starter: py`s, p, t = map(float, input().split())`,
        solution: py`
s, p, t = map(float, input().split())
years = 0
while s < t:
    s *= 1 + p / 100
    years += 1
print(years, f"{s:.2f}")`,
        tests: [{ input: "100000 10 150000" }, { input: "1000 5 1000" }, { input: "500000 14 1000000", hidden: true }],
      },
    ],

    /* ==================== МОДУЛЬ 4: строки ==================== */
    m4: [
      {
        id: "j1", title: "Классификация символов", level: "Лёгкая",
        statement: `<p>Дана строка. Выведите через пробел количество заглавных букв, строчных букв, цифр и пробелов.</p>`,
        starter: py`s = input()`,
        solution: py`
s = input()
up = low = dig = sp = 0
for ch in s:
    if ch.isupper():
        up += 1
    elif ch.islower():
        low += 1
    elif ch.isdigit():
        dig += 1
    elif ch == " ":
        sp += 1
print(up, low, dig, sp)`,
        tests: [{ input: "Hello World 2026" }, { input: "ЕНТ по Информатике" }, { input: "12345", hidden: true }],
      },
      {
        id: "j2", title: "Аббревиатура", level: "Лёгкая",
        statement: `<p>Дана фраза из нескольких слов. Составьте аббревиатуру из первых букв слов (заглавными): «единое национальное тестирование» → <code>ЕНТ</code>.</p>`,
        starter: py`s = input()`,
        solution: py`
s = input()
print("".join(w[0].upper() for w in s.split()))`,
        tests: [{ input: "единое национальное тестирование" }, { input: "Python is a programming language" }, { input: "  много   пробелов  тут ", hidden: true }],
      },
      {
        id: "j3", title: "snake_case и camelCase", level: "Средняя",
        statement: `<p>В первой строке — имя переменной в стиле snake_case (<code>max_total_sum</code>), во второй — в стиле camelCase (<code>maxTotalSum</code>). Переведите первое в camelCase, а второе — в snake_case.</p>`,
        starter: py`
snake = input()
camel = input()
`,
        solution: py`
snake = input()
camel = input()
parts = snake.split("_")
print(parts[0] + "".join(p.capitalize() for p in parts[1:]))
res = ""
for ch in camel:
    if ch.isupper():
        res += "_" + ch.lower()
    else:
        res += ch
print(res)`,
        tests: [{ input: "max_total_sum\nmaxTotalSum" }, { input: "x\ny" }, { input: "get_user_id\nisPrimeNumber", hidden: true }],
      },
      {
        id: "j4", title: "Проверка пароля", level: "Средняя",
        statement: `<p>Пароль надёжный, если в нём не меньше 8 символов, есть цифра, заглавная буква и строчная буква. Дан пароль. Если он надёжный, выведите <code>надёжный</code>. Иначе выведите, чего не хватает, — каждое требование с новой строки в таком порядке: <code>мало символов</code>, <code>нет цифры</code>, <code>нет заглавной буквы</code>, <code>нет строчной буквы</code>.</p>`,
        starter: py`p = input()`,
        solution: py`
p = input()
problems = []
if len(p) < 8:
    problems.append("мало символов")
if not any(ch.isdigit() for ch in p):
    problems.append("нет цифры")
if not any(ch.isupper() for ch in p):
    problems.append("нет заглавной буквы")
if not any(ch.islower() for ch in p):
    problems.append("нет строчной буквы")
if problems:
    print("\n".join(problems))
else:
    print("надёжный")`,
        tests: [{ input: "Qwerty123" }, { input: "abc" }, { input: "PASSWORD2026", hidden: true }, { input: "password", hidden: true }],
      },
      {
        id: "j5", title: "Сжатие строки (RLE)", level: "Сложная",
        statement: `<p>В первой строке — текст из букв, во второй — сжатая строка. Сожмите первую строку: каждую серию одинаковых букв замените буквой и длиной серии (<code>aaabccdddd</code> → <code>a3b1c2d4</code>). Вторую строку распакуйте обратно (числа могут быть многозначными: <code>a12b1</code>).</p>`,
        starter: py`
s = input()
packed = input()
`,
        solution: py`
s = input()
packed = input()
res = ""
i = 0
while i < len(s):
    j = i
    while j < len(s) and s[j] == s[i]:
        j += 1
    res += s[i] + str(j - i)
    i = j
print(res)
out = ""
i = 0
while i < len(packed):
    ch = packed[i]
    i += 1
    num = ""
    while i < len(packed) and packed[i].isdigit():
        num += packed[i]
        i += 1
    out += ch * int(num)
print(out)`,
        tests: [{ input: "aaabccdddd\na3b1c2d4" }, { input: "abc\nx12y1" }, { input: "zzzzzzzzzzzz\nq1", hidden: true }],
      },
      {
        id: "j6", title: "Самое частое слово", level: "Средняя",
        statement: `<p>Дан текст в одной строке. Слова сравниваются без учёта регистра, знаки <code>. , ! ? ; :</code> по краям слов отбрасываются. Выведите количество слов и самое частое слово (в нижнем регистре; при равенстве — то, что встретилось раньше) с числом его повторений.</p>`,
        starter: py`s = input()`,
        solution: py`
s = input()
words = [w.strip(".,!?;:").lower() for w in s.split()]
words = [w for w in words if w]
print(len(words))
best = words[0]
for w in words:
    if words.count(w) > words.count(best):
        best = w
print(best, words.count(best))`,
        tests: [{ input: "Кот и пёс. Кот, пёс и кот!" }, { input: "один" }, { input: "a b a b c", hidden: true }],
      },
      {
        id: "j7", title: "Анаграммы", level: "Лёгкая",
        statement: `<p>Даны две строки. Определите, являются ли они анаграммами (состоят из одних и тех же букв) без учёта регистра и пробелов. Выведите <code>да</code> или <code>нет</code>.</p>`,
        starter: py`
a = input()
b = input()
`,
        solution: py`
a = input()
b = input()
key = lambda s: sorted(s.replace(" ", "").lower())
print("да" if key(a) == key(b) else "нет")`,
        tests: [{ input: "Листок\nстолик" }, { input: "кот\nток т" }, { input: "Dormitory\ndirty room", hidden: true }],
      },
      {
        id: "j8", title: "Шифр Атбаш", level: "Средняя",
        statement: `<p>В шифре Атбаш латинский алфавит «переворачивается»: a ↔ z, b ↔ y, c ↔ x… (регистр сохраняется, остальные символы не меняются). Зашифруйте строку.</p>`,
        starter: py`s = input()`,
        solution: py`
s = input()
res = ""
for ch in s:
    if "a" <= ch <= "z":
        res += chr(ord("z") - (ord(ch) - ord("a")))
    elif "A" <= ch <= "Z":
        res += chr(ord("Z") - (ord(ch) - ord("A")))
    else:
        res += ch
print(res)`,
        tests: [{ input: "abc xyz" }, { input: "Hello, World!" }, { input: "Python 3 и Атбаш", hidden: true }],
      },
      {
        id: "j9", title: "Проверка e-mail", level: "Средняя",
        statement: `<p>Упрощённая проверка адреса: ровно один символ <code>@</code>; часть до него не пустая; в части после него есть точка, и она не первая и не последняя; пробелов нет. В первой строке — n, далее n адресов. Для каждого выведите <code>да</code> или <code>нет</code>.</p>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
for _ in range(n):
    s = input()
    ok = False
    if s.count("@") == 1 and " " not in s:
        name, domain = s.split("@")
        if name and "." in domain and domain[0] != "." and domain[-1] != ".":
            ok = True
    print("да" if ok else "нет")`,
        tests: [{ input: "3\nuser@mail.kz\nbad@\n@site.com" }, { input: "4\na@b.c\na@@b.c\na b@c.d\nx@.com" }, { input: "2\nname@domain.\nok.name@sub.domain.org", hidden: true }],
      },
      {
        id: "j10", title: "Переворот каждого слова", level: "Лёгкая",
        statement: `<p>Дана строка из слов, разделённых пробелами. Переверните каждое слово, сохранив порядок слов (слова в ответе — через один пробел).</p>`,
        starter: py`s = input()`,
        solution: py`
s = input()
print(" ".join(w[::-1] for w in s.split()))`,
        tests: [{ input: "Привет мир" }, { input: "abc" }, { input: "Python  is   fun", hidden: true }],
      },
      {
        id: "j11", title: "Числа внутри строки", level: "Средняя",
        statement: `<p>Дана строка с буквами и цифрами. Найдите все числа — максимальные группы идущих подряд цифр — и выведите их через пробел (или <code>нет</code>), а второй строкой — их сумму.</p>
          <p>Пример: <code>abc12de3 45x</code> → <code>12 3 45</code> и <code>60</code>.</p>`,
        starter: py`s = input()`,
        solution: py`
s = input()
nums = []
cur = ""
for ch in s + " ":
    if ch.isdigit():
        cur += ch
    elif cur:
        nums.append(int(cur))
        cur = ""
print(*nums if nums else ["нет"])
print(sum(nums))`,
        tests: [{ input: "abc12de3 45x" }, { input: "без чисел" }, { input: "2026 год, 11 класс, 140 баллов", hidden: true }, { input: "007bond", hidden: true }],
      },
      {
        id: "j12", title: "Таблица результатов", level: "Средняя",
        statement: `<p>В первой строке — n, далее n строк «имя балл». Выведите таблицу: имя выровнено влево в поле шириной 12, балл — вправо в поле шириной 5 (<code>f"{name:&lt;12}{score:&gt;5}"</code>). Последней строкой выведите <code>Средний балл: X</code> с одним знаком после точки.</p>`,
        starter: py`n = int(input())`,
        solution: py`
n = int(input())
total = 0
for _ in range(n):
    name, score = input().split()
    score = int(score)
    total += score
    print(f"{name:<12}{score:>5}")
print(f"Средний балл: {total / n:.1f}")`,
        tests: [{ input: "3\nАйбек 120\nДана 131\nЕрлан 98" }, { input: "1\nX 5" }, { input: "2\nАлександра 140\nОля 7", hidden: true }],
      },
      {
        id: "j13", title: "Частота букв по алфавиту", level: "Средняя",
        statement: `<p>Дан текст. Посчитайте, сколько раз встречается каждая буква (без учёта регистра; не буквы не считаются), и выведите буквы <b>в алфавитном порядке</b> в формате «буква количество».</p>`,
        starter: py`s = input()`,
        solution: py`
s = input().lower()
freq = {}
for ch in s:
    if ch.isalpha():
        freq[ch] = freq.get(ch, 0) + 1
for ch in sorted(freq):
    print(ch, freq[ch])`,
        tests: [{ input: "Hello, World!" }, { input: "Мама мыла раму" }, { input: "AaBbCc 123", hidden: true }],
      },
    ],
  };

  for (const [mid, list] of Object.entries(T)) {
    const mod = window.COURSE.modules.find((m) => m.id === mid);
    if (mod) list.forEach((t) => mod.tasks.push(Object.assign({ extra: true }, t)));
  }
})();
