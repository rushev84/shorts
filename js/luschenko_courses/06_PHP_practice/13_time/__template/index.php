<?php require_once './function.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Practics. Unit 10</title>
    <link rel="stylesheet" href="css/mustard-ui.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <h1>Unit 10. Работа с файлами</h1>
    <h2><a href="https://itgid.info/course/php" target="_blank">PHP Практический. Stage 2 - курс Лущенко
            Александра</a></h2>
    <section>
        <p><b>Task 1.</b></p>
        <p>Создать функцию t1, возвращает текущее время unix.</p>
        <?php
            echo '<pre>';
            echo(t1());
            echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 2.</b></p>
        <p>Создать функцию t2, возвращает текущий день недели в формате Sun, Mon...</p>
        <?php
        echo '<pre>';
        echo(t2());
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 3.</b></p>
        <p>Создать функцию t3, возвращает 1 или 0 в зависимости от того является год високосным или нет. Функция принимает год в качестве параметра.</p>
        <?php
        echo '<pre>';
        echo(t3(2006));
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 4.</b></p>
        <p>Создать функцию t4, которая возвращет номер текущего месяца с ведущим нулем.</p>
        <?php
        echo '<pre>';
        echo(t4());
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 5.</b></p>
        <p>Создать функцию t5, которая возвращает дату в формате 2020-03-14 22:45. Дата и время - текущее.</p>
        <?php
        echo '<pre>';
        echo(t5());
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 6.</b></p>
        <p>Создать функцию t6, которая возвращает время полуночи текущего дня в unixtime.</p>
        <?php
        echo '<pre>';
        echo(t6());
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 7.</b></p>
        <p>Создать функцию t7 которая принимает номер месяца от 1 до 12 и выводит unixtime полночи первого дня принятого месяца.</p>
        <?php
        echo '<pre>';
        t7( 5);
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 8.</b></p>
        <p>Создать функцию t8 которая принимает дату в unixtime и возвращает 1 если сегодня суббота или воскресенье и 0 в противном случае.</p>
        <?php
        echo '<pre>';
        echo(t8(1592404218));
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 9.</b></p>
        <p>Создать функцию t9, которая принимает дату рождения в формате 2000 Jan 1 и возвращает количество прожитых дней. </p>
        <?php
        echo '<pre>';
        echo(t9( '2001 Jan 23'));
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 10.</b></p>
        <p>Создать функцию t10, которая возвращает показывает время в секундах прошедших с начала текущего года.</p>
        <?php
        echo '<pre>';
        echo(t10());
        echo '</pre>';
        ?>
    </section>
    

</div>
</body>
</html>
