// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
  document.querySelector('.out-1').textContent = event.key
  return event.key
}

document.querySelector('.i-1').onkeypress = t1

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
  document.querySelector('.out-2').textContent = event.charCode
  return event.charCode
}

document.querySelector('.i-2').onkeypress = t2

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

const out3 = document.querySelector('.out-3')

function t3(event) {
  if (event.charCode < 48 || event.charCode > 57) {
    out3.textContent = true
  } else {
    out3.textContent = false
  }
}

document.querySelector('.i-3').onkeypress = t3

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
  document.querySelector('.out-4').textContent += event.key.toLowerCase()
}

document.querySelector('.i-4').onkeypress = t4

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
  document.querySelector('.out-5').textContent += event.key.toUpperCase()
}

document.querySelector('.i-5').onkeypress = t5

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(event) {
  document.querySelector('.i-6').value += event.key.toLowerCase()
  return false
}

document.querySelector('.i-6').onkeypress = t6

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function t7() {
  const a7 = [12, 222, 56, 21, 'text', true]
  const randomIndex = getRandomIntInclusive(0, a7.length - 1)
  document.querySelector('.out-7').textContent = a7[randomIndex]
}

document.querySelector('.i-7').onkeypress = t7

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(event) {
  let outSym = event.key
  if (outSym === 'i') outSym = 1
  if (outSym === 'o') outSym = 0
  if (outSym === 'l') outSym = 7
  document.querySelector('.out-8').textContent = outSym
}

document.querySelector('.i-8').onkeypress = t8

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let counter = 0

function t9(event) {
  if (event.key === 'ArrowDown') counter++
  document.querySelector('.out-9').textContent = counter
}

document.querySelector('.i-9').onkeydown = t9

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

const pic = document.querySelector('.div-10 img')

function t10(event) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    pic.width = pic.offsetWidth
    pic.height++
  }
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    pic.height = pic.offsetHeight
    pic.width++
  }
}

document.querySelector('.i-10').onkeydown = t10

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

const keys = document.querySelectorAll('.line div')

function t11(event) {
  for (let item of keys) {
    item.classList.remove('active')
  }
  document.querySelector(`.line div[data-key="${event.key}"]`).classList.add('active')
}

document.querySelector('.i-11').onkeydown = t11
