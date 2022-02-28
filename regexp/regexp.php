<?php

$regexp = '/^a/i'; // должно начинаться с буквы 'а', нечувствительно к регистру
$regexp2 = '/^(a|b)/i'; // должно начинаться с буквы 'а' или 'b', нечувствительно к регистру
$regexp3 = '/(a|b)$/i'; // должно заканчиваться на буквы 'а' или 'b', нечувствительно к регистру
$regexp4 = '/й$/iu'; // должно заканчиваться на 'й', нечувствительно к регистру (unicode)
$regexp5 = '/\d/iu'; // должны быть цифры (не обязательно только они)
$regexp6 = '/\D/iu'; // есть ли хоть один символ, кот. является не цифрой?
$regexp7 = '/[0-9]/iu'; // какая-либо цифра должна присутствовать
$regexp8 = '/./iu'; // любой символ
$regexp9 = '/\./iu'; // есть ли точка?
$regexp10 = '/a*/iu'; // буква 'а' может быть, может не быть...

$mob_tel = '/^89[0-9]{9}$/'; // должен начинаться с 89, далее должна быть цифра (повторяем 9 раз, т.к. 9 цифр), далее обязательно конец строки

// {1,} - повтор должен случиться как минимум 1 раз
$email = '/^[a-zA-Z0-9][a-zA-Z0-9._-]{1,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9]{1,}\.[a-zA-Z]{2,5}$/';

$str = 'Abc';

echo preg_match($regexp, $str);

