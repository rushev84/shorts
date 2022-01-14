// import getValue from './modules/get_value.js'
// import mapArray from './modules/map.js'
// import { getValue, mapArray } from './modules/helpers_array.js'
import { getValue, mapArray } from './modules/helpers_array2.js'

const superHero = [
  { id: 12345, hero: 'batman', power: 'money' },
  { id: 54321, hero: 'aquaman', power: 'fishpower' },
]

// получить значение из массива
// 1 способ - в лоб через цикл
let res = []
for (let i = 0; i < superHero.length; i++) {
  res.push(superHero[i]['power'])
}

console.log(res)

// 2 способ - создание универсальной функции (в подключенном файле)

console.log(getValue(superHero, 'hero'))
console.log(mapArray(superHero, 'id'))
