class Goods2 extends Goods {
  constructor(name, amount, image, count) {
    super(name, amount, image, count)
    this.sale = true
  }
  draw(out) {
    let saleOut = ''
    this.sale ? (saleOut = 'да') : (saleOut = 'нет')
    document.querySelector(out).innerHTML = `
      <img src="img/${this.image}"><br>
      ${this.name}<br>
      <b>${this.amount}</b> руб.<br>
      Участие в распродаже: ${saleOut}
      `
  }
}
