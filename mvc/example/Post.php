<?php

function uploadImage($image)
{
    $extention = pathinfo($image['name'], PATHINFO_EXTENSION);
    $filename = uniqid() . "." . $extention;

    move_uploaded_file($image['tmp_name'], "uploads/" . $filename);
    return $filename;
}

function addPost($title, $content, $filename)
{
    $pdo = new PDO("mysql:host=localhost;dbname=example01", "root", "");

    $sql = "INSERT INTO posts (title, content, image) VALUES (:title, :content, :image)";
    $statement = $pdo->prepare($sql);
    $statement->bindParam(":title", $title);
    $statement->bindParam(":content", $content);
    $statement->bindParam(":image", $filename);
    $statement->execute();

}
