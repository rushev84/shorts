// Типы данных
// null, undefined, boolean, number, string, object, symbol
// все типы являются примитивами кроме object
/*
console.log(typeof 0) //number
console.log(typeof true) //boolean
console.log(typeof 'Javascript')
console.log(typeof undefined) //undefined
console.log(typeof Math) //object
console.log(typeof Symbol('JS')) //symbol
console.log(typeof null) //object
console.log(typeof function () {}) //function, но такого типа данных нет (они объекты)
console.log(typeof NaN) //number (Not a Number) - undefined * 1
*/

// Приведение типов
/*
let language = 'Javascript'
if (language) {
  console.log('The best language is: ', language)
}
*/
//falsy-values: '', 0, null, undefinde, Nan, false
/*
console.log(Boolean('')) //false
console.log(Boolean('Hello')) //true
console.log(Boolean(' ')) //true
console.log(Boolean('0')) //true
console.log(Boolean(0)) //false
console.log(Boolean(null)) //false
console.log(Boolean([])) //true - пустой массив
console.log(Boolean({})) //true - пустой объект
console.log(Boolean(function () {})) //true - функция
*/

// Строки и числа
/*
console.log(1 + '2') //string 12
console.log('' + 1 + 0) //string 10
console.log('' - 1 + 0) //number -1. Для строк не определен минус, поэтому всё в число
console.log('3' * '8') //number 24. Не определён *
console.log(4 + 10 + 'px') //string 14px
console.log('px' + 5 + 10) //string px510
console.log('42' - 40) //number 2. Строка '42' приведена к числу
console.log('42px' - 2) //NaN. Не удалось привести строку '42px' к числу
console.log(null + 2) //number 2. Null при приведении к числу равен 0
console.log(undefined + 42) //NaN. Undefined нельзя привести к числу
*/

// == vs ===
// == сравнивает с приведением типов, === - без приведения
// Рекомендуется всегда использовать ===
/*
console.log(2 == '2') //true
console.log(2 === '2') //false
console.log(undefined == null) //true
console.log(undefined === false) //false
console.log('0' == false) //true
console.log('0' == 0) //true
*/

// Список неоднозначных сравнений
/*
console.log(false == '') //true
console.log(false == []) //true
console.log(false == {}) //false
console.log('' == 0) //true
console.log('' == []) //true
console.log('' == {}) //false
console.log(0 == []) //true
console.log(0 == {}) //false
console.log(0 == null) //false
*/
