let goods = new Goods()
console.log(goods)

let goods2 = new Goods('Мотоцикл', 10000, 'bike.jpg', 20)
goods2.draw('.out-4')

let goods3 = new Goods2('Машина', 50000, 'car.jpg', 10)
goods3.draw('.out-6')

let userAuthorize = new Valid('user@yandex.ru', '12345')
userAuthorize.validate()

let userAuthorize2 = new Valid('user@yandex.ru', '1234567')
userAuthorize2.validate()

let valid2 = new Valid2('', 'abcdef345')
valid2.validate()
console.log(valid2)

let valid3 = new Valid2('user@mail.ru', 'abcdef345')
valid3.validate()
console.log(valid3)
