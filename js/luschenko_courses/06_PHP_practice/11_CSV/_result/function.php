<?php

function t1()
{
    if (($file = fopen('./one/book1.csv', 'r')) !== false) {
        while (($data = fgetcsv($file, 1000, ";")) !== false) {
            $out = '';
            for ($i = 0; $i < count($data); $i++) {
                $out .= $data[$i] . " ";
            }
            echo $out;
            echo '<br>';
        }
        fclose($file);
    }
}

function t2($path)
{
    if (($file = fopen($path, 'r')) !== false) {
        while (($data = fgetcsv($file, 1000, ";")) !== false) {
            $res[] = $data;
        }
        fclose($file);
    }
    return $res;
}

function t3($path)
{
    if (($file = fopen($path, 'r')) !== false) {
        $out = '';
        $counter = 0;
        while (($data = fgetcsv($file, 1000, ";")) !== false) {
            if ($counter > 0) {
                $out .= $data[2] . ' ';
            }
            $counter++;
        }
        fclose($file);
    }
    return $out;
}

function t4($arr, $path)
{
    $file = fopen($path, 'w');
    foreach ($arr as $line) {
        fputcsv($file, $line, ';');
    }
    fclose($file);
}

function t5($path)
{
    $counter = 0;
    if (($file = fopen($path, 'r')) !== false) {
        while (($data = fgetcsv($file, 1000, ";")) !== false) {
            $counter++;
        }
        fclose($file);
    }
    return $counter;
}
