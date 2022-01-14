const srcData = {
  digit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  bool: [true, false],
  symbolLow: 'abcdefghijklmnopqrstuvwxyz',
  symbolUp: 'ABCDEFGHIJKLMNOPQRSTUVWZYZ',
}

const getRandomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

const arrayGenerator = (num = 5, params = ['digit']) => {
  let t = []
  let result = []
  params.forEach((item) => {
    if (srcData[item] !== undefined) t = [...t, ...srcData[item]]
  })
  console.log(t)
  for (let i = 0; i < num; i++) {
    result.push(t[getRandomInteger(0, t.length - 1)])
  }
  return result
}

console.log(arrayGenerator(10, ['digit', 'bool']))
