<?php require_once './function.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Practics. Unit 14</title>
    <link rel="stylesheet" href="css/mustard-ui.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <h1>Unit 14. Работа с изображениями</h1>
    <h2><a href="https://itgid.info/course/php" target="_blank">PHP Практический. Stage 2 - курс Лущенко
            Александра</a></h2>
    <section>
        <p><b>Task 1.</b></p>
        <p>Создать функцию t1, которая на основе blank.png создает изображение и добавляет на него текст в формате - 2020-07-02 (год-месяц-день). Шрифт - Georgia ( 9605.ttf). Во всех остальных задачах - шрифт такой же. 
        Шрифт размером 40pt, размещение на исходном изображении - произвольное. Цвет - красный. Имя результирующего файла - task_1.png. Размещение - в текущей папке (все файлы в дальнейшем располагаются тут же). </p>
        <p>Обратите внимание - перед упаковкой ДЗ все результирующие файлы должны быть удалены!</p>
        <?php
           t1();
        ?>
        <div>
        <img src="task_1.png" alt="" style="display: block;max-width: 80%;margin: 30px auto;">
        </div>
    </section>
    <section>
        <p><b>Task 2.</b></p>
        <p>Создать функцию t2, которая на основе blank.png создает изображение и добавляет на него файл flash.png - добавленное изображение должно располагаться по правому краю исходного blank.png. Результат - файл task_2.png.</p>
        <?php
           t2();
        ?>
          <div>
        <img src="task_2.png" alt="" style="display: block;max-width: 80%;margin: 30px auto;">
        </div>
    </section>
    <section>
        <p><b>Task 3.</b></p>
         <p>Создать функцию t3, которая на основе blank.png добавляем изображения flash.png, spider.png, thor.png. Результат - файл task_3.png.</p>
        <?php
           t3();
        ?>
          <div>
        <img src="task_3.png" alt="" style="display: block;max-width: 80%;margin: 30px auto;">
        </div>
    </section>
    <section>
        <p><b>Task 4.</b></p>
        <p>Создать функцию t5, которая создает изображение на основе blank.png и добавляем на него текст - 'hello' с углом поворота 45 градусов, цвет черный, размер 36. И добавляет изображение thor.png. Результат task_4.png</p>
        <?php
        t4();
        ?>
          <div>
        <img src="task_4.png" alt="" style="display: block;max-width: 80%;margin: 30px auto;">
        </div>
    </section>
    <section>
        <p><b>Task 5.</b></p>
        <p>Создать функцию t5, которая создает НОВОЕ изображение png размером 300 на 300px. Смотрим команду imagecreatetruecolor. Добавьте в созданное изображение, рисунок flash.png с отступами 22px. Результат - task_5.png </p>
        <?php
       t5();
        ?>
          <div>
        <img src="task_5.png" alt="" style="display: block;max-width: 80%;margin: 30px auto;">
        </div>
    </section>

    <section>
        <p><b>Task 6.</b></p>
        <p>Создать функцию t6, которая cоздает jpeg изображение размером 256 на 512px (512 - ширина) и добавляет туда текст - "hello jpeg". Цвет черный, размер 50. Сохраняет изображение под именем task_6.jpg.</p>
        <?php
       t6();
        ?>
          <div>
        <img src="task_6.jpg" alt="" style="display: block;max-width: 80%;margin: 30px auto;">
        </div>
    </section>

    
    

</div>
</body>
</html>
