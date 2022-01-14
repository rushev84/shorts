<?php require_once './function.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Practics. Unit 08</title>
    <link rel="stylesheet" href="css/mustard-ui.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <h1>Unit 08. Массивы</h1>
    <h2><a href="https://itgid.info/course/php" target="_blank">PHP Практический. Stage 2 - курс Лущенко
            Александра</a></h2>
    <section>
        <p><b>Task 1.</b></p>
        <p>Создать функцию t1, которая возвращает массив $a.</p>
        <?php
            echo '<pre>';
            var_dump(t1());
            echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 2.</b></p>
        <p>Создать функцию t2, которая возвращает массив $a. Массив должнен содержать все булевы значения.</p>
        <?php
        echo '<pre>';
        var_dump(t2());
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 3.</b></p>
        <p>Создать функцию t3, которая возвращает массив $a. Массив должен содержать числа от 1 (включительно) до 100 (включительно). Индексы - с нуля.</p>
        <?php
        echo '<pre>';
        var_dump(t3());
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 4.</b></p>
        <p>Создать функцию t4, которая возвращает массив $a. Массив должен содержать два числа. Число 5 под индексом 10, число 11 под индексом 15.</p>
        <?php
        echo '<pre>';
        var_dump(t4());
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 5.</b></p>
        <p>Создать функцию t5, которая возвращает 5 элемент переданного массива (везде, где мы говорим 5-й, 6-й и т.д. подразумеваем индекс 5, 6) </p>
        <?php
        echo '<pre>';
        var_dump(t5( [1, 3, 5, 7, 9, 11, 13, 15]));
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 6.</b></p>
        <p>Создать функцию t6, которая меняет местами 2 и 4 элемент местами в переданном массиве и возращает сам массив. </p>
        <?php
        echo '<pre>';
        var_dump(t6( [1, 3, 5, 7, 9, 11, 13, 15]));
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 7.</b></p>
        <p>Создать функцию t7, которая меняет местами нулевой и последний элемент местами в переданном массиве и возращает сам массив. Последний элемент находите через длину.</p>
        <?php
        echo '<pre>';
        var_dump(t7( [1, 3, 5, 7, 9, 11, 13, 15]));
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 8.</b></p>
        <p>Создать функцию t8, которая выводит на страницу и возвращает первый встреченный в массиве элемент меньше нуля, после чего прекращает свою работу. </p>
        <?php
        echo '<pre>';
        var_dump(t8( [1, 3, -5, 7, 9, 11, 13, 15]));
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 9.</b></p>
        <p>Создать функцию t9, которая выводит на страницу и возвращает последний встреченный в массиве элемент меньше нуля, после чего прекращает свою работу. </p>
        <?php
        echo '<pre>';
        var_dump(t9( [1, 3, -5, 7, 9, 11, -13, 15]));
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 10.</b></p>
        <p>Создать функцию t10, которая принимает 2 параметра - первый число, второй массив. И возвращает 1 если число указанное в параметре есть в массиве, 0 если нет.</p>
        <?php
        echo '<pre>';
        var_dump(t10(7,  [1, 3, -5, 7, 9, 11, 13, 15]));
        echo '</pre>';
        ?>
    </section>
    

</div>
</body>
</html>
