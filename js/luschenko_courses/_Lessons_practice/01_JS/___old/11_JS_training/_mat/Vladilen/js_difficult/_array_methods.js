// Методы массивов

const people = [
  { name: 'Владилен', age: 25, budget: 40000 },
  { name: 'Елена', age: 17, budget: 3400 },
  { name: 'Игорь', age: 49, budget: 50000 },
  { name: 'Михаил', age: 15, budget: 1800 },
  { name: 'Василиса', age: 24, budget: 25000 },
  { name: 'Виктория', age: 38, budget: 2300 },
]

// Итерация циклами
/*
// синтаксис ES5 (больше поддержки браузерами)
for (let i = 0; i < people.length; i++) {
  console.log(people[i])
}

//синтаксис ES6
for (let person of people) {
  console.log(person)
}


// ForEach


people.forEach(function (person, index, pArr) {
  console.log(person)
  console.log(index) // доп. параметры index, pArr - используются редко
  console.log(pArr)
})


// можно и с помощью стрелочных функций

people.forEach((person) => console.log(person))


// Map
// работает схожим образом с ForEach,
// но можно создавать новые массивы и заносить их в новые переменные

const newPeople = people.map((person) => {
  return person // обязательно нужно что-то вернуть
})

console.log(newPeople) // получаем тот же массив

const newPeople = people.map((person) => {
  return 'Hello'
})

console.log(newPeople) // получаем массив, в кот. каждый элемент -
// строчка "Hello"


const newPeople = people.map((person) => {
  return person.name
})

console.log(newPeople) // получаем массив из имён


const newPeople = people.map((person) => {
  return `${person.name} (${person.age})`
})

console.log(newPeople) // Получаем в каждом элементе массива
// "Владилен (25)", "Елена (17)" и т.д.


const newPeople = people.map((person) => person.age * 3)

console.log(newPeople) // получаем массив из значений, умноженных на 3



// Filter - фильтруем массив по условию

// классический способ

const adults = []
for (let i = 0; i < people.length; i++) {
  if (people[i].age >= 18) {
    adults.push(people[i])
  }
}
console.log(adults) // новый массив


// с помощью filter

const adults = people.filter((person) => {
  if (person.age >= 18) {
    return true
  }
})

// или с помощью стрелки

const adults = people.filter((person) => person.age >= 18)

console.log(adults)

// Reduce

// с циклом

let amount = 0
for (let i = 0; i < people.length; i++) {
  amount += people[i].budget
}

console.log(amount)

const amount = people.reduce((total, person) => {
  return total + person.budget
}, 0)

console.log(amount)


const amount = people.reduce((total, person) => total + person.budget, 0)

console.log(amount)

// Find

const igor = people.find((person) => person.name === 'Игорь')
console.log(igor) // {name: "Игорь", age: 49, budget: 50000}

// FindIndex

const igorIndex = people.findIndex((person) => person.name === 'Игорь')
console.log(igorIndex) // 2

*/

// Совместное использование методов

const newPeople = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget,
    }
  })

console.log(newPeople)
