<?php

function t1()
{
    $file_json = file_get_contents('./one/book1.json');
    $json_arr = json_decode($file_json, true);

    foreach ($json_arr as $key => $value) {
        echo $key . ' ' . $value . '<br>';
    }
}

function t2($path)
{
    $file_json = file_get_contents($path);
    return json_decode($file_json, true);
}

function t3($path)
{
    $file_json = file_get_contents($path);
    $json_arr = json_decode($file_json, true);

    foreach ($json_arr as $value) {
        echo $value['name'].' ';
    }
}

function t4($arr, $path)
{
    $json_str = json_encode($arr);
    file_put_contents($path, $json_str);
}

function t5($path)
{
    $file_json = file_get_contents($path);
    $json_arr = json_decode($file_json, true);
    return count($json_arr);
}
