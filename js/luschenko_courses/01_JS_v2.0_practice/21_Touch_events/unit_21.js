// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
  document.querySelector('.out-1').textContent = 'touch'
}

document.querySelector('.div-1').addEventListener('touchstart', t1)

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let counter = 0

function t2() {
  document.querySelector('.out-2').textContent = ++counter
}

document.querySelector('.div-2').addEventListener('touchstart', t2)

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

const out3 = document.querySelector('.out-3')

function t3(event) {
  if (event.target.classList.contains('div-3_1')) out3.textContent = 1
  if (event.target.classList.contains('div-3_2')) out3.textContent = 2
}

document.querySelector('.div-3_1').addEventListener('touchstart', t3)
document.querySelector('.div-3_2').addEventListener('touchstart', t3)

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function printToOut() {
  document.querySelector('.out-4').textContent = 'touch'
}

function t4() {
  document.querySelector('.div-4').addEventListener('touchstart', printToOut)
}

document.querySelector('.b-4').onclick = t4

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
  document.querySelector('.div-4').removeEventListener('touchstart', printToOut)
}

document.querySelector('.b-5').onclick = t5

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
  document.querySelector('.out-6').textContent = 'touchend'
}

document.querySelector('.div-4').addEventListener('touchend', t6)

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7(event) {
  event.target.style.backgroundColor = 'red'
}

document.querySelector('.div-7').addEventListener('touchstart', t7)

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function t8(event) {
  a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow']
  const randomColor = getRandomIntInclusive(0, a8.length - 1)
  event.target.style.backgroundColor = a8[randomColor]
}

document.querySelector('.div-8').addEventListener('touchstart', t8)

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {
  document.querySelector('.out-9').textContent = event.touches.length
}

document.querySelector('.div-9').addEventListener('touchstart', t9)

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let divWidth = document.querySelector('.div-10').offsetWidth

function t10() {
  document.querySelector('.div-10').style.width = ++divWidth + 'px'
}

document.querySelector('.div-10').addEventListener('touchmove', t10)

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {
  document.querySelector(
    '.out-11'
  ).textContent = `radiusX = ${event.changedTouches[0].radiusX}, radiusY = ${event.changedTouches[0].radiusY}`
}

document.querySelector('.div-11').addEventListener('touchstart', t11)

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min')
const imgMax = document.querySelector('.img-12-max')

let count = 0

function go(param) {
  images[count].classList.remove('active-img')
  switch (param) {
    case 'next':
      {
        count++
        if (count === images.length) count = 0
      }
      break
    case 'prev':
      {
        count--
        if (count < 0) count = images.length - 1
      }
      break
    case 'reset':
      count = 0
      break
  }
  images[count].classList.add('active-img')
  imgMax.src = `img/${count + 1}.png`
}

document.querySelector('.next').addEventListener('touchstart', () => {
  go('next')
})
document.querySelector('.next').addEventListener('click', () => {
  go('next')
})
document.querySelector('.prev').addEventListener('touchstart', () => {
  go('prev')
})
document.querySelector('.prev').addEventListener('click', () => {
  go('prev')
})
document.querySelector('.reset').addEventListener('touchstart', () => {
  go('reset')
})
document.querySelector('.reset').addEventListener('click', () => {
  go('reset')
})
