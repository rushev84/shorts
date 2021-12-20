<?php

class CShop implements Controller
{
    // зависимость не от конкретных классов, а от интерфейсов (5-й принцип SOLID)
    // здесь нам нужна модель. Какая она придёт, мы не знаем, но главное, чтобы она соответствовала интерфейсу Model
    protected Model $model;
    protected Storage $session;

    public function __construct(Model $model, Storage $session)
    {
        $this->model = $model;
        $this->session = $session;
        $this->session->set('test', mt_rand(1, 5));
    }

    public function run()
    {
        $articles = $this->model->all();

        echo '<h1>Shop page</h1>';

        foreach ($articles as $art) {
            echo "<hr><h2>{$art['title']}</h2>";
        }

        $val = $this->session->get('test');
        echo "<div>By all courses now!!!! - $val</div>";
    }
}

