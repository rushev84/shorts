// Scope - то, что говорит о доступности переменных в коде (область видимости)
// window, document - локальный scope

function funcA() {
  let a = 1
  function funcB() {
    let b = 2
    function funcC() {
      let c = 3
      console.log('funcC:', a, b, c) //funcC: 1 2 3
    }
    funcC()
    console.log('funcB:', a, b) //funcB: 1 2
  }
  funcB()
  console.log('funcA:', a) //funcC: 1
}

funcA()
