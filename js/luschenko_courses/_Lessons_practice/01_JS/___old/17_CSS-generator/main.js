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
