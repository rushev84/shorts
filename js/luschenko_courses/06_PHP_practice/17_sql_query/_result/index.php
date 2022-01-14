<?php
require_once 'config.php';
require_once 'db_function.php';
require_once 'function.php';
$conn = connect();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Practics. Unit 15</title>
    <link rel="stylesheet" href="css/mustard-ui.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <h1>Unit 15. Работа с zip</h1>
    <h2><a href="https://itgid.info/course/php" target="_blank">PHP Практический. Stage 2 - курс Лущенко
            Александра</a></h2>
    <section>
        <p><b>Task 1.</b></p>
        <p>Выполняется не в шаблоне! Смотрите сайт.</p>
    </section>
    <section>
        <p><b>Task 2.</b></p>
        <p>Обратите внимание на изменение структуры шаблона ДЗ. Появились файлы db_function - который содержит функции из урока. Появился файл config.php - который содержит настройки подключения к базе. Кстати, вам нужно внести в него изменения согластно вашему имени пользователя и паролю.</p>
        <p>Все файлы перечисленные выше подключены и ими можно пользоваться.</p>
        <p>Все задания данного юнита мы выполняем в базе данных php_17 и таблице cars. SQL дамп данной базы и таблицы - в файле cars.sql.</p>
        <p>Ну а теперь - само задание. Напишите функцию t2, которая возвращает все записи из таблицы cars. Запрос query - пишите внутри функции t2.</p>
        <p>ОБРАТИТЕ ВНИМАНИЕ! Для удобства работы все запуски функций будут закомментированы. Вы их раскомментируете на момент работы - если необходимо! Перед сдачей работы - закомментируйте вызовы функций.</p>
        <pre><code>
        <?php
//           print_r(t2());
        ?></code>
        </pre>
    </section>
    <section>
        <p><b>Task 3.</b></p>
        <p>Напишите функцию t3, которая возвращает массив строк из cars, стоимость авто которых больше 100 000. </p>
        <pre><code>
        <?php
//        print_r(t3());
        ?></code>
        </pre>
    </section>
    <section>
        <p><b>Task 4.</b></p>
        <p>Создайте функцию t4, которая возвращает только имена (name) машин. т.е. должены быть возвращен массив ['Audi Q8 RS', 'McLaren 650S' и т.д]. Массив должен быть одномерным. Индексы - с нуля.</p>
        <pre><code>
        <?php
//        print_r(t4());
        ?></code>
        </pre>
    </section>
    <section>
        <p><b>Task 5.</b></p>
        <p>Создайте функцию t5, которая добавляет новый автомобиль 'Cadillac Escalade Platinum' стоимость 47777, ссылка на изображение http://elite.cars.ua/img/upload/cache/zc-1_iar-1_h-357_w-570_5ecd1aa8a55af0_68546755.jpg</p>
        <pre><code>
        <?php
//        var_dump(t5());
        ?></code>
        </pre>
    </section>
    <section>
        <p><b>Task 6.</b></p>
        <p>Создайте функцию t6, которая обновляет запись о автомобиле 'Cadillac Escalade Platinum' и зменяет имя на 'Cadillac Escalade' и стоимость на 47500. </p>
        <pre><code>
        <?php
//       var_dump(t6());
        ?></code>
        </pre>
    </section>
    <section>
        <p><b>Task 7.</b></p>
        <p>Создайте функцию t7, которая обновляет все записи о автомобилях, цена которых лежит от 100000 до 200000. Обновление заключается в снижении цены на 2800. </p>
        <pre><code>
        <?php
//        var_dump(t7());
        ?></code>
        </pre>
    </section>
    <section>
        <p><b>Task 8.</b></p>
        <p>Создайте функцию t8, которая возвращает стоимость всех автомобилей в базе. Т.е. одно число - сумму стоимостей. </p>
        <pre><code>
        <?php
//        echo t8();
        ?></code>
        </pre>
    </section>
    <section>
        <p><b>Task 9.</b></p>
        <p>Создайте функцию t9, которая возвращает массив где ключ - название, а значение - стоимость. Т.е. массив вида</p>
        <p>['McLaren 650S' => 1700000, 'BMW 550 M'=> 65000 .... Обратите внимание, что цены будут отличаться после выполнения предыдущих функций.</p>
        <pre><code>
        <?php
//         print_r ( t9());
        ?></code>
        </pre>
    </section>
    <section>
        <p><b>Task 10.</b></p>
        <p>Создайте функцию t10, которая удаляет запись с именем Cadillac Escalade.</p>
        <pre><code>
        <?php
//         var_dump( t10());
        ?></code>
        </pre>
    </section>
</div>
</body>
</html>
