///////////////////////////////////////////////// #1
// Передача в функцию объект аргументов

// Подход ниже не очень удобен, т.к. может не быть каких-то аргументов

function about(name, age) {
  console.log('Your name is ' + name)
  console.log('Your age is ' + age)
}

about('Sergey', 36)

// Передаём в функцию объект аргументов

function aboutBetter(arg) {
  console.log('Your name is ' + arg.name)
  console.log('Your age is ' + arg.age)
}

aboutBetter({ name: 'Alexey', age: 44 })

console.log('--------------------------------------')
///////////////////////////////////////////////// #2
// Функции-генераторы

console.log('--------------------------------------')
///////////////////////////////////////////////// #3
// Работа со stringify - вывод строки в консоль

const person = {
  name: 'Sergey',
  age: 32,
  data: ['hi', 'hello'],
}

// Вывод ниже плохо читается

console.log(JSON.stringify(person))

// А вот это значительно лучше

console.log(JSON.stringify(person, null, 2))

console.log('--------------------------------------')
///////////////////////////////////////////////// #4
// Проверка наличия свойства объекта (или метода) прямо в вызове

const subway = {
  red: ['Moskovskaya', 'Chkalovskaya', 'Leninskaya'],
  green: ['Strelka', 'Kanavinskaya', 'Burnakovskaya'],
}

console.log(subway.green.join(' '))

// Вывод ниже даст ошибку, остановив выполнение всей цепочки вызовов

// console.log(subway.blue.join(' '))

// А вот этот вывод просто вернёт undefined

console.log(subway.blue?.join(' '))

console.log('--------------------------------------')
///////////////////////////////////////////////// #5
// Деструктуризация

const human = {
  name: 'Sergey',
  age: 32,
  data: ['2204345543', 'kd2ddfs222'],
}

// Вытаскиваем значения ключей объекта

const { name, age } = human
console.log(name, age)
// идентично - console.log(human.name, human.age)

// Вытаскиваем номер паспорта и идентификатор из массива data в новые переменные (pass, identifier)

const { 0: pass, 1: identifier } = human.data
console.log(pass, identifier)

console.log('--------------------------------------')
///////////////////////////////////////////////// #6
// Добавление элементов в массив

let arr = [44, 55]
console.log(...arr, 33, 99)

console.log('--------------------------------------')
///////////////////////////////////////////////// #7
// Удаление дубликатов

const myArr = [3, 4, 3, 5, 3, 7, 3]
console.log(new Set(myArr))
console.log([...new Set(myArr)])

console.log('--------------------------------------')
///////////////////////////////////////////////// #8
// Приведение к числу элементов одномерного массива

const ar8 = [['2'], '2', 34, 88, '99']
const ar8Num = ar8.map(Number)
console.log(ar8Num)

console.log('--------------------------------------')
///////////////////////////////////////////////// #9
// Скорость работы программы

console.time('ex 1')
let a = 77
let b = 99
for (let i = 0; i < 1000000; i++) {
  ;[a, b] = [b, a]
}
console.timeEnd('ex 1')

console.time('ex 2')
let x = 77
let y = 99
for (let i = 0; i < 1000000; i++) {
  let t = x
  x = y
  y = x
}
console.timeEnd('ex 2')
