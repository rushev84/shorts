<?php

// LSP - Liskov substitution principle

class User
{
    public function access()
    {
        echo "You have access";
    }
}

class Moderator extends User
{
    // some moderator functions
}

class Admin extends User
{
    // some admin functions
}

class Guest extends User
{
    public function access()
    {
        throw new Exception('You can\'t have access');
    }
}

function getSystemAccess($user)
{
    $user->access();
}

getSystemAccess(new Moderator());
getSystemAccess(new Admin());
getSystemAccess(new Guest());