//Значения
/*
let a = 42
let b = a
b++
console.log('a', a) //42
console.log('b', b) //43
*/
/*
let a = [1, 2, 3]
let b = a
b.push(4)
console.log('a', a) //a [ 1, 2, 3, 4 ]
console.log('b', b) //b [ 1, 2, 3, 4 ]
*/
//При инициализации b копируется не само значение, а ссылка на массив
//Чтобы массив не мутировал, можно использовать метод concat()
/*
let a = [1, 2, 3]
b = a.concat()
b.push(4)

console.log('a', a) //a [ 1, 2, 3 ]
console.log('b', b) //b [ 1, 2, 3, 4 ]
*/
/*
let a = [1, 2, 3]
let b = a
b.push(4)
let c = [1, 2, 3, 4]

console.log('a', a) //a [ 1, 2, 3, 4 ]
console.log('b', b) //b [ 1, 2, 3, 4 ]

console.log(a === b) //true
console.log(a === c) //false. Это уже разные объекты (хотя содержимое у них одинаковое) и при приведении имеют разное значение
*/
