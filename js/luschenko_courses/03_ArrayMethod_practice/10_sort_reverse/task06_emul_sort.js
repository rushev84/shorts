// TASK 06
//  Напишите функцию f6, которая запускается по кнопке b-6. Функция сортирует массив a6 по возрастанию и выводит в out-6 через пробел. Не указывайте функции сортировки. Изучите результат на двух значениях переменной a6.

let a6 = [1, 4, 2, 6, 7, 3, 5, 2, 9]
// a6 = ['hi', 'low', 'lo', 'hihi']

let a6_res = []

const f6 = () => {
  let a6_copy = [...a6]
  a6_res = []

  while (a6_copy.length !== 0) {
    let min = a6_copy.reduce((acc, item) => {
      if (item < acc) {
        acc = item
      }
      return acc
    })
    if (a6_res[a6_res.length - 1] !== min) {
      a6_res.push(min)
    }
    a6_copy.splice(a6_copy.indexOf(min), 1)
  }

  document.querySelector('.out-6').textContent = a6_res.join(' ')
}
