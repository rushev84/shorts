<?php

function t1()
{
    return time();
}

function t2()
{
    return date('D', time());
}

function t3($year)
{
    if ($year % 4 === 0) {
        return 1;
    } else {
        return 0;
    }
}

function t4()
{
    return date('m', time());
}

function t5()
{
    return date('Y-m-d H:i', time());
}

function t6()
{
    $human_date = date('d F Y', time());
    return strtotime($human_date);
}

function t7($m)
{
    $human_date = '01-' . $m . '-' . date('Y', time());
    echo strtotime($human_date);
}


function t8($t)
{
    $day_of_week = date('D', $t);
    if ($day_of_week === 'Sat' or $day_of_week === 'Sun') {
        return 1;
    } else {
        return 0;
    }
}

function t9($s)
{
    $date = DateTime::createFromFormat('Y M d', $s);
    $date_str = $date->format('d-M-Y');

    $lived_seconds = time() - strtotime($date_str);
    $lived_days = $lived_seconds / 86400;
    return floor($lived_days);
}

function t10()
{
    $timestamp_of_current_year = strtotime('01 Jan ' . date('Y', time()));
    return time() - $timestamp_of_current_year;
}