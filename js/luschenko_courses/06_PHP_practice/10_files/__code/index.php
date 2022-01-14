<?php
//1. Размера файла
echo filesize('./one/t1.txt');

// создаем файл
$fp = fopen('./one/data.txt', 'w');
    $a = fwrite($fp, date('Y m d H:i:s', time()));
    var_dump($a);
fclose($fp);

//2. читать файл
$filename = "./one/data.txt";
$handle = fopen($filename, "r"); //!!!
$contents = fread($handle, filesize($filename));
fclose($handle);
echo '<br>';
var_dump($contents);
echo '<br>';

//3 получать содержимое папки
if ($handle = opendir('./one')) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != "..") {
            echo "$entry<br>";
            echo filesize('./one/'.$entry);
            echo '<br>';
        }
    }
    closedir($handle);
}