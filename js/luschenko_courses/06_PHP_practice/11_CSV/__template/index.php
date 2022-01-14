<?php require_once './function.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Practics. Unit 11</title>
    <link rel="stylesheet" href="css/mustard-ui.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <h1>Unit 11. Чтение и запись CSV файлов</h1>
    <h2><a href="https://itgid.info/course/php" target="_blank">PHP Практический. Stage 2 - курс Лущенко
            Александра</a></h2>
    <section>
        <p><b>Task 1.</b></p>
        <p>Создать функцию t1, которая выводит содержимое файла book1.csv на страницу. Формат вывода - элементы строки через пробел, строки - через br.</p>
        <?php
            echo '<pre>';
            t1();
            echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 2.</b></p>
        <p>Создать функцию t2, которая принимает параметр - путь к файлу csv и возвращает его содержимое преобразованное в массив.</p>
        <?php
        echo '<pre>';
        print_r(t2('./one/book1.csv'));
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 3.</b></p>
        <p>Создать функцию t3, принимает парамет - путь к файлу CSV и возвращает только элементы колонки color через пробел. Т.е. строку типа red green blue.</p>
        <?php
        echo '<pre>';
        echo(t3('./one/book2.csv'));
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 4.</b></p>
        <p>Создать функцию t4, которая принимает параметр - массив и имя ( расположение) файла. Создает файл CSV и записывает в него массив.</p>
        <?php
        echo '<pre>';
        $arr = [ [4,5,6], [7,8,9]];
        t4($arr, './one/book3.csv');
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 5.</b></p>
        <p>Создать функцию t5, которая принимает параметр - путь к файлу CSS и возвращает количество строк в нем.</p>
        <?php
        echo '<pre>';
        echo(t5('./one/book2.csv'));
        echo '</pre>';
        ?>
    </section>


</div>
</body>
</html>
