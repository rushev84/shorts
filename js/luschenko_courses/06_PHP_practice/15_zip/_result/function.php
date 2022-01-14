<?php

function t1()
{
    $zip = new ZipArchive();
    $filename = "./1.zip";

    if ($zip->open($filename, ZipArchive::CREATE) !== TRUE) {
        exit("Невозможно открыть <$filename>\n");
    }
    $zip->addFile("./t1.txt");

    $zip->close();
}

function t2()
{
    echo 'Размер файла t1.txt: ' . filesize('t1.txt').' байт<br>';

    $zip = new ZipArchive();
    $filename = "./2.zip";
    if ($zip->open($filename, ZipArchive::CREATE) !== TRUE) {
        exit("Невозможно открыть <$filename>\n");
    }
    $zip->addFile("./t1.txt");
    $zip->close();

    echo 'Размер файла 2.zip: ' . filesize('2.zip').' байт';

}

function t3()
{
    $zip = new ZipArchive();
    $filename = "./3.zip";

    if ($zip->open($filename, ZipArchive::CREATE) !== TRUE) {
        exit("Невозможно открыть <$filename>\n");
    }
    $zip->addFile("./t1.txt");
    $zip->addFile('./images/flash.png','flash.png');

    $zip->close();
}

function t4()
{
    $zip = new ZipArchive();
    $filename = "./4.zip";

    if ($zip->open($filename, ZipArchive::CREATE) !== TRUE) {
        exit("Невозможно открыть <$filename>\n");
    }

    $zip->addFile('./t1.txt','./one/t1.txt');

    $zip->close();
}

function t5($arc, $folder)
{
    $zip = new ZipArchive;
    $zip->open($arc);
    $zip->extractTo($folder);
    $zip->close();
}

