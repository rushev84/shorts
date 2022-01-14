<?php
$imagePath = __DIR__ . './images/blank.png';

$jpg_image = imagecreatefrompng($imagePath);
$font_path = __DIR__ . './hoodson.ttf';
$fontPath = __DIR__ . './9605.ttf';

$color = imagecolorallocate($jpg_image, 0, 0, 0);
$text = "Ivanov Ivan";
imagettftext($jpg_image, 50, 0, 580, 250, $color, $fontPath, $text);
$text = "+38 (050) 55-55-555";
imagettftext($jpg_image, 36, 0, 540, 350, $color, $fontPath, $text);

$qrCode = imagecreatefrompng('cat.png');
imagecopy($jpg_image, $qrCode, 30, 50, 0, 0, 512, 512);

imagepng($jpg_image, __DIR__ . './result.png');
imagedestroy($jpg_image);
imagedestroy($qrCode);