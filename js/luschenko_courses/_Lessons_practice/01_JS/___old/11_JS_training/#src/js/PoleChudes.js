// создаём массив со словами
let words = ['арбуз', 'персик', 'яблоко', 'банан']
// выбираем случайное слово
let word = words[Math.floor(Math.random() * words.length)]
// создаём итоговый массив
let answerArray = []
// заполняем его подчёркиваниями
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_'
}
// количество оставшихся для отгадывания букв
let remainingLetters = word.length

// ИГРОВОЙ ЦИКЛ
while (remainingLetters > 0) {
  // основной код
  // показываем состояние игры
  // объединяем все элементы массива в строку, разделяя каждую букву пробелом
  alert(answerArray.join(' '))

  // ЗАПРАШИВАЕМ ВАРИАНТ ОТВЕТА
  let guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры')
  if (guess === null) {
    // выходим из игрового цикла
    break
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите только одну букву')
  } else {
    // обновляем состояние игры
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess
        remainingLetters--
      }
    }
  }
}
// Отображаем ответ и поздравляем игрока
alert(answerArray.join(' '))
alert('Отлично! Было загадано слово ' + word)
