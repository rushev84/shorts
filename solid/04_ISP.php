<?php

// ISP - Interface segregation principle

interface Shape
{
    public function area();

}

interface FullShape
{
    public function volume();
}

class Pyramid implements Shape, FullShape
{
    public function area()
    {

    }

    public function volume()
    {

    }
}

class Rect implements Shape
{
    public function area()
    {

    }
}
