const base = document.querySelector('.base')

// append
let div = document.createElement('div')
div.textContent = 'append'
div.classList.add('append')

base.append(div)

// prepend
let div1 = document.createElement('div')
div1.textContent = 'prepend'
div1.classList.add('prepend')

base.prepend(div1)

// before
let div2 = document.createElement('div')
div2.textContent = 'before'
div2.classList.add('before')

base.before(div2)

// after
let div3 = document.createElement('div')
div3.textContent = 'after'
div3.classList.add('after')

base.after(div3)

// // replaceWith
// let div4 = document.createElement('div')
// div4.textContent = 'replace'
// div4.classList.add('replace')

// base.replaceWith(div4)

// // remove

// div4.remove()
