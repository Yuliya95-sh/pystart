/* =========================================================
   PyStart — дополнительные задачи, часть 3: модули 5–7
   (массивы, матрицы, сортировки, функции, файлы).
   Формат и правила — как в extra_tasks.js.
   Поле теста after — код, который выполняется после программы
   ученика (например, печатает записанный ею файл); его вывод
   тоже сравнивается.
   ========================================================= */
(function () {
  const MATRIX_READ = py`
n, m = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
`;
  const RANDOM_NOTE = `<p class="small muted">Для самостоятельной практики матрицу удобно заполнять случайными числами: <code>[[random.randint(-100, 100) for j in range(m)] for i in range(n)]</code>. При проверке матрица вводится, чтобы ответ был однозначным.</p>`;
  const MX = {
    m33: "3 3\n1 2 3\n4 5 6\n7 8 9",
    m34: "3 4\n5 -3 0 8\n-1 2 7 -6\n4 0 -9 1",
    magic: "3 3\n2 7 6\n9 5 1\n4 3 8",
    sym: "3 3\n1 2 3\n2 5 4\n3 4 9",
    m44: "4 4\n10 -2 3 7\n0 5 -8 1\n6 6 2 -4\n-1 9 0 3",
    rows: "4 3\n1 2 3\n3 2 1\n0 0 5\n1 2 3",
    one: "1 1\n-7",
  };

  // Проверка задачи z4: печатает оба записанных файла (без учёта пустых строк в конце)
  const AFTER_Z4 = py`
print(open("result.txt", encoding="utf-8").read().strip())
print("---")
print(open("report.txt", encoding="utf-8").read().strip())`;

  const T = {
    /* ==================== МОДУЛЬ 5 ==================== */
    m5: [
      {
        id: "x17", title: "Операции с массивом: вывод, вставка, удаление", level: "Лёгкая",
        statement: `<p>В первой строке — массив a (не меньше 6 чисел), во второй — массив b. Выведите (каждый результат — с новой строки, элементы через пробел):</p>
          <ol><li>все элементы a;</li><li>элементы a в обратном порядке;</li><li>чётные элементы a (или <code>нет</code>).</li></ol>
          <p>Затем последовательно измените a и выводите его <b>после каждого шага</b>:</p>
          <ol start="4"><li>добавить 100 в конец;</li><li>добавить 0 в начало;</li><li>вставить 55 на позицию с индексом 4;</li><li>удалить элемент с конца;</li><li>удалить элемент с начала;</li><li>удалить элемент с индексом 5;</li>
          <li>последней строкой выведите новый массив из элементов a и b (сначала a, потом b).</li></ol>`,
        starter: py`
a = list(map(int, input().split()))
b = list(map(int, input().split()))
`,
        solution: py`
a = list(map(int, input().split()))
b = list(map(int, input().split()))
print(*a)
print(*a[::-1])
ev = [x for x in a if x % 2 == 0]
print(*ev if ev else ["нет"])
a.append(100)
print(*a)
a.insert(0, 0)
print(*a)
a.insert(4, 55)
print(*a)
a.pop()
print(*a)
a.pop(0)
print(*a)
a.pop(5)
print(*a)
print(*(a + b))`,
        tests: [{ input: "1 2 3 4 5 6\n7 8" }, { input: "9 7 5 3 1 -1 -3\n0" }, { input: "10 20 30 40 50 60 70 80\n-1 -2 -3", hidden: true }],
      },
      {
        id: "x18", title: "Статистика массива", level: "Средняя",
        statement: `<p>Сначала задано N (1 ≤ N ≤ 10000) — количество элементов, во второй строке — N целых чисел через пробел. Выведите в отдельных строках:</p>
          <ol><li>сумму;</li><li>среднее арифметическое (2 знака после точки);</li><li>произведение;</li><li>количество отрицательных;</li><li>количество положительных;</li>
          <li>количество чётных и нечётных через пробел;</li><li>сумму элементов, кратных 5;</li><li>индекс первого отрицательного элемента (или −1);</li>
          <li><code>да</code>, если есть хотя бы два одинаковых числа, иначе <code>нет</code>;</li><li>разность максимального и минимального элементов;</li>
          <li>индекс максимального элемента (первого);</li><li>сумму чётных элементов;</li><li>произведение положительных элементов (или <code>нет</code>, если их нет).</li></ol>`,
        starter: py`
n = int(input())
a = list(map(int, input().split()))
`,
        hint: `<p>Наличие повторов удобно проверить так: <code>len(set(a)) &lt; len(a)</code>. Произведение начинайте с 1. Индекс первого отрицательного — цикл с <code>break</code> или <code>next((i for ...), -1)</code>.</p>`,
        solution: py`
n = int(input())
a = list(map(int, input().split()))
print(sum(a))
print(f"{sum(a) / n:.2f}")
p = 1
for x in a:
    p *= x
print(p)
print(sum(1 for x in a if x < 0))
print(sum(1 for x in a if x > 0))
ev = sum(1 for x in a if x % 2 == 0)
print(ev, n - ev)
print(sum(x for x in a if x % 5 == 0))
idx = -1
for i, x in enumerate(a):
    if x < 0:
        idx = i
        break
print(idx)
print("да" if len(set(a)) < n else "нет")
print(max(a) - min(a))
print(a.index(max(a)))
print(sum(x for x in a if x % 2 == 0))
pos = [x for x in a if x > 0]
if pos:
    pp = 1
    for x in pos:
        pp *= x
    print(pp)
else:
    print("нет")`,
        tests: [{ input: "6\n4 -5 10 3 -2 7" }, { input: "1\n0" }, { input: "5\n-1 -2 -3 -4 -5", hidden: true }, { input: "8\n5 15 5 2 9 9 -10 1", hidden: true }],
      },
      {
        id: "x19", title: "Преобразования массива", level: "Средняя",
        statement: `<p>Дан массив целых чисел (в одной строке). Каждый пункт выполните над <b>исходным</b> массивом и выведите результат с новой строки (элементы через пробел; пустой результат — <code>нет</code>):</p>
          <ol><li>чётные элементы уменьшены вдвое (<code>x // 2</code>), остальные без изменений;</li><li>отрицательные заменены на 0;</li><li>без нулей;</li><li>без элементов, кратных 3;</li>
          <li>чётные заменены квадратами, нечётные — кубами;</li><li>только положительные элементы;</li><li>первый и последний элементы поменяны местами;</li>
          <li>минимальный и максимальный элементы (их первые вхождения) поменяны местами;</li><li>циклический сдвиг влево на одну позицию;</li><li>массив наоборот;</li>
          <li><code>да</code>, если массив симметричный (читается одинаково в обе стороны), иначе <code>нет</code>;</li>
          <li>каждый элемент заменён суммой его соседей слева и справа (у крайних один сосед).</li></ol>`,
        starter: py`
a = list(map(int, input().split()))
`,
        solution: py`
a = list(map(int, input().split()))
n = len(a)

def show(lst):
    print(*lst if lst else ["нет"])

show([x // 2 if x % 2 == 0 else x for x in a])
show([0 if x < 0 else x for x in a])
show([x for x in a if x != 0])
show([x for x in a if x % 3 != 0])
show([x ** 2 if x % 2 == 0 else x ** 3 for x in a])
show([x for x in a if x > 0])
b = a[:]
b[0], b[-1] = b[-1], b[0]
show(b)
b = a[:]
i, j = b.index(min(b)), b.index(max(b))
b[i], b[j] = b[j], b[i]
show(b)
show(a[1:] + a[:1])
show(a[::-1])
print("да" if a == a[::-1] else "нет")
show([(a[i - 1] if i > 0 else 0) + (a[i + 1] if i < n - 1 else 0) for i in range(n)])`,
        tests: [{ input: "4 -3 0 9 6 -1 2" }, { input: "1 2 3 2 1" }, { input: "7", hidden: true }, { input: "0 3 -6 9 0", hidden: true }, { input: "5 -5 10 -10", hidden: true }],
      },
      {
        id: "x20", title: "Разбиения массива", level: "Средняя",
        statement: `<p>Дан массив целых чисел. Выведите (пустой результат — <code>нет</code>):</p>
          <ol><li>отрицательные элементы;</li><li>нули;</li><li>положительные элементы (во всех трёх случаях порядок сохраняется);</li>
          <li>среднее арифметическое (2 знака);</li><li>элементы больше среднего;</li><li>элементы меньше или равные среднему;</li>
          <li>положительные элементы, стоящие на чётных позициях (индексы 0, 2, 4, …);</li>
          <li>массив, где поменяны местами первый и последний <b>положительные</b> элементы (если положительных меньше двух — без изменений).</li></ol>`,
        starter: py`
a = list(map(int, input().split()))
`,
        solution: py`
a = list(map(int, input().split()))

def show(lst):
    print(*lst if lst else ["нет"])

show([x for x in a if x < 0])
show([x for x in a if x == 0])
show([x for x in a if x > 0])
avg = sum(a) / len(a)
print(f"{avg:.2f}")
show([x for x in a if x > avg])
show([x for x in a if x <= avg])
show([a[i] for i in range(0, len(a), 2) if a[i] > 0])
pos = [i for i, x in enumerate(a) if x > 0]
b = a[:]
if len(pos) >= 2:
    b[pos[0]], b[pos[-1]] = b[pos[-1]], b[pos[0]]
show(b)`,
        tests: [{ input: "-2 5 0 8 -1 3 0 7" }, { input: "4" }, { input: "-1 -2 0", hidden: true }, { input: "3 1 4 1 5 9 2 6", hidden: true }],
      },
      {
        id: "x21", title: "Шейкерная сортировка с трассировкой", level: "Средняя",
        statement: `<p>Дан массив целых чисел. Отсортируйте его <b>шейкерной сортировкой</b>: проход слева направо «выталкивает» максимум в конец, затем проход справа налево — минимум в начало; границы <code>left</code> и <code>right</code> сближаются. После каждой пары проходов выведите массив. Последней строкой выведите общее число обменов.</p>`,
        starter: py`
m = list(map(int, input().split()))
n = len(m)
left, right = 0, n - 1
swaps = 0
`,
        hint: `<p>Цикл <code>while left &lt; right</code>: проход <code>for i in range(left, right)</code> с обменом соседей, затем <code>right -= 1</code>; обратный проход <code>for i in range(right, left, -1)</code>, сравнивая <code>m[i - 1]</code> и <code>m[i]</code>, затем <code>left += 1</code> и вывод.</p>`,
        solution: py`
m = list(map(int, input().split()))
n = len(m)
left, right = 0, n - 1
swaps = 0
while left < right:
    for i in range(left, right):
        if m[i] > m[i + 1]:
            m[i], m[i + 1] = m[i + 1], m[i]
            swaps += 1
    right -= 1
    for i in range(right, left, -1):
        if m[i - 1] > m[i]:
            m[i - 1], m[i] = m[i], m[i - 1]
            swaps += 1
    left += 1
    print(*m)
print(swaps)`,
        tests: [{ input: "4 9 2 7 1 6" }, { input: "3 4 1 6 7 4 8 1 9 2" }, { input: "1 2 3", hidden: true }, { input: "5 4 3 2 1", hidden: true }, { input: "42", hidden: true }],
      },
      {
        id: "x22", title: "Сортировка выбором с трассировкой", level: "Средняя",
        statement: `<p>Дан массив целых чисел. Отсортируйте его по возрастанию <b>сортировкой выбором</b>: для каждой позиции i от 0 до n − 2 найдите индекс минимального элемента в части <code>a[i:]</code> (первого, если их несколько) и поменяйте его с <code>a[i]</code>. После каждого шага i выведите массив. Последней строкой выведите число <b>реальных</b> обменов (когда минимум стоял не на позиции i).</p>`,
        starter: py`
a = list(map(int, input().split()))
n = len(a)
`,
        hint: `<p>Проверку «минимум уже на месте» делайте <b>после</b> внутреннего цикла поиска минимума, а не внутри него. Внешний цикл — до n − 2: последний элемент сам окажется на месте.</p>`,
        solution: py`
a = list(map(int, input().split()))
n = len(a)
swaps = 0
for i in range(n - 1):
    k = i
    for j in range(i + 1, n):
        if a[j] < a[k]:
            k = j
    if k != i:
        a[i], a[k] = a[k], a[i]
        swaps += 1
    print(*a)
print(swaps)`,
        tests: [{ input: "3 4 1 6 7 4 8 1 9 2" }, { input: "64 25 12 22 11" }, { input: "1 2 3 4", hidden: true }, { input: "2 1", hidden: true }],
      },
      {
        id: "x23", title: "Статистика матрицы", level: "Средняя",
        statement: `<p>Дана матрица n × m (первая строка — n и m). Выведите в отдельных строках:</p>
          <ol><li>сумму всех элементов;</li><li>произведение всех элементов;</li><li>суммы строк через пробел;</li><li>произведения строк;</li>
          <li>максимум и минимум всей матрицы через пробел;</li><li>максимумы строк;</li><li>минимумы строк;</li>
          <li>максимальный элемент и его координаты (строка и столбец, с нуля; первое вхождение по строкам) — <code>значение i j</code>;</li>
          <li>минимумы столбцов;</li><li>суммы столбцов;</li><li>количество чётных и нечётных элементов;</li><li>количество нулей;</li><li>количество положительных;</li>
          <li>количество элементов больше среднего арифметического матрицы.</li></ol>${RANDOM_NOTE}`,
        starter: MATRIX_READ,
        solution: MATRIX_READ + py`

flat = [x for row in a for x in row]
print(sum(flat))
p = 1
for x in flat:
    p *= x
print(p)
print(*[sum(row) for row in a])
prods = []
for row in a:
    q = 1
    for x in row:
        q *= x
    prods.append(q)
print(*prods)
print(max(flat), min(flat))
print(*[max(row) for row in a])
print(*[min(row) for row in a])
best = (a[0][0], 0, 0)
for i in range(n):
    for j in range(m):
        if a[i][j] > best[0]:
            best = (a[i][j], i, j)
print(*best)
print(*[min(a[i][j] for i in range(n)) for j in range(m)])
print(*[sum(a[i][j] for i in range(n)) for j in range(m)])
ev = sum(1 for x in flat if x % 2 == 0)
print(ev, len(flat) - ev)
print(flat.count(0))
print(sum(1 for x in flat if x > 0))
avg = sum(flat) / len(flat)
print(sum(1 for x in flat if x > avg))`,
        tests: [{ input: MX.m34 }, { input: MX.m33 }, { input: MX.m44, hidden: true }, { input: MX.one, hidden: true }],
      },
      {
        id: "x24", title: "Перестановки и удаления в матрице", level: "Средняя",
        statement: `<p>Дана матрица n × m (n, m ≥ 2), затем строка «i j» — номера строк для обмена, затем k — номер строки для удаления, затем c — номер столбца для удаления (все номера с 1). Выведите шесть матриц, полученных из <b>исходной</b>, разделяя их строкой <code>---</code>:</p>
          <ol><li>поменяны первая и последняя строки;</li><li>поменяны первый и последний столбцы;</li><li>поменяны строки i и j;</li><li>удалена строка k;</li><li>удалён столбец c;</li><li>отрицательные элементы заменены нулями.</li></ol>${RANDOM_NOTE}`,
        starter: MATRIX_READ + py`

i, j = map(int, input().split())
k = int(input())
c = int(input())
`,
        hint: `<p>Работайте с копиями: <code>b = [row[:] for row in a]</code>. Удалить строку: <code>del b[k - 1]</code>; удалить столбец: <code>del row[c - 1]</code> в каждой строке.</p>`,
        solution: MATRIX_READ + py`

i, j = map(int, input().split())
k = int(input())
c = int(input())

def copy():
    return [row[:] for row in a]

def show(b, last=False):
    for row in b:
        print(*row)
    if not last:
        print("---")

b = copy()
b[0], b[-1] = b[-1], b[0]
show(b)
b = copy()
for row in b:
    row[0], row[-1] = row[-1], row[0]
show(b)
b = copy()
b[i - 1], b[j - 1] = b[j - 1], b[i - 1]
show(b)
b = copy()
del b[k - 1]
show(b)
b = copy()
for row in b:
    del row[c - 1]
show(b)
show([[0 if x < 0 else x for x in row] for row in a], last=True)`,
        tests: [{ input: MX.m34 + "\n1 3\n2\n4" }, { input: MX.m33 + "\n2 3\n1\n2" }, { input: MX.m44 + "\n1 4\n4\n1", hidden: true }],
      },
      {
        id: "x25", title: "Заполнение матриц: шахматка, змейка, столбцы", level: "Лёгкая",
        statement: `<p>Даны n и m. Выведите три матрицы n × m, разделяя их строкой <code>---</code>:</p>
          <ol><li>шахматный узор: <code>a[i][j] = (i + j) % 2</code>;</li><li>«змейка»: числа 1, 2, 3, … в чётных по счёту строках идут слева направо, в нечётных — справа налево (как в примере 1 2 3 / 6 5 4 / 7 8 9);</li>
          <li>в столбцах с чётным номером (считая с 1) — нули, с нечётным — единицы.</li></ol>`,
        starter: py`
n, m = map(int, input().split())
`,
        solution: py`
n, m = map(int, input().split())
for i in range(n):
    print(*[(i + j) % 2 for j in range(m)])
print("---")
for i in range(n):
    row = [i * m + j + 1 for j in range(m)]
    print(*(row if i % 2 == 0 else row[::-1]))
print("---")
for i in range(n):
    print(*[0 if (j + 1) % 2 == 0 else 1 for j in range(m)])`,
        tests: [{ input: "3 3" }, { input: "5 5" }, { input: "2 4", hidden: true }, { input: "1 1", hidden: true }],
      },
      {
        id: "x26", title: "Проверки матрицы", level: "Сложная",
        statement: `<p>Дана матрица n × m. Выведите:</p>
          <ol><li>квадратная ли она (<code>да</code>/<code>нет</code>);</li><li>симметричная ли относительно главной диагонали (для неквадратной — <code>нет</code>);</li>
          <li>магический ли это квадрат — суммы всех строк, столбцов и обеих диагоналей равны (для неквадратной — <code>нет</code>);</li>
          <li>есть ли две одинаковые строки;</li><li>номера строк (с 1), сумма которых совпадает с суммой какой-то другой строки, через пробел (или <code>нет</code>);</li>
          <li>номер строки с максимальной суммой (первой);</li><li>номер столбца с максимальной суммой (первого);</li><li>номер строки с минимальным произведением (первой).</li></ol>${RANDOM_NOTE}`,
        starter: MATRIX_READ,
        solution: MATRIX_READ + py`

square = n == m
print("да" if square else "нет")
sym = square and all(a[i][j] == a[j][i] for i in range(n) for j in range(n))
print("да" if sym else "нет")
magic = False
if square:
    sums = [sum(row) for row in a]
    sums += [sum(a[i][j] for i in range(n)) for j in range(n)]
    sums.append(sum(a[i][i] for i in range(n)))
    sums.append(sum(a[i][n - 1 - i] for i in range(n)))
    magic = len(set(sums)) == 1
print("да" if magic else "нет")
print("да" if len(set(map(tuple, a))) < n else "нет")
rs = [sum(row) for row in a]
same = [i + 1 for i in range(n) if rs.count(rs[i]) > 1]
print(*same if same else ["нет"])
print(rs.index(max(rs)) + 1)
cs = [sum(a[i][j] for i in range(n)) for j in range(m)]
print(cs.index(max(cs)) + 1)
prods = []
for row in a:
    p = 1
    for x in row:
        p *= x
    prods.append(p)
print(prods.index(min(prods)) + 1)`,
        tests: [{ input: MX.magic }, { input: MX.rows }, { input: MX.sym, hidden: true }, { input: MX.m34, hidden: true }, { input: MX.m33, hidden: true }],
      },
      {
        id: "x27", title: "Диагонали и особые элементы", level: "Сложная",
        statement: `<p>Дана квадратная матрица (первая строка — «n n»). Выведите:</p>
          <ol><li>элементы главной диагонали;</li><li>элементы побочной диагонали;</li><li>разность сумм: главная − побочная;</li>
          <li>сумму элементов главной диагонали, которые больше среднего арифметического всей матрицы;</li>
          <li>произведение элементов матрицы, которые меньше среднего (или <code>нет</code>);</li>
          <li>матрицу, в которой в каждой строке поменяны местами элементы главной и побочной диагоналей (n строк);</li>
          <li>количество простых чисел в матрице;</li>
          <li>количество локальных максимумов — элементов, которые строго больше всех своих соседей сверху, снизу, слева и справа;</li>
          <li>сумму элементов, стоящих <b>между</b> минимальным и максимальным элементами при чтении матрицы по строкам (первые вхождения, сами min и max не входят; если между ними ничего нет — 0).</li></ol>${RANDOM_NOTE}`,
        starter: MATRIX_READ,
        solution: MATRIX_READ + py`

flat = [x for row in a for x in row]
print(*[a[i][i] for i in range(n)])
print(*[a[i][n - 1 - i] for i in range(n)])
print(sum(a[i][i] for i in range(n)) - sum(a[i][n - 1 - i] for i in range(n)))
avg = sum(flat) / len(flat)
print(sum(a[i][i] for i in range(n) if a[i][i] > avg))
low = [x for x in flat if x < avg]
if low:
    p = 1
    for x in low:
        p *= x
    print(p)
else:
    print("нет")
for i in range(n):
    row = a[i][:]
    row[i], row[n - 1 - i] = row[n - 1 - i], row[i]
    print(*row)

def is_prime(x):
    if x < 2:
        return False
    for d in range(2, int(x ** 0.5) + 1):
        if x % d == 0:
            return False
    return True

print(sum(1 for x in flat if is_prime(x)))
cnt = 0
for i in range(n):
    for j in range(m):
        nb = [a[i + di][j + dj] for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1))
              if 0 <= i + di < n and 0 <= j + dj < m]
        if all(a[i][j] > v for v in nb):
            cnt += 1
print(cnt)
i1, i2 = flat.index(min(flat)), flat.index(max(flat))
lo, hi = min(i1, i2), max(i1, i2)
print(sum(flat[lo + 1:hi]))`,
        tests: [{ input: MX.m33 }, { input: MX.m44 }, { input: MX.magic, hidden: true }, { input: MX.one, hidden: true }, { input: "2 2\n-1 -2\n-3 -4", hidden: true }],
      },
      {
        id: "x28", title: "Сортировка строк, вставка и сдвиг", level: "Сложная",
        statement: `<p>Дана матрица n × m. Выведите, разделяя части строкой <code>---</code>:</p>
          <ol><li>матрицу, строки которой отсортированы по возрастанию суммы элементов (при равных суммах порядок сохраняется);</li>
          <li>матрицу, в которой после строки с максимальной суммой (первой) вставлена строка из нулей;</li>
          <li>матрицу после циклического сдвига вправо на одну позицию при чтении по строкам (последний элемент матрицы становится первым, остальные сдвигаются);</li>
          <li>одной строкой — суммы чётных элементов каждой строки.</li></ol>${RANDOM_NOTE}`,
        starter: MATRIX_READ,
        solution: MATRIX_READ + py`

for row in sorted(a, key=sum):
    print(*row)
print("---")
rs = [sum(row) for row in a]
k = rs.index(max(rs))
b = [row[:] for row in a]
b.insert(k + 1, [0] * m)
for row in b:
    print(*row)
print("---")
flat = [x for row in a for x in row]
flat = flat[-1:] + flat[:-1]
for i in range(n):
    print(*flat[i * m:(i + 1) * m])
print("---")
print(*[sum(x for x in row if x % 2 == 0) for row in a])`,
        tests: [{ input: MX.m34 }, { input: MX.rows }, { input: MX.m33, hidden: true }, { input: MX.one, hidden: true }],
      },
    ],

    /* ==================== МОДУЛЬ 6 ==================== */
    m6: [
      {
        id: "f1", title: "Функции для работы с числами", level: "Лёгкая",
        statement: `<p>Напишите функции:</p>
          <ul><li><code>avg5(a, b, c, d, e)</code> — среднее арифметическое пяти целых чисел;</li>
          <li><code>digits_count(n)</code> — количество цифр в десятичной записи натурального n;</li>
          <li><code>zeros_in_binary(n)</code> — количество нулей в двоичной записи натурального n (например, 10 = 1010₂ → 2);</li>
          <li><code>octal_digits(n)</code> — количество цифр в восьмеричной записи натурального n (8 = 10₈ → 2).</li></ul>`,
        starter: py`
def avg5(a, b, c, d, e):
    pass


def digits_count(n):
    pass


def zeros_in_binary(n):
    pass


def octal_digits(n):
    pass
`,
        hint: `<p>Двоичная запись без префикса — <code>bin(n)[2:]</code>, восьмеричная — <code>oct(n)[2:]</code>. Или считайте делением с остатком в цикле.</p>`,
        solution: py`
def avg5(a, b, c, d, e):
    return (a + b + c + d + e) / 5


def digits_count(n):
    return len(str(n))


def zeros_in_binary(n):
    return bin(n)[2:].count("0")


def octal_digits(n):
    return len(oct(n)[2:])`,
        tests: [
          chk("avg5(1, 2, 3, 4, 5)", "3"), chk("digits_count(58321)", "5"), chk("zeros_in_binary(10)", "2"), chk("octal_digits(8)", "2"),
          chk("avg5(-5, 0, 5, 10, 16)", "5.2", true), chk("digits_count(7)", "1", true), chk("zeros_in_binary(8)", "3", true),
          chk("zeros_in_binary(7)", "0", true), chk("octal_digits(7)", "1", true), chk("octal_digits(512)", "4", true),
        ],
      },
      {
        id: "f2", title: "Счастливые билеты", level: "Средняя",
        statement: `<p>Шестизначное число называют <b>счастливым</b>, если сумма его первых трёх цифр равна сумме последних трёх. Определите функцию <code>digit_sum3(n)</code> — сумма цифр трёхзначного числа (от 0 до 999) — и с её помощью найдите счастливые числа на отрезке [a, b] (100000 ≤ a ≤ b ≤ 999999).</p>
          <p>Выведите их количество, а второй строкой — первые пять счастливых чисел отрезка через пробел (или сколько есть; если их нет — <code>нет</code>).</p>`,
        starter: py`
def digit_sum3(n):
    pass


a, b = map(int, input().split())
`,
        hint: `<p>Первые три цифры числа x — <code>x // 1000</code>, последние три — <code>x % 1000</code>. Для 123006 последние три цифры — это 006, то есть число 6, и digit_sum3(6) = 6.</p>`,
        solution: py`
def digit_sum3(n):
    return n // 100 + n // 10 % 10 + n % 10


a, b = map(int, input().split())
lucky = [x for x in range(a, b + 1) if digit_sum3(x // 1000) == digit_sum3(x % 1000)]
print(len(lucky))
print(*lucky[:5] if lucky else ["нет"])`,
        tests: [{ input: "100000 101000" }, { input: "123000 123999" }, { input: "999990 999999", hidden: true }, { input: "500000 540000", hidden: true }, { input: "100002 100009", hidden: true }],
      },
      {
        id: "f3", title: "Максимум из шести и обмен значений", level: "Лёгкая",
        statement: `<p>В первой строке — шесть различных чисел, во второй — четыре числа a, b, c, d.</p>
          <ol><li>Определите функцию <code>max2(x, y)</code> — максимум из двух чисел — и только с её помощью (без <code>max</code>) найдите максимум из шести чисел.</li>
          <li>Определите функцию <code>swap(x, y)</code>, которая возвращает пару в обратном порядке, и с её помощью поменяйте значения a ↔ b и c ↔ d. Выведите a, b, c, d через пробел.</li></ol>`,
        starter: py`
def max2(x, y):
    pass


def swap(x, y):
    pass


nums = list(map(int, input().split()))
a, b, c, d = map(int, input().split())
`,
        solution: py`
def max2(x, y):
    return x if x > y else y


def swap(x, y):
    return y, x


nums = list(map(int, input().split()))
a, b, c, d = map(int, input().split())
best = nums[0]
for x in nums[1:]:
    best = max2(best, x)
print(best)
a, b = swap(a, b)
c, d = swap(c, d)
print(a, b, c, d)`,
        tests: [{ input: "4 9 -2 15 7 12\n1 2 3 4" }, { input: "-1 -2 -3 -4 -5 -6\n5 5 0 9" }, { input: "100 1 2 3 4 5\n-1 1 -2 2", hidden: true }],
      },
      {
        id: "f4", title: "Периметр треугольника по координатам", level: "Средняя",
        statement: `<p>Даны координаты вершин треугольника: x1 y1 x2 y2 x3 y3 (в одной строке). Определите функцию <code>dist(x1, y1, x2, y2)</code> — длину отрезка — и с её помощью найдите периметр. Выведите его с двумя знаками после точки.</p>`,
        starter: py`
import math


def dist(x1, y1, x2, y2):
    pass


x1, y1, x2, y2, x3, y3 = map(float, input().split())
`,
        solution: py`
import math


def dist(x1, y1, x2, y2):
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)


x1, y1, x2, y2, x3, y3 = map(float, input().split())
p = dist(x1, y1, x2, y2) + dist(x2, y2, x3, y3) + dist(x3, y3, x1, y1)
print(f"{p:.2f}")`,
        tests: [{ input: "0 0 3 0 0 4" }, { input: "1 1 4 5 -2 5" }, { input: "-1.5 2 3 -2.5 0 0", hidden: true }],
      },
      {
        id: "f5", title: "Трёхзначные простые числа", level: "Средняя",
        statement: `<p>Определите функцию <code>is_prime(n)</code> (True для простых n) и функцию <code>three_digit_primes()</code>, которая с её помощью возвращает <b>список</b> всех трёхзначных простых чисел по возрастанию.</p>`,
        starter: py`
def is_prime(n):
    pass


def three_digit_primes():
    pass
`,
        solution: py`
def is_prime(n):
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False
    return True


def three_digit_primes():
    return [n for n in range(100, 1000) if is_prime(n)]`,
        tests: [
          chk("is_prime(7)", "True"), chk("is_prime(1)", "False"), chk("three_digit_primes()[:5]", "[101, 103, 107, 109, 113]"),
          chk("len(three_digit_primes())", "143", true), chk("three_digit_primes()[-1]", "997", true), chk("is_prime(2)", "True", true), chk("is_prime(91)", "False", true),
        ],
      },
      {
        id: "f6", title: "Треугольники и трапеции", level: "Средняя",
        statement: `<p>Определите функции, возвращающие кортеж (периметр, площадь):</p>
          <ul><li><code>triangle(a, b, c)</code> — по трём сторонам (площадь — по формуле Герона);</li>
          <li><code>trapezoid(a, b, h)</code> — для <b>равнобедренной</b> трапеции с основаниями a, b и высотой h.</li></ul>
          <p>И функцию <code>total(figures)</code>: получает список фигур (кортеж из 3 чисел — треугольник, кортеж <code>("trap", a, b, h)</code> — трапеция) и возвращает (сумма периметров, сумма площадей).</p>
          <p class="small muted">Проверка округляет результаты до 2 знаков.</p>`,
        starter: py`
import math


def triangle(a, b, c):
    pass


def trapezoid(a, b, h):
    pass


def total(figures):
    pass
`,
        hint: `<p>Герон: p = (a + b + c) / 2, S = √(p(p − a)(p − b)(p − c)). Боковая сторона равнобедренной трапеции — гипотенуза треугольника с катетами h и |a − b| / 2.</p>`,
        solution: py`
import math


def triangle(a, b, c):
    p = (a + b + c) / 2
    return a + b + c, math.sqrt(p * (p - a) * (p - b) * (p - c))


def trapezoid(a, b, h):
    side = math.sqrt(h ** 2 + ((a - b) / 2) ** 2)
    return a + b + 2 * side, (a + b) / 2 * h


def total(figures):
    sp = ss = 0
    for f in figures:
        p, s = trapezoid(*f[1:]) if f[0] == "trap" else triangle(*f)
        sp += p
        ss += s
    return sp, ss`,
        tests: [
          chk("tuple(round(x, 2) for x in triangle(3, 4, 5))", "(12, 6.0)"),
          chk("tuple(round(x, 2) for x in trapezoid(10, 4, 4))", "(24.0, 28.0)"),
          chk("tuple(round(x, 2) for x in total([(3, 4, 5), (5, 5, 6)]))", "(28, 18.0)"),
          chk("tuple(round(x, 2) for x in triangle(2, 2, 3))", "(7, 1.98)", true),
          chk("tuple(round(x, 2) for x in trapezoid(8, 8, 3))", "(22.0, 24.0)", true),
          chk("tuple(round(x, 2) for x in total([('trap', 10, 4, 4), ('trap', 6, 2, 1.5)]))", "(37.0, 34.0)", true),
        ],
      },
      {
        id: "f7", title: "Площадь фигуры по выбору", level: "Лёгкая",
        statement: `<p>В первой строке — название фигуры: <code>круг</code>, <code>прямоугольник</code> или <code>треугольник</code>; во второй — параметры: радиус; две стороны; основание и высоту. Для каждой фигуры напишите отдельную функцию площади. Выведите площадь с двумя знаками после точки, а для неизвестной фигуры — <code>неизвестная фигура</code>.</p>`,
        starter: py`
import math


def circle_area(r):
    pass


def rect_area(a, b):
    pass


def triangle_area(a, h):
    pass


shape = input()
`,
        solution: py`
import math


def circle_area(r):
    return math.pi * r ** 2


def rect_area(a, b):
    return a * b


def triangle_area(a, h):
    return a * h / 2


shape = input()
if shape == "круг":
    r = float(input())
    print(f"{circle_area(r):.2f}")
elif shape == "прямоугольник":
    a, b = map(float, input().split())
    print(f"{rect_area(a, b):.2f}")
elif shape == "треугольник":
    a, h = map(float, input().split())
    print(f"{triangle_area(a, h):.2f}")
else:
    print("неизвестная фигура")`,
        tests: [{ input: "круг\n2" }, { input: "прямоугольник\n3 4.5" }, { input: "треугольник\n5 3", hidden: true }, { input: "ромб\n1 1", hidden: true }],
      },
      {
        id: "f8", title: "Функции для матриц", level: "Сложная",
        statement: `<p>Напишите функции, принимающие матрицу (список списков):</p>
          <ul><li><code>is_magic(a)</code> — True, если матрица квадратная и суммы всех строк, столбцов и обеих диагоналей равны;</li>
          <li><code>diag_diff(a)</code> — сумма главной диагонали минус сумма побочной (квадратная матрица);</li>
          <li><code>same_sum_rows(a)</code> — список номеров строк (с 1), сумма которых совпадает с суммой какой-то другой строки; пустой список, если таких нет.</li></ul>`,
        starter: py`
def is_magic(a):
    pass


def diag_diff(a):
    pass


def same_sum_rows(a):
    pass
`,
        solution: py`
def is_magic(a):
    n = len(a)
    if any(len(row) != n for row in a):
        return False
    sums = [sum(row) for row in a]
    sums += [sum(a[i][j] for i in range(n)) for j in range(n)]
    sums.append(sum(a[i][i] for i in range(n)))
    sums.append(sum(a[i][n - 1 - i] for i in range(n)))
    return len(set(sums)) == 1


def diag_diff(a):
    n = len(a)
    return sum(a[i][i] for i in range(n)) - sum(a[i][n - 1 - i] for i in range(n))


def same_sum_rows(a):
    rs = [sum(row) for row in a]
    return [i + 1 for i in range(len(a)) if rs.count(rs[i]) > 1]`,
        tests: [
          chk("is_magic([[2, 7, 6], [9, 5, 1], [4, 3, 8]])", "True"),
          chk("diag_diff([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", "0"),
          chk("same_sum_rows([[1, 2, 3], [3, 2, 1], [0, 0, 5]])", "[1, 2]"),
          chk("is_magic([[1, 2], [3, 4]])", "False", true),
          chk("is_magic([[1, 2, 3], [4, 5, 6]])", "False", true),
          chk("is_magic([[5]])", "True", true),
          chk("diag_diff([[10, 0], [3, 1]])", "8", true),
          chk("same_sum_rows([[1], [2], [3]])", "[]", true),
          chk("is_magic([[1, 1, 1], [1, 1, 1], [1, 1, 2]])", "False", true),
        ],
      },
    ],

    /* ==================== МОДУЛЬ 7: файлы ==================== */
    m7: [
      {
        id: "z1", title: "Анализ текста из файла", level: "Средняя",
        statement: `<p>В файле <code>text.txt</code> — текст из одной или нескольких строк. Слово — последовательность символов между пробелами (знаки <code>. , ! ? : ;</code> по краям слова отбрасываются). Выведите:</p>
          <ol><li>количество символов в файле (включая пробелы и переводы строк);</li><li>количество строк;</li><li>количество слов;</li><li>количество букв;</li>
          <li>самое длинное слово (первое из самых длинных);</li><li>самое короткое слово (первое);</li><li>количество гласных (русских и латинских, без учёта регистра);</li>
          <li><code>да</code>, если в тексте есть слово python (без учёта регистра), иначе <code>нет</code>;</li><li>сколько раз встречаются слова python и java (без учёта регистра) через пробел.</li></ol>`,
        starter: py`
with open("text.txt", encoding="utf-8") as f:
    text = f.read()
`,
        solution: py`
with open("text.txt", encoding="utf-8") as f:
    text = f.read()
words = [w.strip(".,!?:;") for w in text.split()]
words = [w for w in words if w]
low = [w.lower() for w in words]
print(len(text))
print(len(text.splitlines()))
print(len(words))
print(sum(1 for ch in text if ch.isalpha()))
longest = shortest = words[0]
for w in words:
    if len(w) > len(longest):
        longest = w
    if len(w) < len(shortest):
        shortest = w
print(longest)
print(shortest)
print(sum(1 for ch in text.lower() if ch in "аеёиоуыэюяaeiou"))
print("да" if "python" in low else "нет")
print(low.count("python"), low.count("java"))`,
        tests: [
          { files: { "text.txt": "python java python ai python java" } },
          { files: { "text.txt": "Мама мыла раму.\nPython это язык!\nJava тоже язык." } },
          { files: { "text.txt": "a" }, hidden: true },
          { files: { "text.txt": "Изучаем: информатику, Python и алгоритмы!\n\nКонец." }, hidden: true },
        ],
      },
      {
        id: "z2", title: "Числа из файла: основные расчёты", level: "Лёгкая",
        statement: `<p>В файле <code>nums.txt</code> — целые числа через пробелы и/или переводы строк. Считайте их в список и выведите:</p>
          <ol><li>сам список (как печатает Python: <code>[5, 8, 3]</code>);</li><li>сумму;</li><li>максимум и минимум через пробел;</li><li>среднее (2 знака);</li>
          <li>количество чётных;</li><li>количество положительных и отрицательных через пробел;</li><li>произведение;</li><li>количество чисел больше среднего;</li>
          <li>чётные числа через пробел (или <code>нет</code>);</li><li>нечётные числа через пробел (или <code>нет</code>).</li></ol>`,
        starter: py`
with open("nums.txt", encoding="utf-8") as f:
    a = list(map(int, f.read().split()))
`,
        solution: py`
with open("nums.txt", encoding="utf-8") as f:
    a = list(map(int, f.read().split()))
print(a)
print(sum(a))
print(max(a), min(a))
avg = sum(a) / len(a)
print(f"{avg:.2f}")
print(sum(1 for x in a if x % 2 == 0))
print(sum(1 for x in a if x > 0), sum(1 for x in a if x < 0))
p = 1
for x in a:
    p *= x
print(p)
print(sum(1 for x in a if x > avg))
ev = [x for x in a if x % 2 == 0]
od = [x for x in a if x % 2 != 0]
print(*ev if ev else ["нет"])
print(*od if od else ["нет"])`,
        tests: [
          { files: { "nums.txt": "5 8 3 10 2 7" } },
          { files: { "nums.txt": "12 5 8 3 7 10 4 15" } },
          { files: { "nums.txt": "-4 0\n7\n-1 -1" }, hidden: true },
          { files: { "nums.txt": "9" }, hidden: true },
        ],
      },
      {
        id: "z3", title: "Числа из файла: поиск и перестановки", level: "Средняя",
        statement: `<p>В файле <code>nums.txt</code> — целые числа. Выведите:</p>
          <ol><li>индексы всех максимальных элементов через пробел;</li><li>массив без всех минимальных элементов (или <code>нет</code>);</li>
          <li>массив, где поменяны первый и последний элементы;</li><li>второй по величине различный элемент (или <code>нет</code>);</li><li>разность максимума и минимума;</li>
          <li>медиану (для чётного количества — среднее двух средних элементов отсортированного массива как float);</li>
          <li>моду — самое частое число (при равенстве — наименьшее из самых частых);</li>
          <li>числа, которые встречаются ровно один раз, в порядке появления (или <code>нет</code>);</li><li>вторую половину массива: <code>a[n // 2:]</code>.</li></ol>`,
        starter: py`
with open("nums.txt", encoding="utf-8") as f:
    a = list(map(int, f.read().split()))
n = len(a)
`,
        solution: py`
with open("nums.txt", encoding="utf-8") as f:
    a = list(map(int, f.read().split()))
n = len(a)

def show(lst):
    print(*lst if lst else ["нет"])

mx, mn = max(a), min(a)
show([i for i in range(n) if a[i] == mx])
show([x for x in a if x != mn])
b = a[:]
b[0], b[-1] = b[-1], b[0]
show(b)
d = sorted(set(a), reverse=True)
print(d[1] if len(d) > 1 else "нет")
print(mx - mn)
s = sorted(a)
print(s[n // 2] if n % 2 == 1 else (s[n // 2 - 1] + s[n // 2]) / 2)
print(min(a, key=lambda x: (-a.count(x), x)))
show([x for x in a if a.count(x) == 1])
show(a[n // 2:])`,
        tests: [
          { files: { "nums.txt": "12 5 8 3 7 10 4 15" } },
          { files: { "nums.txt": "5 8 5 3 8 5 10 3" } },
          { files: { "nums.txt": "7 7 7" }, hidden: true },
          { files: { "nums.txt": "4 -1 9 -1 9 2 6" }, hidden: true },
        ],
      },
      {
        id: "z4", title: "Своя сортировка и отчёт в файл", level: "Средняя",
        statement: `<p>Считайте числа из <code>nums.txt</code>. <b>На экран ничего не выводите</b> — программа должна записать два файла:</p>
          <ul><li><code>result.txt</code>: в первой строке — числа по возрастанию, во второй — по убыванию (через пробел). Сортировку напишите сами (пузырёк, выбор или вставки), без <code>sort</code> и <code>sorted</code>;</li>
          <li><code>report.txt</code>: пять строк — количество чисел, сумма, среднее (2 знака), максимум, минимум.</li></ul>
          <p>Проверка после запуска программы печатает содержимое обоих файлов.</p>`,
        starter: py`
with open("nums.txt", encoding="utf-8") as f:
    a = list(map(int, f.read().split()))
`,
        hint: `<p>Запись: <code>with open("result.txt", "w", encoding="utf-8") as f:</code> и <code>f.write(" ".join(map(str, a)) + "\\n")</code>. Не забывайте переводы строк — <code>write</code> их не добавляет.</p>`,
        solution: py`
with open("nums.txt", encoding="utf-8") as f:
    a = list(map(int, f.read().split()))
n = len(a)
s = a[:]
for i in range(n - 1):
    for j in range(n - 1 - i):
        if s[j] > s[j + 1]:
            s[j], s[j + 1] = s[j + 1], s[j]
with open("result.txt", "w", encoding="utf-8") as f:
    f.write(" ".join(map(str, s)) + "\n")
    f.write(" ".join(map(str, s[::-1])) + "\n")
with open("report.txt", "w", encoding="utf-8") as f:
    f.write(f"{n}\n{sum(a)}\n{sum(a) / n:.2f}\n{max(a)}\n{min(a)}\n")`,
        tests: [
          { files: { "nums.txt": "5 8 3 10 2 7" }, after: AFTER_Z4 },
          { files: { "nums.txt": "12 5 8 3 7 10 4 15" }, after: AFTER_Z4 },
          { files: { "nums.txt": "-3\n0\n-3 1" }, after: AFTER_Z4, hidden: true },
        ],
      },
      {
        id: "z5", title: "Частоты из файлов", level: "Средняя",
        statement: `<p>В файле <code>data.txt</code> — целые числа через пробел, в файле <code>letters.txt</code> — одно слово. Выведите частоты в формате <code>элемент : количество</code>, каждый элемент — с новой строки, в порядке <b>первого появления</b>: сначала для чисел из data.txt, затем строку <code>---</code>, затем для букв слова.</p>
          <p>Пример для чисел <code>12 5 8 12 3 5 8 12</code>: <code>12 : 3</code>, <code>5 : 2</code>, <code>8 : 2</code>, <code>3 : 1</code>.</p>`,
        starter: py`
with open("data.txt", encoding="utf-8") as f:
    nums = f.read().split()
with open("letters.txt", encoding="utf-8") as f:
    word = f.read().strip()
`,
        hint: `<p>Словарь в Python запоминает порядок добавления ключей, поэтому шаблон <code>freq[x] = freq.get(x, 0) + 1</code> сразу даёт нужный порядок.</p>`,
        solution: py`
with open("data.txt", encoding="utf-8") as f:
    nums = f.read().split()
with open("letters.txt", encoding="utf-8") as f:
    word = f.read().strip()
freq = {}
for x in nums:
    freq[int(x)] = freq.get(int(x), 0) + 1
for x, k in freq.items():
    print(x, ":", k)
print("---")
freq = {}
for ch in word:
    freq[ch] = freq.get(ch, 0) + 1
for ch, k in freq.items():
    print(ch, ":", k)`,
        tests: [
          { files: { "data.txt": "12 5 8 12 3 5 8 12", "letters.txt": "programming" } },
          { files: { "data.txt": "5 8 5 3 8 5 10 3", "letters.txt": "информатика" } },
          { files: { "data.txt": "1", "letters.txt": "a" }, hidden: true },
          { files: { "data.txt": "-1 -1 0 -1", "letters.txt": "Mississippi" }, hidden: true },
        ],
      },
      {
        id: "z6", title: "Палиндромы и анаграммы из файла", level: "Сложная",
        statement: `<p>В файле <code>words.txt</code> — слова через пробелы и/или переводы строк. Выведите:</p>
          <ol><li>все слова-палиндромы в порядке появления (или <code>нет</code>);</li>
          <li>группы анаграмм (слов, составленных из одних и тех же букв, без учёта регистра): каждую группу из 2 и более слов — отдельной строкой, слова в порядке появления, группы в порядке появления их первого слова. Если групп нет — <code>нет</code>.</li></ol>`,
        starter: py`
with open("words.txt", encoding="utf-8") as f:
    words = f.read().split()
`,
        hint: `<p>Ключ группы анаграмм — отсортированные буквы слова: <code>"".join(sorted(w.lower()))</code>. Соберите словарь «ключ → список слов».</p>`,
        solution: py`
with open("words.txt", encoding="utf-8") as f:
    words = f.read().split()
pal = [w for w in words if w.lower() == w.lower()[::-1]]
print(*pal if pal else ["нет"])
groups = {}
for w in words:
    key = "".join(sorted(w.lower()))
    groups.setdefault(key, []).append(w)
found = False
for g in groups.values():
    if len(g) >= 2:
        print(*g)
        found = True
if not found:
    print("нет")`,
        tests: [
          { files: { "words.txt": "level radar python civic code" } },
          { files: { "words.txt": "листок столик слиток кот ток\nКабан банка" } },
          { files: { "words.txt": "abc def" }, hidden: true },
          { files: { "words.txt": "Anna nana naan topot potot" }, hidden: true },
        ],
      },
      {
        id: "z7", title: "Матрица из файла", level: "Средняя",
        statement: `<p>В файле <code>matrix.txt</code> — квадратная матрица (строки файла — строки матрицы). Выведите сумму главной диагонали, сумму побочной диагонали, а затем матрицу, в которой каждый элемент заменён суммой своих соседей сверху, снизу, слева и справа.</p>`,
        starter: py`
with open("matrix.txt", encoding="utf-8") as f:
    a = [list(map(int, line.split())) for line in f if line.strip()]
n = len(a)
`,
        solution: py`
with open("matrix.txt", encoding="utf-8") as f:
    a = [list(map(int, line.split())) for line in f if line.strip()]
n = len(a)
print(sum(a[i][i] for i in range(n)))
print(sum(a[i][n - 1 - i] for i in range(n)))
for i in range(n):
    row = []
    for j in range(n):
        s = 0
        for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            if 0 <= i + di < n and 0 <= j + dj < n:
                s += a[i + di][j + dj]
        row.append(s)
    print(*row)`,
        tests: [
          { files: { "matrix.txt": "1 2 3\n4 5 6\n7 8 9" } },
          { files: { "matrix.txt": "5" } },
          { files: { "matrix.txt": "1 0 0 1\n0 2 2 0\n0 3 3 0\n4 0 0 4\n" }, hidden: true },
        ],
      },
    ],
  };

  for (const [mid, list] of Object.entries(T)) {
    const mod = window.COURSE.modules.find((m) => m.id === mid);
    if (mod) list.forEach((t) => mod.tasks.push(Object.assign({ extra: true }, t)));
  }
})();
