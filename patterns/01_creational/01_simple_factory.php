<?php

/*
Простая фабрика

Аналогия

Допустим, вы строите дом и вам нужны двери. Будет бардак, если каждый раз, когда вам требуется дверь, вы станете вооружаться инструментами и делать её на стройплощадке. Вместо этого вы закажете двери на фабрике.

Вкратце

Простая фабрика просто генерирует экземпляр для клиента без предоставления какой-либо логики экземпляра.

Википедия

В объектно ориентированном программировании фабрикой называется объект, создающий другие объекты. Формально фабрика — это функция или метод, возвращающая объекты разных прототипов или классов из вызова какого-то метода, который считается новым.

Когда использовать?

Когда создание объекта подразумевает какую-то логику, а не просто несколько присваиваний, то имеет смысл делегировать задачу выделенной фабрике, а не повторять повсюду один и тот же код.

 */

interface Door
{
    public function getWidth(): float;

    public function getHeight(): float;
}

class WoodenDoor implements Door
{
    protected $width;
    protected $height;

    public function __construct(float $width, float $height)
    {
        $this->width = $width;
        $this->height = $height;
    }

    public function getWidth(): float
    {
        return $this->width;
    }

    public function getHeight(): float
    {
        return $this->height;
    }
}

class DoorFactory
{
    public static function makeDoor($width, $height): Door
    {
        return new WoodenDoor($width, $height);
    }
}

$door = DoorFactory::makeDoor(100, 200);
echo 'Width: ' . $door->getWidth();
echo '<br>';
echo 'Height: ' . $door->getHeight();


// Ещё реальный пример

class Order
{
    public static function create()
    {
        //
    }
}

final class OrderFactory
{
    public static function createOrder(int $price, int $quantity)
    {
        $currentUser = Auth::getCurrentUser();
        $basket = new Basket($currentUser);
        $userBasket = $basket->getBasket();

        return new Order($price, $quantity, $currentUser, $userBasket);
    }


}

// Почему бы не делать объект заказа напрямую, зачем оборачивать его в доп. класс? Тут несколько причин. Первая - в большом интернет-магазине создание объекта Order происходит в десятках мест, и в каждом нужно было бы писать следующий код:

$currentUser = Auth::getCurrentUser();
$basket = new Basket($currentUser);
$userBasket = $basket->getBasket();

$order = new Order(300, 5, $currentUser, $userBasket);
$order->create();

// Гораздо проще сделать ещё один слой абстракции и писать везде вот так:

OrderFactory::createOrder(300, 5)->create();

// Вторая причина. Допустим, менеджер подходит и говорит, что теперь работает с заказами с Amazon. Если не использовать Simple Factory, то в десятках мест кода придётся менять вызовы нового объекта, что ведёт к потенциальным багам. В нашем же случае достаточно в классе OrderFactory изменть последнюю строку вот так:

return new AmazonOrder($price, $quantity, $currentUser, $userBasket);

// и всё - пишем объект AmazonOrder и работаем всегда с ним. Строка ниже остаётся без изменений

OrderFactory::createOrder(300, 5)->create();