<?php require_once './function.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Practics. Unit 12</title>
    <link rel="stylesheet" href="css/mustard-ui.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <h1>Unit 12. Чтение и запись JSON файлов</h1>
    <h2><a href="https://itgid.info/course/php" target="_blank">PHP Практический. Stage 2 - курс Лущенко
            Александра</a></h2>
    <section>
        <p><b>Внимание!</b> В данном задании мы работаем с JSON файлами. Для проверки валидности полученных, созданных файлов рекомендую сервис - <a href="https://tools.icoder.uz/json-validator.php" target="_blank">Validate JSON</a>. Для валидации загружаете файл через кнопку "Загрузить из файла" и нажимаете "Проверить".</p>
        <p><b>Task 1.</b></p>
        <p>Создать функцию t1, которая выводит содержимое файла book1.json на страницу. Формат вывода - элементы строки через пробел, строки - через br.</p>
        <p>Ожидаю такой вывод:</p>
        <pre><code>hi 1
two 2
four 4</code></pre>
        <p><b>Ваш вывод:</b></p>
        <?php
            echo '<pre>';
            t1();
            echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 2.</b></p>
        <p>Создать функцию t2, которая принимает параметр - путь к файлу json и возвращает его содержимое преобразованное в массив.</p>
        <?php
        echo '<pre><code>';
        print_r(t2('./one/book2.json'));
        echo '</code></pre>';
        ?>
    </section>
    <section>
        <p><b>Task 3.</b></p>
        <p>Создать функцию t3, принимает парамет - путь к файлу json и возвращает только элементы колонки name через пробел. Т.е. строку типа red green blue.</p>
        <?php
        echo '<pre>';
        echo(t3('./one/book2.json'));
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 4.</b></p>
        <p>Создать функцию t4, которая принимает параметр - массив и имя ( расположение) файла. Создает файл json и записывает в него массив. Вывод на страницу (или то, что возвращате функция) здесь не важен. Важно появление файла в папке one.</p>
        <?php
        echo '<pre>';
        $arr = [[4,5,6], [7,8,9]];
        t4($arr, './one/book3.json');
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 5.</b></p>
        <p>Создать функцию t5, которая принимает параметр - путь к файлу json и возвращает количество записей в нем ( В данном примере ожидаю число 3 в выводе).</p>
        <?php
        echo '<pre>';
        echo(t5('./one/book1.json'));
        echo '</pre>';
        ?>
    </section>


</div>
</body>
</html>
