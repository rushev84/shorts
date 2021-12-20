<?php

class Session implements Storage
{// Этот класс должен один раз превратиться в объект, и мы будем его всегда использовать (возможен Singleton)
    public function __construct()
    {
        session_start();
    }

    public function set(string $name, $value)
    {
        $_SESSION[$name] = $value;
    }

    public function get(string $name)
    {
        return $_SESSION[$name] ?? null;
    }

    public function slice(string $name)
    {
        $val = null;

        if (isset($_SESSION[$name])) {
            $val = $_SESSION[$name];
            unset($_SESSION[$name]);
        }

        return $val;
    }
}
