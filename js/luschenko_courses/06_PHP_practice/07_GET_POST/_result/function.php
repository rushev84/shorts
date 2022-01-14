<?php

function t1()
{
    if (isset($_GET['inp-1'])) {
        return trim($_GET['inp-1']);
    }
    return false;
}

function t2()
{
    return max($_GET['inp-2-1'], $_GET['inp-2-2']);
}

function t3()
{
    $pass = $_GET['inp-3'];
    if (strlen($pass) > 5) return 1;
    else return 0;
}

function t4()
{
    $age = date('Y') - $_GET['inp-4'];
    if ($age >= 18) return 1;
    else return 0;
}

function t5()
{
    if (isset($_GET['i-5'])) {
        return 1;
    } else return 0;
}

function t6()
{
    return $_GET['radio-1'];
}

function t7()
{
    return $_POST['radio-2'];
}

function t8()
{
    if (isset($_POST['i-8'])) {
        return 1;
    } else return 0;
}

function t9()
{
    if (strpos($_POST['i-9'], '@') !== false) {
        return 1;
    } else {
        return 0;
    }
}

function t10(){
    return $_POST['i-10'];
}