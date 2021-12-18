<?php

class CShop
{
    protected MArticles $model;

    public function __construct()
    {
        $this->model = new MArticles();
    }

    public function run()
    {
        $articles = $this->model->all();

        echo '<h1>Home page</h1>';

        foreach ($articles as $art) {
            echo "<hr><h2>{$art['title']}</h2>";
        }

        echo "<div>By all courses now!!!! - </div>";
    }
}

