<?php require_once './function.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Practics. Unit 06</title>
    <link rel="stylesheet" href="css/mustard-ui.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <h1>Unit 06. Функции в PHP</h1>
    <h2><a href="https://itgid.info/course/php" target="_blank">PHP Практический. Stage 2 - курс Лущенко
            Александра</a></h2>
    <section>
        <p><b>Task 1.</b></p>
        <?php
        // Task 2
        // Функция t1 дожна принимать 2 параметра и присваивает переменной $out1 сумму этих параметров. Также выводит $out1 на экран.
        $a = 5;
        $b = 22;
        $out1 = '';
        t1($a, $b); // запускаем функцию

        ?>
    </section>
    <section>
        <p><b>Task 2.</b></p>
        <?php
        // Task 2
        // Сделаем t1 более универсальной. Пусть t2 принимает два параметра и возвращает их сумму. Обратите внимание,
        // если в задании говорится "возвращать" - вы всегда используете return.
        // обратите внимание на то, как теперь я вывожу реультат - внутри функции echo уже не нужен.
        $a = 22;
        $b = 38;
        echo t2($a, $b);

        ?>
    </section>
    <section>
        <p><b>Task 3.</b></p>
        <?php
        // Task 3
        // Функция t3 должна принимать 2 параметра (числа) и возвращать большее число.
        $a = 22;
        $b = 38;
        echo t3($a, $b);

        ?>
    </section>
    <section>
        <p><b>Task 4.</b></p>
        <?php
        // Task 4
        // Функция t4 принимает параметр строку. Например '  hello ' и возвращет строку очищенную от пробелов.
        // Для очистки используйте функцию trim.
        // Убедиться в том что произошла очистка от пробелов можно посчитав длину строки до и после.
        $str = '  hi mahai   ';  // после очистки получим 'hi mahai'
        echo 'Длина до очистки: '.strlen($str).'<br>';
        $newStr = t4($str);
        echo 'Новая строка: '.$newStr.'<br>';
//        echo 'Длина после очистки: '.strlen($newStr).'<br>';

        ?>
    </section>
    <section>
        <p><b>Task 5.</b></p>
        <?php
        // Task 5
        // Функция t5 принимать число и возвращать true если число четное и false если нет.
        $n = 5;
        var_dump( t5($n) );
        ?>
    </section>

    <section>
        <p><b>Task 6.</b></p>
        <?php
        // Task 6
        // Функция t6 должна принимать строку пароля и возвращать 1 если длина больше или равна 6 и 0 в другом случае.
        $password = 'caCADBbaC!';
        echo t6($password);

        ?>
    </section>

    <section>
        <p><b>Task 7.</b></p>
        <?php
        // Task 7
        // Функция t7 принимать год рождения пользователя и возвращать количество лет.
        // Для получения текущего года используйте date("Y")
        $year = 1990;
        echo t7($year);

        ?>
    </section>

    <section>
        <p><b>Task 8.</b></p>
        <?php
        // Task 8
        // Функция t8 должна принимать строку - название сайта и возвращать строку следующего вида:
        // 2020 &copy; введенная_строка
        // Причем год - генерируете автоматически.
        $s = 'Pupkin dumping';
        echo t8($s);

        ?>
    </section>

</div>
</body>
</html>
