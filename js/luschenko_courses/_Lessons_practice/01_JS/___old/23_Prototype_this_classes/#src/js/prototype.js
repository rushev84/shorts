const Animal = function (options) {
  this.name = options.name
  this.color = options.color

  // this.voice = function () {
  //   console.log('Base voice from', this.name)
  // }
}

Animal.prototype.voice = function () {
  console.log('Base voice from', this.name)
}

const dog = new Animal({ name: 'Rex', color: '#fff' })

dog.voice()
