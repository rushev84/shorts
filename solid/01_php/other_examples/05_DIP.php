<?php

// DIP - Dependency inversion principle
// модули (классы) зависят от абстракций, а не друг от друга

interface DBConnectInterface
{
    public function connectToDB();
}

class DBConnect implements DBConnectInterface
{
    public function connectToDB()
    {

    }
}

class User
{
    private $db_connection;

    public function __construct(DBConnectInterface $db_connection)
    {
        $this->db_connection = $db_connection;
    }
}

