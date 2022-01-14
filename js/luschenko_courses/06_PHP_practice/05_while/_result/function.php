<?php

function t1()
{
    global $a, $b, $out1;

    $out1 = '';

    $count = $a;
    while ($count <= $b) {
        $out1 .= $count . ' ';
        $count++;
    }

    echo $out1;
}

function t2()
{
    global $d, $e, $out2;

    $out2 = '';

    $count = $d;
    while ($count <= $e) {
        $out2 .= $count . ' ';
        $count += 2;
    }

    echo $out2;
}

function t3()
{
    global $f, $g, $out3;

    $out3 = '';

    $count = $f;
    while ($count >= $g) {
        $out3 .= $count . ' ';
        $count -= 2;
    }

    echo $out3;
}

function t4()
{
    global $num1, $num2, $out4;

    $out4 = '';

    if ($num1 > $num2) {
        $temp = $num1;
        $num1 = $num2;
        $num2 = $temp;
    }


    $count = $num1;
    while ($count <= $num2) {
        $out4 .= $count . ' ';
        $count++;
    }

    echo $out4;
}

function t5()
{
    global $out5;

    $out5 = '';
    $count = 0;
    while ($count <= 5) {
        $out5 .= (5 - $count) . ' ' . $count . ' ';
        $count++;
    }

    echo $out5;
}

function t6()
{
    global $out6, $k;

    $out6 = '';
    $count = 1;
    while ($count <= $k) {
        $out6 .= $count . ' * ';
        $count++;
    }

    echo $out6;
}

function t7()
{
    global $out7, $m;

    $out7 = '';
    $count = 1;

    while ($count <= $m) {
        $stars = ' * ';
        if ($count % 2 == 0) $stars = ' ** ';
        $out7 .= $count . $stars;
        $count++;
    }


    echo $out7;
}

function t8()
{
    global $out8, $n;

    $count = 1;

    while ($count <= $n){
        if ($count % 2 === 0) {
            $num = 0;
        } else {
            $num = $count;
        }
        $out8 .= $num . ' ';
        $count++;
    }

    echo $out8;
}

function t9()
{
    global $out9;

    $out9 = '';
    $count = 0;
    while ($count < 3) {
        $out9 .= '***<br>';
        $count++;
    }

    echo $out9;
}

function t10()
{
    global $out10, $t;

    $out10 = '';
    $count = $t;
    while ($count <= 2020) {
        if ($count % 2 === 0) {
            $out10 .= $count.' ';
        }
        $count++;
    }

    echo $out10;
}

function t11()
{
    global $out11, $num1, $num2;

    $out11 = '';
    $count = $num1;
    $sum = 0;
    while($count <= $num2){
        $sum += $count;
        $count++;
    }
    $out11 = $sum;

    echo $out11;
}

function t12()
{
    global $out12, $num4, $num5;

    $out12 = '';
    $count = $num4;
    $sum = 1;
    while($count <= $num5){
        $sum *= $count;
        $count++;
    }
    $out12 = $sum;

    echo $out12;
}