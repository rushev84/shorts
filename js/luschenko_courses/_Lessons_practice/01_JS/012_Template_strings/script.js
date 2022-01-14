// 1. В шаблонных строках строка определяется с помощью обратных кавычек (back-ticks)

const text1 = `Itgid.info`

// 2. Применение кавычек. При обычных кавычках одинарные или двойные приходится экранировать (\'слово\')

// 3. Мультистроки

// 4. Интерполяция ${num}, ${num + 100 + Math.random()}

// 5. HTML-шаблоны

const header = 'Шаблонные строки'
const elements = ['1 пункт', '2 пункт', '3 пункт']

let html = `<h1>${header}</h1><ul>`

for (const elem of elements) {
  html += `<li>${elem}</li>`
}
html += `</ul>`

document.querySelector('.out').innerHTML = html
