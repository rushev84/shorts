<?php
// этот файл - контроллер! В нём нет логики, здесь всё просто вызывается и передаётся

// подключаем модель
require 'Post.php';

// вызов методов модели
$filename = uploadImage($_FILES['image']);
addPost($_POST['title'], $_POST['content'], $filename);

// View. Можно сделать подключение файла с отображением постов - это и будет вьюха