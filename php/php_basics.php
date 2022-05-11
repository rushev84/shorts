<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
// приведение типов
$a = floatval($b);
$a = intval($b);

// создание и вывод константы
define('MY_AGE', 37);
//echo MY_AGE;

// модуль
$a = abs(22);
// округление к большему
$a = ceil(33.4);
// округление к меньшему
$a = floor(33.4);
// округление к ближайшему
$a = round(33.4343, 2);
// случайное число в диапазоне
$a = mt_rand(1, 20);
// минимальное и максимальное число из чисел
$a = min(1, 3, 4, 56, 55);
$a = max(1, 3, 4, 56, 55);

// вывод значения строки
$str = 'Hello';
echo 'VAR: $str' . '<br>';
echo "VAR: $str" . '<br>';

// длина строки
$a = strlen('222');
// удаление пробелов до и после
$a = trim('  ddf  ');
// в нижний и верхний регистр (латиница и кириллица)
$a = strtolower('ASDASDF');
$a = mb_strtolower('ВАВААВ');
$a = strtoupper('asdfsdf');
$a = mb_strtoupper('фывафыва');
// hash
$pass = md5('qwertypass');

// перебор элементов массива
$arr = ['name' => 'Sergey', 'age' => 37, 'hobby' => 'construction'];
foreach ($arr as $key => $value) {
    echo 'key: ' . $key . ', value: ' . $value . '<br>';
}
// для простого массива - foreach($arr => $value)

// сохранение состояния переменной при каждом новом вызове функции
function click()
{
    static $count;
    $count++;
    echo $count . '<br>';
}

click(); // 1
click(); // 2
click(); // 3

// require - если не найдёт, то ошибка
// include - если не найдёт, то грузит дальше (если подключение не принципиально)

// Работа с датой

echo date('t m', time() + 10000);
echo '<br>';
echo date('m d', strtotime('+1 Hour'));
echo '<br>';
echo date('m d', strtotime('last Monday'));
echo '<br>';

// Встроенные функции
// Работа с массивами

$lis = [5, 7, 3];
// удаление элемента из массива. Индексы не обновляются
unset($lis[1]);
print_r($lis); // Array ( [0] => 5 [2] => 3 )
echo '<br>';

// обновление индексов. Возвращает обновлённый массив
$lis = array_values(($lis));
print_r($lis); // Array ( [0] => 5 [1] => 3 )
echo '<br>';

$lis = [5, 7, 3, 6, 7, 8];
// сортировка, обратная сортировка, перемешивание
sort($lis); // rsort(), shuffle()
print_r($lis); // Array ( [0] => 3 [1] => 5 [2] => 6 [3] => 7 [4] => 7 [5] => 8 )
echo '<br>';

// поиск элемента. Возвращает 1 или ''
echo in_array(3, $lis); // 1
echo '<br>';

// удаление нескольких элементов. Возвращает новый массив
$arr = array_slice($lis, 2, 3);
var_dump($arr); // var_dump - больше для объектов, print_r - для массивов
echo '<br>';

// объединение массивов
$arr_1 = [5, 7];
$arr_2 = [6, 8, 9];
$arr_3 = array_merge($arr_1, $arr_2);
print_r($arr_3);
echo '<br>';

// тип переменной
$x = 10;
echo gettype($x); // integer
echo is_numeric($x); // 1 или ''. Приводит строку к числу
echo is_integer($x); // 1 или ''. Не приводит
// is_string, is_array и т.д.

// работа со строками
$str = 'Example';
echo strpos($str, 'am');

$words = 'john,bob,alex';
$arr_words = explode(',', $words); // implode()
print_r($arr_words);
echo '<br>';

// Работа с файлами
$file = fopen('text.txt', 'a'); // w, r, wr, a (append)
fwrite($file, "\nExample text\nHello");
fclose($file);

$filename = 'text.txt';
$file = fopen($filename, 'r');
$content = fread($file, filesize($filename));
fclose($file);
echo $content;
echo '<br>';

file_put_contents('a.txt', "Example\nHello");
echo '<br>';

echo file_get_contents('a.txt');
echo '<br>';

echo file_exists('a.txt');
echo '<br>';

rename('a.txt', 'new_name.txt');
echo '<br>';

// удаление файла
unlink('text.txt');

// путь к файлу
echo __FILE__;
echo '<br>';

// права доступа
echo fileperms(__FILE__);
echo '<br>';

// создать файл, доступный для всех
chmod(__FILE__, 0777);

// $_SERVER

phpinfo();

echo '<pre>';
print_r($_SERVER);
echo '</pre>';

echo $_SERVER['HTTPS']; // on
echo '<br>';

echo $_SERVER['HTTP_HOST']; // php-example.ru
echo '<br>';

echo $_SERVER['HTTP_HOST'] . ' - ' . $_SERVER['REQUEST_URI'];
echo '<br>';

echo $_SERVER['HTTP_USER_AGENT'];
echo '<br>';

if ($_GET['source'] != '') {
    $link = explode('?source=', $_SERVER['REQUEST_URI']);
    $redirect = 'http://' . $_SERVER['HTTP_HOST'] . $link[0];
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $redirect);
    exit();
}

// Отправка почты (не работает на локальном сервере)

$message = 'Сообщение';
$to = 'rushev@yandex.ru';
$from = 'example@example.com';
$subject = 'Тема сообщения';

$subject = '=?utf-8?B?' . base64_encode($subject) . '?=';
$headers = "From: $from\r\nReply-to: $from\r\nContent-type:text/plain; charset=utf-8\r\n";

mail($to, $subject, $message, $headers);


?>


</body>
</html>
