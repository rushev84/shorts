const user = {
  name: 'Pupkin',
  age: 25,
  profession: 'programmer',
  salary: 10000,
}

console.log(user)

// defineProperty
Object.defineProperty(user, 'passport', {
  value: 'vvv222333',
  enumerable: false,
})

// Получаем массив ключей
let keys = Object.keys(user)
console.log(keys)

// Получаем массив значений
let values = Object.values(user)
console.log(values)

// Получаем массив из массивов "ключ - значение"
let entries = Object.entries(user)
console.log(entries)
console.log('--------------')
entries.map(([index, item]) => console.log(index, item))

console.log('--------------')
entries.map((item) => console.log(item))
