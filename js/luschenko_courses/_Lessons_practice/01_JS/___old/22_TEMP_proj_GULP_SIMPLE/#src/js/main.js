let a = {
  text: 'Hello',
  color: 'red',
}

let b = {
  fontSize: '24px',
  __proto__: a,
}

let c = {
  fontFamily: 'Verdana',
  __proto__: b,
}

console.log(c)
console.log(c.fontSize)
