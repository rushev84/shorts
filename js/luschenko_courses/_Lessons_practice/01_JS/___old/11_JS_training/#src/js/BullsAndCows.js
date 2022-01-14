// Bulls and Cows

let randomNumber = []

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //Максимум и минимум включаются
}
// Заполнение массива случайными числами
for (i = 0; i < 4; i++) {
  let num = getRandomIntInclusive(0, 9)
  randomNumber.push(num)
}

console.log(randomNumber)
