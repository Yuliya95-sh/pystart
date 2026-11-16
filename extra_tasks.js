/* =========================================================
   PyStart — дополнительные задачи для отработки.
   Подключается после courses_data.js и добавляет задачи в модули
   с пометкой extra: true (они показываются отдельным списком и
   не влияют на зачёт модуля).

   Формат задачи такой же, как в courses_data.js, но у тестов
   можно НЕ писать output: ожидаемый вывод сайт вычислит сам,
   запустив эталонное решение (solution) на входных данных.
   ========================================================= */

// Стандартный ввод графа для задач модуля 7
const GRAPH_FORMAT = `<p class="small muted"><b>Формат графа.</b> Первая строка — имена всех вершин через пробел. Вторая — число рёбер m. Далее m строк «U V W»: ребро между U и V с весом W (граф неориентированный).</p>`;
const GRAPH_READ = py`
vertices = input().split()
m = int(input())
g = {v: {} for v in vertices}
for _ in range(m):
    u, v, w = input().split()
    g[u][v] = int(w)
    g[v][u] = int(w)
` + "\n\n";

// Тестовые графы
const GR = {
  // граф из задачи «Степень вершины»
  small: "A B C D\n4\nA B 5\nA C 3\nB C 2\nB D 4",
  // граф из итоговой задачи
  star: "A B C D E\n7\nA B 6\nA C 2\nB C 4\nB D 5\nC D 3\nC E 8\nD E 1",
  // граф с изолированной вершиной
  iso: "A B C\n1\nB C 2",
  // большой граф из 8 вершин
  big: "A B C D E F G H\n13\nA B 4\nA C 2\nB C 1\nB D 5\nC D 8\nC E 10\nD E 2\nD F 6\nE F 2\nE G 5\nF G 3\nG H 1\nF H 9",
  // несвязный граф
  parts: "A B C D E F G\n4\nA B 1\nB C 2\nD E 3\nF D 1",
  // граф с несколькими кратчайшими путями A→F
  ties: "A B C D E F\n7\nA B 1\nA C 1\nB D 1\nC D 1\nD F 2\nB E 2\nE F 1",
  // два треугольника, соединённые мостом C–D
  bridge: "A B C D E F\n7\nA B 1\nB C 1\nC A 1\nC D 1\nD E 1\nE F 1\nF D 1",
  // цепочка
  chain: "A B C D\n3\nA B 1\nB C 1\nC D 1",
  // граф с единственными кратчайшими путями (для Флойда с маршрутами)
  uniq: "A B C D E\n6\nA B 3\nB C 4\nA C 9\nC D 2\nB D 8\nD E 1",
};

window.EXTRA_TASKS = {
  /* ==================== МОДУЛЬ 5: списки и матрицы ==================== */
  m5: [
    {
      id: "x1", title: "Индексы и замена элементов", level: "Лёгкая",
      statement: `<p>Дан список целых чисел в одной строке через пробел (не меньше 3 чисел). Выведите:</p>
        <ol><li>первый и последний элементы через пробел;</li>
        <li>средний элемент; если длина чётная — два средних через пробел;</li>
        <li>элемент с индексом −3 и его номер <b>по счёту с начала</b> (нумерация с 1);</li>
        <li>список после замены второго элемента на 100, а последнего — на 0 (через пробел);</li>
        <li>попытайтесь вывести элемент с индексом, равным длине списка; ошибку перехватите через <code>try / except IndexError</code> и выведите <code>IndexError</code>.</li></ol>`,
      starter: py`
a = list(map(int, input().split()))
n = len(a)
`,
      hint: `<p>Средние элементы: при нечётном n — <code>a[n // 2]</code>, при чётном — <code>a[n // 2 - 1]</code> и <code>a[n // 2]</code>. Индекс −3 — это индекс n − 3, значит по счёту он (n − 3) + 1 = n − 2.</p>`,
      solution: py`
a = list(map(int, input().split()))
n = len(a)
print(a[0], a[-1])
if n % 2 == 1:
    print(a[n // 2])
else:
    print(a[n // 2 - 1], a[n // 2])
print(a[-3], n - 2)
a[1] = 100
a[-1] = 0
print(*a)
try:
    print(a[n])
except IndexError:
    print("IndexError")`,
      tests: [
        { input: "3 8 15 4 23 42 16 7 9 1" },
        { input: "5 1 9" },
        { input: "1 2 3 4 5 6 7", hidden: true },
        { input: "-1 -2 -3 -4", hidden: true },
        { input: "10 20 30 40 50 60 70 80 90 100 110", hidden: true },
      ],
    },
    {
      id: "x2", title: "Срезы", level: "Лёгкая",
      statement: `<p>Дан список целых чисел (не меньше 7). Каждый пункт получите <b>одним срезом</b> и выведите элементы через пробел, каждый пункт — с новой строки:</p>
        <ol><li>первые 5 элементов;</li><li>последние 3 элемента;</li><li>элементы с чётными индексами (0, 2, 4, …);</li>
        <li>элементы с 3-го по 7-й включительно (по счёту с 1);</li><li>список в обратном порядке;</li><li>каждый третий элемент, начиная с последнего.</li></ol>`,
      starter: py`
data = list(map(int, input().split()))
`,
      hint: `<p>3-й по счёту элемент имеет индекс 2, 7-й — индекс 6, а правая граница среза не включается: <code>data[2:7]</code>. Каждый третий с конца: шаг −3.</p>`,
      solution: py`
data = list(map(int, input().split()))
print(*data[:5])
print(*data[-3:])
print(*data[::2])
print(*data[2:7])
print(*data[::-1])
print(*data[::-3])`,
      tests: [
        { input: "3 8 15 4 23 42 16 7 9 1" },
        { input: "1 2 3 4 5 6 7" },
        { input: "9 8 7 6 5 4 3 2 1 0 -1 -2", hidden: true },
        { input: "5 5 5 5 5 5 5 5", hidden: true },
      ],
    },
    {
      id: "x3", title: "Изменение списка срезами", level: "Средняя",
      statement: `<p>Дан список целых чисел (не меньше 7). Выполните по порядку и <b>после каждого действия</b> выведите список через пробел:</p>
        <ol><li>замените срез <code>data[2:5]</code> на <code>[0, 0, 0]</code>;</li>
        <li>удалите первые три элемента с помощью <code>del</code>;</li>
        <li>вставьте элементы <code>-1, -2</code> перед элементом с индексом 4 присваиванием среза <code>data[4:4] = ...</code>.</li></ol>`,
      starter: py`
data = list(map(int, input().split()))
`,
      hint: `<p><code>del data[:3]</code> удаляет первые три элемента. Пустой срез <code>data[4:4]</code> ничего не заменяет, а вставляет новые элементы на позицию 4.</p>`,
      solution: py`
data = list(map(int, input().split()))
data[2:5] = [0, 0, 0]
print(*data)
del data[:3]
print(*data)
data[4:4] = [-1, -2]
print(*data)`,
      tests: [
        { input: "3 8 15 4 23 42 16 7 9 1" },
        { input: "1 2 3 4 5 6 7" },
        { input: "10 20 30 40 50 60 70 80", hidden: true },
        { input: "-5 -4 -3 -2 -1 0 1 2 3 4 5 6", hidden: true },
      ],
    },
    {
      id: "x4", title: "Методы списков", level: "Средняя",
      statement: `<p>В первой строке — целые числа через пробел, во второй — число x.</p>
        <ol><li>Добавьте в конец списка 99, а в начало вставьте −1.</li>
        <li>Удалите <b>первое вхождение</b> минимального элемента (уже после вставок).</li>
        <li>Выведите получившийся список через пробел.</li>
        <li>Во второй строке выведите, сколько раз x встречается в списке, и индекс его первого вхождения через пробел. Если x в списке нет, выведите <code>нет</code>.</li></ol>`,
      starter: py`
a = list(map(int, input().split()))
x = int(input())
`,
      hint: `<p>Методы: <code>append</code>, <code>insert(0, ...)</code>, <code>remove(min(a))</code>, <code>count</code>, <code>index</code>. Перед <code>index</code> проверьте <code>x in a</code>, иначе будет ValueError.</p>`,
      solution: py`
a = list(map(int, input().split()))
x = int(input())
a.append(99)
a.insert(0, -1)
a.remove(min(a))
print(*a)
if x in a:
    print(a.count(x), a.index(x))
else:
    print("нет")`,
      tests: [
        { input: "5 3 8 3\n3" },
        { input: "4 -7 2\n-1" },
        { input: "10\n5", hidden: true },
        { input: "-1 -1\n-1", hidden: true },
        { input: "100 99\n99", hidden: true },
      ],
    },
    {
      id: "x5", title: "Сортировка чисел и слов", level: "Средняя",
      statement: `<p>В первой строке — целые числа, во второй — слова (через пробел). Выведите четыре строки:</p>
        <ol><li>числа по возрастанию;</li><li>числа по убыванию;</li>
        <li>числа в <b>исходном</b> порядке — докажите, что <code>sorted()</code> не меняет исходный список;</li>
        <li>слова, отсортированные по длине, а слова одинаковой длины — по алфавиту.</li></ol>`,
      starter: py`
a = list(map(int, input().split()))
words = input().split()
`,
      hint: `<p>Для строк 1–2 используйте <code>sorted(a)</code> и <code>sorted(a, reverse=True)</code> — они создают новые списки. Если вызвать <code>a.sort()</code>, третья строка уже не совпадёт с исходной. Ключ сортировки слов: <code>key=lambda w: (len(w), w)</code>.</p>`,
      solution: py`
a = list(map(int, input().split()))
words = input().split()
print(*sorted(a))
print(*sorted(a, reverse=True))
print(*a)
print(*sorted(words, key=lambda w: (len(w), w)))`,
      tests: [
        { input: "5 2 9 1 7\nкот слон ёж мышь кит" },
        { input: "3 3 -1\nbb a ccc aa b" },
        { input: "10\nпитон", hidden: true },
        { input: "-5 0 5 -10 10\nдом сад лес нос рот", hidden: true },
      ],
    },
    {
      id: "x6", title: "Статистика без встроенных функций", level: "Средняя",
      statement: `<p>Дана строка с целыми числами через пробел (она может быть пустой). Не используя <code>sum</code>, <code>min</code>, <code>max</code>, <code>sort</code> и <code>sorted</code>, выведите:</p>
        <ol><li>сумму;</li><li>среднее арифметическое с двумя знаками после точки;</li><li>максимум и минимум через пробел;</li>
        <li>второй по величине <b>различный</b> элемент, найденный за один проход по списку; если его нет — <code>нет</code>.</li></ol>
        <p>Если список пуст, выведите одну строку <code>пусто</code>.</p>`,
      starter: py`
a = list(map(int, input().split()))
`,
      hint: `<p>Храните две переменные: <code>first</code> (максимум) и <code>second</code>. Если x &gt; first — старый максимум становится вторым; иначе если x ≠ first и x &gt; second — обновляем second. Начальное значение — <code>None</code>.</p>`,
      solution: py`
a = list(map(int, input().split()))
if not a:
    print("пусто")
else:
    s = 0
    mx = mn = a[0]
    for x in a:
        s += x
        if x > mx:
            mx = x
        if x < mn:
            mn = x
    print(s)
    print(f"{s / len(a):.2f}")
    print(mx, mn)
    first = second = None
    for x in a:
        if first is None or x > first:
            second = first
            first = x
        elif x != first and (second is None or x > second):
            second = x
    print(second if second is not None else "нет")`,
      tests: [
        { input: "4 9 2 15 7 12" },
        { input: "5" },
        { input: "\n", hidden: true },
        { input: "-3 -1 -2", hidden: true },
        { input: "7 7 7 3", hidden: true },
        { input: "1 2 3 4 5 6 7 8 9 10", hidden: true },
      ],
    },
    {
      id: "x7", title: "Разворот и циклический сдвиг", level: "Средняя",
      statement: `<p>В первой строке — непустой список целых чисел, во второй — число k ≥ 0.</p>
        <ol><li>Разверните список <b>на месте</b>: без <code>reverse()</code>, без <code>[::-1]</code> и без дополнительного списка — обменами элементов по индексам. Выведите результат.</li>
        <li>Выведите <b>исходный</b> список, циклически сдвинутый на k позиций вправо, используя срезы. Пример: <code>[1, 2, 3, 4, 5]</code>, k = 2 → <code>4 5 1 2 3</code>. Учтите, что k может быть больше длины списка.</li></ol>`,
      starter: py`
a = list(map(int, input().split()))
k = int(input())
`,
      hint: `<p>Сдвиг вычисляйте до разворота (или от копии). k больше длины эквивалентно <code>k % n</code>. Сдвиг вправо: <code>a[n - k:] + a[:n - k]</code>. Разворот: обмен <code>a[i]</code> и <code>a[n - 1 - i]</code> для i от 0 до n // 2 − 1.</p>`,
      solution: py`
a = list(map(int, input().split()))
k = int(input())
n = len(a)
k %= n
shifted = a[n - k:] + a[:n - k]
for i in range(n // 2):
    a[i], a[n - 1 - i] = a[n - 1 - i], a[i]
print(*a)
print(*shifted)`,
      tests: [
        { input: "1 2 3 4 5\n2" },
        { input: "1 2 3\n7" },
        { input: "10\n100", hidden: true },
        { input: "1 2 3 4\n0", hidden: true },
        { input: "1 2 3 4 5 6\n6", hidden: true },
        { input: "9 8 7 6 5 4 3\n10", hidden: true },
      ],
    },
    {
      id: "x8", title: "Фильтрация и уникальные элементы", level: "Средняя",
      statement: `<p>Даны два списка целых чисел — в первой и второй строке. Выведите пять строк (элементы через пробел; если элементов нет — <code>нет</code>):</p>
        <ol><li>чётные числа первого списка;</li><li>нечётные числа первого списка;</li>
        <li>уникальные элементы первого списка в порядке первого появления: <code>3 1 3 2 1</code> → <code>3 1 2</code>;</li>
        <li>общие элементы двух списков без повторов (в порядке появления в первом);</li>
        <li>элементы первого списка, которых нет во втором, без повторов (в порядке появления).</li></ol>`,
      starter: py`
a = list(map(int, input().split()))
b = list(map(int, input().split()))
`,
      hint: `<p>Уникальные с сохранением порядка: идём по списку и добавляем x в новый список, только если его там ещё нет. Для пунктов 4–5 перебирайте уже уникальные элементы и проверяйте <code>x in b</code> (для скорости — <code>x in set(b)</code>).</p>`,
      solution: py`
a = list(map(int, input().split()))
b = list(map(int, input().split()))

def show(lst):
    print(*lst if lst else ["нет"])

show([x for x in a if x % 2 == 0])
show([x for x in a if x % 2 != 0])
uniq = []
for x in a:
    if x not in uniq:
        uniq.append(x)
show(uniq)
sb = set(b)
show([x for x in uniq if x in sb])
show([x for x in uniq if x not in sb])`,
      tests: [
        { input: "3 1 3 2 1\n1 5 3" },
        { input: "2 4 6 4\n1 3" },
        { input: "7 7 7\n7", hidden: true },
        { input: "-2 -1 0 1 2 -2 0\n0 2 4", hidden: true },
      ],
    },
    {
      id: "x9", title: "Копии матрицы", level: "Средняя",
      statement: `<p>Дано число n. Создайте матрицу n × n из нулей <b>правильным</b> способом, затем сделайте её <b>глубокую копию</b> (<code>copy.deepcopy</code>). После этого в <b>исходной</b> матрице поставьте единицы на главную диагональ.</p>
        <p>Выведите исходную матрицу, затем копию (элементы строки через пробел).</p>
        <div class="note"><div class="note-title">Почему это важно</div><p>• <code>b = a</code> — не копия, а второе имя того же списка.<br>
        • <code>a[:]</code> и <code>copy.copy(a)</code> — <b>поверхностные</b> копии: внешний список новый, но строки внутри общие, поэтому изменение <code>a[0][0]</code> видно и в копии.<br>
        • <code>copy.deepcopy(a)</code> копирует и вложенные списки.<br>
        • <code>[[0] * n] * n</code> — n ссылок на одну строку: единица на диагонали «размножится» на весь столбец.</p>
        <p>Если ошибиться в любом из пунктов, тест это покажет.</p></div>`,
      starter: py`
import copy

n = int(input())
`,
      hint: `<p><code>a = [[0] * n for _ in range(n)]</code>, <code>c = copy.deepcopy(a)</code>, затем цикл <code>a[i][i] = 1</code>.</p>`,
      solution: py`
import copy

n = int(input())
a = [[0] * n for _ in range(n)]
c = copy.deepcopy(a)
for i in range(n):
    a[i][i] = 1
for row in a:
    print(*row)
for row in c:
    print(*row)`,
      tests: [
        { input: "3" },
        { input: "1" },
        { input: "2", hidden: true },
        { input: "5", hidden: true },
      ],
    },
    {
      id: "x10", title: "Анализ квадратной матрицы", level: "Средняя",
      statement: `<p>В первой строке — n (n ≥ 3), далее n строк по n целых чисел. Выведите:</p>
        <ol><li>матрицу построчно (элементы через пробел);</li><li>сумму элементов главной диагонали;</li>
        <li>вторую строку;</li><li>третий столбец (в одну строку через пробел);</li><li>транспонированную матрицу (n строк).</li></ol>`,
      starter: py`
n = int(input())
matrix = [list(map(int, input().split())) for _ in range(n)]
`,
      hint: `<p>Вторая строка — <code>matrix[1]</code>, третий столбец — <code>[matrix[i][2] for i in range(n)]</code>. Строка j транспонированной матрицы — столбец j исходной.</p>`,
      solution: py`
n = int(input())
matrix = [list(map(int, input().split())) for _ in range(n)]
for row in matrix:
    print(*row)
print(sum(matrix[i][i] for i in range(n)))
print(*matrix[1])
print(*[matrix[i][2] for i in range(n)])
for j in range(n):
    print(*[matrix[i][j] for i in range(n)])`,
      tests: [
        { input: "4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16" },
        { input: "3\n0 -1 2\n3 4 -5\n6 7 8" },
        { input: "5\n1 0 0 0 2\n0 1 0 2 0\n0 0 3 0 0\n0 2 0 1 0\n2 0 0 0 1", hidden: true },
        { input: "3\n9 9 9\n9 9 9\n9 9 9", hidden: true },
      ],
    },
    {
      id: "x11", title: "Заполнение матрицы по диагоналям", level: "Лёгкая",
      statement: `<p>Дано число n. Выведите две матрицы n × n (элементы через пробел), одну за другой:</p>
        <ol><li>нули, а на главной диагонали — единицы;</li>
        <li>выше главной диагонали — <code>1</code>, ниже — <code>2</code>, на диагонали — <code>0</code>.</li></ol>`,
      starter: py`
n = int(input())
`,
      hint: `<p>Элемент a[i][j] выше главной диагонали, если j &gt; i, ниже — если i &gt; j.</p>`,
      solution: py`
n = int(input())
for i in range(n):
    print(*[1 if i == j else 0 for j in range(n)])
for i in range(n):
    row = []
    for j in range(n):
        if i == j:
            row.append(0)
        elif j > i:
            row.append(1)
        else:
            row.append(2)
    print(*row)`,
      tests: [
        { input: "3" },
        { input: "1" },
        { input: "4", hidden: true },
        { input: "6", hidden: true },
      ],
    },
    {
      id: "x12", title: "Повторяющиеся элементы матрицы", level: "Средняя",
      statement: `<p>В первой строке — n и m, далее матрица n × m из целых чисел. Выведите:</p>
        <ol><li>сколько <b>различных значений</b> встречается в матрице ровно два раза;</li>
        <li>все значения, которые встречаются ровно один раз, в порядке первого появления (по строкам слева направо), через пробел; если таких нет — <code>нет</code>.</li></ol>`,
      starter: py`
n, m = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
`,
      hint: `<p>Посчитайте частоты словарём: <code>cnt[x] = cnt.get(x, 0) + 1</code>. Чтобы сохранить порядок появления, запоминайте новые значения ещё и в список.</p>`,
      solution: py`
n, m = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
cnt = {}
order = []
for row in a:
    for x in row:
        if x not in cnt:
            cnt[x] = 0
            order.append(x)
        cnt[x] += 1
print(sum(1 for x in order if cnt[x] == 2))
once = [x for x in order if cnt[x] == 1]
print(*once if once else ["нет"])`,
      tests: [
        { input: "3 3\n1 2 3\n2 4 5\n5 5 6" },
        { input: "2 2\n7 7\n8 8" },
        { input: "1 5\n1 2 3 4 5", hidden: true },
        { input: "3 4\n0 -1 0 -1\n2 2 2 3\n4 -1 5 3", hidden: true },
      ],
    },
    {
      id: "x13", title: "Второй максимум матрицы", level: "Средняя",
      statement: `<p>В первой строке — n и m, далее матрица n × m. Найдите второе по величине <b>различное</b> значение матрицы, не используя <code>sort</code>, <code>sorted</code> и <code>max</code>. Если все элементы равны, выведите <code>нет</code>.</p>`,
      starter: py`
n, m = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
`,
      hint: `<p>Тот же приём, что для списка: переменные <code>first</code> и <code>second</code>, обход всех элементов вложенным циклом.</p>`,
      solution: py`
n, m = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
first = second = None
for row in a:
    for x in row:
        if first is None or x > first:
            second = first
            first = x
        elif x != first and (second is None or x > second):
            second = x
print(second if second is not None else "нет")`,
      tests: [
        { input: "3 3\n4 9 2\n15 7 12\n1 15 3" },
        { input: "2 2\n5 5\n5 5" },
        { input: "1 1\n42", hidden: true },
        { input: "2 3\n-5 -2 -9\n-2 -7 -3", hidden: true },
        { input: "3 2\n1 2\n3 4\n5 6", hidden: true },
      ],
    },
    {
      id: "x14", title: "Циклические сдвиги матрицы", level: "Средняя",
      statement: `<p>В первой строке — n и m, далее матрица n × m. Выведите две матрицы, обе получены из <b>исходной</b>:</p>
        <ol><li>каждая строка циклически сдвинута на один элемент вправо (последний элемент строки становится первым);</li>
        <li>все строки сдвинуты на одну вниз (последняя строка становится первой).</li></ol>`,
      starter: py`
n, m = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
`,
      hint: `<p>Сдвиг строки вправо: <code>row[-1:] + row[:-1]</code>. Сдвиг строк вниз — то же самое со списком строк: <code>a[-1:] + a[:-1]</code>.</p>`,
      solution: py`
n, m = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
for row in a:
    print(*(row[-1:] + row[:-1]))
for row in a[-1:] + a[:-1]:
    print(*row)`,
      tests: [
        { input: "3 3\n1 2 3\n4 5 6\n7 8 9" },
        { input: "2 4\n1 2 3 4\n5 6 7 8" },
        { input: "1 1\n5", hidden: true },
        { input: "4 2\n1 2\n3 4\n5 6\n7 8", hidden: true },
      ],
    },
    {
      id: "x15", title: "Поворот матрицы на 90°", level: "Средняя",
      statement: `<p>В первой строке — n, далее квадратная матрица n × n. Поверните её на 90° <b>по часовой стрелке</b> и выведите.</p>
        <p>Пример: <code>1 2 / 3 4</code> → <code>3 1 / 4 2</code>.</p>`,
      starter: py`
n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
`,
      hint: `<p>Первая строка результата — первый столбец исходной, прочитанный снизу вверх. В общем виде: <code>r[i][j] = a[n - 1 - j][i]</code>.</p>`,
      solution: py`
n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
for i in range(n):
    print(*[a[n - 1 - j][i] for j in range(n)])`,
      tests: [
        { input: "2\n1 2\n3 4" },
        { input: "3\n1 2 3\n4 5 6\n7 8 9" },
        { input: "1\n7", hidden: true },
        { input: "4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16", hidden: true },
      ],
    },
    {
      id: "x16", title: "Обход матрицы по спирали", level: "Сложная",
      statement: `<p>В первой строке — n и m, далее матрица n × m. Выведите все её элементы в одну строку через пробел в порядке обхода <b>по спирали</b>: от левого верхнего угла вправо, затем вниз, влево, вверх и так далее к центру.</p>
        <p>Пример: <code>1 2 3 / 4 5 6 / 7 8 9</code> → <code>1 2 3 6 9 8 7 4 5</code>.</p>`,
      starter: py`
n, m = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
`,
      hint: `<p>Храните четыре границы: <code>top, bottom, left, right</code>. Пройдите верхнюю строку и сдвиньте top вниз, затем правый столбец и сдвиньте right влево, нижнюю строку справа налево (если top ≤ bottom) и левый столбец снизу вверх (если left ≤ right). Повторяйте, пока границы не сойдутся.</p>`,
      solution: py`
n, m = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
top, bottom, left, right = 0, n - 1, 0, m - 1
res = []
while top <= bottom and left <= right:
    for j in range(left, right + 1):
        res.append(a[top][j])
    top += 1
    for i in range(top, bottom + 1):
        res.append(a[i][right])
    right -= 1
    if top <= bottom:
        for j in range(right, left - 1, -1):
            res.append(a[bottom][j])
        bottom -= 1
    if left <= right:
        for i in range(bottom, top - 1, -1):
            res.append(a[i][left])
        left += 1
print(*res)`,
      tests: [
        { input: "3 3\n1 2 3\n4 5 6\n7 8 9" },
        { input: "3 4\n1 2 3 4\n5 6 7 8\n9 10 11 12" },
        { input: "1 4\n1 2 3 4", hidden: true },
        { input: "4 1\n1\n2\n3\n4", hidden: true },
        { input: "4 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16", hidden: true },
        { input: "2 3\n1 2 3\n4 5 6", hidden: true },
      ],
    },
  ],

  /* ==================== МОДУЛЬ 7: графы ==================== */
  m7: [
    {
      id: "y1", title: "Степени вершин, число рёбер, изолированные вершины", level: "Лёгкая",
      statement: `<p>Граф задан в стандартном формате (см. ниже). Выведите:</p>
        <ol><li>количество вершин;</li><li>количество рёбер;</li>
        <li>для каждой вершины (в порядке ввода) — её имя и степень через пробел, каждую с новой строки;</li>
        <li>вершину с максимальной степенью (при равенстве — первую по порядку ввода);</li>
        <li>вершину с минимальной степенью (так же);</li>
        <li>изолированные вершины через пробел или <code>нет</code>.</li></ol>${GRAPH_FORMAT}`,
      starter: GRAPH_READ,
      hint: `<p>Граф хранится как словарь словарей: <code>g[v]</code> — словарь соседей v, поэтому степень — <code>len(g[v])</code>. Каждое ребро учтено у обоих концов, значит число рёбер = сумма степеней / 2. Для поиска максимума используйте <code>max(vertices, key=lambda v: len(g[v]))</code>.</p>`,
      solution: GRAPH_READ + py`
print(len(vertices))
print(sum(len(g[v]) for v in vertices) // 2)
for v in vertices:
    print(v, len(g[v]))
print(max(vertices, key=lambda v: len(g[v])))
print(min(vertices, key=lambda v: len(g[v])))
iso = [v for v in vertices if not g[v]]
print(*iso if iso else ["нет"])`,
      tests: [
        { input: GR.small },
        { input: GR.iso },
        { input: GR.star, hidden: true },
        { input: GR.parts, hidden: true },
        { input: GR.big, hidden: true },
      ],
    },
    {
      id: "y2", title: "Соседи вершины, проверка ребра и его вес", level: "Лёгкая",
      statement: `<p>После графа даны ещё две строки: имя вершины v и пара вершин «U V».</p>
        <ol><li>Если вершины v нет в графе, выведите <code>нет вершины</code>; если у неё нет соседей — <code>нет соседей</code>; иначе выведите всех соседей v в алфавитном порядке, каждого с новой строки.</li>
        <li>Если между U и V есть ребро, выведите <code>Да</code> и его вес через пробел, иначе — <code>Нет</code>.</li></ol>${GRAPH_FORMAT}`,
      starter: GRAPH_READ + py`
v = input()
a, b = input().split()
`,
      hint: `<p>Проверка вершины — <code>v in g</code>. Ребро есть, если <code>a in g and b in g[a]</code>, а его вес — <code>g[a][b]</code>.</p>`,
      solution: GRAPH_READ + py`
v = input()
a, b = input().split()
if v not in g:
    print("нет вершины")
elif not g[v]:
    print("нет соседей")
else:
    for u in sorted(g[v]):
        print(u)
if a in g and b in g[a]:
    print("Да", g[a][b])
else:
    print("Нет")`,
      tests: [
        { input: GR.small + "\nC\nA C" },
        { input: GR.small + "\nZ\nA D" },
        { input: GR.iso + "\nA\nC B", hidden: true },
        { input: GR.big + "\nE\nG H", hidden: true },
        { input: GR.star + "\nD\nB E", hidden: true },
      ],
    },
    {
      id: "y3", title: "Достижимые вершины и компоненты связности", level: "Средняя",
      statement: `<p>После графа дана вершина s. Выведите:</p>
        <ol><li>все вершины, достижимые из s (включая s), в алфавитном порядке через пробел;</li>
        <li>количество компонент связности графа;</li>
        <li>каждую компоненту отдельной строкой: её вершины в алфавитном порядке. Компоненты выводите в порядке появления их первой вершины в списке вершин.</li></ol>${GRAPH_FORMAT}`,
      starter: GRAPH_READ + py`
s = input()
`,
      hint: `<p>Напишите функцию, которая обходом (DFS или BFS) возвращает множество достижимых вершин. Для компонент перебирайте вершины в порядке ввода; если вершина ещё не попала ни в одну компоненту — запустите обход из неё.</p>`,
      solution: GRAPH_READ + py`
s = input()

def reach(start):
    seen = {start}
    stack = [start]
    while stack:
        v = stack.pop()
        for u in g[v]:
            if u not in seen:
                seen.add(u)
                stack.append(u)
    return seen

print(*sorted(reach(s)))
used = set()
comps = []
for v in vertices:
    if v not in used:
        c = reach(v)
        used |= c
        comps.append(sorted(c))
print(len(comps))
for c in comps:
    print(*c)`,
      tests: [
        { input: GR.parts + "\nA" },
        { input: GR.small + "\nD" },
        { input: GR.parts + "\nG", hidden: true },
        { input: GR.iso + "\nB", hidden: true },
        { input: GR.big + "\nH", hidden: true },
      ],
    },
    {
      id: "y4", title: "Порядок обхода DFS и BFS", level: "Средняя",
      statement: `<p>После графа дана стартовая вершина s. Реализуйте обход в глубину (DFS, рекурсивно) и в ширину (BFS, через очередь), используя словарь графа и <b>множество</b> посещённых вершин. Соседей перебирайте <b>в алфавитном порядке</b>.</p>
        <p>Выведите две строки: порядок посещения вершин при DFS и при BFS (через пробел).</p>${GRAPH_FORMAT}`,
      starter: GRAPH_READ + py`
from collections import deque

s = input()
`,
      hint: `<p>DFS: пометить вершину, записать в ответ, для каждого соседя из <code>sorted(g[v])</code> вызвать DFS, если он не посещён. BFS: помечайте вершину посещённой в момент добавления в очередь, а не извлечения — иначе она может попасть в очередь дважды.</p>`,
      solution: GRAPH_READ + py`
from collections import deque

s = input()
order = []
visited = set()

def dfs(v):
    visited.add(v)
    order.append(v)
    for u in sorted(g[v]):
        if u not in visited:
            dfs(u)

dfs(s)
print(*order)
seen = {s}
q = deque([s])
bfs = []
while q:
    v = q.popleft()
    bfs.append(v)
    for u in sorted(g[v]):
        if u not in seen:
            seen.add(u)
            q.append(u)
print(*bfs)`,
      tests: [
        { input: GR.star + "\nA" },
        { input: GR.big + "\nA" },
        { input: GR.big + "\nH", hidden: true },
        { input: GR.parts + "\nD", hidden: true },
        { input: GR.bridge + "\nE", hidden: true },
      ],
    },
    {
      id: "y5", title: "Алгоритм Дейкстры на словаре", level: "Средняя",
      statement: `<p>После графа дана строка «s t». Реализуйте алгоритм Дейкстры для графа, заданного словарём. Выведите:</p>
        <ol><li>для каждой вершины (в порядке ввода) её имя и кратчайшее расстояние от s; для недостижимых — <code>INF</code>;</li>
        <li>последней строкой — кратчайшее расстояние от s до t или <code>нет пути</code>.</li></ol>${GRAPH_FORMAT}`,
      starter: GRAPH_READ + py`
s, t = input().split()
`,
      hint: `<p><code>dist = {v: float('inf') for v in vertices}</code>, <code>dist[s] = 0</code>, множество посещённых. Пока есть непосещённые вершины с конечным расстоянием: берём ту, у которой dist минимален, помечаем и релаксируем её рёбра. Быстрее — с очередью с приоритетом <code>heapq</code>.</p>`,
      solution: GRAPH_READ + py`
import heapq

s, t = input().split()
INF = float("inf")
dist = {v: INF for v in vertices}
dist[s] = 0
heap = [(0, s)]
while heap:
    d, v = heapq.heappop(heap)
    if d > dist[v]:
        continue
    for u, w in g[v].items():
        if d + w < dist[u]:
            dist[u] = d + w
            heapq.heappush(heap, (dist[u], u))
for v in vertices:
    print(v, dist[v] if dist[v] < INF else "INF")
print(dist[t] if dist[t] < INF else "нет пути")`,
      tests: [
        { input: GR.star + "\nA E" },
        { input: GR.small + "\nD A" },
        { input: GR.big + "\nA H", hidden: true },
        { input: GR.parts + "\nA E", hidden: true },
        { input: GR.ties + "\nF A", hidden: true },
      ],
    },
    {
      id: "y6", title: "Все кратчайшие пути", level: "Сложная",
      statement: `<p>После графа дана строка «s t». Найдите кратчайшее расстояние от s до t и выведите <b>все</b> кратчайшие пути.</p>
        <p>Первая строка — расстояние. Далее — каждый кратчайший путь в виде <code>A-B-F</code>, пути отсортированы по алфавиту (как строки). Если пути нет, выведите одну строку <code>нет пути</code>.</p>${GRAPH_FORMAT}`,
      starter: GRAPH_READ + py`
s, t = input().split()
`,
      hint: `<p>Сначала Дейкстра из s. Ребро (v, u) лежит на каком-то кратчайшем пути от s, если <code>dist[v] + w == dist[u]</code>. Соберите все пути из s в t только по таким рёбрам (рекурсивным перебором), превратите в строки через <code>"-".join(path)</code> и отсортируйте.</p>`,
      solution: GRAPH_READ + py`
import heapq

s, t = input().split()
INF = float("inf")
dist = {v: INF for v in vertices}
dist[s] = 0
heap = [(0, s)]
while heap:
    d, v = heapq.heappop(heap)
    if d > dist[v]:
        continue
    for u, w in g[v].items():
        if d + w < dist[u]:
            dist[u] = d + w
            heapq.heappush(heap, (dist[u], u))

if dist[t] == INF:
    print("нет пути")
else:
    paths = []

    def walk(v, path):
        if v == t:
            paths.append("-".join(path))
            return
        for u, w in g[v].items():
            if dist[v] + w == dist[u]:
                walk(u, path + [u])

    walk(s, [s])
    print(dist[t])
    for p in sorted(paths):
        print(p)`,
      tests: [
        { input: GR.ties + "\nA F" },
        { input: GR.big + "\nA G" },
        { input: GR.parts + "\nA D", hidden: true },
        { input: GR.ties + "\nF A", hidden: true },
        { input: GR.big + "\nB H", hidden: true },
        { input: GR.star + "\nA A", hidden: true },
      ],
    },
    {
      id: "y7", title: "Маршрут с обязательными и запрещёнными вершинами", level: "Сложная",
      statement: `<p>После графа даны три строки:</p>
        <ol><li>«s t» — начало и конец маршрута (они не запрещены);</li>
        <li>обязательные вершины через пробел (их нужно посетить в <b>любом</b> порядке) или <code>-</code>, если таких нет;</li>
        <li>запрещённые вершины (через них проходить нельзя) или <code>-</code>.</li></ol>
        <p>Маршрут может проходить через одну вершину несколько раз. Выведите минимальную длину маршрута или <code>нет пути</code>.</p>
        <p>Частные случаи этой задачи: «кратчайший путь A → F через C, но не через E»; «из A в H, посетив B, D и F»; <b>задача доставки</b> «выйти из A, посетить B, C, D и вернуться в A» (тогда s = t = A).</p>${GRAPH_FORMAT}`,
      starter: GRAPH_READ + py`
from itertools import permutations

s, t = input().split()
need = input().split()
ban = input().split()
`,
      hint: `<p>1) Удалите запрещённые вершины (или просто не заходите в них в Дейкстре). 2) Найдите Дейкстрой расстояния от s и от каждой обязательной вершины. 3) Переберите все порядки обхода обязательных вершин (<code>itertools.permutations</code>) и посчитайте длину s → r₁ → r₂ → … → t как сумму готовых расстояний. Строку «-» превратите в пустой список.</p>`,
      solution: GRAPH_READ + py`
import heapq
from itertools import permutations

s, t = input().split()
need = [v for v in input().split() if v != "-"]
ban = set(v for v in input().split() if v != "-")
INF = float("inf")

def dijkstra(start):
    dist = {v: INF for v in vertices}
    dist[start] = 0
    heap = [(0, start)]
    while heap:
        d, v = heapq.heappop(heap)
        if d > dist[v]:
            continue
        for u, w in g[v].items():
            if u not in ban and d + w < dist[u]:
                dist[u] = d + w
                heapq.heappush(heap, (dist[u], u))
    return dist

d = {v: dijkstra(v) for v in [s] + need}
best = INF
for order in permutations(need):
    route = [s] + list(order) + [t]
    total = sum(d[route[i]][route[i + 1]] for i in range(len(route) - 1))
    best = min(best, total)
print(best if best < INF else "нет пути")`,
      tests: [
        { input: GR.big + "\nA F\nC\nE" },
        { input: GR.big + "\nA A\nB C D\n-" },
        { input: GR.big + "\nA H\nB D F\n-", hidden: true },
        { input: GR.big + "\nA G\nC E\n-", hidden: true },
        { input: GR.big + "\nA H\n-\nD F", hidden: true },
        { input: GR.big + "\nA H\n-\nG", hidden: true },
        { input: GR.star + "\nA E\n-\nD", hidden: true },
      ],
    },
    {
      id: "y8", title: "Удаление ребра", level: "Средняя",
      statement: `<p>После графа даны строки «s t» и «U V» — ребро, которое нужно удалить (оно существует). Выведите кратчайшее расстояние от s до t <b>до</b> удаления ребра и <b>после</b> (каждое с новой строки; если пути нет — <code>нет пути</code>).</p>${GRAPH_FORMAT}`,
      starter: GRAPH_READ + py`
s, t = input().split()
a, b = input().split()
`,
      hint: `<p>Оформите Дейкстру функцией и вызовите её дважды. Удалить ребро — значит удалить его из словарей обоих концов: <code>del g[a][b]</code> и <code>del g[b][a]</code>.</p>`,
      solution: GRAPH_READ + py`
import heapq

s, t = input().split()
a, b = input().split()
INF = float("inf")

def dist_to(src, dst):
    dist = {v: INF for v in vertices}
    dist[src] = 0
    heap = [(0, src)]
    while heap:
        d, v = heapq.heappop(heap)
        if d > dist[v]:
            continue
        for u, w in g[v].items():
            if d + w < dist[u]:
                dist[u] = d + w
                heapq.heappush(heap, (dist[u], u))
    return dist[dst] if dist[dst] < INF else "нет пути"

print(dist_to(s, t))
del g[a][b]
del g[b][a]
print(dist_to(s, t))`,
      tests: [
        { input: GR.big + "\nA H\nG H" },
        { input: GR.star + "\nA E\nD E" },
        { input: GR.chain + "\nA D\nB C", hidden: true },
        { input: GR.big + "\nA D\nB C", hidden: true },
        { input: GR.bridge + "\nA F\nA B", hidden: true },
      ],
    },
    {
      id: "y9", title: "Простые пути: перебор, k кратчайших, самый длинный", level: "Сложная",
      statement: `<p><b>Простой путь</b> не проходит через одну вершину дважды. После графа дана строка «s t L». Перебором (без Дейкстры) найдите все простые пути из s в t и выведите:</p>
        <ol><li>количество простых путей;</li><li>количество путей, содержащих не более L вершин;</li>
        <li>до трёх самых коротких путей по суммарному весу — каждый строкой «вес путь», например <code>9 A-C-E</code>. При равном весе пути упорядочиваются по алфавиту записи. Первый из них — путь минимального веса, второй — «второй по стоимости»;</li>
        <li>последней строкой — самый длинный (по весу) простой путь в том же формате (при равенстве — первый по алфавиту).</li></ol>
        <p>Если путей нет, выведите <code>0</code>, <code>0</code> и <code>нет пути</code> (три строки).</p>${GRAPH_FORMAT}`,
      starter: GRAPH_READ + py`
s, t, L = input().split()
L = int(L)
`,
      hint: `<p>Рекурсивная функция <code>go(v, path, weight)</code>: если v == t — сохранить (вес, "-".join(path)); иначе для каждого соседа u, которого нет в path, вызвать <code>go(u, path + [u], weight + w)</code>. Список пар (вес, строка) сортируется встроенной <code>sorted</code> как раз в нужном порядке. Для самого длинного: <code>key=lambda p: (-p[0], p[1])</code>.</p>`,
      solution: GRAPH_READ + py`
s, t, L = input().split()
L = int(L)
paths = []

def go(v, path, weight):
    if v == t:
        paths.append((weight, "-".join(path), len(path)))
        return
    for u, w in g[v].items():
        if u not in path:
            go(u, path + [u], weight + w)

go(s, [s], 0)
print(len(paths))
print(sum(1 for p in paths if p[2] <= L))
if not paths:
    print("нет пути")
else:
    for w, p, _ in sorted(paths)[:3]:
        print(w, p)
    w, p, _ = min(paths, key=lambda x: (-x[0], x[1]))
    print(w, p)`,
      tests: [
        { input: GR.star + "\nA E 3" },
        { input: GR.big + "\nA G 5" },
        { input: GR.big + "\nA H 4", hidden: true },
        { input: GR.parts + "\nA D 9", hidden: true },
        { input: GR.ties + "\nA F 4", hidden: true },
        { input: GR.small + "\nA D 3", hidden: true },
      ],
    },
    {
      id: "y10", title: "Флойд: эксцентриситет, радиус, диаметр, центр", level: "Сложная",
      statement: `<p>Граф связный. Алгоритмом Флойда–Уоршелла найдите расстояния между всеми парами вершин. <b>Эксцентриситет</b> вершины — расстояние до самой удалённой от неё вершины; <b>радиус</b> — минимальный эксцентриситет, <b>диаметр</b> — максимальный, <b>центр</b> — вершины с эксцентриситетом, равным радиусу. Выведите:</p>
        <ol><li>для каждой вершины (в порядке ввода) — имя и эксцентриситет;</li><li>радиус;</li><li>диаметр;</li><li>центральные вершины через пробел (в порядке ввода);</li>
        <li>самую удалённую пару вершин «U V расстояние» и 6) самую близкую пару в том же формате. Пары перебирайте в порядке ввода (U раньше V); при равенстве берите первую найденную.</li></ol>
        <p>Если вершины — города, а веса — расстояния, это задача о ближайших и самых удалённых городах и о лучшем месте для «центра» (например, склада).</p>${GRAPH_FORMAT}`,
      starter: GRAPH_READ + py`
INF = float("inf")
n = len(vertices)
`,
      hint: `<p>Матрица <code>d[i][j]</code>: 0 на диагонали, вес ребра или бесконечность. Тройной цикл Флойда по k, i, j. Эксцентриситет i — <code>max(d[i])</code>. Пары: двойной цикл <code>for i in range(n): for j in range(i + 1, n)</code>, обновляйте ответ только при строгом неравенстве.</p>`,
      solution: GRAPH_READ + py`
INF = float("inf")
n = len(vertices)
d = [[0 if i == j else g[vertices[i]].get(vertices[j], INF) for j in range(n)] for i in range(n)]
for k in range(n):
    for i in range(n):
        for j in range(n):
            if d[i][k] + d[k][j] < d[i][j]:
                d[i][j] = d[i][k] + d[k][j]
ecc = [max(row) for row in d]
for i in range(n):
    print(vertices[i], ecc[i])
r = min(ecc)
print(r)
print(max(ecc))
print(*[vertices[i] for i in range(n) if ecc[i] == r])
far = near = None
for i in range(n):
    for j in range(i + 1, n):
        if far is None or d[i][j] > far[2]:
            far = (vertices[i], vertices[j], d[i][j])
        if near is None or d[i][j] < near[2]:
            near = (vertices[i], vertices[j], d[i][j])
print(*far)
print(*near)`,
      tests: [
        { input: GR.star },
        { input: GR.small },
        { input: GR.big, hidden: true },
        { input: GR.bridge, hidden: true },
        { input: GR.chain, hidden: true },
      ],
    },
    {
      id: "y11", title: "Флойд: расстояние и путь для каждой пары", level: "Сложная",
      statement: `<p>Для каждой пары вершин U, V (U раньше V в списке вершин) выведите строку «U V расстояние путь», например <code>A C 7 A-B-C</code>. Если пути нет — «U V нет пути». Используйте алгоритм Флойда с матрицей следующих вершин (<code>nxt</code>) для восстановления маршрута. В тестах кратчайший путь для каждой пары единственный.</p>${GRAPH_FORMAT}`,
      starter: GRAPH_READ + py`
INF = float("inf")
n = len(vertices)
`,
      hint: `<p><code>nxt[i][j]</code> — первая вершина после i на кратчайшем пути в j. Изначально <code>nxt[i][j] = j</code>, если есть ребро. При улучшении через k: <code>nxt[i][j] = nxt[i][k]</code>. Путь восстанавливается шагами <code>i = nxt[i][j]</code>, пока не дойдём до j.</p>`,
      solution: GRAPH_READ + py`
INF = float("inf")
n = len(vertices)
d = [[0 if i == j else g[vertices[i]].get(vertices[j], INF) for j in range(n)] for i in range(n)]
nxt = [[j if d[i][j] < INF else None for j in range(n)] for i in range(n)]
for k in range(n):
    for i in range(n):
        for j in range(n):
            if d[i][k] + d[k][j] < d[i][j]:
                d[i][j] = d[i][k] + d[k][j]
                nxt[i][j] = nxt[i][k]
for i in range(n):
    for j in range(i + 1, n):
        if d[i][j] == INF:
            print(vertices[i], vertices[j], "нет пути")
            continue
        path = [i]
        while path[-1] != j:
            path.append(nxt[path[-1]][j])
        print(vertices[i], vertices[j], d[i][j], "-".join(vertices[p] for p in path))`,
      tests: [
        { input: GR.uniq },
        { input: GR.chain },
        { input: "A B C D E\n3\nA B 2\nB C 3\nD E 1", hidden: true },
        { input: "A B C D\n5\nA B 1\nB C 2\nC D 4\nA D 10\nB D 7", hidden: true },
      ],
    },
    {
      id: "y12", title: "Точки сочленения и мосты", level: "Сложная",
      statement: `<p><b>Точка сочленения</b> (критическая вершина) — вершина, после удаления которой (вместе с её рёбрами) число компонент связности увеличивается. <b>Мост</b> — такое же ребро. Найдите их перебором: удаляйте по очереди каждую вершину / каждое ребро и считайте компоненты.</p>
        <p>Выведите: 1) точки сочленения через пробел в алфавитном порядке или <code>нет</code>; 2) мосты в виде <code>A-B</code> (концы ребра по алфавиту, список мостов отсортирован) через пробел или <code>нет</code>.</p>${GRAPH_FORMAT}`,
      starter: GRAPH_READ + py`
edges = sorted({tuple(sorted((u, v))) for u in g for v in g[u]})
`,
      hint: `<p>Напишите функцию <code>components(skip_v=None, skip_e=None)</code>, которая считает компоненты, не заходя в вершину skip_v и не проходя по ребру skip_e. Вершина v — точка сочленения, если компонент без неё больше, чем было (не считая саму v). Ребро — мост, если без него компонент стало больше.</p>`,
      solution: GRAPH_READ + py`
edges = sorted({tuple(sorted((u, v))) for u in g for v in g[u]})

def components(skip_v=None, skip_e=None):
    seen = set()
    count = 0
    for s in vertices:
        if s == skip_v or s in seen:
            continue
        count += 1
        seen.add(s)
        stack = [s]
        while stack:
            v = stack.pop()
            for u in g[v]:
                if u == skip_v or u in seen:
                    continue
                if skip_e and {u, v} == set(skip_e):
                    continue
                seen.add(u)
                stack.append(u)
    return count

base = components()
cut = sorted(v for v in vertices if components(skip_v=v) > base)
bridges = [f"{a}-{b}" for a, b in edges if components(skip_e=(a, b)) > base]
print(*cut if cut else ["нет"])
print(*bridges if bridges else ["нет"])`,
      tests: [
        { input: GR.bridge },
        { input: GR.chain },
        { input: GR.star, hidden: true },
        { input: GR.big, hidden: true },
        { input: GR.parts, hidden: true },
      ],
    },
    {
      id: "y13", title: "Все простые циклы", level: "Сложная",
      statement: `<p>Найдите все простые циклы неориентированного графа (длиной не менее 3 вершин, без повторения вершин). Каждый цикл записывайте так: начинается с <b>наименьшей по алфавиту</b> вершины цикла, а из двух направлений обхода выбирается то, где вторая вершина меньше последней. Например, треугольник из A, B, C записывается <code>A-B-C</code>.</p>
        <p>Первая строка — количество циклов, далее циклы в алфавитном порядке записи. Веса рёбер не важны.</p>${GRAPH_FORMAT}`,
      starter: GRAPH_READ,
      hint: `<p>Для каждой стартовой вершины s ищите пути перебором, заходя только в вершины <b>больше</b> s (тогда s — наименьшая в цикле). Если из конца пути есть ребро обратно в s и путь содержит хотя бы 3 вершины, это цикл. Каждый цикл найдётся дважды (в двух направлениях) — оставляйте тот, где <code>path[1] &lt; path[-1]</code>.</p>`,
      solution: GRAPH_READ + py`
cycles = []

def go(s, path):
    v = path[-1]
    for u in g[v]:
        if u == s and len(path) >= 3 and path[1] < path[-1]:
            cycles.append("-".join(path))
        elif u > s and u not in path:
            go(s, path + [u])

for s in vertices:
    go(s, [s])
print(len(cycles))
for c in sorted(cycles):
    print(c)`,
      tests: [
        { input: GR.bridge },
        { input: GR.small },
        { input: GR.chain, hidden: true },
        { input: GR.star, hidden: true },
        { input: "A B C D\n6\nA B 1\nA C 1\nA D 1\nB C 1\nB D 1\nC D 1", hidden: true },
      ],
    },
    {
      id: "y14", title: "Количество различных путей в ориентированном графе", level: "Средняя",
      statement: `<p>Дан <b>ориентированный ациклический</b> граф (рёбра «U V» означают дорогу только из U в V, весов нет): первая строка — вершины, вторая — m, далее m строк «U V», последняя строка — «s t». Посчитайте количество различных путей из s в t.</p>
        <p>Это классическая задача ЕНТ «сколько существует путей из города А в город К».</p>`,
      starter: py`
vertices = input().split()
m = int(input())
g = {v: [] for v in vertices}
for _ in range(m):
    u, v = input().split()
    g[u].append(v)
s, t = input().split()
`,
      hint: `<p>Число путей из v в t равно сумме чисел путей из всех вершин, в которые ведёт ребро из v; из t в t — ровно 1 путь. Рекурсия с запоминанием (словарь <code>memo</code>) работает быстро даже для больших графов.</p>`,
      solution: py`
vertices = input().split()
m = int(input())
g = {v: [] for v in vertices}
for _ in range(m):
    u, v = input().split()
    g[u].append(v)
s, t = input().split()
memo = {}

def count(v):
    if v == t:
        return 1
    if v not in memo:
        memo[v] = sum(count(u) for u in g[v])
    return memo[v]

print(count(s))`,
      tests: [
        { input: "A B C D\n4\nA B\nA C\nB D\nC D\nA D" },
        { input: "А Б В Г Д Е К\n10\nА Б\nА В\nА Г\nБ Д\nВ Б\nВ Д\nГ В\nГ Е\nД К\nЕ К\nА К" },
        { input: "A B C\n1\nA B\nA C", hidden: true },
        { input: "A B C D E F\n9\nA B\nA C\nB C\nB D\nC D\nC E\nD E\nD F\nE F\nA F", hidden: true },
        { input: "A B C D E F G H\n14\nA B\nA C\nB C\nB D\nC D\nC E\nD E\nD F\nE F\nE G\nF G\nF H\nG H\nB H\nA H", hidden: true },
      ],
    },
    {
      id: "y15", title: "Лабиринт: кратчайший маршрут и число маршрутов", level: "Сложная",
      statement: `<p>Лабиринт — это граф: клетки — вершины, соседние по стороне свободные клетки соединены рёбрами. В первой строке — n и m, далее n строк по m символов: <code>.</code> — свободно, <code>#</code> — стена, <code>S</code> — старт, <code>E</code> — выход.</p>
        <p>Выведите длину кратчайшего маршрута (число ходов) и количество <b>различных кратчайших</b> маршрутов через пробел. Если выхода не достичь — <code>-1</code>.</p>`,
      starter: py`
from collections import deque

n, m = map(int, input().split())
grid = [input() for _ in range(n)]
`,
      hint: `<p>BFS от S по клеткам. Кроме расстояния <code>dist</code> храните <code>ways</code> — число кратчайших путей до клетки. Если соседа видим впервые: <code>dist = dist[v] + 1</code>, <code>ways = ways[v]</code>; если он уже на том же расстоянии <code>dist[v] + 1</code> — прибавляем <code>ways[v]</code>.</p>`,
      solution: py`
from collections import deque

n, m = map(int, input().split())
grid = [input() for _ in range(n)]
for i in range(n):
    for j in range(m):
        if grid[i][j] == "S":
            start = (i, j)
        elif grid[i][j] == "E":
            finish = (i, j)
dist = {start: 0}
ways = {start: 1}
q = deque([start])
while q:
    i, j = q.popleft()
    for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        a, b = i + di, j + dj
        if 0 <= a < n and 0 <= b < m and grid[a][b] != "#":
            if (a, b) not in dist:
                dist[(a, b)] = dist[(i, j)] + 1
                ways[(a, b)] = ways[(i, j)]
                q.append((a, b))
            elif dist[(a, b)] == dist[(i, j)] + 1:
                ways[(a, b)] += ways[(i, j)]
if finish in dist:
    print(dist[finish], ways[finish])
else:
    print(-1)`,
      tests: [
        { input: "3 3\nS..\n.#.\n..E" },
        { input: "3 4\nS#..\n.#.#\n...E" },
        { input: "2 2\nS#\n#E", hidden: true },
        { input: "4 4\nS...\n....\n....\n...E", hidden: true },
        { input: "5 7\nS..#...\n.#.#.#.\n.#...#.\n.####..\n......E", hidden: true },
      ],
    },
    {
      id: "y16", title: "Комплексный анализ графа", level: "Сложная",
      statement: `<p>Итоговая задача. После графа даны строки: вершина v и «s t». Выведите по порядку:</p>
        <ol><li>все вершины графа через пробел (в порядке ввода);</li>
        <li>соседей v через пробел в алфавитном порядке;</li>
        <li>для каждой вершины — «имя степень» (каждую с новой строки, в порядке ввода);</li>
        <li>вершину с максимальной степенью (первую при равенстве);</li>
        <li>количество рёбер;</li>
        <li>кратчайшие расстояния от s до всех <b>остальных</b> вершин — «имя расстояние» (в порядке ввода; недостижимые — <code>INF</code>);</li>
        <li>длину кратчайшего пути от s до t (или <code>нет пути</code>).</li></ol>
        <p>Пример ниже — граф из исходного задания: вершина C и маршрут A → E.</p>${GRAPH_FORMAT}`,
      starter: GRAPH_READ + py`
v = input()
s, t = input().split()
`,
      hint: `<p>Соберите решения задач «Степени вершин», «Соседи вершины» и «Алгоритм Дейкстры» в одну программу. Удобно оформить Дейкстру функцией.</p>`,
      solution: GRAPH_READ + py`
import heapq

v = input()
s, t = input().split()
print(*vertices)
print(*sorted(g[v]))
for x in vertices:
    print(x, len(g[x]))
print(max(vertices, key=lambda x: len(g[x])))
print(sum(len(g[x]) for x in vertices) // 2)
INF = float("inf")
dist = {x: INF for x in vertices}
dist[s] = 0
heap = [(0, s)]
while heap:
    d, x = heapq.heappop(heap)
    if d > dist[x]:
        continue
    for u, w in g[x].items():
        if d + w < dist[u]:
            dist[u] = d + w
            heapq.heappush(heap, (dist[u], u))
for x in vertices:
    if x != s:
        print(x, dist[x] if dist[x] < INF else "INF")
print(dist[t] if dist[t] < INF else "нет пути")`,
      tests: [
        { input: GR.star + "\nC\nA E" },
        { input: GR.small + "\nB\nD C" },
        { input: GR.big + "\nE\nA H", hidden: true },
        { input: GR.parts + "\nD\nA F", hidden: true },
      ],
    },
  ],
};

// Добавляем задачи в модули
for (const [mid, list] of Object.entries(window.EXTRA_TASKS)) {
  const mod = window.COURSE.modules.find((m) => m.id === mid);
  if (mod) list.forEach((t) => mod.tasks.push(Object.assign({ extra: true }, t)));
}
