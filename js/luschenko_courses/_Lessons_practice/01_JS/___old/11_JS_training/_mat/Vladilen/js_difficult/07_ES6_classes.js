// классы ES6
/*
const animal = {
  name: 'Animal',
  age: 5,
  hasTail: true,
}
*/

// есть более удобный синтаксис
/*
class Animal {
  // статические методы или переменные
  static type = 'ANIMAL'
  // в консоли обращаемся animal.type - получается undefined
  // если переменная статическая, она доступна только у самого класса
  // в консоли обращаемся Animal.type - получается "ANIMAL"

  constructor(options) {
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }

  // методы класса
  voice() {
    console.log('I am Animal!')
  }
  // при вызове animal в консоли метод voice() есть в прототипе
}

const animal = new Animal({
  name: 'Animal',
  age: 5,
  hasTail: true,
})

// Классы удобны потому, что мы можем устраивать полноценное наследование

class Cat extends Animal {
  static type = 'CAT'

  // присваиваем цвет только для кошек
  constructor(options) {
    // вызываем конструктор родительского класса
    super(options)
    this.color = options.color
  }

  // переписываем родительские методы
  voice() {
    // но можно вызвать и родительский метод
    super.voice()
    console.log('I am cat')
  }

  get ageInfo() {
    return this.age * 7
    // в коносли cat.ageInfo -> 49
  }

  set ageInfo(newAge) {
    this.age = newAge
    // в консоли cat.ageInfo = 8 ->
    // 8
    // cat.ageInfo ->
    // 56
  }
}

const cat = new Cat({
  name: 'Cat',
  age: 7,
  hasTail: true,
  color: 'black',
})

// в консоли cat.voice() - получаем I am Animal!

*/

// Классы на практике

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  hide() {
    this.$el.style.display = 'none'
  }

  show() {
    this.$el.style.display = 'block'
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector)
    this.$el.style.width = this.$el.style.height = options.size + 'px'
    this.$el.style.color = options.color
  }
}

const box1 = new Box({
  selector: '#box1',
  size: 100,
  color: 'red',
})
