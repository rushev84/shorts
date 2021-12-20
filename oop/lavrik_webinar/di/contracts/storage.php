<?php

interface Storage
{
    public function set(string $name, $value);
    public function get(string $name);
    public function slice(string $name);
}