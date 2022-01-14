// Замыкания (closures)
// Момент, когда функция имеет доступ до переменных из вышестоящего scope
/*
function sayHelloTo(name) {
  const message = 'Hello ' + name
  return function () {
    console.log(message)
    // ничего не возвращает
  }
}

const helloToElena = sayHelloTo('Elena')
const helloToIgor = sayHelloTo('Igor')
// Возвращает функцию, но в самой функции
// sayHelloTo() нет переменной message
console.log(helloToElena) // function
console.log(helloToElena()) // Hello Elena, undefined
helloToElena() // Hello Elena
helloToIgor() // Hello Igor
*/

// Практическое применение замыканий
/*
function createFrameworkManager() {
  const fw = ['Angular', 'React']

  return {
    print: function () {
      // имеет доступ до переменных из вышестоящих функций
      console.log(fw)
    },
    add: function (framework) {
      fw.push(framework)
    },
  }
}
*/
/*
const manager = createFrameworkManager()
console.log(manager) // {print: ƒ, add: ƒ}
//console.log(fw) // Ошибка. fw is not defined
// fw не видна
manager.print() // (2) ["Angular", "React"]
// Мы всё равно взаимодействуем с переменной fw,
// но она является приватной для объекта manager
// Две функции - print() и add() замкнули в себе значение fw,
// оно нам нигде не доступно извне, но при этом мы можем с ним взаимодействовать
*/
/* Мой пример
function printConsoleCheck(message) {
  let forbiddenWord = 'Хуй'
  return function () {
    if (message === forbiddenWord) {
      console.log('Не матерись!')
    } else {
      console.log(message)
    }
  }
}

let printConsole = printConsoleCheck('Хуй')
printConsole()
*/

// setTimeout
// Задача - вывести все числа Фибоначчи в консоль с определен. задержкой
const fib = [1, 2, 3, 5, 8, 13]
/*
for (var i = 0; i < fib.length; i++) {
  setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`)
  }, 1500)
}
*/
// Запускаем и получаем 6 раз вот это - fib[6] = undefined
// Цикл for отрабатывает очень быстро, i везде = 6
// Починить можно заменой var на let, потому что let существует внутри блочного скоупа
/*
for (let i = 0; i < fib.length; i++) {
  setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`)
  }, 1500)
}
*/
// Но можно решить и с помощью замыкания
/*
for (var i = 0; i < fib.length; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500)
  })(i)
}
*/
