<?php

function t1($path)
{
    $is_exists = file_exists($path);
    if (!$is_exists) return 0;
    return $is_exists;
}

function t2($path)
{
    $is_exists = file_exists($path);
    if ($is_exists) {
        return filesize($path);
    } else {
        return 0;
    }
}

function t3($path)
{
    $is_dir = is_dir($path);
    $is_file = is_file($path);
    if ($is_dir) return 'dir';
    if ($is_file) return 'file';
}

function t4($path)
{
    $pathinfo_arr = pathinfo($path);
    $final_arr = array();
    $final_arr[] = $pathinfo_arr['filename'];
    $final_arr[] = $pathinfo_arr['extension'];

    return $final_arr;
}

function t5($path)
{
    return file_get_contents($path);
}

function t6($path, $str)
{
    file_put_contents($path, $str);
}

function t7($path, $str)
{
    file_put_contents($path, $str, FILE_APPEND);
}

function t8($path)
{
    if ($handle = opendir($path)) {
        $sum_file_size = 0;
        while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..") {
                $sum_file_size += filesize($path . $entry);
            }
        }
        closedir($handle);
        return $sum_file_size;
    }
}

function t9($path)
{
    $arr = array();
    if ($handle = opendir($path)) {
        while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..") {
                $inner_arr = array();
                $pathinfo_arr = pathinfo($path . $entry);
                $inner_arr[] = $pathinfo_arr['basename'];
                $inner_arr[] = $pathinfo_arr['extension'];
                $inner_arr[] = filesize($path . $entry);
                $arr[] = $inner_arr;
            }
        }
        closedir($handle);
        return $arr;
    }
}

function t10($path)
{
    $is_exists = file_exists($path);
    if ($is_exists) {
        return 0;
    } else {
        $file = fopen($path, 'w');
        $a = fwrite($file, '42');
        fclose($file);
        return 1;
    }
}