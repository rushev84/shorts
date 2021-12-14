<?php

// 1. Какая разница между функциями sort(), asort() и ksort()?

//1) sort() сортирует массив элементов. В отсортированном массиве элементы размещаются по
//возрастанию. Это функция сортировки по умолчанию.
//2) asort() сортирует ассоциированный массив так, что отсортированными оказываются элемен-
//ты-значения ассоциаций. Используется, если важен порядок самих элементов, а не ключей.
//Например:
$capitals = array('US' => 'Washington', 'UK' => 'London', 'Austria' => 'Vienna');
asort($capitals);
// $capitals = {“UK” => “London”, “Austria” => “Vienna”, “US” => “Washington”}
//3) ksort() сортирует ассоциированный массив по значению ключей. Для предыдущего примера
//отсортированные значения были бы такими:
ksort($capitals);
// $capitals = {“Austria” => “Vienna”, “UK” => “London”, “US” => “Washington”}