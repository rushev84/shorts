<?php

// Сделав рефакторинг, мы создали интерфейс Worker, кот. указывает, что каждый конкретный тип работника должен иметь свою функцию make_sum(). Таким образом отпала необходимость указывать в каждом классе тип работника, а так же не нужно в foreach не нужны условные конструкции, достаточно вызывать нужный метод у каждого передаваемого объекта.

interface Worker
{
    public function make_sum();
}

class Dev implements Worker
{
    public $cost;

    public function __construct($cost)
    {
        $this->cost = $cost;
    }

    public function make_sum()
    {
        return $this->cost * 5;
    }
}

class Manager implements Worker
{
    public $cost;

    public function __construct($cost)
    {
        $this->cost = $cost;
    }

    public function make_sum()
    {
        return $this->cost * 3;
    }
}

class ProjectManager implements Worker
{
    public $cost;

    public function __construct($cost)
    {
        $this->cost = $cost;
    }

    public function make_sum()
    {
        return $this->cost * 7;
    }
}

class CostsCalculator
{
    public $workers = [];

    public function __construct($workers)
    {
        $this->workers = $workers;
    }

    public function sum()
    {
        $all_cost = 0;

        foreach ($this->workers as $worker) {
            $all_cost += $worker->make_sum();
        }

        return $all_cost;
    }
}

$calculator = new CostsCalculator([
    new Dev(4000),
    new Manager(2000),
    new ProjectManager(3000)
]);

echo $calculator->sum();