<?php
$a = array (
    array(1,2,3),
    array('hi', 'hello', 'test'),
    array(4,5,6)
);

$file = fopen('book2.csv', 'w');
foreach($a as $line){
    fputcsv($file, $line, ';');
}

fclose($file);