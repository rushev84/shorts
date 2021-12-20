<?php

include_once('contracts/controller.php');
include_once('contracts/model.php');
include_once('contracts/storage.php');

include_once('controllers/home.php');
include_once('controllers/shop.php');
include_once('models/articles.php');
include_once('utils/session.php');

// здесь мы создаём инстанс класса, кот. имплементирует интерфейс
//
$mArticles = new MArticles();
$session = new Session();

//$controller = new CHome($mArticles);
//$controller->run();

// в CShop нужно передать Model и Storage, но можно передавать и конкретные реализации этих интерфейсов (кот. будут считаться подтипами) - и всё будет ок. Подтип всегда считается корректным типом - это принцип подстановки Лисков

$controller = new CShop($mArticles, $session);
$controller->run();