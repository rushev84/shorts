<?php

// DIP - Dependency inversion principle
// Принцип гласит — «Зависимости внутри системы строятся на основе абстракций. Модули верхнего уровня не зависят от модулей нижнего уровня. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций». Данное определение можно сократить — «зависимости должны строится относительно абстракций, а не деталей».

class Customer
{
    private $currentOrder = null;

    public function buyItems()
    {
        if(is_null($this->currentOrder)){
            return false;
        }

        $processor = new OrderProcessor();
        return $processor->checkout($this->currentOrder);
    }

    public function addItem($item){
        if(is_null($this->currentOrder)){
            $this->currentOrder = new Order();
        }
        return $this->currentOrder->addItem($item);
    }
    public function deleteItem($item){
        if(is_null($this->currentOrder)){
            return false;
        }
        return $this->currentOrder ->deleteItem($item);
    }
}

class OrderProcessor
{
    public function checkout($order){/*...*/}
}

// Всё кажется вполне логичным и закономерным. Но есть одна проблема — класс Customer зависит от класса OrderProcessor (мало того, не выполняется и принцип открытости/закрытости).
//Для того, чтобы избавится от зависимости от конкретного класса, надо сделать так чтобы Customer зависел от абстракции, т.е. от интерфейса IOrderProcessor. Данную зависимость можно внедрить через сеттеры, параметры метода, или Dependency Injection контейнера. Я решил остановится на 2 методе и получил следующий код.

class Customer2
{
    private $currentOrder = null;

    public function buyItems(IOrderProcessor $processor)
    {
        if(is_null($this->currentOrder)){
            return false;
        }

        return $processor->checkout($this->currentOrder);
    }

    public function addItem($item){
        if(is_null($this->currentOrder)){
            $this->currentOrder = new Order();
        }
        return $this->currentOrder->addItem($item);
    }
    public function deleteItem($item){
        if(is_null($this->currentOrder)){
            return false;
        }
        return $this->currentOrder ->deleteItem($item);
    }
}

interface IOrderProcessor
{
    public function checkout($order);
}

class OrderProcessor2 implements IOrderProcessor
{
    public function checkout($order){/*...*/}
}