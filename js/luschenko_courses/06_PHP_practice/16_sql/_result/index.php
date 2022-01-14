<?php
require_once 'config.php';
require_once 'function.php';

$conn = connect();

echo '<pre>';
echo 'Select <br>';
$testSelect = select('SELECT * FROM users');
print_r($testSelect);

//echo 'Insert <br>';
//$testInsert = execQuery('INSERT INTO users(name, age, photo) VALUES (\'flash\', 88, \'https://cdn3.iconfinder.com/data/icons/avatars-add-on-pack-2/48/v-18-256.png\');');
//var_dump($testInsert);

//echo 'Update <br>';
//$testUpdate = execQuery('UPDATE users SET name="Old Flash" WHERE id = 5');
//var_dump($testUpdate);

echo 'Delete <br>';
$testDelete = execQuery('DELETE FROM users WHERE id = 5');
var_dump($testDelete);