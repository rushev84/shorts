<?php

function t1()
{
    $image = imagecreatefrompng(__DIR__ . '/images/blank.png');
    $color_text = imagecolorallocate($image, 255, 0, 0);
    $text = date('Y-m-d', time());
    $font_path = __DIR__ . './9605.ttf';

    imagettftext($image, 40, 0, 0, 50, $color_text, $font_path, $text);
    imagepng($image, __DIR__ . './task_1.png');

    imagedestroy($image);
}

function t2()
{
    $image = imagecreatefrompng(__DIR__ . '/images/blank.png');
    $image_flash = imagecreatefrompng(__DIR__ . '/images/flash.png');

    imagecopy($image, $image_flash, 512, 0, 0, 0, 256, 256);
    imagepng($image, __DIR__ . './task_2.png');

    imagedestroy($image);
}

function t3()
{
    $image = imagecreatefrompng(__DIR__ . '/images/blank.png');
    $image_flash = imagecreatefrompng(__DIR__ . '/images/flash.png');
    $image_spider = imagecreatefrompng(__DIR__ . '/images/spider.png');
    $image_thor = imagecreatefrompng(__DIR__ . '/images/thor.png');

    imagecopy($image, $image_flash, 512, 0, 0, 0, 256, 256);
    imagecopy($image, $image_spider, 256, 0, 0, 0, 256, 256);
    imagecopy($image, $image_thor, 0, 0, 0, 0, 256, 256);
    imagepng($image, __DIR__ . './task_3.png');

    imagedestroy($image);
    imagedestroy($image_flash);
    imagedestroy($image_spider);
    imagedestroy($image_thor);
}

function t4()
{
    $image = imagecreatefrompng(__DIR__ . './images/blank.png');
    $image_thor = imagecreatefrompng(__DIR__ . './images/thor.png');
    $text = 'hello';
    $font_path = __DIR__ . './9605.ttf';
    $color_text = imagecolorallocate($image, 0, 0, 0);

    imagettftext($image, 36, 45, 100, 150, $color_text, $font_path, $text);
    imagecopy($image, $image_thor, 256, 0, 0, 0, 256, 256);
    imagepng($image, __DIR__ . './task_4.png');

    imagedestroy($image);
    imagedestroy($image_thor);
}

function t5()
{
    $image = imagecreatetruecolor(300, 300);
    $image_flash = imagecreatefrompng(__DIR__ . './images/flash.png');

    imagecopy($image, $image_flash, 20, 20, 0, 0, 256, 256);
    imagepng($image, __DIR__ . './task_5.png');

    imagedestroy($image);
    imagedestroy($image_flash);
}

function t6()
{
    $image = imagecreatetruecolor(512, 256);
    $color = imagecolorallocate($image, 255, 255, 255);
    $color_text = imagecolorallocate($image, 0, 0, 0);
    $text = 'hello jpeg';
    $font_path = __DIR__ . './9605.ttf';

    imagefill($image, 0, 0, $color);
    imagettftext($image, 50, 0, 0, 50, $color_text, $font_path, $text);
    imagejpeg($image, __DIR__ . './task_6.jpg');

    imagedestroy($image);
}
