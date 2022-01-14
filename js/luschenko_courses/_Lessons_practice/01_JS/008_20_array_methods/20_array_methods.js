// Массив - упорядоченная структура данных

const arrExample = [
  1,
  2,
  3,
  4,
  5,
  'string',
  null,
  undefined,
  () => {},
  true,
  false,
  new Map(),
  [1, 2, 2, 2],
]

const arr = [1, 2, 3, 4, 5]

// ------------------------------------------------------------------
// 1. forEach
// Перебирает все элементы массива, возвращает undefined. Исходный массив не мутируется
console.group('1. forEach')

const newArr1 = arr.forEach((item, index, arr) => {
  console.log(item, index, arr)
})

console.log('newArr1: ', newArr1)

console.groupEnd()

// ------------------------------------------------------------------
// 2. map
// Перебирает все элементы массива, возвращает новый массив на основе текущего.
console.group('2. map')

const newArr2 = arr.map((item, index, array) => {
  return item * 2
})
console.log('newArr2: ', newArr2)
// можно сокращать: const newArr2 = arr.map((item) => item * 2)

console.groupEnd()

// ------------------------------------------------------------------
// 3. reduce
// Перебирает все элементы массива, возвращает новую структуру данных.
console.group('3. reduce')

// формируем новый объект с данными
const obj3 = arr.reduce((acc, item, index, array) => {
  acc['key' + index] = 'value' + index
  return acc
}, {})
console.log('obj3: ', obj3)

// создаём новый массив
const newArr3 = arr.reduce((acc, item, index, array) => {
  acc.push(item * 2)
  return acc
}, [])
console.log('newArr3: ', newArr3)

// находим сумму элементов массива
const sum3 = arr.reduce((acc, item) => acc + item)
console.log('sum3: ', sum3)

console.groupEnd()

// ------------------------------------------------------------------
// 4. find
// Позволяет найти элемент по условию и сразу его возвращает
console.group('4. find')

const elem4 = arr.find((item, index, array) => {
  return item === 3
})
console.log('elem4: ', elem4)

console.groupEnd()

// ------------------------------------------------------------------
// 5. findIndex
// Позволяет найти элемент по условию и возвращает его индекс
console.group('5. findIndex')

const idElem5 = arr.findIndex((item, index, array) => {
  return item === 3
})
console.log('idElem5: ', idElem5)

console.groupEnd()

// ------------------------------------------------------------------
// 6. filter
// Находит элементы по истинному условию и возвращает новый массив
console.group('6. filter')

const filteredArr6 = arr.filter((item, index, array) => {
  return item > 3
})
console.log('filteredArr6: ', filteredArr6)

console.groupEnd()

// ------------------------------------------------------------------
// 7. push
// Вставляет элементы в конец массива и мутирует его. Возвращает новую длину массива
console.group('7. push')

const arr7 = [1, 2, 3, 4, 5]
const newLengthArr7 = arr7.push(10, 11, 12, 13, 14, 15)

console.log('arr7: ', arr7, 'newLengthArr7: ', newLengthArr7)

console.groupEnd()

// ------------------------------------------------------------------
// 8. unshift
// Вставляет элементы в начало массива и мутирует его. Возвращает новую длину массива
console.group('8. unshift')

const arr8 = [1, 2, 3, 4, 5]
const newLengthArr8 = arr8.unshift(10, 11, 12, 13, 14, 15)

console.log('arr8: ', arr8, 'newLengthArr8: ', newLengthArr8)

console.groupEnd()

// ------------------------------------------------------------------
// 9. pop
// Удаляет элемент в конце массива и мутирует массив. Возвращает удалённый элемент
console.group('9. pop')

const arr9 = [1, 2, 3, 4, 5]
const removedLastEl9 = arr9.pop()

console.log('arr9: ', arr9, 'removedLastEl9: ', removedLastEl9)

console.groupEnd()

// ------------------------------------------------------------------
// 10. shift
// Удаляет элемент в начале массива и мутирует массив. Возвращает удалённый элемент
console.group('10. shift')

const arr10 = [1, 2, 3, 4, 5]
const removedFirstEl10 = arr10.shift()

console.log('arr10: ', arr10, 'removedFirstEl10: ', removedFirstEl10)

console.groupEnd()

// ------------------------------------------------------------------
// 11. concat
// Создаёт новый массив, добавляя переданные значения (можно передавать как по значениям, так и сразу массивом). Возвращает новый массив, старый не мутируется.
console.group('11. concat')

const newArr11_1 = arr.concat(22, 33, 44)
console.log('newArr11_1: ', newArr11_1)

// можно соединять несколько массивов

const arr11_1 = [0, 1, 2]
const arr11_2 = [56, 66, 65]
const arr11_3 = [12, 1110, 2323]

const newArr11_2 = arr11_1.concat(arr11_2, arr11_3)
console.log('newArr11_2: ', newArr11_2)

console.groupEnd()

// ------------------------------------------------------------------
// 12. join
// Преобразование массива в строку через разделитель. Возвращает новую строку.
console.group('12. join')

const newStr12 = arr.join('-')
console.log('newStr12: ', newStr12)

console.groupEnd()

// ------------------------------------------------------------------
// 13. sort
// Сортировка массива. Возвращает новый массив, исходный мутируется.
console.group('13. sort')

const arr13_1 = [12, 2, 34, 0, 1]
const sortedArrIncrease13 = arr13_1.sort((a, b) => a - b)
console.log('sortedArrIncrease13: ', sortedArrIncrease13)

const arr13_2 = [12, 2, 34, 0, 1]
const sortedArrDecrease13 = arr13_1.sort((a, b) => b - a)
console.log('sortedArrDecrease13: ', sortedArrDecrease13)

console.groupEnd()

// ------------------------------------------------------------------
// 14. isArray
// Проверяет, массив ли это.
console.group('14. isArray')

console.log('arr - массив?', Array.isArray(arr))

console.groupEnd()

// ------------------------------------------------------------------
// 15. splice
//  Позволяет удалить или вставить элементы. Мутирует исходный массив.
console.group('15. splice')

// удаляем элементы
const arrDeleted15 = [0, 10, 12, 222, 56]
let indexDeleted = 1 // с какого индекса удаляем
let deleteCount = 2 // сколько элементов удаляем
arrDeleted15.splice(indexDeleted, deleteCount)
console.log('arrDeleted15: ', arrDeleted15)

// вставляем элементы
const arrInserted15 = [0, 10, 12, 222, 56]
let indexInserted = 1 // с какого индекса вставляем. После индекса - 0, далее перечисление вставляемых элементов
arrInserted15.splice(indexInserted, 0, 444, 23, 45566)
console.log('arrInserted15: ', arrInserted15)

// заменяем элементы
const arrInserted15_2 = [0, 10, 12, 222, 56]
arrInserted15_2.splice(2, 2, 'new_el') // с индекса 2 удаляем 2 элемента и вместо них вставляем новый
console.log('arrInserted15_2: ', arrInserted15_2)

console.groupEnd()

// ------------------------------------------------------------------
// 16. slice
//  Позволяет получить новый подмассив из старого. Возвращает подмассив. Исходный массив не мутируется
console.group('16. slice')

const arr16 = [1, 34, 444, 23, 33]
const slicedArr16_1 = arr16.slice(1, 3) // с 1 индекса до 3 (не включительно)
console.log('slicedArr16_1: ', slicedArr16_1)
const slicedArr16_2 = arr16.slice(2) // со 2 индекса до конца
console.log('slicedArr16_2: ', slicedArr16_2)
const slicedArr16_3 = arr16.slice(-2) // с последнего индекса 2 элемента
console.log('slicedArr16_3: ', slicedArr16_3)
const slicedArr16_4 = arr16.slice(1, -1) // с 1 индекса и до 1 с конца (не включительно)
console.log('slicedArr16_4: ', slicedArr16_4)

console.groupEnd()

// ------------------------------------------------------------------
// 17. indexOf
//  Возвращает индекс переданного элемента
console.group('17. indexOf')

const arr17 = [2, 33, 4, 56, 123]
const foundIndex17_1 = arr17.indexOf(56) // ищем число 56
console.log('foundIndex17_1: ', foundIndex17_1)
const foundIndex17_2 = arr17.indexOf(33, 2) // ищем число 33, начиная с 2 индекса
console.log('foundIndex17_2: ', foundIndex17_2)

console.groupEnd()

// ------------------------------------------------------------------
// 18. lastIndexOf
//  Возвращает индекс переданного элемента, но поиск идёт с конца массива
console.group('18. lastIndexOf')

const arr18 = [2, 33, 4, 56, 123]
const foundIndex18_1 = arr18.lastIndexOf(33) // ищем число 33 с конца
console.log('foundIndex18_1: ', foundIndex18_1)
const foundIndex18_2 = arr18.lastIndexOf(123, 1) // ищем число 123 с конца, но пропускаем 1-ый элемент с конца
console.log('foundIndex18_2: ', foundIndex18_2)

console.groupEnd()

// ------------------------------------------------------------------
// 19. includes
// Ищем элемент в массиве. Возвращает булево значение
console.group('19. includes')

const arr19 = [2, 33, 4, 56, 123]
console.log(arr19.includes(33)) // ищем число 33
console.log(arr19.includes(33, 2)) // ищем число 33, но со 2 индекса

console.groupEnd()

// ------------------------------------------------------------------
// 20. reverse
// Разворачивает массив, исходный массив мутируется.
console.group('20. reverse')

const arr20 = [2, 33, 4, 56, 123]
console.log(arr20.reverse())

console.groupEnd()

// ------------------------------------------------------------------
// 21. split
// Преобразует строку в массив.
console.group('21. split')

const str21 = 'hello'
const arr21 = str21.split('')
console.log(arr21)

// полсе запятой можно указать количество возвращаемых элементов

const arr21_2 = str21.split('', 3)
console.log(arr21_2)

console.groupEnd()

// ------------------------------------------------------------------
// 22. every
// Если функция возвращает для каждого элемента true, то итог - true. В противном случае - false
console.group('22. every')

const arr22 = [4, 5, 6, 8, 12]
const bool22 = arr22.every((item) => item > 3)
console.log('bool22: ', bool22)

console.groupEnd()

// ------------------------------------------------------------------
// 23. some
// Если функция возвращает для хотя бы одного элемента true, то итог - true. В противном случае - false
console.group('23. some')

const arr23 = [4, 5, 6, 8, 12]
const bool23 = arr23.some((item) => item < 5)
console.log('bool23: ', bool23)

console.groupEnd()

// ------------------------------------------------------------------
// 24. flat
// Убирает вложенные массивы. Удаляет элементы unfefined. Исходный массив не мутируется.
console.group('24. flat')

const arr24 = [4, 5, [6, 8], 12]
const arr24_flat = arr24.flat() // в качестве параметра передаётся уровень глубины
console.log('arr24_flat: ', arr24_flat)

console.groupEnd()

// ------------------------------------------------------------------
// 25. fill
// Создаёт массив по указанным параметрам и заполняет его указанным значением. Опорным является количество элементов в исходном массиве.
console.group('25. fill')

const arr25 = [1, 1, 1, 1, 1, 1]
const arr25_filled = arr25.fill(2, 0, 4) // элемент, начальный индекс, конечный индекс
console.log('arr25_filled: ', arr25_filled)

console.groupEnd()

// ------------------------------------------------------------------
// 26. keys
// Создаёт массив из ключей массива или объекта
console.group('26. keys')

const arr26 = [1, 1, 1, 1, 1, 1]
const arr26_keys = Object.keys(arr26)
console.log('arr26_keys: ', arr26_keys)

console.groupEnd()
