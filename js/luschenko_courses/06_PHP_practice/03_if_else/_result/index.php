<?php require_once './function.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Practics. Unit 03</title>
    <link rel="stylesheet" href="css/mustard-ui.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <h1>Unit 03. УСЛОВНЫЙ ОПЕРАТОР IF..ELSE В PHP. ВЕТВЛЕНИЕ ПРОГРАММ</h1>
    <h2><a href="https://itgid.info/course/php" target="_blank">PHP Практический. Stage 2 - курс Лущенко
            Александра</a></h2>
    <section>
        <p><b>Task 1.</b></p>
        <?php
        // Task 1
        // Функция t1 дожна сравнить числа $a и $b и присвоить переменной $c большее число. Также вывести $c с помощью echo.
        $a = 5;
        $b = 22;
        $c = $a;

        t1(); // запускаем функцию


        ?>
    </section>
    <section>
        <p><b>Task 2.</b></p>
        <?php
        // Task 2
        // Даны две переменные $d, $e. Данные переменные генерируются при старте программы генератором случайных чисел.
        // Напишите функцию t2, которая выводит (echo) большее из этих двух чисел и присваивает большее число переменной $f.
        $d = rand(10, 20);
        $e = rand(10, 20);
        echo '$d = ' . $d . '<br>';
        echo '$e = ' . $e . '<br>';

        $f = $d;
        t2();

        ?>
    </section>
    <section>
        <p><b>Task 3.</b></p>
        <?php
        // Task 3
        // Даны две переменные  - $k, $l. Переменные $k и $l - генерируется случайным образом в диапазоне от 0 до 100.
        // Напишите функцию t3, которая путем сравнения и присвоения делает так, что в k лежит меньшее сгенерированное число, а в l большее.

        $k = rand(0, 100);
        $l = rand(0, 50);

        echo 'значение до $k=' . $k . '<br>';
        echo 'значение до $l=' . $l . '<br>';
        t3();

        echo 'значение после $k=' . $k . '<br>';
        echo 'значение после $l=' . $l . '<br>';

        ?>
    </section>
    <section>
        <p><b>Task 4.</b></p>
        <?php
        // Task 4
        // Даны две строки $s1 и $s2. Выведите в переменную $maxString и на экран большую по длине строки. Действия производится в t4.

        $s1 = '031a109b72';
        $s2 = 'C565D26Bc2cb';
        $maxString = $s1;

        t4();


        ?>
    </section>
    <section>
        <p><b>Task 5.</b></p>
        <?php
        // Task 5
        // $password - это случайная строка "как бы введенная пользователем". Функция t5 должна присваивать переменной $successPass
        // либо true либо false - в зависимости от длины пароля. Если длина больше либо равна 10 то true, в противном случае - false;

        $password = bin2hex(random_bytes(rand(2, 20)));
        $successPass = false;

        echo 'our pass: ' . $password;
        t5();

        ?>
    </section>

    <section>
        <p><b>Task 6.</b></p>
        <?php
        // Task 6
        // $r1 - случайное число от 1 до 10. Функция t6 должна присваивать в переменную $r2 и выводить 1 если число от 0 включительно до 4 включительно,
        // 2 если число от 5 включительно до 7 включительно и 3 если от 8 включительно до 10 включительно. Задачу решаем с помощью
        // if elseif else

        $r1 = rand(0, 10);
        echo '$r1 = ' . $r1 . '<br>';

        $r2 = 0;

        t6();

        ?>
    </section>

</div>
</body>
</html>
