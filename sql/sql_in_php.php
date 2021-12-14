<?php
// указание пути в консоли к mysql.exe:
// C:\OpenServer\modules\database\MySQL-8.0-Win10\bin>mysql -uroot -p
// TERMINAL: create database example-name
// TERMINAL: use example-name
// TERMINAL: show tables


// подключение к БД
$mysql = new mysqli("localhost", "root", "", "english_trainer");
$mysql->query("SET NAMES 'utf8'");

if ($mysql->connect_error) {
    echo 'Error Number: ' . $mysql->connect_errno . '<br>';
    echo 'Error: ' . $mysql->connect_error;
} else {
    echo 'Host info: '.$mysql->host_info;
}

$mysql->close();

// удаление таблицы
$mysql->query("DROP TABLE `example`");

// добавление таблицы
$mysql->query("CREATE TABLE `users_` (
        id INT(11) NOT NULL,
        name VARCHAR(50) NOT NULL,
        bio TEXT NOT NULL, 
        PRIMARY KEY(id)
)");

// добавление значений в таблицу
// переменные пишутся в одинарных кавычках - '$name'
$mysql->query("INSERT INTO `general_sentences_a1` (`eng`, `rus`, `words_to_add`, `type`, `used_grammar_constructions`) VALUES('I know', 'Я знаю', 'understand very', 'talking', 'present_simple')");

// обновление всего столбца type
$mysql->query("UPDATE `general_sentences_a1` SET `type` = 'talk'");
// обновление только той ячейки в столбце type, у кот. id = 3 (можно сделать > 3, не равно <>)
$mysql->query("UPDATE `general_sentences_a1` SET `type` = 'talk1' WHERE `id` = 3");

// удаление
$mysql->query('DELETE FROM `users` WHERE `id` = 5 OR `id` = 4');

// выборка
$result = $mysql->query("SELECT * FROM `general_sentences_a1`");
echo '<pre>';
if($result->num_rows > 0){
    // fetch_all()
    while($row = $result->fetch_assoc()){
        echo 'ID: '.$row['id'].'<br>';
        echo 'eng: '.$row['eng'].'<br>';
        echo 'rus: '.$row['rus'].'<br>';
    }
}

$result = $mysql->query("SELECT * FROM `general_sentences_a1`");
printResults($result);

$result = $mysql->query("SELECT `id`, `eng` FROM `general_sentences_a1`");
printResults($result);

$result = $mysql->query("SELECT `id`, `eng` FROM `general_sentences_a1` WHERE `id` > 3 ORDER BY `id` DESC");
printResults($result);

$result = $mysql->query("SELECT * FROM `general_sentences_a1` LIMIT 2");
// LIMIT 2, 1 - первые две пропускаем, далее одну выводим
printResults($result);