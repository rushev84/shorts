class Rectangle {
  width
  height

  constructor(w, h) {
    this.width = w
    this.height = h
  }

  calcArea() {
    return this.width * this.height
  }
}

const rect = new Rectangle(5, 6)

console.log(rect.calcArea())
