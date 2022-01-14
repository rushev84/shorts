<?php

function t1()
{
    $a = ['1', 2, true, false, 'hello'];
    return $a;
}

function t2()
{
    $a = [true, false];
    return $a;
}

function t3()
{
    $a = array();
    for ($i = 1; $i <= 100; $i++) {
        $a[] = $i;
    }
    return $a;
}

function t4()
{
    $a = array(
        10 => 5,
        15 => 11
    );
    return $a;
}

function t5($ar)
{
    return $ar[5];
}

function t6($ar)
{
    $temp = $ar[2];
    $ar[2] = $ar[4];
    $ar[4] = $temp;
    return $ar;
}

function t7($arr)
{
    $temp = $arr[count($arr) - 1];
    $arr[count($arr) - 1] = $arr[0];
    $arr[0] = $temp;
    return $arr;
}

function t8($arr)
{
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] < 0) {
            return $arr[$i];
        }
    }
}

function t9($arr)
{
    $last_negative_elem = 0;
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] < 0) {
            $last_negative_elem = $arr[$i];
        }
    }
    return $last_negative_elem;
}

function t10($num, $arr)
{
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] === $num) {
            return 1;
        }
    }
    return 0;
}