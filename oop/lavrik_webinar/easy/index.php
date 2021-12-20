<?php

include_once('controllers/home.php');
include_once('controllers/shop.php');
include_once('models/articles.php');
include_once('utils/session.php');

//$controller = new CHome();
//$controller->run();

$controller = new CShop();
$controller->run();