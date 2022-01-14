<?php 
// получить текущее время
$t = time();
echo (date('Y-m-d H:i A', $t));
echo "\n=================\n";
echo "\n=================\n";
// сменит зону 
//date_default_timezone_set('America/Los_Angeles');
$t = time();
echo (date('Y-m-d H:i', $t));
echo "\n====================\n";
echo strtotime("10 September 2000 20:00"), "\n";
