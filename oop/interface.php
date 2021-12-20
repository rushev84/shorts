<?php

interface Database
{
    // functions definitions
    function listOrders();

    function addOrder();

    function removeOrder();
}

class MySQLDatabase implements Database
{
    function listOrders()
    {
        // listing orders
        return [];
    }

    function addOrder()
    {
        // adding orders
    }

    function removeOrder()
    {
        // removing orders
    }
}

class OracleDatabase implements Database
{
    function listOrders()
    {
        // listing orders
        return [];
    }

    function addOrder()
    {
        // adding orders
    }

    function removeOrder()
    {
        // removing orders
    }
}

$database = new MySQLDatabase();
foreach ($database->listOrders() as $order) {
    // listing orders code
}

$database = new OracleDatabase();
foreach ($database->listOrders() as $order) {
    // listing orders code
}