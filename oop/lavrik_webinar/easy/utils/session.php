<?php

class Session
{// обёртка над сессией
    public static function set(string $name, $value)
    {
        self::mbStart();
        $_SESSION[$name] = $value;
    }

    public static function get(string $name)
    {
        self::mbStart();
        return $_SESSION[$name] ?? null;
    }

    public static function slice(string $name)
    {
        self::mbStart();
        $val = null;

        if (isset($_SESSION[$name])) {
            $val = $_SESSION[$name];
            unset($_SESSION[$name]);
        }
    }

    protected static function mbStart()
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
    }

}
