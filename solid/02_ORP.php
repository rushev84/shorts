<?php

// ORP - Open Closed Principle

class Dev
{
    public $type;

    public $cost;

    public function __construct($cost)
    {
        $this->type = 'dev';

        $this->cost = $cost;
    }
}

class Manager
{
    public $type;

    public $cost;

    public function __construct($cost)
    {
        $this->type = 'manager';

        $this->cost = $cost;
    }
}

class ProjectManager
{
    public $type;

    public $cost;

    public function __construct($cost)
    {
        $this->type = 'project_manager';

        $this->cost = $cost;
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
            if ($worker->type == 'dev') {
                $all_cost += $worker->cost * 5;
            } elseif ($worker->type == 'manager') {
                $all_cost += $worker->cost * 3;
            } elseif ($worker->type == 'project_manager') {
                $all_cost += $worker->cost * 7;
            }
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