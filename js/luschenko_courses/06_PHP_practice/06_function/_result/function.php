<?php

function t1($a, $b)
{
    global $out1;
    $out1 = $a + $b;
    echo $out1;
}

function t2($a, $b)
{
    return $a + $b;
}

function t3($a, $b)
{
    if ($a > $b) {
        return $a;
    } else {
        return $b;
    }
}

function t4($str)
{
    return trim($str);
}

function t5($a)
{
    if ($a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function t6($a)
{
    if (strlen($a) >= 6) {
        return 1;
    } else {
        return 0;
    }
}

function t7($a)
{
    return date('Y') - $a;
}

function t8($s)
{
    return date('Y').' &copy;'.$s;
}
