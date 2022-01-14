// Контекст
// Определяет, как ф-ция была вызвана

const person = {
  surname: 'Старк',
  knows: function (what, name) {
    // ф-ция создала свой собственный контекст,
    //но в контексте объекта person
    console.log(`Ты ${what} знаешь, ${name} ${this.surname}`) // this - это person
  },
}

const john = { surname: 'Сноу' }

person.knows('все', 'Бран') // Ты все знаешь, Бран Старк

// вызываем метод knows в контексте объекта john
// ф-ции - это тоже объекты, у них есть свои методы

person.knows.call(john, 'ничего не', 'Джон') // Ты ничего не знаешь, Джон Сноу

// метод call первым параметром принимает новый контекст
// контекст в js является объектом
// метод call сразу вызывает john с нужным контекстом, через запятую
// он принимает параметры, кот. нужны для этой ф-ции
// мы вызвали метод knows у объекта person, но с контекстом john,
// поэтому ключевое слово this указывает на джона

// метод apply
person.knows.apply(john, ['ничего не', 'Джон']) // Ты ничего не знаешь, Джон Сноу

// у метода apply 2-ой параметр всегда массив аргументов, кот. нужны
// для ф-ции knows

// так тоже можно
person.knows.call(john, ...['ничего не', 'Джон']) // Ты ничего не знаешь, Джон Сноу

// метод bind
person.knows.bind(john, 'ничего не', 'Джон')() // Ты ничего не знаешь, Джон Сноу
// не вызывает ф-цию, а возвращает новую ф-цию
// а можно и вот так:
const bound = person.knows.bind(john, 'ничего не', 'Джон')
bound() // Ты ничего не знаешь, Джон Сноу

//=============

// создаём класс Person
function Person(name, age) {
  this.name = name
  this.age = age
  console.log(this)
}

const elena = new Person('Elena', 20) // Person {name: "Elena", age: 20}

//==============
// Явная передача контекста

function logThis() {
  console.log(this)
}

const obj = { num: 42 }
logThis.apply(obj) // {num: 42}
logThis.call(obj) // {num: 42}
logThis.bind(obj)() // {num: 42}

// ==============
// Неявная передача

const animal = {
  legs: 4,
  logThis: function () {
    console.log(this)
  },
}
animal.logThis()
// получаем тот объект, в контексте которого был вызван данный метод

// Стрелочные ф-ции

function Cat(color) {
  this.color = color
  console.log('This', this) // This Cat {color: "red"}
  ;(() => console.log('Arrow this', this))() // Arrow this Cat {color: "red"}
}
new Cat('red')
