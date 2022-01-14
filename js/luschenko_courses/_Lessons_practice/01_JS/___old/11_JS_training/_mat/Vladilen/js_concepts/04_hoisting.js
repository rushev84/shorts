//hoisting - перемещение определения функции (можем обратиться до определения)
/*
console.log(sum(1, 41)) //42

function sum(a, b) {
  return a + b
}
*/
/*
console.log(i) //undefined, но ошибки нет, т.к. интерпретатор знает, что переменная есть
//Переменная по умолчанию равна undefined
var i = 42
console.log(i)
*/
// Переменные const и let не подвержены хойстингу
/*
console.log(num) //ошибка
const num = 42
console.log(num)
*/
// Function Expression & Function Declaration
/*
console.log(square(25)) //625 - declaration. Вызывается где угодно
function square(num) {
  return num ** 2
}
*/
/*
console.log(square(25)) //ошибка. expression вызывается только после определения
const square = function (num) {
  return num ** 2
}

*/
