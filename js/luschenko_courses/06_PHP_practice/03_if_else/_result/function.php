<?php

function t1()
{
    /**
     * Поскольку мы еще не умеем работать с функциями
     * я объявил глобальные переменные $a, $b, $c
     * чтобы использовать их внутри функции, я использовал
     * gloabal - теперь $a, $b, $c  внутри и снаружи функции - это одни и те же переменные
     */
    global $a, $b, $c;

    if ($a > $b) {
        $c = $a;
    } else {
        $c = $b;
    }

    echo $c;
}

function t2()
{
    global $d, $e, $f;


    if ($d > $e) {
        $f = $d;
    } else {
        $f = $e;
    }

    echo $f;
}

function t3()
{
    global $k, $l;

    if ($k > $l) {
        $temp = $k;
        $k = $l;
        $l = $temp;
    }

}

function t4()
{
    global $s1, $s2, $maxString;

    if (strlen($s1) > strlen($s2)) {
        $maxString = $s1;
    } else {
        $maxString = $s2;
    }

    echo $maxString;
}

function t5()
{
    global $password, $successPass;

    if (strlen($password) >= 10) {
        $successPass = true;
    } else {
        $successPass = false;
    }

    echo '<br>';
    echo $successPass;
}

function t6()
{
    global $r1, $r2;

    if ($r1 >= 0 and $r1 <= 4) {
        $r2 = 1;
    } elseif ($r1 > 4 and $r1 <= 7) {
        $r2 = 2;
    } else {
        $r2 = 3;
    }

    echo 'Результат: ' . $r2;
}