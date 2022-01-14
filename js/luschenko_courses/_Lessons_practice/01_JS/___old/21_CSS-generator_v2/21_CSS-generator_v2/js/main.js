/*
Алгоритм работы

1. Инициализация DOM-элементов (рэнджи, поля дивов, куб, кнопка и поле вывода значения border-radius)
2. Создаём функцию, формирующую строку
3. Создаём функцию, меняющую радиус куба (и байндим в ней инпуты и поля дивов)
4. Создаём функцию для вывода значения border-radius в поле
5. Вешаем обработчики на инпуты и кнопку


*/

const rangeIdArr = ['#range1', '#range2', '#range4', '#range3']
let rangeElArr = []

const resultIdArr = ['#result1', '#result2', '#result4', '#result3']
let resultElArr = []

for (let i = 0; i < 4; i++) {
  rangeElArr[i] = document.querySelector(rangeIdArr[i])
  resultElArr[i] = document.querySelector(resultIdArr[i])
}

const input = document.querySelectorAll('.input')
const cube = document.querySelector('#cube')

const total = document.querySelector('#totalResult')
const btn = document.querySelector('#btn')

function createString(pixelStr) {
  let str = ''
  for (let i = 0; i < 4; i++) {
    str += rangeElArr[i].value + pixelStr
  }
  return str
}

const changeRadius = () => {
  for (let i = 0; i < 4; i++) {
    resultElArr[i].innerHTML = rangeElArr[i].value
  }

  cube.style.borderRadius = createString('px ')
}

const getTotalResult = () => {
  total.innerHTML = createString(' ')
}

for (node of input) {
  node.addEventListener('input', changeRadius)
}

btn.addEventListener('click', getTotalResult)

/*

// Inputs Ranges

const rangeTl = document.querySelector('#tlr')
const rangeTr = document.querySelector('#trr')
const rangeBl = document.querySelector('#blr')
const rangeBr = document.querySelector('#brr')

console.log(rangeBl)

// Inputs Results

const resultTl = document.querySelector('#result-tlr')
const resultTr = document.querySelector('#result-trr')
const resultBl = document.querySelector('#result-blr')
const resultBr = document.querySelector('#result-brr')

const input = document.querySelectorAll('.input')
const cube = document.querySelector('#cube')

const total = document.querySelector('#totalResult')
const btn = document.querySelector('#btn')

const changeRadius = () => {
  resultTl.innerHTML = rangeTl.value
  resultTr.innerHTML = rangeTr.value
  resultBl.innerHTML = rangeBl.value
  resultBr.innerHTML = rangeBr.value

  cube.style.borderRadius =
    rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px'
}

const totalResult = () => {
  total.innerHTML =
    rangeTl.value + ' ' + rangeTr.value + ' ' + rangeBl.value + ' ' + rangeBl.value + ' '
}

for (node of input) {
  node.addEventListener('input', changeRadius)
}

btn.addEventListener('click', totalResult)


*/
