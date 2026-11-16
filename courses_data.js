/* =========================================================
   PyStart — контент курса.
   Этот файл можно редактировать без знания app.js.
   Шаблоны модуля, урока, задачи и вопросов — в README.md.

   Важно:
   • Код Python пишите внутри py`...` — так обратные слеши (\n) не
     «съедаются» JavaScript-ом, а лишние пустые строки по краям убираются.
   • В HTML-текстах символ < пишите как &lt; (иначе браузер примет его за тег).
   ========================================================= */
const py = (s, ...v) => String.raw(s, ...v).replace(/^\n/, "").replace(/\s+$/, "");

// Тест для задач на функции: chk("digit_sum(472)", "13") вызывает функцию ученика
// и сравнивает результат с ожидаемым. В таблице проверки видно, что функция вернула.
const chk = (expr, expected, hidden = false) => ({
  label: expr,
  expect: expected,
  hidden,
  assert: `__r = ${expr}\nassert __r == ${expected}, ${JSON.stringify(expr + " вернула ")} + repr(__r) + ${JSON.stringify(", а ожидалось " + expected)}`,
});

window.COURSE = {
  title: "Python с нуля до ЕНТ",
  subtitle: "Интерактивный курс для 10–11 классов: теория с живыми примерами, задачи с автоматической проверкой и тесты в формате ЕНТ. Python запускается прямо в браузере — ничего устанавливать не нужно.",

  modules: [
    /* ====================================================
       МОДУЛЬ 1. Основы и линейные алгоритмы
       ==================================================== */
    {
      id: "m1",
      icon: "🚀",
      title: "Основы и линейные алгоритмы",
      summary: "Переменные и типы данных, ввод и вывод, арифметика (//, %, **), модуль math.",
      lessons: [
        {
          id: "l1",
          title: "Первая программа: print()",
          blocks: [
            { t: "html", html: `
              <p>Программа на Python — это последовательность команд, которые выполняются <b>сверху вниз</b>, по одной строке. Алгоритм, в котором команды идут строго друг за другом без ветвлений и повторений, называется <b>линейным</b>.</p>
              <p>Функция <code>print()</code> выводит данные на экран. Ей можно передать несколько значений через запятую — они будут напечатаны через пробел, а в конце будет переход на новую строку.</p>` },
            { t: "code", code: py`
print("Привет, мир!")
print("Сумма:", 2 + 3)
print(10, 20, 30)
print()            # пустая строка
print("Конец")` },
            { t: "html", html: `
              <h3>Параметры sep и end</h3>
              <p><code>sep</code> (separator) — что ставится <b>между</b> значениями (по умолчанию пробел).<br>
              <code>end</code> — что ставится <b>в конце</b> вывода (по умолчанию символ перевода строки <code>\\n</code>).</p>` },
            { t: "code", code: py`
print(1, 2, 3, sep="-")
print(2026, 11, 13, sep=".")
print("A", end=" ")
print("B", end="!")
print("C")
print("a", "b", "c", sep="")` },
            { t: "html", html: `
              <h3>Комментарии</h3>
              <p>Всё, что стоит после символа <code>#</code>, интерпретатор игнорирует. Комментарии пишут для людей: чтобы пояснить код или временно «выключить» строку.</p>` },
            { t: "note", kind: "ent", title: "Типичный вопрос ЕНТ", html: `<p>Что выведет <code>print("A", "B", sep="", end="*")</code>? Ответ: <code>AB*</code> — между значениями пустая строка, в конце звёздочка, а перевода строки нет.</p>` },
            { t: "note", title: "Стиль кода: PEP 8", html: `<p>PEP 8 — официальные правила оформления кода на Python. Главное для начала: отступ — 4 пробела; пробелы вокруг <code>=</code>, <code>+</code>, <code>==</code> и после запятой (<code>a = b + 1</code>, <code>print(x, y)</code>); но <b>без</b> пробелов вокруг <code>=</code> у именованных параметров (<code>sep="-"</code>); понятные имена переменных в нижнем регистре через подчёркивание (<code>total_sum</code>, а не <code>TS</code>); строка не длиннее 79 символов.</p>` },
          ],
        },
        {
          id: "l2",
          title: "Переменные и типы данных",
          blocks: [
            { t: "html", html: `
              <p><b>Переменная</b> — это имя, которое ссылается на значение в памяти. Значение присваивается оператором <code>=</code>.</p>
              <p><b>Правила имён:</b> латинские буквы, цифры и <code>_</code>; не начинается с цифры; нельзя использовать ключевые слова (<code>if</code>, <code>for</code>, <code>class</code>…). Регистр важен: <code>sum</code> и <code>Sum</code> — разные переменные.</p>
              <h3>Основные типы</h3>
              <table>
                <tr><th>Тип</th><th>Что хранит</th><th>Пример</th></tr>
                <tr><td><code>int</code></td><td>целое число любого размера</td><td><code>42</code>, <code>-7</code>, <code>10**100</code></td></tr>
                <tr><td><code>float</code></td><td>вещественное число</td><td><code>3.14</code>, <code>2.0</code>, <code>1e-3</code></td></tr>
                <tr><td><code>str</code></td><td>строка (текст)</td><td><code>"Привет"</code>, <code>'5'</code></td></tr>
                <tr><td><code>bool</code></td><td>логическое значение</td><td><code>True</code>, <code>False</code></td></tr>
              </table>
              <h3>Динамическая типизация</h3>
              <p>В Python тип принадлежит <b>значению</b>, а не переменной. Одна и та же переменная может сначала хранить число, а потом строку. Узнать тип можно функцией <code>type()</code>.</p>` },
            { t: "code", code: py`
x = 5
print(x, type(x))
x = 5 / 2
print(x, type(x))
x = "пять"
print(x, type(x))
x = 3 > 2
print(x, type(x))` },
            { t: "html", html: `<h3>Преобразование типов</h3><p>Функции <code>int()</code>, <code>float()</code>, <code>str()</code>, <code>bool()</code> создают значение нужного типа. <code>int()</code> от вещественного числа <b>отбрасывает</b> дробную часть (не округляет!).</p>` },
            { t: "code", code: py`
print(int("42") + 1)     # строка -> число
print(float("3.5") * 2)
print(str(10) + "5")     # склейка строк
print(int(3.99), int(-3.99))
print(bool(0), bool(7), bool(""))` },
            { t: "note", kind: "warn", title: "Осторожно", html: `<p><code>int("3.5")</code> вызовет ошибку <code>ValueError</code>: строку с точкой сначала нужно превратить в <code>float</code>: <code>int(float("3.5"))</code>.</p>` },
            { t: "html", html: `<h3>Точность вещественных чисел</h3><p>Компьютер хранит <code>float</code> в двоичной системе, и многие десятичные дроби (например, 0.1) записываются в ней бесконечно — поэтому хранятся с крошечной погрешностью. Вещественные числа нельзя сравнивать через <code>==</code>: сравнивают с допуском или округляют.</p>` },
            { t: "code", code: py`
print(0.1 + 0.2)
print(0.1 + 0.2 == 0.3)
print(round(0.1 + 0.2, 10) == 0.3)
print(abs((0.1 + 0.2) - 0.3) < 1e-9)    # сравнение с допуском
print(10 ** 20, 1e20)                   # int точный, float — приближённый` },
            { t: "html", html: `<h3>Множественное присваивание</h3><p>Python позволяет присвоить несколько значений за раз и поменять переменные местами без третьей переменной.</p>` },
            { t: "code", code: py`
a, b, c = 1, 2, 3
print(a, b, c)
a, b = b, a        # обмен значениями
print(a, b)
x = y = 0          # одно значение двум переменным
print(x, y)` },
          ],
        },
        {
          id: "l3",
          title: "Ввод данных: input()",
          blocks: [
            { t: "html", html: `
              <p>Функция <code>input()</code> читает <b>одну строку</b>, которую ввёл пользователь, и <b>всегда возвращает строку</b> (<code>str</code>). Чтобы работать с числом, результат нужно преобразовать.</p>
              <div class="note"><div class="note-title">Как вводить данные на этом сайте</div><p>Перед запуском впишите данные в поле «Ввод (stdin)»: каждая строка поля — это результат одного вызова <code>input()</code>. В примерах ниже данные уже подставлены.</p></div>` },
            { t: "code", input: "5\n7", code: py`
a = int(input())
b = int(input())
print("Сумма:", a + b)` },
            { t: "html", html: `<p>А вот что будет, если забыть про <code>int()</code>: строки не складываются, а <b>склеиваются</b>.</p>` },
            { t: "code", input: "5\n7", code: py`
a = input()
b = input()
print(a + b)    # "5" + "7" = "57"` },
            { t: "html", html: `<h3>Несколько чисел в одной строке</h3><p>Если числа вводятся через пробел в одной строке, используют <code>split()</code> (разбить строку по пробелам) и <code>map(int, ...)</code> (применить <code>int</code> к каждой части).</p>` },
            { t: "code", input: "3 4 10", code: py`
a, b, c = map(int, input().split())
print(a * b * c)` },
            { t: "html", html: `<p>Внутри <code>input()</code> можно написать подсказку: <code>name = input("Введите имя: ")</code>. При автоматической проверке задач подсказки не печатаются, так что их можно оставлять.</p>` },
          ],
        },
        {
          id: "l4",
          title: "Арифметические операции",
          blocks: [
            { t: "html", html: `
              <table>
                <tr><th>Операция</th><th>Смысл</th><th>Пример</th><th>Результат</th></tr>
                <tr><td><code>+ - *</code></td><td>сложение, вычитание, умножение</td><td><code>7 * 3</code></td><td><code>21</code></td></tr>
                <tr><td><code>/</code></td><td>деление (всегда <code>float</code>)</td><td><code>6 / 2</code></td><td><code>3.0</code></td></tr>
                <tr><td><code>//</code></td><td>целочисленное деление (округление <b>вниз</b>)</td><td><code>7 // 2</code></td><td><code>3</code></td></tr>
                <tr><td><code>%</code></td><td>остаток от деления</td><td><code>7 % 2</code></td><td><code>1</code></td></tr>
                <tr><td><code>**</code></td><td>возведение в степень</td><td><code>2 ** 10</code></td><td><code>1024</code></td></tr>
              </table>` },
            { t: "code", code: py`
print(7 / 2, 7 // 2, 7 % 2, 2 ** 10)
print(6 / 2)           # деление / всегда даёт float
print(2 ** 0.5)        # корень через степень` },
            { t: "html", html: `
              <h3>Приоритет операций</h3>
              <ol><li><code>**</code> (выполняется <b>справа налево</b>: <code>2 ** 3 ** 2 = 2 ** 9</code>)</li>
              <li>унарный минус <code>-x</code></li>
              <li><code>* / // %</code> (слева направо)</li>
              <li><code>+ -</code></li></ol>
              <p>Скобки меняют порядок. Обратите внимание: <code>-2 ** 2</code> равно <code>-4</code>, потому что степень выполняется раньше минуса.</p>` },
            { t: "code", code: py`
print(2 ** 3 ** 2)    # 2 ** 9
print(-2 ** 2, (-2) ** 2)
print(2 + 3 * 4, (2 + 3) * 4)` },
            { t: "html", html: `<h3>Деление отрицательных чисел</h3><p><code>//</code> округляет результат <b>вниз</b> (к минус бесконечности), а знак остатка <code>%</code> совпадает со знаком делителя. Всегда выполняется равенство <code>a == (a // b) * b + a % b</code>.</p>` },
            { t: "code", code: py`
print(-7 // 2, -7 % 2)    # -4 и 1, потому что -4 * 2 + 1 = -7
print(7 // -2, 7 % -2)    # -4 и -1` },
            { t: "html", html: `<h3>Главный приём ЕНТ: цифры числа</h3><p><code>n % 10</code> — последняя цифра, <code>n // 10</code> — число без последней цифры, <code>n % 100</code> — две последние цифры.</p>` },
            { t: "code", code: py`
n = 472
a = n // 100        # сотни
b = n // 10 % 10    # десятки
c = n % 10          # единицы
print(a, b, c)
print("Сумма цифр:", a + b + c)` },
            { t: "html", html: `<h3>Составные операторы присваивания</h3><p><code>x += 5</code> — то же, что <code>x = x + 5</code>. Аналогично работают <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>//=</code>, <code>%=</code>, <code>**=</code>.</p>` },
          ],
        },
        {
          id: "l5",
          title: "Модуль math и округление",
          blocks: [
            { t: "html", html: `
              <p>Модуль <code>math</code> содержит математические функции. Его подключают командой <code>import math</code>, а функции вызывают через точку.</p>
              <table>
                <tr><th>Функция</th><th>Что делает</th><th>Пример</th></tr>
                <tr><td><code>math.sqrt(x)</code></td><td>квадратный корень (float)</td><td><code>math.sqrt(16)</code> → <code>4.0</code></td></tr>
                <tr><td><code>math.ceil(x)</code></td><td>округление вверх</td><td><code>math.ceil(4.1)</code> → <code>5</code></td></tr>
                <tr><td><code>math.floor(x)</code></td><td>округление вниз</td><td><code>math.floor(-4.1)</code> → <code>-5</code></td></tr>
                <tr><td><code>math.trunc(x)</code></td><td>отбросить дробную часть</td><td><code>math.trunc(-4.7)</code> → <code>-4</code></td></tr>
                <tr><td><code>math.gcd(a, b)</code></td><td>НОД</td><td><code>math.gcd(12, 18)</code> → <code>6</code></td></tr>
                <tr><td><code>math.pi</code>, <code>math.e</code></td><td>константы π и e</td><td><code>3.14159…</code></td></tr>
              </table>` },
            { t: "code", code: py`
import math
print(math.sqrt(16), math.ceil(4.1), math.floor(-4.1))
print(math.trunc(-4.7), math.gcd(12, 18))
print(math.pi)` },
            { t: "html", html: `<p>Можно импортировать только нужные функции: <code>from math import sqrt, pi</code> — тогда их вызывают без <code>math.</code>.</p>
              <h3>Встроенные round() и abs()</h3>
              <p><code>abs(x)</code> — модуль числа. <code>round(x, n)</code> — округление до <code>n</code> знаков. Важная особенность: при ровно <code>.5</code> Python округляет к <b>ближайшему чётному</b> («банковское округление»).</p>` },
            { t: "code", code: py`
print(round(2.5), round(3.5), round(-2.5))
print(round(3.14159, 2))
print(abs(-7), abs(-2.5))` },
            { t: "html", html: `<h3>Пример: гипотенуза</h3>` },
            { t: "code", input: "3\n4", code: py`
from math import sqrt
a = float(input())
b = float(input())
c = sqrt(a ** 2 + b ** 2)
print("Гипотенуза:", c)` },
            { t: "note", kind: "ent", title: "Запомните", html: `<p><code>int()</code> и <code>math.trunc()</code> отбрасывают дробную часть, <code>math.floor()</code> округляет вниз, <code>math.ceil()</code> — вверх. Для положительных чисел <code>int</code> и <code>floor</code> совпадают, для отрицательных — нет: <code>int(-2.5) = -2</code>, <code>floor(-2.5) = -3</code>.</p>` },
          ],
        },
      ],

      tasks: [
        {
          id: "t1",
          title: "Калькулятор",
          level: "Лёгкая",
          statement: `<p>Даны два целых числа <code>a</code> и <code>b</code> (каждое на отдельной строке, <code>b ≠ 0</code>).</p>
            <p>В первой строке выведите через пробел их сумму, разность <code>a − b</code> и произведение. Во второй строке — неполное частное <code>a // b</code> и остаток <code>a % b</code>.</p>`,
          starter: py`
a = int(input())
b = int(input())
# ваш код
`,
          hint: `<p>Для первой строки достаточно одного <code>print()</code> с тремя выражениями через запятую.</p>`,
          solution: py`
a = int(input())
b = int(input())
print(a + b, a - b, a * b)
print(a // b, a % b)`,
          tests: [
            { input: "7\n3", output: "10 4 21\n2 1" },
            { input: "-7\n2", output: "-5 -9 -14\n-4 1" },
            { input: "100\n10", output: "110 90 1000\n10 0", hidden: true },
            { input: "0\n5", output: "5 -5 0\n0 0", hidden: true },
            { input: "5\n-3", output: "2 8 -15\n-2 -1", hidden: true },
          ],
        },
        {
          id: "t2",
          title: "Цифры трёхзначного числа",
          level: "Средняя",
          statement: `<p>Дано трёхзначное натуральное число <code>n</code>.</p>
            <p>В первой строке выведите сумму его цифр. Во второй строке — число, записанное теми же цифрами в обратном порядке (ведущие нули не выводятся: для <code>120</code> ответ <code>21</code>).</p>
            <p>Решите задачу <b>без строк и циклов</b>, только арифметикой.</p>`,
          starter: py`
n = int(input())
`,
          hint: `<p>Цифры: <code>n // 100</code>, <code>n // 10 % 10</code>, <code>n % 10</code>. Перевёрнутое число собирается как <code>c * 100 + b * 10 + a</code> — тогда ведущий ноль исчезнет сам.</p>`,
          solution: py`
n = int(input())
a = n // 100
b = n // 10 % 10
c = n % 10
print(a + b + c)
print(c * 100 + b * 10 + a)`,
          tests: [
            { input: "123", output: "6\n321" },
            { input: "907", output: "16\n709" },
            { input: "120", output: "3\n21", hidden: true },
            { input: "999", output: "27\n999", hidden: true },
            { input: "100", output: "1\n1", hidden: true },
          ],
        },
        {
          id: "t3",
          title: "Электронные часы",
          level: "Сложная",
          statement: `<p>С начала суток прошло <code>n</code> секунд (<code>0 ≤ n ≤ 10<sup>7</sup></code>; если прошло больше суток, часы идут по кругу).</p>
            <p>Выведите, что покажут часы, в формате <code>H:MM:SS</code>: часы — без ведущего нуля (от 0 до 23), минуты и секунды — всегда двумя цифрами.</p>`,
          starter: py`
n = int(input())
`,
          hint: `<p>Сначала <code>n % 86400</code> (секунд в сутках). Часы — <code>n // 3600</code>, минуты — <code>n % 3600 // 60</code>, секунды — <code>n % 60</code>. Чтобы вывести минуты двумя цифрами, напечатайте отдельно <code>m // 10</code> и <code>m % 10</code> с <code>sep=""</code>.</p>`,
          solution: py`
n = int(input()) % 86400
h = n // 3600
m = n % 3600 // 60
s = n % 60
print(h, ":", m // 10, m % 10, ":", s // 10, s % 10, sep="")`,
          tests: [
            { input: "3661", output: "1:01:01" },
            { input: "45296", output: "12:34:56" },
            { input: "86399", output: "23:59:59", hidden: true },
            { input: "86400", output: "0:00:00", hidden: true },
            { input: "129700", output: "12:01:40", hidden: true },
            { input: "0", output: "0:00:00", hidden: true },
          ],
        },
      ],

      quiz: [
        { type: "single", q: "Что выведет программа?", code: py`print(7 // 2, 7 % 2)`,
          options: ["3.5 1", "3 1", "3 1.0", "4 1"], answer: 1,
          explain: "<code>//</code> — целочисленное деление: 7 // 2 = 3. <code>%</code> — остаток: 7 = 3·2 + 1. Оба результата целые, т.к. оба операнда целые." },
        { type: "single", q: "Пользователь ввёл число 25. Что выведет программа?", code: py`
x = input()
print(type(x))`, codeOptions: true,
          options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "Ошибка"], answer: 1,
          explain: "<code>input()</code> всегда возвращает строку, даже если введены цифры. Чтобы получить число, нужно <code>int(input())</code>." },
        { type: "single", q: "Чему равно значение выражения?", code: py`2 ** 3 ** 2`,
          options: ["64", "512", "36", "81"], answer: 1,
          explain: "Возведение в степень выполняется <b>справа налево</b>: сначала 3 ** 2 = 9, затем 2 ** 9 = 512." },
        { type: "single", q: "Что выведет программа?", code: py`print("A", "B", "C", sep="-", end="!")`,
          options: ["A B C!", "A-B-C!", "A-B-C-!", "ABC-!"], answer: 1,
          explain: "<code>sep</code> ставится только <b>между</b> значениями (A-B-C), а <code>end</code> — один раз в конце (!)." },
        { type: "multiple", q: "Какие из имён являются допустимыми именами переменных в Python?",
          codeOptions: true, options: ["my_var", "2var", "_count", "class", "Summa1", "my-var"], answer: [0, 2, 4],
          explain: "Имя не может начинаться с цифры (<code>2var</code>), содержать дефис (<code>my-var</code> воспринимается как вычитание) и совпадать с ключевым словом (<code>class</code>). Подчёркивание в начале разрешено." },
        { type: "multiple", q: "Результатом каких выражений является вещественное число 2.0 (тип float)? Считайте, что модуль math импортирован.",
          codeOptions: true, options: ["4 / 2", "4 // 2", "math.sqrt(4)", "2 ** 1", "8.0 // 4"], answer: [0, 2, 4],
          explain: "Деление <code>/</code> всегда даёт float. <code>math.sqrt</code> возвращает float. <code>//</code> даёт float, если хотя бы один операнд float (8.0 // 4 = 2.0). А <code>4 // 2</code> и <code>2 ** 1</code> с целыми операндами дают int 2." },
        { type: "matching", q: "Установите соответствие между выражением и его значением.",
          pairs: [
            { left: "-7 // 2", right: "-4" },
            { left: "-7 % 2", right: "1" },
            { left: "round(2.5)", right: "2" },
            { left: "int(3.99)", right: "3" },
            { left: "abs(-5.5)", right: "5.5" },
          ], distractors: ["-3", "4"],
          explain: "<code>//</code> округляет вниз: −3.5 → −4; остаток: −7 − (−4·2) = 1. <code>round</code> при .5 округляет к чётному: 2. <code>int</code> отбрасывает дробную часть: 3. <code>abs</code> — модуль: 5.5." },
        { type: "matching", q: "Сопоставьте значение и его тип данных.",
          pairs: [
            { left: "5", right: "int" },
            { left: "5.0", right: "float" },
            { left: "\"5\"", right: "str" },
            { left: "5 > 3", right: "bool" },
          ],
          explain: "Число без точки — <code>int</code>, с точкой — <code>float</code>, в кавычках — <code>str</code>, результат сравнения — <code>bool</code> (True)." },
        { type: "fill", q: "Что выведет программа? Впишите вывод точно.", code: py`
a, b = 5, 3
a, b = b, a
print(a, b)`, answer: ["3 5"],
          explain: "<code>a, b = b, a</code> одновременно меняет значения местами: a = 3, b = 5. <code>print</code> выводит их через пробел." },
        { type: "fill", q: "Какой оператор нужно вписать вместо пропуска, чтобы получить последнюю цифру числа n?", code: py`last = n ___ 10`, answer: ["%"],
          explain: "Последняя цифра — это остаток от деления на 10: <code>n % 10</code>." },
        { type: "single", q: "Чему равно значение <code>math.ceil(-2.5)</code>?",
          options: ["-3", "-2", "2", "3"], answer: 1,
          explain: "<code>ceil</code> округляет <b>вверх</b>, то есть к большему числу. На числовой оси −2 правее −2.5, поэтому ответ −2." },
        { type: "fill", q: "Что выведет команда?", code: py`print(10 / 4)`, answer: ["2.5"],
          explain: "Оператор <code>/</code> выполняет обычное деление и возвращает float: 10 / 4 = 2.5." },
        { type: "single", q: "Что выведет программа?", code: py`
a = "3"
b = "4"
print(a + b)`, options: ["7", "34", "3 4", "Ошибка TypeError"], answer: 1,
          explain: "Обе переменные — строки, поэтому <code>+</code> их склеивает (конкатенация): \"3\" + \"4\" = \"34\"." },
      ],
    },

    /* ====================================================
       МОДУЛЬ 2. Условные конструкции и логика
       ==================================================== */
    {
      id: "m2",
      icon: "🔀",
      title: "Условные конструкции и логика",
      summary: "Сравнения, логические операции and / or / not, if-elif-else, вложенные условия, тернарный оператор.",
      lessons: [
        {
          id: "l1",
          title: "Логический тип и сравнения",
          blocks: [
            { t: "html", html: `
              <p>Тип <code>bool</code> имеет два значения: <code>True</code> (истина) и <code>False</code> (ложь). Их возвращают операции сравнения.</p>
              <table>
                <tr><th>Оператор</th><th>Смысл</th><th>Пример</th></tr>
                <tr><td><code>==</code></td><td>равно</td><td><code>5 == 5</code> → True</td></tr>
                <tr><td><code>!=</code></td><td>не равно</td><td><code>5 != 3</code> → True</td></tr>
                <tr><td><code>&lt;</code>, <code>&gt;</code></td><td>меньше, больше</td><td><code>2 &lt; 1</code> → False</td></tr>
                <tr><td><code>&lt;=</code>, <code>&gt;=</code></td><td>меньше или равно, больше или равно</td><td><code>3 &gt;= 3</code> → True</td></tr>
              </table>
              <div class="note warn"><div class="note-title">Не путайте</div><p><code>=</code> — присваивание, <code>==</code> — сравнение. Запись <code>if x = 5:</code> — синтаксическая ошибка.</p></div>` },
            { t: "code", code: py`
x = 7
print(x > 5, x == 7, x != 7)
print(x % 2 == 1)      # x нечётное?` },
            { t: "html", html: `<h3>Цепочки сравнений</h3><p>Python позволяет писать двойные неравенства как в математике: <code>1 &lt; x &lt; 10</code> означает <code>1 &lt; x and x &lt; 10</code>.</p>` },
            { t: "code", code: py`
x = 5
print(1 < x < 10)
print(10 <= x <= 20)` },
            { t: "html", html: `<h3>Сравнение строк</h3><p>Строки сравниваются <b>посимвольно</b> по кодам символов (лексикографически). Заглавные латинские буквы имеют меньшие коды, чем строчные, а строки с цифрами сравниваются не как числа!</p>` },
            { t: "code", code: py`
print("apple" < "banana")
print("Z" < "a")
print("10" < "9")      # сравнивается '1' с '9'` },
            { t: "html", html: `<h3>Истинность значений</h3><p>Любое значение можно превратить в <code>bool</code>. Ложны: <code>0</code>, <code>0.0</code>, пустая строка <code>""</code>, <code>None</code>, пустые коллекции. Всё остальное истинно — даже строка <code>"0"</code>.</p>` },
            { t: "code", code: py`print(bool(0), bool(42), bool(""), bool("0"), bool(-1))` },
          ],
        },
        {
          id: "l2",
          title: "Логические операции: and, or, not",
          blocks: [
            { t: "html", html: `
              <ul><li><code>A and B</code> — истинно, только если <b>оба</b> условия истинны (логическое И, конъюнкция);</li>
              <li><code>A or B</code> — истинно, если истинно <b>хотя бы одно</b> (логическое ИЛИ, дизъюнкция);</li>
              <li><code>not A</code> — меняет значение на противоположное (отрицание, инверсия).</li></ul>
              <table><tr><th>A</th><th>B</th><th>A and B</th><th>A or B</th><th>not A</th></tr>
              <tr><td>False</td><td>False</td><td>False</td><td>False</td><td>True</td></tr>
              <tr><td>False</td><td>True</td><td>False</td><td>True</td><td>True</td></tr>
              <tr><td>True</td><td>False</td><td>False</td><td>True</td><td>False</td></tr>
              <tr><td>True</td><td>True</td><td>True</td><td>True</td><td>False</td></tr></table>` },
            { t: "code", code: py`
x = 15
print(x > 10 and x < 20)
print(x < 0 or x % 5 == 0)
print(not x > 10)` },
            { t: "html", html: `<h3>Приоритет</h3><p>Сначала выполняются арифметика и сравнения, затем <code>not</code>, затем <code>and</code>, и в последнюю очередь <code>or</code>. Если сомневаетесь — ставьте скобки.</p>` },
            { t: "code", code: py`
print(True or False and False)     # and раньше or
print((True or False) and False)` },
            { t: "note", kind: "ent", title: "Шаблоны для задач", html: `<p>• x принадлежит отрезку [a; b]: <code>a &lt;= x &lt;= b</code> или <code>x &gt;= a and x &lt;= b</code><br>
              • x <b>не</b> принадлежит отрезку: <code>x &lt; a or x &gt; b</code> или <code>not (a &lt;= x &lt;= b)</code><br>
              • законы де Моргана: <code>not (A and B) == (not A) or (not B)</code>, <code>not (A or B) == (not A) and (not B)</code></p>` },
            { t: "html", html: `<h3>Ленивое вычисление</h3><p>Если результат уже ясен по первой части, вторая не вычисляется: в <code>False and ...</code> и <code>True or ...</code> правая часть пропускается. Поэтому <code>x != 0 and 10 / x &gt; 1</code> не вызовет деления на ноль.</p>` },
            { t: "code", code: py`
x = 0
print(x != 0 and 10 / x > 1)` },
          ],
        },
        {
          id: "l3",
          title: "Условный оператор if – else",
          blocks: [
            { t: "html", html: `
              <p>Условный оператор выполняет блок команд, только если условие истинно. После условия ставится <b>двоеточие</b>, а тело сдвигается <b>отступом</b> (4 пробела). Отступ в Python — часть синтаксиса.</p>` },
            { t: "code", input: "7", code: py`
n = int(input())
if n % 2 == 0:
    print("чётное")
else:
    print("нечётное")
print("Проверка окончена")    # без отступа — выполняется всегда` },
            { t: "html", html: `<p>Ветка <code>else</code> необязательна. Пример — модуль числа без функции <code>abs</code>:</p>` },
            { t: "code", input: "-12", code: py`
x = int(input())
if x < 0:
    x = -x
print(x)` },
            { t: "html", html: `<h3>Максимум из двух чисел</h3>` },
            { t: "code", input: "8\n13", code: py`
a = int(input())
b = int(input())
if a > b:
    print(a)
else:
    print(b)` },
            { t: "note", kind: "warn", title: "Частые ошибки", html: `<p>• Забыли двоеточие → <code>SyntaxError: expected ':'</code><br>• Нет отступа у тела или он разный → <code>IndentationError</code><br>• <code>else</code> с условием (<code>else x &gt; 5:</code>) — так нельзя, для этого есть <code>elif</code>.</p>` },
          ],
        },
        {
          id: "l4",
          title: "Каскадные условия if – elif – else",
          blocks: [
            { t: "html", html: `
              <p>Когда вариантов больше двух, используют <code>elif</code> (else if). Условия проверяются <b>сверху вниз</b>; выполняется блок <b>первого</b> истинного условия, остальные пропускаются. Если ни одно не подошло — выполняется <code>else</code> (если он есть).</p>` },
            { t: "code", input: "82", code: py`
score = int(input())
if score >= 90:
    print("Оценка 5")
elif score >= 75:
    print("Оценка 4")
elif score >= 50:
    print("Оценка 3")
else:
    print("Оценка 2")` },
            { t: "html", html: `<p>Порядок условий важен! Если в примере выше первым проверить <code>score &gt;= 50</code>, то при 95 баллах программа поставит «3», потому что дальше проверка не пойдёт.</p>` },
            { t: "code", input: "95", code: py`
score = int(input())
if score >= 50:          # неправильный порядок!
    print("Оценка 3")
elif score >= 90:
    print("Оценка 5")` },
            { t: "html", html: `<h3>Знак числа</h3>` },
            { t: "code", input: "0", code: py`
x = int(input())
if x > 0:
    print("положительное")
elif x < 0:
    print("отрицательное")
else:
    print("ноль")` },
          ],
        },
        {
          id: "l5",
          title: "Вложенные условия и тернарный оператор",
          blocks: [
            { t: "html", html: `<p>Внутри ветки <code>if</code> можно написать ещё один <code>if</code> — это <b>вложенное</b> условие. Каждый уровень вложенности добавляет отступ.</p>` },
            { t: "code", input: "-3\n5", code: py`
x = int(input())
y = int(input())
if x > 0:
    if y > 0:
        print("I четверть")
    else:
        print("IV четверть")
else:
    if y > 0:
        print("II четверть")
    else:
        print("III четверть")` },
            { t: "html", html: `<h3>Тернарный оператор</h3><p>Короткая форма «если–иначе» в одну строку, возвращающая значение:<br><code>значение_1 if условие else значение_2</code></p>` },
            { t: "code", code: py`
n = 17
print("чётное" if n % 2 == 0 else "нечётное")
a, b = 4, 9
m = a if a > b else b
print("max =", m)` },
            { t: "html", html: `<h3>Максимум из трёх</h3><p>Классическая задача: сначала находим больший из двух, затем сравниваем с третьим. В Python также есть встроенные <code>max()</code> и <code>min()</code>, но на экзамене часто просят решить через условия.</p>` },
            { t: "code", input: "4\n9\n2", code: py`
a = int(input())
b = int(input())
c = int(input())
m = a
if b > m:
    m = b
if c > m:
    m = c
print(m, max(a, b, c))` },
          ],
        },
      ],

      tasks: [
        {
          id: "t1",
          title: "Координатная четверть",
          level: "Лёгкая",
          statement: `<p>Даны координаты точки <code>x</code> и <code>y</code> (целые, не равные нулю, каждое на отдельной строке). Выведите номер координатной четверти (1, 2, 3 или 4), в которой лежит точка.</p>`,
          starter: py`
x = int(input())
y = int(input())
`,
          hint: `<p>I: x &gt; 0 и y &gt; 0; II: x &lt; 0 и y &gt; 0; III: оба отрицательные; IV: x &gt; 0 и y &lt; 0.</p>`,
          solution: py`
x = int(input())
y = int(input())
if x > 0 and y > 0:
    print(1)
elif x < 0 and y > 0:
    print(2)
elif x < 0 and y < 0:
    print(3)
else:
    print(4)`,
          tests: [
            { input: "1\n2", output: "1" },
            { input: "-3\n5", output: "2" },
            { input: "-1\n-1", output: "3", hidden: true },
            { input: "4\n-7", output: "4", hidden: true },
            { input: "-100\n1", output: "2", hidden: true },
          ],
        },
        {
          id: "t2",
          title: "Високосный год",
          level: "Средняя",
          statement: `<p>Год является високосным, если он делится на 4, но не делится на 100, <b>или</b> если он делится на 400.</p>
            <p>Дан номер года. Выведите <code>YES</code>, если год високосный, и <code>NO</code> — в противном случае.</p>`,
          starter: py`
year = int(input())
`,
          hint: `<p>Всё условие можно записать одной строкой: <code>(year % 4 == 0 and year % 100 != 0) or year % 400 == 0</code>.</p>`,
          solution: py`
year = int(input())
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("YES")
else:
    print("NO")`,
          tests: [
            { input: "2024", output: "YES" },
            { input: "2023", output: "NO" },
            { input: "1900", output: "NO" },
            { input: "2000", output: "YES", hidden: true },
            { input: "2100", output: "NO", hidden: true },
            { input: "1600", output: "YES", hidden: true },
            { input: "4", output: "YES", hidden: true },
          ],
        },
        {
          id: "t3",
          title: "Классификация треугольника",
          level: "Сложная",
          statement: `<p>Даны три натуральных числа <code>a</code>, <code>b</code>, <code>c</code> — длины отрезков (каждое на отдельной строке).</p>
            <p>Если из них нельзя составить невырожденный треугольник, выведите <code>не существует</code>. Иначе выведите тип треугольника: <code>равносторонний</code>, <code>равнобедренный</code> или <code>разносторонний</code>.</p>`,
          starter: py`
a = int(input())
b = int(input())
c = int(input())
`,
          hint: `<p>Треугольник существует, если <b>каждая</b> сторона меньше суммы двух других: <code>a &lt; b + c and b &lt; a + c and c &lt; a + b</code>. Равенство (например, 1, 2, 3) даёт вырожденный треугольник — он не подходит. Сначала проверьте существование, затем равносторонний, затем равнобедренный.</p>`,
          solution: py`
a = int(input())
b = int(input())
c = int(input())
if a >= b + c or b >= a + c or c >= a + b:
    print("не существует")
elif a == b == c:
    print("равносторонний")
elif a == b or b == c or a == c:
    print("равнобедренный")
else:
    print("разносторонний")`,
          tests: [
            { input: "3\n3\n3", output: "равносторонний" },
            { input: "5\n5\n8", output: "равнобедренный" },
            { input: "1\n2\n3", output: "не существует" },
            { input: "3\n4\n5", output: "разносторонний", hidden: true },
            { input: "8\n5\n5", output: "равнобедренный", hidden: true },
            { input: "10\n1\n1", output: "не существует", hidden: true },
            { input: "2\n3\n2", output: "равнобедренный", hidden: true },
            { input: "7\n10\n5", output: "разносторонний", hidden: true },
          ],
        },
      ],

      quiz: [
        { type: "single", q: "Что выведет программа?", code: py`print(not 5 > 3 or 2 == 2)`,
          options: ["True", "False", "Ошибка", "None"], answer: 0,
          explain: "Сначала сравнения: 5 > 3 → True, 2 == 2 → True. Затем <code>not True</code> → False. Затем <code>False or True</code> → True." },
        { type: "single", q: "Что выведет программа?", code: py`
x = 7
print("A" if x % 2 == 0 else "B")`,
          options: ["A", "B", "AB", "Ошибка"], answer: 1,
          explain: "7 % 2 = 1, условие <code>1 == 0</code> ложно, поэтому тернарный оператор возвращает значение после <code>else</code> — \"B\"." },
        { type: "single", q: "Какая логическая операция имеет наивысший приоритет в Python?",
          options: ["and", "or", "not", "Все одинаковы, выполняются слева направо"], answer: 2,
          explain: "Порядок: <code>not</code> → <code>and</code> → <code>or</code>. Поэтому <code>True or False and False</code> = <code>True or (False and False)</code> = True." },
        { type: "multiple", q: "Какие условия истинны тогда и только тогда, когда x принадлежит отрезку [1; 10]?",
          codeOptions: true, options: ["1 <= x <= 10", "x >= 1 and x <= 10", "x >= 1 or x <= 10", "not (x < 1 or x > 10)", "1 < x < 10"], answer: [0, 1, 3],
          explain: "Нужны оба ограничения одновременно — это <code>and</code> или цепочка сравнений. Вариант с <code>not</code> верен по закону де Моргана. Вариант с <code>or</code> истинен для любого числа, а <code>1 &lt; x &lt; 10</code> не включает концы отрезка." },
        { type: "multiple", q: "Какие выражения имеют значение False?",
          codeOptions: true, options: ["bool(0)", "bool(\"\")", "bool(\" \")", "bool(-1)", "bool(0.0)"], answer: [0, 1, 4],
          explain: "Ложны ноль (0, 0.0) и пустая строка. Строка из пробела не пустая → True. Любое ненулевое число, в том числе −1, → True." },
        { type: "matching", q: "Дана программа. Сопоставьте введённое значение b и вывод программы.", code: py`
b = int(input())
if b >= 90:
    print("A")
elif b >= 75:
    print("B")
elif b >= 50:
    print("C")
else:
    print("F")`,
          pairs: [
            { left: "95", right: "A" },
            { left: "75", right: "B" },
            { left: "74", right: "C" },
            { left: "49", right: "F" },
          ],
          explain: "Условия проверяются сверху вниз до первого истинного. 75 >= 75 истинно → B; 74 не проходит второе условие, но проходит третье → C; 49 не проходит ни одно → F." },
        { type: "matching", q: "Сопоставьте условие и его смысл (x — целое число).",
          codeOptions: true,
          pairs: [
            { left: "x % 2 == 0", right: "x чётное" },
            { left: "x % 2 != 0", right: "x нечётное" },
            { left: "x % 10 == 0", right: "x оканчивается на 0" },
            { left: "10 <= x <= 99", right: "x — двузначное положительное" },
            { left: "x % 3 == 0 or x % 5 == 0", right: "x кратно 3 или 5" },
          ], distractors: ["x кратно 15"],
          explain: "Остаток 0 от деления на k означает кратность k. Остаток от деления на 10 — последняя цифра. Кратность 15 — это <code>and</code>, а не <code>or</code>." },
        { type: "fill", q: "Какой оператор нужно вписать вместо пропуска, чтобы программа проверяла чётность?", code: py`
if n % 2 ___ 0:
    print("чётное")`, answer: ["=="],
          explain: "Для сравнения используется <code>==</code>. Одиночное <code>=</code> — это присваивание, в условии оно вызовет SyntaxError." },
        { type: "fill", q: "Что выведет программа?", code: py`
a = 10
b = 20
if a > b:
    print(a)
elif a == 10:
    print("ten")
else:
    print(b)`, answer: ["ten"],
          explain: "Условие <code>a &gt; b</code> ложно, переходим к <code>elif a == 10</code> — оно истинно, выводится ten. До <code>else</code> дело не доходит." },
        { type: "single", q: "Что выведет программа?", code: py`
x, y = 5, -3
if x > 0:
    if y > 0:
        print(1)
    else:
        print(4)
else:
    print(0)`,
          options: ["1", "4", "0", "Ничего не выведет"], answer: 1,
          explain: "x > 0 — заходим во внешнюю ветку. Внутри y > 0 ложно, выполняется вложенный <code>else</code> → 4." },
        { type: "fill", q: "Впишите пропущенное ключевое слово, чтобы m стало большим из чисел a и b.", code: py`m = a ___ a > b else b`, answer: ["if"],
          explain: "Тернарный оператор: <code>значение if условие else другое_значение</code>." },
        { type: "single", q: "Какую ошибку выдаст Python?", code: py`
x = 7
if x > 5
    print(x)`,
          options: ["SyntaxError", "IndentationError", "NameError", "Ошибки не будет, выведется 7"], answer: 0,
          explain: "После условия пропущено двоеточие. Python сообщит <code>SyntaxError: expected ':'</code>." },
        { type: "single", q: "Что выведет программа?", code: py`
x = 0
if x:
    print("да")
else:
    print("нет")`,
          options: ["да", "нет", "Ошибка", "0"], answer: 1,
          explain: "В условии число приводится к bool. <code>bool(0)</code> = False, поэтому выполняется ветка <code>else</code>." },
      ],
    },

    /* ====================================================
       МОДУЛЬ 3. Циклы и итерации
       ==================================================== */
    {
      id: "m3",
      icon: "🔁",
      title: "Циклы и итерации",
      summary: "while, for и range(), break / continue / else, вложенные циклы, поиск min/max и суммы в потоке данных.",
      lessons: [
        {
          id: "l1",
          title: "Цикл while",
          blocks: [
            { t: "html", html: `
              <p>Цикл <code>while</code> («пока») повторяет тело, <b>пока условие истинно</b>. Условие проверяется <b>перед</b> каждым повторением (итерацией), поэтому тело может не выполниться ни разу.</p>` },
            { t: "code", code: py`
i = 1
while i <= 5:
    print(i, end=" ")
    i += 1          # без этой строки цикл был бы бесконечным
print()
print("После цикла i =", i)` },
            { t: "html", html: `<h3>Обработка цифр числа</h3><p><code>while</code> идеален, когда число повторений заранее неизвестно. Например, перебор цифр числа: берём последнюю цифру (<code>% 10</code>) и отбрасываем её (<code>//= 10</code>), пока число не станет нулём.</p>` },
            { t: "code", input: "4096", code: py`
n = int(input())
s = 0
k = 0
while n > 0:
    s += n % 10
    k += 1
    n //= 10
print("Сумма цифр:", s)
print("Количество цифр:", k)` },
            { t: "code", code: py`
# Степени двойки меньше 100
x = 1
while x < 100:
    print(x, end=" ")
    x *= 2` },
            { t: "note", kind: "warn", title: "Бесконечный цикл", html: `<p>Если переменная в условии не меняется, цикл никогда не закончится. На этом сайте такая программа будет остановлена по таймауту, но в реальной жизни её придётся прерывать вручную (Ctrl+C).</p>` },
          ],
        },
        {
          id: "l2",
          title: "Цикл for и функция range()",
          blocks: [
            { t: "html", html: `
              <p>Цикл <code>for</code> перебирает элементы последовательности. Чаще всего — числа, которые выдаёт <code>range()</code>.</p>
              <table>
                <tr><th>Вызов</th><th>Числа</th><th>Пояснение</th></tr>
                <tr><td><code>range(5)</code></td><td>0 1 2 3 4</td><td>от 0 до stop − 1</td></tr>
                <tr><td><code>range(2, 6)</code></td><td>2 3 4 5</td><td>от start до stop − 1</td></tr>
                <tr><td><code>range(1, 10, 3)</code></td><td>1 4 7</td><td>с шагом step</td></tr>
                <tr><td><code>range(10, 0, -3)</code></td><td>10 7 4 1</td><td>отрицательный шаг — по убыванию</td></tr>
                <tr><td><code>range(5, 1)</code></td><td>(пусто)</td><td>start ≥ stop при шаге &gt; 0</td></tr>
              </table>
              <div class="note ent"><div class="note-title">Главное правило</div><p>Правая граница <code>stop</code> <b>никогда не включается</b>. Чтобы перебрать числа от 1 до n включительно, пишут <code>range(1, n + 1)</code>.</p></div>` },
            { t: "code", code: py`
for i in range(5):
    print(i, end=" ")
print()
for i in range(2, 11, 2):
    print(i, end=" ")
print()
for i in range(10, 0, -3):
    print(i, end=" ")` },
            { t: "html", html: `<p>Перебирать можно и строку — по одному символу:</p>` },
            { t: "code", code: py`
for ch in "Python":
    print(ch, end="-")` },
            { t: "html", html: `<h3>Сумма и произведение</h3><p>Накопительная переменная создаётся <b>до</b> цикла: сумма начинается с 0, произведение — с 1.</p>` },
            { t: "code", input: "5", code: py`
n = int(input())
s = 0
f = 1
for i in range(1, n + 1):
    s += i
    f *= i
print("Сумма 1..n =", s)
print("n! =", f)` },
          ],
        },
        {
          id: "l3",
          title: "break, continue и else в циклах",
          blocks: [
            { t: "html", html: `
              <ul><li><code>break</code> — немедленно <b>завершает</b> цикл;</li>
              <li><code>continue</code> — пропускает остаток тела и переходит к <b>следующей итерации</b>;</li>
              <li><code>else</code> после цикла выполняется, если цикл завершился <b>естественно, без break</b>.</li></ul>` },
            { t: "code", code: py`
# continue: пропускаем числа, кратные 3
for i in range(1, 10):
    if i % 3 == 0:
        continue
    print(i, end=" ")` },
            { t: "code", code: py`
# break: ищем первое число, квадрат которого больше 50
for i in range(1, 100):
    if i * i > 50:
        break
print("Найдено:", i)` },
            { t: "html", html: `<h3>Проверка на простоту: for … else</h3><p>Ищем делитель числа. Нашли — печатаем и выходим через <code>break</code>. Если цикл дошёл до конца без <code>break</code>, срабатывает <code>else</code>: делителей нет, число простое.</p>` },
            { t: "code", input: "91", code: py`
n = int(input())
for d in range(2, n):
    if n % d == 0:
        print("составное, делитель", d)
        break
else:
    print("простое")` },
            { t: "html", html: `<h3>Ввод до нуля: while True</h3><p>Бесконечный цикл с выходом через <code>break</code> — удобный способ читать данные, пока не встретится «стоп-значение».</p>` },
            { t: "code", input: "3\n5\n0", code: py`
while True:
    x = int(input())
    if x == 0:
        break
    print(x * 2)` },
          ],
        },
        {
          id: "l4",
          title: "Вложенные циклы",
          blocks: [
            { t: "html", html: `<p>Внутри одного цикла может находиться другой. Для <b>каждой</b> итерации внешнего цикла внутренний выполняется <b>полностью</b>. Если внешний цикл делает m повторений, а внутренний n, тело внутреннего выполнится m·n раз.</p>` },
            { t: "code", code: py`
for i in range(1, 4):
    for j in range(1, 4):
        print(i * j, end="\t")
    print()        # перевод строки после каждой строки таблицы` },
            { t: "code", input: "4", code: py`
n = int(input())
for i in range(1, n + 1):
    print("*" * i)    # строку можно умножить на число` },
            { t: "html", html: `<p>Внутренний цикл может зависеть от переменной внешнего. Сколько раз выполнится <code>k += 1</code>?</p>` },
            { t: "code", code: py`
k = 0
for i in range(5):
    for j in range(i):
        k += 1
print(k)     # 0 + 1 + 2 + 3 + 4` },
            { t: "note", kind: "warn", title: "Важно", html: `<p><code>break</code> во вложенном цикле прерывает <b>только тот цикл, в котором находится</b> (внутренний). Внешний продолжит работу.</p>` },
          ],
        },
        {
          id: "l5",
          title: "Алгоритмы: сумма, количество, min и max",
          blocks: [
            { t: "html", html: `
              <p>Типичная задача ЕНТ: на вход поступает последовательность чисел, нужно найти сумму, количество подходящих элементов, минимум или максимум, <b>не сохраняя</b> все числа.</p>
              <ul><li><b>Сумма:</b> <code>s = 0</code>, затем <code>s += x</code>.</li>
              <li><b>Количество:</b> <code>k = 0</code>, затем <code>if условие: k += 1</code>.</li>
              <li><b>Максимум:</b> начальное значение — первый элемент или <code>float('-inf')</code> (минус бесконечность); затем <code>if x &gt; mx: mx = x</code>.</li>
              <li><b>Минимум:</b> аналогично с <code>float('inf')</code>.</li></ul>` },
            { t: "code", input: "4\n3\n-8\n12\n7", code: py`
n = int(input())          # сначала количество чисел
s = 0
even = 0
mx = float('-inf')
mn = float('inf')
for _ in range(n):
    x = int(input())
    s += x
    if x % 2 == 0:
        even += 1
    if x > mx:
        mx = x
    if x < mn:
        mn = x
print("Сумма:", s)
print("Чётных:", even)
print("Максимум:", mx, "Минимум:", mn)
print("Среднее:", s / n)` },
            { t: "note", kind: "ent", title: "Ловушка", html: `<p>Нельзя начинать поиск максимума с <code>mx = 0</code>, если числа могут быть отрицательными: для последовательности −5, −2, −9 программа ответит 0, хотя такого числа нет. Используйте первый элемент или <code>float('-inf')</code>.</p>` },
            { t: "html", html: `<h3>Последовательность, оканчивающаяся нулём</h3><p>Если количество чисел заранее неизвестно, используют <code>while</code>: читаем число до цикла и в конце каждой итерации.</p>` },
            { t: "code", input: "4\n-2\n9\n0", code: py`
x = int(input())
cnt = 0
mx = x
while x != 0:
    if x > 0:
        cnt += 1
    if x > mx:
        mx = x
    x = int(input())
print("Положительных:", cnt, "Максимум:", mx)` },
          ],
        },
        {
          id: "l6",
          title: "Флаги, трассировка и поиск ошибок",
          blocks: [
            { t: "html", html: `<h3>Флаг</h3><p><b>Флаг</b> — логическая переменная, которая запоминает, произошло ли событие хотя бы раз. До цикла флагу дают начальное значение (обычно <code>False</code>), а внутри цикла меняют, если событие случилось. Ответ печатают <b>после</b> цикла.</p>` },
            { t: "code", input: "4\n3\n-1\n7\n2", code: py`
n = int(input())
has_negative = False
for _ in range(n):
    x = int(input())
    if x < 0:
        has_negative = True
print("YES" if has_negative else "NO")` },
            { t: "code", input: "2486", code: py`
# Все ли цифры числа чётные?
n = int(input())
all_even = True
while n > 0:
    if n % 10 % 2 != 0:
        all_even = False
        break
    n //= 10
print(all_even)` },
            { t: "html", html: `<h3>Трассировка</h3><p>В заданиях ЕНТ часто нужно «выполнить программу в уме». Удобно вести <b>таблицу трассировки</b>: строка таблицы — одна итерация, столбцы — значения переменных.</p>` },
            { t: "code", code: py`
s = 0
i = 1
while i < 10:
    s += i
    i *= 3
print(s)` },
            { t: "html", html: `<table style="max-width:420px">
              <tr><th>Шаг</th><th>Условие i &lt; 10</th><th>s</th><th>i</th></tr>
              <tr><td>старт</td><td>—</td><td>0</td><td>1</td></tr>
              <tr><td>1</td><td>1 &lt; 10 — да</td><td>1</td><td>3</td></tr>
              <tr><td>2</td><td>3 &lt; 10 — да</td><td>4</td><td>9</td></tr>
              <tr><td>3</td><td>9 &lt; 10 — да</td><td>13</td><td>27</td></tr>
              <tr><td>4</td><td>27 &lt; 10 — нет, выход</td><td>13</td><td>27</td></tr></table>` },
            { t: "html", html: `<h3>Типичные ошибки в циклах</h3>
              <table>
                <tr><th>Ошибка</th><th>Симптом</th><th>Исправление</th></tr>
                <tr><td><code>range(1, n)</code> вместо <code>range(1, n + 1)</code></td><td>не обработан последний элемент</td><td>правая граница не включается — прибавьте 1</td></tr>
                <tr><td>накопитель <code>s = 0</code> внутри цикла</td><td>сумма «сбрасывается» на каждой итерации</td><td>инициализация — до цикла</td></tr>
                <tr><td><code>print</code> с отступом внутри цикла</td><td>ответ печатается много раз</td><td>уберите отступ</td></tr>
                <tr><td>в <code>while</code> не меняется переменная условия</td><td>бесконечный цикл</td><td>измените её в теле цикла</td></tr>
                <tr><td><code>mx = 0</code> для чисел любого знака</td><td>неверный максимум для отрицательных</td><td>первый элемент или <code>float('-inf')</code></td></tr>
              </table>
              <p>Найдите ошибку в программе, которая должна выводить сумму чисел от 1 до 5 (правильный ответ 15), а потом сравните с исправленной версией.</p>` },
            { t: "code", code: py`
n = 5
for i in range(1, n):
    s = 0
    s += i
print(s)` },
            { t: "code", code: py`
n = 5
s = 0                      # накопитель — до цикла
for i in range(1, n + 1):  # n включительно
    s += i
print(s)` },
          ],
        },
      ],

      tasks: [
        {
          id: "t1",
          title: "Сумма кратных 3 или 5",
          level: "Лёгкая",
          statement: `<p>Дано натуральное число <code>n</code>. Найдите сумму всех чисел от 1 до <code>n</code> включительно, которые делятся на 3 <b>или</b> на 5.</p>`,
          starter: py`
n = int(input())
`,
          hint: `<p><code>for i in range(1, n + 1):</code> и условие <code>i % 3 == 0 or i % 5 == 0</code>. Не забудьте <code>s = 0</code> до цикла.</p>`,
          solution: py`
n = int(input())
s = 0
for i in range(1, n + 1):
    if i % 3 == 0 or i % 5 == 0:
        s += i
print(s)`,
          tests: [
            { input: "10", output: "33" },
            { input: "5", output: "8" },
            { input: "1", output: "0", hidden: true },
            { input: "15", output: "60", hidden: true },
            { input: "100", output: "2418", hidden: true },
          ],
        },
        {
          id: "t2",
          title: "Последовательность до нуля",
          level: "Средняя",
          statement: `<p>Вводятся целые числа, по одному в строке. Признак конца ввода — число <code>0</code> (в последовательность не входит). Гарантируется, что перед нулём есть хотя бы одно число.</p>
            <p>Выведите три строки: количество чисел, их сумму и максимальное число. Числа могут быть <b>отрицательными</b>.</p>`,
          starter: py`
x = int(input())
`,
          hint: `<p>Начальное значение максимума — первое прочитанное число (<code>mx = x</code>), а не 0. Читайте новое число в конце тела цикла <code>while x != 0</code>.</p>`,
          solution: py`
x = int(input())
cnt = 0
s = 0
mx = x
while x != 0:
    cnt += 1
    s += x
    if x > mx:
        mx = x
    x = int(input())
print(cnt)
print(s)
print(mx)`,
          tests: [
            { input: "3\n7\n2\n0", output: "3\n12\n7" },
            { input: "10\n0", output: "1\n10\n10" },
            { input: "-5\n-2\n-9\n0", output: "3\n-16\n-2", hidden: true },
            { input: "1\n2\n3\n4\n5\n0", output: "5\n15\n5", hidden: true },
            { input: "-1\n0", output: "1\n-1\n-1", hidden: true },
          ],
        },
        {
          id: "t3",
          title: "Простые числа на отрезке",
          level: "Сложная",
          statement: `<p>Даны два натуральных числа <code>a</code> и <code>b</code> (<code>1 ≤ a ≤ b ≤ 10000</code>), каждое на отдельной строке.</p>
            <p>Выведите через пробел в порядке возрастания все простые числа на отрезке [a; b]. Если таких чисел нет, выведите <code>NO</code>.</p>
            <p>Напомним: простое число имеет ровно два делителя — 1 и само себя. Число 1 простым не является.</p>`,
          starter: py`
a = int(input())
b = int(input())
`,
          hint: `<p>Внешний цикл перебирает числа от a до b, внутренний ищет делитель от 2 до <code>int(n ** 0.5)</code> (достаточно проверить до корня). Удобно использовать <code>for … else</code> или флаг <code>is_prime</code>. Чтобы понять, выводить ли NO, заведите счётчик найденных чисел.</p>`,
          solution: py`
a = int(input())
b = int(input())
found = 0
for n in range(max(a, 2), b + 1):
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            break
    else:
        print(n, end=" ")
        found += 1
if found == 0:
    print("NO")`,
          tests: [
            { input: "1\n10", output: "2 3 5 7" },
            { input: "10\n20", output: "11 13 17 19" },
            { input: "24\n28", output: "NO" },
            { input: "1\n1", output: "NO", hidden: true },
            { input: "2\n2", output: "2", hidden: true },
            { input: "9990\n10000", output: "NO", hidden: true },
            { input: "97\n100", output: "97", hidden: true },
            { input: "1\n100", output: "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97", hidden: true },
          ],
        },
      ],

      quiz: [
        { type: "single", q: "Что выведет программа?", code: py`
for i in range(2, 10, 3):
    print(i, end=" ")`,
          options: ["2 5 8", "2 5 8 11", "3 6 9", "2 4 6 8"], answer: 0,
          explain: "Начинаем с 2, шаг 3: 2, 5, 8. Следующее 11 уже ≥ 10 — правая граница не включается." },
        { type: "single", q: "Сколько звёздочек выведет программа?", code: py`
for i in range(10, 0, -2):
    print("*")`,
          options: ["4", "5", "6", "10"], answer: 1,
          explain: "Значения i: 10, 8, 6, 4, 2 — пять итераций. 0 не входит, т.к. stop не включается." },
        { type: "single", q: "Что выведет программа?", code: py`
s = 0
for i in range(1, 6):
    if i == 4:
        break
    s += i
print(s)`,
          options: ["10", "6", "15", "3"], answer: 1,
          explain: "Складываются i = 1, 2, 3 (сумма 6). При i = 4 <code>break</code> завершает цикл до сложения." },
        { type: "single", q: "Что выведет программа?", code: py`
n = 0
while n < 10:
    n += 3
print(n)`,
          options: ["9", "10", "12", "13"], answer: 2,
          explain: "n принимает значения 3, 6, 9, 12. При n = 9 условие 9 &lt; 10 ещё истинно, поэтому выполняется ещё одна итерация → 12, после чего цикл заканчивается." },
        { type: "multiple", q: "Какие фрагменты выведут числа 0, 1, 2 (каждое на новой строке)?", codeOptions: true,
          options: [
            "for i in range(3):\n    print(i)",
            "for i in range(0, 3):\n    print(i)",
            "for i in range(1, 3):\n    print(i)",
            "i = 0\nwhile i < 3:\n    print(i)\n    i += 1",
            "for i in range(3, 0, -1):\n    print(i)",
          ], answer: [0, 1, 3],
          explain: "<code>range(3)</code> и <code>range(0, 3)</code> дают 0, 1, 2. <code>range(1, 3)</code> даёт только 1, 2, а <code>range(3, 0, -1)</code> — 3, 2, 1. Цикл while печатает 0, 1, 2 и останавливается при i = 3." },
        { type: "multiple", q: "Выберите верные утверждения.",
          options: [
            "Блок <code>else</code> после цикла выполняется, если цикл завершился без <code>break</code>",
            "<code>continue</code> полностью прекращает выполнение цикла",
            "<code>range(5)</code> включает число 5",
            "Тело цикла <code>while</code> может не выполниться ни разу",
            "<code>break</code> во вложенном цикле прерывает только внутренний цикл",
          ], answer: [0, 3, 4],
          explain: "<code>continue</code> лишь переходит к следующей итерации, а прекращает цикл <code>break</code>. <code>range(5)</code> — это 0…4. Если условие while сразу ложно, тело не выполнится ни разу." },
        { type: "matching", q: "Сопоставьте вызов range и последовательность чисел.",
          pairs: [
            { left: "range(4)", right: "0 1 2 3" },
            { left: "range(1, 4)", right: "1 2 3" },
            { left: "range(4, 0, -1)", right: "4 3 2 1" },
            { left: "range(0, 10, 4)", right: "0 4 8" },
            { left: "range(5, 1)", right: "(пусто)" },
          ], distractors: ["0 1 2 3 4", "1 2 3 4"],
          explain: "stop не включается. При отрицательном шаге числа идут вниз до stop + 1. Если start ≥ stop при положительном шаге — последовательность пустая." },
        { type: "matching", q: "Сопоставьте задачу и правильное начальное значение переменной перед циклом.",
          codeOptions: true,
          pairs: [
            { left: "Сумма элементов", right: "s = 0" },
            { left: "Произведение элементов", right: "p = 1" },
            { left: "Максимум (числа любого знака)", right: "mx = float('-inf')" },
            { left: "Минимум (числа любого знака)", right: "mn = float('inf')" },
          ], distractors: ["p = 0"],
          explain: "0 — нейтральный элемент для сложения, 1 — для умножения (с p = 0 произведение всегда будет 0). Для максимума берут минус бесконечность, чтобы любое число оказалось больше; для минимума — плюс бесконечность." },
        { type: "fill", q: "Что выведет программа? Впишите вывод точно.", code: py`
for i in range(3):
    for j in range(2):
        print("*", end="")`, answer: ["******"],
          explain: "Внешний цикл — 3 итерации, внутренний — по 2. Всего 3 · 2 = 6 звёздочек в одной строке (end=\"\")." },
        { type: "fill", q: "Какое ключевое слово пропускает оставшуюся часть тела цикла и сразу переходит к следующей итерации?", answer: ["continue"], ignoreCase: true,
          explain: "<code>continue</code> переходит к следующей итерации, <code>break</code> — выходит из цикла." },
        { type: "fill", q: "Что выведет программа?", code: py`
k = 0
for c in "programming":
    if c == "m":
        k += 1
print(k)`, answer: ["2"],
          explain: "Цикл перебирает символы строки. В слове programming две буквы m." },
        { type: "single", q: "Что выведет программа?", code: py`
for i in range(2, 7):
    if 7 % i == 0:
        print("составное")
        break
else:
    print("простое")`,
          options: ["составное", "простое", "Ничего", "составное и простое"], answer: 1,
          explain: "7 не делится ни на одно из чисел 2…6, <code>break</code> не сработал, поэтому выполнился блок <code>else</code> цикла." },
        { type: "single", q: "Что выведет программа?", code: py`
s = 0
for i in range(1, 10, 2):
    s += i
print(s)`,
          options: ["45", "20", "25", "16"], answer: 2,
          explain: "Складываются нечётные числа 1 + 3 + 5 + 7 + 9 = 25." },
        { type: "single", q: "Программа должна выводить сумму чисел от 1 до 10 (то есть 55), но выводит 45. В чём ошибка?", code: py`
s = 0
for i in range(1, 10):
    s += i
print(s)`,
          options: ["range(1, 10) не включает 10 — нужно range(1, 11)", "s нужно начинать с 1", "Нужно писать s = s + 1", "print должен быть внутри цикла"], answer: 0,
          explain: "Цикл перебирает 1…9, их сумма 45. Правая граница range не включается, поэтому для 10 нужно <code>range(1, 11)</code>." },
        { type: "fill", q: "Выполните трассировку. Что выведет программа?", code: py`
s = 0
i = 1
while i < 10:
    s += i
    i *= 3
print(s)`, answer: ["13"],
          explain: "i принимает значения 1, 3, 9 (потом 27 — выход). s = 1 + 3 + 9 = 13." },
      ],
    },

    /* ====================================================
       МОДУЛИ 4–7 — структура готова, контент в разработке.
       Чтобы открыть модуль: заполните lessons/tasks/quiz
       и удалите строку status: "soon".
       ==================================================== */
    /* ====================================================
       МОДУЛЬ 4. Строки и работа с текстом
       ==================================================== */
    {
      id: "m4",
      icon: "🔤",
      title: "Строки и работа с текстом",
      summary: "Индексация, срезы, перебор, строковые методы, f-строки и format, кодировки (ord, chr).",
      lessons: [
        {
          id: "l1",
          title: "Что такое строка",
          blocks: [
            { t: "html", html: `
              <p><b>Строка</b> (<code>str</code>) — это последовательность символов. Создать её можно в одинарных <code>'...'</code>, двойных <code>"..."</code> или тройных <code>"""..."""</code> кавычках. Тройные кавычки позволяют записать текст в несколько строк.</p>` },
            { t: "code", code: py`
a = 'Привет'
b = "Python"
c = """Первая строка
Вторая строка"""
print(a, b)
print(c)
print(type(a))` },
            { t: "html", html: `
              <h3>Экранирование</h3>
              <p>Чтобы вставить в строку специальный символ, перед ним ставят обратный слэш <code>\\</code>.</p>
              <table>
                <tr><th>Запись</th><th>Значение</th></tr>
                <tr><td><code>\\n</code></td><td>перенос строки</td></tr>
                <tr><td><code>\\t</code></td><td>табуляция</td></tr>
                <tr><td><code>\\\\</code></td><td>сам обратный слэш</td></tr>
                <tr><td><code>\\'</code>, <code>\\"</code></td><td>кавычка внутри строки</td></tr>
              </table>` },
            { t: "code", code: py`
print("Он сказал: \"Я люблю эту жизнь\"")
print('It\'s Python')
print("Имя:\tАсель\nКласс:\t11")
print("C:\\Users\\Admin")` },
            { t: "html", html: `
              <h3>Длина и операции</h3>
              <table>
                <tr><th>Операция</th><th>Смысл</th><th>Пример</th></tr>
                <tr><td><code>len(s)</code></td><td>количество символов</td><td><code>len("кот")</code> → 3</td></tr>
                <tr><td><code>+</code></td><td>конкатенация (склейка)</td><td><code>"ab" + "cd"</code> → <code>"abcd"</code></td></tr>
                <tr><td><code>*</code></td><td>повторение</td><td><code>"ha" * 3</code> → <code>"hahaha"</code></td></tr>
                <tr><td><code>in</code>, <code>not in</code></td><td>есть ли подстрока</td><td><code>"cat" in "concatenate"</code> → True</td></tr>
              </table>` },
            { t: "code", code: py`
s = "concatenate"
print(len(s))
print("=" * 20)
print("cat" in s, "dog" not in s)
print("Py" + "thon" + "!" * 3)` },
            { t: "note", kind: "warn", title: "Строки неизменяемы", html: `<p>Нельзя поменять один символ: <code>s[0] = "J"</code> вызовет <code>TypeError</code>. Любой метод или срез создаёт <b>новую</b> строку, исходная не меняется. Чтобы «изменить» строку, её пересобирают: <code>s = "J" + s[1:]</code>.</p>` },
          ],
        },
        {
          id: "l2",
          title: "Индексация и срезы",
          blocks: [
            { t: "html", html: `
              <p>У каждого символа есть номер — <b>индекс</b>. Индексация начинается с 0. Отрицательные индексы считают с конца: <code>s[-1]</code> — последний символ.</p>
              <table style="text-align:center;max-width:420px">
                <tr><th>символ</th><td>P</td><td>y</td><td>t</td><td>h</td><td>o</td><td>n</td></tr>
                <tr><th>индекс</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                <tr><th>с конца</th><td>-6</td><td>-5</td><td>-4</td><td>-3</td><td>-2</td><td>-1</td></tr>
              </table>` },
            { t: "code", code: py`
s = "Python"
print(s[0], s[1], s[-1], s[-2])
print(s[len(s) - 1])     # последний символ через длину` },
            { t: "note", kind: "warn", title: "IndexError", html: `<p>Обращение к несуществующему индексу (<code>s[6]</code> для строки из 6 символов) вызывает ошибку <code>IndexError: string index out of range</code>.</p>` },
            { t: "html", html: `
              <h3>Срезы s[start:stop:step]</h3>
              <p>Срез возвращает часть строки: от <code>start</code> до <code>stop</code> <b>не включительно</b> с шагом <code>step</code>. Любой параметр можно пропустить: по умолчанию start — начало, stop — конец, step — 1. В отличие от индекса, срез <b>никогда не вызывает ошибку</b>, даже если границы за пределами строки.</p>` },
            { t: "code", code: py`
s = "информатика"
print(s[0:3])     # первые 3 символа
print(s[-3:])     # последние 3 символа
print(s[2:7])
print(s[::2])     # каждый второй символ
print(s[1:100])   # выход за границу — не ошибка` },
            { t: "html", html: `<h3>Разворот строки</h3><p>Самый популярный срез — с шагом −1: символы читаются от конца к началу. С его помощью проверяют <b>палиндромы</b> — слова, которые одинаково читаются в обе стороны.</p>` },
            { t: "code", input: "шалаш", code: py`
s = input()
print(s[::-1])
if s == s[::-1]:
    print("палиндром")
else:
    print("не палиндром")` },
            { t: "code", input: "Python", code: py`
# Поменять местами первый и последний символ
s = input()
print(s[-1] + s[1:-1] + s[0])` },
            { t: "note", kind: "ent", title: "Запомните", html: `<p><code>s[:k]</code> — первые k символов, <code>s[-k:]</code> — последние k, <code>s[k:]</code> — всё, кроме первых k, <code>s[:-k]</code> — всё, кроме последних k, <code>s[::-1]</code> — разворот.</p>` },
          ],
        },
        {
          id: "l3",
          title: "Перебор строки: for и enumerate",
          blocks: [
            { t: "html", html: `<p>Строка — последовательность, поэтому её можно перебрать циклом <code>for</code>: на каждой итерации переменная получает очередной символ.</p>` },
            { t: "code", input: "банан и ананас", code: py`
s = input()
k = 0
for ch in s:
    if ch == "а":
        k += 1
print("Букв а:", k)
print("Метод count даёт то же:", s.count("а"))` },
            { t: "code", input: "Программирование", code: py`
# Подсчёт гласных
s = input().lower()
vowels = "аеёиоуыэюяaeiou"
k = 0
for ch in s:
    if ch in vowels:
        k += 1
print("Гласных:", k)` },
            { t: "html", html: `
              <h3>Перебор с индексом</h3>
              <p>Если нужен и символ, и его номер, есть два способа: перебрать индексы через <code>range(len(s))</code> или использовать <code>enumerate()</code>, которая выдаёт пары «индекс, элемент». У <code>enumerate</code> можно задать начальный номер: <code>enumerate(s, 1)</code>.</p>` },
            { t: "code", code: py`
s = "кот"
for i in range(len(s)):
    print(i, s[i])
print("---")
for i, ch in enumerate(s, 1):
    print(i, ch)` },
            { t: "html", html: `<h3>Сборка новой строки</h3><p>Поскольку строку нельзя изменить, новую строку собирают в цикле: начинают с пустой <code>""</code> и добавляют символы через <code>+=</code>.</p>` },
            { t: "code", input: "Мама мыла раму", code: py`
# Удалить все пробелы и повторяющиеся символы
s = input()
res = ""
for ch in s:
    if ch != " " and ch not in res:
        res += ch
print(res)` },
            { t: "code", input: "abracadabra", code: py`
# Символ, который встречается чаще всего
s = input()
best = s[0]
for ch in s:
    if s.count(ch) > s.count(best):
        best = ch
print(best, s.count(best))` },
          ],
        },
        {
          id: "l4",
          title: "Строковые методы",
          blocks: [
            { t: "html", html: `<p>Метод вызывается через точку: <code>s.upper()</code>. Методы <b>не меняют</b> строку, а возвращают новую — результат нужно сохранить или вывести.</p>
              <h3>Регистр</h3>
              <table>
                <tr><th>Метод</th><th>Что делает</th></tr>
                <tr><td><code>upper()</code> / <code>lower()</code></td><td>все буквы заглавные / строчные</td></tr>
                <tr><td><code>capitalize()</code></td><td>первая буква строки заглавная, остальные строчные</td></tr>
                <tr><td><code>title()</code></td><td>первая буква каждого слова заглавная</td></tr>
              </table>` },
            { t: "code", code: py`
s = "hello WORLD"
print(s.upper())
print(s.lower())
print(s.capitalize())
print(s.title())
print(s)              # исходная строка не изменилась` },
            { t: "html", html: `
              <h3>Поиск и подсчёт</h3>
              <table>
                <tr><th>Метод</th><th>Что делает</th></tr>
                <tr><td><code>find(sub)</code></td><td>индекс <b>первого</b> вхождения; если нет — <code>-1</code> (ошибки не будет)</td></tr>
                <tr><td><code>rfind(sub)</code></td><td>индекс <b>последнего</b> вхождения или <code>-1</code></td></tr>
                <tr><td><code>index(sub)</code></td><td>как find, но если нет — ошибка <code>ValueError</code></td></tr>
                <tr><td><code>count(sub)</code></td><td>количество вхождений (без наложений)</td></tr>
              </table>` },
            { t: "code", code: py`
s = "banana"
print(s.find("na"), s.rfind("na"), s.find("x"))
print(s.count("a"), s.count("ana"))   # "ana" без наложения — 1 раз
t = "I like python. python is cool"
print(t.count("python"))` },
            { t: "html", html: `<h3>Замена и очистка</h3>
              <p><code>replace(old, new)</code> заменяет все вхождения, а третий аргумент ограничивает число замен. <code>strip()</code> удаляет пробелы и <code>\\n</code>, <code>\\t</code> по краям строки; <code>strip("#")</code> — указанные символы; <code>lstrip()</code> / <code>rstrip()</code> — только слева / справа.</p>` },
            { t: "code", code: py`
s = "мама мыла раму"
print(s.replace(" ", "_"))
print(s.replace("а", "*", 2))     # только первые 2 замены
print("###заголовок###".strip("#"))
print("[" + "   текст   ".strip() + "]")
print("[" + "   текст   ".lstrip() + "]")` },
            { t: "html", html: `<h3>split и join</h3>
              <p><code>split()</code> делит строку на <b>список</b> слов по пробелам (несколько пробелов подряд считаются одним). <code>split(",")</code> делит по указанному разделителю. <code>"разделитель".join(список)</code> — обратная операция: склеивает элементы списка строк.</p>` },
            { t: "code", code: py`
print("Я  изучаю   Python".split())
print("яблоко,груша,банан".split(","))
words = ["I", "love", "Python"]
print(" ".join(words))
print("-".join("abc"))       # строка — тоже последовательность
print(len("Сколько тут слов ?".split()))` },
            { t: "html", html: `<h3>Проверки (возвращают True / False)</h3>
              <table>
                <tr><th>Метод</th><th>True, если…</th></tr>
                <tr><td><code>isdigit()</code></td><td>все символы — цифры (точка и минус — не цифры!)</td></tr>
                <tr><td><code>isalpha()</code></td><td>все символы — буквы (пробел — не буква)</td></tr>
                <tr><td><code>isalnum()</code></td><td>только буквы и цифры</td></tr>
                <tr><td><code>isspace()</code></td><td>только пробельные символы</td></tr>
                <tr><td><code>islower()</code> / <code>isupper()</code></td><td>все буквы строчные / заглавные</td></tr>
                <tr><td><code>startswith(x)</code> / <code>endswith(x)</code></td><td>строка начинается / заканчивается на x</td></tr>
              </table>` },
            { t: "code", code: py`
print("2026".isdigit(), "-5".isdigit(), "12.5".isdigit())
print("Python".isalpha(), "Hello World".isalpha())
print("abc123".isalnum(), "   ".isspace())
print("Hello, Python".startswith("Hello"))
print("report.txt".endswith(".txt"))` },
          ],
        },
        {
          id: "l5",
          title: "Форматирование: f-строки и format()",
          blocks: [
            { t: "html", html: `<p>Форматирование позволяет вставлять значения переменных прямо в текст. Самый удобный способ — <b>f-строки</b>: перед кавычкой ставится <code>f</code>, а выражения пишутся в фигурных скобках.</p>` },
            { t: "code", code: py`
name = "Иван"
age = 15
print(f"Имя: {name}, возраст: {age}")
print(f"Через 2 года: {age + 2}")
print(f"{name.upper()} — {len(name)} буквы")` },
            { t: "html", html: `<h3>Метод format()</h3><p>Работает похоже: на место <code>{}</code> подставляются аргументы по порядку, по номеру или по имени.</p>` },
            { t: "code", code: py`
print("{} + {} = {}".format(2, 3, 5))
print("{1} и {0}".format("первый", "второй"))
print("{name} учится в {cls} классе".format(name="Алия", cls=11))` },
            { t: "html", html: `
              <h3>Коды форматирования</h3>
              <p>Синтаксис внутри скобок: <code>{значение:ширина.точностьтип}</code>. Например, <code>{x:8.2f}</code> — число с двумя знаками после точки, занимающее 8 позиций.</p>
              <table>
                <tr><th>Код</th><th>Что делает</th><th>Пример</th><th>Вывод</th></tr>
                <tr><td><code>d</code></td><td>целое число</td><td><code>"{:d}".format(15)</code></td><td>15</td></tr>
                <tr><td><code>.2f</code></td><td>вещественное, 2 знака</td><td><code>"{:.2f}".format(3.1416)</code></td><td>3.14</td></tr>
                <tr><td><code>e</code></td><td>экспоненциальная запись</td><td><code>"{:.2e}".format(1234)</code></td><td>1.23e+03</td></tr>
                <tr><td><code>x</code> / <code>X</code></td><td>шестнадцатеричная система</td><td><code>"{:X}".format(255)</code></td><td>FF</td></tr>
                <tr><td><code>b</code>, <code>o</code></td><td>двоичная, восьмеричная</td><td><code>"{:b}".format(5)</code></td><td>101</td></tr>
                <tr><td><code>&gt;</code>, <code>&lt;</code>, <code>^</code></td><td>выравнивание в поле</td><td><code>"{:&gt;5}".format(7)</code></td><td>␣␣␣␣7</td></tr>
                <tr><td><code>02d</code></td><td>дополнение нулями</td><td><code>"{:02d}".format(7)</code></td><td>07</td></tr>
              </table>` },
            { t: "code", code: py`
import math
print(f"π ≈ {math.pi:.2f}")
print(f"{255:X} {255:x} {255:b} {255:o}")
print(f"{1234:e}  {1234:.2e}")
h, m, s = 1, 5, 9
print(f"{h}:{m:02d}:{s:02d}")
print(f"[{7:>5}] [{7:<5}] [{7:^5}]")` },
            { t: "html", html: `<h3>Старый стиль: оператор %</h3><p>Устарел, но встречается в старом коде и задачах: <code>%d</code> — целое, <code>%f</code> — вещественное, <code>%s</code> — строка.</p>` },
            { t: "code", code: py`
name, score = "Дана", 92.456
print("%s набрала %.1f баллов" % (name, score))` },
            { t: "note", kind: "ent", title: "Связь с модулем 1", html: `<p>Задачу «Электронные часы» из модуля 1 с f-строками можно решить в одну строку: <code>print(f"{h}:{m:02d}:{s:02d}")</code>.</p>` },
          ],
        },
        {
          id: "l6",
          title: "Кодировки: ord() и chr()",
          blocks: [
            { t: "html", html: `
              <p>Компьютер хранит каждый символ как <b>число — код</b>. Первые 128 кодов — таблица <b>ASCII</b> (латиница, цифры, знаки препинания). <b>Unicode</b> расширяет её на все алфавиты мира: кириллицу, казахские буквы, эмодзи.</p>
              <ul><li><code>ord(c)</code> — код символа;</li><li><code>chr(n)</code> — символ по коду.</li></ul>
              <table>
                <tr><th>Символы</th><th>Коды</th></tr>
                <tr><td><code>'0'</code> … <code>'9'</code></td><td>48 … 57</td></tr>
                <tr><td><code>'A'</code> … <code>'Z'</code></td><td>65 … 90</td></tr>
                <tr><td><code>'a'</code> … <code>'z'</code></td><td>97 … 122</td></tr>
                <tr><td><code>'А'</code> … <code>'Я'</code> (без Ё)</td><td>1040 … 1071</td></tr>
                <tr><td><code>'а'</code> … <code>'я'</code> (без ё)</td><td>1072 … 1103</td></tr>
              </table>` },
            { t: "code", code: py`
print(ord("A"), ord("a"), ord("0"), ord("а"))
print(chr(65), chr(97), chr(1072))
print(ord("a") - ord("A"))    # разница между строчной и заглавной` },
            { t: "html", html: `<p>Именно по этим кодам строки сравниваются: <code>"Z" &lt; "a"</code> истинно, потому что 90 &lt; 97. Буквы латиницы идут по алфавиту, поэтому номер буквы в алфавите — <code>ord(c) - ord("a")</code>.</p>` },
            { t: "code", input: "abcxyz", code: py`
# Заменить каждую букву на следующую по алфавиту (z -> a)
s = input()
res = ""
for c in s:
    pos = ord(c) - ord("a")          # номер буквы 0..25
    res += chr((pos + 1) % 26 + ord("a"))
print(res)` },
            { t: "code", code: py`
# Вывести латинский алфавит через цикл по кодам
for code in range(ord("A"), ord("Z") + 1):
    print(chr(code), end="")` },
            { t: "note", kind: "ent", title: "Шифр Цезаря", html: `<p>Классическая задача: сдвинуть каждую букву на k позиций по кругу. Формула для строчных латинских: <code>chr((ord(c) - 97 + k) % 26 + 97)</code>. Остаток <code>% 26</code> «заворачивает» алфавит и правильно работает даже с отрицательным k.</p>` },
          ],
        },
      ],

      tasks: [
        {
          id: "t1",
          title: "Анализ строки",
          level: "Лёгкая",
          statement: `<p>Дана строка <code>s</code> длиной не меньше 3 символов. Выведите в отдельных строках:</p>
            <ol><li>длину строки;</li><li>первые 3 символа;</li><li>последние 3 символа;</li><li>строку в обратном порядке;</li><li>каждый второй символ, начиная с первого.</li></ol>`,
          starter: py`
s = input()
`,
          hint: `<p>Всё решается срезами: <code>s[:3]</code>, <code>s[-3:]</code>, <code>s[::-1]</code>, <code>s[::2]</code>.</p>`,
          solution: py`
s = input()
print(len(s))
print(s[:3])
print(s[-3:])
print(s[::-1])
print(s[::2])`,
          tests: [
            { input: "Python", output: "6\nPyt\nhon\nnohtyP\nPto" },
            { input: "abc", output: "3\nabc\nabc\ncba\nac" },
            { input: "информатика", output: "11\nинф\nика\nакитамрофни\nифраиа", hidden: true },
            { input: "hello world", output: "11\nhel\nrld\ndlrow olleh\nhlowrd", hidden: true },
          ],
        },
        {
          id: "t2",
          title: "Статистика слов",
          level: "Средняя",
          statement: `<p>Дана строка — предложение из слов, разделённых одним или несколькими пробелами (в начале и конце тоже могут быть пробелы). Знаков препинания нет.</p>
            <p>Выведите в отдельных строках:</p>
            <ol><li>количество слов;</li><li>самое длинное слово (если таких несколько — первое из них);</li><li>слова в обратном порядке через один пробел.</li></ol>`,
          starter: py`
s = input()
`,
          hint: `<p><code>words = s.split()</code> сама уберёт лишние пробелы. Самое длинное слово ищите как максимум в модуле 3: обновляйте ответ, только если длина <b>строго больше</b>. Обратный порядок — срез списка <code>words[::-1]</code> и <code>" ".join(...)</code>.</p>`,
          solution: py`
s = input()
words = s.split()
print(len(words))
longest = words[0]
for w in words:
    if len(w) > len(longest):
        longest = w
print(longest)
print(" ".join(words[::-1]))`,
          tests: [
            { input: "мама мыла раму", output: "3\nмама\nраму мыла мама" },
            { input: "  Python   is   fun  ", output: "3\nPython\nfun is Python" },
            { input: "a", output: "1\na\na", hidden: true },
            { input: "Я изучаю программирование на Python", output: "5\nпрограммирование\nPython на программирование изучаю Я", hidden: true },
            { input: "ab cd ef", output: "3\nab\nef cd ab", hidden: true },
          ],
        },
        {
          id: "t3",
          title: "Шифр Цезаря",
          level: "Сложная",
          statement: `<p>В первой строке дано целое число <code>k</code> (может быть отрицательным или больше 26), во второй — текст.</p>
            <p>Зашифруйте текст шифром Цезаря: каждую <b>латинскую</b> букву сдвиньте на <code>k</code> позиций вперёд по алфавиту по кругу (после <code>z</code> идёт <code>a</code>), сохраняя регистр. Все остальные символы (пробелы, цифры, знаки, кириллица) оставьте без изменений.</p>`,
          starter: py`
k = int(input())
s = input()
`,
          hint: `<p>Проверка на строчную латинскую букву: <code>"a" &lt;= c &lt;= "z"</code>. Новая буква: <code>chr((ord(c) - ord("a") + k) % 26 + ord("a"))</code>. Для заглавных — то же самое с <code>"A"</code>.</p>`,
          solution: py`
k = int(input())
s = input()
res = ""
for c in s:
    if "a" <= c <= "z":
        res += chr((ord(c) - ord("a") + k) % 26 + ord("a"))
    elif "A" <= c <= "Z":
        res += chr((ord(c) - ord("A") + k) % 26 + ord("A"))
    else:
        res += c
print(res)`,
          tests: [
            { input: "3\nHello, World!", output: "Khoor, Zruog!" },
            { input: "1\nxyz XYZ", output: "yza YZA" },
            { input: "-1\nabc", output: "zab", hidden: true },
            { input: "29\nabc", output: "def", hidden: true },
            { input: "0\nПривет, Python 3!", output: "Привет, Python 3!", hidden: true },
            { input: "13\nПривет, abc", output: "Привет, nop", hidden: true },
          ],
        },
      ],

      quiz: [
        { type: "single", q: "Что выведет программа?", code: py`
s = "Python"
print(s[1:4])`,
          options: ["Pyt", "yth", "ytho", "yt"], answer: 1,
          explain: "Срез берёт символы с индексами 1, 2, 3 (индекс 4 не включается): y, t, h." },
        { type: "single", q: "Что выведет программа?", code: py`print("abc" * 2 + "d")`,
          options: ["abcd abcd", "abcabcd", "abcdabcd", "Ошибка"], answer: 1,
          explain: "Сначала умножение: \"abc\" * 2 = \"abcabc\", затем склейка с \"d\"." },
        { type: "single", q: "Что выведет программа?", code: py`
s = "banana"
print(s.find("na"), s.rfind("na"), s.find("x"))`,
          options: ["2 4 -1", "2 4 0", "3 5 -1", "Ошибка ValueError"], answer: 0,
          explain: "Первое вхождение \"na\" — с индекса 2, последнее — с индекса 4. Если подстроки нет, <code>find</code> возвращает −1 и не вызывает ошибку (в отличие от <code>index</code>)." },
        { type: "single", q: "Что произойдёт при выполнении программы?", code: py`
s = "Python"
s[0] = "J"
print(s)`,
          options: ["Выведется Jython", "Ошибка TypeError", "Ошибка IndexError", "Выведется Python"], answer: 1,
          explain: "Строки неизменяемы: присвоить значение отдельному символу нельзя. Правильно: <code>s = \"J\" + s[1:]</code>." },
        { type: "multiple", q: "Какие выражения дают строку \"nohtyP\", если s = \"Python\"?", codeOptions: true,
          options: ["s[::-1]", "s[-1::-1]", "s[5::-1]", "s[-1:0:-1]", "\"\".join(reversed(s))", "s[::1]"], answer: [0, 1, 2, 4],
          explain: "С шагом −1 срез идёт от конца к началу. <code>s[-1:0:-1]</code> не включает индекс 0 и даёт \"nohty\" без P. <code>s[::1]</code> — исходная строка." },
        { type: "multiple", q: "Какие выражения возвращают True?", codeOptions: true,
          options: ["\"123\".isdigit()", "\"12.5\".isdigit()", "\"abc1\".isalnum()", "\"Hello World\".isalpha()", "\"report.txt\".endswith(\".txt\")"], answer: [0, 2, 4],
          explain: "Точка — не цифра, поэтому \"12.5\".isdigit() — False. Пробел — не буква, поэтому \"Hello World\".isalpha() — False. <code>isalnum</code> разрешает буквы и цифры." },
        { type: "matching", q: "Пусть s = \"hello world\". Сопоставьте выражение и результат.",
          pairs: [
            { left: "s.upper()", right: "HELLO WORLD" },
            { left: "s.capitalize()", right: "Hello world" },
            { left: "s.title()", right: "Hello World" },
            { left: "s.replace(\"o\", \"0\")", right: "hell0 w0rld" },
            { left: "s.count(\"l\")", right: "3" },
          ], distractors: ["hELLO WORLD", "2"],
          explain: "<code>capitalize</code> делает заглавной только первую букву строки, <code>title</code> — первую букву каждого слова. <code>replace</code> заменяет все вхождения. Буква l встречается 3 раза: he<b>ll</b>o wor<b>l</b>d." },
        { type: "matching", q: "Сопоставьте выражение и его значение.",
          pairs: [
            { left: "ord(\"A\")", right: "65" },
            { left: "ord(\"a\")", right: "97" },
            { left: "chr(66)", right: "B" },
            { left: "ord(\"0\")", right: "48" },
            { left: "chr(100)", right: "d" },
          ], distractors: ["66", "0"],
          explain: "Коды ASCII: цифры начинаются с 48, заглавные латинские — с 65, строчные — с 97. chr(66) — следующая после A буква, chr(100) = chr(97 + 3) — четвёртая буква d." },
        { type: "fill", q: "Что выведет команда?", code: py`print(len("Hello, World!"))`, answer: ["13"],
          explain: "Считаются все символы, включая запятую, пробел и восклицательный знак: 5 + 1 + 1 + 5 + 1 = 13." },
        { type: "fill", q: "Что выведет программа?", code: py`
s = "a,b,,c"
print(len(s.split(",")))`, answer: ["4"],
          explain: "<code>split(\",\")</code> даёт [\"a\", \"b\", \"\", \"c\"]: между двумя запятыми подряд получается пустая строка. Итого 4 элемента." },
        { type: "fill", q: "Что выведет программа?", code: py`
x = 3.14159
print(f"{x:.2f}")`, answer: ["3.14"],
          explain: "<code>.2f</code> — вещественное число с двумя знаками после точки (с округлением)." },
        { type: "fill", q: "Впишите имя метода, чтобы программа вывела I love Python.", code: py`
words = ["I", "love", "Python"]
print(" ".___(words))`, answer: ["join"],
          explain: "<code>\"разделитель\".join(список)</code> склеивает элементы списка, вставляя между ними разделитель." },
        { type: "single", q: "Что выведет программа?", code: py`print("-".join("abc"))`,
          options: ["a-b-c", "-a-b-c-", "abc-", "Ошибка"], answer: 0,
          explain: "Строка — последовательность символов, поэтому <code>join</code> склеивает символы a, b, c, вставляя разделитель только <b>между</b> ними." },
        { type: "single", q: "Что выведет программа?", code: py`print("{:X}".format(255))`,
          options: ["255", "ff", "FF", "0xFF"], answer: 2,
          explain: "Код <code>X</code> выводит число в шестнадцатеричной системе заглавными буквами: 255 = 15·16 + 15 = FF." },
      ],
    },
    /* ====================================================
       МОДУЛЬ 5. Списки, кортежи и матрицы
       ==================================================== */
    {
      id: "m5",
      icon: "📊",
      title: "Списки, кортежи и матрицы",
      summary: "Одномерные массивы, методы списков, генераторы, кортежи, сортировки, двумерные массивы: диагонали и транспонирование.",
      lessons: [
        {
          id: "l1",
          title: "Список: индексы, срезы, изменение",
          blocks: [
            { t: "html", html: `
              <p><b>Список</b> (одномерный массив) — упорядоченный набор элементов под одним именем. Создаётся квадратными скобками <code>[]</code> или функцией <code>list()</code>.</p>
              <ul><li>у элементов есть индексы (с 0, отрицательные — с конца);</li>
              <li>список можно <b>изменять</b> (в отличие от строки);</li>
              <li>в одном списке могут быть элементы разных типов.</li></ul>` },
            { t: "code", code: py`
numbers = [10, 20, 30, 40]
mixed = [1, "два", 3.0, True]
empty = []
print(numbers, mixed, empty)
print(numbers[0], numbers[2], numbers[-1])
print(len(numbers))
print(list("abc"))` },
            { t: "note", kind: "warn", title: "IndexError", html: `<p>В списке из 4 элементов последний индекс — 3. Обращение <code>numbers[4]</code> вызовет <code>IndexError: list index out of range</code>.</p>` },
            { t: "html", html: `<h3>Срезы и изменение</h3><p>Срезы работают так же, как у строк: <code>a[start:stop:step]</code>, правая граница не включается, создаётся <b>новый</b> список. А вот элемент списка можно заменить по индексу — и даже целый срез сразу.</p>` },
            { t: "code", code: py`
a = [1, 2, 3, 4, 5, 6]
print(a[1:4], a[:2], a[-2:], a[::-1])
a[0] = 100
print(a)
a[1:3] = [20, 30]
print(a)
print(3 in a, 30 in a)` },
            { t: "html", html: `<h3>Перебор</h3><p>Если индекс не нужен — перебираем элементы напрямую. Если нужно менять элементы или работать с соседними — перебираем индексы через <code>range(len(a))</code>. Пары «индекс, значение» даёт <code>enumerate</code>.</p>` },
            { t: "code", code: py`
a = [3, 8, 1]
for x in a:
    print(x, end=" ")
print()
for i in range(len(a)):
    a[i] = a[i] * 2       # меняем элементы через индекс
print(a)
for i, x in enumerate(a):
    print(f"a[{i}] = {x}")` },
          ],
        },
        {
          id: "l2",
          title: "Заполнение и вывод массива",
          blocks: [
            { t: "html", html: `<h3>Способы заполнения</h3><p><b>1. Перечислением:</b> <code>a = [5, 2, 9]</code>.<br><b>2. Ввод по одному числу в строке</b> — заранее создаём массив нулей нужного размера:</p>` },
            { t: "code", input: "4\n7\n-2\n10\n3", code: py`
n = int(input())
b = [0] * n          # [0, 0, 0, 0]
for i in range(n):
    b[i] = int(input())
print(b)` },
            { t: "html", html: `<p><b>3. Ввод в одну строку через пробел</b> — самый частый формат в задачах:</p>` },
            { t: "code", input: "5 -3 12 0 7", code: py`
a = list(map(int, input().split()))
print(a, len(a))` },
            { t: "html", html: `<p><b>4. По формуле</b> (элемент — функция от индекса) и <b>5. случайными числами</b>: <code>randint(a, b)</code> из модуля <code>random</code> даёт случайное целое из отрезка [a; b] — оба конца включаются.</p>` },
            { t: "code", code: py`
from random import randint
n = 5
c = [0] * n
for i in range(n):
    c[i] = i ** 2
print(c)
d = [randint(-5, 5) for i in range(n)]   # при каждом запуске разные
print(d)` },
            { t: "html", html: `<h3>Способы вывода</h3>` },
            { t: "code", code: py`
a = [4, 8, 15, 16]
print(a)                 # 1) целиком, со скобками
for x in a:              # 2) в строку через цикл
    print(x, end=" ")
print()
print(*a)                # 2) лучший способ: распаковка через *
print(*a, sep=", ")
for x in a:              # 3) в столбик
    print(x)` },
            { t: "note", kind: "ent", title: "Запомните", html: `<p><code>print(*a)</code> выводит элементы через пробел без скобок и запятых — именно такой формат обычно требуется в ответе задачи.</p>` },
          ],
        },
        {
          id: "l3",
          title: "Методы списков и копирование",
          blocks: [
            { t: "html", html: `
              <table>
                <tr><th>Метод</th><th>Что делает</th></tr>
                <tr><td><code>a.append(x)</code></td><td>добавляет x в конец</td></tr>
                <tr><td><code>a.insert(i, x)</code></td><td>вставляет x на позицию i</td></tr>
                <tr><td><code>a.remove(x)</code></td><td>удаляет <b>первое</b> вхождение значения x (если нет — ошибка ValueError)</td></tr>
                <tr><td><code>a.pop(i)</code></td><td>удаляет элемент по <b>индексу</b> и возвращает его; без аргумента — последний</td></tr>
                <tr><td><code>del a[i]</code></td><td>удаляет элемент (или срез) по индексу</td></tr>
                <tr><td><code>a.index(x)</code>, <code>a.count(x)</code></td><td>индекс первого вхождения, количество вхождений</td></tr>
                <tr><td><code>a.sort()</code>, <code>a.reverse()</code></td><td>сортирует / разворачивает <b>сам список</b>, возвращает None</td></tr>
                <tr><td><code>sorted(a)</code></td><td>возвращает <b>новый</b> отсортированный список</td></tr>
                <tr><td><code>sum(a)</code>, <code>min(a)</code>, <code>max(a)</code></td><td>сумма, минимум, максимум</td></tr>
              </table>` },
            { t: "code", code: py`
a = [3, 1, 4]
a.append(1)
a.insert(0, 9)
print(a)
a.remove(1)            # удалит первую единицу
print(a)
x = a.pop()            # удалит и вернёт последний
print(x, a)
del a[0]
print(a)
if 7 in a:             # безопасное удаление
    a.remove(7)
print(a.index(4), a.count(3))` },
            { t: "code", code: py`
a = [5, 2, 9, 1]
b = sorted(a)
print(a, b)            # a не изменился
a.sort(reverse=True)   # по убыванию
print(a)
print(sum(a), min(a), max(a), sum(a) / len(a))` },
            { t: "html", html: `<h3>Ловушка копирования</h3><p>Список — это «коробка», а переменная — лишь её имя. Запись <code>b = a</code> не создаёт копию: появляется второе имя у той же коробки. Изменения через <code>b</code> видны и в <code>a</code>. Настоящую копию дают <code>a.copy()</code>, <code>a[:]</code> или <code>list(a)</code>.</p>` },
            { t: "code", code: py`
a = [1, 2, 3]
b = a
b.append(4)
print(a)               # [1, 2, 3, 4] — изменился и a!
c = a.copy()
c.append(5)
print(a, c)` },
          ],
        },
        {
          id: "l4",
          title: "Генераторы списков и кортежи",
          blocks: [
            { t: "html", html: `<p><b>Генератор списка</b> (list comprehension) — короткая запись цикла, который строит список:<br><code>[выражение for переменная in последовательность if условие]</code></p>` },
            { t: "code", code: py`
squares = [i * i for i in range(1, 6)]
print(squares)
evens = [x for x in range(20) if x % 2 == 0]
print(evens)
words = ["кот", "собака", "ёж"]
print([len(w) for w in words])
a = [3, -1, 4, -5]
print([abs(x) for x in a], [x for x in a if x > 0])` },
            { t: "html", html: `<p>Это то же самое, что цикл с <code>append</code>:</p>` },
            { t: "code", code: py`
squares = []
for i in range(1, 6):
    squares.append(i * i)
print(squares)` },
            { t: "html", html: `<h3>Кортежи (tuple)</h3><p><b>Кортеж</b> — «замороженный» список: записывается в круглых скобках и <b>не может быть изменён</b> после создания. Индексы, срезы, <code>len</code>, <code>in</code>, <code>count</code>, <code>index</code> работают; <code>append</code>, <code>remove</code> и присваивание по индексу — нет. Кортежи используют для неизменных данных (координаты, даты) и они работают немного быстрее списков.</p>` },
            { t: "code", code: py`
point = (3, 5)
print(point[0], len(point))
x, y = point               # распаковка
print(x, y)
one = (7,)                 # кортеж из одного элемента — нужна запятая
print(type(one), type((7)))
t = tuple([1, 2, 3])
print(t, list(t))` },
            { t: "code", code: py`
t = (1, 2, 3)
t[0] = 10                  # ошибка: кортеж неизменяем` },
          ],
        },
        {
          id: "l5",
          title: "Алгоритмы сортировки и поиска",
          blocks: [
            { t: "html", html: `<p><b>Сортировка</b> — упорядочивание элементов по признаку. В Python есть готовые <code>sort()</code> и <code>sorted()</code>, но на экзамене часто спрашивают, как устроены базовые алгоритмы.</p>
              <h3>Пузырьковая сортировка (Bubble Sort)</h3>
              <p>Сравниваем <b>соседние</b> элементы и меняем местами, если стоят неправильно. После каждого прохода самый большой элемент «всплывает» в конец, поэтому каждый следующий проход на один шаг короче.</p>` },
            { t: "code", code: py`
a = [5, 1, 4, 2, 8]
n = len(a)
for i in range(n - 1):
    for j in range(n - 1 - i):
        if a[j] > a[j + 1]:
            a[j], a[j + 1] = a[j + 1], a[j]
    print("проход", i + 1, ":", a)` },
            { t: "html", html: `<h3>Сортировка выбором (Selection Sort)</h3><p>На каждом шаге ищем <b>минимальный</b> элемент в неотсортированной части и ставим его в начало этой части.</p>` },
            { t: "code", code: py`
a = [64, 25, 12, 22, 11]
n = len(a)
for i in range(n - 1):
    k = i                        # индекс минимума
    for j in range(i + 1, n):
        if a[j] < a[k]:
            k = j
    a[i], a[k] = a[k], a[i]
print(a)` },
            { t: "html", html: `<h3>Сортировка вставками (Insertion Sort)</h3><p>Берём элементы по одному и вставляем на нужное место в уже отсортированной левой части — как карты в руке. Большие элементы сдвигаются вправо, освобождая место.</p>` },
            { t: "code", code: py`
a = [12, 11, 13, 5, 6]
for i in range(1, len(a)):
    x = a[i]
    j = i - 1
    while j >= 0 and a[j] > x:
        a[j + 1] = a[j]          # сдвиг вправо
        j -= 1
    a[j + 1] = x
print(a)` },
            { t: "html", html: `<h3>Улучшения пузырька: ранний выход и шейкерная сортировка</h3>
              <p>Если за проход не было ни одного обмена, массив уже отсортирован, и можно остановиться — на почти отсортированных данных это сильно ускоряет пузырёк.</p>
              <p><b>Шейкерная сортировка</b> (сортировка перемешиванием) ходит попеременно слева направо (максимум «всплывает» в конец) и справа налево (минимум «тонет» в начало), сужая границы <code>left</code> и <code>right</code>. Она быстрее перемещает маленькие элементы, оказавшиеся в конце массива, но в среднем и худшем случае это всё равно O(n²) — в общем случае она не быстрее сортировки вставками.</p>` },
            { t: "code", code: py`
m = [3, 4, 1, 6, 7, 4, 8, 1, 9, 2]
n = len(m)
for run in range(n - 1):
    swapped = 0
    for i in range(n - 1 - run):      # конец уже отсортирован
        if m[i] > m[i + 1]:
            m[i], m[i + 1] = m[i + 1], m[i]
            swapped += 1
    print(f"проход {run + 1}: {m}, обменов {swapped}")
    if swapped == 0:                   # ранний выход
        break` },
            { t: "code", code: py`
m = [4, 9, 2, 7, 1, 6]
left, right = 0, len(m) - 1
while left < right:
    for i in range(left, right):        # слева направо: максимум в конец
        if m[i] > m[i + 1]:
            m[i], m[i + 1] = m[i + 1], m[i]
    right -= 1
    for i in range(right, left, -1):    # справа налево: минимум в начало
        if m[i - 1] > m[i]:
            m[i - 1], m[i] = m[i], m[i - 1]
    left += 1
    print(m)` },
            { t: "note", kind: "warn", title: "Частые недочёты в коде сортировок", html: `<p>• Во внутреннем цикле пузырька <code>range(n - 1)</code> вместо <code>range(n - 1 - run)</code> — результат верный, но каждый проход зря сравнивает уже отсортированный «хвост».<br>
              • В сортировке выбором проверка <code>if min_el == i</code> должна стоять <b>после</b> внутреннего цикла поиска минимума, а не внутри него; внешний цикл достаточно вести до <code>n - 1</code>.<br>
              • Не используйте после цикла его переменную (например, <code>j</code> во внешнем <code>print</code>): если внутренний цикл не выполнился ни разу, она останется от прошлой итерации или вовсе не будет определена.</p>` },
            { t: "html", html: `
              <table>
                <tr><th>Алгоритм</th><th>Идея</th><th>Сложность</th></tr>
                <tr><td>Пузырьковая</td><td>сравнение соседей и обмен</td><td>O(n²)</td></tr>
                <tr><td>Выбором</td><td>поиск минимума и перенос</td><td>O(n²)</td></tr>
                <tr><td>Вставками</td><td>вставка в отсортированную часть</td><td>O(n²), быстро на почти отсортированных</td></tr>
                <tr><td>Быстрая (Quick Sort)</td><td>опорный элемент, «разделяй и властвуй», рекурсия</td><td>O(n log n) в среднем</td></tr>
                <tr><td><code>sorted()</code> / <code>sort()</code></td><td>встроенный алгоритм Timsort</td><td>O(n log n)</td></tr>
              </table>
              <p>O(n²) означает: при увеличении массива в 10 раз время растёт примерно в 100 раз. Быструю сортировку разберём в модуле 6 вместе с рекурсией.</p>
              <h3>Поиск</h3><p><b>Линейный поиск</b> — перебор всех элементов подряд (O(n)). <b>Бинарный поиск</b> работает только в <b>отсортированном</b> массиве: каждый раз сравниваем с серединой и отбрасываем половину (O(log n)).</p>` },
            { t: "code", code: py`
a = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
x = 23
left, right = 0, len(a) - 1
steps = 0
pos = -1
while left <= right:
    steps += 1
    mid = (left + right) // 2
    if a[mid] == x:
        pos = mid
        break
    elif a[mid] < x:
        left = mid + 1
    else:
        right = mid - 1
print("индекс:", pos, "шагов:", steps)` },
          ],
        },
        {
          id: "l6",
          title: "Двумерные массивы (матрицы)",
          blocks: [
            { t: "html", html: `<p><b>Двумерный массив</b> (матрица) — это список списков: каждый вложенный список — строка таблицы. Элемент определяется двумя индексами: <code>a[i][j]</code> — строка i, столбец j (оба с 0).</p>` },
            { t: "code", code: py`
a = [[1, 2, 3],
     [4, 5, 6]]
print(a[0])          # первая строка
print(a[1][2])       # строка 1, столбец 2
print(a[-1][-1])     # последний элемент
print(len(a), len(a[0]))   # строк, столбцов` },
            { t: "html", html: `<h3>Ввод матрицы</h3><p>Типичный формат: в первой строке размеры n и m, затем n строк по m чисел.</p>` },
            { t: "code", input: "3 4\n1 2 3 4\n5 6 7 8\n9 10 11 12", code: py`
n, m = map(int, input().split())
a = [list(map(int, input().split())) for i in range(n)]
for row in a:             # вывод таблицей
    print(*row)` },
            { t: "html", html: `<h3>Создание матрицы нулей</h3>` },
            { t: "code", code: py`
n, m = 3, 4
a = [[0] * m for i in range(n)]    # правильно
x = 1
for i in range(n):
    for j in range(m):
        a[i][j] = x
        x += 1
for row in a:
    for v in row:
        print(f"{v:4}", end="")    # выравнивание по ширине 4
    print()` },
            { t: "note", kind: "warn", title: "Ловушка", html: `<p>Запись <code>[[0] * m] * n</code> создаёт n ссылок на <b>одну и ту же</b> строку: изменение одного элемента меняет весь столбец. Всегда создавайте матрицу через генератор <code>[[0] * m for i in range(n)]</code>.</p>` },
            { t: "code", code: py`
bad = [[0] * 3] * 2
bad[0][0] = 1
print(bad)` },
            { t: "html", html: `<h3>Перебор и обработка</h3><p>Матрицу обходят вложенными циклами: внешний фиксирует строку, внутренний проходит по её элементам. К каждой строке можно применять <code>sum</code>, <code>max</code>, <code>min</code>.</p>` },
            { t: "code", code: py`
a = [[3, -1, 4],
     [1, 5, -9],
     [2, 6, 5]]
total = 0
neg = 0
for i in range(len(a)):
    for j in range(len(a[i])):
        total += a[i][j]
        if a[i][j] < 0:
            neg += 1
print("сумма:", total, "отрицательных:", neg)
print("суммы строк:", [sum(row) for row in a])
print("максимумы строк:", [max(row) for row in a])
cols = [sum(a[i][j] for i in range(3)) for j in range(3)]
print("суммы столбцов:", cols)` },
          ],
        },
        {
          id: "l7",
          title: "Диагонали, транспонирование, повороты",
          blocks: [
            { t: "html", html: `<p>В <b>квадратной</b> матрице n×n выделяют две диагонали:</p>
              <table>
                <tr><th>Часть матрицы</th><th>Условие на индексы</th></tr>
                <tr><td>главная диагональ (↘)</td><td><code>i == j</code></td></tr>
                <tr><td>побочная диагональ (↙)</td><td><code>i + j == n - 1</code></td></tr>
                <tr><td>выше главной</td><td><code>j &gt; i</code></td></tr>
                <tr><td>ниже главной</td><td><code>i &gt; j</code></td></tr>
                <tr><td>выше побочной</td><td><code>i + j &lt; n - 1</code></td></tr>
              </table>
              <p>Для перебора самой диагонали не нужен двойной цикл: элементы главной — <code>a[i][i]</code>, побочной — <code>a[i][n - 1 - i]</code>.</p>` },
            { t: "code", code: py`
a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
n = len(a)
main = [a[i][i] for i in range(n)]
side = [a[i][n - 1 - i] for i in range(n)]
print("главная:", main, "сумма", sum(main))
print("побочная:", side)
above = 0
for i in range(n):
    for j in range(n):
        if j > i:
            above += a[i][j]
print("сумма выше главной:", above)` },
            { t: "html", html: `<h3>Транспонирование</h3><p>Строки становятся столбцами: <code>t[j][i] = a[i][j]</code>. Матрица n×m превращается в m×n.</p>` },
            { t: "code", code: py`
a = [[1, 2, 3],
     [4, 5, 6]]
n, m = len(a), len(a[0])
t = [[0] * n for j in range(m)]
for i in range(n):
    for j in range(m):
        t[j][i] = a[i][j]
for row in t:
    print(*row)
print([list(col) for col in zip(*a)])    # короткий способ` },
            { t: "html", html: `<h3>Отражение и поворот</h3>` },
            { t: "code", code: py`
a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
n = len(a)
print("отражение по горизонтали:", a[::-1])
r = [[0] * n for i in range(n)]
for i in range(n):
    for j in range(n):
        r[j][n - 1 - i] = a[i][j]       # поворот на 90° вправо
for row in r:
    print(*row)` },
            { t: "html", html: `<h3>Заполнение «змейкой»</h3>` },
            { t: "code", input: "4 5", code: py`
n, m = map(int, input().split())
a = [[0] * m for i in range(n)]
for i in range(n):
    for j in range(m):
        if i % 2 == 0:
            a[i][j] = i * m + j + 1        # слева направо
        else:
            a[i][j] = i * m + m - j        # справа налево
for row in a:
    print(*[f"{v:3}" for v in row])` },
          ],
        },
        {
          id: "l8",
          title: "Сложность алгоритмов и метод двух указателей",
          blocks: [
            { t: "html", html: `
              <p>Один и тот же результат можно получить разными алгоритмами, и они работают с очень разной скоростью. <b>Асимптотическая сложность</b> показывает, как растёт число операций при росте размера данных n. Константы и младшие слагаемые отбрасывают: 3n² + 5n + 7 → O(n²).</p>
              <table>
                <tr><th>Класс</th><th>Название</th><th>Пример</th><th>n = 1 000 000</th></tr>
                <tr><td>O(1)</td><td>константная</td><td>обращение <code>a[i]</code>, <code>len(a)</code>, <code>x in set</code></td><td>1 шаг</td></tr>
                <tr><td>O(log n)</td><td>логарифмическая</td><td>бинарный поиск</td><td>≈ 20 шагов</td></tr>
                <tr><td>O(n)</td><td>линейная</td><td>линейный поиск, <code>sum</code>, <code>max</code>, <code>x in list</code></td><td>10⁶</td></tr>
                <tr><td>O(n log n)</td><td>линейно-логарифмическая</td><td><code>sorted()</code>, сортировка слиянием</td><td>≈ 2·10⁷</td></tr>
                <tr><td>O(n²)</td><td>квадратичная</td><td>пузырёк, вложенные циклы по всем парам</td><td>10¹² — слишком долго</td></tr>
              </table>
              <p><b>O</b> — оценка сверху (хуже не будет), <b>Ω</b> — оценка снизу (быстрее не будет), <b>Θ</b> — точная оценка, когда верхняя и нижняя совпадают. Например, линейный поиск: O(n) в худшем случае и Ω(1) в лучшем (элемент первый).</p>` },
            { t: "code", code: py`
def linear_steps(a, x):
    steps = 0
    for v in a:
        steps += 1
        if v == x:
            break
    return steps

def binary_steps(a, x):
    lo, hi, steps = 0, len(a) - 1, 0
    while lo <= hi:
        steps += 1
        mid = (lo + hi) // 2
        if a[mid] == x:
            break
        elif a[mid] < x:
            lo = mid + 1
        else:
            hi = mid - 1
    return steps

for n in [10, 1000, 1000000]:
    a = list(range(n))
    print(f"n = {n}: линейный — {linear_steps(a, n - 1)} шагов, бинарный — {binary_steps(a, n - 1)}")` },
            { t: "html", html: `<h3>Метод двух указателей</h3><p>Два индекса движутся по массиву навстречу друг другу (или в одном направлении), и задача решается за один проход — O(n) вместо O(n²) при переборе всех пар. Пример: найти в <b>отсортированном</b> массиве два числа с суммой S. Если сумма мала — двигаем левый указатель вправо, если велика — правый влево.</p>` },
            { t: "code", code: py`
a = [1, 3, 4, 6, 8, 11]
S = 10
i, j = 0, len(a) - 1
while i < j:
    t = a[i] + a[j]
    print(f"a[{i}] + a[{j}] = {t}")
    if t == S:
        print("Найдено:", a[i], a[j])
        break
    elif t < S:
        i += 1
    else:
        j -= 1
else:
    print("Пары нет")` },
            { t: "html", html: `<h3>Слияние двух отсортированных списков</h3><p>Ещё одно применение двух указателей — слить два отсортированных списка в один за O(n + m). На этом приёме основана сортировка слиянием (модуль 6).</p>` },
            { t: "code", code: py`
a = [1, 4, 7, 10]
b = [2, 3, 8]
res = []
i = j = 0
while i < len(a) and j < len(b):
    if a[i] <= b[j]:
        res.append(a[i])
        i += 1
    else:
        res.append(b[j])
        j += 1
res += a[i:] + b[j:]       # дописываем остаток
print(res)` },
          ],
        },
      ],

      tasks: [
        {
          id: "t1",
          title: "Обработка массива",
          level: "Лёгкая",
          statement: `<p>В первой строке дано число <code>n</code>, во второй — <code>n</code> целых чисел через пробел.</p>
            <p>Выведите в отдельных строках:</p>
            <ol><li>сумму элементов;</li><li>минимум и максимум через пробел;</li><li>количество элементов, которые <b>строго больше</b> среднего арифметического;</li><li>элементы в обратном порядке через пробел.</li></ol>`,
          starter: py`
n = int(input())
a = list(map(int, input().split()))
`,
          hint: `<p>Используйте <code>sum</code>, <code>min</code>, <code>max</code>. Среднее — <code>sum(a) / n</code>. Обратный порядок с выводом без скобок: <code>print(*a[::-1])</code>.</p>`,
          solution: py`
n = int(input())
a = list(map(int, input().split()))
s = sum(a)
print(s)
print(min(a), max(a))
avg = s / n
k = 0
for x in a:
    if x > avg:
        k += 1
print(k)
print(*a[::-1])`,
          tests: [
            { input: "5\n3 -1 4 1 5", output: "12\n-1 5\n3\n5 1 4 -1 3" },
            { input: "1\n7", output: "7\n7 7\n0\n7" },
            { input: "4\n-5 -5 -5 -5", output: "-20\n-5 -5\n0\n-5 -5 -5 -5", hidden: true },
            { input: "6\n10 20 30 40 50 60", output: "210\n10 60\n3\n60 50 40 30 20 10", hidden: true },
          ],
        },
        {
          id: "t2",
          title: "Пузырьковая сортировка",
          level: "Средняя",
          statement: `<p>В первой строке дано число <code>n</code>, во второй — <code>n</code> целых чисел.</p>
            <p>Отсортируйте массив по возрастанию <b>пузырьковой сортировкой</b> (без <code>sort</code> и <code>sorted</code>). В первой строке выведите отсортированный массив через пробел, во второй — сколько <b>обменов</b> соседних элементов было сделано.</p>`,
          starter: py`
n = int(input())
a = list(map(int, input().split()))
swaps = 0
`,
          hint: `<p>Возьмите код пузырьковой сортировки из урока 5 и увеличивайте счётчик <code>swaps</code> при каждом обмене. Меняйте элементы только при строгом неравенстве <code>a[j] &gt; a[j + 1]</code>, иначе равные элементы будут переставляться лишний раз.</p>`,
          solution: py`
n = int(input())
a = list(map(int, input().split()))
swaps = 0
for i in range(n - 1):
    for j in range(n - 1 - i):
        if a[j] > a[j + 1]:
            a[j], a[j + 1] = a[j + 1], a[j]
            swaps += 1
print(*a)
print(swaps)`,
          tests: [
            { input: "5\n5 1 4 2 8", output: "1 2 4 5 8\n4" },
            { input: "3\n1 2 3", output: "1 2 3\n0" },
            { input: "4\n4 3 2 1", output: "1 2 3 4\n6", hidden: true },
            { input: "6\n3 3 1 2 3 0", output: "0 1 2 3 3 3\n9", hidden: true },
            { input: "1\n42", output: "42\n0", hidden: true },
          ],
        },
        {
          id: "t3",
          title: "Диагонали и транспонирование",
          level: "Сложная",
          statement: `<p>В первой строке дано число <code>n</code>, далее — квадратная матрица <code>n × n</code> (n строк по n целых чисел).</p>
            <p>Выведите:</p>
            <ol><li>в первой строке — сумму элементов главной диагонали;</li><li>во второй — произведение элементов побочной диагонали;</li><li>затем транспонированную матрицу: n строк, элементы через пробел.</li></ol>`,
          starter: py`
n = int(input())
a = [list(map(int, input().split())) for i in range(n)]
`,
          hint: `<p>Главная: <code>a[i][i]</code>; побочная: <code>a[i][n - 1 - i]</code>; произведение начинается с 1. Строка j транспонированной матрицы — это столбец j исходной: <code>[a[i][j] for i in range(n)]</code>.</p>`,
          solution: py`
n = int(input())
a = [list(map(int, input().split())) for i in range(n)]
s = 0
p = 1
for i in range(n):
    s += a[i][i]
    p *= a[i][n - 1 - i]
print(s)
print(p)
for j in range(n):
    print(*[a[i][j] for i in range(n)])`,
          tests: [
            { input: "3\n1 2 3\n4 5 6\n7 8 9", output: "15\n105\n1 4 7\n2 5 8\n3 6 9" },
            { input: "1\n5", output: "5\n5\n5" },
            { input: "2\n1 -2\n3 4", output: "5\n-6\n1 3\n-2 4", hidden: true },
            { input: "4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16", output: "34\n3640\n1 5 9 13\n2 6 10 14\n3 7 11 15\n4 8 12 16", hidden: true },
            { input: "3\n0 1 2\n3 0 4\n5 6 0", output: "0\n0\n0 3 5\n1 0 6\n2 4 0", hidden: true },
          ],
        },
      ],

      quiz: [
        { type: "single", q: "Что выведет программа?", code: py`
a = [10, 20, 30, 40, 50]
print(a[1:4])`,
          options: ["[10, 20, 30, 40]", "[20, 30, 40]", "[20, 30, 40, 50]", "[20, 40]"], answer: 1,
          explain: "Срез берёт элементы с индексами 1, 2, 3; индекс 4 не включается." },
        { type: "single", q: "Что выведет программа?", code: py`
a = [1, 2, 3]
b = a
b.append(4)
print(a)`,
          options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 1, 2, 3]", "Ошибка"], answer: 1,
          explain: "<code>b = a</code> не копирует список, а даёт ему второе имя. Изменение через b видно и через a. Копию делают <code>a.copy()</code> или <code>a[:]</code>." },
        { type: "single", q: "Что выведет программа?", code: py`
a = [3, 1, 2]
print(a.sort())`,
          options: ["[1, 2, 3]", "None", "[3, 1, 2]", "Ошибка"], answer: 1,
          explain: "Метод <code>sort()</code> сортирует сам список и возвращает <code>None</code>. Чтобы получить отсортированный список как результат, нужна функция <code>sorted(a)</code>." },
        { type: "single", q: "Что выведет программа?", code: py`print([x * x for x in range(5) if x % 2 == 0])`,
          options: ["[0, 4, 16]", "[1, 9]", "[0, 1, 4, 9, 16]", "[4, 16]"], answer: 0,
          explain: "Условие оставляет чётные x: 0, 2, 4. Их квадраты: 0, 4, 16." },
        { type: "single", q: "Что выведет программа?", code: py`
a = [[0] * 3] * 2
a[0][0] = 1
print(a)`,
          options: ["[[1, 0, 0], [0, 0, 0]]", "[[1, 0, 0], [1, 0, 0]]", "[[1, 1, 1], [0, 0, 0]]", "Ошибка"], answer: 1,
          explain: "<code>* 2</code> копирует ссылку на одну и ту же строку, поэтому обе «строки» — один и тот же список. Правильно создавать матрицу так: <code>[[0] * 3 for i in range(2)]</code>." },
        { type: "multiple", q: "Какие фрагменты создают список [0, 1, 4, 9]?", codeOptions: true,
          options: ["a = [i * i for i in range(4)]", "a = [i ** 2 for i in range(1, 5)]", "a = []\nfor i in range(4):\n    a.append(i * i)", "a = [0, 1, 4, 9]", "a = list(range(0, 10, 3))"], answer: [0, 2, 3],
          explain: "<code>range(1, 5)</code> даёт 1…4, их квадраты [1, 4, 9, 16]. <code>list(range(0, 10, 3))</code> — это [0, 3, 6, 9]." },
        { type: "multiple", q: "Выберите верные утверждения.",
          options: ["Кортеж (tuple) нельзя изменить после создания", "Метод <code>pop()</code> удаляет элемент по значению", "Метод <code>remove(x)</code> удаляет первое вхождение значения x", "<code>sorted(a)</code> возвращает новый список, а <code>a.sort()</code> изменяет сам список", "Индекс последнего элемента списка равен <code>len(a)</code>"], answer: [0, 2, 3],
          explain: "<code>pop</code> удаляет по <b>индексу</b>, а по значению удаляет <code>remove</code>. Индекс последнего элемента — <code>len(a) - 1</code>." },
        { type: "matching", q: "Пусть a = [5, 3, 8, 1]. Сопоставьте выражение и результат.",
          pairs: [
            { left: "len(a)", right: "4" },
            { left: "max(a)", right: "8" },
            { left: "a.index(8)", right: "2" },
            { left: "sum(a)", right: "17" },
            { left: "a[-1]", right: "1" },
            { left: "sorted(a)", right: "[1, 3, 5, 8]" },
          ], distractors: ["3", "[8, 5, 3, 1]"],
          explain: "Число 8 стоит на позиции с индексом 2 (нумерация с нуля). 5 + 3 + 8 + 1 = 17. <code>a[-1]</code> — последний элемент. <code>sorted</code> сортирует по возрастанию." },
        { type: "matching", q: "Сопоставьте часть квадратной матрицы n×n и условие на индексы элемента a[i][j].",
          pairs: [
            { left: "Главная диагональ", right: "i == j" },
            { left: "Побочная диагональ", right: "i + j == n - 1" },
            { left: "Выше главной диагонали", right: "j > i" },
            { left: "Ниже главной диагонали", right: "i > j" },
          ], distractors: ["i + j < n - 1", "i == n - j"],
          explain: "На главной диагонали номер строки равен номеру столбца. На побочной сумма индексов постоянна и равна n − 1. Выше главной номер столбца больше номера строки." },
        { type: "fill", q: "Что выведет программа?", code: py`
a = [1, 2, 3, 4, 5]
a.pop()
a.pop(0)
print(a)`, answer: ["[2, 3, 4]"],
          explain: "<code>pop()</code> без аргумента удаляет последний элемент (5), <code>pop(0)</code> — первый (1). Остаётся [2, 3, 4]." },
        { type: "fill", q: "Что выведет программа?", code: py`
m = [[1, 2, 3],
     [4, 5, 6]]
print(m[1][2])`, answer: ["6"],
          explain: "Строка с индексом 1 — [4, 5, 6], в ней элемент с индексом 2 — число 6." },
        { type: "fill", q: "Что выведет команда?", code: py`print(len([[1, 2], [3, 4], [5, 6]]))`, answer: ["3"],
          explain: "Внешний список содержит 3 элемента — три строки. <code>len</code> не считает вложенные элементы." },
        { type: "single", q: "Какова сложность пузырьковой сортировки в худшем случае?",
          options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"], answer: 1,
          explain: "Два вложенных цикла по n элементов дают порядка n² сравнений. O(n log n) — у быстрой сортировки и встроенной <code>sorted</code>." },
        { type: "fill", q: "Что выведет команда?", code: py`print(*[1, 2, 3], sep="-")`, answer: ["1-2-3"],
          explain: "<code>*</code> распаковывает список в отдельные аргументы print, а <code>sep</code> задаёт разделитель между ними." },
        { type: "matching", q: "Сопоставьте операцию и её сложность в худшем случае.",
          pairs: [
            { left: "Обращение к элементу a[i]", right: "O(1)" },
            { left: "Бинарный поиск", right: "O(log n)" },
            { left: "Линейный поиск", right: "O(n)" },
            { left: "Встроенная sorted()", right: "O(n log n)" },
            { left: "Пузырьковая сортировка", right: "O(n²)" },
          ], distractors: ["O(2ⁿ)"],
          explain: "Индекс — прямой доступ к ячейке. Бинарный поиск делит диапазон пополам. Линейный просматривает все элементы. sorted() использует Timsort. Пузырёк — два вложенных цикла." },
        { type: "fill", q: "Какое наибольшее число сравнений понадобится бинарному поиску в отсортированном массиве из 1000 элементов?", answer: ["10"],
          explain: "Каждое сравнение уменьшает диапазон вдвое: 1000 → 500 → 250 → … → 1. 2¹⁰ = 1024 ≥ 1000, поэтому достаточно 10 шагов." },
      ],
    },
    /* ====================================================
       МОДУЛЬ 6. Функции и рекурсия
       ==================================================== */
    {
      id: "m6",
      icon: "🧩",
      title: "Функции и рекурсия",
      summary: "Подпрограммы, def и return, аргументы по умолчанию, *args/**kwargs, области видимости, рекурсия, lambda.",
      lessons: [
        {
          id: "l1",
          title: "Подпрограммы: функции и процедуры",
          blocks: [
            { t: "html", html: `
              <p><b>Подпрограмма</b> — отдельная, независимая часть программы, у которой есть имя и которая решает отдельную задачу. Подпрограммы избавляют от повторения одинакового кода, разбивают большую задачу на маленькие и упрощают исправление ошибок: код меняется в одном месте.</p>
              <p>Классически различают два вида подпрограмм:</p>
              <ul><li><b>процедура</b> — выполняет действия (например, печатает), но результата не возвращает;</li>
              <li><b>функция</b> — выполняет действия и <b>возвращает результат</b>.</li></ul>
              <p>В Python формального деления нет: и то и другое объявляется через <code>def</code> и называется функцией. «Процедура» — это функция без <code>return</code>.</p>
              <p>Функции бывают <b>встроенные</b> (системные: <code>print</code>, <code>len</code>, <code>max</code>…) и <b>пользовательские</b> — те, что пишет программист.</p>
              <h3>Объявление и вызов</h3>
              <p>Функция состоит из имени, параметров в скобках и тела с отступом. Объявление само по себе ничего не выполняет: код внутри срабатывает только при <b>вызове</b> по имени.</p>` },
            { t: "code", code: py`
def greet():                 # объявление (define)
    print("Привет!")
    print("Это новая функция")

greet()                      # вызов
greet()                      # можно вызывать сколько угодно раз` },
            { t: "html", html: `<h3>Порядок выполнения</h3><p>Python идёт сверху вниз. Встретив вызов, он «прыгает» в тело функции, выполняет его и возвращается к следующей строке после вызова.</p>` },
            { t: "code", code: py`
def middle():
    print("2. внутри функции")

print("1. начало")
middle()
print("3. после вызова")` },
            { t: "note", kind: "warn", title: "Сначала def, потом вызов", html: `<p>Функцию нужно объявить <b>выше</b> места первого вызова в основной программе. Иначе будет <code>NameError: name '...' is not defined</code>.</p>` },
          ],
        },
        {
          id: "l2",
          title: "Параметры и return",
          blocks: [
            { t: "html", html: `<p><b>Параметры</b> — переменные в заголовке <code>def</code>; <b>аргументы</b> — конкретные значения, которые передают при вызове. Аргументом может быть число, переменная или целое выражение.</p>` },
            { t: "code", code: py`
def show_sum(a, b):          # a и b — параметры
    print(a, "+", b, "=", a + b)

show_sum(2, 3)               # 2 и 3 — аргументы
x = 10
show_sum(x, x * 2)` },
            { t: "html", html: `<h3>Оператор return</h3><p>Как калькулятор отдаёт результат вычисления, так функция отдаёт значение оператором <code>return</code>. Он делает две вещи: <b>возвращает</b> значение в место вызова и <b>сразу завершает</b> функцию. Результат можно сохранить в переменную или использовать в выражении.</p>` },
            { t: "code", code: py`
def m_max(a, b):
    if a > b:
        return a
    return b                 # сюда дойдём, только если a <= b

print(m_max(3, 5), m_max(8, 3))
res = m_max(4, 9) * 10 + m_max(1, 2)
print(res)` },
            { t: "html", html: `<h3>print или return?</h3><p><code>print</code> просто показывает значение на экране, а <code>return</code> передаёт его программе. Если функция ничего не возвращает, а её результат используют, получится специальное значение <code>None</code> («ничего»).</p>` },
            { t: "code", code: py`
def show(x):
    print(x * 2)             # только выводит

def calc(x):
    return x * 2             # возвращает

r1 = show(5)
r2 = calc(5)
print("r1 =", r1)
print("r2 =", r2)` },
            { t: "html", html: `<h3>Несколько значений</h3><p>Через запятую в <code>return</code> можно вернуть несколько значений — на самом деле вернётся кортеж, который удобно распаковать.</p>` },
            { t: "code", code: py`
def div_mod(a, b):
    return a // b, a % b

q, r = div_mod(17, 5)
print(q, r)
print(div_mod(20, 6))` },
            { t: "code", code: py`
# Функция с циклом и условием: простое ли число?
def is_prime(n):
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False      # нашли делитель — сразу выходим
    return True

print([n for n in range(1, 30) if is_prime(n)])` },
          ],
        },
        {
          id: "l3",
          title: "Аргументы: по умолчанию, именованные, *args, **kwargs",
          blocks: [
            { t: "html", html: `<h3>Значения по умолчанию</h3><p>Параметру можно задать значение, которое используется, если аргумент не передали. Такие параметры пишут <b>после</b> обычных.</p>` },
            { t: "code", code: py`
def power(x, n=2):
    return x ** n

print(power(5))          # n = 2 по умолчанию
print(power(2, 10))

def hello(name="гость", lang="ru"):
    if lang == "kz":
        print("Сәлем,", name)
    else:
        print("Привет,", name)

hello()
hello("Айгерим", "kz")` },
            { t: "html", html: `<h3>Именованные аргументы</h3><p>Аргумент можно передать по имени параметра — тогда порядок не важен. Так работает <code>print(..., sep="-", end="")</code>.</p>` },
            { t: "code", code: py`
def rect(width, height):
    return width * height

print(rect(height=3, width=5))` },
            { t: "html", html: `<h3>*args — любое количество аргументов</h3><p>Звёздочка собирает все лишние позиционные аргументы в <b>кортеж</b>.</p>` },
            { t: "code", code: py`
def my_sum(*args):
    print("получили:", args)
    total = 0
    for x in args:
        total += x
    return total

print(my_sum(1, 2))
print(my_sum(5, 10, 15, 20))
print(my_sum())` },
            { t: "html", html: `<h3>**kwargs — любые именованные аргументы</h3><p>Две звёздочки собирают именованные аргументы в <b>словарь</b> (о словарях подробнее — в модуле 7).</p>` },
            { t: "code", code: py`
def profile(name, **kwargs):
    print("Ученик:", name)
    for key, value in kwargs.items():
        print(" ", key, "=", value)

profile("Данияр", класс=11, школа="№25", балл=118)` },
            { t: "note", kind: "ent", title: "Порядок параметров", html: `<p>В заголовке функции параметры идут так: обычные → со значением по умолчанию → <code>*args</code> → <code>**kwargs</code>.</p>` },
          ],
        },
        {
          id: "l4",
          title: "Локальные и глобальные переменные",
          blocks: [
            { t: "html", html: `
              <p><b>Локальные</b> переменные создаются внутри функции и существуют только во время её работы. Параметры функции — тоже локальные переменные.</p>
              <p><b>Глобальные</b> переменные созданы в основной программе. Внутри функции их можно <b>читать</b>.</p>` },
            { t: "code", code: py`
rate = 10                    # глобальная

def price(x):
    total = x + x * rate / 100   # total — локальная, rate читаем
    return total

print(price(200))
# print(total)               # NameError: total не существует снаружи` },
            { t: "html", html: `<p>Если внутри функции <b>присвоить</b> значение переменной с тем же именем, Python создаст новую локальную переменную. Глобальная при этом не изменится.</p>` },
            { t: "code", code: py`
x = 5

def change():
    x = 10                   # новая локальная x
    print("внутри:", x)

change()
print("снаружи:", x)` },
            { t: "html", html: `<h3>Ключевое слово global</h3><p>Чтобы функция изменила глобальную переменную, её объявляют через <code>global</code>.</p>` },
            { t: "code", code: py`
counter = 0

def tick():
    global counter
    counter += 1

for i in range(3):
    tick()
print("counter =", counter)` },
            { t: "note", kind: "warn", title: "Хороший стиль", html: `<p>Злоупотреблять <code>global</code> не стоит: функцию с глобальными переменными сложнее проверять. Лучше передавать данные через параметры и получать результат через <code>return</code>.</p>` },
          ],
        },
        {
          id: "l5",
          title: "Рекурсия",
          blocks: [
            { t: "html", html: `
              <p><b>Рекурсия</b> — вызов функцией самой себя. Любая рекурсивная функция содержит:</p>
              <ul><li><b>базовый случай</b> — условие, при котором функция возвращает ответ без нового вызова (остановка);</li>
              <li><b>рекурсивный шаг</b> — сведение задачи к такой же, но меньшей.</li></ul>
              <p>Классический пример — факториал: n! = n · (n − 1)!, а 0! = 1.</p>` },
            { t: "code", code: py`
def fact(n):
    if n == 0:               # базовый случай
        return 1
    return n * fact(n - 1)   # рекурсивный шаг

print(fact(5))
# fact(5) = 5 * fact(4) = 5 * 4 * fact(3) = ... = 5 * 4 * 3 * 2 * 1 * 1` },
            { t: "code", code: py`
# Трассировка: видно, как вызовы уходят вглубь и возвращаются
def show(n, depth=0):
    print("  " * depth + "вход", n)
    if n > 0:
        show(n - 1, depth + 1)
    print("  " * depth + "выход", n)

show(2)` },
            { t: "html", html: `<h3>Ещё примеры</h3>` },
            { t: "code", code: py`
def digit_sum(n):            # сумма цифр
    if n < 10:
        return n
    return n % 10 + digit_sum(n // 10)

def gcd(a, b):               # НОД, алгоритм Евклида
    if b == 0:
        return a
    return gcd(b, a % b)

def fib(n):                  # числа Фибоначчи: 0 1 1 2 3 5 8 ...
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print(digit_sum(4096), gcd(48, 36))
print([fib(i) for i in range(10)])` },
            { t: "html", html: `<h3>Быстрая сортировка (Quick Sort)</h3><p>Обещанный в модуле 5 алгоритм «разделяй и властвуй»: выбираем опорный элемент (pivot), делим список на элементы меньше и не меньше него, рекурсивно сортируем части и склеиваем.</p>` },
            { t: "code", code: py`
def quick_sort(a):
    if len(a) <= 1:                  # базовый случай
        return a
    pivot = a[0]
    less = [x for x in a[1:] if x < pivot]
    more = [x for x in a[1:] if x >= pivot]
    return quick_sort(less) + [pivot] + quick_sort(more)

print(quick_sort([6, 3, 8, 2, 7, 4]))` },
            { t: "html", html: `<h3>Сортировка слиянием (Merge Sort)</h3><p>Тоже «разделяй и властвуй», но наоборот: делим список пополам, рекурсивно сортируем половины и <b>сливаем</b> их двумя указателями (модуль 5). Сложность всегда O(n log n): log n уровней деления, на каждом уровне — слияние за O(n).</p>` },
            { t: "code", code: py`
def merge_sort(a):
    if len(a) <= 1:
        return a
    mid = len(a) // 2
    left = merge_sort(a[:mid])
    right = merge_sort(a[mid:])
    res = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            res.append(left[i])
            i += 1
        else:
            res.append(right[j])
            j += 1
    return res + left[i:] + right[j:]

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))` },
            { t: "note", kind: "warn", title: "Без базового случая", html: `<p>Если рекурсия не останавливается, Python прервёт её после ~1000 вложенных вызовов с ошибкой <code>RecursionError: maximum recursion depth exceeded</code>. Попробуйте запустить пример ниже.</p>` },
            { t: "code", code: py`
def forever(n):
    return forever(n + 1)    # нет базового случая

forever(1)` },
          ],
        },
        {
          id: "l6",
          title: "lambda, map, filter и sorted(key=)",
          blocks: [
            { t: "html", html: `<p><b>lambda</b> — короткая безымянная функция в одну строку: <code>lambda параметры: выражение</code>. Её результат — значение выражения, <code>return</code> не пишется.</p>` },
            { t: "code", code: py`
square = lambda x: x ** 2
add = lambda a, b: a + b
print(square(5), add(2, 3))
print((lambda x: x * 10)(7))` },
            { t: "html", html: `<p>В Python функцию можно передать в другую функцию как аргумент. На этом построены:</p>
              <ul><li><code>map(f, seq)</code> — применяет f к каждому элементу;</li>
              <li><code>filter(f, seq)</code> — оставляет элементы, для которых f вернула True;</li>
              <li><code>sorted(seq, key=f)</code> — сортирует по значению f(элемент).</li></ul>
              <p><code>map</code> и <code>filter</code> возвращают «ленивый» объект, поэтому для вывода его оборачивают в <code>list()</code>. Знакомое <code>map(int, input().split())</code> — как раз это.</p>` },
            { t: "code", code: py`
nums = [3, -1, 4, -5, 9, 2]
print(list(map(lambda x: x * 2, nums)))
print(list(filter(lambda x: x > 0, nums)))
print(list(map(int, ["10", "20", "30"])))
words = ["арбуз", "ёж", "банан", "кот"]
print(sorted(words, key=len))
print(sorted(nums, key=abs))
print(max(words, key=len))` },
            { t: "code", code: py`
# Своя функция тоже может быть ключом сортировки
def digit_sum(n):
    return sum(map(int, str(n)))

a = [91, 15, 42, 7, 100]
print(sorted(a, key=digit_sum))` },
          ],
        },
        {
          id: "l7",
          title: "Вложенные функции, nonlocal, замыкания и декораторы",
          blocks: [
            { t: "html", html: `<p>Функцию можно объявить <b>внутри</b> другой функции. Вложенная функция видна только внутри внешней и может читать её переменные.</p>
              <p>Python ищет имя переменной по правилу <b>LEGB</b>: Local (внутри текущей функции) → Enclosing (во внешней функции) → Global (в программе) → Built-in (встроенные имена вроде <code>len</code>).</p>
              <h3>nonlocal</h3><p>Чтобы <b>изменить</b> переменную внешней функции (а не глобальную), используют <code>nonlocal</code> — по аналогии с <code>global</code>.</p>` },
            { t: "code", code: py`
def outer():
    count = 0
    def inc():
        nonlocal count
        count += 1
    for _ in range(3):
        inc()
    return count

print(outer())` },
            { t: "html", html: `<h3>Замыкания</h3><p>Функция может <b>вернуть</b> вложенную функцию. Та «запоминает» переменные внешней функции даже после того, как внешняя завершилась. Такую функцию называют <b>замыканием</b>.</p>` },
            { t: "code", code: py`
def make_multiplier(k):
    def mul(x):
        return x * k      # k «запомнилось»
    return mul

double = make_multiplier(2)
triple = make_multiplier(3)
print(double(5), triple(5))
print(make_multiplier(10)(7))` },
            { t: "html", html: `<h3>Декораторы</h3><p><b>Декоратор</b> — функция, которая принимает функцию и возвращает новую, «обёрнутую», с дополнительным поведением. Запись <code>@имя_декоратора</code> над <code>def</code> — короткая форма для <code>f = декоратор(f)</code>.</p>` },
            { t: "code", code: py`
def logged(func):
    def wrapper(*args):
        result = func(*args)
        print(f"{func.__name__}({', '.join(map(str, args))}) = {result}")
        return result
    return wrapper

@logged
def add(a, b):
    return a + b

@logged
def square(x):
    return x * x

add(2, 3)
square(7)` },
            { t: "code", code: py`
# Декоратор-счётчик вызовов: видно, как много лишней работы делает наивный fib
def count_calls(func):
    def wrapper(n):
        wrapper.calls += 1
        return func(n)
    wrapper.calls = 0
    return wrapper

@count_calls
def fib(n):
    return n if n < 2 else fib(n - 1) + fib(n - 2)

print(fib(20), "вызовов:", fib.calls)` },
          ],
        },
      ],

      tasks: [
        {
          id: "t1",
          title: "Функции для работы с цифрами",
          level: "Лёгкая",
          statement: `<p>Напишите три функции для натурального числа <code>n</code> (используйте арифметику и цикл, без перевода в строку):</p>
            <ul><li><code>digit_sum(n)</code> — сумма цифр: <code>digit_sum(472)</code> → <code>13</code>;</li>
            <li><code>count_digits(n)</code> — количество цифр: <code>count_digits(58321)</code> → <code>5</code>;</li>
            <li><code>reverse_number(n)</code> — число, записанное в обратном порядке: <code>reverse_number(12345)</code> → <code>54321</code>.</li></ul>
            <p>Функции должны <b>возвращать</b> результат через <code>return</code>, а не печатать его. Проверка вызывает ваши функции с разными аргументами. Для своей проверки можете добавлять <code>print(...)</code> внизу программы.</p>`,
          starter: py`
def digit_sum(n):
    pass


def count_digits(n):
    pass


def reverse_number(n):
    pass


print(digit_sum(472), count_digits(58321), reverse_number(12345))`,
          hint: `<p>Цикл <code>while n &gt; 0</code>: последняя цифра — <code>n % 10</code>, отбросить её — <code>n //= 10</code>. Перевёрнутое число собирается так: <code>r = r * 10 + n % 10</code>.</p>`,
          solution: py`
def digit_sum(n):
    s = 0
    while n > 0:
        s += n % 10
        n //= 10
    return s


def count_digits(n):
    k = 0
    while n > 0:
        k += 1
        n //= 10
    return k


def reverse_number(n):
    r = 0
    while n > 0:
        r = r * 10 + n % 10
        n //= 10
    return r`,
          tests: [
            chk("digit_sum(472)", "13"),
            chk("count_digits(58321)", "5"),
            chk("reverse_number(12345)", "54321"),
            chk("digit_sum(9)", "9", true),
            chk("digit_sum(1000000)", "1", true),
            chk("count_digits(7)", "1", true),
            chk("count_digits(1000)", "4", true),
            chk("reverse_number(1200)", "21", true),
            chk("reverse_number(5)", "5", true),
          ],
        },
        {
          id: "t2",
          title: "Делители, совершенные и дружественные числа",
          level: "Средняя",
          statement: `<p>Напишите функции:</p>
            <ul><li><code>find_divisors(n)</code> — возвращает <b>список</b> всех положительных делителей n по возрастанию: <code>find_divisors(12)</code> → <code>[1, 2, 3, 4, 6, 12]</code>;</li>
            <li><code>is_perfect(n)</code> — <code>True</code>, если n равно сумме своих делителей, <b>кроме самого n</b> (совершенное число): <code>is_perfect(28)</code> → <code>True</code>, так как 1 + 2 + 4 + 7 + 14 = 28;</li>
            <li><code>are_friendly(a, b)</code> — <code>True</code>, если сумма собственных делителей a равна b, а сумма собственных делителей b равна a: <code>are_friendly(220, 284)</code> → <code>True</code>.</li></ul>
            <p>Используйте первую функцию внутри остальных — в этом и смысл функций.</p>`,
          starter: py`
def find_divisors(n):
    pass


def is_perfect(n):
    pass


def are_friendly(a, b):
    pass


print(find_divisors(12), is_perfect(28), are_friendly(220, 284))`,
          hint: `<p>Сумма собственных делителей: <code>sum(find_divisors(n)) - n</code>. Удобно написать для неё отдельную функцию и вызывать её в <code>is_perfect</code> и <code>are_friendly</code>. Не забудьте, что у числа 1 собственных делителей нет (сумма 0), поэтому 1 не совершенное.</p>`,
          solution: py`
def find_divisors(n):
    return [d for d in range(1, n + 1) if n % d == 0]


def proper_sum(n):
    return sum(find_divisors(n)) - n


def is_perfect(n):
    return proper_sum(n) == n


def are_friendly(a, b):
    return proper_sum(a) == b and proper_sum(b) == a`,
          tests: [
            chk("find_divisors(12)", "[1, 2, 3, 4, 6, 12]"),
            chk("is_perfect(28)", "True"),
            chk("is_perfect(12)", "False"),
            chk("are_friendly(220, 284)", "True"),
            chk("find_divisors(1)", "[1]", true),
            chk("find_divisors(13)", "[1, 13]", true),
            chk("find_divisors(36)", "[1, 2, 3, 4, 6, 9, 12, 18, 36]", true),
            chk("is_perfect(6)", "True", true),
            chk("is_perfect(1)", "False", true),
            chk("is_perfect(496)", "True", true),
            chk("are_friendly(1184, 1210)", "True", true),
            chk("are_friendly(10, 20)", "False", true),
          ],
        },
        {
          id: "t3",
          title: "Рекурсивные функции",
          level: "Сложная",
          statement: `<p>Напишите три функции <b>с помощью рекурсии</b> (без циклов и встроенных <code>bin</code>, <code>sorted</code>, <code>math.gcd</code>):</p>
            <ul><li><code>gcd(a, b)</code> — НОД по алгоритму Евклида: <code>gcd(12, 18)</code> → <code>6</code>;</li>
            <li><code>to_binary(n)</code> — <b>строка</b> с двоичной записью числа n ≥ 0: <code>to_binary(10)</code> → <code>"1010"</code>, <code>to_binary(0)</code> → <code>"0"</code>;</li>
            <li><code>quick_sort(a)</code> — возвращает <b>новый</b> список, отсортированный по возрастанию, методом быстрой сортировки.</li></ul>`,
          starter: py`
def gcd(a, b):
    pass


def to_binary(n):
    pass


def quick_sort(a):
    pass


print(gcd(12, 18), to_binary(10), quick_sort([3, 6, 8, 2, 7, 4]))`,
          hint: `<p><b>gcd:</b> если b == 0, ответ a, иначе <code>gcd(b, a % b)</code>.<br>
            <b>to_binary:</b> если n &lt; 2, верните <code>str(n)</code>; иначе двоичная запись <code>n // 2</code> плюс последний бит <code>str(n % 2)</code>.<br>
            <b>quick_sort:</b> список из 0 или 1 элемента уже отсортирован; иначе опорный <code>a[0]</code>, два генератора списков для меньших и остальных элементов, склейка результатов.</p>`,
          solution: py`
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)


def to_binary(n):
    if n < 2:
        return str(n)
    return to_binary(n // 2) + str(n % 2)


def quick_sort(a):
    if len(a) <= 1:
        return a[:]
    pivot = a[0]
    less = [x for x in a[1:] if x < pivot]
    more = [x for x in a[1:] if x >= pivot]
    return quick_sort(less) + [pivot] + quick_sort(more)`,
          tests: [
            chk("gcd(12, 18)", "6"),
            chk("to_binary(10)", '"1010"'),
            chk("quick_sort([3, 6, 8, 2, 7, 4])", "[2, 3, 4, 6, 7, 8]"),
            chk("gcd(17, 5)", "1", true),
            chk("gcd(0, 5)", "5", true),
            chk("gcd(100, 75)", "25", true),
            chk("to_binary(0)", '"0"', true),
            chk("to_binary(1)", '"1"', true),
            chk("to_binary(255)", '"11111111"', true),
            chk("quick_sort([])", "[]", true),
            chk("quick_sort([5, 5, 1, 5])", "[1, 5, 5, 5]", true),
            chk("quick_sort([-3, 10, 0, -3])", "[-3, -3, 0, 10]", true),
          ],
        },
      ],

      quiz: [
        { type: "single", q: "Что выведет программа?", code: py`
def f(x):
    return x * 2

print(f(3) + f(4))`,
          options: ["7", "14", "68", "Ошибка"], answer: 1,
          explain: "f(3) возвращает 6, f(4) возвращает 8, их сумма 14. Возвращённые значения можно использовать в выражениях." },
        { type: "single", q: "Что выведет программа?", code: py`
def g():
    print("Hi")

r = g()
print(r)`, codeOptions: true,
          options: ["Hi", "Hi\nNone", "None", "Ошибка"], answer: 1,
          explain: "При вызове g() печатается Hi. В функции нет <code>return</code>, поэтому она возвращает <code>None</code>, и вторая строка выводит None." },
        { type: "single", q: "Что выведет программа?", code: py`
def f(a, b=10):
    return a + b

print(f(5), f(5, 1))`,
          options: ["15 15", "15 6", "6 6", "Ошибка: не передан b"], answer: 1,
          explain: "В первом вызове b не передан и берётся значение по умолчанию 10: 5 + 10 = 15. Во втором b = 1: 5 + 1 = 6." },
        { type: "single", q: "Что выведет программа?", code: py`
x = 5

def change():
    x = 10

change()
print(x)`,
          options: ["5", "10", "None", "Ошибка"], answer: 0,
          explain: "Присваивание внутри функции создаёт новую <b>локальную</b> переменную x. Глобальная x остаётся равной 5. Чтобы изменить её, нужно <code>global x</code>." },
        { type: "single", q: "Что выведет программа?", code: py`
def f(n):
    if n == 0:
        return 0
    return n + f(n - 1)

print(f(4))`,
          options: ["4", "10", "24", "RecursionError"], answer: 1,
          explain: "f(4) = 4 + f(3) = 4 + 3 + f(2) = 4 + 3 + 2 + 1 + f(0) = 10. Базовый случай n == 0 останавливает рекурсию." },
        { type: "single", q: "Что выведет программа?", code: py`
def f(*args):
    return len(args)

print(f(1, 2, 3))`,
          options: ["1", "3", "6", "Ошибка"], answer: 1,
          explain: "<code>*args</code> собирает все переданные аргументы в кортеж (1, 2, 3), его длина — 3." },
        { type: "multiple", q: "Выберите верные утверждения.",
          options: ["<code>return</code> завершает выполнение функции", "Функция без <code>return</code> возвращает <code>None</code>", "Параметры функции являются глобальными переменными", "Рекурсия без базового случая приводит к ошибке <code>RecursionError</code>", "В основной программе функцию можно вызвать выше строки с её <code>def</code>"], answer: [0, 1, 3],
          explain: "Параметры — локальные переменные функции. В основной программе функция должна быть объявлена до вызова, иначе NameError." },
        { type: "multiple", q: "Какие функции правильно <b>возвращают</b> большее из чисел a и b?", codeOptions: true,
          options: [
            "def m(a, b):\n    if a > b:\n        return a\n    return b",
            "def m(a, b):\n    return a if a > b else b",
            "def m(a, b):\n    if a > b:\n        print(a)\n    else:\n        print(b)",
            "def m(a, b):\n    return max(a, b)",
            "def m(a, b):\n    if a > b:\n        return b\n    return a",
          ], answer: [0, 1, 3],
          explain: "Третья функция только печатает, а возвращает None. Пятая возвращает меньшее число." },
        { type: "matching", q: "Сопоставьте выражение и результат.",
          pairs: [
            { left: "list(map(int, ['1', '2']))", right: "[1, 2]" },
            { left: "list(filter(lambda x: x > 0, [-1, 2, -3, 4]))", right: "[2, 4]" },
            { left: "(lambda x: x ** 2)(5)", right: "25" },
            { left: "sorted(['bb', 'a', 'ccc'], key=len)", right: "['a', 'bb', 'ccc']" },
          ], distractors: ["[-1, -3]", "['1', '2']"],
          explain: "<code>map</code> применяет int к каждой строке; <code>filter</code> оставляет положительные; lambda возводит 5 в квадрат; <code>key=len</code> сортирует по длине строк." },
        { type: "matching", q: "Сопоставьте термин и определение.",
          pairs: [
            { left: "Параметр", right: "переменная в заголовке def" },
            { left: "Аргумент", right: "значение, передаваемое при вызове" },
            { left: "Локальная переменная", right: "существует только внутри функции" },
            { left: "Базовый случай", right: "условие остановки рекурсии" },
          ], distractors: ["переменная основной программы"],
          explain: "В <code>def f(x)</code> x — параметр, в вызове <code>f(5)</code> 5 — аргумент. Переменные основной программы — глобальные." },
        { type: "fill", q: "Что выведет программа?", code: py`
def f(a, b):
    return a // b, a % b

q, r = f(17, 5)
print(q, r)`, answer: ["3 2"],
          explain: "Функция возвращает два значения (кортеж) (3, 2), которые распаковываются в q и r." },
        { type: "fill", q: "Какое ключевое слово нужно написать внутри функции, чтобы она могла изменить глобальную переменную?", answer: ["global"], ignoreCase: true,
          explain: "<code>global имя</code> говорит Python, что присваивание должно менять глобальную переменную, а не создавать локальную." },
        { type: "fill", q: "Что выведет программа?", code: py`
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(7))`, answer: ["13"],
          explain: "Последовательность: fib(0..7) = 0, 1, 1, 2, 3, 5, 8, 13." },
        { type: "fill", q: "Впишите пропущенное ключевое слово.", code: py`
___ square(x):
    return x * x`, answer: ["def"],
          explain: "Объявление функции начинается с <code>def</code> (define — определить)." },
        { type: "single", q: "Что выведет программа?", code: py`
def f():
    x = 1
    def g():
        nonlocal x
        x += 10
    g()
    return x

print(f())`,
          options: ["1", "11", "10", "Ошибка"], answer: 1,
          explain: "<code>nonlocal x</code> позволяет вложенной функции g изменить переменную x внешней функции f: 1 + 10 = 11." },
        { type: "fill", q: "Что выведет программа?", code: py`
def make_multiplier(k):
    def mul(x):
        return x * k
    return mul

print(make_multiplier(3)(4))`, answer: ["12"],
          explain: "make_multiplier(3) возвращает функцию, которая умножает на 3 (замыкание запомнило k = 3). Её вызов с 4 даёт 12." },
      ],
    },
    /* ====================================================
       МОДУЛЬ 7. Словари, множества, файлы и графы
       ==================================================== */
    {
      id: "m7",
      icon: "🗂️",
      title: "Словари, множества и файлы",
      summary: "Множества set, словари dict, частотный анализ, чтение и запись файлов, графы: BFS, DFS, Дейкстра и Флойд.",
      lessons: [
        {
          id: "l1",
          title: "Коллекции и множества (set)",
          blocks: [
            { t: "html", html: `
              <p><b>Структура данных</b> — способ хранить и организовывать информацию так, чтобы нужные операции выполнялись эффективно. В Python четыре основные коллекции:</p>
              <table>
                <tr><th>Тип</th><th>Изменяемый</th><th>Упорядоченный</th><th>Уникальность</th><th>Запись</th></tr>
                <tr><td><code>list</code></td><td>да</td><td>да</td><td>нет</td><td><code>[1, 2, 3]</code></td></tr>
                <tr><td><code>tuple</code></td><td>нет</td><td>да</td><td>нет</td><td><code>(1, 2, 3)</code></td></tr>
                <tr><td><code>set</code></td><td>да</td><td>нет</td><td>элементы уникальны</td><td><code>{1, 2, 3}</code></td></tr>
                <tr><td><code>dict</code></td><td>да</td><td>порядок добавления (с Python 3.7)</td><td>ключи уникальны</td><td><code>{"a": 1}</code></td></tr>
              </table>
              <h3>Множество</h3>
              <p><b>set</b> — неупорядоченная коллекция <b>уникальных</b> элементов. Дубликаты удаляются автоматически, а проверка <code>x in s</code> работает очень быстро (не нужно перебирать все элементы). Индексов у множества нет.</p>` },
            { t: "code", code: py`
s = {3, 1, 2, 3, 1}
print(s, len(s))
print(set([5, 5, 6, 7, 7]))        # удаление дубликатов из списка
print(set("hello"))                # уникальные буквы (порядок любой)
empty = set()                      # пустое множество — только так!
print(type(empty), type({}))       # {} — это пустой словарь` },
            { t: "html", html: `
              <h3>Методы множеств</h3>
              <table>
                <tr><th>Метод</th><th>Назначение</th></tr>
                <tr><td><code>add(x)</code></td><td>добавить элемент</td></tr>
                <tr><td><code>remove(x)</code></td><td>удалить (ошибка KeyError, если нет)</td></tr>
                <tr><td><code>discard(x)</code></td><td>удалить без ошибки</td></tr>
                <tr><td><code>update(seq)</code></td><td>добавить несколько элементов</td></tr>
                <tr><td><code>clear()</code></td><td>очистить</td></tr>
              </table>` },
            { t: "code", code: py`
s = {1, 2}
s.add(3)
s.add(2)              # уже есть — ничего не изменится
s.update([4, 5, 6])
s.discard(10)         # нет такого — без ошибки
s.remove(1)
print(sorted(s))      # sorted даёт упорядоченный список` },
            { t: "html", html: `
              <h3>Операции над множествами</h3>
              <table>
                <tr><th>Операция</th><th>Смысл</th></tr>
                <tr><td><code>a | b</code></td><td>объединение — элементы из a или b</td></tr>
                <tr><td><code>a &amp; b</code></td><td>пересечение — элементы и в a, и в b</td></tr>
                <tr><td><code>a - b</code></td><td>разность — элементы a, которых нет в b</td></tr>
                <tr><td><code>a ^ b</code></td><td>симметрическая разность — элементы ровно одного из множеств</td></tr>
                <tr><td><code>a &lt;= b</code></td><td>a — подмножество b</td></tr>
              </table>` },
            { t: "code", code: py`
a = {1, 2, 3, 4}
b = {3, 4, 5}
print(a | b, a & b)
print(a - b, b - a, a ^ b)
print({1, 2} <= a)
# Какие буквы есть в обоих словах?
print(sorted(set("информатика") & set("математика")))` },
          ],
        },
        {
          id: "l2",
          title: "Словари (dict)",
          blocks: [
            { t: "html", html: `
              <p><b>Словарь</b> — коллекция пар «ключ: значение». Доступ к значению идёт не по номеру, а по <b>ключу</b> — как в настоящем словаре по слову ищут перевод. Внутри словарь устроен как <b>хеш-таблица</b>, поэтому поиск по ключу очень быстрый.</p>
              <p>Ключи уникальны и должны быть <b>неизменяемыми</b>: числа, строки, кортежи. Список ключом быть не может. Значения — любые.</p>` },
            { t: "code", code: py`
student = {"name": "Алихан", "age": 17, "grade": 11}
print(student["name"])
student["age"] = 18            # изменить значение
student["city"] = "Алматы"     # добавить новую пару
print(student)
print(len(student), "city" in student)` },
            { t: "note", kind: "warn", title: "KeyError", html: `<p>Обращение к несуществующему ключу <code>d["нет"]</code> вызывает <code>KeyError</code>. Безопасный способ — <code>d.get(ключ, значение_по_умолчанию)</code>: если ключа нет, вернётся значение по умолчанию (или <code>None</code>).</p>` },
            { t: "code", code: py`
prices = {"хлеб": 250, "молоко": 480}
print(prices.get("молоко"))
print(prices.get("сыр"))
print(prices.get("сыр", 0))` },
            { t: "html", html: `
              <h3>Методы словаря</h3>
              <table>
                <tr><th>Метод</th><th>Назначение</th></tr>
                <tr><td><code>keys()</code>, <code>values()</code></td><td>все ключи, все значения</td></tr>
                <tr><td><code>items()</code></td><td>пары (ключ, значение)</td></tr>
                <tr><td><code>get(key, default)</code></td><td>безопасное получение</td></tr>
                <tr><td><code>pop(key)</code> / <code>del d[key]</code></td><td>удалить пару по ключу</td></tr>
                <tr><td><code>clear()</code></td><td>очистить словарь</td></tr>
              </table>` },
            { t: "code", code: py`
scores = {"Аружан": 128, "Тимур": 105, "Мадина": 131}
print(list(scores.keys()))
print(list(scores.values()), sum(scores.values()))
for name, score in scores.items():
    print(f"{name}: {score}")
removed = scores.pop("Тимур")
print(removed, scores)` },
            { t: "html", html: `<h3>Перебор и генератор словаря</h3><p>Цикл <code>for k in d</code> перебирает <b>ключи</b>. Словарь можно построить генератором: <code>{ключ: значение for ...}</code>.</p>` },
            { t: "code", code: py`
squares = {x: x * x for x in range(1, 6)}
print(squares)
for k in squares:
    print(k, "->", squares[k], end="; ")
print()
codes = {ch: ord(ch) for ch in "ABC"}
print(codes)` },
            { t: "code", code: py`
d = {}
d[[1, 2]] = "список"       # список не может быть ключом` },
            { t: "html", html: `<h3>Вложенные словари, генераторы множеств и frozenset</h3><p>Значением словаря может быть другой словарь — так хранят структурированные данные (как таблицу «класс → ученики → баллы»). Множества тоже можно строить генератором: <code>{x for ...}</code>. <code>frozenset</code> — неизменяемое множество; в отличие от обычного, оно может быть ключом словаря или элементом другого множества.</p>` },
            { t: "code", code: py`
school = {
    "11А": {"Айбек": 120, "Дана": 131},
    "11Б": {"Ерлан": 98},
}
print(school["11А"]["Дана"])
school["11Б"]["Мира"] = 115
for cls, students in school.items():
    avg = sum(students.values()) / len(students)
    print(cls, len(students), "уч., средний балл", avg)

evens = {x for x in range(10) if x % 2 == 0}
print(evens, type(evens))
key = frozenset([1, 2, 3])
d = {key: "неизменяемое множество может быть ключом"}
print(d)` },
          ],
        },
        {
          id: "l3",
          title: "Словарь как счётчик: частотный анализ",
          blocks: [
            { t: "html", html: `<p>Самое частое применение словаря в задачах — <b>подсчёт</b>, сколько раз встречается каждый элемент. Ключ — элемент, значение — счётчик. Шаблон: <code>c[x] = c.get(x, 0) + 1</code>.</p>` },
            { t: "code", code: py`
arr = [2, 3, 2, 5, 3, 2]
c = {}
for x in arr:
    c[x] = c.get(x, 0) + 1
print(c)
for x, k in c.items():
    print(f"{x} — {k} раз(а)")` },
            { t: "code", input: "в лесу родилась ёлочка в лесу она росла", code: py`
words = input().split()
freq = {}
for w in words:
    if w in freq:
        freq[w] += 1
    else:
        freq[w] = 1
# Сортировка по убыванию частоты, при равенстве — по алфавиту
for w, k in sorted(freq.items(), key=lambda p: (-p[1], p[0])):
    print(w, k)` },
            { t: "html", html: `<h3>Самый частый элемент</h3><p><code>max(d, key=d.get)</code> возвращает ключ с наибольшим значением.</p>` },
            { t: "code", code: py`
text = "abracadabra"
c = {}
for ch in text:
    c[ch] = c.get(ch, 0) + 1
best = max(c, key=c.get)
print(best, c[best])` },
            { t: "html", html: `<h3>Группировка</h3><p>Значением словаря может быть список: так элементы раскладывают «по корзинам».</p>` },
            { t: "code", code: py`
names = ["Асель", "Айдос", "Берик", "Бота", "Ерлан", "Алия"]
groups = {}
for name in names:
    first = name[0]
    if first not in groups:
        groups[first] = []
    groups[first].append(name)
for letter in sorted(groups):
    print(letter, ":", ", ".join(groups[letter]))` },
            { t: "note", kind: "ent", title: "Словарь или список?", html: `<p>Если нужно искать «по названию» (по имени, слову, коду) — используйте словарь. Если данные пронумерованы подряд с нуля — список.</p>` },
          ],
        },
        {
          id: "l4",
          title: "Работа с файлами",
          blocks: [
            { t: "html", html: `
              <p>Файл открывают функцией <code>open(имя, режим, encoding="utf-8")</code>. Она возвращает файловый объект, через который читают или пишут данные.</p>
              <table>
                <tr><th>Режим</th><th>Смысл</th></tr>
                <tr><td><code>"r"</code></td><td>чтение (по умолчанию). Если файла нет — <code>FileNotFoundError</code></td></tr>
                <tr><td><code>"w"</code></td><td>запись. Файл создаётся, а старое содержимое <b>стирается</b></td></tr>
                <tr><td><code>"a"</code></td><td>дозапись в конец файла (append)</td></tr>
              </table>
              <p>После работы файл нужно закрыть (<code>f.close()</code>). Удобнее использовать <b>контекстный менеджер</b> <code>with</code>: он закроет файл автоматически, даже если произошла ошибка.</p>
              <div class="note"><div class="note-title">Файлы на этом сайте</div><p>Python работает в браузере, поэтому файлы создаются в виртуальной папке. В примерах ниже нужные файлы уже подготовлены (их содержимое показано над кодом), а после выполнения программы папка очищается.</p></div>` },
            { t: "html", html: `<h3>Чтение</h3>
              <ul><li><code>f.read()</code> — весь файл одной строкой;</li>
              <li><code>f.readline()</code> — одна следующая строка;</li>
              <li><code>f.readlines()</code> — список всех строк;</li>
              <li><code>for line in f:</code> — перебор строк по одной (лучший способ для больших файлов).</li></ul>
              <p>В конце каждой прочитанной строки стоит символ <code>\\n</code> — его убирают через <code>strip()</code>.</p>` },
            { t: "code", files: { "poem.txt": "Я памятник себе воздвиг\nнерукотворный,\nк нему не зарастёт\nнародная тропа." }, code: py`
with open("poem.txt", encoding="utf-8") as f:
    text = f.read()
print(text)
print("символов:", len(text))

with open("poem.txt", encoding="utf-8") as f:
    lines = f.readlines()
print(lines[0])            # со знаком переноса в конце
print(len(lines), "строки")` },
            { t: "code", files: { "numbers.txt": "12\n-5\n30\n7\n" }, code: py`
total = 0
count = 0
with open("numbers.txt", encoding="utf-8") as f:
    for line in f:
        line = line.strip()
        if line:                   # пропускаем пустые строки
            total += int(line)
            count += 1
print("сумма:", total, "среднее:", total / count)` },
            { t: "html", html: `<h3>Запись</h3><p><code>f.write(строка)</code> записывает только строки и <b>не добавляет</b> перевод строки — его пишут сами (<code>"\\n"</code>). Также можно писать через <code>print(..., file=f)</code>.</p>` },
            { t: "code", code: py`
results = {"Аружан": 128, "Тимур": 105, "Мадина": 131}

with open("report.txt", "w", encoding="utf-8") as f:
    f.write("Результаты ЕНТ\n")
    for name, score in results.items():
        f.write(f"{name};{score}\n")

with open("report.txt", "a", encoding="utf-8") as f:
    print("Всего:", len(results), file=f)    # дозапись

with open("report.txt", encoding="utf-8") as f:
    print(f.read())` },
            { t: "code", files: { "marks.csv": "Айбек;5;4;5\nДана;3;4;4\nЕржан;5;5;5" }, code: py`
# Разбор строк вида "имя;оценка;оценка;..."
with open("marks.csv", encoding="utf-8") as f:
    for line in f:
        parts = line.strip().split(";")
        name = parts[0]
        marks = list(map(int, parts[1:]))
        print(f"{name}: средний балл {sum(marks) / len(marks):.2f}")` },
            { t: "code", code: py`
with open("нет_такого.txt") as f:
    print(f.read())` },
          ],
        },
        {
          id: "l7",
          title: "Обработка ошибок: try – except",
          blocks: [
            { t: "html", html: `<p>Ошибка во время выполнения (<b>исключение</b>) обычно останавливает программу. Конструкция <code>try – except</code> позволяет «перехватить» исключение и обработать его: вывести понятное сообщение, попросить ввести данные ещё раз и т.д.</p>
              <ul><li><code>try:</code> — код, в котором может возникнуть ошибка;</li>
              <li><code>except ТипОшибки:</code> — что делать при ошибке этого типа (блоков может быть несколько);</li>
              <li><code>else:</code> — выполняется, если ошибки <b>не было</b>;</li>
              <li><code>finally:</code> — выполняется <b>всегда</b> (например, закрыть файл).</li></ul>` },
            { t: "code", input: "0", code: py`
try:
    x = int(input())
    print(100 / x)
except ValueError:
    print("Это не целое число")
except ZeroDivisionError:
    print("На ноль делить нельзя")` },
            { t: "code", input: "abc", code: py`
try:
    x = int(input())
    print(100 / x)
except ValueError:
    print("Это не целое число")
except ZeroDivisionError:
    print("На ноль делить нельзя")` },
            { t: "html", html: `<h3>Повторный ввод и raise</h3><p><code>except Ошибка as e</code> сохраняет объект ошибки в переменную e — в нём текст сообщения. Оператор <code>raise</code> вызывает исключение самостоятельно, например при неверных по смыслу данных.</p>` },
            { t: "code", input: "abc\n-5\n17", code: py`
while True:
    try:
        age = int(input())
        if age < 0:
            raise ValueError("отрицательный возраст")
        break
    except ValueError as e:
        print("Ошибка:", e, "— попробуйте ещё раз")
print("Возраст:", age)` },
            { t: "code", files: { "data.txt": "Привет из файла!" }, code: py`
for name in ["data.txt", "missing.txt"]:
    try:
        f = open(name, encoding="utf-8")
    except FileNotFoundError:
        print(name, "— файл не найден")
    else:
        print(name, "—", f.read())
        f.close()
    finally:
        print("проверка", name, "завершена")` },
            { t: "html", html: `<table>
              <tr><th>Исключение</th><th>Когда возникает</th></tr>
              <tr><td><code>ValueError</code></td><td>неподходящее значение: <code>int("abc")</code></td></tr>
              <tr><td><code>TypeError</code></td><td>несовместимые типы: <code>"5" + 3</code></td></tr>
              <tr><td><code>ZeroDivisionError</code></td><td>деление на ноль</td></tr>
              <tr><td><code>IndexError</code> / <code>KeyError</code></td><td>нет такого индекса / ключа</td></tr>
              <tr><td><code>FileNotFoundError</code></td><td>файл не найден</td></tr>
              <tr><td><code>Exception</code></td><td>«почти любая ошибка» — перехватывать её стоит осторожно, чтобы не скрыть настоящую ошибку в коде</td></tr></table>` },
          ],
        },
        {
          id: "l8",
          title: "Форматы CSV и JSON",
          blocks: [
            { t: "html", html: `<p><b>CSV</b> (comma-separated values) — таблица в текстовом файле: одна строка — одна запись, значения разделены запятыми (или <code>;</code>). Такие файлы открываются в Excel. Модуль <code>csv</code> правильно обрабатывает кавычки и разделители внутри значений; <code>csv.DictReader</code> превращает каждую строку в словарь по заголовкам первой строки.</p>` },
            { t: "code", files: { "students.csv": "name,class,score\nАйбек,11А,120\nДана,11А,131\nЕрлан,11Б,98" }, code: py`
import csv

with open("students.csv", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))

for r in rows:
    print(r["name"], r["class"], int(r["score"]))
best = max(rows, key=lambda r: int(r["score"]))
print("Лучший результат:", best["name"])` },
            { t: "code", code: py`
import csv

data = [["город", "население"], ["Алматы", 2300000], ["Астана", 1500000]]
with open("cities.csv", "w", encoding="utf-8", newline="") as f:
    csv.writer(f).writerows(data)

with open("cities.csv", encoding="utf-8") as f:
    for row in csv.reader(f):
        print(row)` },
            { t: "html", html: `<p><b>JSON</b> — текстовый формат для обмена данными между программами и сайтами. Он очень похож на словари и списки Python.</p>
              <table><tr><th>Python</th><th>JSON</th></tr>
              <tr><td><code>dict</code></td><td>объект <code>{}</code></td></tr>
              <tr><td><code>list</code>, <code>tuple</code></td><td>массив <code>[]</code></td></tr>
              <tr><td><code>str</code>, <code>int</code>, <code>float</code></td><td>строка, число</td></tr>
              <tr><td><code>True</code> / <code>False</code> / <code>None</code></td><td><code>true</code> / <code>false</code> / <code>null</code></td></tr></table>
              <p><code>json.dumps</code> / <code>json.loads</code> переводят в строку и обратно; <code>json.dump</code> / <code>json.load</code> — сразу в файл и из файла. Параметр <code>ensure_ascii=False</code> сохраняет кириллицу читаемой.</p>` },
            { t: "code", code: py`
import json

student = {"name": "Аружан", "grade": 11, "subjects": ["информатика", "математика"], "ent": 128, "olympiad": False}
text = json.dumps(student, ensure_ascii=False, indent=2)
print(text)

with open("student.json", "w", encoding="utf-8") as f:
    json.dump(student, f, ensure_ascii=False)
with open("student.json", encoding="utf-8") as f:
    loaded = json.load(f)
print(loaded["subjects"][0], type(loaded))
print(json.loads("[1, 2, null, true]"))` },
          ],
        },
        {
          id: "l5",
          title: "Графы: хранение, обход в глубину и ширину",
          blocks: [
            { t: "html", html: `
              <p><b>Граф</b> — структура из <b>вершин</b> (узлов: города, люди) и <b>рёбер</b> (связей: дороги, дружба).</p>
              <ul><li><b>Неориентированный</b> граф — рёбра работают в обе стороны (двусторонняя дорога); <b>ориентированный</b> (орграф) — у рёбер есть направление.</li>
              <li><b>Взвешенный</b> граф — у каждого ребра есть вес (расстояние, цена, время); <b>невзвешенный</b> — все рёбра равноценны.</li></ul>
              <h3>Способ А: матрица смежности</h3>
              <p>Двумерный массив n×n: на пересечении строки i и столбца j стоит 1 (или вес), если ребро есть, и 0 — если нет. У неориентированного графа матрица симметрична.</p>` },
            { t: "code", code: py`
adj = [[0, 1, 1, 0],
       [1, 0, 1, 1],
       [1, 1, 0, 0],
       [0, 1, 0, 0]]
n = len(adj)
for v in range(n):
    neighbours = [u for u in range(n) if adj[v][u]]
    print("вершина", v, "соседи:", neighbours, "степень:", sum(adj[v]))` },
            { t: "html", html: `<h3>Способ Б: список смежности (самый популярный)</h3><p>Словарь, где ключ — вершина, а значение — список её соседей. Он занимает меньше памяти, если рёбер немного.</p>` },
            { t: "code", input: "5 4\n1 2\n1 3\n2 4\n4 5", code: py`
# Ввод графа: n вершин, m рёбер, затем рёбра
n, m = map(int, input().split())
graph = {v: [] for v in range(1, n + 1)}
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)      # для неориентированного графа — в обе стороны
print(graph)` },
            { t: "html", html: `<h3>DFS — поиск в глубину</h3><p>«Идём вглубь, пока не упрёмся в тупик, потом возвращаемся». Реализуется рекурсией (или стеком). Множество <code>visited</code> хранит уже посещённые вершины, чтобы не ходить по кругу. Применение: проверка связности, поиск циклов, выход из лабиринта.</p>` },
            { t: "code", code: py`
graph = {"A": ["B", "C"], "B": ["A", "D", "E"], "C": ["A", "F"],
         "D": ["B"], "E": ["B", "F"], "F": ["C", "E"]}

def dfs(node, visited):
    visited.add(node)
    print(node, end=" ")
    for nb in graph[node]:
        if nb not in visited:
            dfs(nb, visited)

dfs("A", set())` },
            { t: "html", html: `<h3>BFS — поиск в ширину</h3><p>Обход «слоями»: сначала все соседи стартовой вершины, потом соседи соседей и т.д. Инструмент — <b>очередь</b> (<code>deque</code> из модуля <code>collections</code>: добавляем в конец, забираем из начала). Главное применение — <b>кратчайший путь в невзвешенном графе</b>: впервые достигнув вершины, BFS находит путь с наименьшим числом рёбер.</p>` },
            { t: "code", code: py`
from collections import deque

graph = {"A": ["B", "C"], "B": ["A", "D", "E"], "C": ["A", "F"],
         "D": ["B"], "E": ["B", "F"], "F": ["C", "E"]}

def bfs(start):
    dist = {start: 0}
    queue = deque([start])
    while queue:
        v = queue.popleft()
        for nb in graph[v]:
            if nb not in dist:
                dist[nb] = dist[v] + 1
                queue.append(nb)
    return dist

print(bfs("A"))    # расстояние (число рёбер) от A до каждой вершины` },
          ],
        },
        {
          id: "l6",
          title: "Кратчайшие пути: Дейкстра и Флойд–Уоршелл",
          blocks: [
            { t: "html", html: `
              <p>Во <b>взвешенном</b> графе BFS не подходит: путь из трёх коротких рёбер может быть дешевле одного длинного. Для таких графов используют алгоритмы Дейкстры и Флойда–Уоршелла. Граф удобно хранить матрицей весов, где 0 вне диагонали означает «ребра нет».</p>
              <h3>Алгоритм Дейкстры</h3>
              <p>Находит кратчайшие расстояния <b>от одной</b> вершины до всех остальных. Это <b>жадный</b> алгоритм:</p>
              <ol><li>расстояние до старта 0, до остальных — бесконечность;</li>
              <li>выбираем непосещённую вершину u с минимальным расстоянием и помечаем её посещённой;</li>
              <li><b>релаксация</b>: для каждого соседа v проверяем, не короче ли путь через u: <code>dist[u] + w(u, v) &lt; dist[v]</code>;</li>
              <li>повторяем, пока есть непосещённые вершины.</li></ol>` },
            { t: "code", code: py`
INF = float("inf")

def dijkstra(graph, start):
    n = len(graph)
    dist = [INF] * n
    dist[start] = 0
    visited = [False] * n
    for _ in range(n):
        # 1. непосещённая вершина с минимальным dist
        u = -1
        for i in range(n):
            if not visited[i] and (u == -1 or dist[i] < dist[u]):
                u = i
        if dist[u] == INF:          # остальные вершины недостижимы
            break
        visited[u] = True
        # 2. релаксация рёбер
        for v in range(n):
            if graph[u][v] > 0 and not visited[v]:
                if dist[u] + graph[u][v] < dist[v]:
                    dist[v] = dist[u] + graph[u][v]
    return dist

#        0  1  2  3  4
g = [[0, 4, 1, 0, 0],
     [4, 0, 2, 5, 0],
     [1, 2, 0, 8, 0],
     [0, 5, 8, 0, 3],
     [0, 0, 0, 3, 0]]
print(dijkstra(g, 0))` },
            { t: "note", kind: "warn", title: "Ограничение", html: `<p>Дейкстра работает только с <b>неотрицательными</b> весами. Посещённую вершину алгоритм больше не пересматривает, а отрицательное ребро могло бы сделать путь к ней короче уже после этого.</p>` },
            { t: "html", html: `
              <h3>Алгоритм Флойда–Уоршелла</h3>
              <p>Находит кратчайшие расстояния <b>между всеми парами</b> вершин. Идея динамического программирования: для каждой промежуточной вершины k проверяем, не короче ли путь i → k → j, чем уже известный i → j. Три вложенных цикла, сложность O(n³). Работает и с отрицательными весами, если нет отрицательных циклов.</p>` },
            { t: "code", code: py`
INF = float("inf")

def floyd_warshall(graph):
    n = len(graph)
    # 0 вне диагонали — нет ребра, заменяем на бесконечность
    dist = [[0 if i == j else (graph[i][j] or INF) for j in range(n)] for i in range(n)]
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    return dist

g = [[0, 3, 0],
     [0, 0, 1],
     [2, 0, 0]]        # ориентированный граф
for row in floyd_warshall(g):
    print(*row)` },
            { t: "html", html: `
              <h3>Что выбрать</h3>
              <table>
                <tr><th>Условие</th><th>Лучший алгоритм</th></tr>
                <tr><td>Невзвешенный граф</td><td>BFS, O(n + m)</td></tr>
                <tr><td>Одна стартовая вершина, веса ≥ 0</td><td>Дейкстра, O(n²) (с кучей — O(m log n))</td></tr>
                <tr><td>Нужны расстояния между всеми парами, небольшой граф</td><td>Флойд–Уоршелл, O(n³) по времени и O(n²) по памяти</td></tr>
                <tr><td>Есть отрицательные рёбра (без отрицательных циклов)</td><td>Флойд–Уоршелл (или Беллман–Форд)</td></tr>
              </table>
              <p>Чтобы восстановить сам маршрут, а не только длину, при каждой релаксации запоминают вершину-предшественника.</p>` },
          ],
        },
      ],

      tasks: [
        {
          id: "t1",
          title: "Общие и уникальные числа",
          level: "Лёгкая",
          statement: `<p>Даны две строки, в каждой — целые числа через пробел (числа могут повторяться).</p>
            <p>Выведите в отдельных строках:</p>
            <ol><li>количество <b>различных</b> чисел в первой строке;</li>
            <li>числа, которые есть в обеих строках, по возрастанию через пробел;</li>
            <li>числа, которые есть в первой строке, но нет во второй, по возрастанию через пробел.</li></ol>
            <p>Если во 2-м или 3-м пункте чисел нет, выведите <code>нет</code>.</p>`,
          starter: py`
a = set(map(int, input().split()))
b = set(map(int, input().split()))
`,
          hint: `<p>Пересечение — <code>a &amp; b</code>, разность — <code>a - b</code>. Множество не упорядочено, поэтому перед выводом примените <code>sorted()</code>. Пустое множество ложно: <code>if common:</code>.</p>`,
          solution: py`
a = set(map(int, input().split()))
b = set(map(int, input().split()))
print(len(a))
common = sorted(a & b)
only = sorted(a - b)
print(*common if common else ["нет"])
print(*only if only else ["нет"])`,
          tests: [
            { input: "1 2 2 3 4\n3 4 5", output: "4\n3 4\n1 2" },
            { input: "5 5 5\n5", output: "1\n5\nнет" },
            { input: "1 2 3\n4 5 6", output: "3\nнет\n1 2 3", hidden: true },
            { input: "-1 0 -1 10\n10 -1 7", output: "3\n-1 10\n0", hidden: true },
            { input: "7 3 7 1\n1 3 7 9 9", output: "3\n1 3 7\nнет", hidden: true },
          ],
        },
        {
          id: "t2",
          title: "Частотный словарь из файла",
          level: "Средняя",
          statement: `<p>В файле <code>text.txt</code> записан текст из нескольких строк. Слова разделены пробелами; к словам могут примыкать знаки <code>. , ! ?</code>.</p>
            <p>Посчитайте, сколько раз встречается каждое слово <b>без учёта регистра</b> (знаки препинания отбросьте). Выведите все слова в нижнем регистре с их количеством через пробел: сначала самые частые, при равенстве — по алфавиту.</p>`,
          starter: py`
with open("text.txt", encoding="utf-8") as f:
    text = f.read()
`,
          hint: `<p><code>text.split()</code> разбивает по пробелам и переводам строк сразу. Каждое слово приведите к виду <code>w.strip(".,!?").lower()</code> и пропускайте пустые. Сортировка: <code>sorted(freq.items(), key=lambda p: (-p[1], p[0]))</code> — минус даёт порядок по убыванию количества.</p>`,
          solution: py`
with open("text.txt", encoding="utf-8") as f:
    text = f.read()
freq = {}
for w in text.split():
    w = w.strip(".,!?").lower()
    if w:
        freq[w] = freq.get(w, 0) + 1
for w, k in sorted(freq.items(), key=lambda p: (-p[1], p[0])):
    print(w, k)`,
          tests: [
            { files: { "text.txt": "Мама мыла раму.\nРаму мыла мама!" }, output: "мама 2\nмыла 2\nраму 2" },
            { files: { "text.txt": "the cat and the hat\nThe end" }, output: "the 3\nand 1\ncat 1\nend 1\nhat 1" },
            { files: { "text.txt": "Python, python! PYTHON?\nJava" }, output: "python 3\njava 1", hidden: true },
            { files: { "text.txt": "один" }, output: "один 1", hidden: true },
            { files: { "text.txt": "a b\n\nb c, c\nc ." }, output: "c 3\nb 2\na 1", hidden: true },
          ],
        },
        {
          id: "t3",
          title: "Кратчайший путь в графе (BFS)",
          level: "Сложная",
          statement: `<p>Дан неориентированный невзвешенный граф. В первой строке — число вершин <code>n</code> и рёбер <code>m</code> (вершины пронумерованы от 1 до n). Далее m строк по два числа — концы ребра. В последней строке — две вершины <code>s</code> и <code>t</code>.</p>
            <p>Выведите длину кратчайшего пути (число рёбер) из s в t или <code>-1</code>, если пути нет.</p>`,
          starter: py`
from collections import deque

n, m = map(int, input().split())
`,
          hint: `<p>Постройте список смежности <code>graph = {v: [] for v in range(1, n + 1)}</code> и добавляйте каждое ребро в обе стороны. Затем BFS из s со словарём расстояний <code>dist = {s: 0}</code>. Ответ — <code>dist.get(t, -1)</code>. Если s == t, ответ 0.</p>`,
          solution: py`
from collections import deque

n, m = map(int, input().split())
graph = {v: [] for v in range(1, n + 1)}
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)
s, t = map(int, input().split())
dist = {s: 0}
q = deque([s])
while q:
    v = q.popleft()
    for u in graph[v]:
        if u not in dist:
            dist[u] = dist[v] + 1
            q.append(u)
print(dist.get(t, -1))`,
          tests: [
            { input: "5 5\n1 2\n2 3\n3 4\n4 5\n1 3\n1 5", output: "3" },
            { input: "3 1\n1 2\n1 3", output: "-1" },
            { input: "1 0\n1 1", output: "0", hidden: true },
            { input: "6 7\n1 2\n1 3\n2 4\n3 4\n4 5\n5 6\n2 6\n1 6", output: "2", hidden: true },
            { input: "4 3\n1 2\n2 3\n3 4\n4 1", output: "3", hidden: true },
            { input: "6 4\n1 2\n2 3\n4 5\n5 6\n3 6", output: "-1", hidden: true },
          ],
        },
      ],

      quiz: [
        { type: "single", q: "Что выведет программа?", code: py`
s = {1, 2, 2, 3, 3, 3}
print(len(s))`,
          options: ["6", "3", "1", "Ошибка"], answer: 1,
          explain: "Множество хранит только уникальные элементы: {1, 2, 3}." },
        { type: "single", q: "Что выведет программа?", code: py`
d = {"a": 1, "b": 2}
d["a"] = 10
d["c"] = 3
print(d)`, codeOptions: true,
          options: ["{'a': 1, 'b': 2, 'c': 3}", "{'a': 10, 'b': 2, 'c': 3}", "{'a': 10, 'b': 2}", "KeyError: 'c'"], answer: 1,
          explain: "Присваивание по существующему ключу меняет значение, по новому — добавляет пару. Ошибки нет: KeyError бывает только при <b>чтении</b> несуществующего ключа." },
        { type: "single", q: "Что выведет программа?", code: py`
x = {}
print(type(x))`, codeOptions: true,
          options: ["<class 'set'>", "<class 'dict'>", "<class 'list'>", "<class 'tuple'>"], answer: 1,
          explain: "Пустые фигурные скобки создают пустой <b>словарь</b>. Пустое множество создаётся только через <code>set()</code>." },
        { type: "single", q: "Что выведет программа?", code: py`
d = {"x": 5}
print(d.get("y", 0))`,
          options: ["None", "0", "KeyError", "5"], answer: 1,
          explain: "<code>get</code> не вызывает ошибку: если ключа нет, возвращается второй аргумент — значение по умолчанию (0)." },
        { type: "single", q: "В каком режиме нужно открыть файл, чтобы <b>дописать</b> строки в конец, не стирая содержимое?",
          options: ["\"r\"", "\"w\"", "\"a\"", "\"x\""], answer: 2,
          explain: "\"a\" (append) — дозапись. Режим \"w\" стирает файл, \"r\" — только чтение." },
        { type: "single", q: "Какая структура данных используется в алгоритме обхода графа в ширину (BFS)?",
          options: ["Стек", "Очередь", "Двоичная куча", "Матрица"], answer: 1,
          explain: "BFS обрабатывает вершины в порядке обнаружения — первым пришёл, первым ушёл, то есть очередь. DFS использует стек (или рекурсию)." },
        { type: "multiple", q: "Что может быть <b>ключом</b> словаря?", codeOptions: true,
          options: ["5", "\"name\"", "(1, 2)", "[1, 2]", "3.14"], answer: [0, 1, 2, 4],
          explain: "Ключ должен быть неизменяемым (хешируемым): числа, строки и кортежи подходят. Список изменяем, поэтому <code>d[[1, 2]]</code> вызывает TypeError." },
        { type: "multiple", q: "Выберите верные утверждения о работе с файлами.",
          options: ["Режим <code>\"w\"</code> стирает прежнее содержимое файла", "Конструкция <code>with</code> закрывает файл автоматически", "<code>f.read()</code> возвращает список строк", "<code>f.write()</code> сам добавляет перевод строки", "Открытие несуществующего файла на чтение вызывает <code>FileNotFoundError</code>"], answer: [0, 1, 4],
          explain: "<code>read()</code> возвращает одну строку со всем текстом, список строк даёт <code>readlines()</code>. <code>write()</code> записывает ровно то, что передали: \\n нужно добавить самостоятельно." },
        { type: "matching", q: "Пусть a = {1, 2, 3, 4}, b = {3, 4, 5}. Сопоставьте операцию и результат.",
          pairs: [
            { left: "a | b", right: "{1, 2, 3, 4, 5}" },
            { left: "a & b", right: "{3, 4}" },
            { left: "a - b", right: "{1, 2}" },
            { left: "a ^ b", right: "{1, 2, 5}" },
          ], distractors: ["{5}"],
          explain: "| — объединение, &amp; — общие элементы, − — элементы a, которых нет в b, ^ — элементы, которые есть ровно в одном из множеств. {5} было бы результатом b − a." },
        { type: "matching", q: "Сопоставьте алгоритм и его назначение.",
          pairs: [
            { left: "BFS", right: "кратчайший путь в невзвешенном графе" },
            { left: "DFS", right: "обход в глубину (стек или рекурсия)" },
            { left: "Дейкстра", right: "кратчайшие пути от одной вершины при весах ≥ 0" },
            { left: "Флойд–Уоршелл", right: "кратчайшие пути между всеми парами вершин, O(n³)" },
          ], distractors: ["сортировка вершин по возрастанию"],
          explain: "BFS идёт слоями и находит пути с минимальным числом рёбер. Дейкстра — жадный алгоритм для одного источника. Флойд — динамическое программирование для всех пар." },
        { type: "fill", q: "Что выведет программа?", code: py`
d = {"a": 1, "b": 2, "c": 3}
print(sum(d.values()))`, answer: ["6"],
          explain: "<code>values()</code> возвращает значения 1, 2, 3; их сумма — 6." },
        { type: "fill", q: "Что выведет программа?", code: py`
c = {}
for w in "a b a c a".split():
    c[w] = c.get(w, 0) + 1
print(c["a"])`, answer: ["3"],
          explain: "Классический счётчик: слово a встречается 3 раза." },
        { type: "fill", q: "Что выведет команда?", code: py`print(len(set("mississippi")))`, answer: ["4"],
          explain: "Уникальные буквы: m, i, s, p — четыре." },
        { type: "fill", q: "Впишите ключевое слово, чтобы файл закрылся автоматически.", code: py`
___ open("data.txt") as f:
    text = f.read()`, answer: ["with"],
          explain: "Контекстный менеджер <code>with</code> закрывает файл при выходе из блока, даже если внутри произошла ошибка." },
        { type: "single", q: "Что выведет программа?", code: py`
try:
    print(int("12a"))
except ValueError:
    print("ошибка")
finally:
    print("конец")`, codeOptions: true,
          options: ["12", "ошибка", "ошибка\nконец", "конец"], answer: 2,
          explain: "<code>int(\"12a\")</code> вызывает ValueError, срабатывает except. Блок <code>finally</code> выполняется всегда." },
        { type: "fill", q: "Какой блок конструкции try выполняется всегда — и при ошибке, и без неё?", answer: ["finally"], ignoreCase: true,
          explain: "<code>finally</code> выполняется в любом случае; <code>else</code> — только если ошибки не было." },
      ],
    },

    /* ====================================================
       МОДУЛЬ 8. Системы счисления и мини-проекты
       ==================================================== */
    {
      id: "m8",
      icon: "🎲",
      title: "Системы счисления и мини-проекты",
      summary: "Модуль random, позиционные системы счисления, bin/oct/hex, перевод между системами; проекты: угадайка, генератор паролей, калькулятор систем счисления.",
      lessons: [
        {
          id: "l1",
          title: "Модуль random",
          blocks: [
            { t: "html", html: `
              <p>Модуль <code>random</code> генерирует <b>псевдослучайные</b> числа — они вычисляются по формуле, но выглядят случайными.</p>
              <table>
                <tr><th>Функция</th><th>Что возвращает</th></tr>
                <tr><td><code>randint(a, b)</code></td><td>случайное целое из [a; b], оба конца включены</td></tr>
                <tr><td><code>randrange(a, b, step)</code></td><td>случайное из <code>range(a, b, step)</code> — b не включается</td></tr>
                <tr><td><code>random()</code></td><td>вещественное из [0; 1)</td></tr>
                <tr><td><code>uniform(a, b)</code></td><td>вещественное из [a; b]</td></tr>
                <tr><td><code>choice(seq)</code></td><td>случайный элемент последовательности</td></tr>
                <tr><td><code>sample(seq, k)</code></td><td>список из k <b>разных</b> элементов</td></tr>
                <tr><td><code>shuffle(lst)</code></td><td>перемешивает список на месте, возвращает None</td></tr>
                <tr><td><code>seed(x)</code></td><td>задаёт начальное значение — последовательность становится воспроизводимой</td></tr>
              </table>` },
            { t: "code", code: py`
import random

print(random.randint(1, 6), random.randint(1, 6))     # кубик
print(round(random.random(), 3))
print(random.choice(["камень", "ножницы", "бумага"]))
print(random.sample(range(1, 50), 6))                 # лотерея 6 из 49
cards = ["A", "K", "Q", "J", "10"]
random.shuffle(cards)
print(cards)` },
            { t: "html", html: `<p>Запустите пример несколько раз — результаты будут разными. С <code>seed</code> они повторяются при каждом запуске; это удобно для отладки и тестов.</p>` },
            { t: "code", code: py`
import random

random.seed(2026)
print([random.randint(1, 100) for _ in range(5)])
random.seed(2026)
print([random.randint(1, 100) for _ in range(5)])     # тот же список` },
            { t: "code", code: py`
# Эксперимент: частота выпадения граней кубика при 60 000 бросках
import random

counts = {face: 0 for face in range(1, 7)}
for _ in range(60000):
    counts[random.randint(1, 6)] += 1
for face, k in counts.items():
    print(face, k, "#" * (k // 500))` },
          ],
        },
        {
          id: "l2",
          title: "Системы счисления",
          blocks: [
            { t: "html", html: `
              <p>В <b>позиционной</b> системе счисления значение цифры зависит от её позиции. Основание системы — количество используемых цифр: в двоичной 0 и 1, в восьмеричной 0…7, в шестнадцатеричной 0…9 и A…F (A = 10, …, F = 15).</p>
              <h3>Перевод в десятичную систему</h3>
              <p>Каждую цифру умножают на основание в степени её позиции (справа, начиная с 0) и складывают:<br>
              1011₂ = 1·2³ + 0·2² + 1·2¹ + 1·2⁰ = 8 + 0 + 2 + 1 = 11.<br>
              2D₁₆ = 2·16 + 13 = 45.</p>
              <p>В Python это делает <code>int(строка, основание)</code> (основание от 2 до 36).</p>` },
            { t: "code", code: py`
print(int("1011", 2), int("17", 8), int("2D", 16), int("Z", 36))

# То же вручную по схеме Горнера: n = n * основание + цифра
s, base = "2D", 16
n = 0
for ch in s:
    n = n * base + int(ch, 16)
print(n)` },
            { t: "html", html: `<h3>Перевод из десятичной системы</h3><p>Число делят на основание с остатком, пока частное не станет 0. Остатки, записанные <b>в обратном порядке</b>, — это цифры числа. Встроенные функции: <code>bin()</code>, <code>oct()</code>, <code>hex()</code> (с префиксами 0b, 0o, 0x) и <code>format(n, "b"/"o"/"X")</code> (без префиксов).</p>` },
            { t: "code", code: py`
n = 45
digits = ""
while n > 0:
    print(f"{n} : 2 = {n // 2}, остаток {n % 2}")
    digits = str(n % 2) + digits
    n //= 2
print("45 в двоичной:", digits)
print(bin(45), oct(45), hex(45))
print(format(45, "b"), format(45, "o"), format(45, "X"), f"{45:08b}")` },
            { t: "html", html: `<h3>Связь систем 2, 8 и 16</h3><p>8 = 2³ и 16 = 2⁴, поэтому каждая восьмеричная цифра — это группа из 3 бит (триада), а шестнадцатеричная — из 4 бит (тетрада). Группы отсчитывают <b>справа</b>:<br>
              101101₂ → 101|101 → 55₈; 101101₂ → 0010|1101 → 2D₁₆.</p>` },
            { t: "note", kind: "ent", title: "Типовые задачи ЕНТ", html: `<p>• «Сколько единиц в двоичной записи числа?» — <code>bin(n).count("1")</code>.<br>
              • «Сколько значащих нулей?» — <code>bin(n)[2:].count("0")</code> (срез убирает префикс 0b).<br>
              • «Сколько разрядов (бит) нужно для числа n?» — <code>len(bin(n)) - 2</code> или <code>n.bit_length()</code>.<br>
              • Максимальная цифра в системе с основанием k равна k − 1.</p>` },
            { t: "code", code: py`
for n in [7, 8, 100, 255, 1024]:
    b = bin(n)[2:]
    print(n, b, "единиц:", b.count("1"), "нулей:", b.count("0"), "бит:", n.bit_length())` },
          ],
        },
        {
          id: "l3",
          title: "Проект: числовая угадайка",
          blocks: [
            { t: "html", html: `<p>Классическая игра: компьютер загадывает число от 1 до 100, игрок угадывает и получает подсказки «больше» / «меньше». В настоящей игре число выбирает <code>random.randint(1, 100)</code>; здесь, чтобы заранее подставить попытки в поле ввода, загаданное число зафиксировано.</p>` },
            { t: "code", input: "50\n25\n37\n31\n34", code: py`
import random

secret = 34          # в игре: random.randint(1, 100)
tries = 0
while True:
    guess = int(input("Ваше число: "))
    tries += 1
    if guess < secret:
        print("Загаданное число больше")
    elif guess > secret:
        print("Загаданное число меньше")
    else:
        print(f"Угадали за {tries} попыток!")
        break` },
            { t: "html", html: `<h3>Наоборот: угадывает компьютер</h3><p>Оптимальная стратегия — каждый раз называть середину оставшегося диапазона. Это бинарный поиск: для чисел от 1 до 100 хватает не более 7 попыток, потому что 2⁷ = 128 ≥ 100.</p>` },
            { t: "code", code: py`
import random

for secret in [73, 1, 100, random.randint(1, 100)]:
    lo, hi = 1, 100
    tries = 0
    while True:
        guess = (lo + hi) // 2
        tries += 1
        if guess == secret:
            break
        elif guess < secret:
            lo = guess + 1
        else:
            hi = guess - 1
    print(f"Загадано {secret}: угадано за {tries} попыток")` },
          ],
        },
        {
          id: "l4",
          title: "Проект: генератор паролей",
          blocks: [
            { t: "html", html: `<p>Надёжный пароль длинный и содержит строчные и заглавные буквы, цифры и спецсимволы. Готовые наборы символов есть в модуле <code>string</code>: <code>ascii_lowercase</code>, <code>ascii_uppercase</code>, <code>digits</code>, <code>punctuation</code>.</p>
              <p>Алгоритм: берём по одному символу из каждой группы (чтобы все группы точно были в пароле), добираем до нужной длины случайными символами из всех групп и перемешиваем.</p>` },
            { t: "code", code: py`
import random
import string

def make_password(length=12, special=True):
    groups = [string.ascii_lowercase, string.ascii_uppercase, string.digits]
    if special:
        groups.append("!@#$%&*?")
    chars = [random.choice(g) for g in groups]
    alphabet = "".join(groups)
    chars += [random.choice(alphabet) for _ in range(length - len(chars))]
    random.shuffle(chars)
    return "".join(chars)

for _ in range(3):
    print(make_password())
print(make_password(20, special=False))` },
            { t: "note", kind: "warn", title: "Для настоящих паролей", html: `<p>Модуль <code>random</code> предсказуем и годится для игр и учебных задач. Для настоящих паролей в Python есть модуль <code>secrets</code> с той же идеей: <code>secrets.choice(alphabet)</code>.</p>` },
            { t: "code", code: py`
# Проверка надёжности пароля
def strength(p):
    score = 0
    score += len(p) >= 8
    score += len(p) >= 12
    score += any(c.islower() for c in p)
    score += any(c.isupper() for c in p)
    score += any(c.isdigit() for c in p)
    score += any(not c.isalnum() for c in p)
    return ["очень слабый", "очень слабый", "слабый", "слабый", "средний", "надёжный", "очень надёжный"][score]

for p in ["12345", "qwerty123", "Python2026", "k#9Lm!x2Qz7@"]:
    print(p, "—", strength(p))` },
          ],
        },
        {
          id: "l5",
          title: "Проект: калькулятор систем счисления",
          blocks: [
            { t: "html", html: `<p>Соберём всё вместе: две функции переводят число в любую систему с основанием от 2 до 36 и обратно. Цифры больше 9 обозначаются латинскими буквами: <code>DIGITS[k]</code> — цифра со значением k.</p>` },
            { t: "code", input: "2026\n7E5\n16", code: py`
DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

def to_base(n, b):
    if n == 0:
        return "0"
    res = ""
    while n > 0:
        res = DIGITS[n % b] + res
        n //= b
    return res

def from_base(s, b):
    n = 0
    for ch in s.upper():
        n = n * b + DIGITS.index(ch)
    return n

n = int(input("Число в десятичной системе: "))
for b in (2, 3, 8, 16):
    print(f"  в {b}-ичной: {to_base(n, b)}")
s = input("Число для перевода в десятичную: ")
b = int(input("Его основание: "))
print(f"{s} ({b}) = {from_base(s, b)} (10)")` },
            { t: "html", html: `<p>Попробуйте расширить калькулятор: перевод сразу между двумя любыми системами, проверку, что все цифры допустимы для основания, сложение чисел в двоичной системе. Перевод между любыми системами — задача 3 этого модуля.</p>` },
          ],
        },
      ],

      tasks: [
        {
          id: "t1",
          title: "Двоичная запись",
          level: "Лёгкая",
          statement: `<p>Дано целое число <code>n</code> (0 ≤ n ≤ 10<sup>9</sup>). В первой строке выведите его двоичную запись (без префикса <code>0b</code>), во второй — количество единиц в ней.</p>`,
          starter: py`
n = int(input())
`,
          hint: `<p><code>bin(n)</code> возвращает строку с префиксом <code>0b</code> — уберите его срезом <code>[2:]</code> или используйте <code>format(n, "b")</code>. Единицы считает метод строки <code>count</code>.</p>`,
          solution: py`
n = int(input())
b = format(n, "b")
print(b)
print(b.count("1"))`,
          tests: [
            { input: "10", output: "1010\n2" },
            { input: "255", output: "11111111\n8" },
            { input: "0", output: "0\n0", hidden: true },
            { input: "1", output: "1\n1", hidden: true },
            { input: "1024", output: "10000000000\n1", hidden: true },
            { input: "123456789", output: "111010110111100110100010101\n16", hidden: true },
          ],
        },
        {
          id: "t2",
          title: "Перевод в k-ичную систему",
          level: "Средняя",
          statement: `<p>Даны целое число <code>n</code> (0 ≤ n ≤ 10<sup>9</sup>) и основание <code>k</code> (2 ≤ k ≤ 16), каждое на отдельной строке. Выведите запись числа n в системе с основанием k. Цифры больше 9 обозначайте <b>заглавными</b> буквами A–F.</p>
            <p>Реализуйте алгоритм деления с остатком сами — <code>format</code> работает только для систем 2, 8 и 16.</p>`,
          starter: py`
n = int(input())
k = int(input())
DIGITS = "0123456789ABCDEF"
`,
          hint: `<p>Пока n &gt; 0: добавляйте <code>DIGITS[n % k]</code> <b>в начало</b> строки результата и делите <code>n //= k</code>. Отдельно обработайте n = 0 — цикл не выполнится ни разу.</p>`,
          solution: py`
n = int(input())
k = int(input())
DIGITS = "0123456789ABCDEF"
if n == 0:
    print(0)
else:
    res = ""
    while n > 0:
        res = DIGITS[n % k] + res
        n //= k
    print(res)`,
          tests: [
            { input: "255\n16", output: "FF" },
            { input: "10\n2", output: "1010" },
            { input: "1000\n3", output: "1101001" },
            { input: "0\n7", output: "0", hidden: true },
            { input: "100\n8", output: "144", hidden: true },
            { input: "4095\n16", output: "FFF", hidden: true },
            { input: "31\n5", output: "111", hidden: true },
            { input: "1000000000\n12", output: "23AA93854", hidden: true },
          ],
        },
        {
          id: "t3",
          title: "Перевод между любыми системами",
          level: "Сложная",
          statement: `<p>В первой строке записано число <code>s</code> в системе с основанием <code>a</code>, во второй — <code>a</code>, в третьей — <code>b</code> (2 ≤ a, b ≤ 36). Цифры больше 9 — латинские буквы A–Z (A = 10, …, Z = 35), буквы могут быть строчными.</p>
            <p>Переведите число в систему с основанием b и выведите его (буквы заглавные). Если в записи s есть символ, недопустимый для основания a (например, 9 в восьмеричной), выведите <code>ERROR</code>.</p>
            <p>Не используйте <code>int(s, a)</code> — переведите вручную.</p>`,
          starter: py`
DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
s = input().strip().upper()
a = int(input())
b = int(input())
`,
          hint: `<p>Два шага через десятичную систему. 1) Схема Горнера: для каждой цифры <code>d = DIGITS.find(ch)</code>; если <code>d == -1</code> или <code>d &gt;= a</code> — ERROR; иначе <code>n = n * a + d</code>. 2) Перевод n в систему b делением с остатком (не забудьте n = 0).</p>`,
          solution: py`
DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
s = input().strip().upper()
a = int(input())
b = int(input())
n = 0
ok = True
for ch in s:
    d = DIGITS.find(ch)
    if d == -1 or d >= a:
        ok = False
        break
    n = n * a + d
if not ok:
    print("ERROR")
elif n == 0:
    print(0)
else:
    res = ""
    while n > 0:
        res = DIGITS[n % b] + res
        n //= b
    print(res)`,
          tests: [
            { input: "FF\n16\n2", output: "11111111" },
            { input: "1010\n2\n10", output: "10" },
            { input: "19\n8\n10", output: "ERROR" },
            { input: "777\n8\n16", output: "1FF", hidden: true },
            { input: "Z\n36\n10", output: "35", hidden: true },
            { input: "0\n10\n2", output: "0", hidden: true },
            { input: "zz\n36\n16", output: "50F", hidden: true },
            { input: "HELLO\n36\n10", output: "29234652", hidden: true },
            { input: "12\n3\n3", output: "12", hidden: true },
            { input: "1G\n16\n10", output: "ERROR", hidden: true },
          ],
        },
      ],

      quiz: [
        { type: "single", q: "Что выведет команда?", code: py`print(int("101", 2))`,
          options: ["101", "5", "3", "Ошибка"], answer: 1,
          explain: "101₂ = 1·4 + 0·2 + 1·1 = 5." },
        { type: "single", q: "Что выведет команда?", code: py`print(hex(255))`,
          options: ["ff", "0xff", "FF", "0xFF"], answer: 1,
          explain: "<code>hex</code> возвращает строку с префиксом <code>0x</code> и строчными буквами. Без префикса и заглавными — <code>format(255, \"X\")</code>." },
        { type: "single", q: "Сколько единиц в двоичной записи числа 15?",
          options: ["1", "2", "4", "5"], answer: 2,
          explain: "15 = 8 + 4 + 2 + 1 = 1111₂ — четыре единицы." },
        { type: "single", q: "Какие значения может вернуть <code>random.randint(1, 6)</code>?",
          options: ["1, 2, 3, 4, 5", "1, 2, 3, 4, 5, 6", "0, 1, 2, 3, 4, 5, 6", "Любое вещественное число от 1 до 6"], answer: 1,
          explain: "У <code>randint(a, b)</code> оба конца включены — в отличие от <code>range</code> и <code>randrange</code>." },
        { type: "single", q: "Зачем вызывают <code>random.seed(42)</code>?",
          options: ["Чтобы последовательность «случайных» чисел повторялась при каждом запуске", "Чтобы числа были более случайными", "Чтобы randint возвращал только 42", "Чтобы очистить модуль random"], answer: 0,
          explain: "Генератор псевдослучайный: при одинаковом начальном значении (seed) он выдаёт одну и ту же последовательность. Это удобно для отладки и тестов." },
        { type: "multiple", q: "Какие выражения равны 10?", codeOptions: true,
          options: ["int(\"1010\", 2)", "int(\"10\", 16)", "int(\"12\", 8)", "int(\"101\", 2)", "int(\"A\", 16)"], answer: [0, 2, 4],
          explain: "1010₂ = 8 + 2 = 10; 12₈ = 8 + 2 = 10; A₁₆ = 10. А 10₁₆ = 16 и 101₂ = 5." },
        { type: "multiple", q: "Какие выражения возвращают один случайный элемент списка a?", codeOptions: true,
          options: ["random.choice(a)", "random.shuffle(a)", "random.sample(a, 1)[0]", "random.randint(a)", "a[random.randint(0, len(a) - 1)]"], answer: [0, 2, 4],
          explain: "<code>shuffle</code> перемешивает список и возвращает None. <code>randint</code> требует два числа. Последний вариант выбирает случайный индекс — верно, ведь randint включает правую границу len(a) − 1." },
        { type: "matching", q: "Сопоставьте выражение и результат.",
          pairs: [
            { left: "bin(10)", right: "0b1010" },
            { left: "oct(10)", right: "0o12" },
            { left: "hex(10)", right: "0xa" },
            { left: "format(10, 'X')", right: "A" },
          ], distractors: ["0x10", "1010"],
          explain: "bin, oct и hex возвращают строки с префиксами 0b, 0o, 0x. format с кодом X — шестнадцатеричная запись заглавными буквами без префикса." },
        { type: "matching", q: "Сопоставьте перевод и способ.",
          pairs: [
            { left: "Двоичная → восьмеричная", right: "группы по 3 бита справа" },
            { left: "Двоичная → шестнадцатеричная", right: "группы по 4 бита справа" },
            { left: "Десятичная → любая", right: "деление на основание с остатком" },
            { left: "Любая → десятичная", right: "сумма цифр, умноженных на степени основания" },
          ], distractors: ["группы по 2 бита справа"],
          explain: "8 = 2³ и 16 = 2⁴, поэтому восьмеричная цифра — 3 бита, шестнадцатеричная — 4. В десятичную переводят по развёрнутой записи, из десятичной — делением с остатком." },
        { type: "fill", q: "Чему равно число 1101₂ в десятичной системе?", answer: ["13"],
          explain: "1·8 + 1·4 + 0·2 + 1·1 = 13." },
        { type: "fill", q: "Что выведет команда?", code: py`print(int("FF", 16) + 1)`, answer: ["256"],
          explain: "FF₁₆ = 255, плюс 1 — 256." },
        { type: "fill", q: "Какая наибольшая цифра используется в семеричной системе счисления?", answer: ["6"],
          explain: "В системе с основанием k используются цифры от 0 до k − 1." },
        { type: "fill", q: "Что выведет команда?", code: py`print(f"{5:08b}")`, answer: ["00000101"],
          explain: "Код <code>b</code> — двоичная запись, <code>08</code> — ширина 8 с дополнением нулями слева." },
      ],
    },
  ],
};
