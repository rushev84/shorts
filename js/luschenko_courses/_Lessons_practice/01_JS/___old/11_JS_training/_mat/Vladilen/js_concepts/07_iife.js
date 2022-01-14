// Immediate Invoked Function Expression
// Моментально выполняющийся FE
// Мы можем создавать ф-ции, кот. будут моментально вызваны
/*
let result = []
for (var i = 0; i < 5; i++) {
  result.push(function () {
    console.log(i)
  })
}

result[2]() // 5
result[4]() // 5
*/
/*
for (var i = 0; i < 5; i++) {
  (function () {
    var j = i
    result.push(function(){console.log(j)})
  })()
}

result[2]() // 2
result[4]() // 4
*/
// примеры iife

var hi = (function (value) {
  console.log('hi', value)
})(10)
// hi 10

!(function (value) {
  console.log('hi', value)
})(20)
// hi 20

~(function (value) {
  console.log('hi', value)
})(30)
// hi 30

void (function (value) {
  console.log('hi', value)
})(40)
// hi 40

/*
function (value) {
  console.log('hi', value)
}(40)
*/
// не работает - ошибка
