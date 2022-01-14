// Промисы
/*
console.log('Request data...')

setTimeout(() => {
  console.log('Preparing data...')

  const backendData = {
    server: 'aws',
    port: 2000,
    status: 'working',
  }

  setTimeout(() => {
    backendData.modified = true
    console.log('Data received', backendData)
  }, 2000)
}, 2000)
*/
// этот подход плох тем, что большая вложенность -
// коллбеки внутри коллбеков

// то же, но с промисами

const p = new Promise(function (resolve, reject) {})
