<?php

class CShop
{
    protected MArticles $model;

    public function __construct()
    {
        $this->model = new MArticles();
        Session::set('test', mt_rand(1, 5));
    }

    public function run()
    {
        $articles = $this->model->all();

        echo '<h1>Shop page</h1>';

        foreach ($articles as $art) {
            echo "<hr><h2>{$art['title']}</h2>";
        }

        $val = Session::slice('test');
        echo "<div>By all courses now!!!! - $val</div>";
    }
}

