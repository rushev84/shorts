<?php require_once './function.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Practics. Unit 07</title>
    <link rel="stylesheet" href="css/mustard-ui.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <h1>Unit 07. Формы, GET, POST в PHP</h1>
    <h2><a href="https://itgid.info/course/php" target="_blank">PHP Практический. Stage 2 - курс Лущенко
            Александра</a></h2>
    <section>
        <p><b>Task 1.</b></p>
        <p>Создать функцию t1, которая получает из inp-1 строку и возвращает ее. Обратите внимание на архитектуру приложения! Здесь и далее - если метод не указан, то GET.</p>
        <form action="handler.php">
            <div class="form-control">
                <label>Введите строку</label>
                <input type="text" placeholder="Напишите строку" name="inp-1" value="hi hello task 1">
            </div>
            <input type="hidden" name="action" value="1">
            <div class="form-control">
                <button class="button-primary">Task 1</button>
            </div>
        </form>
    </section>
    <section>
        <p><b>Task 2.</b></p>
        <p>Создать функцию t2, которая получает из inp-2-1 и inp-2-2 числа и возвращает большее из них.</p>
        <form action="handler.php">
            <div class="form-control">
                <label>Число 1</label>
                <input type="number" name="inp-2-1" value="22">
            </div>
            <div class="form-control">
                <label>Число 2</label>
                <input type="number" name="inp-2-2" value="5">
            </div>
            <input type="hidden" name="action" value="2">
            <div class="form-control">
                <button class="button-primary">Task 2</button>
            </div>
        </form>
    </section>
    <section>
        <p><b>Task 3.</b></p>
        <p>Создать функцию t3, которая получает из inp-3 пароль и возвращает 1 если длина пароля больше 5 символов и 0 в других случаях.</p>
        <form action="handler.php">
            <div class="form-control">
                <label>Пароль</label>
                <input type="text" name="inp-3" value="22ssjs9">
            </div>
            <input type="hidden" name="action" value="3">
            <div class="form-control">
                <button class="button-primary">Task 3</button>
            </div>
        </form>
    </section>
    <section>
        <p>Создать функцию t4, которая получает из inp-4 год рождения пользователя и возвращает 1 если ему исполнилось 18 лет и 0 если нет.</p>
        <form action="handler.php">
            <div class="form-control">
                <label>Год рождения</label>
                <select name="inp-4">
                    <?php
                        for($i = 2020; $i >= 1920; $i--) {
                            echo "<option value='$i'>$i</option>";
                        }
                    ?>

                </select>
            </div>
            <input type="hidden" name="action" value="4">
            <div class="form-control">
                <button class="button-primary">Task 4</button>
            </div>
        </form>
    </section>
    <section>
        <p><b>Task 5.</b></p>
        <p>Создать функцию t5, которая возвращает 1 если пользователь согласен с условиями лицензии и 0 если нет.</p>
        <form action="handler.php">
            <div class="form-control">
                <div class="form-control">
                    <label><input type="checkbox" value="yes" name="i-5">Согласен</label>
                </div>
            </div>
            <input type="hidden" name="action" value="5">
            <div class="form-control">
                <button class="button-primary">Task 5</button>
            </div>
        </form>
    </section>

    <section>
        <p><b>Task 6.</b></p>
        <p>Создать функцию t6, которая возвращает value выбранного radio.</p>
        <form action="handler.php">
            <div class="form-control">
                <label><input type="radio" name="radio-1" value="green">Зеленый</label>
            </div>
            <div class="form-control">
                <label><input type="radio" name="radio-1" value="red">Красный</label>
            </div>
            <div class="form-control">
                <label><input type="radio" name="radio-1" value="blue" checked>Cиний</label>
            </div>
            <input type="hidden" name="action" value="6">
            <div class="form-control">
                <button class="button-primary">Task 6</button>
            </div>
        </form>
    </section>

    <section>
        <p><b>Task 7.</b></p>
        <p>Создать функцию t7, которая возвращает value выбранного radio. Метод передачи данных - POST.</p>
        <form action="handler.php" method="post">
            <div class="form-control">
                <label><input type="radio" name="radio-2" value="green">Зеленый</label>
            </div>
            <div class="form-control">
                <label><input type="radio" name="radio-2" value="red">Красный</label>
            </div>
            <div class="form-control">
                <label><input type="radio" name="radio-2" value="orange" checked>Оранжевый</label>
            </div>
            <input type="hidden" name="action" value="1">
            <div class="form-control">
                <button class="button-primary">Task 7</button>
            </div>
        </form>
    </section>

    <section>
        <p><b>Task 8.</b></p>
        <p>Создать функцию t8, которая возвращает 1 если пользователь согласен с условиями лицензии и 0 если нет. Метод - POST</p>
        <form action="handler.php" method="post">
            <div class="form-control">
                    <label><input type="checkbox" value="yes" name="i-8">Согласен</label>
            </div>
            <input type="hidden" name="action" value="2">
            <div class="form-control">
                <button class="button-primary">Task 8</button>
            </div>
        </form>
    </section>

    <section>
        <p><b>Task 9.</b></p>
        <p>Создать функцию t9, которая возвращает 1 если введенная строка содержит символ @. И 0 в противном случае. Метод - POST</p>
        <form action="handler.php" method="post">
            <div class="form-control">
                    <label>Email: </label>
                   <input type="text" value="example@test.com" name="i-9">
            </div>
            <input type="hidden" name="action" value="3">
            <div class="form-control">
                <button class="button-primary">Task 9</button>
            </div>
        </form>
    </section>

    <section>
        <p><b>Task 10.</b></p>
        <p>Создать функцию t10, которая возвращает текст введенный в textarea. Метод - POST</p>
        <form action="handler.php" method="post">
            <div class="form-control">
                <label>Email: </label>
                <textarea placeholder="Enter some text..." name="i-10"></textarea>
            </div>
            <input type="hidden" name="action" value="4">
            <div class="form-control">
                <button class="button-primary">Task 10</button>
            </div>
        </form>
    </section>

</div>
</body>
</html>
