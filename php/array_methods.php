<?php

function prePrint($var)
{
    echo '<pre>';
    print_r($var);
    echo '</pre>';
}

// ------------------------------------------------------------------------
// 1. count - Counts all elements in an array or in a Countable object

$users = ['Ivan', 'Petr', 'Sidor'];
prePrint(count($users)); // 3

$elements = array(array(1, 2, 3, 4, 5), array(23, 33, 34), 34, 12);
prePrint(count($elements)); // 4

$elements = array(array(1, 2, 3, 4, 5), 34, 12);
prePrint(count($elements, COUNT_RECURSIVE)); // 8

//prePrint(count(NULL)); // 0 and error Parameter must be an array or an object that implements Countable

// ------------------------------------------------------------------------
// 2. in_array — Checks if a value exists in an array

$elements = ['Ivan', 12, 'Petr', 'abc', 'Abc'];
prePrint(in_array('12', $elements)); // true (1)
prePrint(in_array('12', $elements, true)); // false

// ------------------------------------------------------------------------
// 3. array_search — Searches the array for a given value and returns the first corresponding key if successful

$elements = ['Ivan', 12, 'Petr', 'abc', 'Abc'];
prePrint(array_search('Petr', $elements)); // 2
prePrint(array_search(12, $elements, true)); // 1

// ------------------------------------------------------------------------
// 4. array_values — Return all the values of an array

$user = ['name' => 'Ivan', 'age' => 33, 'hobby' => 'sport'];
prePrint(array_values($user));
// Array (
//    [0] => Ivan
//    [1] => 33
//    [2] => sport
//)

// ------------------------------------------------------------------------
// 5. array_keys - Return all the keys or a subset of the keys of an array

$user = ['name' => 'Ivan', 'age' => 33, 'hobby' => 'sport'];
prePrint(array_keys($user));
// Array (
//    [0] => name
//    [1] => age
//    [2] => hobby
//)

// ------------------------------------------------------------------------
// 6. sort — Sort an array in ascending order (SORT_REGULAR, SORT_NUMERIC, SORT_STRING)
// asort (keep the key-values), rsort, arsort
// ksort - sort by keys

$numbers = [3, 5, 1, 0, 33];
sort($numbers);
prePrint($numbers);

// ------------------------------------------------------------------------
// 7. usort — Sort an array by values using a user-defined comparison function

$myArr = array(array(2, "String2"), array(3, "String3"), array(1, "String1"));

function compare($a, $b)
{
    if ($a[1] < $b[1])
        return -1;
    elseif ($a[1] > $b[1])
        return 1;
    return 0;
}

usort($myArr, "compare");
prePrint($myArr);
// ------------------
//$array = [
//    ['id' => 1, 'date' => "12.01.2020", 'name' => "test1"],
//    ['id' => 2, 'date' => "02.05.2020", 'name' => "test2"],
//    ['id' => 40, 'date' => "08.03.2020", 'name' => "test4"],
//    ['id' => 23, 'date' => "11.11.2020", 'name' => "test4"],
//    ['id' => 5, 'date' => "06.06.2020", 'name' => "test3"],
//];

function simpleCompare($a, $b)
{
    if ($a['id'] < $b['id']) {
        return -1;
    }
    elseif ($a['id'] > $b['id']){
        return 1;
    }
    return 0;
}

function compare2($key) {
    return function ($a, $b) use ($key) {
        return strnatcmp($a[$key], $b[$key]);
    };
}

usort($array, compare2('id'));
prePrint($array);

// ------------------------------------------------------------------------
// 8. array_walk — Apply a user supplied function to every member of an array

$myArr = array('A' => 'Ivan', 'B' => 'John', 'C' => 'Bob');

function walker_function($value, $key, $additional)
{
    echo $key . ' ' . $additional . ' ' . $value . '<br />';
}

array_walk($myArr, "walker_function", "is");

// THINK!! php-links
// function walker_function(&$value, $key, $additional) {
//	$value = $key;
//}

// ------------------------------------------------------------------------
// 9. array_slice — Extract a slice of the array

$myArr = array(1, 2, 3, 4, 5);
$newArr1 = array_slice($myArr, 3);
$newArr2 = array_slice($myArr, 2, 2);

prePrint($newArr1); // Array ([0] => 4, [1] => 5)
prePrint($newArr2); // Array ([0] => 3, [1] => 4)

// ------------------------------------------------------------------------
// 10. array_chunk —

