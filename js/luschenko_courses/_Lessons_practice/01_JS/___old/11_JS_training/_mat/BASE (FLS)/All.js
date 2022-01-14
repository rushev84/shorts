// ОСНОВЫ СИНТАКСИСА

/*
ДОМАШКА
Создай новый проект, подключи к нему файл script.js и
в строгом режиме выведи в консоль фразу «Я учу JS»

Так же напиши в комментарии какой вариант вызовет ошибку:
*/

//Вариант №1
console.log('Учим JS')

//Вариант №2
console.log('JS')
console.log('Учим')

//Вариант №3
console.log('Учим') console.log('JS')

//Вариант №4
console.log('Учим);
console.log('JS');

//Ну и конечно же, учи теорию.

//=================================================

/*
// ТОЧКА С ЗАПЯТОЙ
console.log('Учим JS');
['Учим', 'JS'].forEach(alert);
*/

/*
ЗНАЧЕНИЯ
В JavaScript есть несколько типов значений (values):
фиксированные значения (литералы), значения констант
и значения переменных.
*/
/*
//Примеры литералов
25							// литерал целого числа
23.8						// литерал дробного числа
'JavaScript'			// литерал строки
"JavaScript"			// литерал строки
[]							// литерал массива
[15,7,89]				// литерал массива
{}							// литерал объекта
{
	name: 'Фрилансер',
	surname: 'по жизни'
}							// литерал объекта
(ab|bc)					// литерал регулярного выражения

// В языках программирования константы и переменные
// используются для хранения значений данных.
const MAX_VALUE = 17;				// константа
var section = 'JS';					// переменная
let arr = ['HTML','CSS','JS'];	// переменная
*/

/*
ОПЕРАТОРЫ
В JavaScript имеется очень много различных операторов.
Они обозначают операцию, которую нужно произвести.
*/
/*
//Примеры операторов
//* / + - = и т.д.
console.log('Учим' + ' JS');
*/

/*
ВЫРАЖЕНИЯ
Выражение (expression) - это комбинация значений,
переменных и операторов, которые либо присваивают
переменной значение, либо возвращают какое-то
значение без его присваивания.
*/

/*
//Примеры выражения
let num = 4; //выражение присвоения
console.log(num);
'Учим' + 'JS'; //выражение без присвоения
*/

/*
КЛЮЧЕВЫЕ СЛОВА
Инструкции JavaScript часто начинаются с ключевого слова
(keyword). Оно (ключевое слово) предназначено для того, чтобы
определить какое действие JavaScript необходимо выполнить.
*/
/*
//Примеры ключевого слова
let num = 'Учим JS'; //указывает браузеру создать переменную
console.log(num);
*/

/*
БЛОК ИНСТРУКЦИЙ
JavaScript инструкции можно сгруппировать с помощью так
называемого блока, по сути фигурных скобок {...}.
Как правило, используется в функциях, циклах и так далее..
*/
/*
//Примеры блока инструкций
function name() {
	console.log('Учим');
	console.log('JS');
}
name();
*/

/*
КОММЕНТАРИИ
Не все инструкции JavaScript являются выполняемыми.
Код после двойных косых черт // или
между /* и * / рассматривается как комментарий.
*/

// Это комментарий
/*
	Это многострочный
	комментарий
*/

/*
ЧУВСТВИТЕЛЬНОСТЬ К РЕГИСТРУ
JavaScript является регистрозависимым языком.
Это значит, что ключевые слова, переменные,
имена функций и другие идентификаторы языка
должны содержать одинаковые наборы прописных и строчных букв.
*/
//Пример
//console.log('Учим JS'); //Без ошибок
//conSole.log('Учим JS'); //Ошибка

/*
ПРОБЕЛЫ
Рекомендуется добавлять пробелы в инструкции,
чтобы сделать код более читаемым.
JavaScript игнорирует несколько пробелов.
*/
/*
//Следующие строки эквивалентны:
let str = 'Текст';
let str='Текст';
*/
/*
	Как правило пробелы принято
	размещать вокруг операторов: =, +, -, * и /.
*/

/*
ДЛИННА СТРОКИ
Для лучшей читаемости кода рекомендуется избегать строк
с длиной более 80 символов. Если JavaScript инструкция имеет
большую длину, то её желательно разорвать.
В большинстве случае разрыв инструкции лучше осуществить
после какого-нибудь оператора.
*/
/*
//Пример
document.getElementById('text').innerHTML =
	'Текст для некого поля';
*/

/*
КАВЫЧКИ
В JavaScript могут использоваться одинарные,
двойные либо обратные кавычки, подробнее о них поговорим
в выпуске про строки. На данный момент нужно помнить,
что открытая кавычка без закрытой вызовет ошибку и наоборот.
*/

/*
//Пример
console.log('Учим JS'); // Одинарные
console.log("Учим JS"); // Двойные
console.log(`Учим JS`); // Обратные
*/

/*
Строгий режим "use strict";

console.log('Учим JS');

//"use strict" ниже игнорируется -
//он должен быть в первой строке

"use strict";

// строгий режим НЕ активирован
*/


//ДОМАШКА
/*
1) Придумай имя переменной для хранения цвета
	глаз пользователя сайта
2) Объяви две переменных - user и userName.
	Присвой значение "Вася" переменной userName.
	Скопируй значение переменной userName в переменную user.
	Выведи в консоль переменную user. Результат должен быть Вася
3) Напиши в комментариях какой вариант
	либо варианты записаны НЕ верно?
*/
/*
//Вариант №1
let user = 'Вася' let age = 36

//Вариант №2
let myage = 36;

//Вариант №3
const BLOCK_SIZE = 14 + 50;

//Вариант №4
const BLOCK_HEIGHT = 100;

//Вариант №5
if (true) {
	var size = 15;
}
console.log(size);
*/

//============================================

//ОБЪЯВЛЕНИЕ ПЕРЕМЕННОЙ

//Ключевое слово let для
//объявления переменной

//Имя переменной может содержать 
//только буквы, лучше латинского 
//алфавита, цифры и символы 
//$ и _.При этом первый символ 
//не должен быть цифрой. 

/*
//Верное объявление
let age;
let info123;
let $size;
let _color;

//Неверное объявление
let 123info;
let my-age;
*/

//---------------------------

//Названия переменных
/*
//Вместо
let s;
let sdkljghfasdfkgl;
let leftsidebarsize;

//Лучше писать
let size;
let age;
let leftSidebarSize;

//Регистр имеет значение!
let sidebarsize;
let sidebarSize;
*/

//-------------------------------------------

/*
//Использование других символов

let яПеременная;
let 我;
*/

//-------------------------------------------

/*
//Нельзя использовать зарезервированные имена

let let;
let break;
let for;

*/

//-------------------------------------------


//ПРИСВОЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
/*
//Объявление без значения
let myLifeStyle;

//Присвоение значения
myLifeStyle = 'freelance';


//Объявление переменной и присвоение значения
let myLifeStyle = 'freelance';

console.log(myLifeStyle);
*/

//-------------------------------------------

//ОБЪЯВЛЕНИЕ НЕСКОЛЬКИХ ПЕРЕМЕННЫХ
/*
//В строку через запятую
let myName = 'Фрилансер по жизни', myAge = 36, myMessage = 'Живи, а работай в свободное время!';

//Через запятую с новой строки
let myName = 'Фрилансер по жизни',
	myAge = 36,
	myMessage = 'Живи, а работай в свободное время!';

//Отдельно
let myName = 'Фрилансер по жизни';
let myAge = 36;
let myMessage = 'Живи, а работай в свободное время!';
*/

//-------------------------------------------

//ИЗМЕНЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
/*
let myAge = 36;
myAge = 18;
console.log(myAge);
*/

//-------------------------------------------

//ПЕРЕДАЧА ЗНАЧЕНИЙ ПЕРЕМЕННЫХ
/*
let myAge = 36;
let myNewAge = 18;

//Копируем значение переменной myNewAge
//в переменную myAge

myAge = myNewAge;
console.log(myAge);
*/

//-------------------------------------------

//USE STRICT И ПЕРЕМЕННЫЕ

/*
// "use strict" строгий режим отключен

myAge = 36;
console.log(myAge);
*/

/*
"use strict" //строгий режим включен

let myAge = 36;
console.log(myAge);
*/

//-------------------------------------------

//ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ

/*
//Пример блока инструкций
function testBlock() {
	console.log('Учим');
	console.log('JS');
}
testBlock();

*/

/*
//Видимость переменной только внутри блока инструкций
function testBlock() {
	let myAge = 36;
	console.log(myAge);
}
testBlock();

console.log(myAge); //Переменная не видна за пределами блока
*/

/*
//Переменные внутри и за пределами блока
let myAge = 36;

function testBlock() {
	let myAge = 18;
	console.log(myAge); //Вывод переменной
}
testBlock();

console.log(myAge); //Вывод переменной
*/


/*
//В рамках одного блока, переменную стоит использовать
//только после её объявления.

//Ошибка, мы не можем использовать
//переменную перед объявлением
console.log(myAge);
let myAge = 18;
*/

/*
//Повторное объявление переменной
//в рамках одного блока запрещено
//let myAge = 36;
//let myAge = 15; //Ошибка - переменная уже объявлена

//В то же время внутри блока (например цикла) проблем нет
for (let i = 0; i < 3; i++) {
	//Тут своя переменная i
	console.log(i);

}
for (let i = 0; i < 3; i++) {
	//И тут своя переменная i
	console.log(i);
}
*/

//-------------------------------------------

//КОНСТАНТЫ

/*
const myAge = 36;
myAge = 18; //Нельзя изменить константу

*/

/*
//Имена констант с заранее известными значениями
const BLOCK_SIZE = 25;
const COLOR_RED = "#F00";

//Имя константы со значением присвоенным
//в процессе выполнения программы
const summSizes = 25 + 30;
*/

/*
//Смена значений в константе
//Объект с данными
const userProfile = {
	name: 'Фрилансер',
	age: 36,
	message: 'Живи, а работай в свободное время!'
}
console.log(userProfile);

//Далее я меняю значение одного из полей объекта
userProfile.age = 18;
//Ошибки нет, данные изменились
console.log(userProfile);

*/

//-------------------------------------------

//КЛЮЧЕВОЕ СЛОВО VAR

//Области видимости

/*
//Использование переменной до её объявления

"use strict"

age = 35;
console.log(age);

var age;

*/


/*
function testBlockLet() {
	let myAgeLet = 36;
}
testBlockLet();

//Переменная НЕ видна за пределами блока
//console.log(myAgeLet);

function testBlockVar() {
	var myAgeVar = 36;
}
testBlockVar();

//Переменная НЕ видна за пределами блока
console.log(myAgeVar);
*/

/*
if (true) {
	let sizeLet = 50;
}
//Переменная НЕ видна за пределами блока
//console.log(sizeLet);

if (true) {
	var sizeVar = 50;
}
//Переменная ВИДНА за пределами блока
console.log(sizeVar);
*/

//-------------------------------------------

//Стоит ли каждый раз создавать новую переменную или,
//все таки, переназначать объявленную ранее?


/*
let userName = 'Фрилансер по жизни';

// ... некий код c использованием userName ...

userName = 36;

// ... некий код c использованием userName ...

userName = 'Живи, а работай в свободное время!';

// ... некий код c использованием userName ...

// ????????????

*/

/*
let userName = 'Фрилансер по жизни';
let userAge = 36;
let userMassage = 'Живи, а работай в свободное время!';

// ... некий код c использованием
// userName, userAge, userMassage ...

*/


//-------------------------------------------


//============================================

//ДОМАШКА
/*
1. Изучить теорию
2. Какой или какие из вариантов не верны:
*/

//Вариант №1
let userAge = 36;
let userInfo = "Фрилансер ${userAge}";

//Вариант №2
let userHeight = 145 / 0;
//Вернется значение NaN
console.log(userHeight);

//Вариант №3
let userName;
//Вернется тип данных Null
console.log(typeof userName);

//Вариант №4
let userSize = "45" / "8";
//Вернется тип данных Number
console.log(typeof userSize);




//============================================
//============================================


// Динамическая типизация
/*
JavaScript является динамически типизированным.
То есть тип данных переменной меняется динамически
в момент присвоения либо смены её значения.
 А не в момент объявления.
*/
/*
let userName; // Объявляем переменную

console.log(typeof userName);

userName = "Фрилансер по жизни"; //Строка (String)

console.log(typeof userName);

userName = 58; // Число (Number)

console.log(typeof userName);
*/

//============================================


// Undefined – неопределенный тип */
/*
let userName; //Объявляем переменную
// Получаем тип данных
console.log(typeof userName);
// Получаем значение переменной
console.log(userName);

// Примеры использования
// Проверяем определена ли переменная

if (userName === undefined) {
	console.log('Переменная НЕ определена');
} else {
	console.log('Переменная определена');
}
// либо с помощью оператора typeof

if (typeof userName === 'undefined') {
	console.log('Переменная НЕ определена');
} else {
	console.log('Переменная определена');
}
*/
//============================================

// Null
/*
Null, также как и Undefined,
содержит только одно значение null
*/
/*
// Пример
let userName = null;
console.log(userName);
*/
/*
// Пример
// Попытка обратиться в объекту которого нет
let block = document.querySelector('.block');

// Получаем null
console.log(block);

// Вернет тип object
console.log(typeof block);
*/
//============================================

// Boolean
/*
Boolean – это Булевый или логический тип.
Может принимать только два значения:
true (истина) и false (ложь).
*/
/*
// Пример
let willYouMarryMe = false;
if (willYouMarryMe) {
	console.log(':)');
} else {
	console.log(':(');
}
*/
/*
//Так же можно использовать
//с операторами сравнения
let trueOrFalse = 58 > 18;
console.log(trueOrFalse);
*/
//============================================


//Number(Число)
/*
Числовой тип данных представляет значения
как в виде целых чисел,
так и в виде чисел с плавающей точкой.
*/
/*
let userAge = 20;
let userHeight = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeight);
console.log(typeof userHeight);
*/


// Infinity 
/*
let getInfinity = 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);
*/
/*
// -Infinity
let getInfinity = -58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);
*/
/*
// NaN
let getNan = 'Фрилансер' / 10;
console.log(getNan);
console.log(typeof getNan);

Если где - то в математическом выражении
есть NaN, то результатом вычислений
с его участием будет NaN.
*/

//============================================

//BigInt

/*
В JavaScript тип данных «number» не может
содержать числа больше, чем 9007199254740991,
или меньше, чем -9007199254740991.
*/

/*
//BigInt
const bigInteger = 12345678901234567890123456789n;
console.log(typeof bigInteger);
*/

//============================================

//String 
/*
let userName = "Фрилансер по жизни";
console.log(typeof userName);

let userNameV2 = 'Фрилансер по жизни';
console.log(typeof userNameV2);
let userNameV3 = `Фрилансер по жизни`;
console.log(typeof userNameV3);


let userAge = 36;
let userAgeInfo = `Возраст: ${userAge}`;
console.log(userAgeInfo);
*/

//============================================

/*
//Object

let userInfo = {
	name: "Фрилансер по жизни",
	age: 36
}
console.log(userInfo);
console.log(typeof userInfo);
*/
//============================================


/*
//Symbol
let id = Symbol("id");
console.log(typeof id);
*/

//============================================
/*

//Function

let funcVariable = function name(params) {
	// код функции
}
console.log(typeof funcVariable);

*/
//============================================
//Преобразование типов

//Строковое преобразование
/*
let userAge = 58;
console.log(userAge);
console.log(typeof userAge);

userAge = String(userAge);

console.log(userAge);
console.log(typeof userAge);
*/
/*
let userTrue = true;
console.log(userTrue);
console.log(typeof userTrue);

userTrue = String(userTrue);

console.log(userTrue);
console.log(typeof userTrue);
*/


//Численное преобразование
/*
let userAge = "58";
console.log(userAge);
console.log(typeof userAge);

userAge = Number(userAge);

console.log(userAge);
console.log(typeof userAge);
*/
/*
let userAge = "Фрилансер";

userAge = Number(userAge);

console.log(userAge);
console.log(typeof userAge);
*/
/*
let userAge = "72" / "2";
console.log(userAge);
console.log(typeof userAge);
*/

/*
//Логическое преобразование
let userAge = "";
console.log(userAge);
console.log(typeof userAge);

userAge = Boolean(userAge);

console.log(userAge);
console.log(typeof userAge);
*/

//Термины: «унарный», «бинарный», «операнд»

/*
Операнд – это то к чему применяется оператор,
их еще называют аргументами.

/*
//Примеры:
let userAge = 30 - 6; //Числа 30 и 6 - это операнды
//либо
let userHeight = h - y; //Переменные h и y - это операнды

/*
Бинарными называются операторы
которые применяются к двум операндам.
В нашем примере вычитание -, это бинарный оператор.
*/
//let userAge = 30 - 6;
/*
Унарным считается оператор, который
применен только к одном операнду, например:
*/
//let userCash = -800;

//============================================

/*
//Математика
let x;
//Сложение +
x = 5 + 8;
console.log(`Результат сложения: ${x}`);

//Вычитание -
x = 9 - 5;
console.log(`Результат вычитания: ${x}`);

//Умножение *
x = 2 * 3;
console.log(`Результат умножения: ${x}`);

//Деление /
x = 10 / 2;
console.log(`Результат деления: ${x}`);

//Взятие остатка от деления %
x = 11 % 3;
console.log(`Результат взятия остатка от деления: ${x}`);
//Проверка: 11=3*3(неполное частное от деления)+2(остаток)

//Возведение в степень **.
x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);
//Число 5 умноженное на себя 3 раза. 5*5*5 = 125
*/

//============================================

/*
//Специальные возможности операторов

//Применение оператора сложения к строкам
let resultOne = "Фрилансер" + " " + "по" + " " + "жизни";
console.log(resultOne);

//Если в выражении есть строка, то есть если хотя бы
//один операнд будет строкой, то конечный результат
//тоже будет строкой
let resultTwo = "Фрилансер " + 58;
console.log(resultTwo);
console.log(typeof resultTwo);

//Порядок значения не имеет
let resultThree = 58 + " Фрилансер";
console.log(resultThree);

//Казусы
let resultFour = 2 + "2";
console.log(resultFour);

//Операции до сложения со строкой
//выполняются как обычно
let resultFive = 58 - 20 + " Фрилансер";
console.log(resultFive);
*/

//=========

/*
//Работа других операторов
let resultOne = "25" - 5;
console.log(resultOne);
console.log(typeof resultOne);

//или

let resultTwo = 10 * "80";
console.log(resultTwo);
console.log(typeof resultOne);

//Недопустимая операция
let resultThree = 3 * "Фрилансер";
console.log(resultThree); //Вернет NaN
console.log(typeof resultOne);

*/
//=======
//Унарный оператор сложения +
/*
//Со строками
let resultOne = +"25";
console.log(resultOne);
console.log(typeof resultOne);

//С числами
let resultTwo = +10;
console.log(resultTwo);
console.log(typeof resultTwo);
*/

/*
//Пример
let users = "25";
let admins = "10";
console.log(users + admins);

console.log(+users + +admins);

//Более длинная запись
console.log(Number(users) + Number(admins));

*/

//============================================

/*
//Приоритет операторов

//Разный приоритет
let resultOne = 2 - 1 * 5;
console.log(resultOne);

//Скобки
let resultTwo = (2 - 1) * 5;
console.log(resultTwo);

//Одинаковый приоритет
let resultThree = 2 - 1 + 5;
console.log(resultThree);
*/

//============================================
//Оператор присваивания
/*
let a = 1 + 2;
let b = 2;

let result = 8 - (a = b + 3);
console.log("Результат в скобках: " + a);
console.log("Общий результат: " + result);
*/
//=====

//Присваивание по цепочке
/*
let resultOne = resultTwo = resultThree = 1 + 2;
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);


//Более понятная запись
let resultOne = 1 + 2;

resultTwo = resultOne;
resultThree = resultOne;

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);

*/

//=====


//Сокращённая запись вычислений с присваиванием

/*
let users = 5;
users = users + 3;
users = users * 2;

//Можно записать так:

let users = 5;
console.log(users);
users += 3;
console.log(users);
users *= 2;
console.log(users);


let users = 5;
console.log(users);
users += 1 + 2;
console.log(users);
*/

//============================================

/*
//Инкремент ++
let addUser = 2;
addUser++;
console.log(addUser);


//Работает так же как и
addUser = addUser + 1;
//или
addUser += 1;


//Декремент --
let removeUser = 2;
removeUser--;
console.log(removeUser);

*/
//==============

/*
Инкремент / декремент можно применить только к переменной.
Попытка использовать его на значении, типа 5++, приведёт к ошибке.

console.log(5++);
*/

//==============

/*
Операторы++ и-- могут быть расположены
не только после, но и до переменной.
*/


/*
//Постфиксная форма
usersCounter++;
usersCounter--;

//Префиксная форма
++usersCounter;
--usersCounter;

*/

//Примеры:
/*
//Постфиксная форма
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);

//Префиксная форма
let usersCounter = 0;
let newUsers = ++usersCounter;
console.log(newUsers);
*/


/*
Итого, если результат оператора не используется, а нужно только
увеличить / уменьшить переменную, тогда без разницы,
какую форму использовать:

let usersCounter = 0;
++usersCounter;
console.log(usersCounter);
*/

/*
Если хочется тут же использовать
результат, то нужна префиксная форма:

let usersCounter = 0;
console.log(++usersCounter);
*/


/*
Если нужно увеличить и при этом
получить значение переменной
до увеличения – нужна постфиксная форма:

let usersCounter = 0;
console.log(usersCounter++);
console.log(usersCounter);
*/

//=========

//Инкремент/декремент
/*
инкремент / декремент можно
использовать в любых выражениях.
При этом их приоритет будет выше,
чем у большинства других арифметических операций:
*/
/*
let usersCounter = 0;
let newUsers = 2 * ++usersCounter;
console.log(newUsers);


//Отдельная запись более читабельна:
let usersCounter = 0;
++usersCounter;
let newUsers = 2 * usersCounter;
console.log(newUsers);

*/
//============================================

//Оператор запятая

/*
Предоставляет нам возможность вычислять несколько выражений,
разделяя их запятой ,. Каждое выражение выполняется,
но возвращается результат только последнего.


let usersCounter = (8 + 2, 19 + 1);
console.log(usersCounter);
*/

//============================================

//Побитовые операторы

/*
AND(и) ( & )
OR(или) ( | )
XOR(побитовое исключающее или) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(левый сдвиг) ( << )
RIGHT SHIFT(правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )
*/
//=====================================================

/*
Больше: a > b
Меньше: a < b
Больше или равно: a >= b
Меньше или равно: a <= b
Равно: a == b
Не равно: a != b
Строгое равно: a === b
Строгое не равно: a !== b
*/

/*
Обрати внимание, для сравнения и строгого сравнения
используются двойной или тройной знак равенства ==.
Один знак равенства a = b означал бы присваивание.
*/


//=========

/*
Операторы сравнения возвращают логический
тип данных со значением true или false:
*/
/*
console.log(2 > 1);
console.log(4 < 2);
console.log(58 == 36);
console.log(8 != 9);

//Присваиваем результат переменной

let result = 11 > 10;
console.log(result);

*/


//=============

//Сравнение строк
/*
//Алфавитный порядок
console.log('Б' > 'А');

//Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

//Кол-во символов
console.log('Слайдер' > 'Слайд');

//Регистр
console.log('Фрилансер' > 'фрилансер');


Алгоритм сравнения двух строк довольно прост:
1.	Сначала сравниваются первые символы строк.
2.	Если первый символ первой строки больше(меньше),
	чем первый символ второй, то первая строка
	больше(меньше) второй.Сравнение завершено.
3.	Если первые символы равны, то таким же образом
	сравниваются уже вторые символы строк.
4.	Сравнение продолжается, пока не закончится одна из строк.
5.	Если обе строки заканчиваются одновременно,
	то они равны.Иначе, большей считается более длинная строка.
*/

//=============

/*
//Преобразование в число
console.log('58' > 10);
console.log('007' == 7);

//Логическое значение true
//становится 1, а false – 0.
console.log(true == 1);
console.log(false == 0);
*/
//=============

//Сравнение разных типов
/*
//Интересные ситуация
let itemA = 0;
let itemB = "0";

console.log(Boolean(itemA));
console.log(Boolean(itemB));

console.log(itemA == itemB);

//Ноль равен false
console.log(0 == false);

*/
//=============

//Строгое сравнение

/*
оператор строгого равенства или не равенства
проверяет равенство без приведения типов.
*/
/*
console.log(0 === false);
console.log('007' === 7);
console.log('58' !== 58);
*/

//==============

/*
//Строгое равенство
console.log(null === undefined);

//Не строгое равенство
console.log(null == undefined);
*/

//Операторы сравнения

//Сравнение с null и undefined

/*
//Сравнение null и 0
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
*/
/*
//Сравнение undefined и 0
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

Что бы избежать проблем при сравнении нужно очень
осторожно к любому сравнению с undefined / null,
кроме случаев строгого равенства ===.
Не использовать сравнения >= > < <= с переменными,
которые могут принимать значения null / undefined,
разве что ты точно знаешь что делаешь.В любом случае,
если переменная может принимать эти значения,
то стоит добавить для них отдельные проверки.
*/

//============================================
//Логические операторы

//Существуют три логических оператора:
/*
ИЛИ: ||
И: &&
НЕ: !
*/

/*
//Оператор || (ИЛИ)

Оператор ИЛИ, записывается как две вертикальные черты.
Процесс его работы следующий:
1.	Вычисляет операнды слева направо.
2.	Каждый операнд конвертирует в логическое значение.
	Если результат true, останавливается и возвращает
	исходное значение этого операнда.
3.	Если все операнды являются ложными(false), возвращает
	значение последнего из них.
*/

/*
//Булевые значения
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);
*/
//------

/*
//Разные типы

//Первый true это 1
console.log(1 || 0);
//Первый true это true
console.log(true || 'фрилансер');
//Первый true это 58
console.log(null || 58);
//Первый true это фрилансер
console.log(null || 'фрилансер' || 0);
//true нет совсем, вернет последнее значение - 0
console.log(undefined || '' || null || 0);

*/

//------
/*
//Присвоение значения в переменную

let userName = '';
let userNickName = '';

let user = userName || userNickName || "Без имени";
console.log(user);
*/

//------

/*
//Cокращённое вычисление. Условие.
let admins = 10;
let users = 5;
admins > users || users++;
console.log(users);
*/

//====================
/*
Сдледующий логический оператор это И. Пишется как два
амперсанда && выполняет следующие действия:
1.	Вычисляет операнды слева направо.
2.	Каждый операнд преобразует в логическое значение.
	Если результат false, останавливается и возвращает исходное
	значение этого операнда.
3.	Если все операнды были истинными, возвращает значение
	последнего.
*/
/*
//Булевые значения
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
*/

//----

/*
//Разные типы

//Пример 1. 0 - false
console.log('Фрилансер' && 0 && 2 && 3);
//Пример 2. null - false
console.log(1 && 2 && null && 3);
//Пример 3. Все true
console.log('15' && '42');
*/


/*
//Подобие условия
let users = 0;
(users > 0) && console.log(`Пользователей ${users}`);
*/

//============================
//Оператор ! (НЕ)

//Оператор ! (НЕ)
/*
Выполняет следующие действия:
1. Сначала приводит аргумент к логическому типу true / false.
2. Затем возвращает противоположное значение.
*/

/*
//Булевые значения
console.log(!true);


//Разные типы
console.log(!null);
console.log(!1);
console.log(!'');
console.log(!'фрилансер');

*/

/*
Приоритет НЕ ! является наивысшим из всех логических операторов,
поэтому он всегда выполняется первым, перед && или ||.
*/
//console.log(!true && 58 || 18 && !1);

/*
//Используется для преобразования типа в boolean
console.log(!!'фрилансер');
//или
console.log(Boolean('фрилансер'));

*/
//============================================
//Оператор объединения с null (??)

/*
Оператор ?? возвращает первый аргумент,
если он не null / undefined, иначе второй.
*/
/*
let name = 'Фрилансер';
console.log(name ?? "Без имени");
*/


//============================================
//============================================

//ДОМАШКА
/*
1. Изучить теорию
2. Какой или какие из вариантов не верны:
*/
/*
//Вариант №1
console.log('35' + - "22");
//Вернет 13

//Вариант №2
console.log('35' * "22");
//Вернет 770

//Вариант №3
console.log('558' > 22++);
//Вернет true

//Вариант №4
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
//Вернет 1

//Вариант №5
console.log(!false && 11 || 18 && !'');
//Вернет 18

//Вариант №6
let name = 0;
console.log(name ?? "Без имени")
*/


//ДОМАШКА
/*
1. Изучить теорию
2. Какой или какие из вариантов не верны:
*/
/*
//Вариант №1
if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//Вариант №2
if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//Вариант №3
let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);

//Вариант №4
if (0) {
	console.log('Ложь!');
} else if (" ") {
	console.log('Истина!');
}
*/
//========================================================================================================================================================
//========================================================================================================================================================
/*
if (2 > 5) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/
/*
let first = 5;
let second = 5;

if (first === second) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/

/*
//Более сложное условие
if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/

/*
//Преобразование типов
if ("") {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/

/*
//Более короткая запись
//Код выполняется только если
//выражение в скобках вернет true
if (2 > 1) console.log(message);
*/

/*
if (58 / 2 > 80) {
	console.log(message);
} else {
	console.log('Условие не выполнено :(');
}
*/
/*
if (number > 10) {
	console.log(message);
} else {
	console.log('Условие не выполнено :(');
}*/

/*
if (number > 50) {
	console.log('5 больше 50');
} else if (number > 30) {
	console.log('5 больше 30');
} else if (number > 10) {
	console.log('5 больше 10');
} else if (number > 1) {
	console.log('5 больше 1');
} else {
	console.log('Условие не выполнено :(');
}
*/
/*
//Условный оператор "?"

let message = "Привет";

let messageEnd;
if (5 > 1) {
	messageEnd = ", Вася!";
} else {
	messageEnd = ", Оля!";
}

let messageEnd = 5 > 10 ? ", Вася!" : ", Оля!";

message += messageEnd;
console.log(message);

let message = 5 > 10 ? "Привет, Вася!" : "Привет, Оля!";
console.log(message);
*/


// Цикл WHILE
/*
// Синтаксис
while (Условие) {
	// Тело цикла
	// Тут будет выполняться код
}
*/
//------

/*
// Пример
let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}
//------

*/

/*
// Пример
let num = 5;
while (num) {
	console.log(num);
	num--;
}
*/
//------

/*
// Пример без {}
let num = 5;
while (num) console.log(num--);
//------
*/

/*
// Конструкция DO...WHILE
let num = 0;
do {
	console.log(num);
	num++;
} while (num < 0);

//=====================
*/

/*
// Цикл FOR
// Синтаксис
for (Начало; Условие; Шаг) {
	// Тело цикла
	// Тут будет выполняться код
}
//------
*/

/*
// Пример
for (let num = 0; num < 5; num++) {
	console.log(num);
}
*/
/*
Работа цикла for:
1) Выполняется начало - let num = 0
2) Выполняется условие - num < 5
3) Если условие true выполняется
	тело цикла - console.log(num)
4) Выполняется шаг - num++
Повтор начиная с пункта №2
*/
//------

/*
// «встроенное» объявление переменной
for (let num = 0; num < 5; num++) {
	console.log(num);
}
console.log(num);
//------
*/

/*
// Существующая переменная
let num;
for (num = 0; num < 5; num++) {
	console.log(num);
}
console.log(`Вывод вне цикла: ${num}`);

*/


/*

// Можно убрать любую часть цикла
let num = 0;
for (; num < 5; num++) {
	console.log(num);
}
//---
*/
/*
let num = 0;
for (; num < 5;) {
	num++;
	console.log(num);
}
*/
//---
/*
// Бесконечный цикл
let num = 0;
for (;;) {
	num++;
	console.log(num);
}
*/
//---

/*
// Директива break
let num = 0;
for (; num < 5; num++) {
	console.log(num);
	if (num == 2) break;
}
console.log(`Работа окончена, num = ${num}`);
//---
*/

/*
let num = 0;
for (; num < 5; num++) {
	if (num == 2) continue;
	console.log(num);
}
//---
*/

// Директива break/continue и "?"
/*
let num = 0;
for (; num < 5; num++) {
	(num != 2) ? console.log(num) : continue;
}
//---
*/

/*
firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 2) {
			continue firstFor;
		}
		console.log(size);
	}
}
*/


// Итоги и домашка
/*
1.	while – Проверяет условие перед каждой итерацией.
2.	do..while – Проверяет условие после каждой итерации.
3.	for (;;) – Проверяет условие перед каждой итерацией,
	есть возможность задать дополнительные настройки.

Чтобы организовать бесконечный цикл, используют
конструкцию while (true).
При этом он, как и любой другой цикл, может быть
прерван директивой break.

Если на данной итерации цикла делать больше
ничего не надо, но полностью прекращать цикл не
следует – используют директиву continue.

Обе этих директивы поддерживают метки, которые ставятся
перед циклом. Метки – единственный способ для break/continue
выйти за пределы текущего цикла, повлиять на выполнение внешнего.
Помним, что метки не позволяют прыгнуть в произвольное место кода,
в JavaScript нет такой возможности.

Конечно же в JavaScript существуют и другие методы перебора.
Например, перебор объектов или массивов. О них мы поговорим
в отдельных уроках, а пока домашка.
*/

//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
//Задача №1
//Вывести в консоль числа от 1 до 5

//Задача №2
let num = 8;
while (num) {
	//Последний результат 0, верно?
	console.log(num);
	num--;
}
//Задача №3. Переписать на while
for (let num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
}
//Задача №4. Прекратить работу цикла №1 когда size равна 1
//Цикл №1
for (let num = 0; num < 2; num++) {
	//Цикл №2
	for (let size = 0; size < 3; size++) {
		console.log(size);
	}
}*/
//========================================================================================================================================================
//========================================================================================================================================================


//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:


// Задача №1
// Кто попадет в консоль первым Вася или Коля?
function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');

// Задача №2
// Верно ли вызвана функция
showMessage();
function showMessage() {
	console.log('Сообщение');
}
// Задача №3
// Верно ли вызвана функция
showMessage();
let showMessage = function () {
	console.log('Сообщение');
}
// Задача №4
// Как решить проблему?
'use strict'
if (2 > 1) {
	function showMessage() {
		console.log('Сообщение');
	}
}
showMessage(); // Error (showMessage is not defined)

*/

//========================================================================================================================================================
//========================================================================================================================================================
//Объявление функции (Function Declaration)
/*
function имя(параметры) {
	// тело (код) функции
}*/
//===========================================================

//Имя функции и её предназначение
/*
Как правило, в имени используются опеределенные префиксы,
обозначающие действие, после которых следует объект действия.

Например, функции, начинающиеся с
"show..." обычно что-то показывают,
"get..." – возвращают значение,
"calc..." – что-то вычисляют,
"create..." – что-то создают,
"check..." – что-то проверяют и возвращают логическое
значение, и т.д.

Примеры:
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
и т.д.
*/

// Функция вывода сообщения
/*
function showMessage() {
	console.log('Сообщение');
}
*/

/*
Функция должна делать только то,
что явно подразумевается её названием.
И это должно быть одним действием.
Два независимых действия обычно подразумевают две функции,
даже если предполагается, что они будут вызываться вместе (в этом случае мы
можем создать третью функцию, которая будет их вызывать).
*/

//===========================================================
//Запуск функции
/*
showMessage();

// Функция вывода сообщения
function showMessage() {
	console.log('Сообщение!');
}
showMessage();
showMessage();
*/

//===========================================================

/*
function getSumm() {
	let numOne, numTwo;

	function getNumOne() {
		numOne = 1;
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(numSumm);
}
getNumOne();
getSumm();
*/
//-----
/*
// Вложенность и видимость функций
"use strict"
if (2 > 1) {
	function getSumm() {
		let numOne, numTwo;

		function getNumOne() {
			numOne = 1;
		}
		function getNumTwo() {
			numTwo = 2;
		}
		getNumOne();
		getNumTwo();

		let numSumm = numOne + numTwo;
		console.log(numSumm);
	}
}
getSumm();
*/
//===========================================================
//Локальные и внешние переменные
/*
function showMessage() {
	// Локальная переменная
	let message = "Сообщение";
	console.log(message);
}

console.log(message);
*/

//-----
/*
// Внешняя переменная
let message;

function showMessage() {
	// Используется внешняя переменная
	message = "Сообщение";
}
console.log(message);

showMessage();
*/

//-----

/*
// Внешняя переменная
let message = "Сообщение №1";

function showMessage() {
	// Локальная переменная
	let message = "Сообщение №2";
	console.log(message);
}
console.log(message);
showMessage();

*/
//------

/*
// Глобальные переменные
let globalVar = "Я глобальная переменная";

function getSumm() {
	let numOne, numTwo;

	function getNumOne() {
		numOne = 1;
		console.log(globalVar);
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(globalVar);
}
console.log(globalVar);

getSumm();
*/

//===========================================================
/*
// Параметры (аргументы)
function calcSumm(numOne = 1, numTwo = 2) {
	console.log(`Переменная numOne:${numOne}`);
	console.log(`Переменная numTwo:${numTwo}`);

	let numSumm = numOne + numTwo;

	console.log(`Сумма:${numSumm}`);
}

calcSumm(5, 5);
*/



//------
/*
numTwo = numTwo || 2;
*/

/*
// Функции-колбэки
function calcSumm(numOne, numTwo, more, less) {
	let numSumm = numOne + numTwo;

	if (numSumm > 3) {
		more();
	} else {
		less();
	}
}

function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSumm(1, 1, showMoreMessage, showLessMessage);
*/

//===========================================================

/*
// Возврат результата
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	// Возврат
	return numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(`Сумма: ${funcRezult}`);
*/

//------
/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	if (numSumm >= 3) {
		// Возврат
		return numSumm;
	} else {
		return 'Сумма меньше 3';
	}
	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(funcRezult);
*/

//------
/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	return
	numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(funcRezult);
*/
//------
/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	if (numSumm >= 3) {
		// Возврат
		return;
		// Дальше код не выполняется
	}
}
calcSumm(5, 5)
*/
//===========================================================
// Рекурсия
/*
function getSumm(numOne, numTwo) {
	let numSumm = calcSumm(numOne, numTwo);

	console.log(numSumm);
}
function calcSumm(numOne, numTwo) {
	return numOne + numTwo;

}
getSumm(5, 5);
*/

//------
/*
function calcSumm(numOne, numTwo) {
	let result = 1;
	// умножаем result на numOne numTwo раз в цикле
	for (let i = 0; i < numTwo; i++) {
		result *= numOne;
	}
	return result;
}
console.log(calcSumm(2, 3));
*/

//------
/*
function calcSumm(numOne, numTwo) {
	if (numTwo === 1) {
		return numOne;
	} else {
		return numOne * calcSumm(numOne, numTwo - 1);
	}
}
console.log(calcSumm(2, 3));
*/

//========================================================================================================================================================
/*
let showMessage = function () {
	console.log('Привет!');
};

showMessage();
*/
//-----
/*
function getSumm() {
	let summ = 1 + 2;
	console.log(summ);
};

let someVar = getSumm;

someVar();
getSumm();

*/
//-----
/*
//Объявление функции (Function Declaration)
function getSumm() {
	let summ = 1 + 2;
	console.log(summ);
};
getSumm();

// Функциональное выражение (Function Expression)
let showMessage = function () {
	console.log('Привет!');
};
showMessage();
*/

//-----
/*
'use strict'
if (2 > 1) {
	function getSumm() {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm();
*/
/*
let getSumm;

if (2 > 1) {
	getSumm = function () {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm();
*/
//===========================================================
//Функции стрелки(arrow functions)
/*
// Функциональное выражение (Function Expression)
let имя переменной = function (параметр, ...параметр) {
	return выражение;
};

// Cтрелочная функция (arrow function)
let имя переменной = (параметр, ...параметр) => выражение
*/
//-----

// Однострочная стрелочная функция
/*
let getMessage = (text, name) => text + ', ' + name + '!';
console.log(getMessage('Привет', 'Вася'));


// Многострочная стрелочная функция
let getMessage = (text, name) => {
	let message = text + ', ' + name + '!';
	return message;
};
console.log(getMessage('Привет', 'Вася'));
*/
//===========================================================
// Планирование setTimeout и setInterval
/*
Что бы реализовать планирование существуют два метода:
1.	setTimeout позволяет вызвать функцию один раз
	через определённый интервал времени
2.	setInterval позволяет вызывать функцию регулярно,
	повторяя вызов через определённый интервал времени.
*/
/*
setTimeout(функция или код, задержка, параметр, ...параметр);
setInterval(функция или код, задержка, параметр, ...параметр);
*/
/*
function showMessage(text, name) {
	console.log(`${text}, ${name}!`);
	setTimeout(showMessage, 500, text, name);
}
//setInterval(showMessage, 500, 'Привет', 'Вася');
setTimeout(showMessage, 500, 'Привет', 'Вася');
*/
//---
/*
let result = 0;
function showNumber(num) {
	result += num;
	console.log(result);
	if (result === 5) {
		clearInterval(timeId);
	}
}
let timeId = setInterval(showNumber, 1000, 1);
*/
//---
/*
setTimeout(function () {
	console.log('Привет!');
}, 1000);

setTimeout(() => {
	console.log('Привет!');
}, 1000);
*/

//----
/*
function showMessageOne() {
	console.log("А я первый!");
}
function showMessageTwo() {
	console.log("А я второй(");
}

setTimeout(showMessageTwo, 0);

showMessageOne();

*/
//===========================================================
/*
// Применение функций

// Функция соединения строк
function createMassage(text, name) {
	return `${text}, ${name}!`;
}
// Функция вывода в консоль
function showMassage(message) {
	console.log(message);
}
// Объединяющая функция, вызывает обе функции
function initMessage(text, name) {
	showMassage(createMassage(text, name));
}

initMessage('Привет', 'Фрилансер');

*/
//========================================================================================================================================================
//========================================================================================================================================================


//СИНТАКСИС
/*
// Создание объекта

let userInfo = new Object(); // синтаксис "конструктор объекта"
let userInfo = {};  // синтаксис "литерал объекта"
*/

//-----------------
// Свойства объектов. Ключ + значение

//У каждого свойства есть ключ
//(также называемый «имя» или «идентификатор»).
//После имени свойства следует двоеточие ":",
//и затем указывается значение свойства.
//Если в объекте несколько свойств,
//то они перечисляются через запятую.

/*
let userInfo = {
	name: "Вася", // Свойство объекта
	age: 30, // Последняя (висячая) запятая
};

console.log(userInfo);
console.log(userInfo.name);
*/
//---------------------------------------------
// Имена свойств
/*
// Имя из двух и больше слов
let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true,
};
console.log(userInfo.name);
console.log(userInfo['name']);
console.log(userInfo["likes javascript"]);

*/
//-----------------
// Вычисляемое либо передаваемое имя
/*
// Вычисляем имя
let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart + " javascript"]: true,
};
console.log(userInfo["likes javascript"]);
*/
//-----------------
/*
// Передаем имя
let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart]: true,
};
console.log(userInfo[firstPart]);

// Преимущество квадратных скобок
//let key = "name";
//console.log(userInfo[key]);
*/
//-----------------
/*
// Зарезервированные слова в именах
let userInfo = {
	let: "Вася",
	for: 30,
};
console.log(userInfo.let);
console.log(userInfo.for);
*/
//-----------------
/*
// Имена = строки либо символы

let userInfo = {
	0: "Вася", // 0 тоже самое что "0"
};
console.log(userInfo[0]);
console.log(userInfo["0"]);
*/
//-----------------

/*
// Тип данных Symbol

// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");
let userInfo = {
	name: "Вася",
	age: 30,
	[id]: "Некое значение"
};
console.log(userInfo);

// Основное применение символов:
// 1.«Скрытые» свойства объектов
//		Символьное свойство не появится в for..in
// 2. Использование системных символов
// 	Symbol.iterator, Symbol.toPrimitive и т.д.
*/
//---------------------------------------------
// Вложенность
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
console.log(userInfo);
console.log(userInfo.address);
console.log(userInfo.address.city);
*/

//---------------------------------------------
/*
// Свойство из переменной

function makeUserInfo(name, age) {
	return {
		name: name,
		age: age,
		// ...другие свойства
	};
}
let user = makeUserInfo("Вася", 30);
console.log(user);
*/
//------------------
/*
function makeUserInfo(name, age) {
	return {
		name, // Тоже самое что и  name: name,
		age,// Тоже самое что и  age: age,
		"likes javascript": true,
		// ...другие свойства
	};
}
let user = makeUserInfo("Вася", 30);
console.log(user);
*/
//---------------------------------------------
// Изменение объекта
/*
// Добавление свойства
let userInfo = {
	name: "Вася",
}

console.log(userInfo);

userInfo.age = 30;

console.log(userInfo);

userInfo['likes javascript'] = true;

console.log(userInfo);

userInfo.address = {
	city: "Uzhhorod",
	street: "Freedom",
};

console.log(userInfo);
*/
//------------------
/*
// Удаление свойства

let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true
}
console.log(userInfo);

delete userInfo.age;

console.log(userInfo);

delete userInfo["likes javascript"];

console.log(userInfo);

*/
//------------------
// Изменение свойства
/*
let userInfo = {
	name: "Вася",
	age: 30,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);
*/

//------------------
/*
// Изменение свойства даже в константе

const userInfo = {
	name: "Вася",
	age: 30,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);
*/

//---------------------------------------------

/*
// Копирование объектов

// При копировании объекта в другую переменную
// сам объект не дублируется, а копируется только ссылка на него

let userInfo = {
	name: "Вася",
	age: 30,
}

console.log(userInfo);

let user = userInfo;

console.log(user);

user.age = 18;

console.log(userInfo);
*/

//-------------------

// Дублирование объектов (Object.assign)

// Синтаксис
//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);
/*
let userInfo = {
	name: "Вася",
	age: 30,
}

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);
*/
//-------------------
/*
// Еще про Object.assign

let userInfo = {
	name: "Вася",
	age: 30,
}
Object.assign(userInfo, { ['likes javascript']: true, city: "Uzhhorod" });
console.log(userInfo);
*/

//---------------------------------------------
// Проверка существования свойства
/*
let userInfo = {
	name: "Вася",
	age: 30,
}
//console.log(userInfo.age);

if (userInfo.age) { // true или false
	console.log(userInfo.age);
}
*/
//--------------------
// Опциональная цепочка
/*
let userInfo = {
	name: "Вася",
	age: 30,
	//address: {
	//	city: "Uzhhorod",
	//	street: "Freedom",
	//}
}
//console.log(userInfo.address.street);
console.log(userInfo?.address?.street);

*/
//--------------------
// Оператор "in"
/*
let userInfo = {
	//name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
if ("name" in userInfo) {
	console.log(userInfo.name);
}
*/
//--------------------

//В большинстве случаев сработает сравнение с undefined.
//либо опциональная цепочка ?.
//Но есть особый случай, когда свойство существует, 
//но содержит значение undefined. 
//В этом случае необходимо использовать "in".

/*
let userInfo = {
	name: undefined,
	// ...следующие свойства
}
if (userInfo.name) { // false
	console.log(userInfo.name);
}
if ("name" in userInfo) { //true
	console.log(userInfo.name);
}
*/

//---------------------------------------------

// Цикл «for…in»
/*
// Для перебора всех свойств объекта используется цикл for..in.
// Этот цикл отличается от изученного ранее цикла for(;;).

for (let key in object) {
	// тело цикла выполняется для каждого свойства объекта
}
*/

//-----------

/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}

for (let key in userInfo) {
	// ключи
	console.log(key); // name, age, address
	// значения ключей
	console.log(userInfo[key]); // Вася, 30, Object {}
}

for (let key in userInfo.address) {
	// ключи
	console.log(key); // city, street
	// значения ключей
	console.log(userInfo.address[key]); // Uzhhorod, Freedom
}*/

//---------------------------------------------
// Методы объекта
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	//showInfo: function () {
	//	console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	//}
	showInfo() {
		console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	}
}
userInfo.showInfo();
*/

//----------------------
// Использование "this"
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		//console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
	}
}
userInfo.showInfo();
*/
//----------------------

/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		//function show() {
		//	console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		//}

		// У стрелочной функции нет своего "this" используются
		// значение из внешнего метода userInfo.showInfo()
		let show = () => console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		show();
	}
}
userInfo.showInfo();
*/
//----------------------
// Преимущество "this"
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		//console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	}
}
userInfo.showInfo();

let user = userInfo;
userInfo = null;
user.showInfo();
*/
//---------------------------------------------

// Функция-конструктор

/*
Обычный синтаксис создания объекта{... } позволяет создать
только один объект. Но зачастую нам нужно создать множество
однотипных объектов, таких как пользователи, элементы меню и т.д.
Это можно сделать при помощи функции - конструктора и оператора "new".
*/
/*
Функции - конструкторы являются обычными функциями.
Но есть два правила:
1. Имя функции - конструктора должно начинаться с большой буквы.
2. Функция - конструктор должна вызываться при помощи
	оператора "new".
*/
/*
function UserInfo(name) {

	// this = {}; Создается пустой объект (неявно)

	this.name = name;
	this.age = 30;

	// return this; Возвращается объект (неявно)
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));
*/

/*
Когда мы пишем наш код, используя объекты для представления сущностей реального мира,
– это называется объектно - ориентированное программирование или сокращённо: «ООП».

ООП является большой предметной областью и интересной наукой само по себе.
Как выбрать правильные сущности ? Как организовать взаимодействие между ними ?
Это – создание архитектуры, и есть хорошие книги по этой теме,
такие как «Приёмы объектно - ориентированного проектирования.
Паттерны проектирования» авторов Эрих Гамма, Ричард Хелм, Ральф Джонсон,
Джон Влиссидес или «Объектно - ориентированный анализ и проектирование с примерами приложений»
Гради Буча, а также ещё множество других книг.
*/

//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1 (верна ли запись)
const userInfo = {
	name: "Вася"
	age: 30
}

// Задача №2 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	"58": 'Значение свойства'
}
console.log(userInfo[58]);

// Задача №3 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30
}
let user = userInfo;
user.age = 45;

console.log(userInfo.age);

// Задача №4 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	showInfo() {
		console.log(`${this.name}`);
	}
}
let user = userInfo;
userInfo = null;
user.showInfo();

// Задача №5 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
}
for (const key in userInfo) {
	const value = userInfo[key];
	console.log(value);
}

// Задача №6 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod"
	}
}
for (const key in userInfo.address) {
	console.log(userInfo.address[key]);
}

// Задача №7 (верна ли запись)
const userInfo = {
	name: "Вася",
	age: 30,
	"likes js": true
}
console.log(userInfo."likes js");
*/
// Задача №8
/*
1.Создайте пустой объект userInfo.
2.Добавьте свойство name со значением Вася.
3.Добавьте свойство age со значением 30.
4.Измените значение свойства name на Лена.
5.Удалите свойство name из объекта.
*/


//========================================================================================================================================================
//========================================================================================================================================================

/*
Итак, простое число в JS можно записать следующим образом.
*/

/*
// Число
let someNum = 458;
console.log(someNum);

// Десятичные числа
let someNums = 4.58;
console.log(someNums);
*/

/*
let someBigNum = 1000000;
console.log(someBigNum);

let someBigNum = 1e6; // 1 * 1000000;
console.log(someBigNum);


let someLittleNum = 0.000001;
console.log(someLittleNum);

let someLittleNum = 1e-6; // 1 / 1000000;
console.log(someLittleNum);
*/
//=========================================================================

//Шестнадцатеричные, двоичные и восьмеричные числа

/*
Шестнадцатеричные числа широко используются в JavaScript
для представления цветов, кодировки символов и многого другого.
*/
/*
console.log(0xFF); // = 0xff = 255

// Реже используются двоичные и восьмеричные числа

console.log(0b11111111); // 255
console.log(0o377); // 255

// Метод toString(base)
// Метод num.toString(base) возвращает строковое
// представление числа в той или иной системе счисления (base).
// base может принимать значения от 2 до 36 (по умолчанию 10).

let num = 255;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));
*/

//=========================================================================
// Округление чисел

// В JavaScript встроен объект Math, который содержит 
// несколько функций для работы с округлением:
/*
// Math.floor - Округление в меньшую сторону

let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);

*/

/*
// Math.ceil - Округление в большую сторону

let numOne = Math.ceil(5.8);
let numTwo = Math.ceil(2.2);
let numThree = Math.ceil(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/

/*
// Math.round - Округление до ближайшего целого

let numOne = Math.round(5.8);
let numTwo = Math.round(2.2);
let numThree = Math.round(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/

/*
let numOne = Math.round(5.845);
console.log(numOne); // 6
*/

// Как нам получить 5.8 или 5.85 ?

/*
// Способ умножения и деления

let numOne = Math.round(5.845 * 10) / 10; // 58.45 -> 58 -> 5.8
console.log(numOne);


let numTwo = Math.round(5.845 * 100) / 100; // 584.5 -> 585 -> 5.85
console.log(numTwo);


let numThree = Math.round(5.8449 * 100) / 100; // 584.49 -> 584 -> 5.84
console.log(numThree);
*/

//=========================

/*
// Метод toFixed(n) - округляет число до n знаков после запятой
// и возвращает строковое представление результата.

let numOne = 5.845;
console.log(numOne.toFixed(1));

// Преобразовать в число
console.log(+numOne.toFixed(1));
console.log(Number(numOne.toFixed(1)));
*/

//=========================


// Проблема неточных вычислений
/*
let numOne = Math.round(1.005 * 100) / 100; // Ожидаем 1.01
console.log(numOne);

let numTwo = 12.35;
console.log(numTwo.toFixed(1)); // Ожидаем 12.4



let problem = 0.1 + 0.2 === 0.3;
console.log(problem);
console.log(0.1 + 0.2);
*/

// О том почему так происходит читай по ссылке в описании


/*
// Решение с помощью Number.EPSILON

let sourceNum = 1.005 + Number.EPSILON;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour);

console.log(sourceNum * 100);
console.log(Math.round(sourceNum * 100));

// Функцию которая корректирует округление
// десятичных дробей можно найти по ссылке описании
*/

//=========================================================================

//Проверка: isFinite и isNaN
/*
Напомню, что существуют специальные числовые значения
такие как Infinity - бесконечность и NaN - ошибка вычисления
Эти значения так же являются типом данных number
но не являются обычными числами.
Для проверки таких значения существуют специальные функции
*/

// Проверка isNaN
/*
console.log(Number(25 + "Привет!"));
console.log(isNaN(25 + "Привет!"));

if (25 + "Привет!" !== NaN) {
	console.log('Я не NaN');
}

console.log(NaN === NaN);
*/


// Проверка isFinite
/*
преобразует аргумент в число и возвращает true,
если оно является обычным числом
*/
/*
console.log(isFinite("25")); // "25" -> 25 -> true
console.log(isFinite("Привет!")); // NaN -> false
console.log(isFinite(10 / 0)); // Infinity -> false
*/
//=========================================================================
//parseInt и parseFloat
/*
Как мы уже знаем, преобразовать строку в число можно
с помощью унарного оператора сложения либо специальной функции Number.
*/
/*
let valueOne = +"150";
console.log(valueOne);
console.log(typeof valueOne);
*/
/*
Но, мы очень часто сталкиваемся со значениями
у которых есть единица измерения, например
*/
/*
let valueTwo = +"150px";
console.log(valueTwo);
console.log(typeof valueTwo);
*/
//=====================


/*
Для получения чисел из такой строки существуют parseInt и parseFloat.
Если в процессе чтения возникает ошибка, они возвращают полученное до
ошибки число.

Функция parseInt возвращает целое число, а parseFloat
возвращает число с плавающей точкой:
*/
/*
let valueOne = parseInt("150.58px");
console.log(valueOne);
console.log(typeof valueOne);


let valueTwo = parseFloat("150.58px");
console.log(valueTwo);
console.log(typeof valueTwo);
*/
/*
let valueTwo = parseFloat("a150.58px");
console.log(valueTwo);
console.log(typeof valueTwo);
*/

/*
Функция parseInt() имеет необязательный второй параметр.
Он определяет систему счисления, таким образом parseInt
может также читать строки с шестнадцатеричными числами,
двоичными числами и т.д.:
*/
/*
console.log(parseInt('0xff', 16));
console.log(parseInt('ff', 16));
*/


//=========================================================================
// Другие возможности

// Уже знакомый нам объект Math, одержит 
// различные математические функции и константы. 
// Вот некоторые из них:



//Math.random()
//Возвращает псевдослучайное число в 
//диапазоне от 0(включительно) до 1(но не включая 1)
/*
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
*/

/*
//Math.max(a, b, c...) / Math.min(a, b, c...)
//Возвращает наибольшее/наименьшее число из перечисленных аргументов.

console.log(Math.max(5, 85, -49));
console.log(Math.min(5, 85, -49));
*/

/*
//Math.abs()
//возвращает абсолютное значение (модуль) числа.

let num = -58;
console.log(Math.abs(num));
*/



/*
//Math.pow(n, power)
//Возвращает число n, возведённое в степень power

console.log(Math.pow(5, 8));
*/

// Больше функций Math смотри по ссылке в описании



//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1. Получить верное значение округления
let numOne = Math.round(1.005 * 100) / 100;
console.log(numOne); // Выведет 1 что не верно

// Задача №2. Получить число 135.58 из строки
let value = "135.58px";

// Задача №3. Посттроить верное условное ветвление
let value = 58 + "Фрилансер";
if (написать ответ) {
	console.log('Результат выражения NaN');
}

// Задача №4.
// Найти максимальное число из 10,58,39,-150,0

// Задача №5.
// Округлить число 58.858 до числа 58
*/



/*
Запись строк. Кавычки.
Строку можно создать с помощью одинарных,
двойных либо обратных кавычек:
*/
/*
let someStringOne = 'Привет! Я строка!'; // Одинарные
let someStringTwo = "Привет! Я строка!"; // Двойные
let someStringThree = `Привет! Я строка!`; // Обратные

console.log(someStringOne);
console.log(someStringTwo);
console.log(someStringThree);
*/

/*
Одинарные и двойные кавычки работают, по сути, одинаково,
а если использовать обратные кавычки, то в такую строку
мы сможем вставлять произвольные выражения, обернув их в ${…}:
*/
/*
let textHi = "Привет!";
let textAll = `${textHi} Я строка!`;

console.log(textAll);

function someSum(a, b) {
	return a + b;
}
console.log(`Сумма: ${someSum(4, 7)}`);


// Многострочная запись

let text = `Привет!
Вы на канале
Фрилансер по жизни!
`;
console.log(text);

*/


/*
Все что заключено в любые кавычки будет
иметь тип данных строка
*/
/*
let someString = "158";
let someNum = 158;
console.log(someString);
console.log(typeof someString);
console.log(someNum);
console.log(typeof someNum);

console.log(someString + someNum);
*/

//=============================================================================


//Спецсимволы

/*
Внутри строк можно использовать ряд спецсимволов.
Все спецсимволы начинаются с обратного слеша,
\ — так называемого «символа экранирования».
Вот несколько ихз них:
*/

/*
// Перевод строки \n

let textOne = `Привет!
Вы на канале
Фрилансер по жизни!
`;
console.log(textOne);

let textTwo = "Привет!\nВы на канале\nФрилансер по жизни!";
console.log(textTwo);
*/

//============

/*
// Табуляция (отступ) \t

let text = "Привет!\n\tВы на канале\n\t\tФрилансер по жизни!";
console.log(text);
*/

//============

/*
// Обратный слеш \\

let text = "Привет! Вы на канале Фрилансер по жизни \\ IT и фриланс";
console.log(text);
*/


//============

/*
// Кавычки \' \"

let text = "Привет! Вы на канале \"Фрилансер по жизни!\"";
console.log(text);
*/
//============

/*
// Иконки, символы UTF-16 \uКОД, UTF-32 \u{КОД}

let text = "Живи, а работай в свободное время! \u00A9 \u{1F60D}";
console.log(text);
*/

//===================================================================================
// Работа со строками

/*
//Длина строки. Свойство length

let textOne = "Привет!";
console.log(textOne.length);
*/


//==============================

/*
// Получаем символы строки

let text = "Привет!";
let firstSymbol = text[0];
let lasttSymbol = text[text.length - 1];
console.log(firstSymbol);
console.log(lasttSymbol);


for (const char of text) {
	console.log(char);
}
*/

//==============================

//Изменение строки
/*
let text = "Привет!";
text[6] = ".";
console.log(text);
*/

//==============================

/*
//Изменение регистра

let text = "Привет!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
*/

//==============================

//Поиск подстроки

// Метод str.indexOf(substr, pos)
/*
Он ищет подстроку substr в строке str, начиная с позиции pos,
и возвращает позицию, на которой располагается совпадение,
либо -1 при отсутствии совпадений.
*/
/*
let text = "Привет!";
console.log(text.indexOf('рив'));
console.log(text.indexOf('рив', 3));
*/

// Методы includes, startsWith, endsWith
/*
Более современный метод str.includes(substr, pos) возвращает true,
если в строке есть искомая подстрока, либо false, если нет.
*/
/*
let text = "Привет!";
console.log(text.includes('рив'));
console.log(text.includes('рив', 3));

console.log(text.startsWith('рив'));
console.log(text.endsWith('!'));

*/
// Регистр имеет значение!
/*
let text = "Привет!";
let searchText = "пР";

console.log(text.toLowerCase().includes(searchText.toLowerCase()));
*/

/*
В итоге indexOf стоит использовать тогда когда нам нужна
позиция найденой подстроки.
В остальных случаях удобнее использовать includes
*/


//==============================

// Получение части строки (подстроки)

/*
В JavaScript существует ряд методов получения подстроки.
Но достаточно пользоваться одним.
*/

/*
Метод str.slice(start [, end]) - Возвращает часть строки
от start до end (не включая).
*/
/*
let text = "Привет!";
console.log(text.slice(1, 2));
console.log(text.slice(-2, -1));
console.log(text.slice(1));
*/

//=============================

/*
// Сравнение строк

//Алфавитный порядок
console.log("А" > "Б");
console.log("а" > "Б");

//Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

//Кол-во символов
console.log('Слайдер' > 'Слайд');

//Регистр
console.log('Фрилансер' > 'фрилансер');
*/
/*
Алгоритм сравнения двух строк довольно прост:
1.	Сначала сравниваются первые символы строк.
2.	Если первый символ первой строки больше(меньше),
	чем первый символ второй, то первая строка
больше(меньше) второй.Сравнение завершено.
3.	Если первые символы равны, то таким же образом
сравниваются уже вторые символы строк.
4.	Сравнение продолжается, пока не закончится одна из строк.
5.	Если обе строки заканчиваются одновременно,
	то они равны.Иначе, большей считается более длинная строка.
*/

//========================================================================================================================================================
//========================================================================================================================================================


//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1. Верна ли запись?
let fls = "фрилансер";
let text = 'Привет! Я ${fls}';
// Ожидаем получить Привет! Я фрилансер
console.log(text);

// Задача №2. Получить символ "н" строки:
let text = 'фрилансер';

// Задача №3. Верно?
let text = 123 + "456";
// Ожидаем 579
console.log(text);


// Задача №4. Получить строку в верхнем регистре
let text = 'фрилансер';

// Задача №5. Получить подстроку "лан" из:
let text = 'фрилансер';

// Задача №6. true или false ?
let text = 'фрилансер';
console.log(text.includes('лан', 4));
*/




//========================================================================================================================================================
//========================================================================================================================================================


/*
// Создание массива

let arr = new Array(); // Используется редко
let arr = [];
*/

//========================================================================================================================================================

// Значения массива
// Получение значений

/*
let arrOne = [
	'Ваня', // 0я позиция
	'Иштван', // 1я позиция
	'Оля', // 2я позиция
];
console.log(arrOne[1]);
console.log(arrOne[5]); // undefined
*/

/*
let arrTwo = [
	"Коля",
	{
		type: "JS",
		age: 36
	},
	true,
	function () {
		console.log('Привет, я Коля');
	}
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
arrTwo[3]();

// Многомерные массивы
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
console.log(matrix);
console.log(matrix[0][1]);
*/
//========================================================================================================================================================

/*
// Длина массива. Свойство length

let arrOne = ['Ваня', 'Иштван', 'Оля',];
console.log(arrOne);
console.log(arrOne.length);

*/
/*
arrOne.length = 0;
console.log(arrOne);

// Таким образом, самый простой способ
// очистить массив – это arrOne.length = 0;

*/

//========================================================================================================================================================


// Доступ к массиву
/*
Напомню что массив является объектом и, следовательно,
ведёт себя как объект. Например, копируется по ссылке:
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr);

let arrNew = arr;

arrNew.length = 2;

console.log(arr);
*/

//========================================================================================================================================================

/*
// Изменение значений
let arr = ['Ваня', 'Иштван', 'Оля',];

// Меняем существующее
arr[0] = 'Коля';
console.log(arr);

// Добавляем новое
arr[3] = 'Ваня';
console.log(arr);
*/

//========================================================================================================================================================

// МЕТОДЫ МАССИВОВ

/*
Итак с простеньким разобрались теперь перейдем к методам массивов.
Но перед этим стоит поговорить о вариантах применения для массивов.

Первый из них это очередь или упорядоченная коллекция элементов.
Очередь поддерживает два вида операций:
1. добавление элемента в конец очереди
2. удаление элемента в начале, сдвигая очередь,
	так что второй элемент становится первым.

Другой вариант применения для массивов – структура данных,
называемая стек.
Стек поддерживает два вида операций:
1. добавление элемента в конец
2. удаление последнего элемента

Массивы в JavaScript могут работать и как очередь, и как стек.
Мы можем добавлять/удалять элементы как в начало, так и в конец массива.
И в этом нам помогут следующие методы:
*/

/*
// Метод push - добавляет элемент в конец массива

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.push('Вася');
console.log(arr);

arr.push('Дима', 'Катя');
console.log(arr);
*/

//------------------------

/*
// Метод shift - удаляет элемент в начале,
// так что второй элемент становится первым.

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.shift();
console.log(arr);
*/

//------------------------

/*
// Метод pop  - удаляет последний элемент

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.pop();
console.log(arr);
*/

//------------------------

/*
// Метод unshift  - добавляет элемент в начало массива

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.unshift('Вася');
console.log(arr);

arr.unshift('Дима', 'Катя');
console.log(arr);
*/

//------------------------

/*
Методы push/pop выполняются быстро, а методы shift/unshift – медленно.

Давайте рассмотрим на примере добавления элемента
в начало массива (unshift);

Просто взять и добавить элемент с номером 0 недостаточно.
Нужно также заново пронумеровать остальные элементы.

Операция unshift должна выполнить 3 действия:
 1. Добавить элемент с индексом 0.
 2. Сдвинуть все элементы вправо, заново пронумеровать их,
	заменив 0 на 1, 1 на 2 и т.д.
 3. Обновить свойство length.

Чем больше элементов содержит массив, тем больше
времени потребуется для того, чтобы их переместить,
больше операций с памятью.

А вот что бы добавить элемент в конец массива (метод push)
не нужно ничего перемещать.
Так же не нужно заново нумеровать элементы. Достаточно
увеличить значение length.
*/

//========================================================================================================================================================

// Удаление/добавление/изменение конкретных элементов

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

delete arr[1];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);
*/

// Метод splice. Позволяет добавлять, удалять и заменять элементы.
// Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])
/*
// Удаляем элемент
let arrOne = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (Иштван), удаляем один элемент
arrOne.splice(1, 1);
console.log(arrOne);

// Удаляем элемент и возвращаем его в переменную
let arrTwo = ['Ваня', 'Иштван', 'Оля',];
let removed = arrTwo.splice(1, 1);
console.log(removed);

// Заменяем элементы
let arrThree = ['Ваня', 'Иштван', 'Оля',];
// Начиная с нулевой позиции (Ваня), заменяем один элемент
arrThree.splice(0, 1, 'Коля');
console.log(arrThree);

// Добавляем элементы
let arrFour = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (перед 'Иштван'), добавляем два элемента
arrFour.splice(1, 0, 'Коля', 'Маша');
console.log(arrFour);

// Удаляем элемент
let arrFive = ['Ваня', 'Иштван', 'Оля',];
// Начиная с последней позиции (Оля), удаляем один элемент
arrFive.splice(-1, 1);
console.log(arrFive);
*/

//========================================================================================================================================================

/*
// Метод slice.
// Cоздаёт новый массив, в который копирует часть либо весь массив
// Синтаксис arr.slice([start], [end]) Не включая [end]

// Копируем часть массива
let arrOne = ['Ваня', 'Иштван', 'Оля',];

// Начиная с 1й позиции 'Иштван',
// до 2й позиции 'Оля' (не включая)
let arrTwo = arrOne.slice(1, 2);
console.log(arrTwo);

// Начиная с предпоследней позиции 'Иштван',
// до последней 'Оля' (не включая)
let arrThree = arrOne.slice(-2, -1);
console.log(arrThree);

// Копируем весь массив
let arrFour = arrOne.slice();
console.log(arrFour);
*/


//------------------------

/*
// Метод concat.
// Cоздаёт новый массив, в который копирует данные из других массивов
// и дополнительные значения (в конец массива)
// Синтаксис arr.concat(arg1, arg2...)

let arrOne = ['Ваня', 'Иштван', 'Оля',];
let arrTwo = arrOne.concat('Петя');
console.log(arrTwo);
*/
//========================================================================================================================================================

// Поиск в массиве

// Методы indexOf/lastIndexOf и includes
// алналоги строковым методам
/*
1. arr.indexOf(item, from) ищет item, начиная с индекса from,
	и возвращает индекс, на котором был найден искомый
	элемент, в противном случае - 1.
2. arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
3. arr.includes(item, from) – ищет item, начиная с индекса from,
	и возвращает true, если поиск успешен.
*/

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

// indexOf
console.log(arr.indexOf('Иштван'));
console.log(arr.indexOf('Вася'));
console.log(arr.indexOf('Иштван', 2));

// includes
console.log(arr.includes('Иштван'));
console.log(arr.includes('Вася'));
console.log(arr.includes('Иштван', 2));
*/

//------------------------

// find и findIndex
// поиск в массиве объектов с пределённым условием

/*
// Синтаксис
let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
*/
/*
let arr = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]

let resultOne = arr.find(function (item, index, array) {
	return item.age === 18;
});

//let resultOne = arr.find(item => item.age === 18);
console.log(resultOne);


//findIndex
let resultTwo = arr.findIndex(item => item.age === 18);
console.log(resultTwo);
*/

//------------------------

// filter
// Метод ищет все элементы, на которых функция-колбэк вернёт true.
/*
let results = arr.filter(function (item, index, array) {
	// если true - элемент добавляется к результату, и перебор продолжается
	// возвращается пустой массив в случае, если ничего не найдено
});
*/
/*
let arr = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]
let result = arr.filter(function (item, index, array) {
	return item.age >= 18;
});
console.log(result);
*/

//========================================================================================================================================================

// Сортировка массивов
/*
// Сотритовка слов
let arrOne = ['Иштван', 'Ваня', 'Оля'];
console.log(arrOne.sort());

// Сотритовка чисел
let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

// По умолчанию элементы сортируются как строки.
// Для строк применяется лексикографический порядок,
// и действительно выходит, что "8" > "22".
console.log("8" > "22");
*/
//--------

// Метод sort(fn)
// сортирует массив на месте, меняя в нём порядок элементов.

/*
// Сотритовка чисел
let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

// Функция сортировки

function compareNumeric(a, b) {
	console.log(`Сравниваем ${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;

	//return a - b
}

//console.log(arrTwo.sort((a, b) => a - b));

console.log(arrTwo.sort(compareNumeric));
*/

//--------

/*
// Метод reverse
// меняет порядок элементов в массиве на обратный.

let arrOne = ['Ваня', 'Иштван', 'Оля'];
console.log(arrOne.reverse());
*/


//========================================================================================================================================================

// Преобразование массивов

// Метод map.
// вызывает функцию для каждого элемента массива 
// и возвращает массив результатов выполнения этой функции.
/*
let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];

let result = arr.map(function (item, index, array) {
	return item[0];
});
//let result = arr.map(item => item[0]);
console.log(arr);
console.log(result);
*/

//------------------------

/*
 Метод split преобразовывает строку в
 массив по заданному разделителю
 Синтаксис: str.split(delim)
*/
/*
let str = 'Ваня,Иштван,Оля';

let arr = str.split(',');
console.log(arr);


// Можно ограничить кол-во объектов
// которые попадут в массив

let arrTwo = str.split(',', 2);
console.log(arrTwo);
*/
//----------

/*
 Метод join преобразовывает массив в
 строку c заданным разделителем
 Синтаксис: arr.join(glue)
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
let srt = arr.join('.');
console.log(srt);


// Получение строки из массива
let arrTwo = ['Ваня', 'Иштван', 'Оля'];
console.log(String(arrTwo));
*/

//========================================================================================================================================================

// Проверка Array.isArray()

/*
Напомню, массивы не образуют отдельный тип данных.
Они основаны на объектах.
*/
/*
let obj = {};
let arr = [];

console.log(typeof obj);
console.log(typeof arr);
*/
// Как же нам узнать где массив а где нет?
/*
if (Array.isArray(obj)) {
	console.log('Это массив!');
} else {
	console.log('Это не массив!');
}*/

//========================================================================================================================================================

// Перебор элементов

/*
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr.length);

// Цикл FOR
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
*/

//---------------------

/*
// Цикл FOR...OF
// Можно использовать для вывода значений
let arr = ['Ваня', 'Иштван', 'Оля',];

for (let arrItem of arr) {
	console.log(arrItem);
}
*/
//---------------------


// Метод перебора forEach
// Выполняет функцию для каждого элемента массива
/*
arr.forEach(function (item, index, array) {
	// ... делать что-то с item
});
*/

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

arr.forEach(function (item, index, array) {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});
*/
/*
// Стрелочная функция
arr.forEach((item, index, array) => {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});
*/
//--------

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

arr.forEach(show);

function show(item) {
	console.log(item);
}
*/

//========================================================================================================================================================

// Методы reduce/reduceRight

/*
Итак, мы выяснили что если нам нужно перебрать
массив – мы можем использовать forEach, for или for..of.
Если нам нужно перебрать массив и вернуть
данные для каждого элемента – мы используем map.

Методы arr.reduce и arr.reduceRight похожи на эти методы,
но они немного сложнее и используются для вычисления
какого-нибудь единого значения на основе всего массива.
*/
/*
// Синтаксис
let value = arr.reduce(function(previousValue, item, index, array) {
  // ...
}, [initial]);
*/
/*
К привычным нам аргументам item, index, array
добавляется previousValue:

previousValue – результат предыдущего вызова этой функции,
равен initial при первом вызове (если передан initial),
item – очередной элемент массива,
index – его индекс,
array – сам массив.

Функция применяется по очереди ко всем элементам
массива и «переносит» свой результат на следующий вызов.
*/


/*
let arrOne = [1, 2, 3, 4];
let reduceValueOne = arrOne.reduce(function (previousValue, item, index, array) {
	return item + previousValue;
}, 0);
console.log(reduceValueOne);
*/
/*
Шаг №1
previousValue = 0
item = 1
их сумма = 1

Шаг №2
previousValue = 1
item = 2
их сумма = 3

Шаг №3
previousValue = 3
item = 3
их сумма = 6

Шаг №4
previousValue = 6
item = 4
их сумма = 10
*/
//--------

/*
let arrArrow = [1, 2, 3, 4];
let reduceValueArrow = arrArrow.reduce((pValue, item) => item + pValue, 0);
console.log(reduceValueArrow);
*/


//--------

/*
let arrTwo = ['Ваня', 'Иштван', 'Оля',];

Если не указать начальное значение, то оно будет равно
первому элементу массива (previousValue=Ваня)
А работа метода начнется со второго элемента (item=Иштван)
*/
/*
let reduceValueTwo = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
	console.log(item);
	return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);
*/


// Метод arr.reduceRight работает аналогично, 
// но проходит по массиву справа налево.


//========================================================================================================================================================


// Массив используем как массив
/*
Следует помнить, что массив является объектом и,
следовательно, ведёт себя как объект.
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(typeof arr);

// Добавление нечислового свойства
arr.name = "Коля";
console.log(arr);
*/
/*
Но то, что действительно делает массивы особенными – это их внутреннее
представление. Движок JavaScript старается хранить элементы
массива в непрерывной области памяти, один за другим.
Существуют и другие способы оптимизации, благодаря которым
массивы работают очень быстро.

Но все они утратят эффективность, если мы перестанем работать
с массивом как с «упорядоченной коллекцией данных» и начнём
использовать его как обычный объект.

Варианты неправильного применения массива:
1. Добавление нечислового свойства, например: arr.test = 5.
2. Создание «дыр», например: добавление arr[0],
	затем arr[1000](между ними ничего нет).
3. Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.
*/


//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1.
// Какое число (длину) мы получим?
let arr = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
*/
// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/
/*
// Задача №3.
// Удалить элемент 'Иштван' и возвратить его в переменную
let arr = ['Ваня', 'Иштван', 'Оля',];

// Задача №4.
//Сделать из строки массив
let str = 'Ваня,Иштван,Оля';

// Задача №5.
// Чему равен previousValue в начале работы метода?
let arr = [9, 2, 8,];
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});
*/

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================







