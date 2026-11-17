/* Банки тренировочных вопросов (по 100 на модули 1–8 и 12).
   Сгенерировано tools/gen_banks.py: каждый ответ вычислен запуском кода. Не редактируйте вручную. */
window.QUESTION_BANKS = {
"m1": [
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3",
"2",
"-1",
"0"
],
"answer": 3,
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code>/<code>int</code> — отбросить дробную часть, <code>round</code> — к ближайшему, а .5 — к чётному. Программа выводит: <code>0</code>.",
"code": "import math\nprint(round(-0.5))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Значения каких выражений имеют тип float?",
"options": [
"abs(-2)",
"10 % 3.0",
"len('ab')",
"7 / 7",
"8 / 4",
"2 ** -1"
],
"answer": [
1,
3,
4,
5
],
"explain": "Результат — float, если есть деление <code>/</code>, отрицательная степень или хотя бы один операнд float.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"20",
"12",
"10",
"-10"
],
"answer": 2,
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code>/<code>int</code> — отбросить дробную часть, <code>round</code> — к ближайшему, а .5 — к чётному. Программа выводит: <code>10</code>.",
"code": "import math\nprint(round(9.99))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и результат (модуль math импортирован).",
"pairs": [
{
"left": "math.ceil(7.01)",
"right": "8"
},
{
"left": "round(-2.5)",
"right": "-2"
},
{
"left": "math.floor(7.99)",
"right": "7"
},
{
"left": "math.sqrt(49)",
"right": "7.0"
}
],
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code> — к нулю, <code>sqrt</code>/<code>pow</code>/<code>fabs</code> возвращают float.",
"distractors": [
"-3",
"True"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7.5",
"30",
"7",
"1"
],
"answer": 2,
"explain": "<code>//</code> — целочисленное деление (округление вниз), <code>%</code> — остаток, <code>/</code> — всегда float, <code>**</code> — степень. Программа выводит: <code>7</code>.",
"code": "a = 15\nb = 2\nprint(a // b)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"3",
"976",
"6"
],
"answer": 0,
"explain": "Здесь вычисляется цифра сотен: <code>// 10</code> отбрасывает последнюю цифру, <code>% 10</code> берёт последнюю. Программа выводит: <code>7</code>.",
"code": "n = 9763\nprint(n // 100 % 10)",
"codeOptions": true
},
{
"type": "single",
"q": "Какое имя переменной допустимо в Python?",
"options": [
"2total",
"total-2",
"_total2",
"for"
],
"answer": 2,
"explain": "Имя начинается с буквы или _, состоит из букв, цифр и _ и не совпадает с ключевым словом."
},
{
"type": "single",
"q": "Каковы значения переменных после выполнения программы?",
"options": [
"10 33",
"10 88",
"33 10",
"11 33"
],
"answer": 0,
"explain": "Выполняйте присваивания строго по порядку, каждый раз подставляя текущие значения. Программа выводит: <code>10 33</code>.",
"code": "a = 8\nb = 3\na += b\nb *= a\na -= 1\nprint(a, b)",
"codeOptions": true
},
{
"type": "single",
"q": "Каковы значения переменных после выполнения программы?",
"options": [
"2 8",
"8 4",
"4 8",
"12 8"
],
"answer": 2,
"explain": "Выполняйте присваивания строго по порядку, каждый раз подставляя текущие значения. Программа выводит: <code>4 8</code>.",
"code": "a = 6\nb = 2\na, b = b, a + b\na = a * 2\nprint(a, b)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-7",
"8",
"7",
"14"
],
"answer": 2,
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code>/<code>int</code> — отбросить дробную часть, <code>round</code> — к ближайшему, а .5 — к чётному. Программа выводит: <code>7</code>.",
"code": "import math\nprint(round(7.2))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2",
"6",
"60",
"6.666666666666667"
],
"answer": 1,
"explain": "<code>//</code> — целочисленное деление (округление вниз), <code>%</code> — остаток, <code>/</code> — всегда float, <code>**</code> — степень. Программа выводит: <code>6</code>.",
"code": "a = 20\nb = 3\nprint(a // b)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"x A 1\n|",
"x-A-1\n|",
"xA1-|",
"x-A-1|"
],
"answer": 3,
"explain": "<code>sep</code> ставится между значениями, <code>end</code> — один раз в конце вместо перевода строки. Программа выводит: <code>x-A-1|</code>.",
"code": "print('x', 'A', '1', sep='-', end='')\nprint(\"|\")",
"codeOptions": true
},
{
"type": "single",
"q": "Каковы значения переменных после выполнения программы?",
"options": [
"8 15",
"14 15",
"15 16",
"16 15"
],
"answer": 3,
"explain": "Выполняйте присваивания строго по порядку, каждый раз подставляя текущие значения. Программа выводит: <code>16 15</code>.",
"code": "a = 7\nb = 8\na, b = b, a + b\na = a * 2\nprint(a, b)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"321\n|",
"|123",
"21|",
"321|"
],
"answer": 3,
"explain": "<code>sep</code> ставится между значениями, <code>end</code> — один раз в конце вместо перевода строки. Программа выводит: <code>321|</code>.",
"code": "print('3', '2', '1', sep='', end='')\nprint(\"|\")",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"8",
"Ошибка",
"-8",
"16"
],
"answer": 0,
"explain": "<code>+</code> складывает числа, но склеивает строки; строку можно умножить на целое число; <code>int()</code> отбрасывает дробную часть. Программа выводит: <code>8</code>.",
"code": "print(int('4') + 4)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"70",
"0",
"7",
"8"
],
"answer": 3,
"explain": "Здесь вычисляется первая цифра: <code>// 10</code> отбрасывает последнюю цифру, <code>% 10</code> берёт последнюю. Программа выводит: <code>8</code>.",
"code": "n = 8670\nprint(n // 1000)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 5 — ровно целое число 5 (тип int)?",
"options": [
"int('5')",
"6 - 1",
"50 % 10",
"abs(-5)",
"10 / 2",
"5 ** 1"
],
"answer": [
0,
1,
3,
5
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 5.0), а не int.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Значения каких выражений имеют тип float?",
"options": [
"10 % 3",
"round(2.6)",
"2 ** 3",
"int(2.5)",
"10 % 3.0",
"8.0 // 4"
],
"answer": [
4,
5
],
"explain": "Результат — float, если есть деление <code>/</code>, отрицательная степень или хотя бы один операнд float.",
"codeOptions": true
},
{
"type": "single",
"q": "Какой тип имеет значение выражения?",
"options": [
"float",
"str",
"int",
"bool"
],
"answer": 2,
"explain": "Деление <code>/</code> всегда даёт float; сравнение — bool; умножение строки — str; <code>round()</code> и <code>len()</code> возвращают int.",
"code": "int('7')",
"codeOptions": true
},
{
"type": "single",
"q": "Какой тип имеет значение выражения?",
"options": [
"int",
"float",
"bool",
"str"
],
"answer": 0,
"explain": "Деление <code>/</code> всегда даёт float; сравнение — bool; умножение строки — str; <code>round()</code> и <code>len()</code> возвращают int.",
"code": "True + 1",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0",
"4",
"4.0",
"16"
],
"answer": 2,
"explain": "<code>//</code> — целочисленное деление (округление вниз), <code>%</code> — остаток, <code>/</code> — всегда float, <code>**</code> — степень. Программа выводит: <code>4.0</code>.",
"code": "a = 8\nb = 2\nprint(a / b)",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"2",
"1",
"0",
"3"
],
"answer": 2,
"explain": "Приоритет: <code>**</code> (справа налево), затем унарный минус, затем <code>* / // %</code>, затем <code>+ -</code>.",
"code": "3 * 2 % 2",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"16.0",
"16",
"Ошибка",
"32.0"
],
"answer": 0,
"explain": "<code>+</code> складывает числа, но склеивает строки; строку можно умножить на целое число; <code>int()</code> отбрасывает дробную часть. Программа выводит: <code>16.0</code>.",
"code": "print(float('8') * 2)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0",
"24",
"6",
"6.0"
],
"answer": 2,
"explain": "<code>//</code> — целочисленное деление (округление вниз), <code>%</code> — остаток, <code>/</code> — всегда float, <code>**</code> — степень. Программа выводит: <code>6</code>.",
"code": "a = 12\nb = 2\nprint(a // b)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"18",
"11",
"9",
"Ошибка"
],
"answer": 2,
"explain": "<code>+</code> складывает числа, но склеивает строки; строку можно умножить на целое число; <code>int()</code> отбрасывает дробную часть. Программа выводит: <code>9</code>.",
"code": "print(int('1' + '8') // 2)",
"codeOptions": true
},
{
"type": "single",
"q": "Каковы значения переменных после выполнения программы?",
"options": [
"16 10",
"2 10",
"4 10",
"10 4"
],
"answer": 2,
"explain": "Выполняйте присваивания строго по порядку, каждый раз подставляя текущие значения. Программа выводит: <code>4 10</code>.",
"code": "a = 8\nb = 2\na, b = b, a + b\na = a * 2\nprint(a, b)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 5 — ровно целое число 5 (тип int)?",
"options": [
"int('5')",
"abs(-5)",
"10 // 2",
"50 % 10",
"6 // 1 - 1",
"5 * 1.0"
],
"answer": [
0,
1,
2,
4
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 5.0), а не int.",
"codeOptions": true
},
{
"type": "matching",
"q": "Установите соответствие между выражением и его значением.",
"pairs": [
{
"left": "2 ** 5",
"right": "32"
},
{
"left": "round(3.5)",
"right": "4"
},
{
"left": "5 ** 0",
"right": "1"
},
{
"left": "17 % 5",
"right": "2"
}
],
"explain": "Помните: <code>//</code> округляет вниз (−17 // 5 = −4), остаток всегда того же знака, что и делитель.",
"distractors": [
"3",
"-4"
]
},
{
"type": "single",
"q": "Какая функция считывает строку, введённую с клавиатуры?",
"options": [
"scan()",
"input()",
"int()",
"print()"
],
"answer": 1,
"explain": "<code>input()</code> всегда возвращает строку (str)."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"10",
"9",
"-8",
"8"
],
"answer": 3,
"explain": "<code>+</code> складывает числа, но склеивает строки; строку можно умножить на целое число; <code>int()</code> отбрасывает дробную часть. Программа выводит: <code>8</code>.",
"code": "print(int(8.9))",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"6",
"2",
"4",
"3"
],
"answer": 3,
"explain": "Приоритет: <code>**</code> (справа налево), затем унарный минус, затем <code>* / // %</code>, затем <code>+ -</code>.",
"code": "5 * 3 % 4",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"x, A, B!\n|",
"x A B\n|",
"x, A, B\n|",
"x, A, B!|"
],
"answer": 3,
"explain": "<code>sep</code> ставится между значениями, <code>end</code> — один раз в конце вместо перевода строки. Программа выводит: <code>x, A, B!|</code>.",
"code": "print('x', 'A', 'B', sep=', ', end='!')\nprint(\"|\")",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"62",
"98",
"8",
"986"
],
"answer": 1,
"explain": "Здесь вычисляется число без двух последних цифр: <code>// 10</code> отбрасывает последнюю цифру, <code>% 10</code> берёт последнюю. Программа выводит: <code>98</code>.",
"code": "n = 9862\nprint(n // 100)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и результат (модуль math импортирован).",
"pairs": [
{
"left": "math.sqrt(49)",
"right": "7.0"
},
{
"left": "math.gcd(12, 18)",
"right": "6"
},
{
"left": "math.trunc(-2.5)",
"right": "-2"
},
{
"left": "math.pi > 3.14",
"right": "True"
}
],
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code> — к нулю, <code>sqrt</code>/<code>pow</code>/<code>fabs</code> возвращают float.",
"distractors": [
"-3",
"3.0"
]
},
{
"type": "matching",
"q": "Установите соответствие между выражением и его значением.",
"pairs": [
{
"left": "5 ** 0",
"right": "1"
},
{
"left": "int(-3.7)",
"right": "-3"
},
{
"left": "round(3.5)",
"right": "4"
},
{
"left": "(10 - 3) * 2",
"right": "14"
}
],
"explain": "Помните: <code>//</code> округляет вниз (−17 // 5 = −4), остаток всегда того же знака, что и делитель.",
"distractors": [
"3",
"2"
]
},
{
"type": "matching",
"q": "Сопоставьте вызов и результат (модуль math импортирован).",
"pairs": [
{
"left": "math.ceil(7.01)",
"right": "8"
},
{
"left": "math.fabs(-3)",
"right": "3.0"
},
{
"left": "math.floor(-2.5)",
"right": "-3"
},
{
"left": "math.gcd(12, 18)",
"right": "6"
}
],
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code> — к нулю, <code>sqrt</code>/<code>pow</code>/<code>fabs</code> возвращают float.",
"distractors": [
"-2"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"14",
"14.0",
"56",
"0"
],
"answer": 1,
"explain": "<code>//</code> — целочисленное деление (округление вниз), <code>%</code> — остаток, <code>/</code> — всегда float, <code>**</code> — степень. Программа выводит: <code>14.0</code>.",
"code": "a = 28\nb = 2\nprint(a / b)",
"codeOptions": true
},
{
"type": "single",
"q": "Как правильно ввести два целых числа, записанных в одной строке через пробел?",
"options": [
"a, b = map(int, input().split())",
"a = b = int(input().split())",
"a, b = input().split(int)",
"a, b = int(input())"
],
"answer": 0,
"explain": "split() делит строку по пробелам, map(int, …) превращает части в числа."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-6",
"-10",
"-5",
"-3"
],
"answer": 2,
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code>/<code>int</code> — отбросить дробную часть, <code>round</code> — к ближайшему, а .5 — к чётному. Программа выводит: <code>-5</code>.",
"code": "import math\nprint(math.floor(-4.7))",
"codeOptions": true
},
{
"type": "single",
"q": "Какое значение вернёт input(), если пользователь ввёл 15?",
"options": [
"None",
"число 15",
"строку '15'",
"число 15.0"
],
"answer": 2,
"explain": "input() всегда возвращает строку; для числа нужно int(input())."
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 3 — ровно целое число 3 (тип int)?",
"options": [
"9 % 10 // 3",
"30 % 10",
"abs(-3)",
"4 - 1",
"int(3.9)",
"3 * 1.0"
],
"answer": [
0,
2,
3,
4
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 3.0), а не int.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Значения каких выражений имеют тип float?",
"options": [
"10 % 3",
"8 // 4",
"10 % 3.0",
"int(2.5)",
"len('ab')",
"8.0 // 4"
],
"answer": [
2,
5
],
"explain": "Результат — float, если есть деление <code>/</code>, отрицательная степень или хотя бы один операнд float.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"Ошибка",
"5",
"6"
],
"answer": 2,
"explain": "<code>+</code> складывает числа, но склеивает строки; строку можно умножить на целое число; <code>int()</code> отбрасывает дробную часть. Программа выводит: <code>5</code>.",
"code": "print(int(5.9))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и тип его значения.",
"pairs": [
{
"left": "5 > 5",
"right": "bool"
},
{
"left": "5 + 5",
"right": "int"
},
{
"left": "5 // 2.0",
"right": "float"
},
{
"left": "str(5)",
"right": "str"
}
],
"explain": "Тип определяется операцией и типами операндов.",
"distractors": [
"list",
"tuple"
]
},
{
"type": "matching",
"q": "Установите соответствие между выражением и его значением.",
"pairs": [
{
"left": "(10 - 3) * 2",
"right": "14"
},
{
"left": "int(-3.7)",
"right": "-3"
},
{
"left": "round(4.5)",
"right": "4"
},
{
"left": "abs(-12)",
"right": "12"
}
],
"explain": "Помните: <code>//</code> округляет вниз (−17 // 5 = −4), остаток всегда того же знака, что и делитель.",
"distractors": [
"3",
"2"
]
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 6 — ровно целое число 6 (тип int)?",
"options": [
"len('aaaaaa')",
"60 // 10",
"7 // 1 - 1",
"6 * 1.0",
"60 % 10",
"6 ** 1"
],
"answer": [
0,
1,
2,
5
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 6.0), а не int.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 3 — ровно целое число 3 (тип int)?",
"options": [
"9 % 10 // 3",
"30 % 10",
"int('3')",
"30 // 10",
"4 // 1 - 1",
"6 / 2"
],
"answer": [
0,
2,
3,
4
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 3.0), а не int.",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и тип его значения.",
"pairs": [
{
"left": "(5,)",
"right": "tuple"
},
{
"left": "[5] * 2",
"right": "list"
},
{
"left": "5 // 2.0",
"right": "float"
},
{
"left": "'5' + '5'",
"right": "str"
}
],
"explain": "Тип определяется операцией и типами операндов.",
"distractors": [
"int",
"bool"
]
},
{
"type": "matching",
"q": "Установите соответствие между выражением и его значением.",
"pairs": [
{
"left": "(10 - 3) * 2",
"right": "14"
},
{
"left": "-17 % 5",
"right": "3"
},
{
"left": "round(3.5)",
"right": "4"
},
{
"left": "abs(-12)",
"right": "12"
}
],
"explain": "Помните: <code>//</code> округляет вниз (−17 // 5 = −4), остаток всегда того же знака, что и делитель.",
"distractors": [
"2",
"-4"
]
},
{
"type": "multiple",
"q": "Значения каких выражений имеют тип float?",
"options": [
"8 // 4",
"3 * 1.0",
"8 / 4",
"2 ** 3",
"len('ab')",
"2 ** -1"
],
"answer": [
1,
2,
5
],
"explain": "Результат — float, если есть деление <code>/</code>, отрицательная степень или хотя бы один операнд float.",
"codeOptions": true
},
{
"type": "matching",
"q": "Установите соответствие между выражением и его значением.",
"pairs": [
{
"left": "abs(-12)",
"right": "12"
},
{
"left": "-17 // 5",
"right": "-4"
},
{
"left": "7 % 2 + 7 // 2",
"right": "4"
},
{
"left": "17 / 5",
"right": "3.4"
}
],
"explain": "Помните: <code>//</code> округляет вниз (−17 // 5 = −4), остаток всегда того же знака, что и делитель.",
"distractors": [
"3",
"2"
]
},
{
"type": "single",
"q": "Каковы значения переменных после выполнения программы?",
"options": [
"10 88",
"10 33",
"33 10",
"11 33"
],
"answer": 1,
"explain": "Выполняйте присваивания строго по порядку, каждый раз подставляя текущие значения. Программа выводит: <code>10 33</code>.",
"code": "a = 8\nb = 3\na += b\nb *= a\na -= 1\nprint(a, b)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие операции изменяют тип результата на float даже для целых операндов?",
"options": [
"целочисленное деление //",
"остаток %",
"возведение в отрицательную степень **",
"сложение +",
"деление /"
],
"answer": [
2,
4
],
"explain": "Только / и отрицательная степень дают float из int."
},
{
"type": "single",
"q": "Какой тип имеет значение выражения?",
"options": [
"int",
"str",
"float",
"bool"
],
"answer": 0,
"explain": "Деление <code>/</code> всегда даёт float; сравнение — bool; умножение строки — str; <code>round()</code> и <code>len()</code> возвращают int.",
"code": "int('7')",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 5 — ровно целое число 5 (тип int)?",
"options": [
"int('5')",
"5 * 1.0",
"15 % 16 // 3",
"50 % 10",
"round(5.4)",
"6 // 1 - 1"
],
"answer": [
0,
2,
4,
5
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 5.0), а не int.",
"codeOptions": true
},
{
"type": "single",
"q": "Какой тип имеет значение выражения?",
"options": [
"int",
"bool",
"float",
"str"
],
"answer": 2,
"explain": "Деление <code>/</code> всегда даёт float; сравнение — bool; умножение строки — str; <code>round()</code> и <code>len()</code> возвращают int.",
"code": "float(7)",
"codeOptions": true
},
{
"type": "matching",
"q": "Установите соответствие между выражением и его значением.",
"pairs": [
{
"left": "-17 % 5",
"right": "3"
},
{
"left": "round(3.5)",
"right": "4"
},
{
"left": "-17 // 5",
"right": "-4"
},
{
"left": "17 / 5",
"right": "3.4"
}
],
"explain": "Помните: <code>//</code> округляет вниз (−17 // 5 = −4), остаток всегда того же знака, что и делитель.",
"distractors": [
"2",
"32"
]
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 4 — ровно целое число 4 (тип int)?",
"options": [
"4 * 1.0",
"40 // 10",
"4 ** 1",
"abs(-4)",
"int(4.9)",
"8 / 2"
],
"answer": [
1,
2,
3,
4
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 4.0), а не int.",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"15",
"30",
"8",
"18"
],
"answer": 0,
"explain": "Приоритет: <code>**</code> (справа налево), затем унарный минус, затем <code>* / // %</code>, затем <code>+ -</code>.",
"code": "(3 + 2) * 3",
"codeOptions": true
},
{
"type": "single",
"q": "Что делает операция x %= 3?",
"options": [
"сравнивает x с 3",
"записывает в x остаток от деления x на 3",
"делит x на 3",
"умножает x на 3 %"
],
"answer": 1,
"explain": "x %= 3 — то же, что x = x % 3."
},
{
"type": "multiple",
"q": "Значения каких выражений имеют тип float?",
"options": [
"2 ** 3",
"len('ab')",
"8 / 4",
"10 % 3.0",
"2 ** -1",
"7 / 7"
],
"answer": [
2,
3,
4,
5
],
"explain": "Результат — float, если есть деление <code>/</code>, отрицательная степень или хотя бы один операнд float.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0",
"4",
"470",
"7"
],
"answer": 3,
"explain": "Здесь вычисляется цифра сотен: <code>// 10</code> отбрасывает последнюю цифру, <code>% 10</code> берёт последнюю. Программа выводит: <code>7</code>.",
"code": "n = 4704\nprint(n // 100 % 10)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Значения каких выражений имеют тип float?",
"options": [
"8.0 // 4",
"2 ** -1",
"3 * 1.0",
"2 ** 3",
"10 % 3",
"len('ab')"
],
"answer": [
0,
1,
2
],
"explain": "Результат — float, если есть деление <code>/</code>, отрицательная степень или хотя бы один операнд float.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Значения каких выражений имеют тип float?",
"options": [
"8 / 4",
"2 ** -1",
"3 * 1.0",
"2 ** 3",
"float(3)",
"int(2.5)"
],
"answer": [
0,
1,
2,
4
],
"explain": "Результат — float, если есть деление <code>/</code>, отрицательная степень или хотя бы один операнд float.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1",
"0",
"256",
"16"
],
"answer": 2,
"explain": "<code>//</code> — целочисленное деление (округление вниз), <code>%</code> — остаток, <code>/</code> — всегда float, <code>**</code> — степень. Программа выводит: <code>256</code>.",
"code": "a = 4\nb = 4\nprint(a ** b)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"16",
"9",
"8",
"7"
],
"answer": 2,
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code>/<code>int</code> — отбросить дробную часть, <code>round</code> — к ближайшему, а .5 — к чётному. Программа выводит: <code>8</code>.",
"code": "import math\nprint(math.ceil(7.2))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-16",
"17",
"16",
"15"
],
"answer": 2,
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code>/<code>int</code> — отбросить дробную часть, <code>round</code> — к ближайшему, а .5 — к чётному. Программа выводит: <code>16</code>.",
"code": "import math\nprint(math.ceil(16))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и результат (модуль math импортирован).",
"pairs": [
{
"left": "math.ceil(7.01)",
"right": "8"
},
{
"left": "math.ceil(-2.5)",
"right": "-2"
},
{
"left": "math.pi > 3.14",
"right": "True"
},
{
"left": "math.fabs(-3)",
"right": "3.0"
}
],
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code> — к нулю, <code>sqrt</code>/<code>pow</code>/<code>fabs</code> возвращают float.",
"distractors": [
"-3",
"7.0"
]
},
{
"type": "single",
"q": "Какой символ начинает однострочный комментарий в Python?",
"options": [
"--",
"/*",
"#",
"//"
],
"answer": 2,
"explain": "Всё после # до конца строки интерпретатор игнорирует."
},
{
"type": "matching",
"q": "Установите соответствие между выражением и его значением.",
"pairs": [
{
"left": "7 % 2 + 7 // 2",
"right": "4"
},
{
"left": "2 ** 5",
"right": "32"
},
{
"left": "-17 // 5",
"right": "-4"
},
{
"left": "-17 % 5",
"right": "3"
}
],
"explain": "Помните: <code>//</code> округляет вниз (−17 // 5 = −4), остаток всегда того же знака, что и делитель.",
"distractors": [
"2",
"3.4"
]
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"3",
"5",
"1",
"-1"
],
"answer": 2,
"explain": "Приоритет: <code>**</code> (справа налево), затем унарный минус, затем <code>* / // %</code>, затем <code>+ -</code>.",
"code": "5 * 5 % 4",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и тип его значения.",
"pairs": [
{
"left": "'5' + '5'",
"right": "str"
},
{
"left": "5 + 5",
"right": "int"
},
{
"left": "(5,)",
"right": "tuple"
},
{
"left": "5 // 2.0",
"right": "float"
}
],
"explain": "Тип определяется операцией и типами операндов.",
"distractors": [
"bool",
"list"
]
},
{
"type": "multiple",
"q": "Какие функции возвращают число с плавающей точкой (float)?",
"options": [
"float('3')",
"math.sqrt(16)",
"math.floor(2.5)",
"round(2.5)",
"math.pow(2, 2)",
"int('3')"
],
"answer": [
0,
1,
4
],
"explain": "floor, round (с одним аргументом) и int возвращают int."
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"0",
"1",
"3",
"6"
],
"answer": 0,
"explain": "Приоритет: <code>**</code> (справа налево), затем унарный минус, затем <code>* / // %</code>, затем <code>+ -</code>.",
"code": "6 * 3 % 3",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 3 — ровно целое число 3 (тип int)?",
"options": [
"6 // 2",
"4 - 1",
"3 * 1.0",
"3 ** 1",
"6 / 2",
"round(3.4)"
],
"answer": [
0,
1,
3,
5
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 3.0), а не int.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2 A 3\n|",
"2.A.3|",
"2A3.|",
"2A3\n|"
],
"answer": 2,
"explain": "<code>sep</code> ставится между значениями, <code>end</code> — один раз в конце вместо перевода строки. Программа выводит: <code>2A3.|</code>.",
"code": "print('2', 'A', '3', sep='', end='.')\nprint(\"|\")",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и тип его значения.",
"pairs": [
{
"left": "5 > 5",
"right": "bool"
},
{
"left": "5 / 5",
"right": "float"
},
{
"left": "[5] * 2",
"right": "list"
},
{
"left": "'5' + '5'",
"right": "str"
}
],
"explain": "Тип определяется операцией и типами операндов.",
"distractors": [
"int",
"tuple"
]
},
{
"type": "single",
"q": "Какой тип имеет значение выражения?",
"options": [
"str",
"float",
"int",
"bool"
],
"answer": 2,
"explain": "Деление <code>/</code> всегда даёт float; сравнение — bool; умножение строки — str; <code>round()</code> и <code>len()</code> возвращают int.",
"code": "int('7')",
"codeOptions": true
},
{
"type": "single",
"q": "Какой тип имеет значение выражения?",
"options": [
"int",
"float",
"bool",
"str"
],
"answer": 0,
"explain": "Деление <code>/</code> всегда даёт float; сравнение — bool; умножение строки — str; <code>round()</code> и <code>len()</code> возвращают int.",
"code": "7 ** 0",
"codeOptions": true
},
{
"type": "single",
"q": "Каковы значения переменных после выполнения программы?",
"options": [
"2",
"5",
"5 2",
"5 2 -1"
],
"answer": 2,
"explain": "Выполняйте присваивания строго по порядку, каждый раз подставляя текущие значения. Программа выводит: <code>5 2</code>.",
"code": "a = 2\nb = 5\na = a + b\nb = a - b\na = a - b\nprint(a, b)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Значения каких выражений имеют тип float?",
"options": [
"7 / 7",
"8 / 4",
"10 % 3.0",
"2 ** 3",
"len('ab')",
"10 % 3"
],
"answer": [
0,
1,
2
],
"explain": "Результат — float, если есть деление <code>/</code>, отрицательная степень или хотя бы один операнд float.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-10",
"9",
"20",
"10"
],
"answer": 3,
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code>/<code>int</code> — отбросить дробную часть, <code>round</code> — к ближайшему, а .5 — к чётному. Программа выводит: <code>10</code>.",
"code": "import math\nprint(math.ceil(9.99))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Значения каких выражений имеют тип float?",
"options": [
"8 / 4",
"3 * 1.0",
"len('ab')",
"10 % 3",
"2 ** 3",
"round(2.6)"
],
"answer": [
0,
1
],
"explain": "Результат — float, если есть деление <code>/</code>, отрицательная степень или хотя бы один операнд float.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"54",
"55",
"57",
"56"
],
"answer": 1,
"explain": "<code>+</code> складывает числа, но склеивает строки; строку можно умножить на целое число; <code>int()</code> отбрасывает дробную часть. Программа выводит: <code>55</code>.",
"code": "print('5' * 2)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и результат (модуль math импортирован).",
"pairs": [
{
"left": "math.ceil(-2.5)",
"right": "-2"
},
{
"left": "math.sqrt(49)",
"right": "7.0"
},
{
"left": "math.floor(7.99)",
"right": "7"
},
{
"left": "math.pi > 3.14",
"right": "True"
}
],
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code> — к нулю, <code>sqrt</code>/<code>pow</code>/<code>fabs</code> возвращают float.",
"distractors": [
"-3",
"3.0"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1B2, |",
"1, B, 2|",
"1, B, 2\n|",
"1 B 2\n|"
],
"answer": 1,
"explain": "<code>sep</code> ставится между значениями, <code>end</code> — один раз в конце вместо перевода строки. Программа выводит: <code>1, B, 2|</code>.",
"code": "print('1', 'B', '2', sep=', ', end='')\nprint(\"|\")",
"codeOptions": true
},
{
"type": "single",
"q": "Какой тип имеет значение выражения?",
"options": [
"int",
"str",
"float",
"bool"
],
"answer": 0,
"explain": "Деление <code>/</code> всегда даёт float; сравнение — bool; умножение строки — str; <code>round()</code> и <code>len()</code> возвращают int.",
"code": "7 ** 0",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2",
"1.6666666666666667",
"125",
"1"
],
"answer": 2,
"explain": "<code>//</code> — целочисленное деление (округление вниз), <code>%</code> — остаток, <code>/</code> — всегда float, <code>**</code> — степень. Программа выводит: <code>125</code>.",
"code": "a = 5\nb = 3\nprint(a ** b)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и результат (модуль math импортирован).",
"pairs": [
{
"left": "math.fabs(-3)",
"right": "3.0"
},
{
"left": "math.floor(7.99)",
"right": "7"
},
{
"left": "math.ceil(-2.5)",
"right": "-2"
},
{
"left": "math.factorial(4)",
"right": "24"
}
],
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code> — к нулю, <code>sqrt</code>/<code>pow</code>/<code>fabs</code> возвращают float.",
"distractors": [
"-3",
"7.0"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"9",
"3",
"97",
"739"
],
"answer": 1,
"explain": "Здесь вычисляется цифра сотен: <code>// 10</code> отбрасывает последнюю цифру, <code>% 10</code> берёт последнюю. Программа выводит: <code>3</code>.",
"code": "n = 7397\nprint(n // 100 % 10)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и результат (модуль math импортирован).",
"pairs": [
{
"left": "math.floor(-2.5)",
"right": "-3"
},
{
"left": "math.floor(7.99)",
"right": "7"
},
{
"left": "math.trunc(-2.5)",
"right": "-2"
},
{
"left": "math.gcd(12, 18)",
"right": "6"
}
],
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code> — к нулю, <code>sqrt</code>/<code>pow</code>/<code>fabs</code> возвращают float.",
"distractors": [
"7.0",
"True"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"Ошибка",
"8",
"14"
],
"answer": 0,
"explain": "<code>+</code> складывает числа, но склеивает строки; строку можно умножить на целое число; <code>int()</code> отбрасывает дробную часть. Программа выводит: <code>7</code>.",
"code": "print(int('1' + '5') // 2)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и тип его значения.",
"pairs": [
{
"left": "5 + 5",
"right": "int"
},
{
"left": "str(5)",
"right": "str"
},
{
"left": "5 / 5",
"right": "float"
},
{
"left": "[5] * 2",
"right": "list"
}
],
"explain": "Тип определяется операцией и типами операндов.",
"distractors": [
"bool",
"tuple"
]
},
{
"type": "matching",
"q": "Сопоставьте выражение и тип его значения.",
"pairs": [
{
"left": "5 // 2.0",
"right": "float"
},
{
"left": "'5' * 2",
"right": "str"
},
{
"left": "(5,)",
"right": "tuple"
},
{
"left": "[5] * 2",
"right": "list"
}
],
"explain": "Тип определяется операцией и типами операндов.",
"distractors": [
"int",
"bool"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"64",
"846",
"8",
"4"
],
"answer": 2,
"explain": "Здесь вычисляется первая цифра: <code>// 10</code> отбрасывает последнюю цифру, <code>% 10</code> берёт последнюю. Программа выводит: <code>8</code>.",
"code": "n = 8464\nprint(n // 1000)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 5 — ровно целое число 5 (тип int)?",
"options": [
"50 // 10",
"15 % 16 // 3",
"5 * 1.0",
"int('5')",
"50 % 10",
"int(5.9)"
],
"answer": [
0,
1,
3,
5
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 5.0), а не int.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"A x 3\n|",
"A, x, 3\n|",
"Ax3, |",
"A, x, 3|"
],
"answer": 3,
"explain": "<code>sep</code> ставится между значениями, <code>end</code> — один раз в конце вместо перевода строки. Программа выводит: <code>A, x, 3|</code>.",
"code": "print('A', 'x', '3', sep=', ', end='')\nprint(\"|\")",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"32",
"16",
"Ошибка",
"17"
],
"answer": 1,
"explain": "Приоритет: <code>**</code> (справа налево), затем унарный минус, затем <code>* / // %</code>, затем <code>+ -</code>.",
"code": "2 ** 2 ** 2",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"x*1*B\n|",
"x*1*B|",
"x1B*|",
"x 1 B\n|"
],
"answer": 1,
"explain": "<code>sep</code> ставится между значениями, <code>end</code> — один раз в конце вместо перевода строки. Программа выводит: <code>x*1*B|</code>.",
"code": "print('x', '1', 'B', sep='*', end='')\nprint(\"|\")",
"codeOptions": true
},
{
"type": "single",
"q": "Каковы значения переменных после выполнения программы?",
"options": [
"3 1 1",
"3 1",
"3",
"1 3"
],
"answer": 1,
"explain": "Выполняйте присваивания строго по порядку, каждый раз подставляя текущие значения. Программа выводит: <code>3 1</code>.",
"code": "a = 1\nb = 3\na = a + b\nb = a - b\na = a - b\nprint(a, b)",
"codeOptions": true
}
],
"m2": [
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"True",
"Ошибка",
"False"
],
"answer": 3,
"explain": "<code>and</code> — истинно, только если оба истинны; <code>or</code> — если хотя бы одно; <code>not</code> меняет значение; цепочка <code>a &lt; x &lt;= b</code> проверяет оба сравнения.",
"code": "x = 1\ny = -5\nprint(not x > y)",
"codeOptions": true
},
{
"type": "single",
"q": "Какое условие верно описывает «год високосный»?",
"options": [
"y % 4 == 0 or y % 100 == 0",
"y % 4 == 0",
"y % 400 == 0 and y % 4 != 0",
"y % 4 == 0 and y % 100 != 0 or y % 400 == 0"
],
"answer": 3,
"explain": "Кратен 4, но не кратен 100; либо кратен 400."
},
{
"type": "multiple",
"q": "Значения каких выражений истинны (bool даёт True)?",
"options": [
"bool([])",
"'' or 'x'",
"'a' < 'B'",
"10 % 4 == 2",
"5 > 3 and 2 > 7",
"5 > 3 and 2 > 1"
],
"answer": [
1,
3,
5
],
"explain": "Ложны: 0, 0.0, '', [], None, False. Пробел ' ' — непустая строка, значит истина.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"10",
"111",
"0",
"101"
],
"answer": 2,
"explain": "Отдельные if проверяются независимо друг от друга; else относится только к ближайшему if. Программа выводит: <code>0</code>.",
"code": "x = 5\ns = 0\nif x > 0:\n    s += 1\nif x % 2 == 0:\n    s += 10\nif x > 5:\n    s += 100\nelse:\n    s -= 1\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Программа находит, за сколько ходов слон дойдёт с (x1, y1) до (x2, y2). Что она выведет?",
"options": [
"-1",
"2",
"0",
"1"
],
"answer": 0,
"explain": "Слон не меняет цвет клетки: одна диагональ — 1 ход, другие клетки того же цвета — 2 хода, клетки другого цвета недостижимы (−1).",
"code": "x1, y1, x2, y2 = 7, 3, 1, 6\nif x1 == x2 and y1 == y2:\n    print(0)\nelif abs(x1 - x2) == abs(y1 - y2):\n    print(1)\nelif (x1 + y1) % 2 == (x2 + y2) % 2:\n    print(2)\nelse:\n    print(-1)",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Программа выводит буквы фигур, которые могут перейти с клетки (x1, y1) на (x2, y2): Л — ладья, К — король, С — слон, Н — конь. Что выведет программа?",
"options": [
"КС",
"С",
"-",
"К"
],
"answer": 2,
"explain": "dx, dy — модули разностей. Ладья: dx = 0 или dy = 0; король: dx ≤ 1 и dy ≤ 1; слон: dx = dy; конь: пара 1 и 2. Отдельные if — потому что подходить могут сразу несколько фигур. Программа выводит: <code>-</code>.",
"code": "x1, y1 = 4, 4\nx2, y2 = 1, 6\ndx, dy = abs(x1 - x2), abs(y1 - y2)\nres = ''\nif dx == 0 or dy == 0:\n    res += 'Л'\nif dx <= 1 and dy <= 1:\n    res += 'К'\nif dx == dy:\n    res += 'С'\nif dx == 1 and dy == 2 or dx == 2 and dy == 1:\n    res += 'Н'\nprint(res if res else '-')",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения? (как его покажет repr)",
"options": [
"'None'",
"None",
"5",
"True"
],
"answer": 2,
"explain": "<code>or</code> возвращает первый истинный операнд (или последний), <code>and</code> — первый ложный (или последний). Ложны: 0, '', None, [], {}.",
"code": "None or 5",
"codeOptions": true
},
{
"type": "multiple",
"q": "Значения каких выражений истинны (bool даёт True)?",
"options": [
"10 % 4 == 2",
"bool([])",
"0 or 0",
"not (1 and 0)",
"5 > 3 and 2 > 7",
"1 < 2 < 3"
],
"answer": [
0,
3,
5
],
"explain": "Ложны: 0, 0.0, '', [], None, False. Пробел ' ' — непустая строка, значит истина.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1",
"111",
"0",
"-1"
],
"answer": 2,
"explain": "Отдельные if проверяются независимо друг от друга; else относится только к ближайшему if. Программа выводит: <code>0</code>.",
"code": "x = 1\ns = 0\nif x > 0:\n    s += 1\nif x % 2 == 0:\n    s += 10\nif x > 5:\n    s += 100\nelse:\n    s -= 1\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"чётное",
"16",
"-16",
"нечётное"
],
"answer": 0,
"explain": "<code>A if условие else B</code> даёт A, когда условие истинно, иначе B. Программа выводит: <code>чётное</code>.",
"code": "x = 16\nprint('чётное' if x % 2 == 0 else 'нечётное')",
"codeOptions": true
},
{
"type": "matching",
"q": "Шахматы. Сопоставьте клетку, на которой стоит конь, и число его возможных ходов.",
"pairs": [
{
"left": "(8, 8)",
"right": "2"
},
{
"left": "(1, 4)",
"right": "4"
},
{
"left": "(3, 3)",
"right": "8"
},
{
"left": "(1, 2)",
"right": "3"
}
],
"explain": "В углу — 2 хода, рядом с углом — 3, у края — 4, ближе к центру — 6 или 8.",
"distractors": [
"5",
"7"
]
},
{
"type": "matching",
"q": "Дан фрагмент программы. Сопоставьте значение x и значение r после его выполнения.<pre>if x &lt; 0:\n    r = 'A'\nelif x &lt; 7:\n    r = 'B'\nelif x == 7:\n    r = 'C'\nelse:\n    r = 'D'</pre>",
"pairs": [
{
"left": "x = -4",
"right": "A"
},
{
"left": "x = 2",
"right": "B"
},
{
"left": "x = 7",
"right": "C"
},
{
"left": "x = 10",
"right": "D"
}
],
"explain": "Проверяйте условия сверху вниз: срабатывает первое истинное."
},
{
"type": "multiple",
"q": "Шахматы. На какие клетки может пойти ладья с клетки (3, 3) за один ход? Других фигур на доске нет.",
"options": [
"(8, 3)",
"(1, 3)",
"(6, 1)",
"(4, 7)",
"(2, 2)",
"(2, 7)"
],
"answer": [
0,
1
],
"explain": "Условие хода: <code>x1 == x2 or y1 == y2</code>."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"False",
"True",
"Ошибка"
],
"answer": 1,
"explain": "<code>and</code> — истинно, только если оба истинны; <code>or</code> — если хотя бы одно; <code>not</code> меняет значение; цепочка <code>a &lt; x &lt;= b</code> проверяет оба сравнения.",
"code": "x = 5\ny = 8\nprint(x != y and not y)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"A",
"A\nB",
"B",
"C"
],
"answer": 2,
"explain": "В цепочке if–elif–else выполняется только первая ветка с истинным условием; граничные значения проверяйте по знаку (&gt; или &gt;=). Программа выводит: <code>B</code>.",
"code": "x = -4\nif x > 15:\n    print('A')\nelif x >= -4:\n    print('B')\nelse:\n    print('C')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"I",
"0",
"II",
"IV"
],
"answer": 0,
"explain": "Сначала проверяется внешнее условие, затем — вложенное внутри выбранной ветки. Программа выводит: <code>I</code>.",
"code": "a = 5\nb = 2\nif a > 0:\n    if b > 0:\n        print('I')\n    else:\n        print('IV')\nelse:\n    if b > 0:\n        print('II')\n    else:\n        print('III')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"B",
"A",
"A\nB",
"C"
],
"answer": 3,
"explain": "В цепочке if–elif–else выполняется только первая ветка с истинным условием; граничные значения проверяйте по знаку (&gt; или &gt;=). Программа выводит: <code>C</code>.",
"code": "x = -6\nif x > -3:\n    print('A')\nelif x >= -5:\n    print('B')\nelse:\n    print('C')",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Какое условие истинно ровно тогда, когда ладья может пойти с клетки (x1, y1) на другую клетку (x2, y2)?",
"options": [
"abs(x1 - x2) == abs(y1 - y2)",
"x1 == x2 or y1 == y2",
"x1 == y1 or x2 == y2",
"x1 == x2 and y1 == y2"
],
"answer": 1,
"explain": "Проверьте условие на нескольких клетках: оно должно подходить ко всем ходам фигуры и не подходить к остальным.",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Программа выводит буквы фигур, которые могут перейти с клетки (x1, y1) на (x2, y2): Л — ладья, К — король, С — слон, Н — конь. Что выведет программа?",
"options": [
"-",
"Н",
"ЛК",
"С"
],
"answer": 0,
"explain": "dx, dy — модули разностей. Ладья: dx = 0 или dy = 0; король: dx ≤ 1 и dy ≤ 1; слон: dx = dy; конь: пара 1 и 2. Отдельные if — потому что подходить могут сразу несколько фигур. Программа выводит: <code>-</code>.",
"code": "x1, y1 = 4, 5\nx2, y2 = 2, 8\ndx, dy = abs(x1 - x2), abs(y1 - y2)\nres = ''\nif dx == 0 or dy == 0:\n    res += 'Л'\nif dx <= 1 and dy <= 1:\n    res += 'К'\nif dx == dy:\n    res += 'С'\nif dx == 1 and dy == 2 or dx == 2 and dy == 1:\n    res += 'Н'\nprint(res if res else '-')",
"codeOptions": true
},
{
"type": "multiple",
"q": "Значения каких выражений истинны (bool даёт True)?",
"options": [
"5 > 3 and 2 > 1",
"5 > 3 and 2 > 7",
"not 0",
"1 < 2 < 3",
"3 == 3.0",
"'a' < 'B'"
],
"answer": [
0,
2,
3,
4
],
"explain": "Ложны: 0, 0.0, '', [], None, False. Пробел ' ' — непустая строка, значит истина.",
"codeOptions": true
},
{
"type": "matching",
"q": "Шахматы. Сопоставьте клетку, на которой стоит конь, и число его возможных ходов.",
"pairs": [
{
"left": "(2, 1)",
"right": "3"
},
{
"left": "(2, 2)",
"right": "4"
},
{
"left": "(3, 3)",
"right": "8"
},
{
"left": "(1, 1)",
"right": "2"
}
],
"explain": "В углу — 2 хода, рядом с углом — 3, у края — 4, ближе к центру — 6 или 8.",
"distractors": [
"5",
"7"
]
},
{
"type": "single",
"q": "Чему равно значение выражения? (как его покажет repr)",
"options": [
"True",
"\"''\"",
"None",
"''"
],
"answer": 2,
"explain": "<code>or</code> возвращает первый истинный операнд (или последний), <code>and</code> — первый ложный (или последний). Ложны: 0, '', None, [], {}.",
"code": "None and ''",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"False",
"None",
"Ошибка",
"True"
],
"answer": 3,
"explain": "Строки сравниваются посимвольно по кодам символов (заглавные латинские меньше строчных; '10' &lt; '9', потому что '1' &lt; '9').",
"code": "[1, 2] < [1, 3]",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-1",
"111",
"11",
"1"
],
"answer": 1,
"explain": "Отдельные if проверяются независимо друг от друга; else относится только к ближайшему if. Программа выводит: <code>111</code>.",
"code": "x = 8\ns = 0\nif x > 0:\n    s += 1\nif x % 2 == 0:\n    s += 10\nif x > 5:\n    s += 100\nelse:\n    s -= 1\nprint(s)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и его значение.",
"pairs": [
{
"left": "not ''",
"right": "True"
},
{
"left": "[] and 5",
"right": "[]"
},
{
"left": "'' or 'py'",
"right": "'py'"
},
{
"left": "None or 0",
"right": "0"
}
],
"explain": "<code>or</code> — первый истинный или последний; <code>and</code> — первый ложный или последний; <code>not</code> всегда даёт bool.",
"distractors": [
"7"
]
},
{
"type": "single",
"q": "Шахматы. Программа выводит буквы фигур, которые могут перейти с клетки (x1, y1) на (x2, y2): Л — ладья, К — король, С — слон, Н — конь. Что выведет программа?",
"options": [
"ЛК",
"С",
"КС",
"-"
],
"answer": 3,
"explain": "dx, dy — модули разностей. Ладья: dx = 0 или dy = 0; король: dx ≤ 1 и dy ≤ 1; слон: dx = dy; конь: пара 1 и 2. Отдельные if — потому что подходить могут сразу несколько фигур. Программа выводит: <code>-</code>.",
"code": "x1, y1 = 3, 5\nx2, y2 = 7, 6\ndx, dy = abs(x1 - x2), abs(y1 - y2)\nres = ''\nif dx == 0 or dy == 0:\n    res += 'Л'\nif dx <= 1 and dy <= 1:\n    res += 'К'\nif dx == dy:\n    res += 'С'\nif dx == 1 and dy == 2 or dx == 2 and dy == 1:\n    res += 'Н'\nprint(res if res else '-')",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"None",
"True",
"False",
"Ошибка"
],
"answer": 1,
"explain": "Строки сравниваются посимвольно по кодам символов (заглавные латинские меньше строчных; '10' &lt; '9', потому что '1' &lt; '9').",
"code": "'Z' < 'a'",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"C",
"A",
"B",
"A\nB"
],
"answer": 0,
"explain": "В цепочке if–elif–else выполняется только первая ветка с истинным условием; граничные значения проверяйте по знаку (&gt; или &gt;=). Программа выводит: <code>C</code>.",
"code": "x = 20\nif x < 19:\n    print('A')\nelif x <= -5:\n    print('B')\nelse:\n    print('C')",
"codeOptions": true
},
{
"type": "multiple",
"q": "Значения каких выражений истинны (bool даёт True)?",
"options": [
"None is None",
"'' or 'x'",
"3 > 2 > 1 > 0 > -1 > 0",
"0 or 0",
"5 > 3 and 2 > 7",
"not 0"
],
"answer": [
0,
1,
5
],
"explain": "Ложны: 0, 0.0, '', [], None, False. Пробел ' ' — непустая строка, значит истина.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Значения каких выражений истинны (bool даёт True)?",
"options": [
"10 % 4 == 2",
"bool([])",
"5 > 3 and 2 > 7",
"'a' < 'B'",
"3 > 2 > 1 > 0 > -1 > 0",
"None is None"
],
"answer": [
0,
5
],
"explain": "Ложны: 0, 0.0, '', [], None, False. Пробел ' ' — непустая строка, значит истина.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"A",
"A\nB",
"C",
"B"
],
"answer": 2,
"explain": "В цепочке if–elif–else выполняется только первая ветка с истинным условием; граничные значения проверяйте по знаку (&gt; или &gt;=). Программа выводит: <code>C</code>.",
"code": "x = 5\nif x > 14:\n    print('A')\nelif x >= 6:\n    print('B')\nelse:\n    print('C')",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Какое условие истинно ровно тогда, когда слон может пойти с клетки (x1, y1) на другую клетку (x2, y2)?",
"options": [
"x1 - x2 == y1 - y2",
"abs(x1 - x2) == abs(y1 - y2)",
"(x1 + y1) % 2 == (x2 + y2) % 2",
"x1 == x2 or y1 == y2"
],
"answer": 1,
"explain": "Проверьте условие на нескольких клетках: оно должно подходить ко всем ходам фигуры и не подходить к остальным.",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Сколько ходов есть у коня на клетке (x, y)? Что выведет программа?",
"options": [
"8",
"2",
"6",
"3"
],
"answer": 2,
"explain": "У коня до 8 ходов; у края и в углу часть ходов выводит за доску (в углу их всего 2). Программа выводит: <code>6</code>.",
"code": "x, y = 7, 4\nk = 0\nfor dx, dy in [(1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1), (-2, 1), (-1, 2)]:\n    if 1 <= x + dx <= 8 and 1 <= y + dy <= 8:\n        k += 1\nprint(k)",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Сколько ходов есть у коня на клетке (x, y)? Что выведет программа?",
"options": [
"8",
"4",
"6",
"2"
],
"answer": 1,
"explain": "У коня до 8 ходов; у края и в углу часть ходов выводит за доску (в углу их всего 2). Программа выводит: <code>4</code>.",
"code": "x, y = 7, 2\nk = 0\nfor dx, dy in [(1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1), (-2, 1), (-1, 2)]:\n    if 1 <= x + dx <= 8 and 1 <= y + dy <= 8:\n        k += 1\nprint(k)",
"codeOptions": true
},
{
"type": "multiple",
"q": "При каких введённых значениях x программа выведет YES?",
"options": [
"-1",
"14",
"2",
"15",
"-2",
"9"
],
"answer": [
3,
5
],
"explain": "Подставьте каждое значение в условие и проверьте обе части (and — обе истинны, or — хотя бы одна).",
"code": "x = int(input())\nif x % 3 == 0 or x > 14:\n    print('YES')\nelse:\n    print('NO')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"III",
"IV",
"I",
"II"
],
"answer": 3,
"explain": "Сначала проверяется внешнее условие, затем — вложенное внутри выбранной ветки. Программа выводит: <code>II</code>.",
"code": "a = 0\nb = 7\nif a > 0:\n    if b > 0:\n        print('I')\n    else:\n        print('IV')\nelse:\n    if b > 0:\n        print('II')\n    else:\n        print('III')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1",
"10",
"111",
"-1"
],
"answer": 1,
"explain": "Отдельные if проверяются независимо друг от друга; else относится только к ближайшему if. Программа выводит: <code>10</code>.",
"code": "x = 2\ns = 0\nif x > 0:\n    s += 1\nif x % 2 == 0:\n    s += 10\nif x > 5:\n    s += 100\nelse:\n    s -= 1\nprint(s)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и его значение.",
"pairs": [
{
"left": "not ''",
"right": "True"
},
{
"left": "3 or 5",
"right": "3"
},
{
"left": "None or 0",
"right": "0"
},
{
"left": "5 and 7",
"right": "7"
}
],
"explain": "<code>or</code> — первый истинный или последний; <code>and</code> — первый ложный или последний; <code>not</code> всегда даёт bool.",
"distractors": [
"'py'",
"False"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"IV",
"II",
"I",
"0"
],
"answer": 2,
"explain": "Сначала проверяется внешнее условие, затем — вложенное внутри выбранной ветки. Программа выводит: <code>I</code>.",
"code": "a = 7\nb = 8\nif a > 0:\n    if b > 0:\n        print('I')\n    else:\n        print('IV')\nelse:\n    if b > 0:\n        print('II')\n    else:\n        print('III')",
"codeOptions": true
},
{
"type": "matching",
"q": "Шахматы. Сопоставьте клетку, на которой стоит конь, и число его возможных ходов.",
"pairs": [
{
"left": "(2, 2)",
"right": "4"
},
{
"left": "(2, 1)",
"right": "3"
},
{
"left": "(4, 5)",
"right": "8"
},
{
"left": "(1, 1)",
"right": "2"
}
],
"explain": "В углу — 2 хода, рядом с углом — 3, у края — 4, ближе к центру — 6 или 8.",
"distractors": [
"5",
"7"
]
},
{
"type": "multiple",
"q": "Шахматы. На какие клетки может пойти ферзь с клетки (7, 5) за один ход? Других фигур на доске нет.",
"options": [
"(6, 6)",
"(6, 8)",
"(1, 4)",
"(5, 2)",
"(1, 7)",
"(7, 8)"
],
"answer": [
0,
5
],
"explain": "Условие хода: <code>x1 == x2 or y1 == y2 or abs(x1 - x2) == abs(y1 - y2)</code>."
},
{
"type": "matching",
"q": "Сопоставьте выражение и его значение.",
"pairs": [
{
"left": "5 and 7",
"right": "7"
},
{
"left": "[] and 5",
"right": "[]"
},
{
"left": "'' or 'py'",
"right": "'py'"
},
{
"left": "not ''",
"right": "True"
}
],
"explain": "<code>or</code> — первый истинный или последний; <code>and</code> — первый ложный или последний; <code>not</code> всегда даёт bool.",
"distractors": [
"0"
]
},
{
"type": "single",
"q": "Сколько веток выполнится в конструкции if – elif – elif – else?",
"options": [
"ни одной, если есть else",
"все с истинными условиями",
"ровно одна",
"не больше двух"
],
"answer": 2,
"explain": "Выполняется первая ветка с истинным условием, а если таких нет — else."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"чётное",
"нечётное",
"3",
"да"
],
"answer": 2,
"explain": "<code>A if условие else B</code> даёт A, когда условие истинно, иначе B. Программа выводит: <code>3</code>.",
"code": "x = 6\nprint(x // 2 if x > 5 else x * 2)",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Сколько ходов есть у коня на клетке (x, y)? Что выведет программа?",
"options": [
"6",
"8",
"2",
"4"
],
"answer": 1,
"explain": "У коня до 8 ходов; у края и в углу часть ходов выводит за доску (в углу их всего 2). Программа выводит: <code>8</code>.",
"code": "x, y = 3, 3\nk = 0\nfor dx, dy in [(1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1), (-2, 1), (-1, 2)]:\n    if 1 <= x + dx <= 8 and 1 <= y + dy <= 8:\n        k += 1\nprint(k)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан фрагмент программы. Сопоставьте значение x и значение r после его выполнения.<pre>if x &lt; 0:\n    r = 'A'\nelif x &lt; 8:\n    r = 'B'\nelif x == 8:\n    r = 'C'\nelse:\n    r = 'D'</pre>",
"pairs": [
{
"left": "x = -1",
"right": "A"
},
{
"left": "x = 2",
"right": "B"
},
{
"left": "x = 8",
"right": "C"
},
{
"left": "x = 13",
"right": "D"
}
],
"explain": "Проверяйте условия сверху вниз: срабатывает первое истинное."
},
{
"type": "single",
"q": "Чему равно значение выражения? (как его покажет repr)",
"options": [
"5",
"3",
"True",
"False"
],
"answer": 1,
"explain": "<code>or</code> возвращает первый истинный операнд (или последний), <code>and</code> — первый ложный (или последний). Ложны: 0, '', None, [], {}.",
"code": "3 or 5",
"codeOptions": true
},
{
"type": "multiple",
"q": "Значения каких выражений истинны (bool даёт True)?",
"options": [
"'' or 'x'",
"0 or 0",
"10 % 4 == 2",
"3 > 2 > 1 > 0 > -1 > 0",
"bool(' ')",
"5 > 3 and 2 > 7"
],
"answer": [
0,
2,
4
],
"explain": "Ложны: 0, 0.0, '', [], None, False. Пробел ' ' — непустая строка, значит истина.",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Какое условие истинно ровно тогда, когда ферзь может пойти с клетки (x1, y1) на другую клетку (x2, y2)?",
"options": [
"x1 == x2 or y1 == y2 or abs(x1 - x2) == abs(y1 - y2)",
"x1 == x2 or y1 == y2",
"abs(x1 - x2) == abs(y1 - y2)",
"abs(x1 - x2) <= 1 and abs(y1 - y2) <= 1"
],
"answer": 0,
"explain": "Проверьте условие на нескольких клетках: оно должно подходить ко всем ходам фигуры и не подходить к остальным.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"111",
"0",
"11",
"9"
],
"answer": 3,
"explain": "Отдельные if проверяются независимо друг от друга; else относится только к ближайшему if. Программа выводит: <code>9</code>.",
"code": "x = -4\ns = 0\nif x > 0:\n    s += 1\nif x % 2 == 0:\n    s += 10\nif x > 5:\n    s += 100\nelse:\n    s -= 1\nprint(s)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан фрагмент программы. Сопоставьте значение x и значение r после его выполнения.<pre>if x &lt; 0:\n    r = 'A'\nelif x &lt; 8:\n    r = 'B'\nelif x == 8:\n    r = 'C'\nelse:\n    r = 'D'</pre>",
"pairs": [
{
"left": "x = -2",
"right": "A"
},
{
"left": "x = 1",
"right": "B"
},
{
"left": "x = 8",
"right": "C"
},
{
"left": "x = 12",
"right": "D"
}
],
"explain": "Проверяйте условия сверху вниз: срабатывает первое истинное."
},
{
"type": "single",
"q": "Чему равно значение выражения? (как его покажет repr)",
"options": [
"False",
"'b'",
"\"'b'\"",
"True"
],
"answer": 1,
"explain": "<code>or</code> возвращает первый истинный операнд (или последний), <code>and</code> — первый ложный (или последний). Ложны: 0, '', None, [], {}.",
"code": "'' or 'b'",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"нет",
"да",
"7",
"нечётное"
],
"answer": 2,
"explain": "<code>A if условие else B</code> даёт A, когда условие истинно, иначе B. Программа выводит: <code>7</code>.",
"code": "x = -7\nprint(x if x > 0 else -x)",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Клетка a1 = (1, 1) чёрная. Что выведет программа?",
"options": [
"white black",
"white white",
"black white",
"black black"
],
"answer": 0,
"explain": "Клетка чёрная, если сумма координат чётная; у соседних клеток чётность суммы разная.",
"code": "x1, y1 = 7, 8\nx2, y2 = 2, 2\nc1 = 'black' if (x1 + y1) % 2 == 0 else 'white'\nc2 = 'black' if (x2 + y2) % 2 == 0 else 'white'\nprint(c1, c2)",
"codeOptions": true
},
{
"type": "multiple",
"q": "При каких введённых значениях x программа выведет YES?",
"options": [
"14",
"16",
"12",
"13",
"10",
"8"
],
"answer": [
1,
2
],
"explain": "Подставьте каждое значение в условие и проверьте обе части (and — обе истинны, or — хотя бы одна).",
"code": "x = int(input())\nif x % 3 == 0 or x > 14:\n    print('YES')\nelse:\n    print('NO')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"Ошибка",
"False",
"True"
],
"answer": 3,
"explain": "<code>and</code> — истинно, только если оба истинны; <code>or</code> — если хотя бы одно; <code>not</code> меняет значение; цепочка <code>a &lt; x &lt;= b</code> проверяет оба сравнения.",
"code": "x = 10\ny = 2\nprint(not (x > 0 and y < 0))",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно not True or True?",
"options": [
"None",
"Ошибка",
"True",
"False"
],
"answer": 2,
"explain": "not выполняется раньше or: (not True) or True = False or True = True."
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"False",
"None",
"True",
"Ошибка"
],
"answer": 2,
"explain": "Строки сравниваются посимвольно по кодам символов (заглавные латинские меньше строчных; '10' &lt; '9', потому что '1' &lt; '9').",
"code": "'abc' < 'abd'",
"codeOptions": true
},
{
"type": "matching",
"q": "Шахматы. Сопоставьте клетку, на которой стоит конь, и число его возможных ходов.",
"pairs": [
{
"left": "(1, 4)",
"right": "4"
},
{
"left": "(2, 1)",
"right": "3"
},
{
"left": "(8, 8)",
"right": "2"
},
{
"left": "(3, 3)",
"right": "8"
}
],
"explain": "В углу — 2 хода, рядом с углом — 3, у края — 4, ближе к центру — 6 или 8.",
"distractors": [
"5",
"7"
]
},
{
"type": "matching",
"q": "Шахматы. Сопоставьте фигуру (или свойство клеток) и условие. dx, dy — модули разностей координат.",
"pairs": [
{
"left": "одного цвета",
"right": "(x1 + y1) % 2 == (x2 + y2) % 2"
},
{
"left": "конь",
"right": "{dx, dy} == {1, 2}"
},
{
"left": "слон",
"right": "dx == dy"
},
{
"left": "король",
"right": "dx <= 1 and dy <= 1"
}
],
"explain": "Король: обе разности ≤ 1; слон: разности равны; ферзь = ладья + слон; конь: разности 1 и 2.",
"distractors": [
"x1 == x2 or y1 == y2",
"dx == 1 and dy == 1"
]
},
{
"type": "single",
"q": "Шахматы. Программа выводит буквы фигур, которые могут перейти с клетки (x1, y1) на (x2, y2): Л — ладья, К — король, С — слон, Н — конь. Что выведет программа?",
"options": [
"-",
"ЛК",
"С",
"Н"
],
"answer": 0,
"explain": "dx, dy — модули разностей. Ладья: dx = 0 или dy = 0; король: dx ≤ 1 и dy ≤ 1; слон: dx = dy; конь: пара 1 и 2. Отдельные if — потому что подходить могут сразу несколько фигур. Программа выводит: <code>-</code>.",
"code": "x1, y1 = 1, 3\nx2, y2 = 6, 5\ndx, dy = abs(x1 - x2), abs(y1 - y2)\nres = ''\nif dx == 0 or dy == 0:\n    res += 'Л'\nif dx <= 1 and dy <= 1:\n    res += 'К'\nif dx == dy:\n    res += 'С'\nif dx == 1 and dy == 2 or dx == 2 and dy == 1:\n    res += 'Н'\nprint(res if res else '-')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"I",
"IV",
"II",
"0"
],
"answer": 0,
"explain": "Сначала проверяется внешнее условие, затем — вложенное внутри выбранной ветки. Программа выводит: <code>I</code>.",
"code": "a = 8\nb = 5\nif a > 0:\n    if b > 0:\n        print('I')\n    else:\n        print('IV')\nelse:\n    if b > 0:\n        print('II')\n    else:\n        print('III')",
"codeOptions": true
},
{
"type": "multiple",
"q": "При каких введённых значениях x программа выведет YES?",
"options": [
"8",
"9",
"13",
"15",
"11",
"14"
],
"answer": [
1,
4
],
"explain": "Подставьте каждое значение в условие и проверьте обе части (and — обе истинны, or — хотя бы одна).",
"code": "x = int(input())\nif x > 8 and x <= 11:\n    print('YES')\nelse:\n    print('NO')",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Программа находит, за сколько ходов слон дойдёт с (x1, y1) до (x2, y2). Что она выведет?",
"options": [
"-1",
"2",
"1",
"0"
],
"answer": 0,
"explain": "Слон не меняет цвет клетки: одна диагональ — 1 ход, другие клетки того же цвета — 2 хода, клетки другого цвета недостижимы (−1).",
"code": "x1, y1, x2, y2 = 4, 6, 1, 2\nif x1 == x2 and y1 == y2:\n    print(0)\nelif abs(x1 - x2) == abs(y1 - y2):\n    print(1)\nelif (x1 + y1) % 2 == (x2 + y2) % 2:\n    print(2)\nelse:\n    print(-1)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"None",
"True",
"False"
],
"answer": 2,
"explain": "<code>and</code> — истинно, только если оба истинны; <code>or</code> — если хотя бы одно; <code>not</code> меняет значение; цепочка <code>a &lt; x &lt;= b</code> проверяет оба сравнения.",
"code": "x = 9\ny = 1\nprint(x > 0 and y > 0)",
"codeOptions": true
},
{
"type": "multiple",
"q": "При каких введённых значениях x программа выведет YES?",
"options": [
"14",
"7",
"15",
"13",
"4",
"8"
],
"answer": [
0,
2,
3
],
"explain": "Подставьте каждое значение в условие и проверьте обе части (and — обе истинны, or — хотя бы одна).",
"code": "x = int(input())\nif x < 4 or x >= 11:\n    print('YES')\nelse:\n    print('NO')",
"codeOptions": true
},
{
"type": "matching",
"q": "Шахматы. Сопоставьте фигуру (или свойство клеток) и условие. dx, dy — модули разностей координат.",
"pairs": [
{
"left": "король",
"right": "dx <= 1 and dy <= 1"
},
{
"left": "одного цвета",
"right": "(x1 + y1) % 2 == (x2 + y2) % 2"
},
{
"left": "слон",
"right": "dx == dy"
},
{
"left": "ладья",
"right": "x1 == x2 or y1 == y2"
}
],
"explain": "Король: обе разности ≤ 1; слон: разности равны; ферзь = ладья + слон; конь: разности 1 и 2.",
"distractors": [
"dx == 0 or dy == 0 or dx == dy",
"dx == 1 and dy == 1"
]
},
{
"type": "multiple",
"q": "Значения каких выражений истинны (bool даёт True)?",
"options": [
"'a' < 'B'",
"None is None",
"5 > 3 and 2 > 7",
"not 0",
"0 or 0",
"not (1 and 0)"
],
"answer": [
1,
3,
5
],
"explain": "Ложны: 0, 0.0, '', [], None, False. Пробел ' ' — непустая строка, значит истина.",
"codeOptions": true
},
{
"type": "matching",
"q": "Шахматы. Сопоставьте фигуру (или свойство клеток) и условие. dx, dy — модули разностей координат.",
"pairs": [
{
"left": "слон",
"right": "dx == dy"
},
{
"left": "конь",
"right": "{dx, dy} == {1, 2}"
},
{
"left": "король",
"right": "dx <= 1 and dy <= 1"
},
{
"left": "ферзь",
"right": "dx == 0 or dy == 0 or dx == dy"
}
],
"explain": "Король: обе разности ≤ 1; слон: разности равны; ферзь = ладья + слон; конь: разности 1 и 2.",
"distractors": [
"x1 == x2 or y1 == y2",
"dx == 1 and dy == 1"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"B",
"A",
"C",
"A\nB"
],
"answer": 0,
"explain": "В цепочке if–elif–else выполняется только первая ветка с истинным условием; граничные значения проверяйте по знаку (&gt; или &gt;=). Программа выводит: <code>B</code>.",
"code": "x = 15\nif x > 16:\n    print('A')\nelif x >= 14:\n    print('B')\nelse:\n    print('C')",
"codeOptions": true
},
{
"type": "multiple",
"q": "Шахматы. На какие клетки может пойти ферзь с клетки (6, 5) за один ход? Других фигур на доске нет.",
"options": [
"(1, 1)",
"(2, 2)",
"(4, 2)",
"(6, 4)",
"(6, 7)",
"(3, 4)"
],
"answer": [
3,
4
],
"explain": "Условие хода: <code>x1 == x2 or y1 == y2 or abs(x1 - x2) == abs(y1 - y2)</code>."
},
{
"type": "multiple",
"q": "Какие значения считаются ложными в условии if?",
"options": [
"' '",
"None",
"'0'",
"[0]",
"0",
"[]",
"''"
],
"answer": [
1,
4,
5,
6
],
"explain": "Ложны нули, пустые коллекции и None. Строка '0' и список [0] не пустые — истинны."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"IV",
"II",
"III",
"I"
],
"answer": 0,
"explain": "Сначала проверяется внешнее условие, затем — вложенное внутри выбранной ветки. Программа выводит: <code>IV</code>.",
"code": "a = 4\nb = 0\nif a > 0:\n    if b > 0:\n        print('I')\n    else:\n        print('IV')\nelse:\n    if b > 0:\n        print('II')\n    else:\n        print('III')",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Клетка a1 = (1, 1) чёрная. Что выведет программа?",
"options": [
"white black",
"black white",
"white white",
"black black"
],
"answer": 3,
"explain": "Клетка чёрная, если сумма координат чётная; у соседних клеток чётность суммы разная.",
"code": "x1, y1 = 2, 4\nx2, y2 = 2, 4\nc1 = 'black' if (x1 + y1) % 2 == 0 else 'white'\nc2 = 'black' if (x2 + y2) % 2 == 0 else 'white'\nprint(c1, c2)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Значения каких выражений истинны (bool даёт True)?",
"options": [
"None is None",
"3 == 3.0",
"3 > 2 > 1 > 0 > -1 > 0",
"0 or 0",
"'' or 'x'",
"1 < 2 < 3"
],
"answer": [
0,
1,
4,
5
],
"explain": "Ложны: 0, 0.0, '', [], None, False. Пробел ' ' — непустая строка, значит истина.",
"codeOptions": true
},
{
"type": "single",
"q": "Какой оператор проверяет равенство значений?",
"options": [
"=",
"==",
"===",
":="
],
"answer": 1,
"explain": "= — присваивание, == — сравнение."
},
{
"type": "matching",
"q": "Шахматы. Сопоставьте клетку, на которой стоит конь, и число его возможных ходов.",
"pairs": [
{
"left": "(2, 1)",
"right": "3"
},
{
"left": "(1, 4)",
"right": "4"
},
{
"left": "(4, 5)",
"right": "8"
},
{
"left": "(8, 8)",
"right": "2"
}
],
"explain": "В углу — 2 хода, рядом с углом — 3, у края — 4, ближе к центру — 6 или 8.",
"distractors": [
"5",
"7"
]
},
{
"type": "single",
"q": "Шахматы. Клетка a1 = (1, 1) чёрная. Что выведет программа?",
"options": [
"white black",
"white white",
"black white",
"black black"
],
"answer": 0,
"explain": "Клетка чёрная, если сумма координат чётная; у соседних клеток чётность суммы разная.",
"code": "x1, y1 = 5, 4\nx2, y2 = 7, 3\nc1 = 'black' if (x1 + y1) % 2 == 0 else 'white'\nc2 = 'black' if (x2 + y2) % 2 == 0 else 'white'\nprint(c1, c2)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"True",
"Ошибка",
"False"
],
"answer": 3,
"explain": "<code>and</code> — истинно, только если оба истинны; <code>or</code> — если хотя бы одно; <code>not</code> меняет значение; цепочка <code>a &lt; x &lt;= b</code> проверяет оба сравнения.",
"code": "x = 6\ny = 5\nprint(x != y and not y)",
"codeOptions": true
},
{
"type": "matching",
"q": "Шахматы. Сопоставьте фигуру (или свойство клеток) и условие. dx, dy — модули разностей координат.",
"pairs": [
{
"left": "слон",
"right": "dx == dy"
},
{
"left": "ферзь",
"right": "dx == 0 or dy == 0 or dx == dy"
},
{
"left": "король",
"right": "dx <= 1 and dy <= 1"
},
{
"left": "ладья",
"right": "x1 == x2 or y1 == y2"
}
],
"explain": "Король: обе разности ≤ 1; слон: разности равны; ферзь = ладья + слон; конь: разности 1 и 2.",
"distractors": [
"{dx, dy} == {1, 2}",
"dx == 1 and dy == 1"
]
},
{
"type": "multiple",
"q": "Шахматы. На какие клетки может пойти ферзь с клетки (3, 4) за один ход? Других фигур на доске нет.",
"options": [
"(2, 1)",
"(1, 3)",
"(4, 6)",
"(5, 5)",
"(1, 2)",
"(5, 2)"
],
"answer": [
4,
5
],
"explain": "Условие хода: <code>x1 == x2 or y1 == y2 or abs(x1 - x2) == abs(y1 - y2)</code>."
},
{
"type": "matching",
"q": "Дан фрагмент программы. Сопоставьте значение x и значение r после его выполнения.<pre>if x &lt; 0:\n    r = 'A'\nelif x &lt; 4:\n    r = 'B'\nelif x == 4:\n    r = 'C'\nelse:\n    r = 'D'</pre>",
"pairs": [
{
"left": "x = -4",
"right": "A"
},
{
"left": "x = 2",
"right": "B"
},
{
"left": "x = 4",
"right": "C"
},
{
"left": "x = 9",
"right": "D"
}
],
"explain": "Проверяйте условия сверху вниз: срабатывает первое истинное."
},
{
"type": "multiple",
"q": "Шахматы. На какие клетки может пойти слон с клетки (2, 7) за один ход? Других фигур на доске нет.",
"options": [
"(3, 8)",
"(6, 2)",
"(1, 6)",
"(5, 8)",
"(4, 8)",
"(7, 3)"
],
"answer": [
0,
2
],
"explain": "Условие хода: <code>abs(x1 - x2) == abs(y1 - y2)</code>."
},
{
"type": "single",
"q": "Шахматы. Программа находит, за сколько ходов слон дойдёт с (x1, y1) до (x2, y2). Что она выведет?",
"options": [
"2",
"1",
"-1",
"0"
],
"answer": 2,
"explain": "Слон не меняет цвет клетки: одна диагональ — 1 ход, другие клетки того же цвета — 2 хода, клетки другого цвета недостижимы (−1).",
"code": "x1, y1, x2, y2 = 6, 6, 8, 7\nif x1 == x2 and y1 == y2:\n    print(0)\nelif abs(x1 - x2) == abs(y1 - y2):\n    print(1)\nelif (x1 + y1) % 2 == (x2 + y2) % 2:\n    print(2)\nelse:\n    print(-1)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"34",
"чётное",
"17",
"нет"
],
"answer": 3,
"explain": "<code>A if условие else B</code> даёт A, когда условие истинно, иначе B. Программа выводит: <code>нет</code>.",
"code": "x = 17\nprint('да' if 0 < x < 10 else 'нет')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5",
"нет",
"-10",
"нечётное"
],
"answer": 0,
"explain": "<code>A if условие else B</code> даёт A, когда условие истинно, иначе B. Программа выводит: <code>5</code>.",
"code": "x = -5\nprint(x if x > 0 else -x)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан фрагмент программы. Сопоставьте значение x и значение r после его выполнения.<pre>if x &lt; 0:\n    r = 'A'\nelif x &lt; 8:\n    r = 'B'\nelif x == 8:\n    r = 'C'\nelse:\n    r = 'D'</pre>",
"pairs": [
{
"left": "x = -5",
"right": "A"
},
{
"left": "x = 6",
"right": "B"
},
{
"left": "x = 8",
"right": "C"
},
{
"left": "x = 12",
"right": "D"
}
],
"explain": "Проверяйте условия сверху вниз: срабатывает первое истинное."
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"True",
"False",
"Ошибка",
"None"
],
"answer": 0,
"explain": "Строки сравниваются посимвольно по кодам символов (заглавные латинские меньше строчных; '10' &lt; '9', потому что '1' &lt; '9').",
"code": "'10' < '9'",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и его значение.",
"pairs": [
{
"left": "[] and 5",
"right": "[]"
},
{
"left": "5 and 7",
"right": "7"
},
{
"left": "'' or 'py'",
"right": "'py'"
},
{
"left": "3 or 5",
"right": "3"
}
],
"explain": "<code>or</code> — первый истинный или последний; <code>and</code> — первый ложный или последний; <code>not</code> всегда даёт bool.",
"distractors": [
"0"
]
},
{
"type": "single",
"q": "Шахматы. Программа находит, за сколько ходов слон дойдёт с (x1, y1) до (x2, y2). Что она выведет?",
"options": [
"-1",
"0",
"2",
"1"
],
"answer": 0,
"explain": "Слон не меняет цвет клетки: одна диагональ — 1 ход, другие клетки того же цвета — 2 хода, клетки другого цвета недостижимы (−1).",
"code": "x1, y1, x2, y2 = 1, 7, 4, 3\nif x1 == x2 and y1 == y2:\n    print(0)\nelif abs(x1 - x2) == abs(y1 - y2):\n    print(1)\nelif (x1 + y1) % 2 == (x2 + y2) % 2:\n    print(2)\nelse:\n    print(-1)",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения? (как его покажет repr)",
"options": [
"0",
"True",
"[0]",
"False"
],
"answer": 2,
"explain": "<code>or</code> возвращает первый истинный операнд (или последний), <code>and</code> — первый ложный (или последний). Ложны: 0, '', None, [], {}.",
"code": "[0] or 0",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и его значение.",
"pairs": [
{
"left": "not ''",
"right": "True"
},
{
"left": "3 or 5",
"right": "3"
},
{
"left": "[] and 5",
"right": "[]"
},
{
"left": "None or 0",
"right": "0"
}
],
"explain": "<code>or</code> — первый истинный или последний; <code>and</code> — первый ложный или последний; <code>not</code> всегда даёт bool.",
"distractors": [
"7"
]
},
{
"type": "multiple",
"q": "Какие записи являются правильными по синтаксису?",
"options": [
"y = 1 if x else 2",
"if (x > 0) then:",
"elif x > 0:  # без if перед ним",
"if 0 < x < 5:\n    pass",
"if x > 0 print(x)",
"if x > 0: print(x)"
],
"answer": [
0,
3,
5
],
"explain": "После условия обязательно двоеточие; then в Python нет; elif без if недопустим."
},
{
"type": "matching",
"q": "Шахматы. Сопоставьте фигуру (или свойство клеток) и условие. dx, dy — модули разностей координат.",
"pairs": [
{
"left": "одного цвета",
"right": "(x1 + y1) % 2 == (x2 + y2) % 2"
},
{
"left": "ферзь",
"right": "dx == 0 or dy == 0 or dx == dy"
},
{
"left": "слон",
"right": "dx == dy"
},
{
"left": "король",
"right": "dx <= 1 and dy <= 1"
}
],
"explain": "Король: обе разности ≤ 1; слон: разности равны; ферзь = ладья + слон; конь: разности 1 и 2.",
"distractors": [
"x1 == x2 or y1 == y2",
"dx == 1 and dy == 1"
]
},
{
"type": "single",
"q": "Шахматы. Какое условие истинно ровно тогда, когда конь может пойти с клетки (x1, y1) на другую клетку (x2, y2)?",
"options": [
"abs(x1 - x2) + abs(y1 - y2) == 3",
"abs(x1 - x2) == 1 and abs(y1 - y2) == 2 or abs(x1 - x2) == 2 and abs(y1 - y2) == 1",
"abs(x1 - x2) == 2 or abs(y1 - y2) == 2",
"abs(x1 - x2) == 1 and abs(y1 - y2) == 1"
],
"answer": 1,
"explain": "Проверьте условие на нескольких клетках: оно должно подходить ко всем ходам фигуры и не подходить к остальным.",
"codeOptions": true
},
{
"type": "single",
"q": "Какое условие проверяет, что x — двузначное натуральное число?",
"options": [
"10 < x < 99",
"x // 10 == 2",
"len(x) == 2",
"10 <= x <= 99"
],
"answer": 3,
"explain": "Двузначные натуральные: от 10 до 99 включительно."
},
{
"type": "multiple",
"q": "При каких введённых значениях x программа выведет YES?",
"options": [
"16",
"1",
"-2",
"4",
"3",
"18"
],
"answer": [
1,
3,
4
],
"explain": "Подставьте каждое значение в условие и проверьте обе части (and — обе истинны, or — хотя бы одна).",
"code": "x = int(input())\nif x > -1 and x <= 14:\n    print('YES')\nelse:\n    print('NO')",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"Ошибка",
"False",
"True",
"None"
],
"answer": 2,
"explain": "Строки сравниваются посимвольно по кодам символов (заглавные латинские меньше строчных; '10' &lt; '9', потому что '1' &lt; '9').",
"code": "'abc' < 'abd'",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Клетка a1 = (1, 1) чёрная. Что выведет программа?",
"options": [
"black white",
"white white",
"black black",
"white black"
],
"answer": 0,
"explain": "Клетка чёрная, если сумма координат чётная; у соседних клеток чётность суммы разная.",
"code": "x1, y1 = 2, 6\nx2, y2 = 6, 1\nc1 = 'black' if (x1 + y1) % 2 == 0 else 'white'\nc2 = 'black' if (x2 + y2) % 2 == 0 else 'white'\nprint(c1, c2)",
"codeOptions": true
},
{
"type": "single",
"q": "Шахматы. Сколько ходов есть у коня на клетке (x, y)? Что выведет программа?",
"options": [
"8",
"3",
"4",
"6"
],
"answer": 0,
"explain": "У коня до 8 ходов; у края и в углу часть ходов выводит за доску (в углу их всего 2). Программа выводит: <code>8</code>.",
"code": "x, y = 4, 5\nk = 0\nfor dx, dy in [(1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1), (-2, 1), (-1, 2)]:\n    if 1 <= x + dx <= 8 and 1 <= y + dy <= 8:\n        k += 1\nprint(k)",
"codeOptions": true
}
],
"m3": [
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"9 8 7 6 4 3 2 1",
"1 2 3 4 6 7 8 9",
"1 2 3 4",
"1 2 3 4 6 7 8"
],
"answer": 1,
"explain": "<code>break</code> завершает цикл полностью, <code>continue</code> пропускает остаток текущего шага. Программа выводит: <code>1 2 3 4 6 7 8 9</code>.",
"code": "for i in range(1, 10):\n    if i % 5 == 0:\n        continue\n    print(i, end=' ')",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие вызовы range дают последовательность 3, 6, 9, 12?",
"options": [
"range(3, 15)",
"range(3, 13, 3)",
"range(2, 15, 3)",
"range(3, 12, 3)",
"range(3, 16, 3)",
"range(3, 14, 3)"
],
"answer": [
1,
5
],
"explain": "Правая граница не включается, поэтому подходит любое число больше последнего элемента, но не больше следующего за ним по шагу.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"25",
"8448",
"23",
"12"
],
"answer": 2,
"explain": "<code>n % 10</code> — последняя цифра, <code>n //= 10</code> — убрать её. Цикл перебирает цифры справа налево. Программа выводит: <code>23</code>.",
"code": "n = 76055\ns = 0\nwhile n > 0:\n    s += n % 10\n    n //= 10\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"найдено 7",
"найдено 8\nнет",
"нет",
"найдено 2"
],
"answer": 2,
"explain": "Ветка else цикла выполняется, только если цикл завершился без break. Программа выводит: <code>нет</code>.",
"code": "for i in range(2, 8):\n    if i == 8:\n        print('найдено', i)\n        break\nelse:\n    print('нет')",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и получающийся список.",
"pairs": [
{
"left": "list(range(1, 4))",
"right": "[1, 2, 3]"
},
{
"left": "list(range(5, 5))",
"right": "[]"
},
{
"left": "list(range(2, 9, 3))",
"right": "[2, 5, 8]"
},
{
"left": "list(range(0, 9, 3))",
"right": "[0, 3, 6]"
}
],
"explain": "range(start, stop, step): stop не включается.",
"distractors": [
"[0, 1, 2, 3]",
"[4, 3, 2, 1]"
]
},
{
"type": "single",
"q": "Сколько раз выполнится k += 1? Что выведет программа?",
"options": [
"15",
"14",
"30",
"-15"
],
"answer": 0,
"explain": "Для каждого значения i внутренний цикл выполняется полностью; сложите количество повторов. Программа выводит: <code>15</code>.",
"code": "k = 0\nfor i in range(5):\n    for j in range(i + 1):\n        k += 1\nprint(k)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1 2 3 5 6 7 9",
"1 2 3 5 6 7 9 9",
"1 2 3 5 6 7",
"1 2 3"
],
"answer": 0,
"explain": "<code>break</code> завершает цикл полностью, <code>continue</code> пропускает остаток текущего шага. Программа выводит: <code>1 2 3 5 6 7 9</code>.",
"code": "for i in range(1, 10):\n    if i % 4 == 0:\n        continue\n    print(i, end=' ')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-1",
"-4",
"6",
"-2"
],
"answer": 3,
"explain": "Начальное значение важно: если искать максимум, начиная с 0, для отрицательных чисел ответ будет неверным. Программа выводит: <code>-2</code>.",
"code": "a = [-2, 23, 13, 23, 6, 9]\nm = a[0]\nfor x in a:\n    if x < m:\n        m = x\nprint(m)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"8",
"9",
"14"
],
"answer": 0,
"explain": "Трассируйте: проверка условия → тело → снова проверка. Цикл заканчивается, когда условие ложно. Программа выводит: <code>7</code>.",
"code": "n = 163\nc = 0\nwhile n > 5:\n    n //= 10\n    c += n % 10\nprint(c)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие фрагменты выведут ровно 5 строк(и)?",
"options": [
"i = 5\nwhile i > 0:\n    print(i)\n    i -= 2",
"for i in range(1, 5): print(i)",
"i = 1\nwhile i < 32:\n    print(i)\n    i *= 2",
"for i in range(5, 0): print(i)",
"i = 0\nwhile i < 5:\n    print(i)\n    i += 1",
"for i in range(10, 0, -2): print(i)"
],
"answer": [
2,
4,
5
],
"explain": "Посчитайте количество повторений тела цикла.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие вызовы range дают последовательность 4, 7, 10, 13?",
"options": [
"range(4, 14, 3)",
"range(4, 13, 3)",
"range(4, 16, 3)",
"range(4, 15, 3)",
"range(4, 16)",
"range(3, 16, 3)"
],
"answer": [
0,
2,
3
],
"explain": "Правая граница не включается, поэтому подходит любое число больше последнего элемента, но не больше следующего за ним по шагу.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[]",
"[3, 2, 1, 0, -1, -2]",
"[2, 1, 0, -1]",
"[3, 2, 1, 0, -1]"
],
"answer": 3,
"explain": "range не включает правую границу; при отрицательном шаге значения убывают. Программа выводит: <code>[3, 2, 1, 0, -1]</code>.",
"code": "print(list(range(3, -2, -1)))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие вызовы range дают последовательность 0, 3, 6, 9?",
"options": [
"range(0, 12, 3)",
"range(-1, 12, 3)",
"range(0, 9, 3)",
"range(0, 11, 3)",
"range(0, 12)",
"range(1, 12, 3)"
],
"answer": [
0,
3
],
"explain": "Правая граница не включается, поэтому подходит любое число больше последнего элемента, но не больше следующего за ним по шагу.",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и получающийся список.",
"pairs": [
{
"left": "list(range(3, 0, -2))",
"right": "[3, 1]"
},
{
"left": "list(range(5, 5))",
"right": "[]"
},
{
"left": "list(range(4))",
"right": "[0, 1, 2, 3]"
},
{
"left": "list(range(-2, 2))",
"right": "[-2, -1, 0, 1]"
}
],
"explain": "range(start, stop, step): stop не включается.",
"distractors": [
"[1, 2, 3]",
"[4, 3, 2, 1]"
]
},
{
"type": "multiple",
"q": "Какие циклы ни разу не выполнят тело?",
"options": [
"for c in '':",
"for i in range(2, 5):",
"while 0:",
"for i in range(5, 2, -1):",
"for i in range(5, 2):",
"while 1 < 2:  # с break внутри"
],
"answer": [
0,
2,
4
],
"explain": "Пустой range, ложное условие и пустая строка — тело не выполняется."
},
{
"type": "matching",
"q": "Сопоставьте вызов и получающийся список.",
"pairs": [
{
"left": "list(range(5, 5))",
"right": "[]"
},
{
"left": "list(range(0, 9, 3))",
"right": "[0, 3, 6]"
},
{
"left": "list(range(3, 0, -2))",
"right": "[3, 1]"
},
{
"left": "list(range(1, 4))",
"right": "[1, 2, 3]"
}
],
"explain": "range(start, stop, step): stop не включается.",
"distractors": [
"[0, 1, 2, 3]",
"[4, 3, 2, 1]"
]
},
{
"type": "multiple",
"q": "Какие вызовы range дают последовательность 2, 5, 8, 11?",
"options": [
"range(2, 14, 3)",
"range(2, 15, 3)",
"range(2, 11, 3)",
"range(2, 14)",
"range(3, 14, 3)",
"range(2, 12, 3)"
],
"answer": [
0,
5
],
"explain": "Правая граница не включается, поэтому подходит любое число больше последнего элемента, но не больше следующего за ним по шагу.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-8",
"66",
"-3",
"-4"
],
"answer": 3,
"explain": "Начальное значение важно: если искать максимум, начиная с 0, для отрицательных чисел ответ будет неверным. Программа выводит: <code>-4</code>.",
"code": "a = [-2, 13, 23, 18, -4, 18]\nm = a[0]\nfor x in a:\n    if x < m:\n        m = x\nprint(m)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие вызовы range дают последовательность 3, 6, 9, 12?",
"options": [
"range(3, 16, 3)",
"range(3, 14, 3)",
"range(3, 13, 3)",
"range(3, 12, 3)",
"range(4, 15, 3)",
"range(3, 15)"
],
"answer": [
1,
2
],
"explain": "Правая граница не включается, поэтому подходит любое число больше последнего элемента, но не больше следующего за ним по шагу.",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте фрагмент и значение s после его выполнения.",
"pairs": [
{
"left": "s = 0\nfor i in range(0, 7, 2):\n    s += i",
"right": "12"
},
{
"left": "s = 0\nfor i in range(7):\n    s += i",
"right": "21"
},
{
"left": "s = 0\nfor i in range(7):\n    s += 1",
"right": "7"
},
{
"left": "s = 1\nfor i in range(1, 7):\n    s *= i",
"right": "720"
}
],
"explain": "Переберите значения i и аккуратно накопите s."
},
{
"type": "single",
"q": "Сколько раз выполнится k += 1? Что выведет программа?",
"options": [
"14",
"13",
"9",
"15"
],
"answer": 0,
"explain": "Для каждого значения i внутренний цикл выполняется полностью; сложите количество повторов. Программа выводит: <code>14</code>.",
"code": "k = 0\nfor i in range(4):\n    for j in range(i, 5):\n        k += 1\nprint(k)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5",
"7",
"6",
"4"
],
"answer": 0,
"explain": "range(a, b, step) не включает b. Переберите значения i и выполните тело цикла для каждого. Программа выводит: <code>5</code>.",
"code": "s = 0\nfor i in range(1, 6, 1):\n    s = s + 1\nprint(s)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие вызовы range дают последовательность 3, 6, 9, 12?",
"options": [
"range(3, 15, 3)",
"range(3, 12, 3)",
"range(3, 14, 3)",
"range(2, 15, 3)",
"range(4, 15, 3)",
"range(3, 15)"
],
"answer": [
0,
2
],
"explain": "Правая граница не включается, поэтому подходит любое число больше последнего элемента, но не больше следующего за ним по шагу.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1 2 3",
"1 2 3 4",
"2 3 4",
"1 2 3 4 6 7 8 9"
],
"answer": 1,
"explain": "<code>break</code> завершает цикл полностью, <code>continue</code> пропускает остаток текущего шага. Программа выводит: <code>1 2 3 4</code>.",
"code": "for i in range(1, 10):\n    if i % 5 == 0:\n        break\n    print(i, end=' ')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[12, 10, 8, 6, 4, 2]",
"[13, 11, 9, 7, 5, 3]",
"[13, 11, 9, 7, 5, 3, 1]",
"[]"
],
"answer": 1,
"explain": "range не включает правую границу; при отрицательном шаге значения убывают. Программа выводит: <code>[13, 11, 9, 7, 5, 3]</code>.",
"code": "print(list(range(13, 1, -2)))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и получающийся список.",
"pairs": [
{
"left": "list(range(0, 9, 3))",
"right": "[0, 3, 6]"
},
{
"left": "list(range(5, 5))",
"right": "[]"
},
{
"left": "list(range(4, 0, -1))",
"right": "[4, 3, 2, 1]"
},
{
"left": "list(range(2, 9, 3))",
"right": "[2, 5, 8]"
}
],
"explain": "range(start, stop, step): stop не включается.",
"distractors": [
"[0, 1, 2, 3]",
"[1, 2, 3]"
]
},
{
"type": "multiple",
"q": "Какие фрагменты выведут ровно 5 строк(и)?",
"options": [
"for i in range(10, 0, -2): print(i)",
"for i in range(5): print(i)",
"i = 5\nwhile i > 0:\n    print(i)\n    i -= 2",
"for c in 'hello': print(c)",
"for i in range(5, 0): print(i)",
"i = 0\nwhile i < 5:\n    print(i)\n    i += 1"
],
"answer": [
0,
1,
3,
5
],
"explain": "Посчитайте количество повторений тела цикла.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1 2 3 4 5 6 7 8 9",
"-1",
"3",
"1"
],
"answer": 3,
"explain": "<code>break</code> завершает цикл полностью, <code>continue</code> пропускает остаток текущего шага. Программа выводит: <code>1</code>.",
"code": "for i in range(1, 10):\n    if i % 2 == 0:\n        break\n    print(i, end=' ')",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и получающийся список.",
"pairs": [
{
"left": "list(range(-2, 2))",
"right": "[-2, -1, 0, 1]"
},
{
"left": "list(range(1, 4))",
"right": "[1, 2, 3]"
},
{
"left": "list(range(0, 9, 3))",
"right": "[0, 3, 6]"
},
{
"left": "list(range(3, 0, -2))",
"right": "[3, 1]"
}
],
"explain": "range(start, stop, step): stop не включается.",
"distractors": [
"[0, 1, 2, 3]",
"[4, 3, 2, 1]"
]
},
{
"type": "single",
"q": "Сколько раз выполнится k += 1? Что выведет программа?",
"options": [
"15",
"10",
"20",
"12"
],
"answer": 1,
"explain": "Для каждого значения i внутренний цикл выполняется полностью; сложите количество повторов. Программа выводит: <code>10</code>.",
"code": "k = 0\nfor i in range(4):\n    for j in range(i + 1):\n        k += 1\nprint(k)",
"codeOptions": true
},
{
"type": "single",
"q": "Какой цикл удобнее, если число повторений заранее неизвестно?",
"options": [
"for i in range(n)",
"никакой",
"while",
"for без range"
],
"answer": 2,
"explain": "while повторяет, пока выполняется условие."
},
{
"type": "matching",
"q": "Сопоставьте фрагмент и значение s после его выполнения.",
"pairs": [
{
"left": "s = 1\nfor i in range(1, 7):\n    s *= i",
"right": "720"
},
{
"left": "s = 0\nfor i in range(7):\n    s += i",
"right": "21"
},
{
"left": "s = 0\nfor i in range(7):\n    s += 1",
"right": "7"
},
{
"left": "s = 0\nfor i in range(1, 7 + 1):\n    s += i",
"right": "28"
}
],
"explain": "Переберите значения i и аккуратно накопите s."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-8",
"16",
"8",
"7"
],
"answer": 2,
"explain": "<code>n % 10</code> — последняя цифра, <code>n //= 10</code> — убрать её. Цикл перебирает цифры справа налево. Программа выводит: <code>8</code>.",
"code": "n = 23851\ns = 0\nwhile n > 0:\n    s = max(s, n % 10)\n    n //= 10\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[3]",
"Ошибка",
"]3[",
"3]"
],
"answer": 0,
"explain": "range не включает правую границу; при отрицательном шаге значения убывают. Программа выводит: <code>[3]</code>.",
"code": "print(list(range(3, 4, 2)))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и получающийся список.",
"pairs": [
{
"left": "list(range(4, 0, -1))",
"right": "[4, 3, 2, 1]"
},
{
"left": "list(range(1, 4))",
"right": "[1, 2, 3]"
},
{
"left": "list(range(-2, 2))",
"right": "[-2, -1, 0, 1]"
},
{
"left": "list(range(5, 5))",
"right": "[]"
}
],
"explain": "range(start, stop, step): stop не включается.",
"distractors": [
"[0, 1, 2, 3]",
"[0, 3, 6]"
]
},
{
"type": "matching",
"q": "Сопоставьте фрагмент и значение s после его выполнения.",
"pairs": [
{
"left": "s = 0\nfor i in range(0, 5, 2):\n    s += i",
"right": "6"
},
{
"left": "s = 0\nfor i in range(5):\n    s += 1",
"right": "5"
},
{
"left": "s = 0\nfor i in range(5):\n    s += i",
"right": "10"
},
{
"left": "s = 0\nfor i in range(1, 5 + 1):\n    s += i",
"right": "15"
}
],
"explain": "Переберите значения i и аккуратно накопите s."
},
{
"type": "multiple",
"q": "Какие вызовы range дают последовательность 1, 4, 7, 10?",
"options": [
"range(0, 13, 3)",
"range(1, 11, 3)",
"range(1, 10, 3)",
"range(1, 12, 3)",
"range(2, 13, 3)",
"range(1, 14, 3)"
],
"answer": [
1,
3
],
"explain": "Правая граница не включается, поэтому подходит любое число больше последнего элемента, но не больше следующего за ним по шагу.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1633",
"1632",
"3264",
"23848320"
],
"answer": 1,
"explain": "<code>n % 10</code> — последняя цифра, <code>n //= 10</code> — убрать её. Цикл перебирает цифры справа налево. Программа выводит: <code>1632</code>.",
"code": "n = 23610\ns = 0\nwhile n > 0:\n    s = s * 10 + n % 10\n    n //= 10\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"найдено 7",
"найдено 2",
"найдено 3",
"найдено 3\nнет"
],
"answer": 2,
"explain": "Ветка else цикла выполняется, только если цикл завершился без break. Программа выводит: <code>найдено 3</code>.",
"code": "for i in range(2, 8):\n    if i == 3:\n        print('найдено', i)\n        break\nelse:\n    print('нет')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2 3 5 6 7 9",
"1 2 3 4 5 6 7 8 9",
"1 2 3",
"1 2 3 5 6 7 9"
],
"answer": 3,
"explain": "<code>break</code> завершает цикл полностью, <code>continue</code> пропускает остаток текущего шага. Программа выводит: <code>1 2 3 5 6 7 9</code>.",
"code": "for i in range(1, 10):\n    if i % 4 == 0:\n        continue\n    print(i, end=' ')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"8",
"6",
"-6",
"7"
],
"answer": 1,
"explain": "Трассируйте: проверка условия → тело → снова проверка. Цикл заканчивается, когда условие ложно. Программа выводит: <code>6</code>.",
"code": "n = 44\nc = 0\nwhile n > 5:\n    n -= 7\n    c += 1\nprint(c)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"54",
"2",
"1",
"3"
],
"answer": 1,
"explain": "Начальное значение важно: если искать максимум, начиная с 0, для отрицательных чисел ответ будет неверным. Программа выводит: <code>2</code>.",
"code": "a = [29, 9, 0, 19, -8, 5]\nm = 0\nfor x in a:\n    if x % 2 == 0:\n        m += 1\nprint(m)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте фрагмент и значение s после его выполнения.",
"pairs": [
{
"left": "s = 1\nfor i in range(1, 5):\n    s *= i",
"right": "24"
},
{
"left": "s = 0\nfor i in range(1, 5 + 1):\n    s += i",
"right": "15"
},
{
"left": "s = 0\nfor i in range(5):\n    s += 1",
"right": "5"
},
{
"left": "s = 0\nfor i in range(0, 5, 2):\n    s += i",
"right": "6"
}
],
"explain": "Переберите значения i и аккуратно накопите s."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"10",
"-5",
"5",
"7"
],
"answer": 2,
"explain": "Трассируйте: проверка условия → тело → снова проверка. Цикл заканчивается, когда условие ложно. Программа выводит: <code>5</code>.",
"code": "n = 241\nc = 0\nwhile n >= 10:\n    n //= 2\n    c += 1\nprint(c)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"28",
"6",
"61",
"-4"
],
"answer": 0,
"explain": "Начальное значение важно: если искать максимум, начиная с 0, для отрицательных чисел ответ будет неверным. Программа выводит: <code>28</code>.",
"code": "a = [25, 28, -4, 4, 9, -1]\nm = a[0]\nfor x in a:\n    if x > m:\n        m = x\nprint(m)",
"codeOptions": true
},
{
"type": "single",
"q": "Сколько раз выполнится тело цикла for i in range(3, 15, 4)?",
"options": [
"12",
"4",
"3",
"5"
],
"answer": 2,
"explain": "Значения i: 3, 7, 11 (15 не включается)."
},
{
"type": "multiple",
"q": "Что верно о break и continue?",
"options": [
"break прерывает все вложенные циклы сразу",
"continue переходит к следующему шагу цикла",
"else цикла не выполняется после break",
"continue завершает программу",
"break прерывает ближайший цикл"
],
"answer": [
1,
2,
4
],
"explain": "break выходит только из того цикла, в котором записан."
},
{
"type": "multiple",
"q": "Какие вызовы range дают последовательность 0, 3, 6, 9?",
"options": [
"range(1, 12, 3)",
"range(0, 12)",
"range(0, 12, 3)",
"range(0, 10, 3)",
"range(-1, 12, 3)",
"range(0, 13, 3)"
],
"answer": [
2,
3
],
"explain": "Правая граница не включается, поэтому подходит любое число больше последнего элемента, но не больше следующего за ним по шагу.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3",
"4",
"5",
"8"
],
"answer": 1,
"explain": "Начальное значение важно: если искать максимум, начиная с 0, для отрицательных чисел ответ будет неверным. Программа выводит: <code>4</code>.",
"code": "a = [6, 3, 0, 23, 0, -6]\nm = 0\nfor x in a:\n    if x % 2 == 0:\n        m += 1\nprint(m)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1",
"6",
"0",
"2"
],
"answer": 2,
"explain": "range(a, b, step) не включает b. Переберите значения i и выполните тело цикла для каждого. Программа выводит: <code>0</code>.",
"code": "s = 0\nfor i in range(0, 6, 3):\n    s += i % 3\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что произойдёт при выполнении while True: без break внутри?",
"options": [
"цикл не выполнится ни разу",
"бесконечный цикл",
"ошибка синтаксиса",
"цикл выполнится один раз"
],
"answer": 1,
"explain": "Условие всегда истинно, а выхода нет."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"203",
"93",
"92",
"45"
],
"answer": 1,
"explain": "range(a, b, step) не включает b. Переберите значения i и выполните тело цикла для каждого. Программа выводит: <code>93</code>.",
"code": "s = 0\nfor i in range(2, 9, 3):\n    s += i * i\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Какое начальное значение у произведения перед накоплением в цикле?",
"options": [
"1",
"None",
"0",
"-1"
],
"answer": 0,
"explain": "Умножение на 0 обнулит результат, поэтому начинают с 1."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"найдено 2",
"нет",
"найдено 6\nнет",
"найдено 6"
],
"answer": 3,
"explain": "Ветка else цикла выполняется, только если цикл завершился без break. Программа выводит: <code>найдено 6</code>.",
"code": "for i in range(2, 8):\n    if i == 6:\n        print('найдено', i)\n        break\nelse:\n    print('нет')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"4",
"-5",
"5"
],
"answer": 3,
"explain": "<code>n % 10</code> — последняя цифра, <code>n //= 10</code> — убрать её. Цикл перебирает цифры справа налево. Программа выводит: <code>5</code>.",
"code": "n = 56610\ns = 0\nwhile n > 0:\n    s += 1\n    n //= 10\nprint(s)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и получающийся список.",
"pairs": [
{
"left": "list(range(3, 0, -2))",
"right": "[3, 1]"
},
{
"left": "list(range(1, 4))",
"right": "[1, 2, 3]"
},
{
"left": "list(range(5, 5))",
"right": "[]"
},
{
"left": "list(range(2, 9, 3))",
"right": "[2, 5, 8]"
}
],
"explain": "range(start, stop, step): stop не включается.",
"distractors": [
"[0, 1, 2, 3]",
"[4, 3, 2, 1]"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"20",
"-10",
"10",
"12"
],
"answer": 2,
"explain": "Трассируйте: проверка условия → тело → снова проверка. Цикл заканчивается, когда условие ложно. Программа выводит: <code>10</code>.",
"code": "n = 373\nc = 0\nwhile n > 5:\n    n //= 10\n    c += n % 10\nprint(c)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие фрагменты выведут ровно 5 строк(и)?",
"options": [
"i = 5\nwhile i > 0:\n    print(i)\n    i -= 2",
"for i in range(0, 10, 2): print(i)",
"for i in range(5): print(i)",
"for i in range(1, 5): print(i)",
"for i in range(10, 0, -2): print(i)",
"i = 0\nwhile i < 5:\n    print(i)\n    i += 1"
],
"answer": [
1,
2,
4,
5
],
"explain": "Посчитайте количество повторений тела цикла.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"10",
"6",
"-5",
"5"
],
"answer": 3,
"explain": "<code>n % 10</code> — последняя цифра, <code>n //= 10</code> — убрать её. Цикл перебирает цифры справа налево. Программа выводит: <code>5</code>.",
"code": "n = 21057\ns = 0\nwhile n > 0:\n    s += 1\n    n //= 10\nprint(s)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие вызовы range дают последовательность 2, 5, 8, 11?",
"options": [
"range(2, 14)",
"range(2, 14, 3)",
"range(3, 14, 3)",
"range(2, 12, 3)",
"range(1, 14, 3)",
"range(2, 15, 3)"
],
"answer": [
1,
3
],
"explain": "Правая граница не включается, поэтому подходит любое число больше последнего элемента, но не больше следующего за ним по шагу.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"нет",
"найдено 2",
"найдено 8\nнет",
"найдено 7"
],
"answer": 0,
"explain": "Ветка else цикла выполняется, только если цикл завершился без break. Программа выводит: <code>нет</code>.",
"code": "for i in range(2, 8):\n    if i == 8:\n        print('найдено', i)\n        break\nelse:\n    print('нет')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1 2 3 4",
"1 2 3 4 6 7 8 9",
"1 2 3",
"1 2 3 4 4"
],
"answer": 0,
"explain": "<code>break</code> завершает цикл полностью, <code>continue</code> пропускает остаток текущего шага. Программа выводит: <code>1 2 3 4</code>.",
"code": "for i in range(1, 10):\n    if i % 5 == 0:\n        break\n    print(i, end=' ')",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и получающийся список.",
"pairs": [
{
"left": "list(range(3, 0, -2))",
"right": "[3, 1]"
},
{
"left": "list(range(4, 0, -1))",
"right": "[4, 3, 2, 1]"
},
{
"left": "list(range(2, 9, 3))",
"right": "[2, 5, 8]"
},
{
"left": "list(range(0, 9, 3))",
"right": "[0, 3, 6]"
}
],
"explain": "range(start, stop, step): stop не включается.",
"distractors": [
"[0, 1, 2, 3]",
"[1, 2, 3]"
]
},
{
"type": "matching",
"q": "Сопоставьте фрагмент и значение s после его выполнения.",
"pairs": [
{
"left": "s = 0\nfor i in range(6):\n    s += i",
"right": "15"
},
{
"left": "s = 0\nfor i in range(1, 6 + 1):\n    s += i",
"right": "21"
},
{
"left": "s = 1\nfor i in range(1, 6):\n    s *= i",
"right": "120"
},
{
"left": "s = 0\nfor i in range(0, 6, 2):\n    s += i",
"right": "6"
}
],
"explain": "Переберите значения i и аккуратно накопите s."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[5, 7, 9, 11] 11]",
"[6, 8, 10]",
"[5, 7, 9, 11]",
"11] 9, 7, [5,"
],
"answer": 2,
"explain": "range не включает правую границу; при отрицательном шаге значения убывают. Программа выводит: <code>[5, 7, 9, 11]</code>.",
"code": "print(list(range(5, 12, 2)))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и получающийся список.",
"pairs": [
{
"left": "list(range(4))",
"right": "[0, 1, 2, 3]"
},
{
"left": "list(range(2, 9, 3))",
"right": "[2, 5, 8]"
},
{
"left": "list(range(3, 0, -2))",
"right": "[3, 1]"
},
{
"left": "list(range(4, 0, -1))",
"right": "[4, 3, 2, 1]"
}
],
"explain": "range(start, stop, step): stop не включается.",
"distractors": [
"[1, 2, 3]",
"[0, 3, 6]"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4",
"5",
"7",
"-5"
],
"answer": 1,
"explain": "<code>n % 10</code> — последняя цифра, <code>n //= 10</code> — убрать её. Цикл перебирает цифры справа налево. Программа выводит: <code>5</code>.",
"code": "n = 31230\ns = 0\nwhile n > 0:\n    s += 1\n    n //= 10\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"9",
"10",
"13",
"8"
],
"answer": 3,
"explain": "Трассируйте: проверка условия → тело → снова проверка. Цикл заканчивается, когда условие ложно. Программа выводит: <code>8</code>.",
"code": "n = 175\nc = 0\nwhile n > 0:\n    n //= 10\n    c += n % 10\nprint(c)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"35",
"-7",
"6",
"-9"
],
"answer": 3,
"explain": "Начальное значение важно: если искать максимум, начиная с 0, для отрицательных чисел ответ будет неверным. Программа выводит: <code>-9</code>.",
"code": "a = [-9, 23, 12, 7, 4, -2]\nm = a[0]\nfor x in a:\n    if x < m:\n        m = x\nprint(m)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"11",
"8",
"-6",
"6"
],
"answer": 3,
"explain": "range(a, b, step) не включает b. Переберите значения i и выполните тело цикла для каждого. Программа выводит: <code>6</code>.",
"code": "s = 0\nfor i in range(5, 15, 2):\n    s += i % 3\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"102",
"25",
"6",
"0"
],
"answer": 1,
"explain": "Начальное значение важно: если искать максимум, начиная с 0, для отрицательных чисел ответ будет неверным. Программа выводит: <code>25</code>.",
"code": "a = [19, 25, 12, 19, 25, 2]\nm = 0\nfor x in a:\n    if x > m:\n        m = x\nprint(m)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"456",
"910",
"457",
"455"
],
"answer": 3,
"explain": "range(a, b, step) не включает b. Переберите значения i и выполните тело цикла для каждого. Программа выводит: <code>455</code>.",
"code": "s = 0\nfor i in range(1, 14, 2):\n    s += i * i\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[]",
"[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1]",
"[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2]",
"[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1]"
],
"answer": 3,
"explain": "range не включает правую границу; при отрицательном шаге значения убывают. Программа выводит: <code>[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1]</code>.",
"code": "print(list(range(10, -2, -1)))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2 3 5 6 7 9",
"1 2 3 5 6 7 9",
"9 7 6 5 3 2 1",
"1 2 3 5 6 7 9 9"
],
"answer": 1,
"explain": "<code>break</code> завершает цикл полностью, <code>continue</code> пропускает остаток текущего шага. Программа выводит: <code>1 2 3 5 6 7 9</code>.",
"code": "for i in range(1, 10):\n    if i % 4 == 0:\n        continue\n    print(i, end=' ')",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте фрагмент и значение s после его выполнения.",
"pairs": [
{
"left": "s = 0\nfor i in range(7):\n    s += i",
"right": "21"
},
{
"left": "s = 0\nfor i in range(7):\n    s += 1",
"right": "7"
},
{
"left": "s = 1\nfor i in range(1, 7):\n    s *= i",
"right": "720"
},
{
"left": "s = 0\nfor i in range(1, 7 + 1):\n    s += i",
"right": "28"
}
],
"explain": "Переберите значения i и аккуратно накопите s."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"8",
"5",
"6",
"12"
],
"answer": 2,
"explain": "range(a, b, step) не включает b. Переберите значения i и выполните тело цикла для каждого. Программа выводит: <code>6</code>.",
"code": "s = 0\nfor i in range(0, 12, 2):\n    s = s + 1\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"26067",
"86928680",
"208",
"26068"
],
"answer": 3,
"explain": "<code>n % 10</code> — последняя цифра, <code>n //= 10</code> — убрать её. Цикл перебирает цифры справа налево. Программа выводит: <code>26068</code>.",
"code": "n = 86062\ns = 0\nwhile n > 0:\n    s = s * 10 + n % 10\n    n //= 10\nprint(s)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и получающийся список.",
"pairs": [
{
"left": "list(range(3, 0, -2))",
"right": "[3, 1]"
},
{
"left": "list(range(5, 5))",
"right": "[]"
},
{
"left": "list(range(1, 4))",
"right": "[1, 2, 3]"
},
{
"left": "list(range(-2, 2))",
"right": "[-2, -1, 0, 1]"
}
],
"explain": "range(start, stop, step): stop не включается.",
"distractors": [
"[0, 1, 2, 3]",
"[4, 3, 2, 1]"
]
},
{
"type": "matching",
"q": "Сопоставьте фрагмент и значение s после его выполнения.",
"pairs": [
{
"left": "s = 0\nfor i in range(1, 5 + 1):\n    s += i",
"right": "15"
},
{
"left": "s = 0\nfor i in range(5):\n    s += 1",
"right": "5"
},
{
"left": "s = 0\nfor i in range(5):\n    s += i",
"right": "10"
},
{
"left": "s = 1\nfor i in range(1, 5):\n    s *= i",
"right": "24"
}
],
"explain": "Переберите значения i и аккуратно накопите s."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"нет",
"найдено 10\nнет",
"найдено 7",
"найдено 2"
],
"answer": 0,
"explain": "Ветка else цикла выполняется, только если цикл завершился без break. Программа выводит: <code>нет</code>.",
"code": "for i in range(2, 8):\n    if i == 10:\n        print('найдено', i)\n        break\nelse:\n    print('нет')",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие фрагменты выведут ровно 5 строк(и)?",
"options": [
"for i in range(0, 10, 2): print(i)",
"for i in range(5, 0): print(i)",
"for i in range(1, 5): print(i)",
"i = 1\nwhile i < 32:\n    print(i)\n    i *= 2",
"for i in range(5): print(i)",
"for i in range(10, 0, -2): print(i)"
],
"answer": [
0,
3,
4,
5
],
"explain": "Посчитайте количество повторений тела цикла.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие вызовы range дают последовательность 2, 5, 8, 11?",
"options": [
"range(2, 14, 3)",
"range(2, 12, 3)",
"range(1, 14, 3)",
"range(2, 13, 3)",
"range(2, 14)",
"range(3, 14, 3)"
],
"answer": [
0,
1,
3
],
"explain": "Правая граница не включается, поэтому подходит любое число больше последнего элемента, но не больше следующего за ним по шагу.",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и получающийся список.",
"pairs": [
{
"left": "list(range(-2, 2))",
"right": "[-2, -1, 0, 1]"
},
{
"left": "list(range(4, 0, -1))",
"right": "[4, 3, 2, 1]"
},
{
"left": "list(range(0, 9, 3))",
"right": "[0, 3, 6]"
},
{
"left": "list(range(5, 5))",
"right": "[]"
}
],
"explain": "range(start, stop, step): stop не включается.",
"distractors": [
"[0, 1, 2, 3]",
"[1, 2, 3]"
]
},
{
"type": "multiple",
"q": "Какие вызовы range дают последовательность 0, 2, 4, 6?",
"options": [
"range(1, 8, 2)",
"range(0, 8, 2)",
"range(-1, 8, 2)",
"range(0, 9, 2)",
"range(0, 7, 2)",
"range(0, 8)"
],
"answer": [
1,
4
],
"explain": "Правая граница не включается, поэтому подходит любое число больше последнего элемента, но не больше следующего за ним по шагу.",
"codeOptions": true
},
{
"type": "single",
"q": "Сколько раз выполнится k += 1? Что выведет программа?",
"options": [
"10",
"9",
"12",
"20"
],
"answer": 0,
"explain": "Для каждого значения i внутренний цикл выполняется полностью; сложите количество повторов. Программа выводит: <code>10</code>.",
"code": "k = 0\nfor i in range(4):\n    for j in range(i + 1):\n        k += 1\nprint(k)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-6",
"12",
"6",
"7"
],
"answer": 2,
"explain": "Трассируйте: проверка условия → тело → снова проверка. Цикл заканчивается, когда условие ложно. Программа выводит: <code>6</code>.",
"code": "n = 371\nc = 0\nwhile n >= 10:\n    n //= 2\n    c += 1\nprint(c)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3",
"-1",
"0",
"1"
],
"answer": 3,
"explain": "range(a, b, step) не включает b. Переберите значения i и выполните тело цикла для каждого. Программа выводит: <code>1</code>.",
"code": "s = 0\nfor i in range(5, 7, 2):\n    s = s + 1\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Сколько раз выполнится k += 1? Что выведет программа?",
"options": [
"10",
"-6",
"5",
"6"
],
"answer": 3,
"explain": "Для каждого значения i внутренний цикл выполняется полностью; сложите количество повторов. Программа выводит: <code>6</code>.",
"code": "k = 0\nfor i in range(4):\n    for j in range(i):\n        k += 1\nprint(k)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[-5, -4, -3, -2, -1, 0,",
"[-5, -4, -3, -2, -1, 0, 1] 1]",
"[-5, -4, -3, -2, -1, 0, 1]",
"-4, -3, -2, -1, 0, 1]"
],
"answer": 2,
"explain": "range не включает правую границу; при отрицательном шаге значения убывают. Программа выводит: <code>[-5, -4, -3, -2, -1, 0, 1]</code>.",
"code": "print(list(range(-5, 2, 1)))",
"codeOptions": true
},
{
"type": "single",
"q": "Сколько раз выполнится k += 1? Что выведет программа?",
"options": [
"9",
"8",
"11",
"5"
],
"answer": 0,
"explain": "Для каждого значения i внутренний цикл выполняется полностью; сложите количество повторов. Программа выводит: <code>9</code>.",
"code": "k = 0\nfor i in range(3):\n    for j in range(i, 4):\n        k += 1\nprint(k)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"12",
"14",
"-12",
"24"
],
"answer": 0,
"explain": "Трассируйте: проверка условия → тело → снова проверка. Цикл заканчивается, когда условие ложно. Программа выводит: <code>12</code>.",
"code": "n = 396\nc = 0\nwhile n >= 10:\n    n //= 10\n    c += n % 10\nprint(c)",
"codeOptions": true
},
{
"type": "single",
"q": "Сколько раз выполнится k += 1? Что выведет программа?",
"options": [
"13",
"14",
"-14",
"28"
],
"answer": 1,
"explain": "Для каждого значения i внутренний цикл выполняется полностью; сложите количество повторов. Программа выводит: <code>14</code>.",
"code": "k = 0\nfor i in range(4):\n    for j in range(i, 5):\n        k += 1\nprint(k)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[3, 1, -1]",
"[]",
"[4, 2, 0, -2]",
"[4, 2, 0]"
],
"answer": 3,
"explain": "range не включает правую границу; при отрицательном шаге значения убывают. Программа выводит: <code>[4, 2, 0]</code>.",
"code": "print(list(range(4, -2, -2)))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"нет",
"найдено 7",
"найдено 2",
"найдено 12\nнет"
],
"answer": 0,
"explain": "Ветка else цикла выполняется, только если цикл завершился без break. Программа выводит: <code>нет</code>.",
"code": "for i in range(2, 8):\n    if i == 12:\n        print('найдено', i)\n        break\nelse:\n    print('нет')",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и получающийся список.",
"pairs": [
{
"left": "list(range(-2, 2))",
"right": "[-2, -1, 0, 1]"
},
{
"left": "list(range(1, 4))",
"right": "[1, 2, 3]"
},
{
"left": "list(range(4, 0, -1))",
"right": "[4, 3, 2, 1]"
},
{
"left": "list(range(2, 9, 3))",
"right": "[2, 5, 8]"
}
],
"explain": "range(start, stop, step): stop не включается.",
"distractors": [
"[0, 1, 2, 3]",
"[0, 3, 6]"
]
},
{
"type": "multiple",
"q": "Какие фрагменты выведут ровно 5 строк(и)?",
"options": [
"i = 5\nwhile i > 0:\n    print(i)\n    i -= 2",
"for i in range(10, 0, -2): print(i)",
"for i in range(1, 5): print(i)",
"for i in range(0, 10, 2): print(i)",
"i = 1\nwhile i < 32:\n    print(i)\n    i *= 2",
"for i in range(5, 0): print(i)"
],
"answer": [
1,
3,
4
],
"explain": "Посчитайте количество повторений тела цикла.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"найдено 2",
"найдено 7",
"найдено 12\nнет",
"нет"
],
"answer": 3,
"explain": "Ветка else цикла выполняется, только если цикл завершился без break. Программа выводит: <code>нет</code>.",
"code": "for i in range(2, 8):\n    if i == 12:\n        print('найдено', i)\n        break\nelse:\n    print('нет')",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и получающийся список.",
"pairs": [
{
"left": "list(range(2, 9, 3))",
"right": "[2, 5, 8]"
},
{
"left": "list(range(-2, 2))",
"right": "[-2, -1, 0, 1]"
},
{
"left": "list(range(0, 9, 3))",
"right": "[0, 3, 6]"
},
{
"left": "list(range(3, 0, -2))",
"right": "[3, 1]"
}
],
"explain": "range(start, stop, step): stop не включается.",
"distractors": [
"[0, 1, 2, 3]",
"[1, 2, 3]"
]
},
{
"type": "multiple",
"q": "Какие вызовы range дают последовательность 4, 7, 10, 13?",
"options": [
"range(4, 13, 3)",
"range(4, 16, 3)",
"range(3, 16, 3)",
"range(4, 17, 3)",
"range(4, 16)",
"range(4, 14, 3)"
],
"answer": [
1,
5
],
"explain": "Правая граница не включается, поэтому подходит любое число больше последнего элемента, но не больше следующего за ним по шагу.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие фрагменты выведут ровно 5 строк(и)?",
"options": [
"for i in range(0, 10, 2): print(i)",
"i = 0\nwhile i < 5:\n    print(i)\n    i += 1",
"i = 5\nwhile i > 0:\n    print(i)\n    i -= 2",
"for i in range(10, 0, -2): print(i)",
"for i in range(5): print(i)",
"for i in range(1, 5): print(i)"
],
"answer": [
0,
1,
3,
4
],
"explain": "Посчитайте количество повторений тела цикла.",
"codeOptions": true
}
],
"m4": [
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[3.14]",
"[3.14159]",
"]95141.3[",
"[3.14159"
],
"answer": 1,
"explain": "<code>.2f</code> — 2 знака после точки; число — ширина поля; &lt; ^ &gt; — выравнивание; 0 перед шириной — дополнение нулями. Программа выводит: <code>[3.14159]</code>.",
"code": "x = 3.14159\nprint(f'[{x:<5}]')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"м",
"Ошибка",
"п",
"а"
],
"answer": 3,
"explain": "Индексы начинаются с 0; отрицательный индекс −1 — последний символ. Программа выводит: <code>а</code>.",
"code": "s = 'программа'\nprint(s[-1])",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"B",
"90",
"48",
"65"
],
"answer": 2,
"explain": "Коды: 'A' = 65, 'a' = 97, '0' = 48; chr — обратная к ord.",
"code": "ord('0')",
"codeOptions": true
},
{
"type": "single",
"q": "Что произойдёт при выполнении s[0] = 'X', если s — строка?",
"options": [
"ошибка TypeError: строки неизменяемы",
"ничего не произойдёт",
"в начало добавится X",
"первый символ заменится на X"
],
"answer": 0,
"explain": "Строку нельзя изменить по индексу — создают новую: s = 'X' + s[1:]."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"]543.21[",
"[12.35]",
"Ошибка",
"[12.345]"
],
"answer": 3,
"explain": "<code>.2f</code> — 2 знака после точки; число — ширина поля; &lt; ^ &gt; — выравнивание; 0 перед шириной — дополнение нулями. Программа выводит: <code>[12.345]</code>.",
"code": "x = 12.345\nprint(f'[{x:5}]')",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте форматирование и результат.",
"pairs": [
{
"left": "f'{2.5:.0f}'",
"right": "'2'"
},
{
"left": "f'{7:03}'",
"right": "'007'"
},
{
"left": "f'{5:>4}'",
"right": "'   5'"
},
{
"left": "f'{3.14159:.2f}'",
"right": "'3.14'"
}
],
"explain": ".2f — 2 знака после точки, :03 — ширина 3 с нулями, :b — двоичная, :x — шестнадцатеричная запись.",
"distractors": [
"'5   |'",
"'1,234,567'"
]
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"97",
"48",
"B",
"25"
],
"answer": 3,
"explain": "Коды: 'A' = 65, 'a' = 97, '0' = 48; chr — обратная к ord.",
"code": "ord('Z') - ord('A')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"235",
"+=",
"2+3=5",
"5"
],
"answer": 0,
"explain": "Цикл for c in s перебирает символы строки по одному слева направо. Программа выводит: <code>235</code>.",
"code": "s = '2+3=5'\nt = ''\nfor i in range(0, len(s), 2):\n    t += s[i]\nprint(t)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"pytho",
"ho",
"python",
"on"
],
"answer": 0,
"explain": "Срез s[a:b:k] берёт символы с индекса a до b (не включая b) с шагом k. Программа выводит: <code>pytho</code>.",
"code": "s = 'python'\nprint(s[:5])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"thon",
"hon",
"yth",
"tho"
],
"answer": 0,
"explain": "Срез s[a:b:k] берёт символы с индекса a до b (не включая b) с шагом k. Программа выводит: <code>thon</code>.",
"code": "s = 'python'\nprint(s[2:])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[7.0]",
"[00007]",
"[7]",
"[7.00]"
],
"answer": 0,
"explain": "<code>.2f</code> — 2 знака после точки; число — ширина поля; &lt; ^ &gt; — выравнивание; 0 перед шириной — дополнение нулями. Программа выводит: <code>[7.0]</code>.",
"code": "x = 7\nprint(f'[{x:.1f}]')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"i",
"r",
"a",
"Ошибка"
],
"answer": 2,
"explain": "Индексы начинаются с 0; отрицательный индекс −1 — последний символ. Программа выводит: <code>a</code>.",
"code": "s = 'variable'\nprint(s[-4])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4d3c2b1a",
"a1b2c3d4",
"8",
"10"
],
"answer": 3,
"explain": "Цикл for c in s перебирает символы строки по одному слева направо. Программа выводит: <code>10</code>.",
"code": "s = 'a1b2c3d4'\nk = 0\nfor c in s:\n    if c.isdigit():\n        k += int(c)\nprint(k)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[7.0]",
"[7.00]",
"[    7]",
"[7]"
],
"answer": 0,
"explain": "<code>.2f</code> — 2 знака после точки; число — ширина поля; &lt; ^ &gt; — выравнивание; 0 перед шириной — дополнение нулями. Программа выводит: <code>[7.0]</code>.",
"code": "x = 7\nprint(f'[{x:.1f}]')",
"codeOptions": true
},
{
"type": "single",
"q": "Как получить строку s в обратном порядке?",
"options": [
"reversed(s)",
"s.reverse()",
"s[::-1]",
"s[-1]"
],
"answer": 2,
"explain": "Срез с шагом −1. Метода reverse у строк нет, reversed возвращает итератор."
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"B",
"2",
"48",
"90"
],
"answer": 1,
"explain": "Коды: 'A' = 65, 'a' = 97, '0' = 48; chr — обратная к ord.",
"code": "ord('b') - ord('a') + 1",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Hello World",
"HloWrd",
"11",
"el ol"
],
"answer": 1,
"explain": "Цикл for c in s перебирает символы строки по одному слева направо. Программа выводит: <code>HloWrd</code>.",
"code": "s = 'Hello World'\nt = ''\nfor i in range(0, len(s), 2):\n    t += s[i]\nprint(t)",
"codeOptions": true
},
{
"type": "single",
"q": "Какой метод разбивает строку на список слов по пробелам?",
"options": [
"partition()",
"join()",
"strip()",
"split()"
],
"answer": 3,
"explain": "split() без аргумента делит по любым пробельным символам."
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"B",
"97",
"b",
"48"
],
"answer": 0,
"explain": "Коды: 'A' = 65, 'a' = 97, '0' = 48; chr — обратная к ord.",
"code": "chr(66)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[1000.0]",
"[1000 ]",
"[ 1000]",
"[ 1000  ]"
],
"answer": 1,
"explain": "<code>.2f</code> — 2 знака после точки; число — ширина поля; &lt; ^ &gt; — выравнивание; 0 перед шириной — дополнение нулями. Программа выводит: <code>[1000 ]</code>.",
"code": "x = 1000\nprint(f'[{x:<5}]')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"False",
"1",
"A,B,,C"
],
"answer": 1,
"explain": "Методы строк не изменяют исходную строку, а возвращают новый результат; find возвращает −1, если подстроки нет, а index — ошибку. Программа выводит: <code>False</code>.",
"code": "s = 'a,b,,c'\nprint(s.isdigit())",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие утверждения истинны (выражение равно True)?",
"options": [
"'a b c'.split() == ['a', 'b', 'c']",
"'1.5'.isdigit()",
"len(' ab ') == 2",
"'hello'.find('z') == -1",
"'abc' * 2 == 'abcabc'",
"'aaa'.count('aa') == 2"
],
"answer": [
0,
3,
4
],
"explain": "count считает непересекающиеся вхождения ('aaa'.count('aa') = 1); isdigit для '1.5' — False (есть точка); срез за пределами строки даёт пустую строку, а не ошибку.",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "'banana'.title()",
"right": "Banana"
},
{
"left": "'banana'[::-1]",
"right": "ananab"
},
{
"left": "'banana'.rfind('n')",
"right": "4"
},
{
"left": "'banana'.upper()",
"right": "BANANA"
}
],
"explain": "find — первое вхождение, rfind — последнее, replace заменяет все вхождения.",
"distractors": [
"3",
"2"
]
},
{
"type": "multiple",
"q": "Дана строка s = 'algorithm'. Какие срезы равны 'gor'?",
"options": [
"s[-7:-4]",
"s[1:4]",
"s[2:-4]",
"s[2:5]",
"s[2:4]",
"s[3:6]"
],
"answer": [
0,
2,
3
],
"explain": "Отрицательный индекс −k означает len(s) − k; правая граница среза не включается.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"а",
"0",
"М",
"м"
],
"answer": 3,
"explain": "Индексы начинаются с 0; отрицательный индекс −1 — последний символ. Программа выводит: <code>м</code>.",
"code": "s = 'программа'\nprint(s[-2])",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "'banana'.find('n')",
"right": "2"
},
{
"left": "'banana'[::-1]",
"right": "ananab"
},
{
"left": "'banana'.replace('an', '-')",
"right": "b--a"
},
{
"left": "len('banana')",
"right": "6"
}
],
"explain": "find — первое вхождение, rfind — последнее, replace заменяет все вхождения.",
"distractors": [
"3",
"4"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5",
"5=3+2",
"2+3=5",
"10"
],
"answer": 3,
"explain": "Цикл for c in s перебирает символы строки по одному слева направо. Программа выводит: <code>10</code>.",
"code": "s = '2+3=5'\nk = 0\nfor c in s:\n    if c.isdigit():\n        k += int(c)\nprint(k)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте форматирование и результат.",
"pairs": [
{
"left": "f'{42:b}'",
"right": "'101010'"
},
{
"left": "f'{3.14159:.2f}'",
"right": "'3.14'"
},
{
"left": "f'{255:x}'",
"right": "'ff'"
},
{
"left": "f'{5:>4}'",
"right": "'   5'"
}
],
"explain": ".2f — 2 знака после точки, :03 — ширина 3 с нулями, :b — двоичная, :x — шестнадцатеричная запись.",
"distractors": [
"'007'",
"'5   |'"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"МАМА МЫЛА РАМУ",
"-1",
"Мама Мыла Раму",
"мама мыла раму"
],
"answer": 3,
"explain": "Методы строк не изменяют исходную строку, а возвращают новый результат; find возвращает −1, если подстроки нет, а index — ошибку. Программа выводит: <code>мама мыла раму</code>.",
"code": "s = 'мама мыла раму'\nprint(s.replace('a', '*'))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие операции допустимы со строками в Python?",
"options": [
"проверка вхождения 'a' in 'cat'",
"сложение 'a' + 'b'",
"изменение символа s[0] = 'z'",
"вычитание 'abc' - 'c'",
"умножение на целое 'a' * 3"
],
"answer": [
0,
1,
4
],
"explain": "Строки складываются и умножаются на целое, но неизменяемы и не вычитаются."
},
{
"type": "multiple",
"q": "Дана строка s = 'keyboard'. Какие срезы равны 'eyb'?",
"options": [
"s[0:3]",
"s[1:3]",
"s[1:4:1]",
"s[-7:-4]",
"s[1:-4]",
"s[1:5]"
],
"answer": [
2,
3,
4
],
"explain": "Отрицательный индекс −k означает len(s) − k; правая граница среза не включается.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"assi",
"s",
"mass",
"as"
],
"answer": 3,
"explain": "Срез s[a:b:k] берёт символы с индекса a до b (не включая b) с шагом k. Программа выводит: <code>as</code>.",
"code": "s = 'massiv'\nprint(s[1:4:2])",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие утверждения истинны (выражение равно True)?",
"options": [
"'12'.isdigit()",
"'hello'.find('z') == -1",
"'Hello'.lower() == 'Hello'",
"'abc' * 2 == 'abcabc'",
"'Python'[10:] == ''",
"'aaa'.count('aa') == 2"
],
"answer": [
0,
1,
3,
4
],
"explain": "count считает непересекающиеся вхождения ('aaa'.count('aa') = 1); isdigit для '1.5' — False (есть точка); срез за пределами строки даёт пустую строку, а не ошибку.",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "'banana'.count('a')",
"right": "3"
},
{
"left": "'banana'.upper()",
"right": "BANANA"
},
{
"left": "len('banana')",
"right": "6"
},
{
"left": "'banana'.title()",
"right": "Banana"
}
],
"explain": "find — первое вхождение, rfind — последнее, replace заменяет все вхождения.",
"distractors": [
"2",
"4"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"ABRACADABRA",
"Abracadabra",
"0",
"-1"
],
"answer": 0,
"explain": "Методы строк не изменяют исходную строку, а возвращают новый результат; find возвращает −1, если подстроки нет, а index — ошибку. Программа выводит: <code>ABRACADABRA</code>.",
"code": "s = 'abracadabra'\nprint(s.upper())",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"6",
"Ошибка",
"-1",
"Banana"
],
"answer": 0,
"explain": "Методы строк не изменяют исходную строку, а возвращают новый результат; find возвращает −1, если подстроки нет, а index — ошибку. Программа выводит: <code>6</code>.",
"code": "s = 'Banana'\nprint(len(s))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте форматирование и результат.",
"pairs": [
{
"left": "f'{255:x}'",
"right": "'ff'"
},
{
"left": "f'{42:b}'",
"right": "'101010'"
},
{
"left": "f'{5:>4}'",
"right": "'   5'"
},
{
"left": "f'{7:03}'",
"right": "'007'"
}
],
"explain": ".2f — 2 знака после точки, :03 — ширина 3 с нулями, :b — двоичная, :x — шестнадцатеричная запись.",
"distractors": [
"'3.14'",
"'5   |'"
]
},
{
"type": "multiple",
"q": "Дана строка s = 'keyboard'. Какие срезы равны 'boa'?",
"options": [
"s[3:5]",
"s[3:-2]",
"s[-5:-2]",
"s[4:7]",
"s[3:6]",
"s[3:6:1]"
],
"answer": [
1,
2,
4,
5
],
"explain": "Отрицательный индекс −k означает len(s) − k; правая граница среза не включается.",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"97",
"c",
"65",
"B"
],
"answer": 2,
"explain": "Коды: 'A' = 65, 'a' = 97, '0' = 48; chr — обратная к ord.",
"code": "ord('A')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"mass",
"issam",
"massi"
],
"answer": 3,
"explain": "Срез s[a:b:k] берёт символы с индекса a до b (не включая b) с шагом k. Программа выводит: <code>massi</code>.",
"code": "s = 'massiv'\nprint(s[0:-1])",
"codeOptions": true
},
{
"type": "multiple",
"q": "Дана строка s = 'keyboard'. Какие срезы равны 'oar'?",
"options": [
"s[4:8]",
"s[5:8]",
"s[4:7:1]",
"s[3:6]",
"s[4:-1]",
"s[4:7]"
],
"answer": [
2,
4,
5
],
"explain": "Отрицательный индекс −k означает len(s) − k; правая граница среза не включается.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Дана строка s = 'algorithm'. Какие срезы равны 'gor'?",
"options": [
"s[2:6]",
"s[2:-4]",
"s[-7:-4]",
"s[2:4]",
"s[1:4]",
"s[2:5:1]"
],
"answer": [
1,
2,
5
],
"explain": "Отрицательный индекс −k означает len(s) − k; правая граница среза не включается.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие утверждения истинны (выражение равно True)?",
"options": [
"'abc'.upper() == 'ABC'",
"'Hello'.lower() == 'Hello'",
"len(' ab ') == 2",
"'abc' * 2 == 'abcabc'",
"'abc'[::-1] == 'cba'",
"'12'.isdigit()"
],
"answer": [
0,
3,
4,
5
],
"explain": "count считает непересекающиеся вхождения ('aaa'.count('aa') = 1); isdigit для '1.5' — False (есть точка); срез за пределами строки даёт пустую строку, а не ошибку.",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "'banana'.replace('an', '-')",
"right": "b--a"
},
{
"left": "'banana'.index('b')",
"right": "0"
},
{
"left": "'banana'.title()",
"right": "Banana"
},
{
"left": "'banana'.upper()",
"right": "BANANA"
}
],
"explain": "find — первое вхождение, rfind — последнее, replace заменяет все вхождения.",
"distractors": [
"3",
"2"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[ -0.5  ]",
"[ -0.5]",
"[-0.5]",
"[-0.50]"
],
"answer": 2,
"explain": "<code>.2f</code> — 2 знака после точки; число — ширина поля; &lt; ^ &gt; — выравнивание; 0 перед шириной — дополнение нулями. Программа выводит: <code>[-0.5]</code>.",
"code": "x = -0.5\nprint(f'[{x:.1f}]')",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"65",
"B",
"48",
"97"
],
"answer": 0,
"explain": "Коды: 'A' = 65, 'a' = 97, '0' = 48; chr — обратная к ord.",
"code": "ord('A')",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте форматирование и результат.",
"pairs": [
{
"left": "f'{42:b}'",
"right": "'101010'"
},
{
"left": "f'{1234567:,}'",
"right": "'1,234,567'"
},
{
"left": "f'{5:<4}|'",
"right": "'5   |'"
},
{
"left": "f'{2.5:.0f}'",
"right": "'2'"
}
],
"explain": ".2f — 2 знака после точки, :03 — ширина 3 с нулями, :b — двоичная, :x — шестнадцатеричная запись.",
"distractors": [
"'007'",
"'3.14'"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"]1.3[",
"None",
"[3.1]"
],
"answer": 3,
"explain": "<code>.2f</code> — 2 знака после точки; число — ширина поля; &lt; ^ &gt; — выравнивание; 0 перед шириной — дополнение нулями. Программа выводит: <code>[3.1]</code>.",
"code": "x = 3.14159\nprint(f'[{x:.1f}]')",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"B",
"48",
"65",
"b"
],
"answer": 1,
"explain": "Коды: 'A' = 65, 'a' = 97, '0' = 48; chr — обратная к ord.",
"code": "ord('0')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"v",
"i",
"m"
],
"answer": 1,
"explain": "Индексы начинаются с 0; отрицательный индекс −1 — последний символ. Программа выводит: <code>v</code>.",
"code": "s = 'massiv'\nprint(s[5])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0",
"10",
"ABRACADABRA",
"-1"
],
"answer": 0,
"explain": "Методы строк не изменяют исходную строку, а возвращают новый результат; find возвращает −1, если подстроки нет, а index — ошибку. Программа выводит: <code>0</code>.",
"code": "s = 'abracadabra'\nprint(s.find('a'))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "'banana'.upper()",
"right": "BANANA"
},
{
"left": "'banana'.rfind('n')",
"right": "4"
},
{
"left": "'banana'.find('n')",
"right": "2"
},
{
"left": "'banana'.title()",
"right": "Banana"
}
],
"explain": "find — первое вхождение, rfind — последнее, replace заменяет все вхождения.",
"distractors": [
"3",
"b--a"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0",
"Hello World",
"11",
"dlroW olleH"
],
"answer": 0,
"explain": "Цикл for c in s перебирает символы строки по одному слева направо. Программа выводит: <code>0</code>.",
"code": "s = 'Hello World'\nk = 0\nfor c in s:\n    if c.isdigit():\n        k += int(c)\nprint(k)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"monitor",
"rotinom",
"oni"
],
"answer": 2,
"explain": "Срез s[a:b:k] берёт символы с индекса a до b (не включая b) с шагом k. Программа выводит: <code>rotinom</code>.",
"code": "s = 'monitor'\nprint(s[::-1])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"p",
"t",
"h"
],
"answer": 2,
"explain": "Индексы начинаются с 0; отрицательный индекс −1 — последний символ. Программа выводит: <code>t</code>.",
"code": "s = 'python'\nprint(s[-4])",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте форматирование и результат.",
"pairs": [
{
"left": "f'{5:>4}'",
"right": "'   5'"
},
{
"left": "f'{3.14159:.2f}'",
"right": "'3.14'"
},
{
"left": "'{} + {}'.format(2, 3)",
"right": "'2 + 3'"
},
{
"left": "f'{7:03}'",
"right": "'007'"
}
],
"explain": ".2f — 2 знака после точки, :03 — ширина 3 с нулями, :b — двоичная, :x — шестнадцатеричная запись.",
"distractors": [
"'5   |'",
"'2'"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"ком",
"ом",
"комп",
"мп"
],
"answer": 0,
"explain": "Срез s[a:b:k] берёт символы с индекса a до b (не включая b) с шагом k. Программа выводит: <code>ком</code>.",
"code": "s = 'компьютер'\nprint(s[:3])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"['Hello,', 'World']",
"Hello, World",
"12"
],
"answer": 1,
"explain": "Методы строк не изменяют исходную строку, а возвращают новый результат; find возвращает −1, если подстроки нет, а index — ошибку. Программа выводит: <code>['Hello,', 'World']</code>.",
"code": "s = 'Hello, World'\nprint(s.split())",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "len('banana')",
"right": "6"
},
{
"left": "'banana'.index('b')",
"right": "0"
},
{
"left": "'banana'.rfind('n')",
"right": "4"
},
{
"left": "'banana'.upper()",
"right": "BANANA"
}
],
"explain": "find — первое вхождение, rfind — последнее, replace заменяет все вхождения.",
"distractors": [
"3",
"2"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"ифраиа",
"ифраи",
"фраиа",
"информа"
],
"answer": 0,
"explain": "Срез s[a:b:k] берёт символы с индекса a до b (не включая b) с шагом k. Программа выводит: <code>ифраиа</code>.",
"code": "s = 'информатика'\nprint(s[::2])",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"65",
"90",
"B",
"c"
],
"answer": 3,
"explain": "Коды: 'A' = 65, 'a' = 97, '0' = 48; chr — обратная к ord.",
"code": "chr(ord('a') + 2)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Дана строка s = 'informatics'. Какие срезы равны 'orm'?",
"options": [
"s[3:7]",
"s[3:-5]",
"s[3:6:1]",
"s[3:6]",
"s[-8:-5]",
"s[4:7]"
],
"answer": [
1,
2,
3,
4
],
"explain": "Отрицательный индекс −k означает len(s) − k; правая граница среза не включается.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие утверждения истинны (выражение равно True)?",
"options": [
"'aaa'.count('aa') == 2",
"'ab'.replace('b', '') == 'a'",
"'hello'.find('z') == -1",
"'-'.join('abc') == 'a-b-c'",
"len(' ab ') == 2",
"'Hello'.lower() == 'Hello'"
],
"answer": [
1,
2,
3
],
"explain": "count считает непересекающиеся вхождения ('aaa'.count('aa') = 1); isdigit для '1.5' — False (есть точка); срез за пределами строки даёт пустую строку, а не ошибку.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Дана строка s = 'informatics'. Какие срезы равны 'rma'?",
"options": [
"s[4:7:1]",
"s[4:-4]",
"s[4:7]",
"s[-7:-4]",
"s[4:8]",
"s[5:8]"
],
"answer": [
0,
1,
2,
3
],
"explain": "Отрицательный индекс −k означает len(s) − k; правая граница среза не включается.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"keybo",
"keyb",
"eyb",
"ybo"
],
"answer": 1,
"explain": "Срез s[a:b:k] берёт символы с индекса a до b (не включая b) с шагом k. Программа выводит: <code>keyb</code>.",
"code": "s = 'keyboard'\nprint(s[:4])",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте форматирование и результат.",
"pairs": [
{
"left": "f'{0.25:.0%}'",
"right": "'25%'"
},
{
"left": "f'{2.5:.0f}'",
"right": "'2'"
},
{
"left": "f'{3.14159:.2f}'",
"right": "'3.14'"
},
{
"left": "f'{255:x}'",
"right": "'ff'"
}
],
"explain": ".2f — 2 знака после точки, :03 — ширина 3 с нулями, :b — двоичная, :x — шестнадцатеричная запись.",
"distractors": [
"'007'",
"'   5'"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"[12.345]",
"[12.345",
"12.345]"
],
"answer": 1,
"explain": "<code>.2f</code> — 2 знака после точки; число — ширина поля; &lt; ^ &gt; — выравнивание; 0 перед шириной — дополнение нулями. Программа выводит: <code>[12.345]</code>.",
"code": "x = 12.345\nprint(f'[{x:05}]')",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие методы возвращают число?",
"options": [
"index",
"replace",
"count",
"split",
"find",
"upper"
],
"answer": [
0,
2,
4
],
"explain": "count, find, index возвращают int; остальные — строки или списки."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5=3+2",
"2+3=",
"+3=5",
"2+3=5"
],
"answer": 3,
"explain": "Цикл for c in s перебирает символы строки по одному слева направо. Программа выводит: <code>2+3=5</code>.",
"code": "s = '2+3=5'\nt = ''\nfor c in s:\n    if c not in t:\n        t += c\nprint(t)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Дана строка s = 'keyboard'. Какие срезы равны 'eyb'?",
"options": [
"s[1:5]",
"s[1:3]",
"s[-7:-4]",
"s[2:5]",
"s[1:4:1]",
"s[1:4]"
],
"answer": [
2,
4,
5
],
"explain": "Отрицательный индекс −k означает len(s) − k; правая граница среза не включается.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"a1b2c3d4",
"4d3c2b1a",
"8",
"10"
],
"answer": 3,
"explain": "Цикл for c in s перебирает символы строки по одному слева направо. Программа выводит: <code>10</code>.",
"code": "s = 'a1b2c3d4'\nk = 0\nfor c in s:\n    if c.isdigit():\n        k += int(c)\nprint(k)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"d3c2b1a",
"a1b2c3d4",
"4d3c2b1a",
"4d3c2b1"
],
"answer": 2,
"explain": "Цикл for c in s перебирает символы строки по одному слева направо. Программа выводит: <code>4d3c2b1a</code>.",
"code": "s = 'a1b2c3d4'\nt = ''\nfor c in s:\n    t = c + t\nprint(t)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"лгорит",
"алгорит",
"мтирогл",
"лгоритм"
],
"answer": 3,
"explain": "Срез s[a:b:k] берёт символы с индекса a до b (не включая b) с шагом k. Программа выводит: <code>лгоритм</code>.",
"code": "s = 'алгоритм'\nprint(s[1:])",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте форматирование и результат.",
"pairs": [
{
"left": "f'{7:03}'",
"right": "'007'"
},
{
"left": "f'{42:b}'",
"right": "'101010'"
},
{
"left": "f'{2.5:.0f}'",
"right": "'2'"
},
{
"left": "f'{5:>4}'",
"right": "'   5'"
}
],
"explain": ".2f — 2 знака после точки, :03 — ширина 3 с нулями, :b — двоичная, :x — шестнадцатеричная запись.",
"distractors": [
"'3.14'",
"'5   |'"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"iabl",
"riabl",
"iable",
"abl"
],
"answer": 0,
"explain": "Срез s[a:b:k] берёт символы с индекса a до b (не включая b) с шагом k. Программа выводит: <code>iabl</code>.",
"code": "s = 'variable'\nprint(s[3:-1])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5=3+",
"None",
"2+3=5",
"5=3+2"
],
"answer": 3,
"explain": "Цикл for c in s перебирает символы строки по одному слева направо. Программа выводит: <code>5=3+2</code>.",
"code": "s = '2+3=5'\nt = ''\nfor c in s:\n    t = c + t\nprint(t)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "'banana'.rfind('n')",
"right": "4"
},
{
"left": "'banana'[::-1]",
"right": "ananab"
},
{
"left": "'banana'.title()",
"right": "Banana"
},
{
"left": "'banana'[1:4]",
"right": "ana"
}
],
"explain": "find — первое вхождение, rfind — последнее, replace заменяет все вхождения.",
"distractors": [
"3",
"2"
]
},
{
"type": "multiple",
"q": "Какие утверждения истинны (выражение равно True)?",
"options": [
"'12'.isdigit()",
"len(' ab ') == 2",
"'aaa'.count('aa') == 2",
"'a b c'.split() == ['a', 'b', 'c']",
"'abc'[::-1] == 'cba'",
"'abc'.upper() == 'ABC'"
],
"answer": [
0,
3,
4,
5
],
"explain": "count считает непересекающиеся вхождения ('aaa'.count('aa') = 1); isdigit для '1.5' — False (есть точка); срез за пределами строки даёт пустую строку, а не ошибку.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие утверждения истинны (выражение равно True)?",
"options": [
"'-'.join('abc') == 'a-b-c'",
"len(' ab ') == 2",
"'1.5'.isdigit()",
"'12'.isdigit()",
"'abc'.upper() == 'ABC'",
"'aaa'.count('aa') == 2"
],
"answer": [
0,
3,
4
],
"explain": "count считает непересекающиеся вхождения ('aaa'.count('aa') = 1); isdigit для '1.5' — False (есть точка); срез за пределами строки даёт пустую строку, а не ошибку.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-1",
"one two three",
"One Two Three",
"['one', 'two', 'three']"
],
"answer": 3,
"explain": "Методы строк не изменяют исходную строку, а возвращают новый результат; find возвращает −1, если подстроки нет, а index — ошибку. Программа выводит: <code>['one', 'two', 'three']</code>.",
"code": "s = 'one two three'\nprint(s.split())",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "'banana'.rfind('n')",
"right": "4"
},
{
"left": "'banana'.replace('an', '-')",
"right": "b--a"
},
{
"left": "'banana'[::-1]",
"right": "ananab"
},
{
"left": "'banana'[1:4]",
"right": "ana"
}
],
"explain": "find — первое вхождение, rfind — последнее, replace заменяет все вхождения.",
"distractors": [
"3",
"2"
]
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "'banana'.rfind('n')",
"right": "4"
},
{
"left": "'banana'.index('b')",
"right": "0"
},
{
"left": "'banana'.find('n')",
"right": "2"
},
{
"left": "'banana'.upper()",
"right": "BANANA"
}
],
"explain": "find — первое вхождение, rfind — последнее, replace заменяет все вхождения.",
"distractors": [
"3",
"b--a"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3.1]",
"[3.14159]",
"[3.1]",
"[3.1"
],
"answer": 2,
"explain": "<code>.2f</code> — 2 знака после точки; число — ширина поля; &lt; ^ &gt; — выравнивание; 0 перед шириной — дополнение нулями. Программа выводит: <code>[3.1]</code>.",
"code": "x = 3.14159\nprint(f'[{x:.1f}]')",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте форматирование и результат.",
"pairs": [
{
"left": "f'{1234567:,}'",
"right": "'1,234,567'"
},
{
"left": "'{} + {}'.format(2, 3)",
"right": "'2 + 3'"
},
{
"left": "f'{5:<4}|'",
"right": "'5   |'"
},
{
"left": "f'{2.5:.0f}'",
"right": "'2'"
}
],
"explain": ".2f — 2 знака после точки, :03 — ширина 3 с нулями, :b — двоичная, :x — шестнадцатеричная запись.",
"distractors": [
"'007'",
"'3.14'"
]
},
{
"type": "multiple",
"q": "Какие утверждения истинны (выражение равно True)?",
"options": [
"'-'.join('abc') == 'a-b-c'",
"'a b c'.split() == ['a', 'b', 'c']",
"'aaa'.count('aa') == 2",
"'1.5'.isdigit()",
"'Hello'.lower() == 'Hello'",
"'abc' * 2 == 'abcabc'"
],
"answer": [
0,
1,
5
],
"explain": "count считает непересекающиеся вхождения ('aaa'.count('aa') = 1); isdigit для '1.5' — False (есть точка); срез за пределами строки даёт пустую строку, а не ошибку.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"а",
"к",
"и",
"Ошибка"
],
"answer": 0,
"explain": "Индексы начинаются с 0; отрицательный индекс −1 — последний символ. Программа выводит: <code>а</code>.",
"code": "s = 'информатика'\nprint(s[-1])",
"codeOptions": true
},
{
"type": "multiple",
"q": "Дана строка s = 'keyboard'. Какие срезы равны 'ybo'?",
"options": [
"s[3:6]",
"s[2:5:1]",
"s[-6:-3]",
"s[2:6]",
"s[2:-3]",
"s[2:4]"
],
"answer": [
1,
2,
4
],
"explain": "Отрицательный индекс −k означает len(s) − k; правая граница среза не включается.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"e",
"l",
"Ошибка",
"b"
],
"answer": 0,
"explain": "Индексы начинаются с 0; отрицательный индекс −1 — последний символ. Программа выводит: <code>e</code>.",
"code": "s = 'variable'\nprint(s[-1])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Hello, World",
"Hello, world",
"-1",
"['Hello,', 'World']"
],
"answer": 1,
"explain": "Методы строк не изменяют исходную строку, а возвращают новый результат; find возвращает −1, если подстроки нет, а index — ошибку. Программа выводит: <code>Hello, world</code>.",
"code": "s = 'Hello, World'\nprint(s.capitalize())",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"r",
"v",
"i",
"Ошибка"
],
"answer": 0,
"explain": "Индексы начинаются с 0; отрицательный индекс −1 — последний символ. Программа выводит: <code>r</code>.",
"code": "s = 'variable'\nprint(s[2])",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "'banana'.replace('an', '-')",
"right": "b--a"
},
{
"left": "'banana'.title()",
"right": "Banana"
},
{
"left": "'banana'.index('b')",
"right": "0"
},
{
"left": "'banana'.upper()",
"right": "BANANA"
}
],
"explain": "find — первое вхождение, rfind — последнее, replace заменяет все вхождения.",
"distractors": [
"3",
"2"
]
},
{
"type": "multiple",
"q": "Какие утверждения истинны (выражение равно True)?",
"options": [
"'1.5'.isdigit()",
"'aaa'.count('aa') == 2",
"'12'.isdigit()",
"'abc' * 2 == 'abcabc'",
"'a b c'.split() == ['a', 'b', 'c']",
"'Hello'.lower() == 'Hello'"
],
"answer": [
2,
3,
4
],
"explain": "count считает непересекающиеся вхождения ('aaa'.count('aa') = 1); isdigit для '1.5' — False (есть точка); срез за пределами строки даёт пустую строку, а не ошибку.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0",
"Ошибка",
"2025-11-17",
"-1"
],
"answer": 2,
"explain": "Методы строк не изменяют исходную строку, а возвращают новый результат; find возвращает −1, если подстроки нет, а index — ошибку. Программа выводит: <code>2025-11-17</code>.",
"code": "s = '2025-11-17'\nprint(s.lower())",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте форматирование и результат.",
"pairs": [
{
"left": "f'{3.14159:.2f}'",
"right": "'3.14'"
},
{
"left": "f'{5:<4}|'",
"right": "'5   |'"
},
{
"left": "f'{7:03}'",
"right": "'007'"
},
{
"left": "f'{42:b}'",
"right": "'101010'"
}
],
"explain": ".2f — 2 знака после точки, :03 — ширина 3 с нулями, :b — двоичная, :x — шестнадцатеричная запись.",
"distractors": [
"'   5'",
"'2'"
]
},
{
"type": "matching",
"q": "Сопоставьте форматирование и результат.",
"pairs": [
{
"left": "f'{1234567:,}'",
"right": "'1,234,567'"
},
{
"left": "f'{5:>4}'",
"right": "'   5'"
},
{
"left": "f'{0.25:.0%}'",
"right": "'25%'"
},
{
"left": "f'{3.14159:.2f}'",
"right": "'3.14'"
}
],
"explain": ".2f — 2 знака после точки, :03 — ширина 3 с нулями, :b — двоичная, :x — шестнадцатеричная запись.",
"distractors": [
"'007'",
"'5   |'"
]
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"90",
"6",
"b",
"97"
],
"answer": 1,
"explain": "Коды: 'A' = 65, 'a' = 97, '0' = 48; chr — обратная к ord.",
"code": "chr(ord('5') + 1)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"  PYTHON",
"Ошибка",
"  Python",
"-1"
],
"answer": 0,
"explain": "Методы строк не изменяют исходную строку, а возвращают новый результат; find возвращает −1, если подстроки нет, а index — ошибку. Программа выводит: <code>  PYTHON</code>.",
"code": "s = '  python  '\nprint(s.upper())",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"r",
"a",
"e"
],
"answer": 2,
"explain": "Индексы начинаются с 0; отрицательный индекс −1 — последний символ. Программа выводит: <code>a</code>.",
"code": "s = 'variable'\nprint(s[1])",
"codeOptions": true
},
{
"type": "single",
"q": "Что вернёт 'abc'.find('d')?",
"options": [
"ошибку",
"-1",
"None",
"0"
],
"answer": 1,
"explain": "find при отсутствии подстроки возвращает −1 (а index — ошибку ValueError)."
},
{
"type": "multiple",
"q": "Какие утверждения истинны (выражение равно True)?",
"options": [
"'abc'[::-1] == 'cba'",
"len(' ab ') == 2",
"'1.5'.isdigit()",
"'a b c'.split() == ['a', 'b', 'c']",
"'hello'.find('z') == -1",
"'-'.join('abc') == 'a-b-c'"
],
"answer": [
0,
3,
4,
5
],
"explain": "count считает непересекающиеся вхождения ('aaa'.count('aa') = 1); isdigit для '1.5' — False (есть точка); срез за пределами строки даёт пустую строку, а не ошибку.",
"codeOptions": true
}
],
"m5": [
{
"type": "single",
"q": "Как будет выглядеть список после ОДНОГО прохода пузырьковой сортировки?",
"options": [
"[2, 4, 9, 11, 19]",
"[2, 4, 9, 11,",
"[2, 4, 9, 11, 19] 19]",
"4, 9, 11, 19]"
],
"answer": 0,
"explain": "За один проход пузырька наибольший элемент «всплывает» в конец; остальные сортируются не полностью. Программа выводит: <code>[2, 4, 9, 11, 19]</code>.",
"code": "a = [4, 2, 9, 19, 11]\nfor j in range(len(a) - 1):\n    if a[j] > a[j + 1]:\n        a[j], a[j + 1] = a[j + 1], a[j]\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[8, 8, 7, 1, 5]",
"[8, 8, 7, 1, 7, 7]",
"[8, 8, 7, 1, 7, 7, 5]",
"[8, 8, 7, 1, 5, 7, 7]"
],
"answer": 3,
"explain": "append добавляет в конец, insert(i, x) — перед индексом i, pop() удаляет последний, remove(x) — первое вхождение значения x. Программа выводит: <code>[8, 8, 7, 1, 5, 7, 7]</code>.",
"code": "a = [8, 8, 7, 1]\na.append(5)\na.extend([7, 7])\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Как будет выглядеть список после ОДНОГО прохода пузырьковой сортировки?",
"options": [
"[18, 17, 14, 9, 5]",
"[5, 9, 14, 17, 18]",
"9, 14, 17, 18]",
"[5, 9, 14, 17,"
],
"answer": 1,
"explain": "За один проход пузырька наибольший элемент «всплывает» в конец; остальные сортируются не полностью. Программа выводит: <code>[5, 9, 14, 17, 18]</code>.",
"code": "a = [5, 18, 9, 14, 17]\nfor j in range(len(a) - 1):\n    if a[j] > a[j + 1]:\n        a[j], a[j + 1] = a[j + 1], a[j]\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"14",
"[5, 8, 1]",
"4",
"2"
],
"answer": 3,
"explain": "m[i][j] — элемент строки i и столбца j. Главная диагональ — m[i][i], побочная — m[i][n−1−i]. Программа выводит: <code>2</code>.",
"code": "m = [[5, 8, 1], [5, 4, 3], [0, 4, 2]]\nprint(m[-1][-1])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[1, 2, 8, 1, 7, 7]",
"[1, 8, 2, 1, 7, 7]",
"[7, 7, 1, 2, 8, 1]",
"[1, 2, 8, 1]"
],
"answer": 2,
"explain": "append добавляет в конец, insert(i, x) — перед индексом i, pop() удаляет последний, remove(x) — первое вхождение значения x. Программа выводит: <code>[7, 7, 1, 2, 8, 1]</code>.",
"code": "a = [1, 8, 2, 1]\na.extend([7, 7])\na.reverse()\nprint(a)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "max([3, 9, 2])",
"right": "9"
},
{
"left": "(1, 2) + (3,)",
"right": "(1, 2, 3)"
},
{
"left": "len([[1, 2], [3]])",
"right": "2"
},
{
"left": "[5, 6, 7][1:]",
"right": "[6, 7]"
}
],
"explain": "len вложенного списка считает элементы верхнего уровня.",
"distractors": [
"3",
"[1, 2, 1, 2]"
]
},
{
"type": "multiple",
"q": "Какие способы создают матрицу 3×3 из нулей с НЕЗАВИСИМЫМИ строками?",
"options": [
"[0] * 9",
"[[0 for j in range(3)] for i in range(3)]",
"[[0] * 3, [0] * 3, [0] * 3]",
"[[0] * 3 for _ in range(3)]",
"[[0] * 3] * 3",
"[[0] * 9]"
],
"answer": [
1,
2,
3
],
"explain": "[[0] * 3] * 3 копирует ссылку на одну и ту же строку: изменение m[0][0] изменит все строки.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие сортировки имеют сложность O(n²) в худшем случае?",
"options": [
"слиянием",
"встроенная sorted (Timsort)",
"вставками",
"пузырьком",
"выбором"
],
"answer": [
2,
3,
4
],
"explain": "Простые сортировки — квадратичные; слиянием и Timsort — O(n log n)."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"9",
"3",
"[0, 3, 3]",
"10"
],
"answer": 2,
"explain": "m[i][j] — элемент строки i и столбца j. Главная диагональ — m[i][i], побочная — m[i][n−1−i]. Программа выводит: <code>[0, 3, 3]</code>.",
"code": "m = [[0, 7, 3], [3, 3, 9], [3, 4, 6]]\nprint([list(r) for r in zip(*m)][0])",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения дают список [1, 2, 3]?",
"options": [
"[1, 2].append(3)",
"[i for i in range(1, 4)]",
"[1] * 3",
"[1, 2, 3][::-1][::-1]",
"sorted([3, 1, 2])",
"[3, 1, 2].sort()"
],
"answer": [
1,
3,
4
],
"explain": "append и sort изменяют список на месте и возвращают None; list('123') даёт ['1', '2', '3'] — строки.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие способы создают матрицу 3×3 из нулей с НЕЗАВИСИМЫМИ строками?",
"options": [
"[0] * 9",
"[[0 for j in range(3)] for i in range(3)]",
"[[0] * 3 for _ in range(3)]",
"[[0, 0, 0] for i in range(3)]",
"[[0] * 3] * 3",
"[[0] * 3, [0] * 3, [0] * 3]"
],
"answer": [
1,
2,
3,
5
],
"explain": "[[0] * 3] * 3 копирует ссылку на одну и ту же строку: изменение m[0][0] изменит все строки.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие способы создают матрицу 3×3 из нулей с НЕЗАВИСИМЫМИ строками?",
"options": [
"[[0] * 3 for _ in range(3)]",
"[0] * 9",
"[[0 for j in range(3)] for i in range(3)]",
"[[0, 0, 0] for i in range(3)]",
"[[0] * 3] * 3",
"[[0] * 3, [0] * 3, [0] * 3]"
],
"answer": [
0,
2,
3,
5
],
"explain": "[[0] * 3] * 3 копирует ссылку на одну и ту же строку: изменение m[0][0] изменит все строки.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[3, 8]",
"8",
"[10, -1, 3]",
"4"
],
"answer": 2,
"explain": "Индексация с 0, срез не включает правую границу. Программа выводит: <code>[10, -1, 3]</code>.",
"code": "a = [4, 10, -1, 3, 8]\nprint(a[1:4])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"16",
"23",
"7",
"9"
],
"answer": 3,
"explain": "m[i][j] — элемент строки i и столбца j. Главная диагональ — m[i][i], побочная — m[i][n−1−i]. Программа выводит: <code>9</code>.",
"code": "m = [[9, 5, 9], [0, 7, 7], [5, 2, 0]]\nprint(max(max(row) for row in m))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[6, 9, 6, 0]",
"[6, 9,",
"6] 9, [6,",
"[6, 9, 6]"
],
"answer": 3,
"explain": "b = a не создаёт копию: оба имени ссылаются на один список. Копию дают a[:], a.copy(), list(a). Программа выводит: <code>[6, 9, 6]</code>.",
"code": "a = [6, 9, 6]\nb = a[:]\nb.append(0)\nb[0] = 99\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[99, 1, 4,",
"[99, 1, 4, 0]",
"[2, 1, 4]",
"[2, 1, 4, 0]"
],
"answer": 1,
"explain": "b = a не создаёт копию: оба имени ссылаются на один список. Копию дают a[:], a.copy(), list(a). Программа выводит: <code>[99, 1, 4, 0]</code>.",
"code": "a = [2, 1, 4]\nb = a\nb.append(0)\nb[0] = 99\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3] [1,",
"[0, 2, 4]",
"3]",
"[1, 3]"
],
"answer": 3,
"explain": "Генератор списка: [выражение for элемент in последовательность if условие]. Программа выводит: <code>[1, 3]</code>.",
"code": "print([i for i in range(5) if i % 2])",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие методы изменяют сам список?",
"options": [
"pop",
"sorted",
"sort",
"len",
"count",
"append",
"reverse"
],
"answer": [
0,
2,
5,
6
],
"explain": "sorted создаёт новый список; len и count ничего не меняют."
},
{
"type": "matching",
"q": "Дан список a = [7, 4, 2, 3]. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).",
"pairs": [
{
"left": "a.append(0)",
"right": "[7, 4, 2, 3, 0]"
},
{
"left": "a.reverse()",
"right": "[3, 2, 4, 7]"
},
{
"left": "a.pop(0)",
"right": "[4, 2, 3]"
},
{
"left": "a.pop()",
"right": "[7, 4, 2]"
}
],
"explain": "Операции изменяют список на месте."
},
{
"type": "multiple",
"q": "Какие способы создают матрицу 3×3 из нулей с НЕЗАВИСИМЫМИ строками?",
"options": [
"[[0] * 3] * 3",
"[[0] * 3 for _ in range(3)]",
"[[0] * 9]",
"[[0] * 3, [0] * 3, [0] * 3]",
"[[0, 0, 0] for i in range(3)]",
"[0] * 9"
],
"answer": [
1,
3,
4
],
"explain": "[[0] * 3] * 3 копирует ссылку на одну и ту же строку: изменение m[0][0] изменит все строки.",
"codeOptions": true
},
{
"type": "single",
"q": "Как будет выглядеть список после ОДНОГО прохода пузырьковой сортировки?",
"options": [
"[18, 14, 12, 8, 2]",
"[8, 12, 2, 14, 18]",
"[12, 14, 8, 18, 2]",
"[2, 8, 12, 14, 18]"
],
"answer": 1,
"explain": "За один проход пузырька наибольший элемент «всплывает» в конец; остальные сортируются не полностью. Программа выводит: <code>[8, 12, 2, 14, 18]</code>.",
"code": "a = [8, 12, 14, 2, 18]\nfor j in range(len(a) - 1):\n    if a[j] > a[j + 1]:\n        a[j], a[j + 1] = a[j + 1], a[j]\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"10] 8, [6,",
"[6, 8, 10]",
"[6, 2, 8, 2, 10]",
"8, 10]"
],
"answer": 1,
"explain": "Генератор списка: [выражение for элемент in последовательность if условие]. Программа выводит: <code>[6, 8, 10]</code>.",
"code": "print([x * 2 for x in [3, 1, 4, 1, 5] if x > 1])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3",
"17",
"-5",
"1"
],
"answer": 0,
"explain": "Индексация с 0, срез не включает правую границу. Программа выводит: <code>3</code>.",
"code": "a = [8, 3, -5, 17, 1, 1]\nprint(a.index(a[3]))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"['A', 'B',",
"'B', 'C']",
"['A', 'B', 'C']",
"'C'] 'B', ['A',"
],
"answer": 2,
"explain": "Генератор списка: [выражение for элемент in последовательность if условие]. Программа выводит: <code>['A', 'B', 'C']</code>.",
"code": "print([c.upper() for c in 'abc'])",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан список a = [3, 9, 3, 4]. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).",
"pairs": [
{
"left": "a.append(0)",
"right": "[3, 9, 3, 4, 0]"
},
{
"left": "a.reverse()",
"right": "[4, 3, 9, 3]"
},
{
"left": "a.pop(0)",
"right": "[9, 3, 4]"
},
{
"left": "a.sort()",
"right": "[3, 3, 4, 9]"
}
],
"explain": "Операции изменяют список на месте."
},
{
"type": "single",
"q": "Как будет выглядеть список после ОДНОГО прохода пузырьковой сортировки?",
"options": [
"[9, 4, 16, 7, 2]",
"[2, 4, 9, 7, 16]",
"[2, 4, 7, 9, 16]",
"[16, 9, 7, 4, 2]"
],
"answer": 1,
"explain": "За один проход пузырька наибольший элемент «всплывает» в конец; остальные сортируются не полностью. Программа выводит: <code>[2, 4, 9, 7, 16]</code>.",
"code": "a = [9, 2, 4, 16, 7]\nfor j in range(len(a) - 1):\n    if a[j] > a[j + 1]:\n        a[j], a[j + 1] = a[j + 1], a[j]\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[9, 9, 2]",
"9, 2, 7, 7]",
"7] 7, 2, 9, [9,",
"[9, 9, 2, 7, 7]"
],
"answer": 3,
"explain": "append добавляет в конец, insert(i, x) — перед индексом i, pop() удаляет последний, remove(x) — первое вхождение значения x. Программа выводит: <code>[9, 9, 2, 7, 7]</code>.",
"code": "a = [9, 9, 2, 7]\na.pop()\na.extend([7, 7])\nprint(a)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения дают список [1, 2, 3]?",
"options": [
"[1, 2, 3, 4][:3]",
"[1] * 3",
"[1, 2].append(3)",
"sorted([3, 1, 2])",
"[i for i in range(1, 4)]",
"list(range(1, 4))"
],
"answer": [
0,
3,
4,
5
],
"explain": "append и sort изменяют список на месте и возвращают None; list('123') даёт ['1', '2', '3'] — строки.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[9, 7, 2]",
"7, 2]",
"[99, 7, 2, 0]",
"[9, 7, 2, 0]"
],
"answer": 0,
"explain": "b = a не создаёт копию: оба имени ссылаются на один список. Копию дают a[:], a.copy(), list(a). Программа выводит: <code>[9, 7, 2]</code>.",
"code": "a = [9, 7, 2]\nb = a[:]\nb.append(0)\nb[0] = 99\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3",
"8",
"16",
"14"
],
"answer": 1,
"explain": "Индексация с 0, срез не включает правую границу. Программа выводит: <code>8</code>.",
"code": "a = [3, 12, 14, 16, 2, 14, 8]\nprint(a[-1])",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "[0] * 3",
"right": "[0, 0, 0]"
},
{
"left": "sorted([3, 1, 2], reverse=True)",
"right": "[3, 2, 1]"
},
{
"left": "sum([1, 2, 3]) // 2",
"right": "3"
},
{
"left": "list(zip([1, 2], 'ab'))",
"right": "[(1, 'a'), (2, 'b')]"
}
],
"explain": "len вложенного списка считает элементы верхнего уровня.",
"distractors": [
"2"
]
},
{
"type": "matching",
"q": "Дан список a = [3, 9, 4, 3]. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).",
"pairs": [
{
"left": "a.insert(0, 0)",
"right": "[0, 3, 9, 4, 3]"
},
{
"left": "a.remove(a[-1])",
"right": "[9, 4, 3]"
},
{
"left": "a.sort()",
"right": "[3, 3, 4, 9]"
},
{
"left": "a.reverse()",
"right": "[3, 4, 9, 3]"
}
],
"explain": "Операции изменяют список на месте."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"(2, 3, 2, 1)",
"(2, 3, 2)",
"1"
],
"answer": 1,
"explain": "Кортеж похож на список, но неизменяем; поддерживает индексацию, срезы, + и *. Программа выводит: <code>(2, 3, 2, 1)</code>.",
"code": "t = (1, 2, 3, 2)\nprint(t[::-1])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"16",
"20",
"9",
"-4"
],
"answer": 1,
"explain": "Индексация с 0, срез не включает правую границу. Программа выводит: <code>20</code>.",
"code": "a = [9, -4, 17, 20, 0, 16]\nprint(max(a))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения дают список [1, 2, 3]?",
"options": [
"[1, 2] + [3]",
"[1, 2].append(3)",
"list('123')",
"list(range(1, 4))",
"[1, 3][:] + [2]",
"sorted([3, 1, 2])"
],
"answer": [
0,
3,
5
],
"explain": "append и sort изменяют список на месте и возвращают None; list('123') даёт ['1', '2', '3'] — строки.",
"codeOptions": true
},
{
"type": "single",
"q": "Чем кортеж отличается от списка?",
"options": [
"кортеж может хранить только числа",
"кортеж нельзя изменить после создания",
"кортеж всегда отсортирован",
"у кортежа нет индексов"
],
"answer": 1,
"explain": "Кортежи неизменяемы: нельзя присвоить элемент, добавить или удалить."
},
{
"type": "matching",
"q": "Дан список a = [3, 6, 4, 7]. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).",
"pairs": [
{
"left": "a.remove(a[-1])",
"right": "[3, 6, 4]"
},
{
"left": "a.append(0)",
"right": "[3, 6, 4, 7, 0]"
},
{
"left": "a.pop(0)",
"right": "[6, 4, 7]"
},
{
"left": "a.reverse()",
"right": "[7, 4, 6, 3]"
}
],
"explain": "Операции изменяют список на месте."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7] 8, [7,",
"8, 7]",
"[7, 8, 7] 7]",
"[7, 8, 7]"
],
"answer": 3,
"explain": "b = a не создаёт копию: оба имени ссылаются на один список. Копию дают a[:], a.copy(), list(a). Программа выводит: <code>[7, 8, 7]</code>.",
"code": "a = [7, 8, 7]\nb = a[:]\nb.append(0)\nb[0] = 99\nprint(a)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан список a = [9, 3, 4, 5]. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).",
"pairs": [
{
"left": "a.append(0)",
"right": "[9, 3, 4, 5, 0]"
},
{
"left": "a.sort()",
"right": "[3, 4, 5, 9]"
},
{
"left": "a.reverse()",
"right": "[5, 4, 3, 9]"
},
{
"left": "a.remove(a[-1])",
"right": "[9, 3, 4]"
}
],
"explain": "Операции изменяют список на месте."
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "list(zip([1, 2], 'ab'))",
"right": "[(1, 'a'), (2, 'b')]"
},
{
"left": "len([[1, 2], [3]])",
"right": "2"
},
{
"left": "max([3, 9, 2])",
"right": "9"
},
{
"left": "(1, 2) + (3,)",
"right": "(1, 2, 3)"
}
],
"explain": "len вложенного списка считает элементы верхнего уровня.",
"distractors": [
"[6, 7]",
"3"
]
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "(1, 2) + (3,)",
"right": "(1, 2, 3)"
},
{
"left": "list(zip([1, 2], 'ab'))",
"right": "[(1, 'a'), (2, 'b')]"
},
{
"left": "len([[1, 2], [3]])",
"right": "2"
},
{
"left": "[5, 6, 7][1:]",
"right": "[6, 7]"
}
],
"explain": "len вложенного списка считает элементы верхнего уровня.",
"distractors": [
"3",
"[1, 2, 1, 2]"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[18, 15, 5]",
"20",
"5",
"[18, 20]"
],
"answer": 0,
"explain": "Индексация с 0, срез не включает правую границу. Программа выводит: <code>[18, 15, 5]</code>.",
"code": "a = [18, 16, 15, 20, 5]\nprint(a[::2])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7] 3, [3,",
"[99, 3, 7, 0]",
"[3, 3, 7]",
"[3, 3, 7] 7]"
],
"answer": 2,
"explain": "b = a не создаёт копию: оба имени ссылаются на один список. Копию дают a[:], a.copy(), list(a). Программа выводит: <code>[3, 3, 7]</code>.",
"code": "a = [3, 3, 7]\nb = a.copy()\nb.append(0)\nb[0] = 99\nprint(a)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие способы создают матрицу 3×3 из нулей с НЕЗАВИСИМЫМИ строками?",
"options": [
"[[0] * 9]",
"[[0] * 3 for _ in range(3)]",
"[[0 for j in range(3)] for i in range(3)]",
"[0] * 9",
"[[0] * 3] * 3",
"[[0] * 3, [0] * 3, [0] * 3]"
],
"answer": [
1,
2,
5
],
"explain": "[[0] * 3] * 3 копирует ссылку на одну и ту же строку: изменение m[0][0] изменит все строки.",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан список a = [7, 3, 9, 5]. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).",
"pairs": [
{
"left": "a.pop(0)",
"right": "[3, 9, 5]"
},
{
"left": "del a[1:3]",
"right": "[7, 5]"
},
{
"left": "a.extend([0, 0])",
"right": "[7, 3, 9, 5, 0, 0]"
},
{
"left": "a.append(0)",
"right": "[7, 3, 9, 5, 0]"
}
],
"explain": "Операции изменяют список на месте."
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "list(zip([1, 2], 'ab'))",
"right": "[(1, 'a'), (2, 'b')]"
},
{
"left": "[1, 2, 3][-2]",
"right": "2"
},
{
"left": "(1, 2) + (3,)",
"right": "(1, 2, 3)"
},
{
"left": "sum([1, 2, 3]) // 2",
"right": "3"
}
],
"explain": "len вложенного списка считает элементы верхнего уровня.",
"distractors": [
"[6, 7]",
"[1, 2, 1, 2]"
]
},
{
"type": "single",
"q": "Какое условие обязательно для двоичного (бинарного) поиска?",
"options": [
"список без повторов",
"элементы — только целые",
"список отсортирован",
"в списке чётное число элементов"
],
"answer": 2,
"explain": "Бинарный поиск отбрасывает половину на каждом шаге, что возможно только в упорядоченном списке."
},
{
"type": "multiple",
"q": "Какие выражения дают список [1, 2, 3]?",
"options": [
"[1] * 3",
"[1, 2] + [3]",
"[1, 2, 3][::-1][::-1]",
"list('123')",
"[1, 2].append(3)",
"[i for i in range(1, 4)]"
],
"answer": [
1,
2,
5
],
"explain": "append и sort изменяют список на месте и возвращают None; list('123') даёт ['1', '2', '3'] — строки.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие способы создают матрицу 3×3 из нулей с НЕЗАВИСИМЫМИ строками?",
"options": [
"[[0, 0, 0] for i in range(3)]",
"[[0] * 9]",
"[0] * 9",
"[[0 for j in range(3)] for i in range(3)]",
"[[0] * 3, [0] * 3, [0] * 3]",
"[[0] * 3 for _ in range(3)]"
],
"answer": [
0,
3,
4,
5
],
"explain": "[[0] * 3] * 3 копирует ссылку на одну и ту же строку: изменение m[0][0] изменит все строки.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"[11, 20]",
"0",
"[2, 17]"
],
"answer": 0,
"explain": "Индексация с 0, срез не включает правую границу. Программа выводит: <code>7</code>.",
"code": "a = [1, 2, 17, 11, 0, 11, 20]\nprint(len(a))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2",
"Ошибка",
"(2, 3, 2)",
"3"
],
"answer": 0,
"explain": "Кортеж похож на список, но неизменяем; поддерживает индексацию, срезы, + и *. Программа выводит: <code>2</code>.",
"code": "t = (1, 2, 3, 2)\nprint(t.count(2))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1",
"(2, 3, 2)",
"3",
"2"
],
"answer": 3,
"explain": "Кортеж похож на список, но неизменяем; поддерживает индексацию, срезы, + и *. Программа выводит: <code>2</code>.",
"code": "t = (1, 2, 3, 2)\nprint(t[1])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3",
"Ошибка",
"2",
"1"
],
"answer": 2,
"explain": "Кортеж похож на список, но неизменяем; поддерживает индексацию, срезы, + и *. Программа выводит: <code>2</code>.",
"code": "t = (1, 2, 3, 2)\nprint(t.index(3))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие способы создают матрицу 3×3 из нулей с НЕЗАВИСИМЫМИ строками?",
"options": [
"[[0] * 3, [0] * 3, [0] * 3]",
"[[0] * 3 for _ in range(3)]",
"[[0 for j in range(3)] for i in range(3)]",
"[[0] * 3] * 3",
"[[0] * 9]",
"[0] * 9"
],
"answer": [
0,
1,
2
],
"explain": "[[0] * 3] * 3 копирует ссылку на одну и ту же строку: изменение m[0][0] изменит все строки.",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "(1, 2) + (3,)",
"right": "(1, 2, 3)"
},
{
"left": "[0] * 3",
"right": "[0, 0, 0]"
},
{
"left": "sum([1, 2, 3]) // 2",
"right": "3"
},
{
"left": "[5, 6, 7][1:]",
"right": "[6, 7]"
}
],
"explain": "len вложенного списка считает элементы верхнего уровня.",
"distractors": [
"2"
]
},
{
"type": "single",
"q": "Как будет выглядеть список после ОДНОГО прохода пузырьковой сортировки?",
"options": [
"[11, 12, 4, 10,",
"[11, 12, 4, 10, 17]",
"17] 10, 4, 12, [11,",
"12, 4, 10, 17]"
],
"answer": 1,
"explain": "За один проход пузырька наибольший элемент «всплывает» в конец; остальные сортируются не полностью. Программа выводит: <code>[11, 12, 4, 10, 17]</code>.",
"code": "a = [17, 11, 12, 4, 10]\nfor j in range(len(a) - 1):\n    if a[j] > a[j + 1]:\n        a[j], a[j + 1] = a[j + 1], a[j]\nprint(a)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие способы создают матрицу 3×3 из нулей с НЕЗАВИСИМЫМИ строками?",
"options": [
"[[0] * 3, [0] * 3, [0] * 3]",
"[0] * 9",
"[[0] * 3] * 3",
"[[0] * 3 for _ in range(3)]",
"[[0, 0, 0] for i in range(3)]",
"[[0] * 9]"
],
"answer": [
0,
3,
4
],
"explain": "[[0] * 3] * 3 копирует ссылку на одну и ту же строку: изменение m[0][0] изменит все строки.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"17",
"8",
"[0, 4, 9]",
"15"
],
"answer": 3,
"explain": "m[i][j] — элемент строки i и столбца j. Главная диагональ — m[i][i], побочная — m[i][n−1−i]. Программа выводит: <code>15</code>.",
"code": "m = [[9, 0, 8], [6, 4, 7], [1, 9, 2]]\nprint(sum(m[i][i] for i in range(3)))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[4, 8, 7, 8, 5]",
"5] 8, 7, [4,",
"7, 8, 5]",
"[4, 7, 8, 5]"
],
"answer": 3,
"explain": "append добавляет в конец, insert(i, x) — перед индексом i, pop() удаляет последний, remove(x) — первое вхождение значения x. Программа выводит: <code>[4, 7, 8, 5]</code>.",
"code": "a = [4, 8, 7, 8]\na.append(5)\ndel a[1]\nprint(a)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан список a = [2, 1, 3, 5]. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).",
"pairs": [
{
"left": "a.pop(0)",
"right": "[1, 3, 5]"
},
{
"left": "a.reverse()",
"right": "[5, 3, 1, 2]"
},
{
"left": "a.append(0)",
"right": "[2, 1, 3, 5, 0]"
},
{
"left": "a.insert(0, 0)",
"right": "[0, 2, 1, 3, 5]"
}
],
"explain": "Операции изменяют список на месте."
},
{
"type": "matching",
"q": "Дан список a = [4, 3, 8, 5]. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).",
"pairs": [
{
"left": "a.sort()",
"right": "[3, 4, 5, 8]"
},
{
"left": "a.pop(0)",
"right": "[3, 8, 5]"
},
{
"left": "a.reverse()",
"right": "[5, 8, 3, 4]"
},
{
"left": "a.extend([0, 0])",
"right": "[4, 3, 8, 5, 0, 0]"
}
],
"explain": "Операции изменяют список на месте."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4",
"20",
"15",
"[7, 9, 4]"
],
"answer": 2,
"explain": "m[i][j] — элемент строки i и столбца j. Главная диагональ — m[i][i], побочная — m[i][n−1−i]. Программа выводит: <code>15</code>.",
"code": "m = [[7, 9, 4], [0, 6, 0], [5, 1, 8]]\nprint(sum(m[i][2 - i] for i in range(3)))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[1, 3, 5]",
"5] 3, [1,",
"3, 5]",
"[1, 3,"
],
"answer": 0,
"explain": "Генератор списка: [выражение for элемент in последовательность if условие]. Программа выводит: <code>[1, 3, 5]</code>.",
"code": "print([i for i in range(6) if i % 2])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5",
"1",
"12",
"20"
],
"answer": 3,
"explain": "m[i][j] — элемент строки i и столбца j. Главная диагональ — m[i][i], побочная — m[i][n−1−i]. Программа выводит: <code>20</code>.",
"code": "m = [[8, 3, 1], [8, 7, 5], [4, 5, 9]]\nprint(sum(m[1]))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[18, 18, 12]",
"-2",
"[-2, 9]",
"[-5, -4, 12]"
],
"answer": 3,
"explain": "Индексация с 0, срез не включает правую границу. Программа выводит: <code>[-5, -4, 12]</code>.",
"code": "a = [18, -2, 9, 18, -5, -4, 12]\nprint(a[-3:])",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения дают список [1, 2, 3]?",
"options": [
"[1, 3][:] + [2]",
"[1, 2] + [3]",
"[1, 2].append(3)",
"list(range(1, 4))",
"list('123')",
"[1, 2, 3, 4][:3]"
],
"answer": [
1,
3,
5
],
"explain": "append и sort изменяют список на месте и возвращают None; list('123') даёт ['1', '2', '3'] — строки.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[17, 4]",
"-2",
"17",
"18"
],
"answer": 3,
"explain": "Индексация с 0, срез не включает правую границу. Программа выводит: <code>18</code>.",
"code": "a = [-2, 17, 4, -5, -4, 18]\nprint(a[-1])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[3, 1, 8, 3, 7, 7]",
"[7, 1, 8, 3, 7, 7]",
"[3, 1, 8, 3, 7,",
"7] 7, 3, 8, 1, [3,"
],
"answer": 0,
"explain": "append добавляет в конец, insert(i, x) — перед индексом i, pop() удаляет последний, remove(x) — первое вхождение значения x. Программа выводит: <code>[3, 1, 8, 3, 7, 7]</code>.",
"code": "a = [3, 1, 8, 3]\na[0] = a[-1]\na.extend([7, 7])\nprint(a)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения дают список [1, 2, 3]?",
"options": [
"[1, 2, 3][::-1][::-1]",
"[1, 2].append(3)",
"[1] * 3",
"list(range(1, 4))",
"[1, 2] + [3]",
"[1, 2, 3, 4][:3]"
],
"answer": [
0,
3,
4,
5
],
"explain": "append и sort изменяют список на месте и возвращают None; list('123') даёт ['1', '2', '3'] — строки.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[1, 3, 5]",
"[0, 2, 4, 6]",
"[1, 3,",
"5] 3, [1,"
],
"answer": 0,
"explain": "Генератор списка: [выражение for элемент in последовательность if условие]. Программа выводит: <code>[1, 3, 5]</code>.",
"code": "print([i for i in range(7) if i % 2])",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан список a = [6, 5, 6, 1]. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).",
"pairs": [
{
"left": "del a[1:3]",
"right": "[6, 1]"
},
{
"left": "a.sort()",
"right": "[1, 5, 6, 6]"
},
{
"left": "a.insert(0, 0)",
"right": "[0, 6, 5, 6, 1]"
},
{
"left": "a.reverse()",
"right": "[1, 6, 5, 6]"
}
],
"explain": "Операции изменяют список на месте."
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "sum([1, 2, 3]) // 2",
"right": "3"
},
{
"left": "list(zip([1, 2], 'ab'))",
"right": "[(1, 'a'), (2, 'b')]"
},
{
"left": "[1, 2, 3][-2]",
"right": "2"
},
{
"left": "[0] * 3",
"right": "[0, 0, 0]"
}
],
"explain": "len вложенного списка считает элементы верхнего уровня.",
"distractors": [
"[6, 7]",
"[1, 2, 1, 2]"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[0, 1, 4,",
"[0, 1, 4, 9] 9]",
"[0, 1, 4, 9]",
"[1, 4, 9, 16]"
],
"answer": 2,
"explain": "Генератор списка: [выражение for элемент in последовательность if условие]. Программа выводит: <code>[0, 1, 4, 9]</code>.",
"code": "print([i * i for i in range(4)])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"'B', 'C']",
"'C'] 'B', ['A',",
"['A', 'B', 'C']",
"['A', 'B', 'C'] 'C']"
],
"answer": 2,
"explain": "Генератор списка: [выражение for элемент in последовательность if условие]. Программа выводит: <code>['A', 'B', 'C']</code>.",
"code": "print([c.upper() for c in 'abc'])",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения дают список [1, 2, 3]?",
"options": [
"list(range(1, 4))",
"[i for i in range(1, 4)]",
"[1, 2] + [3]",
"list('123')",
"[1, 3][:] + [2]",
"[3, 1, 2].sort()"
],
"answer": [
0,
1,
2
],
"explain": "append и sort изменяют список на месте и возвращают None; list('123') даёт ['1', '2', '3'] — строки.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0",
"7",
"21",
"14"
],
"answer": 3,
"explain": "m[i][j] — элемент строки i и столбца j. Главная диагональ — m[i][i], побочная — m[i][n−1−i]. Программа выводит: <code>14</code>.",
"code": "m = [[6, 8, 7], [5, 7, 2], [5, 0, 1]]\nprint(sum(m[i][i] for i in range(3)))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1",
"(2, 3, 2)",
"Ошибка",
"4"
],
"answer": 3,
"explain": "Кортеж похож на список, но неизменяем; поддерживает индексацию, срезы, + и *. Программа выводит: <code>4</code>.",
"code": "t = (1, 2, 3, 2)\nprint(len(t))",
"codeOptions": true
},
{
"type": "single",
"q": "Как будет выглядеть список после ОДНОГО прохода пузырьковой сортировки?",
"options": [
"[4, 6, 15, 16, 17]",
"[6, 15, 16, 4, 17]",
"[17, 15, 16, 6, 4]",
"[17, 16, 15, 6, 4]"
],
"answer": 1,
"explain": "За один проход пузырька наибольший элемент «всплывает» в конец; остальные сортируются не полностью. Программа выводит: <code>[6, 15, 16, 4, 17]</code>.",
"code": "a = [6, 17, 15, 16, 4]\nfor j in range(len(a) - 1):\n    if a[j] > a[j + 1]:\n        a[j], a[j + 1] = a[j + 1], a[j]\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[5, 2, 7]",
"[5, 1, 2, 7]",
"[5, 0, 1, 2, 7]",
"[5, 0, 2, 7]"
],
"answer": 1,
"explain": "append добавляет в конец, insert(i, x) — перед индексом i, pop() удаляет последний, remove(x) — первое вхождение значения x. Программа выводит: <code>[5, 1, 2, 7]</code>.",
"code": "a = [5, 1, 2, 7]\na.insert(1, 0)\ndel a[1]\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[99, 9, 3, 0]",
"[99, 9, 3,",
"[1, 9, 3]",
"9, 3, 0]"
],
"answer": 0,
"explain": "b = a не создаёт копию: оба имени ссылаются на один список. Копию дают a[:], a.copy(), list(a). Программа выводит: <code>[99, 9, 3, 0]</code>.",
"code": "a = [1, 9, 3]\nb = a\nb.append(0)\nb[0] = 99\nprint(a)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения дают список [1, 2, 3]?",
"options": [
"[1, 2, 3, 4][:3]",
"sorted([3, 1, 2])",
"[1, 2].append(3)",
"[1, 3][:] + [2]",
"[i for i in range(1, 4)]",
"[1, 2] + [3]"
],
"answer": [
0,
1,
4,
5
],
"explain": "append и sort изменяют список на месте и возвращают None; list('123') даёт ['1', '2', '3'] — строки.",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "[5, 6, 7][1:]",
"right": "[6, 7]"
},
{
"left": "sum([1, 2, 3]) // 2",
"right": "3"
},
{
"left": "max([3, 9, 2])",
"right": "9"
},
{
"left": "sorted([3, 1, 2], reverse=True)",
"right": "[3, 2, 1]"
}
],
"explain": "len вложенного списка считает элементы верхнего уровня.",
"distractors": [
"2"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[2, 1,",
"[2, 1, 4]",
"[2, 1, 4, 0]",
"[2, 1, 4] 4]"
],
"answer": 1,
"explain": "b = a не создаёт копию: оба имени ссылаются на один список. Копию дают a[:], a.copy(), list(a). Программа выводит: <code>[2, 1, 4]</code>.",
"code": "a = [2, 1, 4]\nb = a[:]\nb.append(0)\nb[0] = 99\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[8, 9, 8,",
"[8, 9, 8, 5]",
"[8, 9, 8, 5] 5]",
"5] 8, 9, [8,"
],
"answer": 1,
"explain": "append добавляет в конец, insert(i, x) — перед индексом i, pop() удаляет последний, remove(x) — первое вхождение значения x. Программа выводит: <code>[8, 9, 8, 5]</code>.",
"code": "a = [8, 5, 9, 8]\na.remove(a[1])\na.append(5)\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Какова сложность поиска элемента линейным поиском в списке из n элементов (в худшем случае)?",
"options": [
"O(n²)",
"O(1)",
"O(log n)",
"O(n)"
],
"answer": 3,
"explain": "Линейный поиск может проверить все n элементов."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"17",
"14",
"20"
],
"answer": 0,
"explain": "m[i][j] — элемент строки i и столбца j. Главная диагональ — m[i][i], побочная — m[i][n−1−i]. Программа выводит: <code>7</code>.",
"code": "m = [[6, 7, 7], [9, 4, 8], [3, 6, 7]]\nprint(m[-1][-1])",
"codeOptions": true
},
{
"type": "single",
"q": "Как будет выглядеть список после ОДНОГО прохода пузырьковой сортировки?",
"options": [
"[5, 10, 11, 12, 13] 13]",
"[13, 12, 11, 10, 5]",
"[13, 10, 11, 12, 5]",
"[5, 10, 11, 12, 13]"
],
"answer": 3,
"explain": "За один проход пузырька наибольший элемент «всплывает» в конец; остальные сортируются не полностью. Программа выводит: <code>[5, 10, 11, 12, 13]</code>.",
"code": "a = [13, 5, 10, 11, 12]\nfor j in range(len(a) - 1):\n    if a[j] > a[j + 1]:\n        a[j], a[j + 1] = a[j + 1], a[j]\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Как будет выглядеть список после ОДНОГО прохода пузырьковой сортировки?",
"options": [
"[10, 3, 5, 16, 18]",
"[16, 10, 5, 18, 3]",
"[3, 5, 10, 16, 18]",
"[18, 16, 10, 5, 3]"
],
"answer": 0,
"explain": "За один проход пузырька наибольший элемент «всплывает» в конец; остальные сортируются не полностью. Программа выводит: <code>[10, 3, 5, 16, 18]</code>.",
"code": "a = [16, 10, 3, 5, 18]\nfor j in range(len(a) - 1):\n    if a[j] > a[j + 1]:\n        a[j], a[j + 1] = a[j + 1], a[j]\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"(1, 2, 3, 2, 1, 2, 3, 2)",
"3",
"Ошибка",
"1"
],
"answer": 0,
"explain": "Кортеж похож на список, но неизменяем; поддерживает индексацию, срезы, + и *. Программа выводит: <code>(1, 2, 3, 2, 1, 2, 3, 2)</code>.",
"code": "t = (1, 2, 3, 2)\nprint(t * 2)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"(2, 3, 2)",
"Ошибка",
"1",
"2"
],
"answer": 3,
"explain": "Кортеж похож на список, но неизменяем; поддерживает индексацию, срезы, + и *. Программа выводит: <code>2</code>.",
"code": "t = (1, 2, 3, 2)\nprint(t.count(2))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "len([[1, 2], [3]])",
"right": "2"
},
{
"left": "sorted([3, 1, 2], reverse=True)",
"right": "[3, 2, 1]"
},
{
"left": "[0] * 3",
"right": "[0, 0, 0]"
},
{
"left": "(1, 2) + (3,)",
"right": "(1, 2, 3)"
}
],
"explain": "len вложенного списка считает элементы верхнего уровня.",
"distractors": [
"[6, 7]",
"3"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"'B', 'C']",
"['A', 'B', 'C']",
"'C'] 'B', ['A',",
"['A', 'B', 'C'] 'C']"
],
"answer": 1,
"explain": "Генератор списка: [выражение for элемент in последовательность if условие]. Программа выводит: <code>['A', 'B', 'C']</code>.",
"code": "print([c.upper() for c in 'abc'])",
"codeOptions": true
},
{
"type": "single",
"q": "Что вернёт метод a.sort()?",
"options": [
"длину списка",
"копию списка",
"новый отсортированный список",
"None (список сортируется на месте)"
],
"answer": 3,
"explain": "sort изменяет сам список и возвращает None; новый список даёт sorted(a)."
},
{
"type": "multiple",
"q": "Какие выражения дают список [1, 2, 3]?",
"options": [
"[1, 3][:] + [2]",
"[1, 2] + [3]",
"[1, 2, 3][::-1][::-1]",
"[3, 1, 2].sort()",
"list(range(1, 4))",
"list('123')"
],
"answer": [
1,
2,
4
],
"explain": "append и sort изменяют список на месте и возвращают None; list('123') даёт ['1', '2', '3'] — строки.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[1, 1, 8]",
"[99, 1, 8, 0]",
"[1, 1, 8, 0]",
"8] 1, [1,"
],
"answer": 0,
"explain": "b = a не создаёт копию: оба имени ссылаются на один список. Копию дают a[:], a.copy(), list(a). Программа выводит: <code>[1, 1, 8]</code>.",
"code": "a = [1, 1, 8]\nb = a[:]\nb.append(0)\nb[0] = 99\nprint(a)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3",
"(1, 2, 3, 2, 4)",
"(2, 3, 2)",
"1"
],
"answer": 1,
"explain": "Кортеж похож на список, но неизменяем; поддерживает индексацию, срезы, + и *. Программа выводит: <code>(1, 2, 3, 2, 4)</code>.",
"code": "t = (1, 2, 3, 2)\nprint(t + (4,))",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан список a = [8, 2, 5, 1]. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).",
"pairs": [
{
"left": "a.sort()",
"right": "[1, 2, 5, 8]"
},
{
"left": "a.extend([0, 0])",
"right": "[8, 2, 5, 1, 0, 0]"
},
{
"left": "a.append(0)",
"right": "[8, 2, 5, 1, 0]"
},
{
"left": "a.pop(0)",
"right": "[2, 5, 1]"
}
],
"explain": "Операции изменяют список на месте."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"6] 3, 1, 0, [6,",
"[6, 0, 1, 3,",
"[6, 0, 1, 3, 6]",
"[9, 0, 1, 3, 6]"
],
"answer": 2,
"explain": "append добавляет в конец, insert(i, x) — перед индексом i, pop() удаляет последний, remove(x) — первое вхождение значения x. Программа выводит: <code>[6, 0, 1, 3, 6]</code>.",
"code": "a = [9, 1, 3, 6]\na.insert(1, 0)\na[0] = a[-1]\nprint(a)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "sorted([3, 1, 2], reverse=True)",
"right": "[3, 2, 1]"
},
{
"left": "[1, 2, 3][-2]",
"right": "2"
},
{
"left": "list(zip([1, 2], 'ab'))",
"right": "[(1, 'a'), (2, 'b')]"
},
{
"left": "(1, 2) + (3,)",
"right": "(1, 2, 3)"
}
],
"explain": "len вложенного списка считает элементы верхнего уровня.",
"distractors": [
"[6, 7]",
"3"
]
},
{
"type": "multiple",
"q": "Какие способы создают матрицу 3×3 из нулей с НЕЗАВИСИМЫМИ строками?",
"options": [
"[[0] * 3] * 3",
"[[0] * 9]",
"[[0 for j in range(3)] for i in range(3)]",
"[[0] * 3, [0] * 3, [0] * 3]",
"[[0] * 3 for _ in range(3)]",
"[0] * 9"
],
"answer": [
2,
3,
4
],
"explain": "[[0] * 3] * 3 копирует ссылку на одну и ту же строку: изменение m[0][0] изменит все строки.",
"codeOptions": true
}
],
"m6": [
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"16",
"None",
"9",
"9\nNone"
],
"answer": 0,
"explain": "Функция без return возвращает None; return сразу завершает функцию. Программа выводит: <code>16</code>.",
"code": "def f(x, y):\n    return x * 2 + y\n\nprint(f(7, 2))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"20",
"19",
"None",
"13"
],
"answer": 1,
"explain": "Функция без return возвращает None; return сразу завершает функцию. Программа выводит: <code>19</code>.",
"code": "def f(x, y):\n    return x * 2 + y\n\nprint(f(6, 7))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "sorted('cab')",
"right": "['a', 'b', 'c']"
},
{
"left": "list(filter(None, [0, 1, '', 'a']))",
"right": "[1, 'a']"
},
{
"left": "sum(map(int, '123'))",
"right": "6"
},
{
"left": "list(map(str, [1, 2]))",
"right": "['1', '2']"
}
],
"explain": "filter(None, …) оставляет истинные значения; key=lambda x: −x превращает max в поиск минимума.",
"distractors": [
"[1, 2]",
"cba"
]
},
{
"type": "multiple",
"q": "Какие вызовы функции выполнятся без ошибки?",
"options": [
"f(1, 2)",
"f(a=1, b=2)",
"f(1, 2, 3, 4)",
"f(1, c=5)",
"f(c=1)",
"f()"
],
"answer": [
0,
1,
2,
3
],
"explain": "Параметр a обязателен; c можно передать только по имени; неизвестный именованный аргумент d — ошибка; a нельзя передать дважды.",
"code": "def f(a, b=0, *args, c=1):\n    return a + b + sum(args) + c",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"9",
"8",
"9\n8",
"100"
],
"answer": 1,
"explain": "Присваивание внутри функции создаёт локальную переменную, если нет global; x += 1 без global даёт ошибку UnboundLocalError. Программа выводит: <code>8</code>.",
"code": "x = 8\ndef f():\n    x = 100\n\nf()\nprint(x)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4",
"1",
"5",
"17"
],
"answer": 3,
"explain": "Вложенная функция «запоминает» переменные внешней (замыкание); nonlocal позволяет их менять; декоратор оборачивает функцию. Программа выводит: <code>17</code>.",
"code": "def deco(fn):\n    def w(x):\n        return fn(x) + 1\n    return w\n\n@deco\ndef sq(x):\n    return x * x\n\nprint(sq(4))",
"codeOptions": true
},
{
"type": "matching",
"q": "Дана функция:<pre>def f(n):\n    if n &lt;= 1:\n        return 1\n    return f(n - 1) + f(n - 2)</pre>Сопоставьте вызов и результат.",
"pairs": [
{
"left": "f(2)",
"right": "2"
},
{
"left": "f(8)",
"right": "34"
},
{
"left": "f(4)",
"right": "5"
},
{
"left": "f(3)",
"right": "3"
}
],
"explain": "f(0) = f(1) = 1, далее каждое значение — сумма двух предыдущих."
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "list(filter(None, [0, 1, '', 'a']))",
"right": "[1, 'a']"
},
{
"left": "list(map(str, [1, 2]))",
"right": "['1', '2']"
},
{
"left": "list(map(lambda x: x ** 2, range(3)))",
"right": "[0, 1, 4]"
},
{
"left": "sum(map(int, '123'))",
"right": "6"
}
],
"explain": "filter(None, …) оставляет истинные значения; key=lambda x: −x превращает max в поиск минимума.",
"distractors": [
"['a', 'b', 'c']",
"[1, 2]"
]
},
{
"type": "multiple",
"q": "Какие вызовы функции выполнятся без ошибки?",
"options": [
"f(c=1)",
"f(1, 2, c=3, d=4)",
"f(1, a=2)",
"f(1, c=5)",
"f(1)",
"f(1, 2, 3, 4)"
],
"answer": [
3,
4,
5
],
"explain": "Параметр a обязателен; c можно передать только по имени; неизвестный именованный аргумент d — ошибка; a нельзя передать дважды.",
"code": "def f(a, b=0, *args, c=1):\n    return a + b + sum(args) + c",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие функции при вызове f() вернут None?",
"options": [
"def f(): return ''",
"def f(): return None",
"def f(): print(1)",
"def f(): return 0",
"def f():\n    if False:\n        return 5",
"def f(): return []"
],
"answer": [
1,
2,
4
],
"explain": "Без return, с пустым return или если до return дело не дошло — функция возвращает None. 0, [] и '' — это не None.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие функции при вызове f() вернут None?",
"options": [
"def f(): return ''",
"def f(): return []",
"def f(): pass",
"def f(): print(1)",
"def f(): return",
"def f(): return 0"
],
"answer": [
2,
3,
4
],
"explain": "Без return, с пустым return или если до return дело не дошло — функция возвращает None. 0, [] и '' — это не None.",
"codeOptions": true
},
{
"type": "matching",
"q": "Дана функция:<pre>def f(n):\n    if n &lt;= 1:\n        return 1\n    return f(n - 1) + f(n - 2)</pre>Сопоставьте вызов и результат.",
"pairs": [
{
"left": "f(7)",
"right": "21"
},
{
"left": "f(1)",
"right": "1"
},
{
"left": "f(4)",
"right": "5"
},
{
"left": "f(3)",
"right": "3"
}
],
"explain": "f(0) = f(1) = 1, далее каждое значение — сумма двух предыдущих."
},
{
"type": "matching",
"q": "Дана функция:<pre>def f(n):\n    if n &lt;= 1:\n        return 1\n    return f(n - 1) + f(n - 2)</pre>Сопоставьте вызов и результат.",
"pairs": [
{
"left": "f(8)",
"right": "34"
},
{
"left": "f(2)",
"right": "2"
},
{
"left": "f(0)",
"right": "1"
},
{
"left": "f(4)",
"right": "5"
}
],
"explain": "f(0) = f(1) = 1, далее каждое значение — сумма двух предыдущих."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"12",
"Ошибка",
"12\nNone",
"17"
],
"answer": 3,
"explain": "Функция без return возвращает None; return сразу завершает функцию. Программа выводит: <code>17</code>.",
"code": "def f(x, y):\n    return x * 2 + y\n\nprint(f(5, 7))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"24",
"-22",
"22",
"44"
],
"answer": 2,
"explain": "Рекурсия: функция вызывает сама себя с меньшим аргументом до базового случая; результат собирается на обратном ходе. Программа выводит: <code>22</code>.",
"code": "def f(n):\n    if n == 0:\n        return 0\n    return n % 10 + f(n // 10)\n\nprint(f(7528))",
"codeOptions": true
},
{
"type": "single",
"q": "Что делает ключевое слово global внутри функции?",
"options": [
"удаляет переменную",
"создаёт новую локальную переменную",
"делает функцию видимой везде",
"позволяет изменять глобальную переменную"
],
"answer": 3,
"explain": "Без global присваивание создаёт локальную переменную."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3",
"12",
"Ошибка",
"2"
],
"answer": 1,
"explain": "Параметры по умолчанию используются, если аргумент не передан; именованные аргументы передаются по имени в любом порядке. Программа выводит: <code>12</code>.",
"code": "def f(a, b=1, c=0):\n    return a * b + c\n\nprint(f(2, c=10))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие вызовы функции выполнятся без ошибки?",
"options": [
"f(c=1)",
"f(1, a=2)",
"f()",
"f(1, c=5)",
"f(1, 2, c=3, d=4)",
"f(1, 2, 3, 4)"
],
"answer": [
3,
5
],
"explain": "Параметр a обязателен; c можно передать только по имени; неизвестный именованный аргумент d — ошибка; a нельзя передать дважды.",
"code": "def f(a, b=0, *args, c=1):\n    return a + b + sum(args) + c",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2",
"100",
"3",
"Ошибка"
],
"answer": 1,
"explain": "Присваивание внутри функции создаёт локальную переменную, если нет global; x += 1 без global даёт ошибку UnboundLocalError. Программа выводит: <code>100</code>.",
"code": "x = 2\ndef f():\n    global x\n    x = 100\n\nf()\nprint(x)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие вызовы функции выполнятся без ошибки?",
"options": [
"f(1, 2, c=3, d=4)",
"f(1, 2, 3, 4)",
"f(1, 2)",
"f(1, a=2)",
"f(1, c=5)",
"f()"
],
"answer": [
1,
2,
4
],
"explain": "Параметр a обязателен; c можно передать только по имени; неизвестный именованный аргумент d — ошибка; a нельзя передать дважды.",
"code": "def f(a, b=0, *args, c=1):\n    return a + b + sum(args) + c",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"6",
"26",
"5",
"Ошибка"
],
"answer": 1,
"explain": "Вложенная функция «запоминает» переменные внешней (замыкание); nonlocal позволяет их менять; декоратор оборачивает функцию. Программа выводит: <code>26</code>.",
"code": "def deco(fn):\n    def w(x):\n        return fn(x) + 1\n    return w\n\n@deco\ndef sq(x):\n    return x * x\n\nprint(sq(5))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"100",
"3",
"2"
],
"answer": 0,
"explain": "Присваивание внутри функции создаёт локальную переменную, если нет global; x += 1 без global даёт ошибку UnboundLocalError. Программа выводит: <code>Ошибка</code>.",
"code": "x = 2\ndef f():\n    x += 1\n\nf()\nprint(x)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"13",
"4",
"6",
"9"
],
"answer": 3,
"explain": "Параметры по умолчанию используются, если аргумент не передан; именованные аргументы передаются по имени в любом порядке. Программа выводит: <code>9</code>.",
"code": "def f(a, b=1, c=0):\n    return a * b + c\n\nprint(f(3, 2, 3))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"ABC",
"abc",
"ab",
"bc"
],
"answer": 1,
"explain": "map применяет функцию к каждому элементу, filter оставляет элементы, для которых функция истинна, key задаёт, по какому признаку сравнивать. Программа выводит: <code>abc</code>.",
"code": "print(max(['ab', 'abc', 'z'], key=len))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5\n4",
"4",
"100",
"Ошибка"
],
"answer": 0,
"explain": "Присваивание внутри функции создаёт локальную переменную, если нет global; x += 1 без global даёт ошибку UnboundLocalError. Программа выводит: <code>5\n4</code>.",
"code": "x = 4\ndef f():\n    y = x + 1\n    return y\n\nprint(f())\nprint(x)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"(4, 5)",
"0",
"Ошибка",
"[1, 2, 3]"
],
"answer": 0,
"explain": "*args собирает все позиционные аргументы в кортеж. Программа выводит: <code>(4, 5)</code>.",
"code": "def f(*args):\n    return args\n\nprint(f(*[4, 5]))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"4",
"6",
"None"
],
"answer": 1,
"explain": "Функция без return возвращает None; return сразу завершает функцию. Программа выводит: <code>4</code>.",
"code": "def f(x, y):\n    return x if x > y else y\n\nprint(f(4, 2))",
"codeOptions": true
},
{
"type": "matching",
"q": "Дана функция:<pre>def f(n):\n    if n &lt;= 1:\n        return 1\n    return f(n - 1) + f(n - 2)</pre>Сопоставьте вызов и результат.",
"pairs": [
{
"left": "f(2)",
"right": "2"
},
{
"left": "f(7)",
"right": "21"
},
{
"left": "f(6)",
"right": "13"
},
{
"left": "f(0)",
"right": "1"
}
],
"explain": "f(0) = f(1) = 1, далее каждое значение — сумма двух предыдущих."
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "sum(map(int, '123'))",
"right": "6"
},
{
"left": "list(map(len, ['a', 'bb']))",
"right": "[1, 2]"
},
{
"left": "list(filter(None, [0, 1, '', 'a']))",
"right": "[1, 'a']"
},
{
"left": "sorted('cab')",
"right": "['a', 'b', 'c']"
}
],
"explain": "filter(None, …) оставляет истинные значения; key=lambda x: −x превращает max в поиск минимума.",
"distractors": [
"['1', '2']",
"cba"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"Ошибка",
"5\nNone",
"(4, 0)"
],
"answer": 3,
"explain": "Функция без return возвращает None; return сразу завершает функцию. Программа выводит: <code>(4, 0)</code>.",
"code": "def f(x, y):\n    return x // y, x % y\n\nprint(f(4, 1))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[3, 4, 5]",
"[2, 4, 6]",
"[2, 4, 6] 6]",
"6] 4, [2,"
],
"answer": 1,
"explain": "map применяет функцию к каждому элементу, filter оставляет элементы, для которых функция истинна, key задаёт, по какому признаку сравнивать. Программа выводит: <code>[2, 4, 6]</code>.",
"code": "print(list(map(lambda x: x * 2, [1, 2, 3])))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"38",
"18",
"19",
"-19"
],
"answer": 2,
"explain": "Рекурсия: функция вызывает сама себя с меньшим аргументом до базового случая; результат собирается на обратном ходе. Программа выводит: <code>19</code>.",
"code": "def f(n):\n    if n == 0:\n        return 0\n    return n % 10 + f(n // 10)\n\nprint(f(5428))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие вызовы функции выполнятся без ошибки?",
"options": [
"f(1, a=2)",
"f(a=1, b=2)",
"f(c=1)",
"f()",
"f(1, c=5)",
"f(1, 2, c=3, d=4)"
],
"answer": [
1,
4
],
"explain": "Параметр a обязателен; c можно передать только по имени; неизвестный именованный аргумент d — ошибка; a нельзя передать дважды.",
"code": "def f(a, b=0, *args, c=1):\n    return a + b + sum(args) + c",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5] 0, [3,",
"[3, 0, 5]",
"[3, 0, 5] 5]",
"[3, 0,"
],
"answer": 1,
"explain": "map применяет функцию к каждому элементу, filter оставляет элементы, для которых функция истинна, key задаёт, по какому признаку сравнивать. Программа выводит: <code>[3, 0, 5]</code>.",
"code": "print(list(map(int, '305')))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"6",
"9",
"7",
"12"
],
"answer": 0,
"explain": "Рекурсия: функция вызывает сама себя с меньшим аргументом до базового случая; результат собирается на обратном ходе. Программа выводит: <code>6</code>.",
"code": "def f(n):\n    if n <= 0:\n        return 0\n    return n + f(n - 2)\n\nprint(f(4))",
"codeOptions": true
},
{
"type": "matching",
"q": "Дана функция:<pre>def f(n):\n    if n &lt;= 1:\n        return 1\n    return f(n - 1) + f(n - 2)</pre>Сопоставьте вызов и результат.",
"pairs": [
{
"left": "f(8)",
"right": "34"
},
{
"left": "f(2)",
"right": "2"
},
{
"left": "f(5)",
"right": "8"
},
{
"left": "f(7)",
"right": "21"
}
],
"explain": "f(0) = f(1) = 1, далее каждое значение — сумма двух предыдущих."
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "list(map(str, [1, 2]))",
"right": "['1', '2']"
},
{
"left": "list(map(lambda x: x ** 2, range(3)))",
"right": "[0, 1, 4]"
},
{
"left": "sorted('cab')",
"right": "['a', 'b', 'c']"
},
{
"left": "list(filter(None, [0, 1, '', 'a']))",
"right": "[1, 'a']"
}
],
"explain": "filter(None, …) оставляет истинные значения; key=lambda x: −x превращает max в поиск минимума.",
"distractors": [
"[1, 2]",
"cba"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5040",
"5039",
"10080",
"720"
],
"answer": 0,
"explain": "Рекурсия: функция вызывает сама себя с меньшим аргументом до базового случая; результат собирается на обратном ходе. Программа выводит: <code>5040</code>.",
"code": "def f(n):\n    if n <= 1:\n        return 1\n    return n * f(n - 1)\n\nprint(f(7))",
"codeOptions": true
},
{
"type": "single",
"q": "Какую ошибку вызовет бесконечная рекурсия в Python?",
"options": [
"IndexError",
"SyntaxError",
"ZeroDivisionError",
"RecursionError"
],
"answer": 3,
"explain": "Глубина рекурсии ограничена (около 1000 вызовов)."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"abc",
"cba",
"ABC"
],
"answer": 1,
"explain": "map применяет функцию к каждому элементу, filter оставляет элементы, для которых функция истинна, key задаёт, по какому признаку сравнивать. Программа выводит: <code>abc</code>.",
"code": "print(max(['ab', 'abc', 'z'], key=len))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5] 3, [1,",
"[1, 3, 5]",
"Ошибка",
"[1, 3,"
],
"answer": 1,
"explain": "map применяет функцию к каждому элементу, filter оставляет элементы, для которых функция истинна, key задаёт, по какому признаку сравнивать. Программа выводит: <code>[1, 3, 5]</code>.",
"code": "print(list(filter(lambda x: x % 2, range(6))))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "(lambda x: x[::-1])('abc')",
"right": "cba"
},
{
"left": "sorted('cab')",
"right": "['a', 'b', 'c']"
},
{
"left": "list(filter(None, [0, 1, '', 'a']))",
"right": "[1, 'a']"
},
{
"left": "list(map(str, [1, 2]))",
"right": "['1', '2']"
}
],
"explain": "filter(None, …) оставляет истинные значения; key=lambda x: −x превращает max в поиск минимума.",
"distractors": [
"[1, 2]",
"6"
]
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "max([1, 5, 3], key=lambda x: -x)",
"right": "1"
},
{
"left": "list(map(len, ['a', 'bb']))",
"right": "[1, 2]"
},
{
"left": "list(map(str, [1, 2]))",
"right": "['1', '2']"
},
{
"left": "list(map(lambda x: x ** 2, range(3)))",
"right": "[0, 1, 4]"
}
],
"explain": "filter(None, …) оставляет истинные значения; key=lambda x: −x превращает max в поиск минимума.",
"distractors": [
"[1, 'a']",
"['a', 'b', 'c']"
]
},
{
"type": "multiple",
"q": "Какие функции при вызове f() вернут None?",
"options": [
"def f(): pass",
"def f(): print(1)",
"def f():\n    if False:\n        return 5",
"def f(): return []",
"def f(): return ''",
"def f(): return None"
],
"answer": [
0,
1,
2,
5
],
"explain": "Без return, с пустым return или если до return дело не дошло — функция возвращает None. 0, [] и '' — это не None.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[2, 4, 6] 6]",
"[3, 4, 5]",
"[2, 4, 6]",
"6] 4, [2,"
],
"answer": 2,
"explain": "map применяет функцию к каждому элементу, filter оставляет элементы, для которых функция истинна, key задаёт, по какому признаку сравнивать. Программа выводит: <code>[2, 4, 6]</code>.",
"code": "print(list(map(lambda x: x * 2, [1, 2, 3])))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"10001",
"10010",
"10003",
"10002"
],
"answer": 0,
"explain": "Рекурсия: функция вызывает сама себя с меньшим аргументом до базового случая; результат собирается на обратном ходе. Программа выводит: <code>10001</code>.",
"code": "def f(n):\n    if n == 0:\n        return ''\n    return f(n // 2) + str(n % 2)\n\nprint(f(17))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие функции при вызове f() вернут None?",
"options": [
"def f(): return []",
"def f():\n    if False:\n        return 5",
"def f(): return",
"def f(): return None",
"def f(): print(1)",
"def f(): return ''"
],
"answer": [
1,
2,
3,
4
],
"explain": "Без return, с пустым return или если до return дело не дошло — функция возвращает None. 0, [] и '' — это не None.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"10",
"Ошибка",
"15",
"6"
],
"answer": 2,
"explain": "Параметры по умолчанию используются, если аргумент не передан; именованные аргументы передаются по имени в любом порядке. Программа выводит: <code>15</code>.",
"code": "def f(a, b=1, c=0):\n    return a * b + c\n\nprint(f(5, c=10))",
"codeOptions": true
},
{
"type": "matching",
"q": "Дана функция:<pre>def f(n):\n    if n &lt;= 1:\n        return 1\n    return f(n - 1) + f(n - 2)</pre>Сопоставьте вызов и результат.",
"pairs": [
{
"left": "f(2)",
"right": "2"
},
{
"left": "f(3)",
"right": "3"
},
{
"left": "f(4)",
"right": "5"
},
{
"left": "f(8)",
"right": "34"
}
],
"explain": "f(0) = f(1) = 1, далее каждое значение — сумма двух предыдущих."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3",
"1",
"5",
"2"
],
"answer": 2,
"explain": "Вложенная функция «запоминает» переменные внешней (замыкание); nonlocal позволяет их менять; декоратор оборачивает функцию. Программа выводит: <code>5</code>.",
"code": "def deco(fn):\n    def w(x):\n        return fn(x) + 1\n    return w\n\n@deco\ndef sq(x):\n    return x * x\n\nprint(sq(2))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1 2 3 4",
"4 3 2 1",
"4 3 2 1 1 2 3 4",
"4 4 3 3 2 2 1 1 1 2 3 4"
],
"answer": 2,
"explain": "Печать ДО рекурсивного вызова выполняется на прямом ходе (n, n−1, …), ПОСЛЕ — на обратном (1, 2, …, n). Программа выводит: <code>4 3 2 1 1 2 3 4</code>.",
"code": "def f(n):\n    if n > 0:\n        print(n, end=' ')\n        f(n - 1)\n        print(n, end=' ')\n\nf(4)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие функции при вызове f() вернут None?",
"options": [
"def f(): return ''",
"def f(): pass",
"def f(): return None",
"def f(): return 0",
"def f(): return",
"def f(): print(1)"
],
"answer": [
1,
2,
4,
5
],
"explain": "Без return, с пустым return или если до return дело не дошло — функция возвращает None. 0, [] и '' — это не None.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[1, 2, 3]",
"Ошибка",
"None",
"10"
],
"answer": 3,
"explain": "*args собирает все позиционные аргументы в кортеж. Программа выводит: <code>10</code>.",
"code": "def f(*args):\n    return sum(args)\n\nprint(f(1, 2, 3, 4))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4 3 2 1",
"4 4 3 3 2 2 1 1 1 2 3 4",
"0",
"4 3 2 1 1 2 3 4"
],
"answer": 3,
"explain": "Печать ДО рекурсивного вызова выполняется на прямом ходе (n, n−1, …), ПОСЛЕ — на обратном (1, 2, …, n). Программа выводит: <code>4 3 2 1 1 2 3 4</code>.",
"code": "def f(n):\n    if n > 0:\n        print(n, end=' ')\n        f(n - 1)\n        print(n, end=' ')\n\nf(4)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дана функция:<pre>def f(n):\n    if n &lt;= 1:\n        return 1\n    return f(n - 1) + f(n - 2)</pre>Сопоставьте вызов и результат.",
"pairs": [
{
"left": "f(3)",
"right": "3"
},
{
"left": "f(7)",
"right": "21"
},
{
"left": "f(5)",
"right": "8"
},
{
"left": "f(8)",
"right": "34"
}
],
"explain": "f(0) = f(1) = 1, далее каждое значение — сумма двух предыдущих."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2",
"Ошибка",
"4",
"12"
],
"answer": 0,
"explain": "Параметры по умолчанию используются, если аргумент не передан; именованные аргументы передаются по имени в любом порядке. Программа выводит: <code>2</code>.",
"code": "def f(a, b=1, c=0):\n    return a * b + c\n\nprint(f(2))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"[1, 2, 3]",
"()",
"(1, 2, 3)"
],
"answer": 3,
"explain": "*args собирает все позиционные аргументы в кортеж. Программа выводит: <code>(1, 2, 3)</code>.",
"code": "def f(*args):\n    return args\n\nprint(f(1, 2, 3))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Что верно о lambda-функциях?",
"options": [
"содержат одно выражение",
"обязательно имеют имя",
"часто передаются в sorted(key=…)",
"могут иметь параметры по умолчанию",
"могут содержать несколько операторов и циклы"
],
"answer": [
0,
2,
3
],
"explain": "lambda — анонимная функция из одного выражения."
},
{
"type": "multiple",
"q": "Какие функции при вызове f() вернут None?",
"options": [
"def f(): return",
"def f(): return 0",
"def f(): print(1)",
"def f(): return None",
"def f(): return ''",
"def f(): return []"
],
"answer": [
0,
2,
3
],
"explain": "Без return, с пустым return или если до return дело не дошло — функция возвращает None. 0, [] и '' — это не None.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"6",
"0",
"()",
"1"
],
"answer": 3,
"explain": "*args собирает все позиционные аргументы в кортеж. Программа выводит: <code>1</code>.",
"code": "def f(*args):\n    return len(args)\n\nprint(f(5))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2 1",
"1 2",
"0",
"2 1 1 2"
],
"answer": 1,
"explain": "Печать ДО рекурсивного вызова выполняется на прямом ходе (n, n−1, …), ПОСЛЕ — на обратном (1, 2, …, n). Программа выводит: <code>1 2</code>.",
"code": "def f(n):\n    if n > 0:\n        f(n - 1)\n        print(n, end=' ')\n\nf(2)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3",
"Ошибка",
"10",
"9"
],
"answer": 2,
"explain": "Вложенная функция «запоминает» переменные внешней (замыкание); nonlocal позволяет их менять; декоратор оборачивает функцию. Программа выводит: <code>10</code>.",
"code": "def deco(fn):\n    def w(x):\n        return fn(x) + 1\n    return w\n\n@deco\ndef sq(x):\n    return x * x\n\nprint(sq(3))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"11",
"5",
"2",
"1"
],
"answer": 1,
"explain": "Вложенная функция «запоминает» переменные внешней (замыкание); nonlocal позволяет их менять; декоратор оборачивает функцию. Программа выводит: <code>5</code>.",
"code": "def deco(fn):\n    def w(x):\n        return fn(x) + 1\n    return w\n\n@deco\ndef sq(x):\n    return x * x\n\nprint(sq(2))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие объявления параметров синтаксически правильны?",
"options": [
"def f(a=1, b):",
"def f(**kwargs, *args):",
"def f(*args, **kwargs):",
"def f(a, b=1):",
"def f(a, *, key=0):"
],
"answer": [
2,
3,
4
],
"explain": "Параметры без значения по умолчанию идут раньше параметров со значением; *args — раньше **kwargs."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"11",
"17",
"16"
],
"answer": 2,
"explain": "Функция без return возвращает None; return сразу завершает функцию. Программа выводит: <code>17</code>.",
"code": "def f(x, y):\n    return x * 2 + y\n\nprint(f(6, 5))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"10",
"[1, 2, 3]",
"None",
"()"
],
"answer": 0,
"explain": "*args собирает все позиционные аргументы в кортеж. Программа выводит: <code>10</code>.",
"code": "def f(*args):\n    return sum(args)\n\nprint(f(1, 2, 3, 4))",
"codeOptions": true
},
{
"type": "single",
"q": "Чем процедура отличается от функции (в терминологии ЕНТ)?",
"options": [
"процедура пишется через lambda",
"отличий нет",
"процедура не возвращает значение",
"процедура не может иметь параметров"
],
"answer": 2,
"explain": "В Python процедура — это функция без return (возвращает None)."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"100",
"2\n1",
"2"
],
"answer": 1,
"explain": "Присваивание внутри функции создаёт локальную переменную, если нет global; x += 1 без global даёт ошибку UnboundLocalError. Программа выводит: <code>100</code>.",
"code": "x = 1\ndef f():\n    global x\n    x = 100\n\nf()\nprint(x)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "(lambda x: x[::-1])('abc')",
"right": "cba"
},
{
"left": "list(map(lambda x: x ** 2, range(3)))",
"right": "[0, 1, 4]"
},
{
"left": "sorted('cab')",
"right": "['a', 'b', 'c']"
},
{
"left": "sum(map(int, '123'))",
"right": "6"
}
],
"explain": "filter(None, …) оставляет истинные значения; key=lambda x: −x превращает max в поиск минимума.",
"distractors": [
"['1', '2']",
"[1, 'a']"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0",
"4 3 2 1",
"4 4 3 3 2 2 1 1 1 2 3 4",
"4 3 2 1 1 2 3 4"
],
"answer": 3,
"explain": "Печать ДО рекурсивного вызова выполняется на прямом ходе (n, n−1, …), ПОСЛЕ — на обратном (1, 2, …, n). Программа выводит: <code>4 3 2 1 1 2 3 4</code>.",
"code": "def f(n):\n    if n > 0:\n        print(n, end=' ')\n        f(n - 1)\n        print(n, end=' ')\n\nf(4)",
"codeOptions": true
},
{
"type": "single",
"q": "Что обязательно должно быть в рекурсивной функции, чтобы она завершилась?",
"options": [
"цикл while",
"базовый случай (условие выхода)",
"глобальная переменная",
"ровно один параметр"
],
"answer": 1,
"explain": "Без базового случая рекурсия бесконечна → RecursionError."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5] 3, [1,",
"[1, 3, 5]",
"[1, 3,",
"3, 5]"
],
"answer": 1,
"explain": "map применяет функцию к каждому элементу, filter оставляет элементы, для которых функция истинна, key задаёт, по какому признаку сравнивать. Программа выводит: <code>[1, 3, 5]</code>.",
"code": "print(list(filter(lambda x: x % 2, range(6))))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"Ошибка",
"16",
"12"
],
"answer": 2,
"explain": "Параметры по умолчанию используются, если аргумент не передан; именованные аргументы передаются по имени в любом порядке. Программа выводит: <code>16</code>.",
"code": "def f(a, b=1, c=0):\n    return a * b + c\n\nprint(f(6, c=10))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие функции при вызове f() вернут None?",
"options": [
"def f(): return []",
"def f(): return 0",
"def f(): return None",
"def f(): return",
"def f(): return ''",
"def f(): pass"
],
"answer": [
2,
3,
5
],
"explain": "Без return, с пустым return или если до return дело не дошло — функция возвращает None. 0, [] и '' — это не None.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"720",
"1440",
"722",
"120"
],
"answer": 0,
"explain": "Рекурсия: функция вызывает сама себя с меньшим аргументом до базового случая; результат собирается на обратном ходе. Программа выводит: <code>720</code>.",
"code": "def f(n):\n    if n <= 1:\n        return 1\n    return n * f(n - 1)\n\nprint(f(6))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"9",
"16",
"Ошибка",
"4"
],
"answer": 3,
"explain": "Вложенная функция «запоминает» переменные внешней (замыкание); nonlocal позволяет их менять; декоратор оборачивает функцию. Программа выводит: <code>4</code>.",
"code": "def counter():\n    c = 0\n    def inc():\n        nonlocal c\n        c += 1\n        return c\n    return inc\n\nf = counter()\nfor _ in range(3):\n    f()\nprint(f())",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"6",
"0",
"(1, 2, 3)"
],
"answer": 3,
"explain": "*args собирает все позиционные аргументы в кортеж. Программа выводит: <code>(1, 2, 3)</code>.",
"code": "def f(*args):\n    return args\n\nprint(f(1, 2, 3))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5",
"()",
"6",
"None"
],
"answer": 0,
"explain": "*args собирает все позиционные аргументы в кортеж. Программа выводит: <code>5</code>.",
"code": "def f(*args):\n    return sum(args)\n\nprint(f(5))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2",
"Ошибка",
"1",
"11"
],
"answer": 0,
"explain": "Параметры по умолчанию используются, если аргумент не передан; именованные аргументы передаются по имени в любом порядке. Программа выводит: <code>2</code>.",
"code": "def f(a, b=1, c=0):\n    return a * b + c\n\nprint(f(b=2, a=1))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "list(map(lambda x: x ** 2, range(3)))",
"right": "[0, 1, 4]"
},
{
"left": "list(map(len, ['a', 'bb']))",
"right": "[1, 2]"
},
{
"left": "max([1, 5, 3], key=lambda x: -x)",
"right": "1"
},
{
"left": "sorted('cab')",
"right": "['a', 'b', 'c']"
}
],
"explain": "filter(None, …) оставляет истинные значения; key=lambda x: −x превращает max в поиск минимума.",
"distractors": [
"['1', '2']",
"[1, 'a']"
]
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "max([1, 5, 3], key=lambda x: -x)",
"right": "1"
},
{
"left": "list(map(str, [1, 2]))",
"right": "['1', '2']"
},
{
"left": "sorted('cab')",
"right": "['a', 'b', 'c']"
},
{
"left": "list(map(lambda x: x ** 2, range(3)))",
"right": "[0, 1, 4]"
}
],
"explain": "filter(None, …) оставляет истинные значения; key=lambda x: −x превращает max в поиск минимума.",
"distractors": [
"[1, 'a']",
"[1, 2]"
]
},
{
"type": "multiple",
"q": "Какие вызовы функции выполнятся без ошибки?",
"options": [
"f(1, 2, 3, 4)",
"f()",
"f(c=1)",
"f(1, 2)",
"f(a=1, b=2)",
"f(1)"
],
"answer": [
0,
3,
4,
5
],
"explain": "Параметр a обязателен; c можно передать только по имени; неизвестный именованный аргумент d — ошибка; a нельзя передать дважды.",
"code": "def f(a, b=0, *args, c=1):\n    return a + b + sum(args) + c",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4",
"16",
"9",
"1"
],
"answer": 0,
"explain": "Вложенная функция «запоминает» переменные внешней (замыкание); nonlocal позволяет их менять; декоратор оборачивает функцию. Программа выводит: <code>4</code>.",
"code": "def counter():\n    c = 0\n    def inc():\n        nonlocal c\n        c += 1\n        return c\n    return inc\n\nf = counter()\nfor _ in range(3):\n    f()\nprint(f())",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4 3 2 1 1 2 3 4",
"1 2 3 4",
"4 3 2 1",
"4 4 3 3 2 2 1 1 1 2 3 4"
],
"answer": 0,
"explain": "Печать ДО рекурсивного вызова выполняется на прямом ходе (n, n−1, …), ПОСЛЕ — на обратном (1, 2, …, n). Программа выводит: <code>4 3 2 1 1 2 3 4</code>.",
"code": "def f(n):\n    if n > 0:\n        print(n, end=' ')\n        f(n - 1)\n        print(n, end=' ')\n\nf(4)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"100",
"9\n8",
"8",
"9"
],
"answer": 2,
"explain": "Присваивание внутри функции создаёт локальную переменную, если нет global; x += 1 без global даёт ошибку UnboundLocalError. Программа выводит: <code>8</code>.",
"code": "x = 8\ndef f():\n    x = 100\n\nf()\nprint(x)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие функции при вызове f() вернут None?",
"options": [
"def f(): return 0",
"def f(): return",
"def f(): return None",
"def f(): print(1)",
"def f(): return []",
"def f():\n    if False:\n        return 5"
],
"answer": [
1,
2,
3,
5
],
"explain": "Без return, с пустым return или если до return дело не дошло — функция возвращает None. 0, [] и '' — это не None.",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "sum(map(int, '123'))",
"right": "6"
},
{
"left": "max([1, 5, 3], key=lambda x: -x)",
"right": "1"
},
{
"left": "list(map(lambda x: x ** 2, range(3)))",
"right": "[0, 1, 4]"
},
{
"left": "sorted('cab')",
"right": "['a', 'b', 'c']"
}
],
"explain": "filter(None, …) оставляет истинные значения; key=lambda x: −x превращает max в поиск минимума.",
"distractors": [
"['1', '2']",
"[1, 'a']"
]
},
{
"type": "multiple",
"q": "Какие вызовы функции выполнятся без ошибки?",
"options": [
"f(c=1)",
"f(1, 2, 3, 4)",
"f(1, 2)",
"f(1, c=5)",
"f()",
"f(1)"
],
"answer": [
1,
2,
3,
5
],
"explain": "Параметр a обязателен; c можно передать только по имени; неизвестный именованный аргумент d — ошибка; a нельзя передать дважды.",
"code": "def f(a, b=0, *args, c=1):\n    return a + b + sum(args) + c",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие вызовы функции выполнятся без ошибки?",
"options": [
"f(1, 2)",
"f(c=1)",
"f(1)",
"f(1, c=5)",
"f(1, a=2)",
"f(1, 2, c=3, d=4)"
],
"answer": [
0,
2,
3
],
"explain": "Параметр a обязателен; c можно передать только по имени; неизвестный именованный аргумент d — ошибка; a нельзя передать дважды.",
"code": "def f(a, b=0, *args, c=1):\n    return a + b + sum(args) + c",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"13",
"9",
"8"
],
"answer": 3,
"explain": "Рекурсия: функция вызывает сама себя с меньшим аргументом до базового случая; результат собирается на обратном ходе. Программа выводит: <code>8</code>.",
"code": "def f(n):\n    if n < 2:\n        return n\n    return f(n - 1) + f(n - 2)\n\nprint(f(6))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие вызовы функции выполнятся без ошибки?",
"options": [
"f(1, 2, 3, 4)",
"f(1)",
"f(a=1, b=2)",
"f()",
"f(1, a=2)",
"f(1, 2, c=3, d=4)"
],
"answer": [
0,
1,
2
],
"explain": "Параметр a обязателен; c можно передать только по имени; неизвестный именованный аргумент d — ошибка; a нельзя передать дважды.",
"code": "def f(a, b=0, *args, c=1):\n    return a + b + sum(args) + c",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2",
"2\n1",
"1",
"100"
],
"answer": 2,
"explain": "Присваивание внутри функции создаёт локальную переменную, если нет global; x += 1 без global даёт ошибку UnboundLocalError. Программа выводит: <code>1</code>.",
"code": "x = 1\ndef f():\n    x = 100\n\nf()\nprint(x)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "list(filter(None, [0, 1, '', 'a']))",
"right": "[1, 'a']"
},
{
"left": "list(map(len, ['a', 'bb']))",
"right": "[1, 2]"
},
{
"left": "list(map(lambda x: x ** 2, range(3)))",
"right": "[0, 1, 4]"
},
{
"left": "max([1, 5, 3], key=lambda x: -x)",
"right": "1"
}
],
"explain": "filter(None, …) оставляет истинные значения; key=lambda x: −x превращает max в поиск минимума.",
"distractors": [
"['1', '2']",
"['a', 'b', 'c']"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"35",
"12\nNone",
"Ошибка",
"12"
],
"answer": 0,
"explain": "Функция без return возвращает None; return сразу завершает функцию. Программа выводит: <code>35</code>.",
"code": "def f(x, y):\n    s = 0\n    for i in range(x):\n        s += y\n    return s\n\nprint(f(5, 7))",
"codeOptions": true
},
{
"type": "matching",
"q": "Дана функция:<pre>def f(n):\n    if n &lt;= 1:\n        return 1\n    return f(n - 1) + f(n - 2)</pre>Сопоставьте вызов и результат.",
"pairs": [
{
"left": "f(3)",
"right": "3"
},
{
"left": "f(6)",
"right": "13"
},
{
"left": "f(8)",
"right": "34"
},
{
"left": "f(2)",
"right": "2"
}
],
"explain": "f(0) = f(1) = 1, далее каждое значение — сумма двух предыдущих."
},
{
"type": "multiple",
"q": "Какие функции при вызове f() вернут None?",
"options": [
"def f(): return ''",
"def f(): return",
"def f():\n    if False:\n        return 5",
"def f(): print(1)",
"def f(): return []",
"def f(): pass"
],
"answer": [
1,
2,
3,
5
],
"explain": "Без return, с пустым return или если до return дело не дошло — функция возвращает None. 0, [] и '' — это не None.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2 1",
"0",
"2 1 1 2",
"1 2"
],
"answer": 3,
"explain": "Печать ДО рекурсивного вызова выполняется на прямом ходе (n, n−1, …), ПОСЛЕ — на обратном (1, 2, …, n). Программа выводит: <code>1 2</code>.",
"code": "def f(n):\n    if n > 0:\n        f(n - 1)\n        print(n, end=' ')\n\nf(2)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"11",
"Ошибка",
"1",
"2"
],
"answer": 3,
"explain": "Параметры по умолчанию используются, если аргумент не передан; именованные аргументы передаются по имени в любом порядке. Программа выводит: <code>2</code>.",
"code": "def f(a, b=1, c=0):\n    return a * b + c\n\nprint(f(b=2, a=1))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0",
"1 2 3 4",
"4 3 2 1",
"4 3 2 1 1 2 3 4"
],
"answer": 1,
"explain": "Печать ДО рекурсивного вызова выполняется на прямом ходе (n, n−1, …), ПОСЛЕ — на обратном (1, 2, …, n). Программа выводит: <code>1 2 3 4</code>.",
"code": "def f(n):\n    if n > 0:\n        f(n - 1)\n        print(n, end=' ')\n\nf(4)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дана функция:<pre>def f(n):\n    if n &lt;= 1:\n        return 1\n    return f(n - 1) + f(n - 2)</pre>Сопоставьте вызов и результат.",
"pairs": [
{
"left": "f(8)",
"right": "34"
},
{
"left": "f(7)",
"right": "21"
},
{
"left": "f(0)",
"right": "1"
},
{
"left": "f(3)",
"right": "3"
}
],
"explain": "f(0) = f(1) = 1, далее каждое значение — сумма двух предыдущих."
}
],
"m7": [
{
"type": "matching",
"q": "Дан d = {'a': 1, 'b': 5, 'c': 2}. Сопоставьте выражение и результат.",
"pairs": [
{
"left": "sum(d.values())",
"right": "8"
},
{
"left": "list(d)",
"right": "['a', 'b', 'c']"
},
{
"left": "d.get('x', 0)",
"right": "0"
},
{
"left": "d['b']",
"right": "5"
}
],
"explain": "in проверяет КЛЮЧИ словаря, а не значения.",
"distractors": [
"3",
"True"
]
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"6",
"True",
"[1, 2, 3]",
"dict"
],
"answer": 3,
"explain": "Множество хранит только уникальные значения; {} — пустой словарь, а не множество; 1, 1.0 и True равны и дают один элемент.",
"code": "type({}).__name__",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[8]",
"[]",
"[4, 6, 7]",
"[1, 3, 4, 5, 6, 7]"
],
"answer": 3,
"explain": "&amp; — пересечение, | — объединение, − — разность, ^ — симметрическая разность (элементы ровно одного множества). Программа выводит: <code>[1, 3, 4, 5, 6, 7]</code>.",
"code": "A = [4, 6, 7, 8]\nB = [1, 3, 5, 8]\nA, B = set(A), set(B)\nprint(sorted(A ^ B) if isinstance(A ^ B, set) else A ^ B)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"{}",
"Ошибка",
"{'a': 10, 'c': 3}",
"{'a': 11, 'c': 3}"
],
"answer": 3,
"explain": "Присваивание по новому ключу добавляет пару, по существующему — заменяет значение; d.get(c, 0) + 1 — шаблон подсчёта. Программа выводит: <code>{'a': 11, 'c': 3}</code>.",
"code": "d = {'a': 1, 'b': 2}\nd['c'] = 3\nd['a'] += 10\ndel d['b']\nprint(d)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и исключение, которое оно вызовет.",
"pairs": [
{
"left": "{'a': 1}['b']",
"right": "KeyError"
},
{
"left": "int(None)",
"right": "TypeError"
},
{
"left": "open('нет_такого.txt')",
"right": "FileNotFoundError"
},
{
"left": "int('abc')",
"right": "ValueError"
}
],
"explain": "Тип исключения подсказывает причину: неверное значение, индекс, ключ, тип, имя.",
"distractors": [
"ZeroDivisionError",
"IndexError"
]
},
{
"type": "single",
"q": "Какой режим открытия файла дописывает данные в конец?",
"options": [
"'a'",
"'w'",
"'r'",
"'x'"
],
"answer": 0,
"explain": "'w' перезаписывает файл, 'a' — дописывает, 'r' — только чтение."
},
{
"type": "single",
"q": "Зачем нужна конструкция with open(...) as f?",
"options": [
"файл откроется быстрее",
"файл создастся в облаке",
"файл закроется автоматически",
"файл станет доступен только для чтения"
],
"answer": 2,
"explain": "with гарантирует закрытие файла даже при ошибке."
},
{
"type": "multiple",
"q": "Какие выражения создают словарь без ошибки?",
"options": [
"{(1, 2): 'x'}",
"{{1}: 2}",
"dict(a=1)",
"{'a': {'b': 1}}",
"{1: [1, 2]}",
"dict(1, 2)"
],
"answer": [
0,
2,
3,
4
],
"explain": "Ключом может быть только неизменяемый (хешируемый) объект: число, строка, кортеж. Список и множество — нельзя.",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"[1, 2, 3]",
"True",
"3",
"6"
],
"answer": 1,
"explain": "Множество хранит только уникальные значения; {} — пустой словарь, а не множество; 1, 1.0 и True равны и дают один элемент.",
"code": "{1, 2} < {1, 2, 3}",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"не число",
"Ошибка",
"не число\nконец",
"конец"
],
"answer": 2,
"explain": "else выполняется, если исключения не было; finally — всегда. Программа выводит: <code>не число\nконец</code>.",
"code": "s = '2.5'\ntry:\n    n = int(s)\n    print(10 // n)\nexcept ValueError:\n    print('не число')\nexcept ZeroDivisionError:\n    print('деление на 0')\nelse:\n    print('ok')\nfinally:\n    print('конец')",
"codeOptions": true
},
{
"type": "single",
"q": "Какой формат хранит данные в виде строк с разделителями (например, запятыми)?",
"options": [
"PNG",
"JSON",
"EXE",
"CSV"
],
"answer": 3,
"explain": "CSV — comma-separated values."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-3\nконец",
"конец",
"-3\nok",
"-3\nok\nконец"
],
"answer": 3,
"explain": "else выполняется, если исключения не было; finally — всегда. Программа выводит: <code>-3\nok\nконец</code>.",
"code": "s = '-4'\ntry:\n    n = int(s)\n    print(10 // n)\nexcept ValueError:\n    print('не число')\nexcept ZeroDivisionError:\n    print('деление на 0')\nelse:\n    print('ok')\nfinally:\n    print('конец')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[2, 3, 5, 6]",
"[1, 2, 3, 4, 5, 6, 7, 8]",
"[1, 4, 7, 8]",
"[]"
],
"answer": 3,
"explain": "&amp; — пересечение, | — объединение, − — разность, ^ — симметрическая разность (элементы ровно одного множества). Программа выводит: <code>[]</code>.",
"code": "A = [2, 3, 5, 6]\nB = [1, 4, 7, 8]\nA, B = set(A), set(B)\nprint(sorted(A & B) if isinstance(A & B, set) else A & B)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и исключение, которое оно вызовет.",
"pairs": [
{
"left": "int('abc')",
"right": "ValueError"
},
{
"left": "open('нет_такого.txt')",
"right": "FileNotFoundError"
},
{
"left": "{'a': 1}['b']",
"right": "KeyError"
},
{
"left": "undefined_name",
"right": "NameError"
}
],
"explain": "Тип исключения подсказывает причину: неверное значение, индекс, ключ, тип, имя.",
"distractors": [
"ZeroDivisionError",
"IndexError"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"x",
"x yy",
"Ошибка",
"yy"
],
"answer": 1,
"explain": "Присваивание по новому ключу добавляет пару, по существующему — заменяет значение; d.get(c, 0) + 1 — шаблон подсчёта. Программа выводит: <code>x yy</code>.",
"code": "d = {'x': 1, 'y': 2}\nfor k, v in d.items():\n    print(k * v, end=' ')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0",
"Ошибка",
"None",
"5"
],
"answer": 0,
"explain": "d[k] при отсутствии ключа — ошибка KeyError; d.get(k) — None, d.get(k, x) — x. Программа выводит: <code>0</code>.",
"code": "d = {'a': 8, 'b': 5, 'c': 4, 'd': 1}\nprint(d.get('z', 0))",
"codeOptions": true
},
{
"type": "single",
"q": "Файл data.txt содержит строки:<pre>Ali 83\nErlan 59\nTimur 86</pre>Что выведет программа?",
"options": [
"Ошибка",
"3",
"2",
"4"
],
"answer": 1,
"explain": "readlines() возвращает список строк; for line in f перебирает строки файла; split() делит строку по пробелам. Программа выводит: <code>3</code>.",
"code": "f = open('data.txt')\nprint(len(f.readlines()))\nf.close()",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"[2, 1, 4, 5]",
"e",
"Ошибка"
],
"answer": 2,
"explain": "d[k] при отсутствии ключа — ошибка KeyError; d.get(k) — None, d.get(k, x) — x. Программа выводит: <code>e</code>.",
"code": "d = {'b': 2, 'd': 1, 'c': 4, 'e': 5}\nprint(max(d, key=d.get))",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан d = {'a': 1, 'b': 5, 'c': 2}. Сопоставьте выражение и результат.",
"pairs": [
{
"left": "len(d)",
"right": "3"
},
{
"left": "'a' in d",
"right": "True"
},
{
"left": "list(d)",
"right": "['a', 'b', 'c']"
},
{
"left": "1 in d",
"right": "False"
}
],
"explain": "in проверяет КЛЮЧИ словаря, а не значения.",
"distractors": [
"0",
"5"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"0",
"('e', 8)",
"[8, 5, 9, 7]"
],
"answer": 2,
"explain": "d[k] при отсутствии ключа — ошибка KeyError; d.get(k) — None, d.get(k, x) — x. Программа выводит: <code>('e', 8)</code>.",
"code": "d = {'e': 8, 'd': 5, 'b': 9, 'c': 7}\nprint(list(d.items())[0])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"e",
"None",
"Ошибка",
"8"
],
"answer": 1,
"explain": "d[k] при отсутствии ключа — ошибка KeyError; d.get(k) — None, d.get(k, x) — x. Программа выводит: <code>None</code>.",
"code": "d = {'b': 1, 'd': 8, 'c': 9, 'e': 7}\nprint(d.get('z'))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4",
"Ошибка",
"None",
"0"
],
"answer": 0,
"explain": "d[k] при отсутствии ключа — ошибка KeyError; d.get(k) — None, d.get(k, x) — x. Программа выводит: <code>4</code>.",
"code": "d = {'c': 4, 'f': 3, 'e': 6, 'a': 9}\nprint(d['c'])",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения создают словарь без ошибки?",
"options": [
"dict(1, 2)",
"{1: [1, 2]}",
"{(1, 2): 'x'}",
"{[1, 2]: 'x'}",
"{{1}: 2}",
"{'a': {'b': 1}}"
],
"answer": [
1,
2,
5
],
"explain": "Ключом может быть только неизменяемый (хешируемый) объект: число, строка, кортеж. Список и множество — нельзя.",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан d = {'a': 1, 'b': 5, 'c': 2}. Сопоставьте выражение и результат.",
"pairs": [
{
"left": "'a' in d",
"right": "True"
},
{
"left": "1 in d",
"right": "False"
},
{
"left": "d['b']",
"right": "5"
},
{
"left": "sorted(d.values(), reverse=True)",
"right": "[5, 2, 1]"
}
],
"explain": "in проверяет КЛЮЧИ словаря, а не значения.",
"distractors": [
"0",
"3"
]
},
{
"type": "multiple",
"q": "Какие выражения создают словарь без ошибки?",
"options": [
"dict(1, 2)",
"{1: [1, 2]}",
"{{1}: 2}",
"{[1, 2]: 'x'}",
"{'a': {'b': 1}}",
"dict([('a', 1)])"
],
"answer": [
1,
4,
5
],
"explain": "Ключом может быть только неизменяемый (хешируемый) объект: число, строка, кортеж. Список и множество — нельзя.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Даны A = {1, 2, 3, 4} и B = {3, 4, 5}. Какие выражения равны {3, 4}?",
"options": [
"A - (A - B)",
"A | B",
"B - {5}",
"A & B",
"A - B",
"{3, 4}"
],
"answer": [
0,
2,
3,
5
],
"explain": "Пересечение — общие элементы. A − (A − B) — тоже пересечение.",
"codeOptions": true
},
{
"type": "single",
"q": "Файл data.txt содержит строки:<pre>Erlan 53\nDana 97\nDana 71</pre>Что выведет программа?",
"options": [
"2",
"Ошибка",
"221",
"4"
],
"answer": 2,
"explain": "readlines() возвращает список строк; for line in f перебирает строки файла; split() делит строку по пробелам. Программа выводит: <code>221</code>.",
"code": "with open('data.txt') as f:\n    s = 0\n    for line in f:\n        s += int(line.split()[1])\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"0",
"4",
"('b', 4)"
],
"answer": 3,
"explain": "d[k] при отсутствии ключа — ошибка KeyError; d.get(k) — None, d.get(k, x) — x. Программа выводит: <code>('b', 4)</code>.",
"code": "d = {'b': 4, 'd': 5, 'f': 2, 'a': 1}\nprint(list(d.items())[0])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"конец",
"не число",
"Ошибка",
"не число\nконец"
],
"answer": 3,
"explain": "else выполняется, если исключения не было; finally — всегда. Программа выводит: <code>не число\nконец</code>.",
"code": "s = 'abc'\ntry:\n    n = int(s)\n    print(10 // n)\nexcept ValueError:\n    print('не число')\nexcept ZeroDivisionError:\n    print('деление на 0')\nelse:\n    print('ok')\nfinally:\n    print('конец')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"не число\nконец",
"конец",
"Ошибка",
"не число"
],
"answer": 0,
"explain": "else выполняется, если исключения не было; finally — всегда. Программа выводит: <code>не число\nконец</code>.",
"code": "s = '2.5'\ntry:\n    n = int(s)\n    print(10 // n)\nexcept ValueError:\n    print('не число')\nexcept ZeroDivisionError:\n    print('деление на 0')\nelse:\n    print('ok')\nfinally:\n    print('конец')",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан d = {'a': 1, 'b': 5, 'c': 2}. Сопоставьте выражение и результат.",
"pairs": [
{
"left": "list(d)",
"right": "['a', 'b', 'c']"
},
{
"left": "d['b']",
"right": "5"
},
{
"left": "sum(d.values())",
"right": "8"
},
{
"left": "1 in d",
"right": "False"
}
],
"explain": "in проверяет КЛЮЧИ словаря, а не значения.",
"distractors": [
"0",
"3"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"{}",
"{'б': 2, 'а': 4, 'н': 4}",
"{'б': 1, 'а': 2, 'н': 2}"
],
"answer": 3,
"explain": "Присваивание по новому ключу добавляет пару, по существующему — заменяет значение; d.get(c, 0) + 1 — шаблон подсчёта. Программа выводит: <code>{'б': 1, 'а': 2, 'н': 2}</code>.",
"code": "d = {}\nfor c in 'банан':\n    d[c] = d.get(c, 0) + 1\nprint(d)",
"codeOptions": true
},
{
"type": "single",
"q": "Файл data.txt содержит строки:<pre>Timur 54\nTimur 81\nAli 91\nErlan 79\nAli 63</pre>Что выведет программа?",
"options": [
"Ошибка",
"Timur 54",
"4",
"6"
],
"answer": 1,
"explain": "readlines() возвращает список строк; for line in f перебирает строки файла; split() делит строку по пробелам. Программа выводит: <code>Timur 54</code>.",
"code": "with open('data.txt') as f:\n    print(f.readline().strip())",
"codeOptions": true
},
{
"type": "single",
"q": "Файл data.txt содержит строки:<pre>Erlan 66\nAru 89\nAli 96</pre>Что выведет программа?",
"options": [
"Ошибка",
"4",
"3",
"2"
],
"answer": 2,
"explain": "readlines() возвращает список строк; for line in f перебирает строки файла; split() делит строку по пробелам. Программа выводит: <code>3</code>.",
"code": "with open('data.txt') as f:\n    data = f.read()\nprint(data.count('\\n'))",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"6",
"set",
"[1, 2, 3]",
"3"
],
"answer": 3,
"explain": "Множество хранит только уникальные значения; {} — пустой словарь, а не множество; 1, 1.0 и True равны и дают один элемент.",
"code": "len(set('banana'))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3",
"[1]",
"[4, 6, 7]",
"[1, 5]"
],
"answer": 0,
"explain": "&amp; — пересечение, | — объединение, − — разность, ^ — симметрическая разность (элементы ровно одного множества). Программа выводит: <code>3</code>.",
"code": "A = [1, 4, 6, 7]\nB = [4, 5, 6, 7]\nA, B = set(A), set(B)\nprint(sorted(len(A & B)) if isinstance(len(A & B), set) else len(A & B))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-3\nконец",
"-3\nok\nконец",
"-3\nok",
"конец"
],
"answer": 1,
"explain": "else выполняется, если исключения не было; finally — всегда. Программа выводит: <code>-3\nok\nконец</code>.",
"code": "s = '-4'\ntry:\n    n = int(s)\n    print(10 // n)\nexcept ValueError:\n    print('не число')\nexcept ZeroDivisionError:\n    print('деление на 0')\nelse:\n    print('ok')\nfinally:\n    print('конец')",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"dict",
"6",
"2",
"[1, 2, 3]"
],
"answer": 0,
"explain": "Множество хранит только уникальные значения; {} — пустой словарь, а не множество; 1, 1.0 и True равны и дают один элемент.",
"code": "type({}).__name__",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения создают словарь без ошибки?",
"options": [
"dict(a=1)",
"{{1}: 2}",
"{'a': 1}",
"{(1, 2): 'x'}",
"{[1, 2]: 'x'}",
"dict(1, 2)"
],
"answer": [
0,
2,
3
],
"explain": "Ключом может быть только неизменяемый (хешируемый) объект: число, строка, кортеж. Список и множество — нельзя.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"{'a': 1, 'b': 0}",
"{'a': 1, 'b':",
"0} 'b': 1, {'a':",
"1, 'b': 0}"
],
"answer": 0,
"explain": "Присваивание по новому ключу добавляет пару, по существующему — заменяет значение; d.get(c, 0) + 1 — шаблон подсчёта. Программа выводит: <code>{'a': 1, 'b': 0}</code>.",
"code": "d = dict.fromkeys('ab', 0)\nd['a'] += 1\nprint(d)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан d = {'a': 1, 'b': 5, 'c': 2}. Сопоставьте выражение и результат.",
"pairs": [
{
"left": "list(d)",
"right": "['a', 'b', 'c']"
},
{
"left": "sum(d.values())",
"right": "8"
},
{
"left": "len(d)",
"right": "3"
},
{
"left": "d.get('x', 0)",
"right": "0"
}
],
"explain": "in проверяет КЛЮЧИ словаря, а не значения.",
"distractors": [
"5",
"True"
]
},
{
"type": "single",
"q": "Как создать пустое множество?",
"options": [
"{}",
"set()",
"()",
"[]"
],
"answer": 1,
"explain": "{} — это пустой словарь."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"конец",
"2\nok\nконец",
"не число",
"2\nok"
],
"answer": 1,
"explain": "else выполняется, если исключения не было; finally — всегда. Программа выводит: <code>2\nok\nконец</code>.",
"code": "s = '5'\ntry:\n    n = int(s)\n    print(10 // n)\nexcept ValueError:\n    print('не число')\nexcept ZeroDivisionError:\n    print('деление на 0')\nelse:\n    print('ok')\nfinally:\n    print('конец')",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан d = {'a': 1, 'b': 5, 'c': 2}. Сопоставьте выражение и результат.",
"pairs": [
{
"left": "d.get('x', 0)",
"right": "0"
},
{
"left": "list(d)",
"right": "['a', 'b', 'c']"
},
{
"left": "d['b']",
"right": "5"
},
{
"left": "list(d.items())[-1]",
"right": "('c', 2)"
}
],
"explain": "in проверяет КЛЮЧИ словаря, а не значения.",
"distractors": [
"3",
"8"
]
},
{
"type": "matching",
"q": "Сопоставьте выражение и исключение, которое оно вызовет.",
"pairs": [
{
"left": "undefined_name",
"right": "NameError"
},
{
"left": "'a' + 1",
"right": "TypeError"
},
{
"left": "[1, 2][5]",
"right": "IndexError"
},
{
"left": "int('abc')",
"right": "ValueError"
}
],
"explain": "Тип исключения подсказывает причину: неверное значение, индекс, ключ, тип, имя.",
"distractors": [
"ZeroDivisionError",
"KeyError"
]
},
{
"type": "multiple",
"q": "Даны A = {1, 2, 3, 4} и B = {3, 4, 5}. Какие выражения равны {3, 4}?",
"options": [
"set([3, 4, 4])",
"A ^ B",
"B - {5}",
"A & B",
"B & A",
"A - B"
],
"answer": [
0,
2,
3,
4
],
"explain": "Пересечение — общие элементы. A − (A − B) — тоже пересечение.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Даны A = {1, 2, 3, 4} и B = {3, 4, 5}. Какие выражения равны {3, 4}?",
"options": [
"A - (A - B)",
"{3, 4}",
"A - B",
"B - {5}",
"set([3, 4, 4])",
"A | B"
],
"answer": [
0,
1,
3,
4
],
"explain": "Пересечение — общие элементы. A − (A − B) — тоже пересечение.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения создают словарь без ошибки?",
"options": [
"{{1}: 2}",
"dict([('a', 1)])",
"{[1, 2]: 'x'}",
"{(1, 2): 'x'}",
"{'a': {'b': 1}}",
"dict(a=1)"
],
"answer": [
1,
3,
4,
5
],
"explain": "Ключом может быть только неизменяемый (хешируемый) объект: число, строка, кортеж. Список и множество — нельзя.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[]",
"[3, 4, 5, 6, 7, 8]",
"[3, 6]",
"[3, 5, 6, 7]"
],
"answer": 1,
"explain": "&amp; — пересечение, | — объединение, − — разность, ^ — симметрическая разность (элементы ровно одного множества). Программа выводит: <code>[3, 4, 5, 6, 7, 8]</code>.",
"code": "A = [3, 4, 6, 8]\nB = [4, 5, 7, 8]\nA, B = set(A), set(B)\nprint(sorted(A | B) if isinstance(A | B, set) else A | B)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и исключение, которое оно вызовет.",
"pairs": [
{
"left": "int(None)",
"right": "TypeError"
},
{
"left": "{'a': 1}['b']",
"right": "KeyError"
},
{
"left": "1 / 0",
"right": "ZeroDivisionError"
},
{
"left": "[1, 2][5]",
"right": "IndexError"
}
],
"explain": "Тип исключения подсказывает причину: неверное значение, индекс, ключ, тип, имя.",
"distractors": [
"ValueError",
"NameError"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2\nok",
"не число",
"2\nok\nконец",
"конец"
],
"answer": 2,
"explain": "else выполняется, если исключения не было; finally — всегда. Программа выводит: <code>2\nok\nконец</code>.",
"code": "s = '5'\ntry:\n    n = int(s)\n    print(10 // n)\nexcept ValueError:\n    print('не число')\nexcept ZeroDivisionError:\n    print('деление на 0')\nelse:\n    print('ok')\nfinally:\n    print('конец')",
"codeOptions": true
},
{
"type": "multiple",
"q": "Что верно о множествах (set)?",
"options": [
"можно хранить списки",
"проверка x in s выполняется быстро",
"порядок элементов не гарантирован",
"к элементу можно обратиться по индексу s[0]",
"элементы не повторяются"
],
"answer": [
1,
2,
4
],
"explain": "Множества неупорядочены и хранят только хешируемые значения."
},
{
"type": "matching",
"q": "Дан d = {'a': 1, 'b': 5, 'c': 2}. Сопоставьте выражение и результат.",
"pairs": [
{
"left": "'a' in d",
"right": "True"
},
{
"left": "list(d.items())[-1]",
"right": "('c', 2)"
},
{
"left": "1 in d",
"right": "False"
},
{
"left": "d.get('x', 0)",
"right": "0"
}
],
"explain": "in проверяет КЛЮЧИ словаря, а не значения.",
"distractors": [
"3",
"['a', 'b', 'c']"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"{}",
"{'a': 11, 'c': 3}",
"Ошибка",
"{'a': 10, 'c': 3}"
],
"answer": 1,
"explain": "Присваивание по новому ключу добавляет пару, по существующему — заменяет значение; d.get(c, 0) + 1 — шаблон подсчёта. Программа выводит: <code>{'a': 11, 'c': 3}</code>.",
"code": "d = {'a': 1, 'b': 2}\nd['c'] = 3\nd['a'] += 10\ndel d['b']\nprint(d)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Даны A = {1, 2, 3, 4} и B = {3, 4, 5}. Какие выражения равны {3, 4}?",
"options": [
"A | B",
"B & A",
"A - B",
"A - (A - B)",
"B - {5}",
"A ^ B"
],
"answer": [
1,
3,
4
],
"explain": "Пересечение — общие элементы. A − (A − B) — тоже пересечение.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[5, 6]",
"[]",
"[2, 3]",
"[1, 8]"
],
"answer": 2,
"explain": "&amp; — пересечение, | — объединение, − — разность, ^ — симметрическая разность (элементы ровно одного множества). Программа выводит: <code>[2, 3]</code>.",
"code": "A = [1, 5, 6, 8]\nB = [2, 3, 5, 6]\nA, B = set(A), set(B)\nprint(sorted(B - A) if isinstance(B - A, set) else B - A)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и исключение, которое оно вызовет.",
"pairs": [
{
"left": "int(None)",
"right": "TypeError"
},
{
"left": "int('abc')",
"right": "ValueError"
},
{
"left": "open('нет_такого.txt')",
"right": "FileNotFoundError"
},
{
"left": "{'a': 1}['b']",
"right": "KeyError"
}
],
"explain": "Тип исключения подсказывает причину: неверное значение, индекс, ключ, тип, имя.",
"distractors": [
"ZeroDivisionError",
"IndexError"
]
},
{
"type": "multiple",
"q": "Какие выражения создают словарь без ошибки?",
"options": [
"dict(a=1)",
"{1: [1, 2]}",
"{{1}: 2}",
"dict([('a', 1)])",
"dict(1, 2)",
"{[1, 2]: 'x'}"
],
"answer": [
0,
1,
3
],
"explain": "Ключом может быть только неизменяемый (хешируемый) объект: число, строка, кортеж. Список и множество — нельзя.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4",
"Ошибка",
"None",
"f"
],
"answer": 0,
"explain": "d[k] при отсутствии ключа — ошибка KeyError; d.get(k) — None, d.get(k, x) — x. Программа выводит: <code>4</code>.",
"code": "d = {'e': 1, 'a': 6, 'b': 8, 'f': 2}\nprint(len(d))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Даны A = {1, 2, 3, 4} и B = {3, 4, 5}. Какие выражения равны {3, 4}?",
"options": [
"A | B",
"B - {5}",
"A - B",
"A ^ B",
"A & B",
"{3, 4}"
],
"answer": [
1,
4,
5
],
"explain": "Пересечение — общие элементы. A − (A − B) — тоже пересечение.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3 z",
"Ошибка",
"z 3",
"{}"
],
"answer": 0,
"explain": "Присваивание по новому ключу добавляет пару, по существующему — заменяет значение; d.get(c, 0) + 1 — шаблон подсчёта. Программа выводит: <code>3 z</code>.",
"code": "d = {1: 'x', 2: 'y'}\nd[1] = 'z'\nd.update({3: 'w'})\nprint(len(d), d[1])",
"codeOptions": true
},
{
"type": "single",
"q": "Файл data.txt содержит строки:<pre>Timur 80\nDana 86\nErlan 85\nErlan 89\nTimur 94</pre>Что выведет программа?",
"options": [
"Ошибка",
"Timur 80",
"6",
"4"
],
"answer": 1,
"explain": "readlines() возвращает список строк; for line in f перебирает строки файла; split() делит строку по пробелам. Программа выводит: <code>Timur 80</code>.",
"code": "with open('data.txt') as f:\n    print(f.readline().strip())",
"codeOptions": true
},
{
"type": "multiple",
"q": "Даны A = {1, 2, 3, 4} и B = {3, 4, 5}. Какие выражения равны {3, 4}?",
"options": [
"A ^ B",
"A & B",
"B - {5}",
"B & A",
"{3, 4}",
"A | B"
],
"answer": [
1,
2,
3,
4
],
"explain": "Пересечение — общие элементы. A − (A − B) — тоже пересечение.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"f",
"('a', 4)",
"4",
"None"
],
"answer": 1,
"explain": "d[k] при отсутствии ключа — ошибка KeyError; d.get(k) — None, d.get(k, x) — x. Программа выводит: <code>('a', 4)</code>.",
"code": "d = {'a': 4, 'd': 8, 'b': 3, 'f': 7}\nprint(list(d.items())[0])",
"codeOptions": true
},
{
"type": "single",
"q": "Файл data.txt содержит строки:<pre>Dana 65\nAru 77\nAru 57\nDana 92</pre>Что выведет программа?",
"options": [
"Ошибка",
"3",
"5",
"4"
],
"answer": 3,
"explain": "readlines() возвращает список строк; for line in f перебирает строки файла; split() делит строку по пробелам. Программа выводит: <code>4</code>.",
"code": "with open('data.txt') as f:\n    data = f.read()\nprint(data.count('\\n'))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"{'a': 10, 'c': 3}",
"Ошибка",
"{'a': 11, 'c': 3}",
"{}"
],
"answer": 2,
"explain": "Присваивание по новому ключу добавляет пару, по существующему — заменяет значение; d.get(c, 0) + 1 — шаблон подсчёта. Программа выводит: <code>{'a': 11, 'c': 3}</code>.",
"code": "d = {'a': 1, 'b': 2}\nd['c'] = 3\nd['a'] += 10\ndel d['b']\nprint(d)",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"[1, 2, 3]",
"set",
"False",
"2"
],
"answer": 3,
"explain": "Множество хранит только уникальные значения; {} — пустой словарь, а не множество; 1, 1.0 и True равны и дают один элемент.",
"code": "len(set('Hello') - set('lol'))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[1, 4]",
"[1, 2, 3, 4, 6, 8]",
"[2, 3, 6, 8]",
"[3, 8]"
],
"answer": 2,
"explain": "&amp; — пересечение, | — объединение, − — разность, ^ — симметрическая разность (элементы ровно одного множества). Программа выводит: <code>[2, 3, 6, 8]</code>.",
"code": "A = [1, 3, 4, 8]\nB = [1, 2, 4, 6]\nA, B = set(A), set(B)\nprint(sorted(A ^ B) if isinstance(A ^ B, set) else A ^ B)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан d = {'a': 1, 'b': 5, 'c': 2}. Сопоставьте выражение и результат.",
"pairs": [
{
"left": "'a' in d",
"right": "True"
},
{
"left": "len(d)",
"right": "3"
},
{
"left": "sum(d.values())",
"right": "8"
},
{
"left": "list(d)",
"right": "['a', 'b', 'c']"
}
],
"explain": "in проверяет КЛЮЧИ словаря, а не значения.",
"distractors": [
"0",
"5"
]
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"2",
"6",
"True",
"3"
],
"answer": 2,
"explain": "Множество хранит только уникальные значения; {} — пустой словарь, а не множество; 1, 1.0 и True равны и дают один элемент.",
"code": "{1, 2} < {1, 2, 3}",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"3",
"True",
"6",
"[1, 2, 3]"
],
"answer": 1,
"explain": "Множество хранит только уникальные значения; {} — пустой словарь, а не множество; 1, 1.0 и True равны и дают один элемент.",
"code": "{1, 2} < {1, 2, 3}",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"[1, 2, 3]",
"set",
"['a', 'b', 'c']",
"3"
],
"answer": 2,
"explain": "Множество хранит только уникальные значения; {} — пустой словарь, а не множество; 1, 1.0 и True равны и дают один элемент.",
"code": "sorted({'b', 'a'} | {'c'})",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения создают словарь без ошибки?",
"options": [
"{'a': 1}",
"{'a': {'b': 1}}",
"{{1}: 2}",
"dict(a=1)",
"{[1, 2]: 'x'}",
"dict(1, 2)"
],
"answer": [
0,
1,
3
],
"explain": "Ключом может быть только неизменяемый (хешируемый) объект: число, строка, кортеж. Список и множество — нельзя.",
"codeOptions": true
},
{
"type": "single",
"q": "Чему равно значение выражения?",
"options": [
"3",
"2",
"set",
"False"
],
"answer": 1,
"explain": "Множество хранит только уникальные значения; {} — пустой словарь, а не множество; 1, 1.0 и True равны и дают один элемент.",
"code": "len(set('Hello') - set('lol'))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и исключение, которое оно вызовет.",
"pairs": [
{
"left": "int('abc')",
"right": "ValueError"
},
{
"left": "1 / 0",
"right": "ZeroDivisionError"
},
{
"left": "{'a': 1}['b']",
"right": "KeyError"
},
{
"left": "undefined_name",
"right": "NameError"
}
],
"explain": "Тип исключения подсказывает причину: неверное значение, индекс, ключ, тип, имя.",
"distractors": [
"IndexError",
"TypeError"
]
},
{
"type": "single",
"q": "Что будет при обращении d['k'], если ключа 'k' нет?",
"options": [
"вернётся 0",
"вернётся None",
"ошибка KeyError",
"ключ создастся автоматически"
],
"answer": 2,
"explain": "Чтобы избежать ошибки, используют d.get('k') или проверку 'k' in d."
},
{
"type": "matching",
"q": "Дан d = {'a': 1, 'b': 5, 'c': 2}. Сопоставьте выражение и результат.",
"pairs": [
{
"left": "len(d)",
"right": "3"
},
{
"left": "d.get('x', 0)",
"right": "0"
},
{
"left": "1 in d",
"right": "False"
},
{
"left": "d['b']",
"right": "5"
}
],
"explain": "in проверяет КЛЮЧИ словаря, а не значения.",
"distractors": [
"['a', 'b', 'c']",
"8"
]
},
{
"type": "single",
"q": "Файл data.txt содержит строки:<pre>Erlan 58\nErlan 52\nDana 71</pre>Что выведет программа?",
"options": [
"4",
"Erlan",
"2",
"Ошибка"
],
"answer": 1,
"explain": "readlines() возвращает список строк; for line in f перебирает строки файла; split() делит строку по пробелам. Программа выводит: <code>Erlan</code>.",
"code": "with open('data.txt') as f:\n    names = [line.split()[0] for line in f]\nprint(max(names))",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан d = {'a': 1, 'b': 5, 'c': 2}. Сопоставьте выражение и результат.",
"pairs": [
{
"left": "1 in d",
"right": "False"
},
{
"left": "list(d)",
"right": "['a', 'b', 'c']"
},
{
"left": "list(d.items())[-1]",
"right": "('c', 2)"
},
{
"left": "d['b']",
"right": "5"
}
],
"explain": "in проверяет КЛЮЧИ словаря, а не значения.",
"distractors": [
"0",
"3"
]
},
{
"type": "multiple",
"q": "Даны A = {1, 2, 3, 4} и B = {3, 4, 5}. Какие выражения равны {3, 4}?",
"options": [
"A & B",
"A ^ B",
"A - B",
"B & A",
"{3, 4}",
"set([3, 4, 4])"
],
"answer": [
0,
3,
4,
5
],
"explain": "Пересечение — общие элементы. A − (A − B) — тоже пересечение.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие блоки может содержать конструкция try?",
"options": [
"elif",
"except",
"else",
"catch",
"finally"
],
"answer": [
1,
2,
4
],
"explain": "В Python: try / except / else / finally. catch — из других языков."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"{}",
"Ошибка",
"{'a': 1, 'b':",
"{'a': 1, 'b': 0}"
],
"answer": 3,
"explain": "Присваивание по новому ключу добавляет пару, по существующему — заменяет значение; d.get(c, 0) + 1 — шаблон подсчёта. Программа выводит: <code>{'a': 1, 'b': 0}</code>.",
"code": "d = dict.fromkeys('ab', 0)\nd['a'] += 1\nprint(d)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан d = {'a': 1, 'b': 5, 'c': 2}. Сопоставьте выражение и результат.",
"pairs": [
{
"left": "list(d.items())[-1]",
"right": "('c', 2)"
},
{
"left": "d['b']",
"right": "5"
},
{
"left": "d.get('x', 0)",
"right": "0"
},
{
"left": "1 in d",
"right": "False"
}
],
"explain": "in проверяет КЛЮЧИ словаря, а не значения.",
"distractors": [
"3",
"['a', 'b', 'c']"
]
},
{
"type": "matching",
"q": "Сопоставьте выражение и исключение, которое оно вызовет.",
"pairs": [
{
"left": "[1, 2][5]",
"right": "IndexError"
},
{
"left": "'a' + 1",
"right": "TypeError"
},
{
"left": "undefined_name",
"right": "NameError"
},
{
"left": "{'a': 1}['b']",
"right": "KeyError"
}
],
"explain": "Тип исключения подсказывает причину: неверное значение, индекс, ключ, тип, имя.",
"distractors": [
"ValueError",
"ZeroDivisionError"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[1, 2, 3, 4, 5, 8]",
"[1, 2, 4]",
"7",
"[]"
],
"answer": 2,
"explain": "&amp; — пересечение, | — объединение, − — разность, ^ — симметрическая разность (элементы ровно одного множества). Программа выводит: <code>7</code>.",
"code": "A = [3, 5, 6, 8]\nB = [1, 2, 4, 6]\nA, B = set(A), set(B)\nprint(sorted(len(A | B)) if isinstance(len(A | B), set) else len(A | B))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[2, 6, 8]",
"[]",
"7",
"[5]"
],
"answer": 2,
"explain": "&amp; — пересечение, | — объединение, − — разность, ^ — симметрическая разность (элементы ровно одного множества). Программа выводит: <code>7</code>.",
"code": "A = [2, 5, 6, 8]\nB = [1, 3, 5, 7]\nA, B = set(A), set(B)\nprint(sorted(len(A | B)) if isinstance(len(A | B), set) else len(A | B))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"не число",
"конец",
"не число\nконец"
],
"answer": 3,
"explain": "else выполняется, если исключения не было; finally — всегда. Программа выводит: <code>не число\nконец</code>.",
"code": "s = 'abc'\ntry:\n    n = int(s)\n    print(10 // n)\nexcept ValueError:\n    print('не число')\nexcept ZeroDivisionError:\n    print('деление на 0')\nelse:\n    print('ok')\nfinally:\n    print('конец')",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения создают словарь без ошибки?",
"options": [
"{'a': 1}",
"{1: [1, 2]}",
"{[1, 2]: 'x'}",
"dict(a=1)",
"dict(1, 2)",
"{{1}: 2}"
],
"answer": [
0,
1,
3
],
"explain": "Ключом может быть только неизменяемый (хешируемый) объект: число, строка, кортеж. Список и множество — нельзя.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Даны A = {1, 2, 3, 4} и B = {3, 4, 5}. Какие выражения равны {3, 4}?",
"options": [
"A & B",
"B - {5}",
"{3, 4}",
"set([3, 4, 4])",
"A - B",
"A ^ B"
],
"answer": [
0,
1,
2,
3
],
"explain": "Пересечение — общие элементы. A − (A − B) — тоже пересечение.",
"codeOptions": true
},
{
"type": "single",
"q": "Файл data.txt содержит строки:<pre>Aru 62\nTimur 56\nDana 77\nTimur 89</pre>Что выведет программа?",
"options": [
"284",
"5",
"Ошибка",
"3"
],
"answer": 0,
"explain": "readlines() возвращает список строк; for line in f перебирает строки файла; split() делит строку по пробелам. Программа выводит: <code>284</code>.",
"code": "with open('data.txt') as f:\n    s = 0\n    for line in f:\n        s += int(line.split()[1])\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"конец",
"Ошибка",
"не число\nконец",
"не число"
],
"answer": 2,
"explain": "else выполняется, если исключения не было; finally — всегда. Программа выводит: <code>не число\nконец</code>.",
"code": "s = '2.5'\ntry:\n    n = int(s)\n    print(10 // n)\nexcept ValueError:\n    print('не число')\nexcept ZeroDivisionError:\n    print('деление на 0')\nelse:\n    print('ok')\nfinally:\n    print('конец')",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения создают словарь без ошибки?",
"options": [
"{{1}: 2}",
"{(1, 2): 'x'}",
"{1: [1, 2]}",
"{'a': 1}",
"{[1, 2]: 'x'}",
"dict(1, 2)"
],
"answer": [
1,
2,
3
],
"explain": "Ключом может быть только неизменяемый (хешируемый) объект: число, строка, кортеж. Список и множество — нельзя.",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и исключение, которое оно вызовет.",
"pairs": [
{
"left": "1 / 0",
"right": "ZeroDivisionError"
},
{
"left": "int(None)",
"right": "TypeError"
},
{
"left": "{'a': 1}['b']",
"right": "KeyError"
},
{
"left": "undefined_name",
"right": "NameError"
}
],
"explain": "Тип исключения подсказывает причину: неверное значение, индекс, ключ, тип, имя.",
"distractors": [
"ValueError",
"IndexError"
]
},
{
"type": "multiple",
"q": "Даны A = {1, 2, 3, 4} и B = {3, 4, 5}. Какие выражения равны {3, 4}?",
"options": [
"A - (A - B)",
"set([3, 4, 4])",
"{3, 4}",
"A & B",
"A ^ B",
"A | B"
],
"answer": [
0,
1,
2,
3
],
"explain": "Пересечение — общие элементы. A − (A − B) — тоже пересечение.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"['b', 'e', 'c', 'a']",
"[6, 7, 8, 5]",
"e",
"0"
],
"answer": 0,
"explain": "d[k] при отсутствии ключа — ошибка KeyError; d.get(k) — None, d.get(k, x) — x. Программа выводит: <code>['b', 'e', 'c', 'a']</code>.",
"code": "d = {'b': 6, 'e': 7, 'c': 8, 'a': 5}\nprint(list(d.keys()))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"Ошибка",
"[4, 6, 5, 1]",
"0"
],
"answer": 1,
"explain": "d[k] при отсутствии ключа — ошибка KeyError; d.get(k) — None, d.get(k, x) — x. Программа выводит: <code>Ошибка</code>.",
"code": "d = {'e': 4, 'd': 6, 'c': 5, 'b': 1}\nprint(d['z'])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"{'a': 1, 'b': 0}",
"1, 'b': 0}",
"Ошибка",
"0} 'b': 1, {'a':"
],
"answer": 0,
"explain": "Присваивание по новому ключу добавляет пару, по существующему — заменяет значение; d.get(c, 0) + 1 — шаблон подсчёта. Программа выводит: <code>{'a': 1, 'b': 0}</code>.",
"code": "d = dict.fromkeys('ab', 0)\nd['a'] += 1\nprint(d)",
"codeOptions": true
},
{
"type": "single",
"q": "Файл data.txt содержит строки:<pre>Timur 82\nAru 79\nErlan 76\nDana 59</pre>Что выведет программа?",
"options": [
"3",
"Ошибка",
"5",
"Timur 82"
],
"answer": 3,
"explain": "readlines() возвращает список строк; for line in f перебирает строки файла; split() делит строку по пробелам. Программа выводит: <code>Timur 82</code>.",
"code": "with open('data.txt') as f:\n    print(f.readline().strip())",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан d = {'a': 1, 'b': 5, 'c': 2}. Сопоставьте выражение и результат.",
"pairs": [
{
"left": "list(d)",
"right": "['a', 'b', 'c']"
},
{
"left": "sum(d.values())",
"right": "8"
},
{
"left": "list(d.items())[-1]",
"right": "('c', 2)"
},
{
"left": "'a' in d",
"right": "True"
}
],
"explain": "in проверяет КЛЮЧИ словаря, а не значения.",
"distractors": [
"0",
"3"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"[2, 3, 4, 5, 7, 8]",
"[2, 7]",
"[5, 8]",
"[3, 4, 5, 8]"
],
"answer": 1,
"explain": "&amp; — пересечение, | — объединение, − — разность, ^ — симметрическая разность (элементы ровно одного множества). Программа выводит: <code>[2, 7]</code>.",
"code": "A = [2, 3, 4, 7]\nB = [2, 5, 7, 8]\nA, B = set(A), set(B)\nprint(sorted(A & B) if isinstance(A & B, set) else A & B)",
"codeOptions": true
}
],
"m8": [
{
"type": "matching",
"q": "Сопоставьте вызов и то, что он возвращает.",
"pairs": [
{
"left": "random.sample(range(10), 3)",
"right": "список из 3 разных чисел"
},
{
"left": "random.randint(1, 6)",
"right": "целое от 1 до 6 включительно"
},
{
"left": "random.choice('abc')",
"right": "один символ из 'abc'"
},
{
"left": "random.randrange(0, 10, 2)",
"right": "чётное от 0 до 8"
}
],
"explain": "randint включает правую границу, randrange — нет; sample выбирает без повторов.",
"distractors": [
"вещественное от 0 до 1 (1 не включается)",
"вещественное от 1 до 2"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"631",
"136",
"135",
"272"
],
"answer": 1,
"explain": "Перевод делением: остатки от деления на основание, записанные в обратном порядке. Программа выводит: <code>136</code>.",
"code": "n = 94\ns = ''\nwhile n > 0:\n    s = str(n % 8) + s\n    n //= 8\nprint(s)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие значения может вернуть random.randint(2, 7)?",
"options": [
"3",
"5",
"7",
"1",
"8",
"6"
],
"answer": [
0,
1,
2,
5
],
"explain": "randint включает обе границы."
},
{
"type": "multiple",
"q": "Какие функции модуля random возвращают целое число?",
"options": [
"randrange",
"uniform",
"randint",
"shuffle",
"random"
],
"answer": [
0,
2
],
"explain": "random и uniform дают float; shuffle перемешивает список на месте и возвращает None."
},
{
"type": "matching",
"q": "Сопоставьте десятичное число и его запись в двоичной системе.",
"pairs": [
{
"left": "35",
"right": "100011"
},
{
"left": "17",
"right": "10001"
},
{
"left": "63",
"right": "111111"
},
{
"left": "28",
"right": "11100"
}
],
"explain": "Переводите делением на основание с записью остатков в обратном порядке.",
"distractors": [
"100100",
"10010"
]
},
{
"type": "matching",
"q": "Сопоставьте вызов и то, что он возвращает.",
"pairs": [
{
"left": "random.random()",
"right": "вещественное от 0 до 1 (1 не включается)"
},
{
"left": "random.choice('abc')",
"right": "один символ из 'abc'"
},
{
"left": "random.uniform(1, 2)",
"right": "вещественное от 1 до 2"
},
{
"left": "random.randrange(0, 10, 2)",
"right": "чётное от 0 до 8"
}
],
"explain": "randint включает правую границу, randrange — нет; sample выбирает без повторов.",
"distractors": [
"целое от 1 до 6 включительно",
"список из 3 разных чисел"
]
},
{
"type": "single",
"q": "Сколько различных значений может вернуть вызов random.randint(1, 5)?",
"options": [
"6",
"2",
"5",
"4"
],
"answer": 2,
"explain": "randint(a, b) включает обе границы, randrange(a, b) — не включает b (как range)."
},
{
"type": "matching",
"q": "Сопоставьте десятичное число и его запись в шестнадцатеричной системе.",
"pairs": [
{
"left": "47",
"right": "2f"
},
{
"left": "36",
"right": "24"
},
{
"left": "18",
"right": "12"
},
{
"left": "43",
"right": "2b"
}
],
"explain": "Переводите делением на основание с записью остатков в обратном порядке.",
"distractors": [
"30",
"25"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0o267",
"0b10110111",
"0xb8",
"0xb7"
],
"answer": 3,
"explain": "bin — двоичная (0b), oct — восьмеричная (0o), hex — шестнадцатеричная (0x). Программа выводит: <code>0xb7</code>.",
"code": "print(hex(183))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте десятичное число и его запись в шестнадцатеричной системе.",
"pairs": [
{
"left": "39",
"right": "27"
},
{
"left": "19",
"right": "13"
},
{
"left": "44",
"right": "2c"
},
{
"left": "40",
"right": "28"
}
],
"explain": "Переводите делением на основание с записью остатков в обратном порядке.",
"distractors": [
"14"
]
},
{
"type": "single",
"q": "Какое из чисел наибольшее?",
"options": [
"4b (шестнадцатер.)",
"5e (шестнадцатер.)",
"33 (восьмер.)",
"35 (шестнадцатер.)"
],
"answer": 1,
"explain": "Переведите все числа в десятичную систему и сравните."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0b10000111",
"0b10000110",
"0o206",
"0x86"
],
"answer": 1,
"explain": "bin — двоичная (0b), oct — восьмеричная (0o), hex — шестнадцатеричная (0x). Программа выводит: <code>0b10000110</code>.",
"code": "print(bin(134))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"350",
"4",
"10",
"12"
],
"answer": 2,
"explain": "bin(n) возвращает строку с префиксом '0b' — его длину 2 нужно вычитать; n &gt;&gt; 1 — целочисленное деление на 2, n &lt;&lt; 2 — умножение на 4. Программа выводит: <code>10</code>.",
"code": "n = 701\nprint(len(bin(n)) - 2)",
"codeOptions": true
},
{
"type": "single",
"q": "Какое из чисел наибольшее?",
"options": [
"2f (шестнадцатер.)",
"100000 (двоичн.)",
"133 (восьмер.)",
"111000 (двоичн.)"
],
"answer": 2,
"explain": "Переведите все числа в десятичную систему и сравните."
},
{
"type": "single",
"q": "Какое из чисел наибольшее?",
"options": [
"1101010 (двоичн.)",
"1111000 (двоичн.)",
"37 (шестнадцатер.)",
"112 (восьмер.)"
],
"answer": 1,
"explain": "Переведите все числа в десятичную систему и сравните."
},
{
"type": "single",
"q": "Сколько различных значений может вернуть вызов random.randrange(7, 11)?",
"options": [
"3",
"5",
"6",
"4"
],
"answer": 3,
"explain": "randint(a, b) включает обе границы, randrange(a, b) — не включает b (как range)."
},
{
"type": "matching",
"q": "Сопоставьте вызов и то, что он возвращает.",
"pairs": [
{
"left": "random.random()",
"right": "вещественное от 0 до 1 (1 не включается)"
},
{
"left": "random.uniform(1, 2)",
"right": "вещественное от 1 до 2"
},
{
"left": "random.sample(range(10), 3)",
"right": "список из 3 разных чисел"
},
{
"left": "random.randrange(0, 10, 2)",
"right": "чётное от 0 до 8"
}
],
"explain": "randint включает правую границу, randrange — нет; sample выбирает без повторов.",
"distractors": [
"целое от 1 до 6 включительно",
"один символ из 'abc'"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"44",
"4",
"1"
],
"answer": 0,
"explain": "bin(n) возвращает строку с префиксом '0b' — его длину 2 нужно вычитать; n &gt;&gt; 1 — целочисленное деление на 2, n &lt;&lt; 2 — умножение на 4. Программа выводит: <code>7</code>.",
"code": "n = 89\nprint(len(bin(n)) - 2)",
"codeOptions": true
},
{
"type": "single",
"q": "Какое из чисел наибольшее?",
"options": [
"1101011 (двоичн.)",
"111110 (двоичн.)",
"1110100 (двоичн.)",
"35 (восьмер.)"
],
"answer": 2,
"explain": "Переведите все числа в десятичную систему и сравните."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"12",
"7",
"4",
"1"
],
"answer": 2,
"explain": "bin(n) возвращает строку с префиксом '0b' — его длину 2 нужно вычитать; n &gt;&gt; 1 — целочисленное деление на 2, n &lt;&lt; 2 — умножение на 4. Программа выводит: <code>4</code>.",
"code": "n = 553\nprint(bin(n).count('1'))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие числа являются чётными (последняя двоичная цифра — 0)?",
"options": [
"111₂",
"1010₂",
"1011₂",
"110₂",
"1₂",
"100₂"
],
"answer": [
1,
3,
5
],
"explain": "Число чётно, если последний двоичный разряд равен 0."
},
{
"type": "matching",
"q": "Сопоставьте десятичное число и его запись в шестнадцатеричной системе.",
"pairs": [
{
"left": "53",
"right": "35"
},
{
"left": "51",
"right": "33"
},
{
"left": "36",
"right": "24"
},
{
"left": "26",
"right": "1a"
}
],
"explain": "Переводите делением на основание с записью остатков в обратном порядке.",
"distractors": [
"36",
"34"
]
},
{
"type": "single",
"q": "Сколько различных значений может вернуть вызов random.randrange(3, 7)?",
"options": [
"4",
"3",
"5",
"2"
],
"answer": 0,
"explain": "randint(a, b) включает обе границы, randrange(a, b) — не включает b (как range)."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0xc4",
"0b11000100",
"0o304",
"0xc5"
],
"answer": 0,
"explain": "bin — двоичная (0b), oct — восьмеричная (0o), hex — шестнадцатеричная (0x). Программа выводит: <code>0xc4</code>.",
"code": "print(hex(196))",
"codeOptions": true
},
{
"type": "single",
"q": "Какое из чисел наибольшее?",
"options": [
"11011 (двоичн.)",
"54 (шестнадцатер.)",
"67 (шестнадцатер.)",
"24 (шестнадцатер.)"
],
"answer": 2,
"explain": "Переведите все числа в десятичную систему и сравните."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"242",
"241",
"240",
"482"
],
"answer": 1,
"explain": "Перевод делением: остатки от деления на основание, записанные в обратном порядке. Программа выводит: <code>241</code>.",
"code": "n = 161\ns = ''\nwhile n > 0:\n    s = str(n % 8) + s\n    n //= 8\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"25",
"23",
"48",
"24"
],
"answer": 3,
"explain": "int(строка, основание) переводит запись числа из системы с указанным основанием в десятичную. Программа выводит: <code>24</code>.",
"code": "print(int('30', 8))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие записи на Python равны числу 108?",
"options": [
"0b1101100",
"0x6C",
"0o153",
"0o154",
"int('154', 10)",
"int('1101100', 2)"
],
"answer": [
0,
1,
3,
5
],
"explain": "Префиксы 0b, 0o, 0x задают двоичную, восьмеричную и шестнадцатеричную запись; регистр букв в hex не важен.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"146",
"145",
"545",
"221"
],
"answer": 1,
"explain": "int(строка, основание) переводит запись числа из системы с указанным основанием в десятичную. Программа выводит: <code>145</code>.",
"code": "print(int('221', 8))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"127",
"105",
"621",
"126"
],
"answer": 3,
"explain": "Перевод делением: остатки от деления на основание, записанные в обратном порядке. Программа выводит: <code>126</code>.",
"code": "n = 86\ns = ''\nwhile n > 0:\n    s = str(n % 8) + s\n    n //= 8\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Сколько различных значений может вернуть вызов random.randrange(3, 9, 2)?",
"options": [
"2",
"8",
"3",
"4"
],
"answer": 2,
"explain": "randint(a, b) включает обе границы, randrange(a, b) — не включает b (как range)."
},
{
"type": "matching",
"q": "Сопоставьте вызов и то, что он возвращает.",
"pairs": [
{
"left": "random.sample(range(10), 3)",
"right": "список из 3 разных чисел"
},
{
"left": "random.randint(1, 6)",
"right": "целое от 1 до 6 включительно"
},
{
"left": "random.randrange(0, 10, 2)",
"right": "чётное от 0 до 8"
},
{
"left": "random.random()",
"right": "вещественное от 0 до 1 (1 не включается)"
}
],
"explain": "randint включает правую границу, randrange — нет; sample выбирает без повторов.",
"distractors": [
"один символ из 'abc'",
"вещественное от 1 до 2"
]
},
{
"type": "matching",
"q": "Сопоставьте десятичное число и его запись в шестнадцатеричной системе.",
"pairs": [
{
"left": "47",
"right": "2f"
},
{
"left": "62",
"right": "3e"
},
{
"left": "59",
"right": "3b"
},
{
"left": "61",
"right": "3d"
}
],
"explain": "Переводите делением на основание с записью остатков в обратном порядке.",
"distractors": [
"30",
"3f"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0x5a",
"0x5b",
"0b1011010",
"0x59"
],
"answer": 0,
"explain": "bin — двоичная (0b), oct — восьмеричная (0o), hex — шестнадцатеричная (0x). Программа выводит: <code>0x5a</code>.",
"code": "print(hex(90))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"9",
"0",
"7",
"524"
],
"answer": 0,
"explain": "bin(n) возвращает строку с префиксом '0b' — его длину 2 нужно вычитать; n &gt;&gt; 1 — целочисленное деление на 2, n &lt;&lt; 2 — умножение на 4. Программа выводит: <code>9</code>.",
"code": "n = 262\nprint(len(bin(n)) - 2)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие значения может вернуть random.randint(1, 5)?",
"options": [
"1",
"4",
"2",
"3",
"6",
"0"
],
"answer": [
0,
1,
2,
3
],
"explain": "randint включает обе границы."
},
{
"type": "matching",
"q": "Сопоставьте десятичное число и его запись в шестнадцатеричной системе.",
"pairs": [
{
"left": "28",
"right": "1c"
},
{
"left": "9",
"right": "9"
},
{
"left": "43",
"right": "2b"
},
{
"left": "30",
"right": "1e"
}
],
"explain": "Переводите делением на основание с записью остатков в обратном порядке.",
"distractors": [
"1d",
"a"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"56",
"55",
"57",
"529"
],
"answer": 0,
"explain": "int(строка, основание) переводит запись числа из системы с указанным основанием в десятичную. Программа выводит: <code>56</code>.",
"code": "print(int('211', 5))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие записи на Python равны числу 77?",
"options": [
"0x4d",
"0b1001110",
"int('1001101', 2)",
"77",
"0o114",
"0b1001101"
],
"answer": [
0,
2,
3,
5
],
"explain": "Префиксы 0b, 0o, 0x задают двоичную, восьмеричную и шестнадцатеричную запись; регистр букв в hex не важен.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"2",
"247",
"1"
],
"answer": 0,
"explain": "bin(n) возвращает строку с префиксом '0b' — его длину 2 нужно вычитать; n &gt;&gt; 1 — целочисленное деление на 2, n &lt;&lt; 2 — умножение на 4. Программа выводит: <code>7</code>.",
"code": "n = 495\nprint(n % 8)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"24042",
"12023",
"12021",
"12022"
],
"answer": 2,
"explain": "Перевод делением: остатки от деления на основание, записанные в обратном порядке. Программа выводит: <code>12021</code>.",
"code": "n = 142\ns = ''\nwhile n > 0:\n    s = str(n % 3) + s\n    n //= 3\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1121",
"0211",
"1120",
"222"
],
"answer": 2,
"explain": "Перевод делением: остатки от деления на основание, записанные в обратном порядке. Программа выводит: <code>1120</code>.",
"code": "n = 42\ns = ''\nwhile n > 0:\n    s = str(n % 3) + s\n    n //= 3\nprint(s)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие записи на Python равны числу 41?",
"options": [
"0o50",
"41",
"0x29",
"int('101001', 2)",
"int('51', 10)",
"0b101001"
],
"answer": [
1,
2,
3,
5
],
"explain": "Префиксы 0b, 0o, 0x задают двоичную, восьмеричную и шестнадцатеричную запись; регистр букв в hex не важен.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0o61",
"0x30",
"0b110000",
"0o60"
],
"answer": 3,
"explain": "bin — двоичная (0b), oct — восьмеричная (0o), hex — шестнадцатеричная (0x). Программа выводит: <code>0o60</code>.",
"code": "print(oct(48))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте десятичное число и его запись в шестнадцатеричной системе.",
"pairs": [
{
"left": "63",
"right": "3f"
},
{
"left": "28",
"right": "1c"
},
{
"left": "45",
"right": "2d"
},
{
"left": "53",
"right": "35"
}
],
"explain": "Переводите делением на основание с записью остатков в обратном порядке.",
"distractors": [
"40",
"1d"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"394",
"198",
"197",
"196"
],
"answer": 2,
"explain": "int(строка, основание) переводит запись числа из системы с указанным основанием в десятичную. Программа выводит: <code>197</code>.",
"code": "print(int('c5', 16))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"22101",
"22103",
"22102",
"22100"
],
"answer": 0,
"explain": "Перевод делением: остатки от деления на основание, записанные в обратном порядке. Программа выводит: <code>22101</code>.",
"code": "n = 226\ns = ''\nwhile n > 0:\n    s = str(n % 3) + s\n    n //= 3\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1012",
"64",
"33",
"32"
],
"answer": 3,
"explain": "int(строка, основание) переводит запись числа из системы с указанным основанием в десятичную. Программа выводит: <code>32</code>.",
"code": "print(int('1012', 3))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"602",
"207",
"206",
"205"
],
"answer": 2,
"explain": "Перевод делением: остатки от деления на основание, записанные в обратном порядке. Программа выводит: <code>206</code>.",
"code": "n = 134\ns = ''\nwhile n > 0:\n    s = str(n % 8) + s\n    n //= 8\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0xd6",
"0xd5",
"0o325",
"0xd4"
],
"answer": 1,
"explain": "bin — двоичная (0b), oct — восьмеричная (0o), hex — шестнадцатеричная (0x). Программа выводит: <code>0xd5</code>.",
"code": "print(hex(213))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"53",
"83",
"44",
"43"
],
"answer": 3,
"explain": "int(строка, основание) переводит запись числа из системы с указанным основанием в десятичную. Программа выводит: <code>43</code>.",
"code": "print(int('53', 8))",
"codeOptions": true
},
{
"type": "single",
"q": "Сколько различных значений может вернуть вызов random.randrange(1, 11, 2)?",
"options": [
"5",
"12",
"6",
"4"
],
"answer": 0,
"explain": "randint(a, b) включает обе границы, randrange(a, b) — не включает b (как range)."
},
{
"type": "multiple",
"q": "Какие значения может вернуть random.randint(1, 7)?",
"options": [
"8",
"1",
"5",
"6",
"0",
"7"
],
"answer": [
1,
2,
3,
5
],
"explain": "randint включает обе границы."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"96",
"224",
"190",
"95"
],
"answer": 3,
"explain": "int(строка, основание) переводит запись числа из системы с указанным основанием в десятичную. Программа выводит: <code>95</code>.",
"code": "print(int('340', 5))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"256",
"64",
"128",
"65"
],
"answer": 1,
"explain": "int(строка, основание) переводит запись числа из системы с указанным основанием в десятичную. Программа выводит: <code>64</code>.",
"code": "print(int('100', 8))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0x30",
"0b110000",
"0o60",
"0x31"
],
"answer": 0,
"explain": "bin — двоичная (0b), oct — восьмеричная (0o), hex — шестнадцатеричная (0x). Программа выводит: <code>0x30</code>.",
"code": "print(hex(48))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0b1100110",
"0b1100101",
"0x66",
"0o146"
],
"answer": 0,
"explain": "bin — двоичная (0b), oct — восьмеричная (0o), hex — шестнадцатеричная (0x). Программа выводит: <code>0b1100110</code>.",
"code": "print(bin(102))",
"codeOptions": true
},
{
"type": "single",
"q": "Сколько различных значений может вернуть вызов random.randrange(4, 8)?",
"options": [
"3",
"4",
"6",
"2"
],
"answer": 1,
"explain": "randint(a, b) включает обе границы, randrange(a, b) — не включает b (как range)."
},
{
"type": "multiple",
"q": "Какие записи на Python равны числу 41?",
"options": [
"0b101001",
"0x29",
"41",
"0o50",
"0b101010",
"0x52"
],
"answer": [
0,
1,
2
],
"explain": "Префиксы 0b, 0o, 0x задают двоичную, восьмеричную и шестнадцатеричную запись; регистр букв в hex не важен.",
"codeOptions": true
},
{
"type": "single",
"q": "Что нужно, чтобы random выдавал одну и ту же последовательность при каждом запуске?",
"options": [
"это невозможно",
"использовать randint вместо random",
"вызвать random.seed с одним и тем же числом",
"импортировать random дважды"
],
"answer": 2,
"explain": "seed задаёт начальное состояние генератора."
},
{
"type": "multiple",
"q": "Какие записи на Python равны числу 84?",
"options": [
"0b1010100",
"0b1010101",
"0o124",
"0x54",
"0xa8",
"int('1010100', 2)"
],
"answer": [
0,
2,
3,
5
],
"explain": "Префиксы 0b, 0o, 0x задают двоичную, восьмеричную и шестнадцатеричную запись; регистр букв в hex не важен.",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте десятичное число и его запись в восьмеричной системе.",
"pairs": [
{
"left": "61",
"right": "75"
},
{
"left": "60",
"right": "74"
},
{
"left": "45",
"right": "55"
},
{
"left": "33",
"right": "41"
}
],
"explain": "Переводите делением на основание с записью остатков в обратном порядке.",
"distractors": [
"76"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0b1010",
"0o12",
"0b1001",
"0xa"
],
"answer": 0,
"explain": "bin — двоичная (0b), oct — восьмеричная (0o), hex — шестнадцатеричная (0x). Программа выводит: <code>0b1010</code>.",
"code": "print(bin(10))",
"codeOptions": true
},
{
"type": "single",
"q": "Сколько цифр используется в шестнадцатеричной системе счисления?",
"options": [
"10",
"8",
"16",
"15"
],
"answer": 2,
"explain": "Цифры 0–9 и буквы A–F."
},
{
"type": "multiple",
"q": "Какие записи на Python равны числу 63?",
"options": [
"0o77",
"0x7e",
"0x3F",
"0b1000000",
"0x3f",
"0b111111"
],
"answer": [
0,
2,
4,
5
],
"explain": "Префиксы 0b, 0o, 0x задают двоичную, восьмеричную и шестнадцатеричную запись; регистр букв в hex не важен.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"38",
"37",
"290",
"122"
],
"answer": 1,
"explain": "int(строка, основание) переводит запись числа из системы с указанным основанием в десятичную. Программа выводит: <code>37</code>.",
"code": "print(int('122', 5))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"263",
"10",
"0",
"1052"
],
"answer": 1,
"explain": "bin(n) возвращает строку с префиксом '0b' — его длину 2 нужно вычитать; n &gt;&gt; 1 — целочисленное деление на 2, n &lt;&lt; 2 — умножение на 4. Программа выводит: <code>10</code>.",
"code": "n = 526\nprint(len(bin(n)) - 2)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие значения может вернуть random.randint(2, 5)?",
"options": [
"4",
"5",
"2",
"1",
"3",
"6"
],
"answer": [
0,
1,
2,
4
],
"explain": "randint включает обе границы."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"12",
"364",
"6",
"5"
],
"answer": 3,
"explain": "bin(n) возвращает строку с префиксом '0b' — его длину 2 нужно вычитать; n &gt;&gt; 1 — целочисленное деление на 2, n &lt;&lt; 2 — умножение на 4. Программа выводит: <code>5</code>.",
"code": "n = 728\nprint(bin(n)[2:].count('0'))",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие значения может вернуть random.randint(3, 6)?",
"options": [
"3",
"5",
"6",
"7",
"2",
"4"
],
"answer": [
0,
1,
2,
5
],
"explain": "randint включает обе границы."
},
{
"type": "matching",
"q": "Сопоставьте десятичное число и его запись в шестнадцатеричной системе.",
"pairs": [
{
"left": "62",
"right": "3e"
},
{
"left": "19",
"right": "13"
},
{
"left": "30",
"right": "1e"
},
{
"left": "26",
"right": "1a"
}
],
"explain": "Переводите делением на основание с записью остатков в обратном порядке.",
"distractors": [
"3f",
"14"
]
},
{
"type": "multiple",
"q": "Какие значения может вернуть random.randint(1, 5)?",
"options": [
"1",
"5",
"6",
"3",
"4",
"0"
],
"answer": [
0,
1,
3,
4
],
"explain": "randint включает обе границы."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"25",
"52",
"26",
"62"
],
"answer": 2,
"explain": "Перевод делением: остатки от деления на основание, записанные в обратном порядке. Программа выводит: <code>26</code>.",
"code": "n = 22\ns = ''\nwhile n > 0:\n    s = str(n % 8) + s\n    n //= 8\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Какое из чисел наибольшее?",
"options": [
"74 (шестнадцатер.)",
"140 (восьмер.)",
"2a (шестнадцатер.)",
"24 (шестнадцатер.)"
],
"answer": 0,
"explain": "Переведите все числа в десятичную систему и сравните."
},
{
"type": "multiple",
"q": "Какие значения может вернуть random.randint(1, 7)?",
"options": [
"0",
"3",
"8",
"2",
"6",
"4"
],
"answer": [
1,
3,
4,
5
],
"explain": "randint включает обе границы."
},
{
"type": "multiple",
"q": "Какие записи на Python равны числу 109?",
"options": [
"0b1101110",
"int('155', 10)",
"int('1101101', 2)",
"0x6D",
"0x6d",
"0o154"
],
"answer": [
2,
3,
4
],
"explain": "Префиксы 0b, 0o, 0x задают двоичную, восьмеричную и шестнадцатеричную запись; регистр букв в hex не важен.",
"codeOptions": true
},
{
"type": "single",
"q": "Сколько различных значений может вернуть вызов random.randint(1, 4)?",
"options": [
"1",
"3",
"5",
"4"
],
"answer": 3,
"explain": "randint(a, b) включает обе границы, randrange(a, b) — не включает b (как range)."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"278",
"6",
"5",
"12"
],
"answer": 2,
"explain": "bin(n) возвращает строку с префиксом '0b' — его длину 2 нужно вычитать; n &gt;&gt; 1 — целочисленное деление на 2, n &lt;&lt; 2 — умножение на 4. Программа выводит: <code>5</code>.",
"code": "n = 557\nprint(bin(n).count('1'))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и то, что он возвращает.",
"pairs": [
{
"left": "random.randint(1, 6)",
"right": "целое от 1 до 6 включительно"
},
{
"left": "random.randrange(0, 10, 2)",
"right": "чётное от 0 до 8"
},
{
"left": "random.sample(range(10), 3)",
"right": "список из 3 разных чисел"
},
{
"left": "random.uniform(1, 2)",
"right": "вещественное от 1 до 2"
}
],
"explain": "randint включает правую границу, randrange — нет; sample выбирает без повторов.",
"distractors": [
"вещественное от 0 до 1 (1 не включается)",
"один символ из 'abc'"
]
},
{
"type": "multiple",
"q": "Какие значения может вернуть random.randint(1, 4)?",
"options": [
"1",
"2",
"5",
"0",
"4",
"3"
],
"answer": [
0,
1,
4,
5
],
"explain": "randint включает обе границы."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"22222",
"3300",
"22221",
"22220"
],
"answer": 3,
"explain": "Перевод делением: остатки от деления на основание, записанные в обратном порядке. Программа выводит: <code>22220</code>.",
"code": "n = 240\ns = ''\nwhile n > 0:\n    s = str(n % 3) + s\n    n //= 3\nprint(s)",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и то, что он возвращает.",
"pairs": [
{
"left": "random.randrange(0, 10, 2)",
"right": "чётное от 0 до 8"
},
{
"left": "random.randint(1, 6)",
"right": "целое от 1 до 6 включительно"
},
{
"left": "random.random()",
"right": "вещественное от 0 до 1 (1 не включается)"
},
{
"left": "random.choice('abc')",
"right": "один символ из 'abc'"
}
],
"explain": "randint включает правую границу, randrange — нет; sample выбирает без повторов.",
"distractors": [
"вещественное от 1 до 2",
"список из 3 разных чисел"
]
},
{
"type": "single",
"q": "Какое из чисел наибольшее?",
"options": [
"56 (восьмер.)",
"11011 (двоичн.)",
"156 (восьмер.)",
"5c (шестнадцатер.)"
],
"answer": 2,
"explain": "Переведите все числа в десятичную систему и сравните."
},
{
"type": "single",
"q": "Сколько различных значений может вернуть вызов random.randint(7, 9)?",
"options": [
"2",
"4",
"3",
"1"
],
"answer": 2,
"explain": "randint(a, b) включает обе границы, randrange(a, b) — не включает b (как range)."
},
{
"type": "multiple",
"q": "Какие записи на Python равны числу 50?",
"options": [
"0b110010",
"int('62', 10)",
"50",
"int('110010', 2)",
"0x32",
"0o61"
],
"answer": [
0,
2,
3,
4
],
"explain": "Префиксы 0b, 0o, 0x задают двоичную, восьмеричную и шестнадцатеричную запись; регистр букв в hex не важен.",
"codeOptions": true
},
{
"type": "single",
"q": "Какое из чисел наибольшее?",
"options": [
"69 (шестнадцатер.)",
"1000111 (двоичн.)",
"45 (восьмер.)",
"38 (шестнадцатер.)"
],
"answer": 0,
"explain": "Переведите все числа в десятичную систему и сравните."
},
{
"type": "matching",
"q": "Сопоставьте вызов и то, что он возвращает.",
"pairs": [
{
"left": "random.uniform(1, 2)",
"right": "вещественное от 1 до 2"
},
{
"left": "random.random()",
"right": "вещественное от 0 до 1 (1 не включается)"
},
{
"left": "random.sample(range(10), 3)",
"right": "список из 3 разных чисел"
},
{
"left": "random.choice('abc')",
"right": "один символ из 'abc'"
}
],
"explain": "randint включает правую границу, randrange — нет; sample выбирает без повторов.",
"distractors": [
"целое от 1 до 6 включительно",
"чётное от 0 до 8"
]
},
{
"type": "single",
"q": "Какое наибольшее число можно записать восемью двоичными разрядами?",
"options": [
"255",
"127",
"256",
"128"
],
"answer": 0,
"explain": "2⁸ − 1 = 255."
},
{
"type": "matching",
"q": "Сопоставьте десятичное число и его запись в двоичной системе.",
"pairs": [
{
"left": "23",
"right": "10111"
},
{
"left": "48",
"right": "110000"
},
{
"left": "32",
"right": "100000"
},
{
"left": "51",
"right": "110011"
}
],
"explain": "Переводите делением на основание с записью остатков в обратном порядке.",
"distractors": [
"11000",
"110001"
]
},
{
"type": "single",
"q": "Какой цифре соответствует F в шестнадцатеричной системе?",
"options": [
"14",
"16",
"F не является цифрой",
"15"
],
"answer": 3,
"explain": "A = 10, B = 11, …, F = 15."
},
{
"type": "single",
"q": "Какое из чисел наибольшее?",
"options": [
"6d (шестнадцатер.)",
"27 (шестнадцатер.)",
"3d (шестнадцатер.)",
"50 (восьмер.)"
],
"answer": 0,
"explain": "Переведите все числа в десятичную систему и сравните."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0",
"3",
"7",
"11"
],
"answer": 0,
"explain": "bin(n) возвращает строку с префиксом '0b' — его длину 2 нужно вычитать; n &gt;&gt; 1 — целочисленное деление на 2, n &lt;&lt; 2 — умножение на 4. Программа выводит: <code>0</code>.",
"code": "n = 296\nprint(n % 8)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие записи на Python равны числу 22?",
"options": [
"int('10110', 2)",
"int('26', 10)",
"0b10111",
"22",
"0x16",
"0o25"
],
"answer": [
0,
3,
4
],
"explain": "Префиксы 0b, 0o, 0x задают двоичную, восьмеричную и шестнадцатеричную запись; регистр букв в hex не важен.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие значения может вернуть random.randint(3, 6)?",
"options": [
"4",
"2",
"7",
"6",
"3",
"5"
],
"answer": [
0,
3,
4,
5
],
"explain": "randint включает обе границы."
},
{
"type": "matching",
"q": "Сопоставьте вызов и то, что он возвращает.",
"pairs": [
{
"left": "random.randint(1, 6)",
"right": "целое от 1 до 6 включительно"
},
{
"left": "random.uniform(1, 2)",
"right": "вещественное от 1 до 2"
},
{
"left": "random.choice('abc')",
"right": "один символ из 'abc'"
},
{
"left": "random.sample(range(10), 3)",
"right": "список из 3 разных чисел"
}
],
"explain": "randint включает правую границу, randrange — нет; sample выбирает без повторов.",
"distractors": [
"вещественное от 0 до 1 (1 не включается)",
"чётное от 0 до 8"
]
},
{
"type": "matching",
"q": "Сопоставьте десятичное число и его запись в восьмеричной системе.",
"pairs": [
{
"left": "26",
"right": "32"
},
{
"left": "53",
"right": "65"
},
{
"left": "23",
"right": "27"
},
{
"left": "8",
"right": "10"
}
],
"explain": "Переводите делением на основание с записью остатков в обратном порядке.",
"distractors": [
"33",
"66"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"14",
"26",
"13",
"12"
],
"answer": 2,
"explain": "int(строка, основание) переводит запись числа из системы с указанным основанием в десятичную. Программа выводит: <code>13</code>.",
"code": "print(int('d', 16))",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте вызов и то, что он возвращает.",
"pairs": [
{
"left": "random.randrange(0, 10, 2)",
"right": "чётное от 0 до 8"
},
{
"left": "random.randint(1, 6)",
"right": "целое от 1 до 6 включительно"
},
{
"left": "random.sample(range(10), 3)",
"right": "список из 3 разных чисел"
},
{
"left": "random.random()",
"right": "вещественное от 0 до 1 (1 не включается)"
}
],
"explain": "randint включает правую границу, randrange — нет; sample выбирает без повторов.",
"distractors": [
"один символ из 'abc'",
"вещественное от 1 до 2"
]
},
{
"type": "single",
"q": "Сколько различных значений может вернуть вызов random.randint(7, 9)?",
"options": [
"2",
"3",
"1",
"4"
],
"answer": 1,
"explain": "randint(a, b) включает обе границы, randrange(a, b) — не включает b (как range)."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0o434",
"0x11c",
"0x11d",
"0x11b"
],
"answer": 1,
"explain": "bin — двоичная (0b), oct — восьмеричная (0o), hex — шестнадцатеричная (0x). Программа выводит: <code>0x11c</code>.",
"code": "print(hex(284))",
"codeOptions": true
}
],
"m12": [
{
"type": "matching",
"q": "Установите соответствие между выражением и его значением.",
"pairs": [
{
"left": "(10 - 3) * 2",
"right": "14"
},
{
"left": "10 - 3 * 2",
"right": "4"
},
{
"left": "-17 % 5",
"right": "3"
},
{
"left": "17 % 5",
"right": "2"
}
],
"explain": "Помните: <code>//</code> округляет вниз (−17 // 5 = −4), остаток всегда того же знака, что и делитель.",
"distractors": [
"-4",
"3.4"
]
},
{
"type": "multiple",
"q": "При каких введённых значениях x программа выведет YES?",
"options": [
"-5",
"2",
"5",
"0",
"13",
"-3"
],
"answer": [
1,
2,
3
],
"explain": "Подставьте каждое значение в условие и проверьте обе части (and — обе истинны, or — хотя бы одна).",
"code": "x = int(input())\nif x > -2 and x <= 9:\n    print('YES')\nelse:\n    print('NO')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2",
"3",
"-2",
"1"
],
"answer": 0,
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code>/<code>int</code> — отбросить дробную часть, <code>round</code> — к ближайшему, а .5 — к чётному. Программа выводит: <code>2</code>.",
"code": "import math\nprint(round(2.0))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"14",
"22",
"16",
"13"
],
"answer": 0,
"explain": "Рекурсия: функция вызывает сама себя с меньшим аргументом до базового случая; результат собирается на обратном ходе. Программа выводит: <code>14</code>.",
"code": "def f(n):\n    if n == 0:\n        return 0\n    return n % 10 + f(n // 10)\n\nprint(f(6530))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"л",
"алгорит",
"лгорит",
"алг"
],
"answer": 1,
"explain": "Срез s[a:b:k] берёт символы с индекса a до b (не включая b) с шагом k. Программа выводит: <code>алгорит</code>.",
"code": "s = 'алгоритм'\nprint(s[0:-1])",
"codeOptions": true
},
{
"type": "multiple",
"q": "При каких введённых значениях x программа выведет YES?",
"options": [
"-6",
"9",
"7",
"3",
"-1",
"0"
],
"answer": [
0,
5
],
"explain": "Подставьте каждое значение в условие и проверьте обе части (and — обе истинны, or — хотя бы одна).",
"code": "x = int(input())\nif not (x > 5) and x % 2 == 0:\n    print('YES')\nelse:\n    print('NO')",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "len('banana')",
"right": "6"
},
{
"left": "'banana'[::-1]",
"right": "ananab"
},
{
"left": "'banana'.replace('an', '-')",
"right": "b--a"
},
{
"left": "'banana'.count('a')",
"right": "3"
}
],
"explain": "find — первое вхождение, rfind — последнее, replace заменяет все вхождения.",
"distractors": [
"2",
"4"
]
},
{
"type": "single",
"q": "Файл data.txt содержит строки:<pre>Aru 92\nTimur 86\nErlan 66</pre>Что выведет программа?",
"options": [
"2",
"Ошибка",
"4",
"3"
],
"answer": 3,
"explain": "readlines() возвращает список строк; for line in f перебирает строки файла; split() делит строку по пробелам. Программа выводит: <code>3</code>.",
"code": "f = open('data.txt')\nprint(len(f.readlines()))\nf.close()",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3 2 1",
"1 2 3",
"3 2 1 1 2 3",
"0"
],
"answer": 1,
"explain": "Печать ДО рекурсивного вызова выполняется на прямом ходе (n, n−1, …), ПОСЛЕ — на обратном (1, 2, …, n). Программа выводит: <code>1 2 3</code>.",
"code": "def f(n):\n    if n > 0:\n        f(n - 1)\n        print(n, end=' ')\n\nf(3)",
"codeOptions": true
},
{
"type": "matching",
"q": "Установите соответствие между выражением и его значением.",
"pairs": [
{
"left": "17 % 5",
"right": "2"
},
{
"left": "17 // 5",
"right": "3"
},
{
"left": "-17 // 5",
"right": "-4"
},
{
"left": "int(-3.7)",
"right": "-3"
}
],
"explain": "Помните: <code>//</code> округляет вниз (−17 // 5 = −4), остаток всегда того же знака, что и делитель.",
"distractors": [
"3.4",
"32"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4.4",
"4",
"110",
"2"
],
"answer": 1,
"explain": "<code>//</code> — целочисленное деление (округление вниз), <code>%</code> — остаток, <code>/</code> — всегда float, <code>**</code> — степень. Программа выводит: <code>4</code>.",
"code": "a = 22\nb = 5\nprint(a // b)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4",
"10",
"5",
"7"
],
"answer": 2,
"explain": "Трассируйте: проверка условия → тело → снова проверка. Цикл заканчивается, когда условие ложно. Программа выводит: <code>5</code>.",
"code": "n = 325\nc = 0\nwhile n > 0:\n    n //= 10\n    c += n % 10\nprint(c)",
"codeOptions": true
},
{
"type": "multiple",
"q": "При каких введённых значениях x программа выведет YES?",
"options": [
"13",
"12",
"4",
"14",
"10",
"9"
],
"answer": [
2,
3
],
"explain": "Подставьте каждое значение в условие и проверьте обе части (and — обе истинны, or — хотя бы одна).",
"code": "x = int(input())\nif x < 8 or x >= 14:\n    print('YES')\nelse:\n    print('NO')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"False",
"True",
"Ошибка"
],
"answer": 1,
"explain": "<code>and</code> — истинно, только если оба истинны; <code>or</code> — если хотя бы одно; <code>not</code> меняет значение; цепочка <code>a &lt; x &lt;= b</code> проверяет оба сравнения.",
"code": "x = -1\ny = 9\nprint(x > 0 and y > 0)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дана функция:<pre>def f(n):\n    if n &lt;= 1:\n        return 1\n    return f(n - 1) + f(n - 2)</pre>Сопоставьте вызов и результат.",
"pairs": [
{
"left": "f(5)",
"right": "8"
},
{
"left": "f(6)",
"right": "13"
},
{
"left": "f(4)",
"right": "5"
},
{
"left": "f(2)",
"right": "2"
}
],
"explain": "f(0) = f(1) = 1, далее каждое значение — сумма двух предыдущих."
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 4 — ровно целое число 4 (тип int)?",
"options": [
"4 * 1.0",
"8 / 2",
"40 % 10",
"8 // 2",
"round(4.4)",
"4 ** 1"
],
"answer": [
3,
4,
5
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 4.0), а не int.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"36] 25, 16, 9, 4, 1, [0,",
"[1, 4, 9, 16, 25, 36, 49]",
"[0, 1, 4, 9, 16, 25, 36]",
"1, 4, 9, 16, 25, 36]"
],
"answer": 2,
"explain": "Генератор списка: [выражение for элемент in последовательность if условие]. Программа выводит: <code>[0, 1, 4, 9, 16, 25, 36]</code>.",
"code": "print([i * i for i in range(7)])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4",
"15",
"6",
"5"
],
"answer": 3,
"explain": "range(a, b, step) не включает b. Переберите значения i и выполните тело цикла для каждого. Программа выводит: <code>5</code>.",
"code": "s = 0\nfor i in range(1, 6, 3):\n    s += i\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"17",
"1",
"[14, 19, 7, 7]"
],
"answer": 2,
"explain": "Индексация с 0, срез не включает правую границу. Программа выводит: <code>1</code>.",
"code": "a = [17, 14, 19, 7, 7]\nprint(a.count(a[0]))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5",
"None",
"5\nNone",
"4"
],
"answer": 3,
"explain": "Функция без return возвращает None; return сразу завершает функцию. Программа выводит: <code>4</code>.",
"code": "def f(x, y):\n    return x if x > y else y\n\nprint(f(4, 1))",
"codeOptions": true
},
{
"type": "matching",
"q": "Установите соответствие между выражением и его значением.",
"pairs": [
{
"left": "abs(-12)",
"right": "12"
},
{
"left": "17 % 5",
"right": "2"
},
{
"left": "5 ** 0",
"right": "1"
},
{
"left": "round(3.5)",
"right": "4"
}
],
"explain": "Помните: <code>//</code> округляет вниз (−17 // 5 = −4), остаток всегда того же знака, что и делитель.",
"distractors": [
"3",
"-4"
]
},
{
"type": "multiple",
"q": "Какие фрагменты выведут ровно 5 строк(и)?",
"options": [
"for i in range(5): print(i)",
"i = 5\nwhile i > 0:\n    print(i)\n    i -= 2",
"for i in range(10, 0, -2): print(i)",
"i = 1\nwhile i < 32:\n    print(i)\n    i *= 2",
"i = 0\nwhile i < 5:\n    print(i)\n    i += 1",
"for i in range(5, 0): print(i)"
],
"answer": [
0,
2,
3,
4
],
"explain": "Посчитайте количество повторений тела цикла.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"A",
"B",
"A\nB",
"C"
],
"answer": 0,
"explain": "В цепочке if–elif–else выполняется только первая ветка с истинным условием; граничные значения проверяйте по знаку (&gt; или &gt;=). Программа выводит: <code>A</code>.",
"code": "x = 11\nif x >= 11:\n    print('A')\nelif x > 6:\n    print('B')\nelse:\n    print('C')",
"codeOptions": true
},
{
"type": "single",
"q": "С какой версии Python доступен оператор match / case?",
"options": [
"2.7",
"3.6",
"3.8",
"3.10"
],
"answer": 3,
"explain": "match/case появился в Python 3.10; в старых версиях вызовет SyntaxError."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"125",
"2",
"1.6666666666666667",
"1"
],
"answer": 0,
"explain": "<code>//</code> — целочисленное деление (округление вниз), <code>%</code> — остаток, <code>/</code> — всегда float, <code>**</code> — степень. Программа выводит: <code>125</code>.",
"code": "a = 5\nb = 3\nprint(a ** b)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан фрагмент программы. Сопоставьте значение x и значение r после его выполнения.<pre>if x &lt; 0:\n    r = 'A'\nelif x &lt; 6:\n    r = 'B'\nelif x == 6:\n    r = 'C'\nelse:\n    r = 'D'</pre>",
"pairs": [
{
"left": "x = -1",
"right": "A"
},
{
"left": "x = 1",
"right": "B"
},
{
"left": "x = 6",
"right": "C"
},
{
"left": "x = 8",
"right": "D"
}
],
"explain": "Проверяйте условия сверху вниз: срабатывает первое истинное."
},
{
"type": "single",
"q": "Что означает образец case _: в конструкции match?",
"options": [
"пустую строку",
"любое значение (ветка «иначе»)",
"None",
"ошибку"
],
"answer": 1,
"explain": "_ — образец-джокер, подходит ко всему; обычно его ставят последним."
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 5 — ровно целое число 5 (тип int)?",
"options": [
"10 / 2",
"10 // 2",
"abs(-5)",
"5 * 1.0",
"len('aaaaa')",
"int('5')"
],
"answer": [
1,
2,
4,
5
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 5.0), а не int.",
"codeOptions": true
},
{
"type": "single",
"q": "Какой конструкцией можно заменить match / case в ЕНТ-задачах?",
"options": [
"функцией map",
"цепочкой if – elif – else",
"циклом while",
"конструкцией try – except"
],
"answer": 1,
"explain": "Каждый case соответствует одной ветке elif."
},
{
"type": "multiple",
"q": "Какие фрагменты выведут ровно 5 строк(и)?",
"options": [
"i = 1\nwhile i < 32:\n    print(i)\n    i *= 2",
"for i in range(10, 0, -2): print(i)",
"for i in range(0, 10, 2): print(i)",
"for i in range(1, 5): print(i)",
"i = 5\nwhile i > 0:\n    print(i)\n    i -= 2",
"for c in 'hello': print(c)"
],
"answer": [
0,
1,
2,
5
],
"explain": "Посчитайте количество повторений тела цикла.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 2 — ровно целое число 2 (тип int)?",
"options": [
"20 % 10",
"20 // 10",
"2 * 1.0",
"3 - 1",
"int('2')",
"abs(-2)"
],
"answer": [
1,
3,
4,
5
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 2.0), а не int.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"цифра",
"отрицательное",
"ноль",
"двузначное"
],
"answer": 3,
"explain": "Условие после if в case (guard) проверяется только для подошедшего образца; срабатывает первый case с истинным условием. Программа выводит: <code>двузначное</code>.",
"code": "n = 79\nmatch n:\n    case k if k < 0:\n        print('отрицательное')\n    case 0:\n        print('ноль')\n    case k if k < 10:\n        print('цифра')\n    case k if k < 100:\n        print('двузначное')\n    case _:\n        print('большое')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"273",
"3",
"35"
],
"answer": 0,
"explain": "Здесь вычисляется цифра сотен: <code>// 10</code> отбрасывает последнюю цифру, <code>% 10</code> берёт последнюю. Программа выводит: <code>7</code>.",
"code": "n = 2735\nprint(n // 100 % 10)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие фрагменты выведут ровно 5 строк(и)?",
"options": [
"for c in 'hello': print(c)",
"i = 5\nwhile i > 0:\n    print(i)\n    i -= 2",
"for i in range(5): print(i)",
"for i in range(10, 0, -2): print(i)",
"for i in range(5, 0): print(i)",
"i = 0\nwhile i < 5:\n    print(i)\n    i += 1"
],
"answer": [
0,
2,
3,
5
],
"explain": "Посчитайте количество повторений тела цикла.",
"codeOptions": true
},
{
"type": "single",
"q": "Месяц задан номером m. Что выведет программа?",
"options": [
"осень",
"весна",
"зима",
"лето"
],
"answer": 1,
"explain": "Каждый case перечисляет подходящие значения через |; case _ ловит всё остальное. Программа выводит: <code>весна</code>.",
"code": "m = 3\nmatch m:\n    case 12 | 1 | 2:\n        s = 'зима'\n    case 3 | 4 | 5:\n        s = 'весна'\n    case 6 | 7 | 8:\n        s = 'лето'\n    case _:\n        s = 'осень'\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"9",
"8",
"11",
"10"
],
"answer": 0,
"explain": "Рекурсия: функция вызывает сама себя с меньшим аргументом до базового случая; результат собирается на обратном ходе. Программа выводит: <code>9</code>.",
"code": "def f(n):\n    if n <= 0:\n        return 0\n    return n + f(n - 2)\n\nprint(f(5))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"6",
"101",
"0",
"29"
],
"answer": 3,
"explain": "Начальное значение важно: если искать максимум, начиная с 0, для отрицательных чисел ответ будет неверным. Программа выводит: <code>29</code>.",
"code": "a = [8, 12, 8, 29, 15, 29]\nm = 0\nfor x in a:\n    if x > m:\n        m = x\nprint(m)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"720",
"7",
"0",
"3"
],
"answer": 3,
"explain": "Здесь вычисляется последняя цифра: <code>// 10</code> отбрасывает последнюю цифру, <code>% 10</code> берёт последнюю. Программа выводит: <code>3</code>.",
"code": "n = 7203\nprint(n % 10)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"True",
"False",
"Ошибка"
],
"answer": 1,
"explain": "<code>and</code> — истинно, только если оба истинны; <code>or</code> — если хотя бы одно; <code>not</code> меняет значение; цепочка <code>a &lt; x &lt;= b</code> проверяет оба сравнения.",
"code": "x = 0\ny = 10\nprint(-3 < x <= y)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"6] 5, [1,",
"[1, 5,",
"[1, 5, 6]",
"5, 6]"
],
"answer": 2,
"explain": "Генератор списка: [выражение for элемент in последовательность if условие]. Программа выводит: <code>[1, 5, 6]</code>.",
"code": "print([len(w) for w in 'я люблю python'.split()])",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие типы задач входят в классические задачники (раздел — тема)?",
"options": [
"Series — последовательности",
"Integer — целочисленная арифметика",
"Graphics — рисование",
"Network — работа с сетью",
"Boolean — логические выражения"
],
"answer": [
0,
1,
4
],
"explain": "Разделы практикума: Begin, Integer, Boolean, If, Case, For, While, Series, Proc, Minmax, Array, Matrix, String, Recursion, File."
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "len('banana')",
"right": "6"
},
{
"left": "'banana'[::-1]",
"right": "ananab"
},
{
"left": "'banana'.index('b')",
"right": "0"
},
{
"left": "'banana'.find('n')",
"right": "2"
}
],
"explain": "find — первое вхождение, rfind — последнее, replace заменяет все вхождения.",
"distractors": [
"3",
"4"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4",
"3",
"5",
"6"
],
"answer": 0,
"explain": "Трассируйте: проверка условия → тело → снова проверка. Цикл заканчивается, когда условие ложно. Программа выводит: <code>4</code>.",
"code": "n = 61\nc = 0\nwhile n > 5:\n    n //= 2\n    c += 1\nprint(c)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 5 — ровно целое число 5 (тип int)?",
"options": [
"50 % 10",
"50 // 10",
"15 % 16 // 3",
"int(5.9)",
"10 / 2",
"abs(-5)"
],
"answer": [
1,
2,
3,
5
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 5.0), а не int.",
"codeOptions": true
},
{
"type": "multiple",
"q": "При каких введённых значениях x программа выведет YES?",
"options": [
"3",
"-1",
"2",
"-8",
"-6",
"0"
],
"answer": [
0,
1,
2,
5
],
"explain": "Подставьте каждое значение в условие и проверьте обе части (and — обе истинны, or — хотя бы одна).",
"code": "x = int(input())\nif x > -4 and x <= 4:\n    print('YES')\nelse:\n    print('NO')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"нечётная",
"другая",
"малая чётная",
"ноль"
],
"answer": 0,
"explain": "match сверяет значение с образцами сверху вниз; | означает «или», case _ срабатывает, если не подошёл ни один образец. Программа выводит: <code>нечётная</code>.",
"code": "x = 3\nmatch x:\n    case 0:\n        print('ноль')\n    case 1 | 3 | 5 | 7 | 9:\n        print('нечётная')\n    case 2 | 4:\n        print('малая чётная')\n    case _:\n        print('другая')",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан список a = [8, 7, 5, 5]. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).",
"pairs": [
{
"left": "a.append(0)",
"right": "[8, 7, 5, 5, 0]"
},
{
"left": "a.pop(0)",
"right": "[7, 5, 5]"
},
{
"left": "a.insert(0, 0)",
"right": "[0, 8, 7, 5, 5]"
},
{
"left": "a.pop()",
"right": "[8, 7, 5]"
}
],
"explain": "Операции изменяют список на месте."
},
{
"type": "matching",
"q": "Дана функция:<pre>def f(n):\n    if n &lt;= 1:\n        return 1\n    return f(n - 1) + f(n - 2)</pre>Сопоставьте вызов и результат.",
"pairs": [
{
"left": "f(5)",
"right": "8"
},
{
"left": "f(1)",
"right": "1"
},
{
"left": "f(6)",
"right": "13"
},
{
"left": "f(2)",
"right": "2"
}
],
"explain": "f(0) = f(1) = 1, далее каждое значение — сумма двух предыдущих."
},
{
"type": "single",
"q": "Последовательность чисел задана списком. Что выведет программа?",
"options": [
"-8",
"-7",
"8",
"-9"
],
"answer": 0,
"explain": "Задачи на последовательности: проход по элементам с накоплением суммы, счётчика или длины серии; break останавливает обработку. Программа выводит: <code>-8</code>.",
"code": "a = [4, 12, 5, 0, -9, 11, -8, -6]\ns = 0\nfor i in range(len(a)):\n    if i % 2 == 0:\n        s += a[i]\nprint(s)",
"codeOptions": true
},
{
"type": "multiple",
"q": "При каких введённых значениях x программа выведет YES?",
"options": [
"3",
"12",
"17",
"2",
"1",
"13"
],
"answer": [
1,
3
],
"explain": "Подставьте каждое значение в условие и проверьте обе части (and — обе истинны, or — хотя бы одна).",
"code": "x = int(input())\nif not (x > 14) and x % 2 == 0:\n    print('YES')\nelse:\n    print('NO')",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 2 — ровно целое число 2 (тип int)?",
"options": [
"4 // 2",
"2 * 1.0",
"4 / 2",
"len('aa')",
"3 // 1 - 1",
"2 ** 1"
],
"answer": [
0,
3,
4,
5
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 2.0), а не int.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"берём key",
"Ошибка",
"непонятно",
"команда take key"
],
"answer": 0,
"explain": "Образец-список ['go', d] подходит только к списку ровно из двух элементов, где первый — 'go'; d получает второй элемент. Программа выводит: <code>берём key</code>.",
"code": "cmd = 'take key'\nmatch cmd.split():\n    case ['go', d]:\n        print('идём', d)\n    case ['take', item]:\n        print('берём', item)\n    case ['look'] | ['quit']:\n        print('команда', cmd)\n    case _:\n        print('непонятно')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-3",
"4",
"-4",
"-5"
],
"answer": 2,
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code>/<code>int</code> — отбросить дробную часть, <code>round</code> — к ближайшему, а .5 — к чётному. Программа выводит: <code>-4</code>.",
"code": "import math\nprint(math.ceil(-4.7))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1",
"11",
"[5, 6, 3]",
"9"
],
"answer": 3,
"explain": "m[i][j] — элемент строки i и столбца j. Главная диагональ — m[i][i], побочная — m[i][n−1−i]. Программа выводит: <code>9</code>.",
"code": "m = [[5, 5, 1], [1, 6, 2], [5, 3, 7]]\nprint(len(m) * len(m[0]))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"двузначное",
"цифра",
"большое",
"ноль"
],
"answer": 0,
"explain": "Условие после if в case (guard) проверяется только для подошедшего образца; срабатывает первый case с истинным условием. Программа выводит: <code>двузначное</code>.",
"code": "n = 65\nmatch n:\n    case k if k < 0:\n        print('отрицательное')\n    case 0:\n        print('ноль')\n    case k if k < 10:\n        print('цифра')\n    case k if k < 100:\n        print('двузначное')\n    case _:\n        print('большое')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"61",
"22",
"6",
"-3"
],
"answer": 1,
"explain": "Начальное значение важно: если искать максимум, начиная с 0, для отрицательных чисел ответ будет неверным. Программа выводит: <code>22</code>.",
"code": "a = [16, -1, 10, 17, 22, -3]\nm = 0\nfor x in a:\n    if x > m:\n        m = x\nprint(m)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"II",
"III",
"I",
"0"
],
"answer": 0,
"explain": "Сначала проверяется внешнее условие, затем — вложенное внутри выбранной ветки. Программа выводит: <code>II</code>.",
"code": "a = -5\nb = 1\nif a > 0:\n    if b > 0:\n        print('I')\n    else:\n        print('IV')\nelse:\n    if b > 0:\n        print('II')\n    else:\n        print('III')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"B",
"C",
"A\nB",
"A"
],
"answer": 1,
"explain": "В цепочке if–elif–else выполняется только первая ветка с истинным условием; граничные значения проверяйте по знаку (&gt; или &gt;=). Программа выводит: <code>C</code>.",
"code": "x = -2\nif x > 10:\n    print('A')\nelif x >= -1:\n    print('B')\nelse:\n    print('C')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"4",
"10",
"3",
"5"
],
"answer": 3,
"explain": "<code>n % 10</code> — последняя цифра, <code>n //= 10</code> — убрать её. Цикл перебирает цифры справа налево. Программа выводит: <code>5</code>.",
"code": "n = 88957\ns = 0\nwhile n > 0:\n    s += 1\n    n //= 10\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Файл data.txt содержит строки:<pre>Ali 94\nErlan 100\nErlan 73\nErlan 74</pre>Что выведет программа?",
"options": [
"Ошибка",
"Ali 94",
"3",
"5"
],
"answer": 1,
"explain": "readlines() возвращает список строк; for line in f перебирает строки файла; split() делит строку по пробелам. Программа выводит: <code>Ali 94</code>.",
"code": "with open('data.txt') as f:\n    print(f.readline().strip())",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан фрагмент программы. Сопоставьте значение x и значение r после его выполнения.<pre>if x &lt; 0:\n    r = 'A'\nelif x &lt; 5:\n    r = 'B'\nelif x == 5:\n    r = 'C'\nelse:\n    r = 'D'</pre>",
"pairs": [
{
"left": "x = -1",
"right": "A"
},
{
"left": "x = 4",
"right": "B"
},
{
"left": "x = 5",
"right": "C"
},
{
"left": "x = 7",
"right": "D"
}
],
"explain": "Проверяйте условия сверху вниз: срабатывает первое истинное."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"непонятно",
"берём key",
"команда look",
"Ошибка"
],
"answer": 2,
"explain": "Образец-список ['go', d] подходит только к списку ровно из двух элементов, где первый — 'go'; d получает второй элемент. Программа выводит: <code>команда look</code>.",
"code": "cmd = 'look'\nmatch cmd.split():\n    case ['go', d]:\n        print('идём', d)\n    case ['take', item]:\n        print('берём', item)\n    case ['look'] | ['quit']:\n        print('команда', cmd)\n    case _:\n        print('непонятно')",
"codeOptions": true
},
{
"type": "single",
"q": "Последовательность чисел задана списком. Что выведет программа?",
"options": [
"8",
"-4",
"-8",
"9"
],
"answer": 0,
"explain": "Задачи на последовательности: проход по элементам с накоплением суммы, счётчика или длины серии; break останавливает обработку. Программа выводит: <code>8</code>.",
"code": "a = [-7, -8, -1, 4, 2, 0, 14]\ns = 0\nfor i in range(len(a)):\n    if i % 2 == 0:\n        s += a[i]\nprint(s)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан список a = [2, 7, 8, 7]. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).",
"pairs": [
{
"left": "a.append(0)",
"right": "[2, 7, 8, 7, 0]"
},
{
"left": "a.pop()",
"right": "[2, 7, 8]"
},
{
"left": "a.reverse()",
"right": "[7, 8, 7, 2]"
},
{
"left": "a.insert(0, 0)",
"right": "[0, 2, 7, 8, 7]"
}
],
"explain": "Операции изменяют список на месте."
},
{
"type": "matching",
"q": "Дан фрагмент программы. Сопоставьте значение x и значение r после его выполнения.<pre>if x &lt; 0:\n    r = 'A'\nelif x &lt; 4:\n    r = 'B'\nelif x == 4:\n    r = 'C'\nelse:\n    r = 'D'</pre>",
"pairs": [
{
"left": "x = -3",
"right": "A"
},
{
"left": "x = 3",
"right": "B"
},
{
"left": "x = 4",
"right": "C"
},
{
"left": "x = 6",
"right": "D"
}
],
"explain": "Проверяйте условия сверху вниз: срабатывает первое истинное."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"7",
"3",
"73",
"9"
],
"answer": 2,
"explain": "Здесь вычисляется две последние цифры: <code>// 10</code> отбрасывает последнюю цифру, <code>% 10</code> берёт последнюю. Программа выводит: <code>73</code>.",
"code": "n = 9873\nprint(n % 100)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"0",
"III",
"II",
"IV"
],
"answer": 2,
"explain": "Сначала проверяется внешнее условие, затем — вложенное внутри выбранной ветки. Программа выводит: <code>II</code>.",
"code": "a = -4\nb = 3\nif a > 0:\n    if b > 0:\n        print('I')\n    else:\n        print('IV')\nelse:\n    if b > 0:\n        print('II')\n    else:\n        print('III')",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан фрагмент:<pre>match t:\n    case (0, 0):\n        r = 'начало'\n    case (0, y):\n        r = 'ось Y'\n    case (x, 0):\n        r = 'ось X'\n    case _:\n        r = 'плоскость'</pre>Сопоставьте значение t и результат r.",
"pairs": [
{
"left": "t = (3, 0)",
"right": "ось X"
},
{
"left": "t = (0, 0)",
"right": "начало"
},
{
"left": "t = (-1, 7)",
"right": "плоскость"
},
{
"left": "t = (0, -2)",
"right": "ось Y"
}
],
"explain": "Образец (0, y) подходит к любой паре с первым элементом 0 и записывает второй элемент в y."
},
{
"type": "matching",
"q": "Дан фрагмент:<pre>match t:\n    case (0, 0):\n        r = 'начало'\n    case (0, y):\n        r = 'ось Y'\n    case (x, 0):\n        r = 'ось X'\n    case _:\n        r = 'плоскость'</pre>Сопоставьте значение t и результат r.",
"pairs": [
{
"left": "t = (2, 2)",
"right": "плоскость"
},
{
"left": "t = (3, 0)",
"right": "ось X"
},
{
"left": "t = (0, 5)",
"right": "ось Y"
},
{
"left": "t = (0, 0)",
"right": "начало"
}
],
"explain": "Образец (0, y) подходит к любой паре с первым элементом 0 и записывает второй элемент в y."
},
{
"type": "matching",
"q": "Установите соответствие между выражением и его значением.",
"pairs": [
{
"left": "17 % 5",
"right": "2"
},
{
"left": "-17 // 5",
"right": "-4"
},
{
"left": "17 // 5",
"right": "3"
},
{
"left": "round(4.5)",
"right": "4"
}
],
"explain": "Помните: <code>//</code> округляет вниз (−17 // 5 = −4), остаток всегда того же знака, что и делитель.",
"distractors": [
"3.4",
"32"
]
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"26",
"27",
"25",
"52"
],
"answer": 0,
"explain": "<code>n % 10</code> — последняя цифра, <code>n //= 10</code> — убрать её. Цикл перебирает цифры справа налево. Программа выводит: <code>26</code>.",
"code": "n = 45692\ns = 0\nwhile n > 0:\n    s += n % 10\n    n //= 10\nprint(s)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"5=3+2",
"2+3=5",
"5",
"10"
],
"answer": 3,
"explain": "Цикл for c in s перебирает символы строки по одному слева направо. Программа выводит: <code>10</code>.",
"code": "s = '2+3=5'\nk = 0\nfor c in s:\n    if c.isdigit():\n        k += int(c)\nprint(k)",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан фрагмент:<pre>match t:\n    case (0, 0):\n        r = 'начало'\n    case (0, y):\n        r = 'ось Y'\n    case (x, 0):\n        r = 'ось X'\n    case _:\n        r = 'плоскость'</pre>Сопоставьте значение t и результат r.",
"pairs": [
{
"left": "t = (0, 0)",
"right": "начало"
},
{
"left": "t = (3, 0)",
"right": "ось X"
},
{
"left": "t = (0, 5)",
"right": "ось Y"
},
{
"left": "t = (2, 2)",
"right": "плоскость"
}
],
"explain": "Образец (0, y) подходит к любой паре с первым элементом 0 и записывает второй элемент в y."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"3",
"0",
"2",
"1"
],
"answer": 1,
"explain": "<code>floor</code> — вниз, <code>ceil</code> — вверх, <code>trunc</code>/<code>int</code> — отбросить дробную часть, <code>round</code> — к ближайшему, а .5 — к чётному. Программа выводит: <code>0</code>.",
"code": "import math\nprint(math.ceil(-0.5))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"fun",
"n",
"u",
"unc"
],
"answer": 2,
"explain": "Срез s[a:b:k] берёт символы с индекса a до b (не включая b) с шагом k. Программа выводит: <code>u</code>.",
"code": "s = 'function'\nprint(s[1:3:3])",
"codeOptions": true
},
{
"type": "matching",
"q": "Сопоставьте выражение и результат.",
"pairs": [
{
"left": "'banana'.find('n')",
"right": "2"
},
{
"left": "'banana'[1:4]",
"right": "ana"
},
{
"left": "'banana'.replace('an', '-')",
"right": "b--a"
},
{
"left": "'banana'.rfind('n')",
"right": "4"
}
],
"explain": "find — первое вхождение, rfind — последнее, replace заменяет все вхождения.",
"distractors": [
"3",
"BANANA"
]
},
{
"type": "matching",
"q": "Дан список a = [4, 5, 1, 4]. Сопоставьте операцию и состояние списка после неё (каждая операция применяется к исходному списку).",
"pairs": [
{
"left": "a.remove(a[-1])",
"right": "[5, 1, 4]"
},
{
"left": "a.pop()",
"right": "[4, 5, 1]"
},
{
"left": "del a[1:3]",
"right": "[4, 4]"
},
{
"left": "a.extend([0, 0])",
"right": "[4, 5, 1, 4, 0, 0]"
}
],
"explain": "Операции изменяют список на месте."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"False",
"True",
"Ошибка",
"None"
],
"answer": 0,
"explain": "<code>and</code> — истинно, только если оба истинны; <code>or</code> — если хотя бы одно; <code>not</code> меняет значение; цепочка <code>a &lt; x &lt;= b</code> проверяет оба сравнения.",
"code": "x = 10\ny = -1\nprint(x > 0 and y > 0)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 3 — ровно целое число 3 (тип int)?",
"options": [
"6 // 2",
"3 ** 1",
"30 % 10",
"round(3.4)",
"3 * 1.0",
"30 // 10"
],
"answer": [
0,
1,
3,
5
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 3.0), а не int.",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"другая",
"нечётная",
"ноль",
"малая чётная"
],
"answer": 0,
"explain": "match сверяет значение с образцами сверху вниз; | означает «или», case _ срабатывает, если не подошёл ни один образец. Программа выводит: <code>другая</code>.",
"code": "x = 8\nmatch x:\n    case 0:\n        print('ноль')\n    case 1 | 3 | 5 | 7 | 9:\n        print('нечётная')\n    case 2 | 4:\n        print('малая чётная')\n    case _:\n        print('другая')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-0.6666666666666666",
"-6",
"-1",
"1"
],
"answer": 0,
"explain": "<code>//</code> — целочисленное деление (округление вниз), <code>%</code> — остаток, <code>/</code> — всегда float, <code>**</code> — степень. Программа выводит: <code>-0.6666666666666666</code>.",
"code": "a = -2\nb = 3\nprint(a / b)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"1 2",
"2 1 1 2",
"0",
"2 1"
],
"answer": 0,
"explain": "Печать ДО рекурсивного вызова выполняется на прямом ходе (n, n−1, …), ПОСЛЕ — на обратном (1, 2, …, n). Программа выводит: <code>1 2</code>.",
"code": "def f(n):\n    if n > 0:\n        f(n - 1)\n        print(n, end=' ')\n\nf(2)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"Ошибка",
"18",
"None",
"9"
],
"answer": 1,
"explain": "Функция без return возвращает None; return сразу завершает функцию. Программа выводит: <code>18</code>.",
"code": "def f(x, y):\n    s = 0\n    for i in range(x):\n        s += y\n    return s\n\nprint(f(6, 3))",
"codeOptions": true
},
{
"type": "single",
"q": "Что выполнится, если ни один case не подошёл и нет case _?",
"options": [
"первый case",
"ничего — выполнение продолжится после match",
"ошибка MatchError",
"последний case"
],
"answer": 1,
"explain": "В отличие от некоторых языков, отсутствие совпадения — не ошибка."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"18",
"3",
"0",
"[3, 7]"
],
"answer": 1,
"explain": "Индексация с 0, срез не включает правую границу. Программа выводит: <code>3</code>.",
"code": "a = [18, 3, 7, 13, 14, 4, 0]\nprint(sorted(a)[1])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"2",
"[5, 7, 8]",
"22",
"8"
],
"answer": 0,
"explain": "m[i][j] — элемент строки i и столбца j. Главная диагональ — m[i][i], побочная — m[i][n−1−i]. Программа выводит: <code>2</code>.",
"code": "m = [[9, 5, 8], [3, 7, 3], [2, 8, 6]]\nprint(m[2][0])",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"-1",
"Ошибка",
"3",
"6"
],
"answer": 2,
"explain": "Методы строк не изменяют исходную строку, а возвращают новый результат; find возвращает −1, если подстроки нет, а index — ошибку. Программа выводит: <code>3</code>.",
"code": "s = 'Banana'\nprint(s.count('a'))",
"codeOptions": true
},
{
"type": "matching",
"q": "Дана функция:<pre>def f(n):\n    if n &lt;= 1:\n        return 1\n    return f(n - 1) + f(n - 2)</pre>Сопоставьте вызов и результат.",
"pairs": [
{
"left": "f(3)",
"right": "3"
},
{
"left": "f(7)",
"right": "21"
},
{
"left": "f(1)",
"right": "1"
},
{
"left": "f(4)",
"right": "5"
}
],
"explain": "f(0) = f(1) = 1, далее каждое значение — сумма двух предыдущих."
},
{
"type": "single",
"q": "Месяц задан номером m. Что выведет программа?",
"options": [
"осень",
"лето",
"зима",
"весна"
],
"answer": 1,
"explain": "Каждый case перечисляет подходящие значения через |; case _ ловит всё остальное. Программа выводит: <code>лето</code>.",
"code": "m = 8\nmatch m:\n    case 12 | 1 | 2:\n        s = 'зима'\n    case 3 | 4 | 5:\n        s = 'весна'\n    case 6 | 7 | 8:\n        s = 'лето'\n    case _:\n        s = 'осень'\nprint(s)",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие фрагменты выведут ровно 5 строк(и)?",
"options": [
"for c in 'hello': print(c)",
"for i in range(0, 10, 2): print(i)",
"i = 1\nwhile i < 32:\n    print(i)\n    i *= 2",
"for i in range(5, 0): print(i)",
"for i in range(1, 5): print(i)",
"i = 5\nwhile i > 0:\n    print(i)\n    i -= 2"
],
"answer": [
0,
1,
2
],
"explain": "Посчитайте количество повторений тела цикла.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 4 — ровно целое число 4 (тип int)?",
"options": [
"4 * 1.0",
"5 // 1 - 1",
"len('aaaa')",
"int('4')",
"abs(-4)",
"8 / 2"
],
"answer": [
1,
2,
3,
4
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 4.0), а не int.",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие выражения имеют значение 5 — ровно целое число 5 (тип int)?",
"options": [
"5 * 1.0",
"10 / 2",
"6 - 1",
"6 // 1 - 1",
"10 // 2",
"len('aaaaa')"
],
"answer": [
2,
3,
4,
5
],
"explain": "Деление <code>/</code> и умножение на <code>1.0</code> дают float (например, 5.0), а не int.",
"codeOptions": true
},
{
"type": "multiple",
"q": "При каких введённых значениях x программа выведет YES?",
"options": [
"1",
"-3",
"-2",
"0",
"-4",
"-1"
],
"answer": [
2,
4
],
"explain": "Подставьте каждое значение в условие и проверьте обе части (and — обе истинны, or — хотя бы одна).",
"code": "x = int(input())\nif not (x > -1) and x % 2 == 0:\n    print('YES')\nelse:\n    print('NO')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"C",
"B",
"A\nB",
"A"
],
"answer": 1,
"explain": "В цепочке if–elif–else выполняется только первая ветка с истинным условием; граничные значения проверяйте по знаку (&gt; или &gt;=). Программа выводит: <code>B</code>.",
"code": "x = 1\nif x > 19:\n    print('A')\nelif x >= 0:\n    print('B')\nelse:\n    print('C')",
"codeOptions": true
},
{
"type": "multiple",
"q": "Какие записи образцов в case допустимы?",
"options": [
"case x == 3:",
"case > 5:",
"case 1 | 2 | 3:",
"case n if n > 0:",
"case _:",
"case [x, y]:"
],
"answer": [
2,
3,
4,
5
],
"explain": "Сравнения пишут в guard (if), а не прямо в образце."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"None",
"+3=5",
"2+3=",
"2+3=5"
],
"answer": 3,
"explain": "Цикл for c in s перебирает символы строки по одному слева направо. Программа выводит: <code>2+3=5</code>.",
"code": "s = '2+3=5'\nt = ''\nfor c in s:\n    if c not in t:\n        t += c\nprint(t)",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"МАМА МЫЛА РАМУ",
"False",
"14",
"Ошибка"
],
"answer": 1,
"explain": "Методы строк не изменяют исходную строку, а возвращают новый результат; find возвращает −1, если подстроки нет, а index — ошибку. Программа выводит: <code>False</code>.",
"code": "s = 'мама мыла раму'\nprint(s.startswith('B'))",
"codeOptions": true
},
{
"type": "matching",
"q": "Дан фрагмент программы. Сопоставьте значение x и значение r после его выполнения.<pre>if x &lt; 0:\n    r = 'A'\nelif x &lt; 8:\n    r = 'B'\nelif x == 8:\n    r = 'C'\nelse:\n    r = 'D'</pre>",
"pairs": [
{
"left": "x = -1",
"right": "A"
},
{
"left": "x = 6",
"right": "B"
},
{
"left": "x = 8",
"right": "C"
},
{
"left": "x = 11",
"right": "D"
}
],
"explain": "Проверяйте условия сверху вниз: срабатывает первое истинное."
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"I",
"0",
"II",
"IV"
],
"answer": 3,
"explain": "Сначала проверяется внешнее условие, затем — вложенное внутри выбранной ветки. Программа выводит: <code>IV</code>.",
"code": "a = 7\nb = -5\nif a > 0:\n    if b > 0:\n        print('I')\n    else:\n        print('IV')\nelse:\n    if b > 0:\n        print('II')\n    else:\n        print('III')",
"codeOptions": true
},
{
"type": "single",
"q": "Что выведет программа?",
"options": [
"6",
"9",
"10",
"18"
],
"answer": 1,
"explain": "range(a, b, step) не включает b. Переберите значения i и выполните тело цикла для каждого. Программа выводит: <code>9</code>.",
"code": "s = 0\nfor i in range(1, 6, 2):\n    s += i\nprint(s)",
"codeOptions": true
}
]
};

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
