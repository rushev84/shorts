<?php

function t1($num, $arr)
{
    if (in_array($num, $arr)) {
        return 1;
    } else {
        return 0;
    }
}

function t2($num, $arr)
{
    $count_array = array_count_values($arr);
    return $count_array[$num];
}

function t3($num, $arr)
{
    $counter = 0;
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] < $num) {
            $counter++;
        }
    }
    return $counter;
}

function t4($num, $arr)
{
    $new_arr = array();
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] > $num) {
            $new_arr[] = $arr[$i];
        }
    }
    return $new_arr;
}

function t5($num, $arr)
{
    $counter_even = 0;
    $counter_odd = 0;
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] % 2 == 0) {
            $counter_even++;
        } else {
            $counter_odd++;
        }
    }
    if ($num === 'even') return $counter_even;
    if ($num === 'odd') return $counter_odd;
}

function t6($ar)
{
    return array_reverse($ar);
}

function t7($arr)
{
    sort($arr);
    return $arr;
}

function t8($arr)
{
    array_pop($arr);
    return $arr;
}

function t9($arr)
{
    array_shift($arr);
    return $arr;
}

function t10($num, $arr)
{
    $is_found = array_search($num, $arr);
    if (!$is_found) return 0;
    return $is_found;
}