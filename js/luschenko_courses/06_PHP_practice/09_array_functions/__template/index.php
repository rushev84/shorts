<?php require_once './function.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Practics. Unit 09</title>
    <link rel="stylesheet" href="css/mustard-ui.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <h1>Unit 09. Массивы</h1>
    <h2><a href="https://itgid.info/course/php" target="_blank">PHP Практический. Stage 2 - курс Лущенко
            Александра</a></h2>
    <section>
        <p><b>Task 1.</b></p>
        <p>ФУНКЦИИ ДЛЯ РАБОТЫ С МАССИВАМИ</p>
        <p>Создать функцию t1, которая принимает число и массив. Если число есть в массиве, возвращает yes, и no если нет.</p>
        <?php
            echo '<pre>';
            var_dump(t1(4, [4,5,6]));
            echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 2.</b></p>
        <p>Создать функцию t2, принимает число и массив и возвращает число, которое показывает сколько раз число встречается в массиве.</p>
        <?php
        echo '<pre>';
        var_dump(t2(4, [4,5,3,5,4]));
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 3.</b></p>
        <p>Создать функцию t3, принимает число и массив и возвращает количество элементов массива меньше указанного.</p>        <?php
        echo '<pre>';
        var_dump(t3(4, [4,5,3,5,4,2]));
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 4.</b></p>
        <p>Создать функцию t4, принимает число и массив и возвращает новый массив куда входят элементы больше указанного в параметре.</p>
        <?php
        echo '<pre>';
        var_dump(t4(4, [4,5,3,5,4,2]));
        echo '</pre>';
        ?>
    </section>
    <section>
        <p><b>Task 5.</b></p>
        <p>Создать функцию t5, принимает параметр 'odd' или 'even' - строки и массив. И возращает число либо четных либо нечетных элементов в массиве в зависимости от параметра.</p>
        <?php
        echo '<pre>';
        var_dump(t5('even', [1, 3, 5, 7, 9, 11, 13, 15]));
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 6.</b></p>
        <p>Создать функцию t6, принимает массив и возвращает новый массив равный перевернутому исходному. </p>
        <?php
        echo '<pre>';
        var_dump(t6( [1, 3, 5, 7, 9, 11, 13, 15]));
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 7.</b></p>
        <p>Создать функцию t7, которая принимает массив и возвращает его отсортированным по возрастанию.</p>
        <?php
        echo '<pre>';
        var_dump(t7( [3, 1, 4, 1, 3, 6, 2, 2, 7,8]));
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 8.</b></p>
        <p>Создать функцию t8, которая принимает и возвращает массив с удаленным последним элементом. </p>
        <?php
        echo '<pre>';
        var_dump(t8( [1, 3, -5, 7, 9, 11, 13, 15]));
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 9.</b></p>
        <p>Создать функцию t9, которая принимает и возвращает массив с удаленным первым элементом. </p>
        <?php
        echo '<pre>';
        var_dump(t9( [1, 3, -5, 7, 9, 11, 13, 15]));
        echo '</pre>';
        ?>
    </section>

    <section>
        <p><b>Task 10.</b></p>
        <p>Создать функцию t10, которая принимает 2 параметра - первый число, второй массив.  Возвращает индекс значения совпадающего с этим числом или 0 если такого числа нет в массиве.</p>
        <?php
        echo '<pre>';
        var_dump(t10(7,  [1, 3, -5, 7, 9, 11, 13, 15]));
        echo '</pre>';
        ?>
    </section>
    

</div>
</body>
</html>
