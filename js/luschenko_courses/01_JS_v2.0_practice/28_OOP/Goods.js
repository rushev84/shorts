class Goods {
  constructor(name, amount, image, count) {
    this.name = name
    this.amount = amount
    this.image = image
    this.count = count
  }
  draw(out) {
    document.querySelector(out).innerHTML = `
      <img src="img/${this.image}"><br>
      ${this.name}<br>
      <b>${this.amount}</b> руб.
      `
  }
}
