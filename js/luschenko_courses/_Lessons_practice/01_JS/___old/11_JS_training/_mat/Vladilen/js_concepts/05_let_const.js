// Let

let a = 'Variable a'
let b = 'Variable b'
//блок scope
/*
{
  a = 'New Variable A'
  let b = 'Local Variable B'
  console.log('Scope A', a) // Scope A New Variable A
  console.log('Scope B', b) // Scope B Local Variable B
  console.log('Scope C', c) // ошибка
  let c = 'Something'
}
console.log('A:', a) // A: New Variable A
console.log('B:', b) // Variable b
*/

// Const
/*
const PORT = 8080
PORT = 2000 // ошибка
*/
/*
const PORT = 8080
const array = ['Javascript', 'is', 'Awesome']
array.push('!')
console.log(array) // (4) ["Javascript", "is", "Awesome", "!"]
array[0] = 'JS'
console.log(array) // (4) ["JS", "is", "Awesome", "!"]
array = '' // Ошибка. Можно менять только внутреннее состояние объекта
*/
// С объектами то же самое
