function myFunc(callback) {
  const arr1 = [1, 2, 3]
  let element = document.querySelector('.out-1')
  callback(element, arr1)
  // out(element, arr1)
}

function out(elem, arr) {
  elem.textContent = arr.join(' ')
}

function out2(elem, arr) {
  elem.textContent = arr.join('-')
}

myFunc(out2) // маневр - можно и out, можно и out2

// пример с fetch

function getCats(callbackCat) {
  fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      callbackCat(data)
    })
}

function showCats(dataCat) {
  dataCat.forEach((item) => console.log(item.text))
}
function showCats2(dataCat) {
  dataCat.forEach((item) => (document.querySelector('.out-2').innerHTML += item.text + '<br>'))
}

getCats(showCats)
getCats(showCats2)
