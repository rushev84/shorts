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


