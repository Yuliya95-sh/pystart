/* =========================================================
   PyStart — модуль 10: тренировочные тесты по темам.
   Сгенерировано из Word-тестов курса; ключи ответов проверены
   запуском кода, ошибки в ключах исправлены.
   ========================================================= */
window.COURSE.modules.push({
 "id": "m10",
 "icon": "📝",
 "title": "Тренировочные тесты по темам",
 "summary": "28 тестов по 20 вопросов из материалов курса: ввод-вывод, линейные алгоритмы, условия, рекурсия, файлы, одномерные и двумерные массивы.",
 "lessons": [
  {
   "id": "l1",
   "title": "Как работать с тренировочными тестами",
   "blocks": [
    {
     "t": "html",
     "html": "<p>Здесь собраны тесты по темам курса — по 20 вопросов в каждом. После завершения теста вы увидите баллы, процент и правильные ответы с пояснениями там, где ответ неочевиден.</p><ul><li>Тесты можно проходить в любом порядке и сколько угодно раз — сохраняется лучший результат.</li><li>Модуль считается пройденным, когда сдан хотя бы один тест (от 70%).</li><li>Вопросы «что выведет программа» удобно проверять в <a href=\"#/sandbox\">песочнице</a>: скопируйте код и запустите.</li></ul>"
    },
    {
     "t": "note",
     "kind": "ent",
     "title": "Совет",
     "html": "<p>Если в ответах есть «Оба варианта верны» или «Все варианты верны», проверьте <b>каждый</b> фрагмент отдельно — именно на таких вопросах чаще всего теряют баллы.</p>"
    }
   ]
  }
 ],
 "tasks": [],
 "quizzes": [
  {
   "id": "p1",
   "title": "Переменные, ввод-вывод данных, типы данных",
   "questions": [
    {
     "type": "single",
     "q": "Для чего используется команда print() в Python?",
     "options": [
      "Для считывания данных с клавиатуры",
      "Для вывода данных на экран",
      "Для объявления переменных",
      "Для выполнения арифметических операций"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Как правильно записать вывод текста на экран в Python?",
     "options": [
      "print(Привет)",
      "print('Привет')",
      "print(\"Привет)",
      "Print('Привет')"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какое утверждение о кавычках в print() верно?",
     "options": [
      "Можно использовать только одинарные кавычки",
      "Можно использовать только двойные кавычки",
      "Можно использовать одинарные или двойные кавычки, но до и после текста должны быть одинаковые",
      "Кавычки не обязательны для текста"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Что называется аргументами команды print()?",
     "options": [
      "Переменные, объявленные в программе",
      "Конкретные значения, которые передаются функции при её вызове",
      "Команды для считывания данных",
      "Типы данных в Python"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Как отделяются несколько аргументов в команде print()?",
     "options": [
      "Точками с запятой",
      "Запятыми",
      "Пробелами",
      "Двоеточиями"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Что произойдёт при выполнении кода: print(&#x27;aa&#x27;, &#x27;bb&#x27;, &#x27;cc&#x27;)?",
     "options": [
      "aa bb cc",
      "aabbcc",
      "aa,bb,cc",
      "aa-bb-cc"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "За что отвечает параметр sep в команде print()?",
     "options": [
      "За разделение аргументов при выводе",
      "За окончание строки после вывода",
      "За цвет текста",
      "За размер шрифта"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Каково значение параметра sep по умолчанию?",
     "options": [
      "Запятая (,)",
      "Символ перевода строки (\\n)",
      "Пробел ( )",
      "Звёздочка (*)"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет код: print(&#x27;aa&#x27;, &#x27;bb&#x27;, &#x27;cc&#x27;, sep=&#x27;*&#x27;)?",
     "options": [
      "aa bb cc",
      "aa*bb*cc",
      "aa* bb* cc",
      "aa,bb,cc"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "За что отвечает параметр end в команде print()?",
     "options": [
      "За разделение аргументов",
      "За строку, которая добавляется в конец вывода",
      "За начало вывода",
      "За цвет фона"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Каково значение параметра end по умолчанию?",
     "options": [
      "Пробел",
      "Запятая",
      "Символ перевода строки (\\n)",
      "Точка с запятой"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет код: print(&#x27;a&#x27;, &#x27;b&#x27;, &#x27;c&#x27;, end=&#x27;-&#x27;)?",
     "options": [
      "a b c-",
      "a-b-c",
      "a b c",
      "-a b c"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Что выведет код: print(&#x27;a&#x27;, &#x27;b&#x27;, &#x27;c&#x27;, sep=&#x27;-&#x27;, end=&#x27;!&#x27;)?",
     "options": [
      "a b c!",
      "a-b-c!",
      "a-b-c",
      "!a-b-c"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Влияет ли параметр sep на вывод, если в команде print() указан только один аргумент?",
     "options": [
      "Да, влияет так же, как и с несколькими аргументами",
      "Нет, параметру sep нечего разделять, поэтому он не влияет на вывод",
      "Влияет, но только если это текстовый аргумент",
      "Вызывает ошибку"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Для чего используется команда input() в Python?",
     "options": [
      "Для вывода данных на экран",
      "Для считывания данных, введённых с клавиатуры",
      "Для объявления переменных",
      "Для завершения программы"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Что происходит, когда программа доходит до команды input()?",
     "options": [
      "Программа завершается",
      "Программа ждёт, пока пользователь введёт текст с клавиатуры и нажмёт Enter",
      "Программа выводит приглашение автоматически",
      "Программа переходит к следующей строке без ожидания"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Что подставляется на место вызова input() после ввода данных?",
     "options": [
      "Числовое значение",
      "Строковое значение (введённый текст)",
      "Логическое значение (True/False)",
      "Пустое значение"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код корректно считывает имя пользователя и выводит приветствие?",
     "options": [
      "print('Привет,', input())",
      "print('Привет, input()')",
      "print('Привет,', 'input()')",
      "print(input('Привет,'))"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой символ используется для перевода строки в параметре end?",
     "options": [
      "/n",
      "\\n",
      "\\r",
      "/r"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Что выведет следующий код?",
     "options": [
      "Hello World!",
      "Hello\nWorld!",
      "HelloWorld!",
      "Hello\tWorld!"
     ],
     "answer": 0,
     "code": "print('Hello', end=' ')\nprint('World!')",
     "codeOptions": true
    }
   ]
  },
  {
   "id": "p2",
   "title": "Программирование линейных алгоритмов",
   "questions": [
    {
     "type": "single",
     "q": "Какая операция в Python используется для возведения числа в степень?",
     "options": [
      "^",
      "**",
      "pow",
      "%"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какая операция возвращает остаток от деления?",
     "options": [
      "/",
      "//",
      "%",
      "*"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Какая операция возвращает целую часть от деления?",
     "options": [
      "/",
      "//",
      "%",
      "*"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой результат даст выражение 15 / 4 в Python?",
     "options": [
      "3",
      "3.75",
      "3.0",
      "4"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой результат даст выражение 15 // 4?",
     "options": [
      "3",
      "3.75",
      "4",
      "2"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какой результат даст выражение 15 % 4?",
     "options": [
      "3",
      "4",
      "1",
      "2"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какой результат даст выражение 2 ** 5?",
     "options": [
      "10",
      "25",
      "32",
      "16"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Какая функция вычисляет квадратный корень числа в Python?",
     "options": [
      "pow()",
      "abs()",
      "sqrt()",
      "sqr()"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Для использования функции sqrt() необходимо импортировать модуль:",
     "options": [
      "math",
      "random",
      "os",
      "sys"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какая функция возвращает абсолютное значение (модуль) числа?",
     "options": [
      "pow()",
      "abs()",
      "sqrt()",
      "round()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Чему равно значение выражения abs(-15)?",
     "options": [
      "-15",
      "15",
      "0",
      "Ошибка"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Чему равно значение выражения pow(3, 3)?",
     "options": [
      "9",
      "18",
      "27",
      "6"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Чему равно значение выражения sqrt(64) (после импорта math)?",
     "options": [
      "6",
      "7",
      "8",
      "9"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Чему равно значение выражения (5 + 3) * 2?",
     "options": [
      "11",
      "16",
      "13",
      "10"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Чему равно значение выражения 5 + 3 * 2?",
     "options": [
      "16",
      "11",
      "13",
      "10"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой оператор используется для ввода данных с клавиатуры в Python?",
     "options": [
      "print()",
      "input()",
      "scan()",
      "read()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой оператор используется для вывода данных на экран в Python?",
     "options": [
      "input()",
      "print()",
      "write()",
      "display()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как правильно преобразовать введённое значение в целое число?",
     "options": [
      "int(input())",
      "input(int())",
      "input().int()",
      "float(input())"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как правильно записать оператор вывода значения переменной x с пояснительным текстом?",
     "options": [
      "print(x)",
      "print('x =', x)",
      "print('x = x')",
      "print(\"x\", x)"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой результат выведет программа:",
     "options": [
      "3.5 1",
      "3.5 0",
      "3 1",
      "3 2"
     ],
     "answer": 2,
     "code": "a = 7\nb = 2\nprint(a // b, a % b)"
    }
   ]
  },
  {
   "id": "p3",
   "title": "Составные условия в Python",
   "questions": [
    {
     "type": "single",
     "q": "Какой логический оператор в Python означает «И» (оба условия должны быть истинны)?",
     "options": [
      "or",
      "and",
      "not",
      "&amp;"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой логический оператор в Python означает «ИЛИ» (хотя бы одно условие истинно)?",
     "options": [
      "and",
      "not",
      "or",
      "|"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Какой логический оператор в Python инвертирует значение условия?",
     "options": [
      "and",
      "or",
      "not",
      "!"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Какое условие проверяет, что число x находится в диапазоне от 10 до 20 включительно?",
     "options": [
      "if x > 10 and x < 20:",
      "if x >= 10 and x <= 20:",
      "if x >= 10 or x <= 20:",
      "if not x < 10 and not x > 20:"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какое условие проверяет, что число x НЕ равно 5?",
     "options": [
      "if x != 5:",
      "if not x == 5:",
      "if x not 5:",
      "if x != 5 and not x == 5:"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Чему равно значение выражения True and False?",
     "options": [
      "True",
      "False",
      "None",
      "Ошибка"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Чему равно значение выражения True or False?",
     "options": [
      "True",
      "False",
      "None",
      "Ошибка"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Чему равно значение выражения not True?",
     "options": [
      "True",
      "False",
      "None",
      "Ошибка"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Чему равно значение выражения (5 &gt; 3) and (2 &gt; 4)?",
     "options": [
      "True",
      "False",
      "None",
      "Ошибка"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Чему равно значение выражения (5 &gt; 3) or (2 &gt; 4)?",
     "options": [
      "True",
      "False",
      "None",
      "Ошибка"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "A",
      "B",
      "Ошибка",
      "Ничего"
     ],
     "answer": 0,
     "code": "x = 15\nif x > 10 and x < 20:\n    print('A')\nelse:\n    print('B')"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "A",
      "B",
      "Ошибка",
      "Ничего"
     ],
     "answer": 1,
     "code": "x = 25\nif x > 10 and x < 20:\n    print('A')\nelse:\n    print('B')"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "A",
      "B",
      "Ошибка",
      "Ничего"
     ],
     "answer": 1,
     "code": "x = 5\nif x < 0 or x > 10:\n    print('A')\nelse:\n    print('B')"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "A",
      "B",
      "Ошибка",
      "Ничего"
     ],
     "answer": 0,
     "code": "x = -3\nif x < 0 or x > 10:\n    print('A')\nelse:\n    print('B')"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "A",
      "B",
      "Ошибка",
      "Ничего"
     ],
     "answer": 0,
     "code": "x = 8\nif not x > 10:\n    print('A')\nelse:\n    print('B')"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "A",
      "B",
      "Ошибка",
      "Ничего"
     ],
     "answer": 0,
     "code": "x = 12\nif not x < 10:\n    print('A')\nelse:\n    print('B')"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "A",
      "B",
      "Ошибка",
      "Ничего"
     ],
     "answer": 0,
     "code": "x = 7\nif x > 5 and x < 10 and x % 2 == 1:\n    print('A')\nelse:\n    print('B')"
    },
    {
     "type": "single",
     "q": "Что выведет программа? print(&#x27;Можно водить&#x27;) print(&#x27;Нельзя водить&#x27;)",
     "options": [
      "Можно водить",
      "Нельзя водить",
      "Ошибка",
      "Ничего"
     ],
     "answer": 0,
     "code": "age = 20\nhas_license = True\nif age >= 18 and has_license:\nelse:"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "A",
      "B",
      "Ошибка",
      "Ничего"
     ],
     "answer": 0,
     "code": "x = 10\nif x > 5 or x < 3:\n    print('A')\nelse:\n    print('B')"
    },
    {
     "type": "single",
     "q": "Что выведет программа? print(&#x27;В диапазоне&#x27;) print(&#x27;Вне диапазона&#x27;)",
     "options": [
      "В диапазоне",
      "Вне диапазона",
      "Ошибка",
      "Ничего"
     ],
     "answer": 0,
     "code": "x = 4\nif (x > 0 and x < 10) or (x == 15):\nelse:"
    }
   ]
  },
  {
   "id": "p4",
   "title": "Рекурсия (урок 2)",
   "questions": [
    {
     "type": "single",
     "q": "Что будет находиться в стеке вызовов в момент, когда выполняется factorial(1) при вызове factorial(3)?",
     "options": [
      "factorial(3), factorial(2), factorial(1)",
      "factorial(1)",
      "factorial(3), factorial(2)",
      "factorial(2), factorial(1)"
     ],
     "answer": 0,
     "code": "def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n-1)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Сколько всего вызовов функции factorial произойдёт при вычислении factorial(4) (включая базовый случай)?",
     "options": [
      "4",
      "5",
      "3",
      "6"
     ],
     "answer": 0,
     "code": "def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n-1)"
    },
    {
     "type": "single",
     "q": "Что произойдёт, если в рекурсивной функции factorial убрать базовый случай (if n == 1)?",
     "options": [
      "Функция вернёт None",
      "Возникнет ошибка RecursionError",
      "Функция выполнится быстрее",
      "Python автоматически добавит базовый случай"
     ],
     "answer": 1,
     "code": "def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n-1)"
    },
    {
     "type": "single",
     "q": "В какой момент стек вызовов начинает «разворачиваться» (выталкивать вызовы)?",
     "options": [
      "После первого рекурсивного вызова",
      "При достижении базового случая",
      "После возврата из функции main",
      "В момент вызова factorial(3)"
     ],
     "answer": 1,
     "code": "def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n-1)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что вернёт power(2, 3)?",
     "options": [
      "6",
      "8",
      "9",
      "12"
     ],
     "answer": 1,
     "code": "def power(a, n):\n    if n == 0:\n        return 1\n    return a * power(a, n-1)"
    },
    {
     "type": "single",
     "q": "Сколько всего вызовов функции power произойдёт при выполнении power(3, 4)?",
     "options": [
      "4",
      "5",
      "3",
      "6"
     ],
     "answer": 1,
     "code": "def power(a, n):\n    if n == 0:\n        return 1\n    return a * power(a, n-1)"
    },
    {
     "type": "single",
     "q": "Какой базовый случай в функции power(a, n)?",
     "options": [
      "n == 1",
      "n == 0",
      "a == 0",
      "a == 1"
     ],
     "answer": 1,
     "code": "def power(a, n):\n    if n == 0:\n        return 1\n    return a * power(a, n-1)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что вернёт power(5, 0)?",
     "options": [
      "0",
      "1",
      "5",
      "Ошибка"
     ],
     "answer": 1,
     "code": "def power(a, n):\n    if n == 0:\n        return 1\n    return a * power(a, n-1)"
    },
    {
     "type": "single",
     "q": "Что вернёт count_digits(123)?",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answer": 2,
     "code": "def count_digits(n):\n    if n < 10:\n        return 1\n    return 1 + count_digits(n // 10)"
    },
    {
     "type": "single",
     "q": "Сколько всего вызовов функции count_digits произойдёт при count_digits(4567)?",
     "options": [
      "3",
      "4",
      "5",
      "6"
     ],
     "answer": 1,
     "code": "def count_digits(n):\n    if n < 10:\n        return 1\n    return 1 + count_digits(n // 10)"
    },
    {
     "type": "single",
     "q": "Что произойдёт, если передать в count_digits отрицательное число, например -5?",
     "options": [
      "Вернёт 1",
      "Вернёт -1",
      "Бесконечная рекурсия",
      "Ошибка"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какое условие является базовым в count_digits?",
     "options": [
      "n == 0",
      "n < 10",
      "n > 0",
      "n == 1"
     ],
     "answer": 1,
     "code": "def count_digits(n):\n    if n < 10:\n        return 1\n    return 1 + count_digits(n // 10)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что вернёт reverse(&quot;abc&quot;)?",
     "options": [
      "&quot;abc&quot;",
      "&quot;cba&quot;",
      "&quot;acb&quot;",
      "&quot;bca&quot;"
     ],
     "answer": 1,
     "code": "def reverse(s):\n    if len(s) == 0:\n        return s\n    return reverse(s[1:]) + s[0]"
    },
    {
     "type": "single",
     "q": "Сколько всего вызовов функции reverse произойдёт при reverse(&quot;hello&quot;)?",
     "options": [
      "4",
      "5",
      "6",
      "3"
     ],
     "answer": 2,
     "code": "def reverse(s):\n    if len(s) == 0:\n        return s\n    return reverse(s[1:]) + s[0]"
    },
    {
     "type": "single",
     "q": "Как изменится результат, если в reverse поменять местами слагаемые: return s[0] + reverse(s[1:])?",
     "options": [
      "Результат не изменится",
      "Строка не перевернётся",
      "Будет ошибка",
      "Строка перевернётся дважды"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Что вернёт filter_even([1, 2, 3, 4, 5, 6])?",
     "options": [
      "[2, 4, 6]",
      "[1, 3, 5]",
      "[2, 4]",
      "[1, 2, 3, 4, 5, 6]"
     ],
     "answer": 0,
     "code": "def filter_even(lst):\n    if not lst:\n        return []\n    if lst[0] % 2 == 0:\n        return [lst[0]] + filter_even(lst[1:])\n    else:\n        return filter_even(lst[1:])",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Сколько всего вызовов функции filter_even произойдёт при обработке списка [1, 3, 5]?",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answer": 3,
     "code": "def filter_even(lst):\n    if not lst:\n        return []\n    if lst[0] % 2 == 0:\n        return [lst[0]] + filter_even(lst[1:])\n    else:\n        return filter_even(lst[1:])"
    },
    {
     "type": "single",
     "q": "Что вернёт find_max([3, 1, 4, 2])?",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answer": 3,
     "code": "def find_max(lst):\n    if len(lst) == 1:\n        return lst[0]\n    max_rest = find_max(lst[1:])\n    return lst[0] if lst[0] > max_rest else max_rest"
    },
    {
     "type": "single",
     "q": "Что вернёт gcd(12, 8)?",
     "options": [
      "2",
      "4",
      "6",
      "8"
     ],
     "answer": 1,
     "code": "def gcd(a, b):\n    if b == 0:\n        return a\n    return gcd(b, a % b)"
    },
    {
     "type": "single",
     "q": "Что вернёт is_palindrome(&quot;abba&quot;)?",
     "options": [
      "True",
      "False",
      "Ошибка",
      "None"
     ],
     "answer": 0,
     "code": "def is_palindrome(s):\n    if len(s) <= 1:\n        return True\n    if s[0] != s[-1]:\n        return False\n    return is_palindrome(s[1:-1])"
    }
   ]
  },
  {
   "id": "p5",
   "title": "Работа с файлами в Python (урок 2)",
   "questions": [
    {
     "type": "single",
     "q": "Что произойдёт, если открыть существующий файл в режиме &#x27;w&#x27;?",
     "options": [
      "Данные добавятся в конец файла",
      "Файл откроется только для чтения",
      "Всё содержимое файла будет стёрто",
      "Будет вызвана ошибка"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Какой режим открытия файла позволяет дописывать данные в конец, не удаляя старое содержимое?",
     "options": [
      "&#x27;r&#x27;",
      "&#x27;w&#x27;",
      "&#x27;a&#x27;",
      "&#x27;r+&#x27;"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Какой метод читает весь файл в одну строку?",
     "options": [
      ".readline()",
      ".readlines()",
      ".read()",
      ".write()"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой метод возвращает список строк файла?",
     "options": [
      ".read()",
      ".readline()",
      ".readlines()",
      ".writelines()"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что делает метод .write(&quot;Hello&quot;)?",
     "options": [
      "Записывает строку и автоматически добавляет \\n",
      "Записывает строку без добавления \\n",
      "Читает строку из файла",
      "Удаляет строку из файла"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Зачем нужен менеджер контекста with open(...) as f:?",
     "options": [
      "Для ускорения чтения файла",
      "Для автоматического закрытия файла даже при ошибке",
      "Для шифрования данных",
      "Для создания нового файла"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какая ошибка возникнет при попытке открыть несуществующий файл в режиме &#x27;r&#x27;?",
     "options": [
      "UnicodeDecodeError",
      "FileNotFoundError",
      "PermissionError",
      "ValueError"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Что нужно добавить при открытии файла, чтобы корректно прочитать русский текст?",
     "options": [
      "encoding='utf-8'",
      "mode='utf-8'",
      "decode='utf-8'",
      "charset='utf-8'"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой метод показывает текущую позицию курсора в файле?",
     "options": [
      ".seek()",
      ".tell()",
      ".read()",
      ".position()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как переместить курсор в начало файла?",
     "options": [
      "f.seek(0)",
      "f.tell(0)",
      "f.read(0)",
      "f.rewind()"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какие режимы используются для копирования изображения?",
     "options": [
      "&#x27;r&#x27; и &#x27;w&#x27;",
      "&#x27;rb&#x27; и &#x27;wb&#x27;",
      "&#x27;a&#x27; и &#x27;r&#x27;",
      "&#x27;r+&#x27; и &#x27;w+&#x27;"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Что произойдёт, если записать f.write(&quot;Hello&quot;) и f.write(&quot;World&quot;) без \\n?",
     "options": [
      "В файле будет Hello\\nWorld",
      "В файле будет HelloWorld",
      "В файле будет Hello World",
      "Будет ошибка"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой из способов НЕ подходит для записи списка [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;] в файл с переводами строк?",
     "options": [
      "for item in list: f.write(item + \"\\n\")",
      "f.writelines(f\"{item}\\n\" for item in list)",
      "print(*list, sep=\"\\n\", file=f)",
      "f.write(list)"
     ],
     "answer": 3,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "В каком режиме файл создаётся, если его не существует, и очищается, если существует?",
     "options": [
      "&#x27;r&#x27;",
      "&#x27;w&#x27;",
      "&#x27;a&#x27;",
      "&#x27;r+&#x27;"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Что вернёт .readline() при достижении конца файла?",
     "options": [
      "Пустую строку &#x27;&#x27;",
      "None",
      "Ошибку",
      "Последнюю строку"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Для чего используется режим &#x27;r+&#x27;?",
     "options": [
      "Только для чтения",
      "Только для записи",
      "Для чтения и записи без стирания содержимого",
      "Для добавления в конец"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Какая ошибка возникает, если файл открыт в другой программе (например, Excel)?",
     "options": [
      "FileNotFoundError",
      "PermissionError",
      "UnicodeDecodeError",
      "IOError"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой цикл является наиболее «питоничным» для построчного чтения файла?",
     "options": [
      "while True: line = f.readline()",
      "for line in f:",
      "for i in range(len(f)):",
      "while f.read():"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что делает метод .seek(5)?",
     "options": [
      "Перемещает курсор на 5 байт от начала файла",
      "Перемещает курсор на 5 строк вперёд",
      "Читает 5 символов",
      "Удаляет 5 байт"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какая задача требует открытия файла в режиме &#x27;w&#x27;?",
     "options": [
      "Чтение и подсчёт строк",
      "Поиск слова в файле",
      "Запись списка чисел в новый файл",
      "Копирование файла с заменой"
     ],
     "answer": 2
    }
   ]
  },
  {
   "id": "p6",
   "title": "Одномерные массивы, ч. 1",
   "questions": [
    {
     "type": "single",
     "q": "Что такое список в Python?",
     "options": [
      "Упорядоченный набор элементов, объединённых одним именем",
      "Неупорядоченный набор элементов",
      "Переменная, хранящая одно значение",
      "Числовой тип данных"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какое утверждение о списках в Python является верным?",
     "options": [
      "Элементы списка неизменяемы",
      "Список может хранить элементы разных типов",
      "Список нельзя изменить после создания",
      "Элементы списка не имеют индексов"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Как создать список из пяти нулей через вспомогательную переменную?",
     "options": [
      "B = [0, 0, 0, 0, 0]",
      "B = [0] * n",
      "B = list(0 * 5)",
      "B = [0 for i in range(5)]"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой индекс имеет первый элемент списка?",
     "options": [
      "1",
      "-1",
      "0",
      "Зависит от длины"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Какой индекс имеет последний элемент списка A = [10, 20, 30, 40]?",
     "options": [
      "4",
      "3",
      "-1",
      "0"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Чему равен len(A) для списка A = [5, 10, 15]?",
     "options": [
      "2",
      "3",
      "4",
      "5"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Как получить доступ к третьему элементу списка A?",
     "options": [
      "A[3]",
      "A[2]",
      "A[-3]",
      "A[1]"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "5",
      "6",
      "7",
      "4"
     ],
     "answer": 1,
     "code": "A = [1, 2, 3, 4, 5]\nprint(A[0] + A[-1])"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4]",
      "[1, 2, 10, 4]",
      "[1, 10, 3, 4]",
      "Ошибка"
     ],
     "answer": 1,
     "code": "A = [1, 2, 3, 4]\nA[2] = 10\nprint(A)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как правильно ввести 5 чисел с клавиатуры в список с помощью input().split()?",
     "options": [
      "A = list(map(int, input().split()))",
      "A = input().split()",
      "A = map(int, input().split())",
      "A = int(input().split())"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как создать список из 10 элементов, каждый из которых равен 7?",
     "options": [
      "A = [7] * 10",
      "A = [0] * 10",
      "A = 7 * 10",
      "A = [7, 10]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как правильно ввести 5 чисел с клавиатуры с использованием цикла for?",
     "options": [
      "N = 5\nB = [0] * N\nfor i in range(N):\n    B[i] = int(input())",
      "B = list(map(int, input().split()))",
      "B = input().split()",
      "B = [input() for i in range(5)]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой способ создания списка использован в коде:",
     "options": [
      "Заполнение списка указанием значений",
      "Ввод с клавиатуры с использованием цикла",
      "Ввод в одну строку через split()",
      "Заполнение случайными числами"
     ],
     "answer": 1,
     "code": "N = 3\nA = [0] * N\nfor i in range(N):\n    A[i] = int(input())",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "105",
      "114",
      "108",
      "111"
     ],
     "answer": 1,
     "code": "A = [3, 6, 9, 12, 15]\nA[1] = 99\nprint(A[1] + A[4])"
    },
    {
     "type": "single",
     "q": "Укажи индекс элемента 30 в списке A = [10, 20, 30, 40]?",
     "options": [
      "2",
      "0",
      "1",
      "-1"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "35",
      "42",
      "49",
      "28"
     ],
     "answer": 1,
     "code": "A = [7, 14, 21, 28, 35]\nprint(A[1] + A[3])"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[10, 20, 30, 40, 50]",
      "[10, 20, 30, 100, 50]",
      "[10, 20, 100, 40, 50]",
      "Ошибка"
     ],
     "answer": 1,
     "code": "A = [10, 20, 30, 40, 50]\nA[3] = 100\nprint(A)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "8",
      "9",
      "10",
      "7"
     ],
     "answer": 2,
     "code": "A = [1, 3, 5, 7, 9]\nprint(A[-1] + A[0])"
    },
    {
     "type": "single",
     "q": "Каким будет список A после выполнения кода?",
     "options": [
      "[5, 10, 15, 0]",
      "[0, 0, 0, 0]",
      "[5, 10, 15, 15]",
      "[5, 10, 15]"
     ],
     "answer": 0,
     "code": "A = [0] * 4\nA[0] = 5\nA[1] = 10\nA[2] = A[0] + A[1]",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Сколько элементов содержит список B = [1, 2, 3] после выполнения B[1] = 100?",
     "options": [
      "3",
      "2",
      "4",
      "1"
     ],
     "answer": 0
    }
   ]
  },
  {
   "id": "p7",
   "title": "Одномерные массивы, ч. 2",
   "questions": [
    {
     "type": "single",
     "q": "Какой из приведённых кодов правильно создаёт список A из 5 элементов, заполненный нулями?",
     "options": [
      "A = [0] * 5",
      "A = [0, 0, 0, 0]",
      "A = [0 for i in range(4)]",
      "A = [0] * 4"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4]",
      "[1, 2, 3, 3]",
      "[1, 2, 4, 4]",
      "[1, 2, 5, 4]"
     ],
     "answer": 0,
     "code": "A = [1, 2, 3, 4]\nA[2] = A[0] + A[1]\nprint(A)",
     "codeOptions": true,
     "explain": "A[2] = A[0] + A[1] = 1 + 2 = 3 — значение не меняется, список остаётся [1, 2, 3, 4]."
    },
    {
     "type": "single",
     "q": "Каким будет список C после выполнения кода?",
     "options": [
      "[0, 3, 6, 9]",
      "[3, 6, 9, 12]",
      "[0, 1, 2, 3]",
      "[0, 3, 6, 9, 12]"
     ],
     "answer": 0,
     "code": "N = 4\nC = [0] * N\nfor i in range(N):\n    C[i] = i * 3",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код правильно заполняет список B случайными целыми числами от 0 до 10 (включительно) с использованием функции randint?",
     "options": [
      "from random import randint\nB = [0] * 5\nfor i in range(5):\n    B[i] = randint(0, 10)",
      "import random\nB = [0] * 5\nfor i in range(5):\n    B[i] = random.randint(0, 10)",
      "Оба варианта верны",
      "Ни один не верен"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "20",
      "30",
      "40",
      "50"
     ],
     "answer": 2,
     "code": "A = [10, 20, 30]\nprint(A[-1] + A[0])"
    },
    {
     "type": "single",
     "q": "Какое значение будет у элемента A[-2] после выполнения кода?",
     "options": [
      "5",
      "10",
      "15",
      "99"
     ],
     "answer": 3,
     "code": "A = [5, 10, 15, 20]\nA[-2] = 99"
    },
    {
     "type": "single",
     "q": "Сколько раз будет запрошен ввод при выполнении следующего фрагмента?",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answer": 2,
     "code": "N = 3\nB = [0] * N\nfor i in range(N):\n    B[i] = int(input())"
    },
    {
     "type": "single",
     "q": "Чему равна длина списка D после выполнения кода?",
     "options": [
      "4",
      "5",
      "6",
      "3"
     ],
     "answer": 1,
     "code": "D = [0, 1, 2, 3, 4]"
    },
    {
     "type": "single",
     "q": "Какой из вариантов правильно считывает числа с клавиатуры в одну строку через пробел и сохраняет их в список целых чисел?",
     "options": [
      "A = list(map(int, input().split()))",
      "A = input().split()",
      "A = map(int, input().split())",
      "A = int(input().split())"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "10",
      "18",
      "20",
      "24"
     ],
     "answer": 2,
     "code": "A = [2, 4, 6, 8]\ns = 0\nfor i in range(len(A)):\n    s = s + A[i]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Каким будет список M после выполнения кода?",
     "options": [
      "[1, 2, 3]",
      "[1, 4, 3]",
      "[1, 5, 3]",
      "[1, 3, 3]"
     ],
     "answer": 1,
     "code": "M = [1, 2, 3]\nM[1] = M[0] + M[2]",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой способ создания списка используется в коде?",
     "options": [
      "Заполнение указанием значений",
      "Ввод с клавиатуры",
      "Вычисление по формуле",
      "Заполнение случайными числами"
     ],
     "answer": 2,
     "code": "N = 4\nA = [0] * N\nfor i in range(N):\n    A[i] = i ** 2"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "3",
      "6",
      "99",
      "9"
     ],
     "answer": 2,
     "code": "A = [3, 6, 9]\nB = A\nB[0] = 99\nprint(A[0])"
    },
    {
     "type": "single",
     "q": "Чему равно значение A[0] после выполнения цикла?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 1,
     "code": "A = [0] * 3\nfor i in range(3):\n    A[i] = i + 1"
    },
    {
     "type": "single",
     "q": "Какой код заполняет список R случайными числами с использованием import random?",
     "options": [
      "import random\nR = [0] * 5\nfor i in range(5):\n    R[i] = random.randint(-5, 5)",
      "from random import randint\nR = [0] * 5\nfor i in range(5):\n    R[i] = randint(-5, 5)",
      "Оба варианта верны",
      "Ни один не верен"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answer": 1,
     "code": "A = [1, 2, 3, 4]\nprint(A[3] - A[1])"
    },
    {
     "type": "single",
     "q": "Как изменить третий элемент списка X = [10, 20, 30, 40] на значение 100?",
     "options": [
      "X[2] = 100",
      "X[3] = 100",
      "X[-2] = 100",
      "X[1] = 100"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "3",
      "6",
      "4",
      "8"
     ],
     "answer": 1,
     "code": "A = [5, 4, 3, 2, 1]\nfor i in range(5):\n    A[i] = A[i] * 2\nprint(A[2])"
    },
    {
     "type": "single",
     "q": "Какой из приведённых фрагментов заполняет массив T последовательными чётными числами от 0 до 8 включительно?",
     "options": [
      "T = [0] * 5\nfor i in range(5):\n    T[i] = i * 2",
      "T = [0] * 5\nfor i in range(5):\n    T[i] = i + 2",
      "T = [0] * 5\nfor i in range(5):\n    T[i] = i * 2 + 1",
      "T = [0] * 5\nfor i in range(5):\n    T[i] = i ** 2"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Каким будет список A после выполнения кода?",
     "options": [
      "[5, 4, 3]",
      "[5, 3, 3]",
      "[4, 3, 3]",
      "[6, 5, 3]"
     ],
     "answer": 0,
     "code": "A = [1, 2, 3]\nA[0] = A[1] + A[2]\nA[1] = A[0] - 1",
     "codeOptions": true
    }
   ]
  },
  {
   "id": "p8",
   "title": "Одномерные массивы, ч. 3",
   "questions": [
    {
     "type": "single",
     "q": "Что такое список в Python?",
     "options": [
      "Упорядоченный набор элементов, объединённых одним именем",
      "Неупорядоченный набор элементов",
      "Переменная, хранящая одно значение",
      "Числовой тип данных"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какое утверждение о списках в Python является НЕВЕРНЫМ?",
     "options": [
      "Элементы списка имеют индексы",
      "Список можно изменять",
      "Список может хранить элементы только одного типа",
      "Список создаётся с помощью квадратных скобок"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Какой из способов создаёт список A = [1, 2, 3, 4, 5]?",
     "options": [
      "A = [0] * 5",
      "A = [1, 2, 3, 4, 5]",
      "A = list(range(1, 5))",
      "A = [1, 2, 3, 4]"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "10",
      "12",
      "14",
      "8"
     ],
     "answer": 1,
     "code": "A = [2, 4, 6, 8]\nprint(A[1] + A[3])"
    },
    {
     "type": "single",
     "q": "Какой индекс имеет последний элемент списка C = [10, 20, 30, 40, 50]?",
     "options": [
      "4",
      "5",
      "-2",
      "0"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Чему равен len(A) для списка A = [0, 2, 4, 6, 8, 10]?",
     "options": [
      "5",
      "6",
      "7",
      "10"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4]",
      "[1, 2, 3, 3]",
      "[1, 2, 4, 4]",
      "[1, 2, 5, 4]"
     ],
     "answer": 0,
     "code": "A = [1, 2, 3, 4]\nA[2] = A[0] + A[1]\nprint(A)",
     "codeOptions": true,
     "explain": "A[2] = A[0] + A[1] = 1 + 2 = 3 — значение не меняется, список остаётся [1, 2, 3, 4]."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "15",
      "20",
      "25",
      "10"
     ],
     "answer": 1,
     "code": "A = [5, 10, 15]\nprint(A[-1] + A[0])"
    },
    {
     "type": "single",
     "q": "Какой способ ввода с клавиатуры создаёт список целых чисел из строки, введённой через пробел?",
     "options": [
      "A = list(map(int, input().split()))",
      "A = input().split()",
      "A = map(int, input().split())",
      "A = int(input().split())"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Сколько раз будет выполнен ввод данных в следующем фрагменте?",
     "options": [
      "2",
      "3",
      "4",
      "5"
     ],
     "answer": 2,
     "code": "N = 4\nB = [0] * N\nfor i in range(N):\n    B[i] = int(input())"
    },
    {
     "type": "single",
     "q": "Каким будет список C после выполнения кода?",
     "options": [
      "[0, 2, 4, 6]",
      "[1, 3, 5, 7]",
      "[1, 2, 3, 4]",
      "[1, 3, 5, 7, 9]"
     ],
     "answer": 1,
     "code": "N = 4\nC = [0] * N\nfor i in range(N):\n    C[i] = i * 2 + 1",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0",
      "7",
      "11",
      "3"
     ],
     "answer": 0,
     "code": "A = [3, 7, 11]\nB = A\nB[1] = 0\nprint(A[1])"
    },
    {
     "type": "single",
     "q": "Какой способ заполнения используется в коде?",
     "options": [
      "Заполнение указанием значений",
      "Ввод с клавиатуры",
      "Вычисление по формуле",
      "Заполнение случайными числами"
     ],
     "answer": 3,
     "code": "from random import randint\nD = [0] * 5\nfor i in range(5):\n    D[i] = randint(-5, 5)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2",
      "3",
      "4",
      "5"
     ],
     "answer": 2,
     "code": "A = [1, 2, 3, 4, 5]\nfor i in range(5):\n    A[i] = A[i] + 1\nprint(A[2])"
    },
    {
     "type": "single",
     "q": "Какой из вариантов выводит все элементы списка A в одну строку через пробел?",
     "options": [
      "print(A)",
      "print(*A)",
      "for i in A: print(i)",
      "print(A, sep=' ')"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Чему будет равно значение A[0] после выполнения цикла?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 1,
     "code": "A = [0] * 3\nfor i in range(3):\n    A[i] = i + 1"
    },
    {
     "type": "single",
     "q": "Каким будет список A после выполнения кода?",
     "options": [
      "[5, 4, 3]",
      "[5, 3, 3]",
      "[4, 3, 3]",
      "[6, 5, 3]"
     ],
     "answer": 0,
     "code": "A = [1, 2, 3]\nA[0] = A[1] + A[2]\nA[1] = A[0] - 1",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код выводит элементы списка с их индексами (используя enumerate)?",
     "options": [
      "for i in range(len(A)):\n    print(i, A[i])",
      "for i, x in enumerate(A):\n    print(i, x)",
      "Оба варианта верны",
      "Ни один не верен"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[2, 4, 6, 8, 10]",
      "2 4 6 8 10",
      "2\\n4\\n6\\n8\\n10\\n",
      "2, 4, 6, 8, 10"
     ],
     "answer": 1,
     "code": "A = [2, 4, 6, 8, 10]\nfor i in range(len(A)):\n    print(A[i], end=' ')",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Каким будет список D после выполнения кода?",
     "options": [
      "Все элементы будут равны 1",
      "Все элементы будут равны 3",
      "Каждый элемент будет случайным числом от 1 до 3 включительно",
      "Возникнет ошибка"
     ],
     "answer": 2,
     "code": "import random\nN = 4\nD = [0] * N\nfor i in range(N):\n    D[i] = random.randint(1, 3)"
    }
   ]
  },
  {
   "id": "p9",
   "title": "Одномерные массивы, ч. 4: Индексация и срезы в списках",
   "questions": [
    {
     "type": "single",
     "q": "Какой индекс имеет первый элемент списка в Python?",
     "options": [
      "1",
      "0",
      "-1",
      "Зависит от длины списка"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Как обратиться к последнему элементу списка с помощью отрицательного индекса?",
     "options": [
      "A[-0]",
      "A[-1]",
      "A[len(A)]",
      "A[0]"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "10",
      "20",
      "30",
      "40"
     ],
     "answer": 2,
     "code": "numbers = [10, 20, 30, 40, 50]\nprint(numbers[2])"
    },
    {
     "type": "single",
     "q": "Что произойдёт при выполнении print(numbers[5]), если numbers = [1, 2, 3, 4, 5]?",
     "options": [
      "Выведется 5",
      "Выведется 0",
      "Возникнет ошибка IndexError",
      "Выведется пустой список"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "5",
      "10",
      "15",
      "20"
     ],
     "answer": 2,
     "code": "A = [5, 10, 15, 20]\nprint(A[-2])"
    },
    {
     "type": "single",
     "q": "Чему равна длина списка A = [1, 2, 3, 4, 5]?",
     "options": [
      "4",
      "5",
      "6",
      "0"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой срез вернёт первые три элемента списка A = [10, 20, 30, 40, 50]?",
     "options": [
      "A[0:3]",
      "A[0:2]",
      "A[1:4]",
      "A[:2]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3]",
      "[2, 3, 4]",
      "[2, 3, 4, 5]",
      "[1, 2, 3, 4]"
     ],
     "answer": 1,
     "code": "A = [1, 2, 3, 4, 5]\nprint(A[1:4])",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[0, 1, 2]",
      "[0, 1, 2, 3]",
      "[1, 2, 3]",
      "[0, 1]"
     ],
     "answer": 0,
     "code": "A = [0, 1, 2, 3, 4, 5]\nprint(A[:3])",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[3, 4, 5]",
      "[2, 3, 4, 5]",
      "[0, 1, 2, 3]",
      "[3, 4]"
     ],
     "answer": 0,
     "code": "A = [0, 1, 2, 3, 4, 5]\nprint(A[3:])",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[2, 3]",
      "[3, 4]",
      "[3, 4, 5]",
      "[4, 5]"
     ],
     "answer": 1,
     "code": "A = [1, 2, 3, 4, 5]\nprint(A[-3:-1])",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4, 5]",
      "[1, 3, 5]",
      "[2, 4]",
      "[1, 2, 3]"
     ],
     "answer": 1,
     "code": "A = [1, 2, 3, 4, 5]\nprint(A[::2])",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4, 5]",
      "[5, 4, 3, 2, 1]",
      "[5, 4, 3, 2]",
      "[1, 2, 3, 4]"
     ],
     "answer": 1,
     "code": "A = [1, 2, 3, 4, 5]\nprint(A[::-1])",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как изменить третий элемент списка A = [1, 2, 3, 4] на значение 99?",
     "options": [
      "A[2] = 99",
      "A[3] = 99",
      "A[-2] = 99",
      "A[1] = 99"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 10, 20, 4]",
      "[1, 10, 20, 3, 4]",
      "[1, 2, 3, 4]",
      "[1, 2, 10, 20, 4]"
     ],
     "answer": 0,
     "code": "A = [1, 2, 3, 4]\nA[1:3] = [10, 20]\nprint(A)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "4",
      "5",
      "6",
      "10"
     ],
     "answer": 1,
     "code": "A = [1, 2, 3, 4, 5]\nprint(len(A))"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[0, 0, 5, 5]",
      "[0, 0, 5, 6]",
      "[0, 0, 0, 5]",
      "[0, 5, 5, 6]"
     ],
     "answer": 1,
     "code": "A = [0, 0, 0, 0]\nA[2] = 5\nA[3] = A[2] + 1\nprint(A)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой срез вернёт все элементы списка, кроме первого и последнего?",
     "options": [
      "A[1:-1]",
      "A[0:-1]",
      "A[1:0]",
      "A[-1:1]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "4",
      "5",
      "100",
      "3"
     ],
     "answer": 0,
     "code": "A = [1, 2, 3, 4, 5]\nA[1] = 100\nprint(A[-2])"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "50",
      "60",
      "70",
      "40"
     ],
     "answer": 1,
     "code": "A = [10, 20, 30, 40, 50]\nprint(A[-1] + A[0])"
    }
   ]
  },
  {
   "id": "p10",
   "title": "Одномерные массивы, ч. 5",
   "questions": [
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "6",
      "8",
      "10",
      "12"
     ],
     "answer": 1,
     "code": "a = [2, 4, 6, 8]\nprint(a[0] + a[2])"
    },
    {
     "type": "single",
     "q": "Какой индекс имеет предпоследний элемент списка A = [10, 20, 30, 40, 50]?",
     "options": [
      "3",
      "4",
      "-2",
      "0"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4]",
      "[1, 4, 3, 4]",
      "[1, 3, 3, 4]",
      "[1, 5, 3, 4]"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4]\na[1] = a[0] + a[2]\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой способ ввода чисел с клавиатуры в одну строку через пробел создаёт список целых чисел?",
     "options": [
      "a = list(map(int, input().split()))",
      "a = input().split()",
      "a = map(int, input().split())",
      "a = int(input().split())"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "Сумма первого и последнего случайных чисел от 20 до 40",
      "Всегда 20",
      "Всегда 40",
      "Ошибка"
     ],
     "answer": 0,
     "code": "from random import randint\nd = [0] * 4\nfor i in range(4):\n    d[i] = randint(10, 20)\nprint(d[0] + d[-1])"
    },
    {
     "type": "single",
     "q": "Чему равна длина списка b = [5, 10, 15, 20, 25, 30]?",
     "options": [
      "5",
      "6",
      "7",
      "4"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "5",
      "6",
      "7",
      "4"
     ],
     "answer": 1,
     "code": "arr = [0, 1, 2, 3, 4, 5]\nprint(arr[-1] + arr[1])"
    },
    {
     "type": "single",
     "q": "Каким будет список после выполнения кода?",
     "options": [
      "[10, 100, 200, 300, 50]",
      "[10, 100, 200, 300, 40, 50]",
      "[10, 100, 200, 300]",
      "[10, 20, 30, 40, 50]"
     ],
     "answer": 0,
     "code": "a = [10, 20, 30, 40, 50]\na[1:4] = [100, 200, 300]",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[2, 3]",
      "[3, 4]",
      "[2, 3, 4]",
      "[3, 4, 5]"
     ],
     "answer": 1,
     "code": "arr = [1, 2, 3, 4, 5]\nprint(arr[-3:-1])",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код выведет все элементы списка a = [1, 2, 3, 4] в столбик (каждый с новой строки)?",
     "options": [
      "for i in range(len(a)):\n    print(a[i])",
      "print(*a)",
      "for x in a:\n    print(x, end=' ')",
      "print(a)"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "6",
      "8",
      "12",
      "16"
     ],
     "answer": 2,
     "code": "nums = [2, 4, 6, 8]\nfor i in range(len(nums)):\n    nums[i] = nums[i] * 2\nprint(nums[2])"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[0, 1, 4, 9, 16]",
      "[0, 1, 2, 3, 4]",
      "[1, 4, 9, 16, 25]",
      "[0, 1, 4, 9, 16, 25]"
     ],
     "answer": 0,
     "code": "a = [0] * 5\nfor i in range(5):\n    a[i] = i * i\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой из вариантов использует enumerate для вывода индексов и значений?",
     "options": [
      "for i in enumerate (a)):\n    print(i, a[i])",
      "for i, x in enumerate(a):\n    print(i, x)",
      "Оба варианта верны",
      "Ни один не верен"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1 2 3 4",
      "[1, 2, 3, 4]",
      "1 2 3 4 (без пробела в конце)",
      "1\\n2\\n3\\n4\\n"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4]\nfor x in a:\n    print(x, end=' ')",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "28",
      "121",
      "128",
      "21"
     ],
     "answer": 1,
     "code": "a = [7, 14, 21, 28]\na[-1] = 100\nprint(a[2] + a[3])"
    },
    {
     "type": "single",
     "q": "Что произойдёт при выполнении кода?",
     "options": [
      "Выведется 3",
      "Выведется 0",
      "Возникнет ошибка IndexError",
      "Выведется пустой список"
     ],
     "answer": 2,
     "code": "a = [1, 2, 3]\nprint(a[3])"
    },
    {
     "type": "single",
     "q": "Какой код правильно создаёт список из 5 элементов, каждый из которых равен 0?",
     "options": [
      "a = [0] * 5",
      "a = [0, 0, 0, 0]",
      "a = [0 for i in range(4)]",
      "a = [0] * 4"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "5",
      "6",
      "7",
      "4"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4, 5]\nprint(a[-2] + a[0])",
     "explain": "a[-2] — предпоследний элемент 4, a[0] = 1, сумма 5."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2]",
      "[2, 3]",
      "[2, 3, 4]",
      "[1, 2, 3]"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4, 5]\nprint(a[1:3])",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой способ заполнения массива используется в коде?",
     "options": [
      "Заполнение указанием значений",
      "Ввод с клавиатуры",
      "Вычисление по формуле",
      "Заполнение случайными числами"
     ],
     "answer": 3,
     "code": "import random\nn = 4\narr = [0] * n\nfor i in range(n):\n    arr[i] = random.randint(1, 10)"
    }
   ]
  },
  {
   "id": "p11",
   "title": "Одномерные массивы, ч. 6",
   "questions": [
    {
     "type": "single",
     "q": "Какой метод добавляет элемент в конец списка?",
     "options": [
      "insert()",
      "extend()",
      "append()",
      "add()"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой метод удаляет все элементы из списка?",
     "options": [
      "pop()",
      "remove()",
      "clear()",
      "delete()"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой метод возвращает количество элементов с указанным значением?",
     "options": [
      "len()",
      "count()",
      "index()",
      "find()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что произойдёт при вызове pop() без аргументов?",
     "options": [
      "Будет удалён первый элемент",
      "Будет удалён и возвращён последний элемент",
      "Будет удалён и возвращён элемент с индексом 0",
      "Возникнет ошибка"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой метод разворачивает список в обратном порядке?",
     "options": [
      "sort()",
      "reverse()",
      "backwards()",
      "flip()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой метод возвращает индекс первого вхождения элемента с заданным значением?",
     "options": [
      "find()",
      "search()",
      "index()",
      "locate()"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой метод удаляет первый элемент с указанным значением?",
     "options": [
      "pop()",
      "delete()",
      "remove()",
      "clear()"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что вернёт метод sort() после сортировки списка?",
     "options": [
      "Отсортированный список",
      "None",
      "Количество элементов",
      "True"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой метод вставляет элемент на указанную позицию?",
     "options": [
      "append()",
      "extend()",
      "insert()",
      "add()"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой метод создаёт поверхностную копию списка?",
     "options": [
      "clone()",
      "copy()",
      "duplicate()",
      "replicate()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3]",
      "[1, 2, 3, 4]",
      "[1, 2, 3, [4]]",
      "Ошибка"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3]\na.append(4)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 99, 2, 3]",
      "[99, 1, 2, 3]",
      "[1, 2, 99, 3]",
      "[1, 2, 3, 99]"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3]\na.insert(1, 99)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[10, 30, 20]",
      "[10, 20, 30]",
      "[10, 30]",
      "[10, 20, 30, 20]"
     ],
     "answer": 0,
     "code": "a = [10, 20, 30, 20]\na.remove(20)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2 [1, 3, 4]",
      "3 [1, 2, 4]",
      "4 [1, 2, 3]",
      "3 [1, 2, 3]"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4]\nx = a.pop(2)\nprint(x, a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[5, 2, 8, 1]",
      "[1, 2, 5, 8]",
      "[8, 5, 2, 1]",
      "[1, 8, 2, 5]"
     ],
     "answer": 1,
     "code": "a = [5, 2, 8, 1]\na.sort()\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 2, 4]\nprint(a.count(2))"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "99",
      "1",
      "Ошибка",
      "None"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3]\nb = a.copy()\nb[0] = 99\nprint(a[0])"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3]",
      "[]",
      "None",
      "Ошибка"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3]\na.clear()\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что произойдёт при вызове a.index(5), если a = [1, 2, 3]?",
     "options": [
      "Вернётся 2",
      "Вернётся -1",
      "Возникнет ошибка ValueError",
      "Вернётся None"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3]",
      "[3, 2, 1]",
      "[]",
      "Ошибка"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3]\na.reverse()\nprint(a)",
     "codeOptions": true
    }
   ]
  },
  {
   "id": "p12",
   "title": "Одномерные массивы, ч. 7",
   "questions": [
    {
     "type": "single",
     "q": "Какой метод добавляет в список сразу несколько элементов из другого списка?",
     "options": [
      "append()",
      "extend()",
      "insert()",
      "add()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4]",
      "[1, 2, 3, 5]",
      "[1, 2, 3, 4, 5]",
      "[4, 5, 1, 2, 3]"
     ],
     "answer": 2,
     "code": "a = [1, 2, 3]\na.append(4)\na.append(5)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[10, 15, 20, 30]",
      "[10, 20, 15, 30]",
      "[15, 10, 20, 30]",
      "[10, 20, 30, 15]"
     ],
     "answer": 0,
     "code": "a = [10, 20, 30]\na.insert(1, 15)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой метод удаляет элемент по его значению (первое вхождение)?",
     "options": [
      "pop()",
      "del",
      "remove()",
      "clear()"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[5, 15, 10, 20]",
      "[5, 10, 15, 20]",
      "[5, 15, 20]",
      "[5, 10, 15, 10, 20]"
     ],
     "answer": 0,
     "code": "a = [5, 10, 15, 10, 20]\na.remove(10)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что вернёт pop(2) для списка [100, 200, 300, 400]?",
     "options": [
      "100",
      "200",
      "300",
      "400"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "4 [1, 2, 3]",
      "1 [2, 3, 4]",
      "4 [1, 2, 3, 4]",
      "3 [1, 2, 4]"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4]\nx = a.pop()\nprint(x, a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой метод полностью очищает список?",
     "options": [
      "remove()",
      "pop()",
      "clear()",
      "delete()"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[8, 6, 3, 1]",
      "[1, 3, 6, 8]",
      "[1, 3, 7, 8]",
      "[8, 3, 1, 6]"
     ],
     "answer": 1,
     "code": "a = [8, 3, 1, 6]\na.sort()\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "['b', 'c', 'a']",
      "['a', 'b', 'c']",
      "['c', 'b', 'a']",
      "['b', 'a', 'c']"
     ],
     "answer": 1,
     "code": "a = ['b', 'c', 'a']\na.sort()\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой метод разворачивает список?",
     "options": [
      "sort(reverse=True)",
      "reverse()",
      "flip()",
      "backwards()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[4, 3, 2, 1]",
      "[1, 2, 3, 4]",
      "[4, 3, 2]",
      "Ошибка"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4]\na.reverse()\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой метод возвращает индекс первого найденного элемента?",
     "options": [
      "find()",
      "index()",
      "search()",
      "locate()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 1,
     "code": "a = [2, 4, 6, 4, 8]\nprint(a.index(4))"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answer": 2,
     "code": "a = [1, 2, 3, 2, 2, 4]\nprint(a.count(2))"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4]",
      "[1, 2, 3]",
      "[4, 1, 2, 3]",
      "Ошибка"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3]\nb = a.copy()\nb.append(4)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой метод добавляет элементы из другого списка в конец?",
     "options": [
      "append()",
      "extend()",
      "insert()",
      "add()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, [4, 5]]",
      "[1, 2, 3, 4, 5]",
      "[4, 5, 1, 2, 3]",
      "[1, 2, 3, 4]"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3]\na.extend([4, 5])\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что произойдёт при вызове a.remove(99) для списка a = [1, 2, 3]?",
     "options": [
      "Ничего не произойдёт",
      "Будет возвращён None",
      "Возникнет ошибка ValueError",
      "Удалится последний элемент"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "3",
      "5",
      "8"
     ],
     "answer": 2,
     "code": "a = [5, 1, 8, 3]\na.sort()\na.reverse()\nprint(a[1])"
    }
   ]
  },
  {
   "id": "p13",
   "title": "Одномерные массивы, ч. 8",
   "questions": [
    {
     "type": "single",
     "q": "Какой код создаёт список [0, 2, 4, 6, 8]?",
     "options": [
      "[i for i in range(5)]",
      "[i * 2 for i in range(5)]",
      "[i + 2 for i in range(5)]",
      "[i ** 2 for i in range(5)]"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "Всегда 3",
      "Всегда 15",
      "Сумма трёх случайных чисел от 1 до 5",
      "Ошибка"
     ],
     "answer": 2,
     "code": "from random import randint\na = [0] * 3\nfor i in range(3):\n    a[i] = randint(1, 5)\nprint(sum(a))"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "10",
      "20",
      "30",
      "40"
     ],
     "answer": 2,
     "code": "a = [10, 20, 30, 40]\nprint(a[-2])"
    },
    {
     "type": "single",
     "q": "Какой код вводит с клавиатуры 4 числа в одну строку через пробел и превращает их в список целых чисел?",
     "options": [
      "list(map(int, input().split()))",
      "input().split()",
      "map(int, input().split())",
      "int(input().split())"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3]",
      "[2, 3, 4]",
      "[2, 3, 4, 5]",
      "[1, 2, 3, 4]"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4, 5]\nprint(a[1:4])",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[2, 4, 6]",
      "[2, 4, 6, 8]",
      "[2, 4, 6, 8, 10]",
      "[8, 10, 2, 4, 6]"
     ],
     "answer": 2,
     "code": "a = [2, 4, 6]\na.append(8)\na.append(10)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[5, 7, 10, 15]",
      "[5, 10, 7, 15]",
      "[7, 5, 10, 15]",
      "[5, 10, 15, 7]"
     ],
     "answer": 0,
     "code": "a = [5, 10, 15]\na.insert(1, 7)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[3, 9, 12]",
      "[3, 6, 9, 12]",
      "[3, 9]",
      "Ошибка"
     ],
     "answer": 0,
     "code": "a = [3, 6, 9, 12]\na.remove(6)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1 [2, 3, 4]",
      "2 [1, 3, 4]",
      "3 [1, 2, 4]",
      "4 [1, 2, 3]"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4]\nx = a.pop(1)\nprint(x, a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "2",
      "4",
      "7"
     ],
     "answer": 3,
     "code": "a = [4, 2, 7, 1]\na.sort()\nprint(a[-1])"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "&#x27;x&#x27;",
      "&#x27;y&#x27;",
      "&#x27;z&#x27;",
      "Ошибка"
     ],
     "answer": 2,
     "code": "a = ['x', 'y', 'z']\na.reverse()\nprint(a[0])"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 1,
     "code": "a = [10, 20, 30, 20, 40]\nprint(a.index(20))"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2",
      "3",
      "4",
      "5"
     ],
     "answer": 2,
     "code": "a = [5, 5, 5, 2, 5]\nprint(a.count(5))"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "99",
      "1",
      "2",
      "3"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3]\nb = a.copy()\nb[0] = 99\nprint(a[0])"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0",
      "3",
      "1",
      "Ошибка"
     ],
     "answer": 0,
     "code": "a = [7, 8, 9]\na.clear()\nprint(len(a))"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, [3, 4]]",
      "[1, 2, 3, 4]",
      "[3, 4, 1, 2]",
      "[1, 2]"
     ],
     "answer": 1,
     "code": "a = [1, 2]\na.extend([3, 4])\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "4",
      "6",
      "10",
      "24"
     ],
     "answer": 2,
     "code": "a = [1, 2, 3, 4]\ns = 0\nfor x in a:\n    s += x\nprint(s)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "9",
      "12",
      "24",
      "6"
     ],
     "answer": 2,
     "code": "a = [2, 3, 4]\np = 1\nfor x in a:\n    p *= x\nprint(p)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "5",
      "6",
      "7",
      "8"
     ],
     "answer": 3,
     "code": "a = [0] * 5\nfor i in range(5):\n    a[i] = i + 1\nprint(a[2] + a[4])",
     "explain": "Список [1, 2, 3, 4, 5]; a[2] = 3, a[4] = 5, сумма 8."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "4",
      "5",
      "6",
      "8"
     ],
     "answer": 2,
     "code": "a = [3, 1, 4, 1, 5]\na.sort()\na.reverse()\nprint(a[0] + a[-1])",
     "explain": "После sort и reverse: [5, 4, 3, 1, 1]; 5 + 1 = 6."
    }
   ]
  },
  {
   "id": "p14",
   "title": "Одномерные массивы, ч. 9",
   "questions": [
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[5, 10, 15, 20]",
      "5 10 15 20",
      "5, 10, 15, 20",
      "5 10 15"
     ],
     "answer": 1,
     "code": "a = [5, 10, 15, 20]\nprint(*a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "5",
      "6",
      "7",
      "4"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4, 5, 6]\nprint(len(a))"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "5 20",
      "5 15",
      "10 20",
      "20 5"
     ],
     "answer": 0,
     "code": "a = [5, 10, 15, 20]\nprint(a[0], a[-1])"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[2, 4, 6]",
      "[4, 8, 12]",
      "[1, 2, 3]",
      "[2, 4, 6, 12]"
     ],
     "answer": 1,
     "code": "a = [2, 4, 6]\nfor i in range(len(a)):\n    a[i] = a[i] * 2\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "True",
      "False",
      "1",
      "0"
     ],
     "answer": 0,
     "code": "a = [3, 7, 9, 2]\nprint(7 in a)"
    },
    {
     "type": "single",
     "q": "Что выведет программа? Если пользователь ввёл 1 2 3 4",
     "options": [
      "[1, 2, 3, 4]",
      "['1', '2', '3', '4']",
      "[1, 2, 3]",
      "Ошибка"
     ],
     "answer": 0,
     "code": "a = list(map(int, input().split()))\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "20",
      "21",
      "18",
      "22"
     ],
     "answer": 0,
     "code": "a = [3, 7, 2, 8]\ns = 0\nfor x in a:\n    s += x\nprint(s)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "3",
      "5",
      "12",
      "8"
     ],
     "answer": 2,
     "code": "a = [5, 12, 3, 8]\nprint(max(a))"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2",
      "3",
      "4",
      "5"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4, 5, 6]\nk = 0\nfor x in a:\n    if x % 2 == 0:\n        k += 1\nprint(k)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[3, -1, 5, -7, 2]",
      "[3, 0, 5, 0, 2]",
      "[0, 0, 0, 0, 0]",
      "[3, 1, 5, 7, 2]"
     ],
     "answer": 1,
     "code": "a = [3, -1, 5, -7, 2]\nfor i in range(len(a)):\n    if a[i] < 0:\n        a[i] = 0\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 2,
     "code": "a = [5, 10, 20, 30]\nprint(a.index(20))"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3]",
      "[4, 5, 1, 2, 3]",
      "[1, 2, 3, 4, 5]",
      "[1, 2, 3, [4, 5]]"
     ],
     "answer": 2,
     "code": "a = [1, 2, 3]\na.append(4)\na.append(5)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[10, 15, 20, 30]",
      "[15, 10, 20, 30]",
      "[10, 20, 15, 30]",
      "[10, 20, 30, 15]"
     ],
     "answer": 0,
     "code": "a = [10, 20, 30]\na.insert(1, 15)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2",
      "4",
      "7",
      "1"
     ],
     "answer": 1,
     "code": "a = [4, 2, 7, 1]\na.sort()\nprint(a[-2])"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answer": 2,
     "code": "a = [1, 2, 3, 2, 2]\nprint(a.count(2))"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "4 [1, 2, 3]",
      "1 [2, 3, 4]",
      "3 [1, 2, 4]",
      "4 [1, 2, 3, 4]"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4]\nx = a.pop()\nprint(x, a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "20",
      "48",
      "384",
      "24"
     ],
     "answer": 2,
     "code": "a = [2, 4, 6, 8]\np = 1\nfor x in a:\n    p *= x\nprint(p)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2",
      "5",
      "8",
      "1"
     ],
     "answer": 2,
     "code": "a = [5, 2, 8, 1]\na.reverse()\nprint(a[1])",
     "explain": "После reverse: [1, 8, 2, 5]; элемент с индексом 1 — 8."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "5",
      "8",
      "10",
      "9"
     ],
     "answer": 2,
     "code": "a = [0] * 4\nfor i in range(4):\n    a[i] = i ** 2\nprint(a[1] + a[3])"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2",
      "3",
      "4",
      "5"
     ],
     "answer": 1,
     "code": "a = [-2, 5, -8, 3, -1]\nk = 0\nfor x in a:\n    if x < 0:\n        k += 1\nprint(k)"
    }
   ]
  },
  {
   "id": "p15",
   "title": "Одномерные массивы, ч. 10",
   "questions": [
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4]",
      "[4, 3, 2, 1]",
      "[4, 3, 2]",
      "Ошибка"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4]\na.reverse()\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 5]",
      "[1, 2, 3]",
      "[1, 2, 5, 3]",
      "[1, 5, 2, 3]"
     ],
     "answer": 2,
     "code": "a = [1, 5, 2, 5, 3]\na.remove(5)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[10, 100, 20, 30, 40]",
      "[10, 20, 100, 30, 40]",
      "[100, 10, 20, 30, 40]",
      "[10, 20, 30, 100, 40]"
     ],
     "answer": 1,
     "code": "a = [10, 20, 30, 40]\na.insert(2, 100)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "4",
      "7",
      "9",
      "3"
     ],
     "answer": 1,
     "code": "a = [4, 1, 7, 3, 9]\na.sort()\nprint(a[-2])"
    },
    {
     "type": "single",
     "q": "Что делает данный код?",
     "options": [
      "Удаляет первый элемент",
      "Удаляет и возвращает последний элемент",
      "Удаляет элемент с индексом 0",
      "Очищает весь список"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4, 5]\na.pop()"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[0, 1, 2, 3, 4, 5]",
      "[1, 2, 3, 4, 5, 0]",
      "[0, 1, 2, 3, 4]",
      "[1, 2, 3, 4, 5]"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4]\na.append(5)\na.insert(0, 0)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Найдите ошибку в коде:",
     "options": [
      "Ошибки нет",
      "Неправильный синтаксис print",
      "Выход за границы списка (IndexError)",
      "Неправильное создание списка"
     ],
     "answer": 2,
     "code": "a = [1, 2, 3]\nprint(a[3])",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2",
      "7",
      "9",
      "3"
     ],
     "answer": 2,
     "code": "a = [3, 7, 2, 9]\nm = a[0]\nfor x in a:\n    if x > m:\n        m = x\nprint(m)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "8",
      "5",
      "3",
      "2"
     ],
     "answer": 1,
     "code": "a = [2, 5, 1, 8, 3]\na.sort(reverse=True)\nprint(a[1])"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[10, 30, 40, 50]",
      "[10, 20, 40, 50]",
      "[10, 20, 30, 50]",
      "[10, 20, 30, 40]"
     ],
     "answer": 0,
     "code": "a = [10, 20, 30, 40, 50]\ndel a[1]\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3]",
      "[2, 3, 4]",
      "[2, 3, 4, 5]",
      "[1, 2, 3, 4]"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4, 5]\nb = a[1:4]\nprint(b)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 2,
     "code": "a = [5, 5, 5]\na.remove(5)\nprint(len(a))"
    },
    {
     "type": "single",
     "q": "Что делает код?",
     "options": [
      "Удваивает каждый элемент",
      "Удваивает длину списка",
      "Удаляет все элементы",
      "Создаёт копию списка"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4, 5]\nfor i in range(len(a)):\n    a[i] = a[i] * 2"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "4",
      "6",
      "10",
      "3"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4]\ns = 0\nfor i in range(len(a)):\n    if i % 2 == 0:\n        s += a[i]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0",
      "1",
      "3",
      "2"
     ],
     "answer": 1,
     "code": "a = [3, 1, 4, 1, 5]\na.index(1)"
    },
    {
     "type": "single",
     "q": "Найдите ошибку в коде:",
     "options": [
      "Ошибки нет",
      "remove не может удалять числа",
      "Элемент 4 отсутствует → ValueError",
      "Неправильный синтаксис remove"
     ],
     "answer": 2,
     "code": "a = [1, 2, 3]\na.remove(4)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4]",
      "[]",
      "None",
      "Ошибка"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4]\na.clear()\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "99",
      "2",
      "3"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3]\nb = a\nb[0] = 99\nprint(a[0])"
    },
    {
     "type": "single",
     "q": "Какой код находит второй максимум в списке a = [4, 1, 7, 3, 9]?",
     "options": [
      "a.sort()\nprint(a[-1])",
      "a.sort()\nprint(a[-2])",
      "a.sort(reverse=True)\nprint(a[0])",
      "print(max(a) - 1)"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "max(a) 20. Что выведет программа?",
     "options": [
      "[1, 10, 20, 4, 5]",
      "[1, 2, 3, 10, 20, 4, 5]",
      "[1, 10, 20, 3, 4, 5]",
      "[10, 20, 1, 2, 3, 4, 5]"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4, 5]\na[1:3] = [10, 20]\nprint(a)",
     "codeOptions": true
    }
   ]
  },
  {
   "id": "p16",
   "title": "Одномерные массивы, ч. 11",
   "questions": [
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4]",
      "[4, 3, 2, 1]",
      "[4, 3, 2]",
      "[1, 2, 3]"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4]\nprint(a[::-1])",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код правильно удаляет повторяющиеся элементы из списка a = [1, 2, 2, 3, 3, 3, 4] (сохраняя порядок)?",
     "options": [
      "list(set(a))",
      "sorted(set(a), key=a.index)",
      "a = list(dict.fromkeys(a)) (тоже верно, но в тесте выберем один вариант)",
      "a.remove(2)"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4]",
      "[4, 1, 2, 3]",
      "[4, 3, 2, 1]",
      "[1, 2, 3]"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4]\nb = [a[-1]] + a[:-1]\nprint(b)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[3, 5, 7]",
      "[3, 5, 7, 9]",
      "[1, 3, 5]",
      "[2, 4, 6]"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4]\nb = []\nfor i in range(len(a)-1):\n    b.append(a[i] + a[i+1])\nprint(b)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код находит пару чисел в списке a = [2, 7, 11, 15], сумма которых равна 9?",
     "options": [
      "for i in range(len(a)):\n    for j in range(i + 1, len(a)):\n        if a[i] + a[j] == 9:\n            print(a[i], a[j])",
      "print(max(a))",
      "print(a[0] + a[1])",
      "print(a.index(9))"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1 3",
      "2 1",
      "5 0",
      "8 2"
     ],
     "answer": 0,
     "code": "a = [5, 2, 8, 1, 3]\nm = min(a)\nidx = a.index(m)\nprint(m, idx)"
    },
    {
     "type": "single",
     "q": "Какой код разделяет список a = [1, 2, 3, 4, 5, 6] на два списка: чётные и нечётные?",
     "options": [
      "even = [x for x in a if x % 2 == 0]\nodd = [x for x in a if x % 2 == 1]",
      "even = a[::2]; odd = a[1::2]",
      "Оба варианта верны",
      "Ни один не верен"
     ],
     "answer": 0,
     "codeOptions": true,
     "explain": "Срезы a[::2] и a[1::2] делят по индексам, а не по чётности значений: a[::2] = [1, 3, 5]. Верен только вариант А."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "{1: 1, 2: 2, 3: 3}",
      "[1, 2, 3]",
      "{1, 2, 3}",
      "[(1, 1), (2, 2), (3, 3)]"
     ],
     "answer": 0,
     "code": "a = [1, 2, 2, 3, 3, 3]\nfrom collections import Counter\nprint(Counter(a))",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как проверить, является ли список a = [1, 2, 3, 2, 1] палиндромом?",
     "options": [
      "a == a[::-1]",
      "a.reverse() == a",
      "a == reversed(a)",
      "len(a) % 2 == 0"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Найдите ошибку в коде, который должен удалить все дубликаты из списка a:",
     "options": [
      "Ошибки нет",
      "Неправильное использование count",
      "Изменение списка во время итерации приводит к пропуску элементов",
      "remove удаляет все вхождения"
     ],
     "answer": 2,
     "code": "a = [1, 2, 2, 3]\nfor x in a:\n    if a.count(x) > 1:\n        a.remove(x)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 10, 20, 5]",
      "[1, 10, 20, 3, 4, 5]",
      "[1, 2, 3, 10, 20, 5]",
      "[10, 20, 1, 2, 3, 4, 5]"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4, 5]\na[1:4] = [10, 20]\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой результат даст выполнение кода?",
     "options": [
      "1",
      "3",
      "4",
      "5"
     ],
     "answer": 0,
     "code": "a = [3, 1, 4, 1, 5]\na.sort()\nprint(a[1])"
    },
    {
     "type": "single",
     "q": "Что делает следующий код?",
     "options": [
      "Сдвигает список влево",
      "Сдвигает список вправо",
      "Удаляет первый элемент",
      "Разворачивает список"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4]\na.append(a.pop(0))\nprint(a)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4]",
      "[1, 4, 9, 16]",
      "[1, 4, 9, 16, 25]",
      "[1, 2, 3, 4, 16]"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4]\nfor i in range(len(a)):\n    a[i] = a[i] ** 2\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код находит индекс минимального элемента в списке a без использования min() и index()?",
     "options": [
      "m = a[0]\nidx = 0\nfor i in range(1, len(a)):\n    if a[i] < m:\n        m = a[i]\n        idx = i\nprint(idx)",
      "print(a.index(min(a)))",
      "Оба варианта верны",
      "Ни один не верен"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[5, 4, 3, 2, 1]",
      "[4, 3, 2, 1]",
      "[5, 4, 3, 2]",
      "[1, 2, 3, 4]"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4, 5]\nb = a[-2::-1]\nprint(b)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как исправить код, чтобы он правильно подсчитывал частоту элементов без использования Counter?",
     "options": [
      "Ошибки нет",
      "Нужно использовать freq[x] = 0 в else",
      "Нужно заменить in на has_key",
      "Нужно использовать список вместо словаря"
     ],
     "answer": 0,
     "code": "a = [1, 2, 2, 3]\nfreq = {}\nfor x in a:\n    if x in freq:\n        freq[x] += 1\n    else:\n        freq[x] = 1",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 5]",
      "[1, 2, 3, 4, 5]",
      "[1, 4, 5]",
      "[1, 2, 5]"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4, 5]\ndel a[1:4]\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код проверяет, что список a состоит только из уникальных элементов (все элементы различны)?",
     "options": [
      "len(a) == len(set(a))",
      "len(a) == len(a.copy())",
      "a.count(x) == 1 for x in a",
      "a == sorted(a)"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[3, 5, 7]",
      "[3, 5, 7, 9]",
      "[1, 2, 3, 4]",
      "[2, 4, 6, 8]"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4]\nb = [a[i] + a[i+1] for i in range(len(a)-1)]\nprint(b)",
     "codeOptions": true
    }
   ]
  },
  {
   "id": "p17",
   "title": "Одномерные массивы, ч. 12",
   "questions": [
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "hi",
      "hello",
      "python",
      "cat"
     ],
     "answer": 2,
     "code": "a = [\"hi\", \"hello\", \"python\", \"cat\"]\nlongest = a[0]\nfor word in a:\n    if len(word) > len(longest):\n        longest = word\nprint(longest)"
    },
    {
     "type": "single",
     "q": "Какой код меняет местами минимальный и максимальный элементы списка a?",
     "options": [
      "min_idx = a.index(min(a))\nmax_idx = a.index(max(a))\na[min_idx], a[max_idx] = a[max_idx], a[min_idx]",
      "a.sort()\na[0], a[-1] = a[-1], a[0]",
      "Оба варианта верны",
      "Ни один не верен"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 3, 5]",
      "[1, 0, 3, 0, 5]",
      "[1, 3, 0, 5]",
      "[1, 3, 5, 0]"
     ],
     "answer": 0,
     "code": "a = [1, 0, 3, 0, 5]\nb = [x for x in a if x != 0]\nprint(b)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код находит индекс первого отрицательного элемента, а если такого нет, выводит -1?",
     "options": [
      "idx = -1\nfor i in range(len(a)):\n    if a[i] < 0:\n        idx = i\n        break\nprint(idx)",
      "print(a.index(-1))",
      "print(a.find(x < 0))",
      "print(a[0] if a[0] < 0 else -1)"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "100",
      "75",
      "85",
      "90"
     ],
     "answer": 0,
     "code": "a = [10, 15, 20, 25, 30]\ns = 0\nfor x in a:\n    if x % 5 == 0:\n        s += x\nprint(s)"
    },
    {
     "type": "single",
     "q": "Что делает следующий код?",
     "options": [
      "Создаёт список положительных элементов на чётных позициях",
      "Создаёт список отрицательных элементов на чётных позициях",
      "Удаляет все отрицательные элементы",
      "Создаёт копию списка"
     ],
     "answer": 0,
     "code": "a = [1, -2, 3, -4, 5]\nb = []\nfor i in range(len(a)):\n    if i % 2 == 0 and a[i] > 0:\n        b.append(a[i])"
    },
    {
     "type": "single",
     "q": "Какой код правильно разделяет список a = [1, -2, 0, 3, -4, 0] на три списка: отрицательные, нули, положительные (сохраняя порядок)?",
     "options": [
      "neg = [x for x in a if x < 0]\nzero = [x for x in a if x == 0]\npos = [x for x in a if x > 0]",
      "neg = a[::2]; zero = a[1::2]; pos = a[2::2]",
      "neg = []; zero = []; pos = []\nfor x in a:\n    if x < 0: neg.append(x)\n    elif x == 0: zero.append(x)\n    else: pos.append(x)",
      "А и В верны"
     ],
     "answer": 3,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа (без использования `max` и `min`)?",
     "options": [
      "7",
      "8",
      "9",
      "4"
     ],
     "answer": 1,
     "code": "a = [5, 2, 8, 1, 9]\nmax_el = a[0]\nmin_el = a[0]\nfor x in a:\n    if x > max_el:\n        max_el = x\n    if x < min_el:\n        min_el = x\nprint(max_el - min_el)"
    },
    {
     "type": "single",
     "q": "Какой код заменяет чётные элементы на их квадрат, а нечётные — на куб?",
     "options": [
      "b = [x**2 if x % 2 == 0 else x**3 for x in a]",
      "b = [x**2 for x in a if x % 2 == 0] + [x**3 for x in a if x % 2 == 1]",
      "Оба варианта верны",
      "Ни один не верен"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[2, 4] [6, 8]",
      "[6, 8] [2, 4]",
      "[2, 4, 6] [8]",
      "[8] [2, 4, 6]"
     ],
     "answer": 1,
     "code": "a = [2, 4, 6, 8]\navg = sum(a) / len(a)\nb = [x for x in a if x > avg]\nc = [x for x in a if x <= avg]\nprint(b, c)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код удаляет из списка все элементы, кратные 3?",
     "options": [
      "a = [x for x in a if x % 3 != 0]",
      "a = [x for x in a if x % 3 == 0]",
      "a.remove(x % 3 == 0)",
      "del a[x % 3 == 0]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Найдите ошибку в коде, который должен найти самое длинное слово:",
     "options": [
      "Ошибки нет",
      "Не инициализирована переменная longest",
      "Неправильное условие",
      "Должен быть while"
     ],
     "answer": 0,
     "code": "a = [\"cat\", \"dog\", \"elephant\"]\nmax_len = 0\nfor word in a:\n    if len(word) > max_len:\n        max_len = len(word)\n        longest = word\nprint(longest)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 2, 3, 4, 5]",
      "[5, 2, 3, 4, 1]",
      "[5, 4, 3, 2, 1]",
      "[1, 2, 3, 4]"
     ],
     "answer": 1,
     "code": "a = [1, 2, 3, 4, 5]\na[0], a[-1] = a[-1], a[0]\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код находит индекс первого отрицательного элемента, а если его нет, выводит -1 ?",
     "options": [
      "idx = -1\nfor i in range(len(a)):\n    if a[i] < 0:\n        idx = i\n        break\nprint(idx)",
      "print(a.index([x for x in a if x < 0][0]) if any(x < 0 for x in a) else -1)",
      "Оба верны",
      "Ни один не верен"
     ],
     "answer": 2,
     "codeOptions": true,
     "explain": "Вариант Б тоже работает: находит первое отрицательное значение и его индекс, иначе выводит −1."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "18",
      "27",
      "30",
      "21"
     ],
     "answer": 2,
     "code": "a = [3, 6, 9, 12]\ns = 0\nfor x in a:\n    if x % 3 == 0:\n        s += x\nprint(s)"
    },
    {
     "type": "single",
     "q": "Какой код создаёт новый список только из положительных элементов, стоящих на чётных позициях (индексы 0, 2, 4...)?",
     "options": [
      "b = [a[i] for i in range(0, len(a), 2) if a[i] > 0]",
      "b = [x for x in a if x > 0]",
      "b = a[::2]",
      "b = [x for x in a if x > 0 and a.index(x) % 2 == 0]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 10, 20, 5]",
      "[1, 2, 3, 10, 20, 5]",
      "[1, 10, 20, 4, 5]",
      "[10, 20, 1, 2, 3, 4, 5]"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 4, 5]\na[1:4] = [10, 20]\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код удаляет все нули из списка, создавая новый список?",
     "options": [
      "b = [x for x in a if x != 0]",
      "b = a.remove(0)",
      "b = list(filter(lambda x: x == 0, a))",
      "b = a.copy(); b.clear()"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что делает следующий код?",
     "options": [
      "Находит максимальный элемент",
      "Находит второй по величине элемент",
      "Находит минимальный элемент",
      "Сортирует список"
     ],
     "answer": 1,
     "code": "a = [2, 5, 1, 8, 3]\nmax1 = a[0]\nmax2 = a[0]\nfor x in a:\n    if x > max1:\n        max2 = max1\n        max1 = x\n    elif x > max2:\n        max2 = x\nprint(max2)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "True",
      "False",
      "Ошибка",
      "None"
     ],
     "answer": 0,
     "code": "a = [1, 2, 3, 2, 1]\nb = a.copy()\nb.reverse()\nprint(a == b)"
    }
   ]
  },
  {
   "id": "p18",
   "title": "Двумерные массивы: вводный тест",
   "questions": [
    {
     "type": "single",
     "q": "Что такое двумерный массив (матрица) в Python?",
     "options": [
      "Это список, каждый элемент которого является целым числом.",
      "Это список списков, где каждый вложенный список представляет строку таблицы.",
      "Это словарь, ключами которого являются кортежи индексов.",
      "Это кортеж, содержащий другие кортежи."
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой из приведённых способов создаёт двумерный массив размером 3 строки и 4 столбца, заполненный нулями,?",
     "options": [
      "a = [[0] * 4] * 3",
      "a = [[0] * 3 for i in range(4)]",
      "a = [[0] * 4 for i in range(3)]",
      "a = [0] * 3 * 4"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "В коде заполнения массива нулями: Какое значение будет у элемента a[2][3] после выполнения этого кода?",
     "options": [
      "1",
      "4",
      "7",
      "12"
     ],
     "answer": 3,
     "code": "n = 3\nm = 4\na = [[0] * m for i in range(n)]\nx = 1\nfor i in range(n):\n    for j in range(m):\n        a[i][j] = x\n        x += 1"
    },
    {
     "type": "single",
     "q": "Какой код для ввода матрицы с клавиатуры построчно через пробел приведён?",
     "options": [
      "n, m = map(int, input().split())\na = [list(map(int, input().split())) for i in range(n)]",
      "n = int(input())\na = []\nfor i in range(n):\n    a.append(list(map(int, input().split())))",
      "Оба варианта приведены.",
      "Ни один из вариантов не приведён."
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "В коде ввода с клавиатуры: Что делает строка n, m = map(int, input().split())?",
     "options": [
      "Задаёт количество строк и столбцов матрицы.",
      "Заполняет матрицу числами.",
      "Выводит матрицу на экран.",
      "Импортирует модуль random."
     ],
     "answer": 0,
     "code": "n, m = map(int, input().split())\na = [list(map(int, input().split())) for i in range(n)]\nprint(a)"
    },
    {
     "type": "single",
     "q": "Какой модуль необходимо импортировать для заполнения матрицы случайными числами, согласно материалу?",
     "options": [
      "import math",
      "import random",
      "import numpy",
      "import sys"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "В коде заполнения случайными числами: Сколько раз будет вызвана функция random.randint(1, 99)?",
     "options": [
      "3",
      "6",
      "9",
      "12"
     ],
     "answer": 2,
     "code": "import random\nn, m = 3, 3\na = []\nfor i in range(n):\n    row = []\n    for j in range(m):\n        row.append(random.randint(1, 99))\n    a.append(row)\nprint(a)"
    },
    {
     "type": "single",
     "q": "Какой синтаксис используется для обращения к элементу двумерного массива a, стоящему в строке с индексом i и столбце с индексом j?",
     "options": [
      "a(i, j)",
      "a[i][j]",
      "a{i}{j}",
      "a[i, j]"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "В примере заполнения нулями (n=3, m=4) переменная x начинается с 1. Какое значение будет у элемента a[1][2] после выполнения цикла?",
     "options": [
      "1",
      "4",
      "7",
      "10"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Что будет выведено на экран после выполнения следующего фрагмента кода ()?",
     "options": [
      "[[0, 0, 0], [0, 0, 0]]",
      "[[0, 0], [0, 0], [0, 0]]",
      "[[0, 0, 0, 0], [0, 0, 0, 0]]",
      "[0, 0, 0, 0, 0, 0]"
     ],
     "answer": 0,
     "code": "n, m = 2, 3\na = [[0] * m for i in range(n)]\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "В материале приведён способ ввода готовой матрицы (самый простой). Какой из вариантов соответствует этому способу?",
     "options": [
      "a = [[1, 2, 3], [4, 5, 6]]",
      "a = list(map(int, input().split()))",
      "a = [0] * 5",
      "a = random.randint(1, 10)"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "В коде заполнения случайными числами: Что делает оператор a.append(row)?",
     "options": [
      "Добавляет строку row в конец списка a (т.е. в матрицу).",
      "Удаляет строку из матрицы.",
      "Заменяет последнюю строку матрицы.",
      "Выводит строку на экран."
     ],
     "answer": 0,
     "code": "for i in range(n):\n    row = []\n    for j in range(m):\n        row.append(random.randint(1, 99))\n    a.append(row)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как в материале обозначается каждый элемент двумерного массива?",
     "options": [
      "Именем массива и индексом строки.",
      "Именем массива и двумя индексами (номер строки и номер столбца).",
      "Только номером столбца.",
      "Специальным символом."
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "В коде ввода с клавиатуры: Что делает input().split()?",
     "options": [
      "Разбивает введённую строку на список строк по пробелам.",
      "Преобразует строку в целые числа.",
      "Создаёт матрицу.",
      "Выводит матрицу."
     ],
     "answer": 0,
     "code": "a = [list(map(int, input().split())) for i in range(n)]"
    },
    {
     "type": "single",
     "q": "Как изменить код заполнения нулями, чтобы получить матрицу 2×5, заполненную числами от 1 до 10?",
     "options": [
      "Установить n=2, m=5 и оставить остальное как в примере.",
      "Установить n=5, m=2.",
      "Установить n=10, m=1.",
      "Изменить только x=0."
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "В примере заполнения случайными числами используется random.randint(1, 99). Что означает эта функция?",
     "options": [
      "Возвращает случайное целое число от 1 до 99 включительно.",
      "Возвращает случайное вещественное число от 1 до 99.",
      "Возвращает целое число 1 или 99.",
      "Возвращает случайное число от 0 до 99."
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какая строка в коде заполнения нулями отвечает за создание списка из m нулей для каждой строки?",
     "options": [
      "a = [[0] * m for i in range(n)]",
      "x = 1",
      "for i in range(n):",
      "a[i][j] = x"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Если при вводе матрицы с клавиатуры пользователь вводит строку 1 2 3, то что вернёт list(map(int, input().split()))?",
     "options": [
      "[1, 2, 3]",
      "['1', '2', '3']",
      "(1, 2, 3)",
      "1 2 3"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "В материале приведён код: Какой результат даст print(a) после выполнения этого кода при n=2, m=2 (предполагая, что переменные определены)?",
     "options": [
      "Два списка по два случайных числа, например [[45, 12], [78, 33]].",
      "Один список из четырёх случайных чисел.",
      "Ошибка, так как переменные n и m не определены.",
      "Пустой список."
     ],
     "answer": 0,
     "code": "a = []\nfor i in range(n):\n    row = []\n    for j in range(m):\n        row.append(random.randint(1, 99))\n    a.append(row)",
     "codeOptions": true
    }
   ]
  },
  {
   "id": "p19",
   "title": "Двумерные массивы, ч. 1",
   "questions": [
    {
     "type": "single",
     "q": "Что такое двумерный массив в Python?",
     "options": [
      "Список из чисел",
      "Список списков, где каждый вложенный список представляет строку таблицы",
      "Словарь с ключами-кортежами",
      "Строка с разделителями"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Как в математике называют таблицы чисел, состоящие из строк и столбцов?",
     "options": [
      "Векторы",
      "Матрицы",
      "Последовательности",
      "Кортежи"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Сколько индексов нужно указать, чтобы обратиться к элементу двумерного массива?",
     "options": [
      "Один",
      "Два",
      "Три",
      "Ноль"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой индекс у первой строки и первого столбца в двумерном массиве?",
     "options": [
      "1 и 1",
      "0 и 0",
      "1 и 0",
      "0 и 1"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Как создать матрицу 2×3, заполненную нулями, с использованием list comprehension?",
     "options": [
      "a = [[0]*3 for i in range(2)]",
      "a = [0]*2*3",
      "a = [[0,0,0],[0,0,0]]",
      "Оба варианта А и В верны"
     ],
     "answer": 0,
     "codeOptions": true,
     "explain": "Вопрос требует list comprehension — генератор списка есть только в варианте А (вариант В — готовая запись)."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "2",
      "4",
      "5"
     ],
     "answer": 2,
     "code": "a = [[1, 2, 3], [4, 5, 6]]\nprint(a[1][0])"
    },
    {
     "type": "single",
     "q": "Как записать матрицу 2×2 в виде списка списков вручную?",
     "options": [
      "a = [1, 2, 3, 4]",
      "a = [[1, 2], [3, 4]]",
      "a = [(1, 2), (3, 4)]",
      "a = {\"row1\": [1,2], \"row2\": [3,4]}"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что делает код n, m = map(int, input().split())?",
     "options": [
      "Считывает два числа — количество строк и столбцов",
      "Считывает элементы матрицы",
      "Создаёт матрицу",
      "Выводит матрицу"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какой код правильно считывает матрицу размером n строк, вводя каждую строку через пробел (с использованием list comprehension)?",
     "options": [
      "a = [list(map(int, input().split())) for i in range(n)]",
      "a = list(map(int, input().split()))",
      "a = [int(input()) for i in range(n)]",
      "a = [[int(input()) for j in range(m)] for i in range(n)]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answer": 1,
     "code": "a = [[1, 2], [3, 4]]\nprint(a[0][1])"
    },
    {
     "type": "single",
     "q": "Как определить количество строк в матрице a?",
     "options": [
      "len(a)",
      "len(a[0])",
      "a.shape[0]",
      "a.size"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как определить количество столбцов в матрице a (если все строки одинаковой длины)?",
     "options": [
      "len(a)",
      "len(a[0])",
      "len(a[0][0])",
      "a[0].len()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2",
      "3",
      "4",
      "1"
     ],
     "answer": 0,
     "code": "a = [[1, 2], [3, 4], [5, 6]]\nprint(len(a[1]))"
    },
    {
     "type": "single",
     "q": "Как заменить элемент в первой строке и втором столбце матрицы a на число 10?",
     "options": [
      "a[0][1] = 10",
      "a[1][0] = 10",
      "a[0,1] = 10",
      "a[1][1] = 10"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "3",
      "4",
      "5",
      "6"
     ],
     "answer": 2,
     "code": "a = [[1, 2], [3, 4]]\nprint(a[1][1] + a[0][0])"
    },
    {
     "type": "single",
     "q": "Какой из способов создаёт пустую матрицу (пустой список), чтобы потом добавлять строки?",
     "options": [
      "a = []",
      "a = [[]]",
      "a = [0]*0",
      "a = [[] for i in range(0)]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[[1, 2], [3, 4]]",
      "[[5, 2], [3, 4]]",
      "[[1, 2], [5, 4]]",
      "[[5, 5], [3, 4]]"
     ],
     "answer": 1,
     "code": "a = [[1, 2], [3, 4]]\na[0][0] = 5\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код создаёт матрицу 3×3, заполненную единицами?",
     "options": [
      "a = [[1]*3 for i in range(3)]",
      "a = [1]*3*3",
      "a = [[1,1,1],[1,1,1],[1,1,1]]",
      "Оба варианта А и В верны"
     ],
     "answer": 3,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "10",
      "20",
      "30",
      "40"
     ],
     "answer": 3,
     "code": "a = [[10, 20], [30, 40]]\nprint(a[-1][-1])"
    },
    {
     "type": "single",
     "q": "Как добавить новую строку в конец матрицы a?",
     "options": [
      "a.append([7, 8])",
      "a.insert(0, [7, 8])",
      "a += [7, 8]",
      "a.extend([7, 8])"
     ],
     "answer": 0,
     "codeOptions": true
    }
   ]
  },
  {
   "id": "p20",
   "title": "Двумерные массивы, ч. 2",
   "questions": [
    {
     "type": "single",
     "q": "Какой код создаёт матрицу размером 3×4, заполненную нулями?",
     "options": [
      "a = [[0] * 4 for i in range(3)]",
      "a = [0] * 3 * 4",
      "a = [[0,0,0],[0,0,0]]",
      "a = [[0] * 3 for i in range(4)]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "3",
      "6",
      "7",
      "8"
     ],
     "answer": 2,
     "code": "n = 3\nm = 4\na = [[0] * m for i in range(n)]\nx = 1\nfor i in range(n):\n    for j in range(m):\n        a[i][j] = x\n        x += 1\nprint(a[1][2])"
    },
    {
     "type": "single",
     "q": "Какой код создаёт матрицу 3×3, заполненную случайными числами от 1 до 99 с использованием вложенных циклов?",
     "options": [
      "import random\nn, m = 3, 3\na = []\nfor i in range(n):\n    row = []\n    for j in range(m):\n        row.append(random.randint(1, 99))\n    a.append(row)",
      "a = [[random.randint(1, 99) for i in range(3)] for j in range(3)]",
      "Оба варианта верны",
      "Ни один не верен"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код создаёт матрицу размером n×m, заполненную случайными числами от 10 до 50 с использованием вложенного генератора?",
     "options": [
      "a = [[random.randint(10, 50) for i in range(m)] for j in range(n)]",
      "a = [random.randint(10, 50) for i in range(n)]",
      "a = [[random.randint(10, 50) for i in range(n)] for j in range(m)]",
      "a = random.randint(10, 50)"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2",
      "3",
      "5",
      "6"
     ],
     "answer": 0,
     "code": "import random\nn, m = 2, 3\na = [[random.randint(1, 5) for i in range(m)] for j in range(n)]\nprint(len(a))"
    },
    {
     "type": "single",
     "q": "Что делает код n, m = map(int, input().split())?",
     "options": [
      "Считывает два числа — количество строк и столбцов",
      "Считывает элементы матрицы",
      "Создаёт матрицу",
      "Выводит матрицу"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[[1, 2, 3], [4, 5, 6]]",
      "[[1, 2], [3, 4]]",
      "[[1, 2, 3], [4, 5]]",
      "[[1, 2, 3, 4, 5, 6]]"
     ],
     "answer": 0,
     "code": "n, m = 2, 3\na = [[0] * m for i in range(n)]\nx = 1\nfor i in range(n):\n    for j in range(m):\n        a[i][j] = x\n        x += 1\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как обратиться к элементу во второй строке и третьем столбце матрицы a (индексация с 0)?",
     "options": [
      "a[1][2]",
      "a[2][1]",
      "a[2][2]",
      "a[1][3]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "2",
      "4",
      "5"
     ],
     "answer": 2,
     "code": "a = [[1, 2, 3], [4, 5, 6]]\nprint(a[1][0])"
    },
    {
     "type": "single",
     "q": "Как определить количество строк в матрице a?",
     "options": [
      "len(a)",
      "len(a[0])",
      "a.shape[0]",
      "a.size"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как определить количество столбцов в матрице a (если все строки одинаковой длины)?",
     "options": [
      "len(a)",
      "len(a[0])",
      "len(a[0][0])",
      "a[0].len()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2",
      "3",
      "4",
      "1"
     ],
     "answer": 0,
     "code": "a = [[1, 2], [3, 4], [5, 6]]\nprint(len(a[1]))"
    },
    {
     "type": "single",
     "q": "Как заменить элемент в первой строке и втором столбце матрицы a на число 99?",
     "options": [
      "a[0][1] = 99",
      "a[1][0] = 99",
      "a[0,1] = 99",
      "a[1][1] = 99"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "3",
      "4",
      "5",
      "6"
     ],
     "answer": 2,
     "code": "a = [[1, 2], [3, 4]]\nprint(a[1][1] + a[0][0])"
    },
    {
     "type": "single",
     "q": "Какой из способов создаёт пустую матрицу (пустой список), чтобы потом добавлять строки?",
     "options": [
      "a = []",
      "a = [[]]",
      "a = [0] * 0",
      "a = [[] for i in range(0)]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[[1, 2], [3, 4]]",
      "[[5, 2], [3, 4]]",
      "[[1, 2], [5, 4]]",
      "[[5, 5], [3, 4]]"
     ],
     "answer": 1,
     "code": "a = [[1, 2], [3, 4]]\na[0][0] = 5\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код создаёт матрицу 3×3, заполненную единицами?",
     "options": [
      "a = [[1] * 3 for i in range(3)]",
      "a = [1] * 3 * 3",
      "a = [[1,1,1],[1,1,1],[1,1,1]]",
      "Оба варианта А и В верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Оба варианта верны: каждый из указанных фрагментов даёт нужный результат."
    },
    {
     "type": "single",
     "q": "Как добавить новую строку в конец матрицы a?",
     "options": [
      "a.append([7, 8])",
      "a.insert(0, [7, 8])",
      "a += [7, 8]",
      "a.extend([7, 8])"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "Сумма случайных чисел (первый и последний элемент матрицы)",
      "Всегда 30",
      "Всегда 40",
      "Ошибка"
     ],
     "answer": 0,
     "code": "import random\nn, m = 2, 3\na = [[random.randint(10, 20) for i in range(m)] for j in range(n)]\nprint(a[1][2] + a[0][0])",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой из вариантов создаёт матрицу 2×4 с элементами по порядку от 1 до 8?",
     "options": [
      "n, m = 2, 4\na = [[0] * m for i in range(n)]\nx = 1\nfor i in range(n):\n    for j in range(m):\n        a[i][j] = x\n        x += 1",
      "a = [[1, 2, 3, 4], [5, 6, 7, 8]]",
      "Оба варианта верны",
      "Ни один не верен"
     ],
     "answer": 2,
     "codeOptions": true,
     "explain": "Оба варианта верны: каждый из указанных фрагментов даёт нужный результат."
    }
   ]
  },
  {
   "id": "p21",
   "title": "Двумерные массивы, ч. 3",
   "questions": [
    {
     "type": "single",
     "q": "Как в Python называется двумерный массив?",
     "options": [
      "Список списков",
      "Словарь словарей",
      "Кортеж кортежей",
      "Множество множеств"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какой индекс у первой строки и первого столбца в двумерном массиве?",
     "options": [
      "1 и 1",
      "0 и 0",
      "1 и 0",
      "0 и 1"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Как создать матрицу 2×3, заполненную нулями?",
     "options": [
      "a = [[0] * 3 for i in range(2)]",
      "a = [0] * 2 * 3",
      "a = [[0,0,0],[0,0,0]]",
      "Оба варианта А и В верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Оба варианта верны: каждый из указанных фрагментов даёт нужный результат."
    },
    {
     "type": "single",
     "q": "Какой код создаёт матрицу 3×4, заполненную числами от 1 до 12 последовательно?",
     "options": [
      "n, m = 3, 4\na = [[0] * m for i in range(n)]\nx = 1\nfor i in range(n):\n    for j in range(m):\n        a[i][j] = x\n        x += 1",
      "a = [[i*j for j in range(4)] for i in range(3)]",
      "a = [list(range(1, 13))]",
      "Все варианты верны"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2",
      "4",
      "5",
      "6"
     ],
     "answer": 3,
     "code": "a = [[1, 2, 3], [4, 5, 6]]\nprint(a[1][2])"
    },
    {
     "type": "single",
     "q": "Как обратиться к последнему элементу последней строки матрицы a с помощью отрицательных индексов?",
     "options": [
      "a[-1][-1]",
      "a[-1][0]",
      "a[0][-1]",
      "a[-2][-2]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "10",
      "30",
      "50",
      "60"
     ],
     "answer": 2,
     "code": "a = [[10, 20], [30, 40], [50, 60]]\nprint(a[-1][-2])"
    },
    {
     "type": "single",
     "q": "Как определить количество строк в матрице a?",
     "options": [
      "len(a)",
      "len(a[0])",
      "a.count()",
      "len(a[0][0])"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как определить количество столбцов в матрице a (если все строки одинаковой длины)?",
     "options": [
      "len(a)",
      "len(a[0])",
      "len(a[0][0])",
      "a[0].size()"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код выводит матрицу a построчно, разделяя элементы пробелами?",
     "options": [
      "for row in a:\n    print(*row)",
      "print(a)",
      "print(*a)",
      "for row in a:\n    print(row)"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0 [1, 2]\n1 [3, 4]\n2 [5, 6]",
      "1 [1, 2]\n2 [3, 4]\n3 [5, 6]",
      "0 1 2\n1 3 4\n2 5 6",
      "Ошибка"
     ],
     "answer": 0,
     "code": "a = [[1, 2], [3, 4], [5, 6]]\nfor i, row in enumerate(a):\n    print(i, row)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "[1, 2] [3, 4] [5, 6] 12. Как заменить элемент в первой строке и втором столбце матрицы `a` на число 99?",
     "options": [
      "a[0][1] = 99",
      "a[1][0] = 99",
      "a[0][2] = 99",
      "a[1][1] = 99"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как добавить новую строку в конец матрицы `a` (например, `[7, 8, 9]`)?",
     "options": [
      "a.append([7, 8, 9])",
      "a.insert(0, [7, 8, 9])",
      "a += [7, 8, 9]",
      "a.extend([7, 8, 9])"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answer": 2,
     "code": "n, m = 2, 3\na = [[0] * m for i in range(n)]\nx = 1\nfor i in range(n):\n    for j in range(m):\n        a[i][j] = x\n        x += 1\nprint(a[0][2])"
    },
    {
     "type": "single",
     "q": "Какой код создаёт матрицу 3×3, заполненную случайными числами от 10 до 50 с использованием вложенного генератора?",
     "options": [
      "a = [[random.randint(10, 50) for i in range(3)] for j in range(3)]",
      "a = [random.randint(10, 50) for i in range(3)]",
      "a = [[random.randint(10, 50)] * 3 for j in range(3)]",
      "a = random.randint(10, 50)"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что делает код n, m = map(int, input().split())?",
     "options": [
      "Считывает два числа — количество строк и столбцов",
      "Считывает элементы матрицы",
      "Создаёт матрицу",
      "Выводит матрицу"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какой код вводит матрицу построчно с клавиатуры через пробел для n строк?",
     "options": [
      "a = [list(map(int, input().split())) for i in range(n)]",
      "a = list(map(int, input().split()))",
      "a = [int(input()) for i in range(n)]",
      "a = [[int(input()) for j in range(m)] for i in range(n)]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "3",
      "5",
      "6"
     ],
     "answer": 2,
     "code": "a = [[1, 2], [3, 4], [5, 6]]\nprint(a[2][0])"
    },
    {
     "type": "single",
     "q": "Какой код создаёт матрицу 2×4, заполненную единицами?",
     "options": [
      "a = [[1] * 4 for i in range(2)]",
      "a = [1] * 2 * 4",
      "a = [[1,1,1,1],[1,1,1,1]]",
      "Оба варианта А и В верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Оба варианта верны: каждый из указанных фрагментов даёт нужный результат."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "10",
      "20",
      "30",
      "40"
     ],
     "answer": 1,
     "code": "a = [[10, 20], [30, 40]]\nprint(a[0][-1])"
    }
   ]
  },
  {
   "id": "p22",
   "title": "Двумерные массивы, ч. 4",
   "questions": [
    {
     "type": "single",
     "q": "Что такое перебор элементов двумерного массива?",
     "options": [
      "Один цикл, проходящий по всем элементам",
      "Два цикла: внешний по строкам, внутренний по столбцам",
      "Рекурсивный обход",
      "Только for i in range(len(a))"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как работает вложенный цикл при переборе двумерного массива?",
     "options": [
      "Внешний цикл завершается, затем выполняется внутренний",
      "Внутренний цикл полностью отрабатывает для каждой итерации внешнего",
      "Оба цикла выполняются параллельно",
      "Внутренний цикл выполняется только один раз"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой метод добавляет новую строку в конец двумерного массива?",
     "options": [
      "append()",
      "insert()",
      "extend()",
      "add()"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой метод удаляет последнюю строку из двумерного массива?",
     "options": [
      "pop()",
      "remove()",
      "del",
      "clear()"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой оператор позволяет удалить конкретный элемент в двумерном массиве, а не целую строку?",
     "options": [
      "del",
      "remove()",
      "pop()",
      "clear()"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как сортируются строки двумерного массива методом sort()?",
     "options": [
      "По сумме элементов",
      "Поэлементно слева направо",
      "По длине строки",
      "В случайном порядке"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[[3, 1], [2, 0], [1, 4]]",
      "[[1, 4], [3, 1], [2, 0]]",
      "[[3, 1], [1, 4], [2, 0]]",
      "[[1, 4], [2, 0], [3, 1]]"
     ],
     "answer": 3,
     "code": "a = [[3, 1], [1, 4], [2, 0]]\na.sort()\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как найти сумму элементов второй строки матрицы a?",
     "options": [
      "sum(a)",
      "sum(a[1])",
      "sum(a[0])",
      "max(a[1])"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как найти максимальный элемент в первой строке матрицы a?",
     "options": [
      "max(a)",
      "max(a[0])",
      "min(a[0])",
      "max(a[1])"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как найти минимальный элемент в третьей строке матрицы a?",
     "options": [
      "min(a)",
      "min(a[2])",
      "min(a[0])",
      "max(a[2])"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как определить, что элемент a[i][j] находится на главной диагонали квадратной матрицы?",
     "options": [
      "i + j == len(a) - 1",
      "i == j",
      "i < j",
      "i > j"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как определить, что элемент a[i][j] находится на побочной диагонали квадратной матрицы размером n?",
     "options": [
      "i == j",
      "i + j == n - 1",
      "i < j",
      "i > j"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как обратиться к элементу на главной диагонали матрицы a в строке i?",
     "options": [
      "a[i][i]",
      "a[i][n-1-i]",
      "a[i][0]",
      "a[0][i]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как обратиться к элементу на побочной диагонали матрицы a размером n в строке i?",
     "options": [
      "a[i][i]",
      "a[i][n-1-i]",
      "a[i][0]",
      "a[0][i]"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какие элементы находятся выше главной диагонали матрицы?",
     "options": [
      "i == j",
      "i < j",
      "i > j",
      "i + j == n - 1"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какие элементы находятся ниже главной диагонали матрицы?",
     "options": [
      "i == j",
      "i < j",
      "i > j",
      "i + j == n - 1"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какие элементы находятся выше побочной диагонали матрицы?",
     "options": [
      "i + j < n - 1",
      "i + j > n - 1",
      "i == j",
      "i < j"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "5",
      "15",
      "18",
      "12"
     ],
     "answer": 1,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ns = 0\nfor i in range(len(a)):\n    s += a[i][i]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "5",
      "15",
      "18",
      "12"
     ],
     "answer": 1,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ns = 0\nn = len(a)\nfor i in range(n):\n    s += a[i][n-1-i]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Какой код удаляет вторую строку из матрицы a?",
     "options": [
      "a.pop(1)",
      "a.remove(1)",
      "del a[0]",
      "a.clear()"
     ],
     "answer": 0,
     "codeOptions": true
    }
   ]
  },
  {
   "id": "p23",
   "title": "Двумерные массивы, ч. 5: Диагонали, змейка",
   "questions": [
    {
     "type": "single",
     "q": "Какое условие определяет элемент, стоящий НА главной диагонали квадратной матрицы?",
     "options": [
      "i == j",
      "i + j == n - 1",
      "i < j",
      "i > j"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какое условие определяет элемент, стоящий НА побочной диагонали квадратной матрицы размером n?",
     "options": [
      "i == j",
      "i + j == n - 1",
      "i < j",
      "i > j"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какие элементы находятся ВЫШЕ главной диагонали матрицы?",
     "options": [
      "i == j",
      "i < j",
      "i > j",
      "i + j == n - 1"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какие элементы находятся НИЖЕ главной диагонали матрицы?",
     "options": [
      "i == j",
      "i < j",
      "i > j",
      "i + j == n - 1"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какие элементы находятся ВЫШЕ побочной диагонали матрицы?",
     "options": [
      "i + j < n - 1",
      "i + j > n - 1",
      "i == j",
      "i < j"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какие элементы находятся НИЖЕ побочной диагонали матрицы?",
     "options": [
      "i + j < n - 1",
      "i + j > n - 1",
      "i == j",
      "i > j"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "5",
      "15",
      "18",
      "12"
     ],
     "answer": 1,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ns = 0\nfor i in range(len(a)):\n    s += a[i][i]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "5",
      "15",
      "18",
      "12"
     ],
     "answer": 1,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ns = 0\nn = len(a)\nfor i in range(n):\n    s += a[i][n - 1 - i]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "8",
      "10",
      "12",
      "15"
     ],
     "answer": 0,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ns = 0\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if i < j:\n            s += a[i][j]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "8",
      "10",
      "12",
      "15"
     ],
     "answer": 2,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ns = 0\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if i > j:\n            s += a[i][j]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "7",
      "8",
      "10",
      "12"
     ],
     "answer": 0,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ns = 0\nn = len(a)\nfor i in range(n):\n    for j in range(n):\n        if i + j < n - 1:\n            s += a[i][j]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "7",
      "8",
      "10",
      "17"
     ],
     "answer": 3,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ns = 0\nn = len(a)\nfor i in range(n):\n    for j in range(n):\n        if i + j > n - 1:\n            s += a[i][j]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Какой код НАХОДИТ сумму элементов главной диагонали?",
     "options": [
      "for i in range(n):\n    s += a[i][i]",
      "for i in range(n):\n    s += a[i][n-1-i]",
      "for i in range(n):\n    for j in range(n):\n        if i < j:\n            s += a[i][j]",
      "for i in range(n):\n    for j in range(n):\n        if i > j:\n            s += a[i][j]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код НАХОДИТ сумму элементов побочной диагонали?",
     "options": [
      "for i in range(n):\n    s += a[i][i]",
      "for i in range(n):\n    s += a[i][n-1-i]",
      "for i in range(n):\n    for j in range(n):\n        if i < j:\n            s += a[i][j]",
      "for i in range(n):\n    for j in range(n):\n        if i > j:\n            s += a[i][j]"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код НАХОДИТ сумму элементов ВЫШЕ главной диагонали?",
     "options": [
      "for i in range(n):\n    for j in range(n):\n        if i == j:\n            s += a[i][j]",
      "for i in range(n):\n    for j in range(n):\n        if i < j:\n            s += a[i][j]",
      "for i in range(n):\n    for j in range(n):\n        if i > j:\n            s += a[i][j]",
      "for i in range(n):\n    for j in range(n):\n        if i + j < n - 1:\n            s += a[i][j]"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код НАХОДИТ сумму элементов НИЖЕ главной диагонали?",
     "options": [
      "for i in range(n):\n    for j in range(n):\n        if i == j:\n            s += a[i][j]",
      "for i in range(n):\n    for j in range(n):\n        if i < j:\n            s += a[i][j]",
      "for i in range(n):\n    for j in range(n):\n        if i > j:\n            s += a[i][j]",
      "for i in range(n):\n    for j in range(n):\n        if i + j < n - 1:\n            s += a[i][j]"
     ],
     "answer": 2,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа (заполнение змейкой)?",
     "options": [
      "1",
      "4",
      "5",
      "6"
     ],
     "answer": 2,
     "code": "n = 3\na = [[0] * n for i in range(n)]\nx = 1\nfor i in range(n):\n    if i % 2 == 0:\n        for j in range(n):\n            a[i][j] = x\n            x += 1\n    else:\n        for j in range(n - 1, -1, -1):\n            a[i][j] = x\n            x += 1\nprint(a[1][1])"
    },
    {
     "type": "single",
     "q": "Какой элемент будет стоять на позиции a[1][2] после заполнения змейкой матрицы 3×3 (заполнение по строкам, чётные строки → слева направо, нечётные → справа налево)?",
     "options": [
      "3",
      "4",
      "5",
      "6"
     ],
     "answer": 3
    },
    {
     "type": "single",
     "q": "Какой элемент будет стоять на позиции a[2][1] после заполнения змейкой матрицы 4×4 (чётные строки слева направо, нечётные справа налево)? (Порядок заполнения: строка 0: 1,2,3,4; строка 1: 8,7,6,5; строка 2: 9,10,11,12)",
     "options": [
      "9",
      "10",
      "11",
      "12"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой код заполняет матрицу змейкой по строкам (чётные → слева направо, нечётные → справа налево)?",
     "options": [
      "x = 1\nfor i in range(n):\n    if i % 2 == 0:\n        for j in range(n):\n            a[i][j] = x\n            x += 1\n    else:\n        for j in range(n - 1, -1, -1):\n            a[i][j] = x\n            x += 1",
      "x = 1\nfor i in range(n):\n    for j in range(n):\n        a[i][j] = x\n        x += 1",
      "for i in range(n):\n    for j in range(n):\n        a[i][j] = i * n + j + 1",
      "x = 1\nfor i in range(n):\n    if i % 2 == 1:\n        for j in range(n):\n            a[i][j] = x\n            x += 1\n    else:\n        for j in range(n - 1, -1, -1):\n            a[i][j] = x\n            x += 1"
     ],
     "answer": 0,
     "codeOptions": true
    }
   ]
  },
  {
   "id": "p24",
   "title": "Двумерные массивы, ч. 6: Спираль, обратная спираль, шахматное заполнение",
   "questions": [
    {
     "type": "single",
     "q": "Какой алгоритм заполняет матрицу по спирали (по часовой стрелке), начиная с левого верхнего угла?",
     "options": [
      "Заполнение по строкам слева направо, затем по столбцам сверху вниз",
      "Обход границ: верхняя строка → правый столбец → нижняя строка → левый столбец, сужая границы",
      "Заполнение по диагоналям",
      "Заполнение случайными числами"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Что выведет программа для матрицы 3×3, заполненной по спирали числами от 1 до 9?",
     "options": [
      "5",
      "6",
      "7",
      "8"
     ],
     "answer": 0,
     "code": "n = 3\na = [[0]*n for _ in range(n)]\nx = 1\ntop, bottom, left, right = 0, n-1, 0, n-1\nwhile top <= bottom and left <= right:\n    for j in range(left, right+1):\n        a[top][j] = x; x += 1\n    top += 1\n    for i in range(top, bottom+1):\n        a[i][right] = x; x += 1\n    right -= 1\n    if top <= bottom:\n        for j in range(right, left-1, -1):\n            a[bottom][j] = x; x += 1\n        bottom -= 1\n    if left <= right:\n        for i in range(bottom, top-1, -1):\n            a[i][left] = x; x += 1\n        left += 1\nprint(a[1][1])"
    },
    {
     "type": "single",
     "q": "Какой элемент будет на позиции a[0][2] после заполнения матрицы 3×3 по спирали числами 1..9?",
     "options": [
      "3",
      "4",
      "7",
      "8"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какое число будет стоять в центре матрицы 5×5, заполненной по спирали числами от 1 до 25?",
     "options": [
      "13",
      "12",
      "14",
      "15"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Что такое «обратная спираль» при заполнении матрицы?",
     "options": [
      "Заполнение против часовой стрелки, начиная с центра",
      "Заполнение по спирали, но числа уменьшаются",
      "Заполнение по диагоналям",
      "Заполнение по строкам справа налево"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какой из алгоритмов заполняет матрицу обратной спиралью (против часовой стрелки, начиная с левого верхнего угла)?",
     "options": [
      "Обход: верхняя строка →, правый столбец ↓, нижняя строка ←, левый столбец ↑ (сужение)",
      "Обход: левый столбец ↓, нижняя строка →, правый столбец ↑, верхняя строка ← (сужение)",
      "Заполнение от центра к краям",
      "Заполнение по диагоналям"
     ],
     "answer": 1,
     "codeOptions": true,
     "explain": "Против часовой стрелки из левого верхнего угла: сначала вниз по левому столбцу, затем вправо по нижней строке, вверх по правому столбцу и влево по верхней. Вариант А — обычная спираль по часовой стрелке."
    },
    {
     "type": "single",
     "q": "Что выведет программа для матрицы 3×3, заполненной обратной спиралью (против часовой) числами 1..9? (Предположим правильный порядок: 1 2 3 / 8 9 4 / 7 6 5)",
     "options": [
      "a[1][1] = 9",
      "a[1][1] = 5",
      "a[1][1] = 6",
      "a[1][1] = 8"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой элемент будет на позиции a[2][0] после заполнения матрицы 3×3 обратной спиралью (против часовой) числами 1..9?",
     "options": [
      "7",
      "8",
      "9",
      "3"
     ],
     "answer": 3,
     "explain": "Левый столбец заполняется первым сверху вниз: 1, 2, 3 — поэтому a[2][0] = 3."
    },
    {
     "type": "single",
     "q": "Какое условие определяет, что клетка в шахматном заполнении должна быть заполнена одним цветом (например, чёрным)?",
     "options": [
      "(i + j) % 2 == 0",
      "(i + j) % 2 == 1",
      "i % 2 == 0",
      "j % 2 == 0"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Как заполнить матрицу в шахматном порядке: чётные клетки (сумма индексов чётна) — числом 1, нечётные — числом 0?",
     "options": [
      "for i in range(n):\n    for j in range(m):\n        a[i][j] = 1 if (i+j)%2==0 else 0",
      "for i in range(n):\n    for j in range(m):\n        a[i][j] = i % 2",
      "for i in range(n):\n    for j in range(m):\n        a[i][j] = (i+j) % 2",
      "for i in range(n):\n    for j in range(m):\n        a[i][j] = 0"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа для матрицы 3×3, заполненной шахматно (чётные клетки = 1, нечётные = 0)?",
     "options": [
      "[[1,0,1],[0,1,0],[1,0,1]]",
      "[[0,1,0],[1,0,1],[0,1,0]]",
      "[[1,1,1],[0,0,0],[1,1,1]]",
      "[[1,0,0],[0,1,0],[0,0,1]]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой элемент будет на позиции a[2][1] в шахматной матрице 4×4 (чётные клетки = 1, нечётные = 0)?",
     "options": [
      "0",
      "1",
      "2",
      "-1"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Что произойдёт, если в коде заполнения спиралью не проверять условия if top &lt;= bottom и if left &lt;= right?",
     "options": [
      "Матрица заполнится правильно",
      "Возникнет выход за границы для нечётных размеров",
      "Программа не скомпилируется",
      "Матрица заполнится нулями"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Какой код создаёт матрицу 4×4, заполненную по спирали числами от 1 до 16? (Выберите правильный фрагмент)",
     "options": [
      "Использует четыре цикла с сужением границ",
      "Использует два вложенных цикла",
      "Использует рекурсию",
      "Использует while для каждой строки"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "В какой последовательности заполняются элементы при спирали по часовой стрелке для матрицы 4×4?",
     "options": [
      "Верхняя строка → левый столбец → нижняя строка → правый столбец",
      "Верхняя строка → правый столбец → нижняя строка → левый столбец",
      "Верхняя строка → нижняя строка → левый столбец → правый столбец",
      "По диагоналям"
     ],
     "answer": 1
    },
    {
     "type": "single",
     "q": "Как изменится алгоритм спирали, чтобы заполнять против часовой стрелки (обратная спираль) с левого верхнего угла?",
     "options": [
      "Поменять порядок обхода: левый столбец ↓, нижняя строка →, правый столбец ↑, верхняя строка ←",
      "Просто развернуть матрицу после заполнения",
      "Использовать отрицательные шаги",
      "Заполнять с правого нижнего угла"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Что выведет программа, если для матрицы 3×3 заполнить её по спирали числами от 1 до 9, а затем вывести a[0][1]?",
     "options": [
      "2",
      "4",
      "6",
      "8"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Как заполнить матрицу по шахматному принципу, но с использованием двух разных чисел (например, 5 и 7)?",
     "options": [
      "a[i][j] = 5 if (i+j)%2==0 else 7",
      "a[i][j] = 5 if i%2==0 else 7",
      "a[i][j] = 5 + (i+j)%2",
      "a[i][j] = 5 * (i+j)%2 + 7"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой элемент будет стоять в центре матрицы 7×7, заполненной по спирали по часовой стрелке числами от 1 до 49?",
     "options": [
      "25",
      "24",
      "26",
      "37"
     ],
     "answer": 0
    }
   ]
  },
  {
   "id": "p25",
   "title": "Двумерные массивы, ч. 7: Сумма, произведение, максимумы, диагонали",
   "questions": [
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "10 24",
      "10 12",
      "6 24",
      "10 25"
     ],
     "answer": 0,
     "code": "a = [[1, 2], [3, 4]]\ns = 0\np = 1\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        s += a[i][j]\n        p *= a[i][j]\nprint(s, p)"
    },
    {
     "type": "single",
     "q": "Какой код находит сумму всех элементов двумерного массива a?",
     "options": [
      "sum(a)",
      "sum(sum(row) for row in a)",
      "sum(a[0]) + sum(a[1])",
      "Все варианты верны"
     ],
     "answer": 1,
     "codeOptions": true,
     "explain": "sum(a) не работает для списка списков; sum(a[0]) + sum(a[1]) годится только для двух строк."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "8 2",
      "8 3",
      "5 2",
      "3 8"
     ],
     "answer": 0,
     "code": "a = [[5, 2], [8, 3]]\nmax_el = a[0][0]\nmin_el = a[0][0]\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if a[i][j] > max_el:\n            max_el = a[i][j]\n        if a[i][j] < min_el:\n            min_el = a[i][j]\nprint(max_el, min_el)"
    },
    {
     "type": "single",
     "q": "Какой код находит максимальный элемент в каждой строке матрицы a?",
     "options": [
      "[max(row) for row in a]",
      "max(a)",
      "[max(a[i]) for i in range(len(a))]",
      "Оба варианта А и В верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Оба варианта верны: каждый из указанных фрагментов даёт нужный результат."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "15",
      "25",
      "45",
      "55"
     ],
     "answer": 2,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ns = 0\nfor i in range(len(a)):\n    s += sum(a[i])\nprint(s)"
    },
    {
     "type": "single",
     "q": "Какой код находит сумму элементов каждого столбца матрицы a (в виде списка)?",
     "options": [
      "[sum(a[j][i] for j in range(len(a))) for i in range(len(a[0]))]",
      "[sum(row[i] for row in a) for i in range(len(a[0]))]",
      "Оба варианта верны",
      "Ни один не верен"
     ],
     "answer": 2,
     "codeOptions": true,
     "explain": "Оба варианта верны: каждый из указанных фрагментов даёт нужный результат."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "6 15",
      "15 6",
      "1 2 3 4 5 6",
      "3 6"
     ],
     "answer": 0,
     "code": "a = [[1, 4], [2, 5], [3, 6]]\nfor i in range(len(a[0])):\n    col_sum = 0\n    for j in range(len(a)):\n        col_sum += a[j][i]\n    print(col_sum, end=' ')"
    },
    {
     "type": "single",
     "q": "Какой код находит минимальный элемент в каждом столбце матрицы a?",
     "options": [
      "[min(row[i] for row in a) for i in range(len(a[0]))]",
      "[min(row) for row in a]",
      "min(a)",
      "[min(a[i][j] for j in range(len(a[i]))) for i in range(len(a))]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2 1 и 4 3",
      "1 2 и 3 4",
      "4 1",
      "2 3"
     ],
     "answer": 0,
     "code": "a = [[1, 2], [3, 4]]\nfor i in range(len(a)):\n    print(max(a[i]), min(a[i]))"
    },
    {
     "type": "single",
     "q": "Какой код выводит элементы главной диагонали матрицы a в одну строку?",
     "options": [
      "print([a[i][i] for i in range(len(a))])",
      "print([a[i][len(a)-1-i] for i in range(len(a))])",
      "print([a[i][j] for i in range(len(a)) for j in range(len(a[i])) if i + j == len(a) - 1])",
      "Все варианты верны"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код выводит элементы побочной диагонали матрицы a в одну строку?",
     "options": [
      "print([a[i][i] for i in range(len(a))])",
      "print([a[i][len(a)-1-i] for i in range(len(a))])",
      "print([a[i][j] for i in range(len(a)) for j in range(len(a[i])) if i + j == len(a) - 1])",
      "Оба варианта Б и В верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Оба варианта верны: каждый из указанных фрагментов даёт нужный результат."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "15",
      "18",
      "12",
      "10"
     ],
     "answer": 0,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ns = 0\nfor i in range(len(a)):\n    s += a[i][i]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "15",
      "18",
      "12",
      "10"
     ],
     "answer": 0,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ns = 0\nn = len(a)\nfor i in range(n):\n    s += a[i][n-1-i]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Найдите ошибку в коде, который должен найти сумму главной диагонали:",
     "options": [
      "Ошибки нет",
      "Нужно использовать a[i][j]",
      "Не хватает print(s)",
      "len(a) не определено"
     ],
     "answer": 0,
     "code": "s = 0\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if i == j:\n            s += a[i][j]",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код находит сумму элементов выше главной диагонали?",
     "options": [
      "s = 0\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if i < j:\n            s += a[i][j]",
      "s = 0\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if i > j:\n            s += a[i][j]",
      "s = sum(a[i][j] for i in range(len(a)) for j in range(len(a[i])) if i < j)",
      "Оба варианта А и В верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Оба варианта верны: каждый из указанных фрагментов даёт нужный результат."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "8",
      "10",
      "12",
      "15"
     ],
     "answer": 2,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ns = 0\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if i > j:\n            s += a[i][j]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Какой код находит сумму элементов НИЖЕ побочной диагонали?",
     "options": [
      "s = 0\nn = len(a)\nfor i in range(n):\n    for j in range(n):\n        if i + j > n - 1:\n            s += a[i][j]",
      "s = 0\nn = len(a)\nfor i in range(n):\n    for j in range(n):\n        if i + j < n - 1:\n            s += a[i][j]",
      "s = 0\nn = len(a)\nfor i in range(n):\n    for j in range(n):\n        if i < j:\n            s += a[i][j]",
      "s = 0\nn = len(a)\nfor i in range(n):\n    for j in range(n):\n        if i > j:\n            s += a[i][j]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "7",
      "8",
      "10",
      "12"
     ],
     "answer": 0,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ns = 0\nn = len(a)\nfor i in range(n):\n    for j in range(n):\n        if i + j < n - 1:\n            s += a[i][j]\nprint(s)"
    },
    {
     "type": "single",
     "q": "Какой код находит произведение всех элементов матрицы a?",
     "options": [
      "p = 1\nfor row in a:\n    for x in row:\n        p *= x",
      "p = sum(row) for row in a",
      "p = a[0][0] * a[-1][-1]",
      "p = max(a) * min(a)"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "10",
      "24",
      "120",
      "30"
     ],
     "answer": 2,
     "code": "a = [[2, 3], [4, 5]]\np = 1\nfor row in a:\n    for x in row:\n        p *= x\nprint(p)"
    }
   ]
  },
  {
   "id": "p26",
   "title": "Двумерные массивы, ч. 8: Поиск, подсчёт, транспонирование",
   "questions": [
    {
     "type": "single",
     "q": "Какой код находит произведение элементов побочной диагонали квадратной матрицы a?",
     "options": [
      "p = 1\nfor i in range(len(a)):\n    p *= a[i][i]",
      "p = 1\nn = len(a)\nfor i in range(n):\n    p *= a[i][n-1-i]",
      "p = 1\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if i + j == len(a) - 1:\n            p *= a[i][j]",
      "Оба варианта Б и В верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Оба варианта верны: каждый из указанных фрагментов даёт нужный результат."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "15",
      "45",
      "105",
      "120"
     ],
     "answer": 2,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\np = 1\nn = len(a)\nfor i in range(n):\n    p *= a[i][n-1-i]\nprint(p)"
    },
    {
     "type": "single",
     "q": "Какой код находит число k в матрице a и выводит его координаты (индексы)?",
     "options": [
      "for i in range(len(a)):\n    for j in range(len(a[i])):\n        if a[i][j] == k:\n            print(i, j)",
      "print(a.index(k))",
      "for row in a:\n    if k in row:\n        print(a.index(row), row.index(k))",
      "Оба варианта А и В верны"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1 0",
      "0 1",
      "-1",
      "1 1"
     ],
     "answer": 0,
     "code": "a = [[2, 4], [6, 8]]\nk = 6\nfound = False\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if a[i][j] == k:\n            print(i, j)\n            found = True\nif not found:\n    print(-1)"
    },
    {
     "type": "single",
     "q": "Какой код считает количество элементов, больших числа k, в матрице a?",
     "options": [
      "count = 0\nfor row in a:\n    for x in row:\n        if x > k:\n            count += 1",
      "count = sum(1 for row in a for x in row if x > k)",
      "count = len([x for row in a for x in row if x > k])",
      "Все варианты верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Все три фрагмента считают одно и то же."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "3",
      "4",
      "5",
      "6"
     ],
     "answer": 1,
     "code": "a = [[3, 7, 2], [8, 1, 5], [4, 9, 6]]\nk = 5\ncount = 0\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if a[i][j] > k:\n            count += 1\nprint(count)"
    },
    {
     "type": "single",
     "q": "Какой код считает количество чётных элементов в матрице a?",
     "options": [
      "count = 0\nfor row in a:\n    for x in row:\n        if x % 2 == 0:\n            count += 1",
      "count = sum(1 for row in a for x in row if x % 2 == 0)",
      "count = len([x for row in a for x in row if x % 2 == 0])",
      "Все варианты верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Все три фрагмента считают одно и то же."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "4",
      "5",
      "6",
      "7"
     ],
     "answer": 1,
     "code": "a = [[2, 5, 8], [3, 6, 9], [4, 7, 10]]\ncount = 0\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if a[i][j] % 2 == 0:\n            count += 1\nprint(count)"
    },
    {
     "type": "single",
     "q": "Какой код считает количество отрицательных элементов в матрице a?",
     "options": [
      "count = 0\nfor row in a:\n    for x in row:\n        if x < 0:\n            count += 1",
      "count = sum(1 for row in a for x in row if x < 0)",
      "count = len([x for row in a for x in row if x < 0])",
      "Все варианты верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Все три фрагмента считают одно и то же."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2",
      "3",
      "4",
      "5"
     ],
     "answer": 2,
     "code": "a = [[-1, 2, -3], [4, -5, 6], [-7, 8, 9]]\ncount = 0\nfor row in a:\n    for x in row:\n        if x < 0:\n            count += 1\nprint(count)",
     "explain": "Отрицательных элементов четыре: −1, −3, −5, −7."
    },
    {
     "type": "single",
     "q": "Какой код выполняет транспонирование матрицы a (строки становятся столбцами)?",
     "options": [
      "b = [[a[j][i] for j in range(len(a))] for i in range(len(a[0]))]",
      "b = [row for row in a]",
      "b = a.T",
      "b = a[::-1]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[[1, 3, 5], [2, 4, 6]]",
      "[[1, 2], [3, 4], [5, 6]]",
      "[[5, 6], [3, 4], [1, 2]]",
      "[[1, 2, 3], [4, 5, 6]]"
     ],
     "answer": 0,
     "code": "a = [[1, 2], [3, 4], [5, 6]]\nb = [[a[j][i] for j in range(len(a))] for i in range(len(a[0]))]\nprint(b)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой элемент будет на позиции b[1][0] после транспонирования матрицы a = [[1, 2, 3], [4, 5, 6]]?",
     "options": [
      "1",
      "2",
      "4",
      "5"
     ],
     "answer": 2
    },
    {
     "type": "single",
     "q": "Что произойдёт при транспонировании матрицы размером 3×2?",
     "options": [
      "Получится матрица 2×3",
      "Получится матрица 3×2",
      "Размер не изменится",
      "Возникнет ошибка"
     ],
     "answer": 0
    },
    {
     "type": "single",
     "q": "Какой код находит произведение элементов побочной диагонали с использованием вложенных циклов?",
     "options": [
      "p = 1\nn = len(a)\nfor i in range(n):\n    p *= a[i][n-1-i]",
      "p = 1\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if i + j == len(a) - 1:\n            p *= a[i][j]",
      "Оба варианта верны",
      "Ни один не верен"
     ],
     "answer": 1,
     "codeOptions": true,
     "explain": "Вложенные циклы есть только в варианте Б; вариант А использует один цикл."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 0,
     "code": "a = [[1, 2], [3, 4]]\nk = 5\ncount = 0\nfor row in a:\n    for x in row:\n        if x > k:\n            count += 1\nprint(count)"
    },
    {
     "type": "single",
     "q": "Какой код считает количество положительных элементов в матрице a?",
     "options": [
      "count = 0\nfor row in a:\n    for x in row:\n        if x > 0:\n            count += 1",
      "count = 0\nfor row in a:\n    for x in row:\n        if x < 0:\n            count += 1",
      "count = len(a) * len(a[0])",
      "count = sum(1 for row in a for x in row if x != 0)"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "15",
      "45",
      "105",
      "120"
     ],
     "answer": 1,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\np = 1\nfor i in range(len(a)):\n    p *= a[i][i]\nprint(p)"
    },
    {
     "type": "single",
     "q": "Найдите ошибку в коде, который должен считать количество чётных элементов:",
     "options": [
      "Ошибки нет",
      "Неправильное использование = вместо == в условии",
      "Нет print(count)",
      "count не инициализирован"
     ],
     "answer": 1,
     "code": "count = 0\nfor row in a:\n    for x in row:\n        if x % 2 = 0:\n            count += 1",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа при поиске элемента k = 5 в матрице a = [[1, 2], [3, 4]]?",
     "options": [
      "-1",
      "0 1",
      "1 0",
      "0 0"
     ],
     "answer": 0,
     "code": "k = 5\nfound = False\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if a[i][j] == k:\n            print(i, j)\n            found = True\nif not found:\n    print(-1)"
    }
   ]
  },
  {
   "id": "p27",
   "title": "Двумерные массивы, ч. 9: Добавление/удаление строк, змейка, отбор, замена, диагонали",
   "questions": [
    {
     "type": "single",
     "q": "Какой код добавляет новую строку new_row в конец матрицы a?",
     "options": [
      "a.append(new_row)",
      "a.insert(0, new_row)",
      "a.extend(new_row)",
      "a += new_row"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[[1, 2], [3, 4], [5, 6]]",
      "[[1, 2], [5, 6], [3, 4]]",
      "[[1, 2, 5, 6], [3, 4]]",
      "[[1, 2], [3, 4], 5, 6]"
     ],
     "answer": 0,
     "code": "a = [[1, 2], [3, 4]]\nnew_row = [5, 6]\na.append(new_row)\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код удаляет последнюю строку из матрицы a?",
     "options": [
      "a.pop()",
      "a.remove(-1)",
      "del a[-1]",
      "Оба варианта А и В верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "И a.pop(), и del a[-1] удаляют последнюю строку. a.remove(-1) ищет значение −1, а не индекс."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[[1, 2], [3, 4]]",
      "[[1, 2], [3, 4], [5, 6]]",
      "[[3, 4], [5, 6]]",
      "[[1, 2], [5, 6]]"
     ],
     "answer": 0,
     "code": "a = [[1, 2], [3, 4], [5, 6]]\na.pop()\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код удаляет строку с индексом k из матрицы a?",
     "options": [
      "a.pop(k)",
      "a.remove(k)",
      "del a[k]",
      "Оба варианта А и В верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "И a.pop(k), и del a[k] удаляют строку по индексу. remove(k) ищет значение."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[[1, 2], [5, 6]]",
      "[[1, 2], [3, 4]]",
      "[[3, 4], [5, 6]]",
      "[[1, 2], [3, 4], [5, 6]]"
     ],
     "answer": 0,
     "code": "a = [[1, 2], [3, 4], [5, 6]]\nk = 1\ndel a[k]\nprint(a)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код заполняет матрицу «змейкой» (первая строка слева направо, вторая справа налево)?",
     "options": [
      "x = 1\nfor i in range(n):\n    if i % 2 == 0:\n        for j in range(m):\n            a[i][j] = x; x += 1\n    else:\n        for j in range(m-1, -1, -1):\n            a[i][j] = x; x += 1",
      "x = 1\nfor i in range(n):\n    for j in range(m):\n        a[i][j] = x; x += 1",
      "for i in range(n):\n    a[i] = list(range(i*m+1, i*m+m+1))",
      "x = 1\nfor i in range(n):\n    if i % 2 == 1:\n        for j in range(m):\n            a[i][j] = x; x += 1\n    else:\n        for j in range(m-1, -1, -1):\n            a[i][j] = x; x += 1"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой элемент будет на позиции a[1][0] в матрице 3×4, заполненной змейкой (первая строка →, вторая ←, третья →)?",
     "options": [
      "5",
      "6",
      "7",
      "8"
     ],
     "answer": 3
    },
    {
     "type": "single",
     "q": "Какой код создаёт новый список из чётных элементов матрицы a?",
     "options": [
      "even = [x for row in a for x in row if x % 2 == 0]",
      "even = [x for row in a for x in row if x % 2 != 0]",
      "even = a[::2]",
      "even = [x for x in a if x % 2 == 0]"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "[1, 3, 5, 7, 9]",
      "[2, 4, 6, 8]",
      "[2, 4, 6, 8, 10]",
      "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
     ],
     "answer": 1,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\neven = []\nfor row in a:\n    for x in row:\n        if x % 2 == 0:\n            even.append(x)\nprint(even)",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какой код заменяет все отрицательные элементы матрицы a на 0?",
     "options": [
      "for i in range(len(a)):\n    for j in range(len(a[i])):\n        if a[i][j] < 0:\n            a[i][j] = 0",
      "for row in a:\n    for x in row:\n        if x < 0:\n            x = 0",
      "a = [[0 if x < 0 else x for x in row] for row in a]",
      "Оба варианта А и В верны"
     ],
     "answer": 3,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "-4",
      "0",
      "4",
      "5"
     ],
     "answer": 1,
     "code": "a = [[1, -2, 3], [-4, 5, -6]]\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if a[i][j] < 0:\n            a[i][j] = 0\nprint(a[1][0])"
    },
    {
     "type": "single",
     "q": "Какое условие определяет элементы ВЫШЕ главной диагонали?",
     "options": [
      "i < j",
      "i > j",
      "i == j",
      "i + j == n - 1"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какое условие определяет элементы НИЖЕ главной диагонали?",
     "options": [
      "i < j",
      "i > j",
      "i == j",
      "i + j == n - 1"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2 3 6",
      "4 7 8",
      "1 5 9",
      "3 6 9"
     ],
     "answer": 0,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if i < j:\n            print(a[i][j], end=' ')"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "2 3 6",
      "4 7 8",
      "1 5 9",
      "3 6 9"
     ],
     "answer": 1,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nfor i in range(len(a)):\n    for j in range(len(a[i])):\n        if i > j:\n            print(a[i][j], end=' ')"
    },
    {
     "type": "single",
     "q": "Какое условие определяет элементы ВЫШЕ побочной диагонали?",
     "options": [
      "i + j < n - 1",
      "i + j > n - 1",
      "i + j == n - 1",
      "i < j"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Какое условие определяет элементы НИЖЕ побочной диагонали?",
     "options": [
      "i + j < n - 1",
      "i + j > n - 1",
      "i + j == n - 1",
      "i > j"
     ],
     "answer": 1,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1 2 4",
      "3 6 9",
      "7 8 9",
      "4 7 8"
     ],
     "answer": 0,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nn = len(a)\nfor i in range(n):\n    for j in range(n):\n        if i + j < n - 1:\n            print(a[i][j], end=' ')"
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1 2 4",
      "3 6 9",
      "6 8 9",
      "4 7 8"
     ],
     "answer": 2,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nn = len(a)\nfor i in range(n):\n    for j in range(n):\n        if i + j > n - 1:\n            print(a[i][j], end=' ')"
    }
   ]
  },
  {
   "id": "p28",
   "title": "Двумерные массивы, ч. 10: Строки и столбцы, замена диагоналей, комбинированные задачи",
   "questions": [
    {
     "type": "single",
     "q": "Какой код находит номер строки с максимальной суммой элементов?",
     "options": [
      "max_sum = -float('inf')\nmax_idx = 0\nfor i in range(len(a)):\n    s = sum(a[i])\n    if s > max_sum:\n        max_sum = s\n        max_idx = i",
      "max_idx = a.index(max(sum(row) for row in a))",
      "max_idx = max(range(len(a)), key=lambda i: sum(a[i]))",
      "Оба варианта А и В верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Варианты А и В находят номер строки с максимальной суммой; в Б index ищет число среди строк — ошибка."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 2,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nmax_sum = -1\nmax_idx = 0\nfor i in range(len(a)):\n    s = sum(a[i])\n    if s > max_sum:\n        max_sum = s\n        max_idx = i\nprint(max_idx)"
    },
    {
     "type": "single",
     "q": "Какой код находит номер столбца с минимальной суммой элементов?",
     "options": [
      "min_sum = float('inf')\nmin_idx = 0\nfor j in range(len(a[0])):\n    s = sum(a[i][j] for i in range(len(a)))\n    if s < min_sum:\n        min_sum = s\n        min_idx = j",
      "min_idx = min(range(len(a[0])), key=lambda j: sum(a[i][j] for i in range(len(a))))",
      "min_idx = a[0].index(min(sum(row[j] for row in a) for j in range(len(a[0]))))",
      "Оба варианта А и Б верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "А и Б верны; в В index ищется в первой строке, а не среди сумм."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 0,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nmin_sum = float('inf')\nmin_idx = 0\nfor j in range(len(a[0])):\n    s = 0\n    for i in range(len(a)):\n        s += a[i][j]\n    if s < min_sum:\n        min_sum = s\n        min_idx = j\nprint(min_idx)"
    },
    {
     "type": "single",
     "q": "Какой код заменяет элементы главной диагонали квадратной матрицы на 0?",
     "options": [
      "for i in range(len(a)):\n    a[i][i] = 0",
      "for i in range(len(a)):\n    for j in range(len(a[i])):\n        if i == j:\n            a[i][j] = 0",
      "for i in range(len(a)):\n    a[i][len(a)-1-i] = 0",
      "Оба варианта А и Б верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Оба варианта верны: каждый из указанных фрагментов даёт нужный результат."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "0",
      "5",
      "9"
     ],
     "answer": 1,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nfor i in range(len(a)):\n    a[i][i] = 0\nprint(a[1][1])"
    },
    {
     "type": "single",
     "q": "Какой код заменяет элементы побочной диагонали на -1?",
     "options": [
      "for i in range(len(a)):\n    a[i][len(a)-1-i] = -1",
      "for i in range(len(a)):\n    a[i][i] = -1",
      "for i in range(len(a)):\n    for j in range(len(a[i])):\n        if i + j == len(a) - 1:\n            a[i][j] = -1",
      "Оба варианта А и В верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Оба варианта верны: каждый из указанных фрагментов даёт нужный результат."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "3",
      "-1",
      "0",
      "9"
     ],
     "answer": 1,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nfor i in range(len(a)):\n    a[i][len(a)-1-i] = -1\nprint(a[0][2])"
    },
    {
     "type": "single",
     "q": "Какой код находит строку с максимальной суммой, а затем заменяет все её элементы на 0?",
     "options": [
      "max_idx = max(range(len(a)), key=lambda i: sum(a[i]))\nfor j in range(len(a[max_idx])):\n    a[max_idx][j] = 0",
      "max_idx = max(range(len(a)), key=lambda i: sum(a[i]))\na[max_idx] = [0] * len(a[max_idx])",
      "max_idx = max(range(len(a)), key=lambda i: sum(a[i]))\nfor i in range(len(a)):\n    a[i][max_idx] = 0",
      "Оба варианта А и Б верны"
     ],
     "answer": 3,
     "codeOptions": true,
     "explain": "Оба варианта верны: каждый из указанных фрагментов даёт нужный результат."
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0",
      "8",
      "9",
      "7"
     ],
     "answer": 0,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nmax_idx = max(range(len(a)), key=lambda i: sum(a[i]))\nfor j in range(len(a[max_idx])):\n    a[max_idx][j] = 0\nprint(a[2][1])"
    },
    {
     "type": "single",
     "q": "Какой код находит столбец с минимальной суммой, а затем увеличивает все его элементы на 10?",
     "options": [
      "min_idx = min(range(len(a[0])), key=lambda j: sum(a[i][j] for i in range(len(a))))\nfor i in range(len(a)):\n    a[i][min_idx] += 10",
      "min_idx = min(range(len(a[0])), key=lambda j: sum(a[i][j] for i in range(len(a))))\nfor i in range(len(a[0])):\n    a[min_idx][i] += 10",
      "min_idx = min(range(len(a)), key=lambda i: sum(a[i]))\nfor i in range(len(a)):\n    a[i][min_idx] += 10",
      "min_idx = min(range(len(a[0])), key=lambda j: sum(a[i][j] for i in range(len(a))))\nfor j in range(len(a[0])):\n    a[j][min_idx] += 10"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "11",
      "12",
      "13"
     ],
     "answer": 1,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nmin_idx = min(range(len(a[0])), key=lambda j: sum(a[i][j] for i in range(len(a))))\nfor i in range(len(a)):\n    a[i][min_idx] += 10\nprint(a[0][0])"
    },
    {
     "type": "single",
     "q": "Какой код находит строку с минимальной суммой элементов?",
     "options": [
      "min_idx = min(range(len(a)), key=lambda i: sum(a[i]))",
      "min_idx = min(range(len(a[0])), key=lambda j: sum(a[i][j] for i in range(len(a))))",
      "min_idx = a.index(min(sum(row) for row in a))",
      "Оба варианта А и В верны"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 0,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nmin_idx = min(range(len(a)), key=lambda i: sum(a[i]))\nprint(min_idx)"
    },
    {
     "type": "single",
     "q": "Какой код находит столбец с максимальной суммой элементов?",
     "options": [
      "max_idx = max(range(len(a[0])), key=lambda j: sum(a[i][j] for i in range(len(a))))",
      "max_idx = max(range(len(a)), key=lambda i: sum(a[i]))",
      "max_idx = max(sum(row[j] for row in a) for j in range(len(a[0])))",
      "max_idx = a[0].index(max(sum(row[j] for row in a) for j in range(len(a[0]))))"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 2,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nmax_idx = max(range(len(a[0])), key=lambda j: sum(a[i][j] for i in range(len(a))))\nprint(max_idx)"
    },
    {
     "type": "single",
     "q": "Какой код заменяет главную диагональ на 1, а побочную на -1?",
     "options": [
      "n = len(a)\nfor i in range(n):\n    a[i][i] = 1\n    a[i][n-1-i] = -1",
      "for i in range(n):\n    a[i][i] = -1\n    a[i][n-1-i] = 1",
      "for i in range(n):\n    if i == i:\n        a[i][i] = 1\n    if i == n-1-i:\n        a[i][n-1-i] = -1",
      "for i in range(n):\n    for j in range(n):\n        if i == j:\n            a[i][j] = 1\n        if i + j == n - 1:\n            a[i][j] = -1"
     ],
     "answer": 0,
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "1",
      "-1",
      "5",
      "0"
     ],
     "answer": 1,
     "code": "a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nn = len(a)\nfor i in range(n):\n    a[i][i] = 1\n    a[i][n-1-i] = -1\nprint(a[1][1])",
     "explain": "Для i = 1 сначала a[1][1] = 1, затем n − 1 − i = 1, и тот же элемент становится −1: центр лежит на обеих диагоналях."
    },
    {
     "type": "single",
     "q": "Найдите ошибку в коде, который должен найти строку с максимальной суммой:",
     "options": [
      "Ошибки нет",
      "Не инициализирован max_sum",
      "Неправильное условие",
      "Не хватает print(max_idx)"
     ],
     "answer": 0,
     "code": "max_sum = -1\nmax_idx = 0\nfor i in range(len(a)):\n    s = 0\n    for j in range(len(a[i])):\n        s += a[i][j]\n    if s > max_sum:\n        max_sum = s\n        max_idx = i",
     "codeOptions": true
    },
    {
     "type": "single",
     "q": "Что выведет программа?",
     "options": [
      "10",
      "6",
      "8",
      "1"
     ],
     "answer": 0,
     "code": "a = [[-5, 10, 3], [4, -2, 6], [1, 8, -3]]\nmax_row = max(range(len(a)), key=lambda i: sum(a[i]))\nmin_col = min(range(len(a[0])), key=lambda j: sum(a[i][j] for i in range(len(a))))\nprint(a[max_row][min_col])"
    }
   ]
  }
 ]
});
