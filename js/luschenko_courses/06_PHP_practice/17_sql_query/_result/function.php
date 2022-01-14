<?php

function t2()
{
    $query = 'SELECT * FROM cars';
    return select($query);
}

function t3()
{
    $query = 'SELECT * FROM cars WHERE cost > 100000';
    return select($query);
}

function t4()
{
    // !!!!! После импорта шаблонного sql-файла я переименовал в базе поле 'cars' в поле 'name', чтобы название поля не совпадало с названием всей таблицы
    $query = 'SELECT name FROM cars';
    $select_arr = select($query);
    $result_arr = [];
    for ($i = 0; $i < count($select_arr); $i++) {
        $result_arr[] = $select_arr[$i]['name'];
    }
    return $result_arr;
}

function t5()
{
    $query = 'INSERT INTO cars (name, cost, image) VALUES (\'Cadillac Escalade Platinum\', 47777, \'http://elite.cars.ua/img/upload/cache/zc-1_iar-1_h-357_w-570_5ecd1aa8a55af0_68546755.jpg\')';
    return execQuery($query);
}

function t6()
{
    $query = 'UPDATE cars SET name = \'Cadillac Escalade\', cost = 47500 WHERE id = 6';
    return execQuery($query);
}

function t7()
{
    $query = 'UPDATE cars SET cost = cost - 2800 WHERE cost BETWEEN 100000 AND 200000';
    return execQuery($query);
}

function t8()
{
    $query = 'SELECT SUM(cost) FROM cars';
    $ar = select($query);
    return $ar[0]['SUM(cost)'];
}

function t9()
{
    $query = 'SELECT * FROM cars';
    $select_arr = select($query);
    $result_arr = [];
    for ($i = 0; $i < count($select_arr); $i++) {
        $result_arr[$select_arr[$i]['name']] = $select_arr[$i]['cost'];
    }
    return $result_arr;
}

function t10()
{
    $query = 'DELETE FROM cars WHERE name = \'Cadillac Escalade\'';
    return execQuery($query);
}