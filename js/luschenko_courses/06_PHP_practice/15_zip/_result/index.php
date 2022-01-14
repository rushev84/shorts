<?php require_once './function.php' ?>
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
        <p>Создать функцию t1, которая создает 1.zip и добавляет в него файл t1.txt.</p>
        <?php
           t1();
        ?>
    </section>
    <section>
        <p><b>Task 2.</b></p>
        <p>Создать функцию t2, которая выводит размер файла t1.txt, создает архив 2.zip и выводит размер файла 2.zip.</p>
        <?php
           t2();
        ?>
    </section>
    <section>
        <p><b>Task 3.</b></p>
         <p>Создать функцию t3, которая создает 3.zip и добавляет в него t1.txt и файл images/flash.png.</p>
        <?php
           t3();
        ?>
    </section>
    <section>
        <p><b>Task 4.</b></p>
        <p>Создайте функцию t4, которая создает архив 4.zip, и добавьте внутрь него файл t1.txt причем в архиве он должен быть в папке one.</p>
        <?php
        t4();
        ?>
    </section>
    <section>
        <p><b>Task 5.</b></p>
        <p>Создайте функцию t5, которая принимает параметр - имя архива и имя папки, и распаковывает архив в указанную папку. </p>
        <?php
        $arc = '4.zip';
        $folder = '4_unzip';
       t5($arc, $folder);
        ?>
    </section>

   
</div>
</body>
</html>
