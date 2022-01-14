// Функции-генераторы

function* strGenerator() {
  yield 'H'
  yield 'e'
  yield 'l'
  yield 'l'
  yield 'o'
}

const str = strGenerator()
console.log(str) // str является функцией-генератором. У неё есть метод next()
console.log(str.next()) // получаем объект {value: 'H', done: false}
console.log(str.next()) // получаем объект {value: 'e', done: false}
console.log(str.next().value) // получаем строку 'l'
console.log(str.next()) // получаем объект {value: 'l', done: false}
console.log(str.next()) // получаем объект {value: 'o', done: false}
console.log(str.next()) // получаем объект {value: undefined, done: true}
console.log(str.next()) // получаем объект {value: undefined, done: true}

function* numberGen(n = 10) {
  for (i = 0; i < n; i++) {
    yield i
  }
}

const num = numberGen(7)
console.log(num.next()) // получаем объект {value: 0, done: false}
console.log(num.next()) // получаем объект {value: 1, done: false}

// Создание собственного генератора
// Символы
