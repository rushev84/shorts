<?php

class CHome
{
    protected MArticles $model;

    public function __construct()
    {
        // Так делать нельзя!
        // Класс CHome создаёт экземпляр другого класса (MArticles) в своём конструкторе
        // У нас контроллер жёстко завязан на модели и поэтому тестировать его не получится
        $this->model = new MArticles();
    }

    public function run()
    {
        $articles = $this->model->all();

        echo '<h1>Home page</h1>';

        foreach ($articles as $art) {
            echo "<hr><h2>{$art['title']}</h2>";

        }
    }
}

