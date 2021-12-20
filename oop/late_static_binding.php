<?php

class A
{
    public static function who()
    {
        echo __CLASS__;
    }

    public static function test()
    {
        // контекст self привязывается к классу, в кот. он использовался
//        self::who();
        // контекст static привязывается к вызову
        static::who();
    }
}

class B extends A
{
    public static function who()
    {
        echo __CLASS__;
    }
}

//B::test(); // A
B::test(); // B

// Класс B расширяет класс A. Мы вызываем из класса B метод test(), кот. реализован в родительском классе A (тем не менее, он доступен в B, т.к. B - ребёнок). В свою очередь, метод test() вызывает метод who(), кот. переопределён в B. Так вот, если мы используем self, то реализуется метод who() класса A, а если static, то метод who() класса B.

