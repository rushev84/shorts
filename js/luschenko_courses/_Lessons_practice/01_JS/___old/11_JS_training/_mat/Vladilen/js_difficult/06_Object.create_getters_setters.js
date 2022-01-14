// Объекты, Object.create

// Object.create() принимает два параметра, каждый - объект
// первый является прототипом для данного объекта
/*
const person = Object.create(
  {},
  {
    name: {
      value: 'Vladilen',
    },
    birthYear: {
      value: 1993,
    },
  }
)
*/
// console.log(person)
// в консоли ключи подсвечиваются бледным
/*
for (let key in person) {
  console.log('Key', key) // ничего не получаем
}
*/
/*
const person = Object.create(
  {},
  {
    name: {
      value: 'Vladilen',
      enumerable: true, // теперь ключ виден из цикла
    },
    birthYear: {
      value: 1993,
    },
  }
)

for (let key in person) {
  console.log('Key', key, person[key]) // Key name Vladilen
}

*/
/*

const person = Object.create(
  {},
  {
    name: {
      value: 'Vladilen',
      enumerable: true, // теперь ключ виден из цикла
    },
    birthYear: {
      value: 1993,
    },
  }
)

person.name = 'Maxim'

for (let key in person) {
  console.log('Key', key, person[key]) // Всё равно Key name Vladilen
}

*/
/*
const person = Object.create(
  {},
  {
    name: {
      value: 'Vladilen',
      // ниже - property descriptors
      enumerable: true,
      writable: true, // теперь значение ключа можно менять
      configurable: true, // теперь мы можем удалять ключ
    },
    birthYear: {
      value: 1993,
    },
  }
)

person.name = 'Maxim'

for (let key in person) {
  console.log('Key', key, person[key]) // Теперь Key name Maxim
}

*/

// Геттеры и сеттеры
/*
const person = Object.create(
  {},
  {
    name: {
      value: 'Vladilen',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1993,
    },
    age: {
      get() {
        // здесь мы должны вернуть новое значение
        // return 'Hello!'
        // теперь если в консоли person.age -> "Hello!"
        // мы как будто реализовывали ф-цию, но работает как обычное поле
        return new Date().getFullYear() - this.birthYear // 28
      },
      set(value) {
        // console.log('Set age', value)
        // в консоли вводим person.age = 100,
        // получаем
        // Set age 100
        // 100

        document.body.style.background = 'red'
        // теперь вводим в консоли person.age = 100,
        // и бэкграунд - красный
      },
    },
  }
)

*/

const person = Object.create(
  {
    // данный метод присутствует только в прототипе
    calculateAge() {
      console.log('Age:', new Date().getFullYear() - this.birthYear)
    },
  },
  {
    name: {
      value: 'Vladilen',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1993,
    },
    age: {
      get() {},
      set(value) {},
    },
  }
)

// цикл бежит только по ключам объекта, не по прототипу
for (let key in person) {
  if (person.hasOwnProperty()) {
    console.log('Key', key, person[key])
  }
}
