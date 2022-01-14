<?php

function t1() {
    /**
     * Поскольку мы еще не умеем работать с функциями
     * я объявил глобальные переменные $a, $b, $c
     * чтобы использовать их внутри функции, я использовал
     * gloabal - теперь $a, $b, $c  внутри и снаружи функции - это одни и те же переменные
     */
    global $a, $b, $c;
    // тут ваш код
    echo $c;
}

function t2() {
    global $d, $e, $f;

    // тут ваш код
    //$f =  присваиваем результат
    echo $f;
}

function t3() {
    global $k, $l;
    // тут проводите операции
}

function t4() {
    global $s1, $s2, $maxString;
    // тут ваш код
    echo $maxString;
}

function t5()
{
    global $password, $successPass;

    echo $successPass;
}

function t6()
{
    global $r1, $r2;

    echo 'Результат: '. $r2;
}