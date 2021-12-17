<?php

/*
Одиночка

Аналогия

У страны может быть только один президент. Он должен действовать, когда того требуют обстоятельства и долг. В данном случае президент — одиночка.


Вкратце

Шаблон позволяет удостовериться, что создаваемый объект — единственный в своём классе.


Википедия

Шаблон «Одиночка» позволяет ограничивать создание класса единственным объектом. Это удобно, когда для координации действий в рамках системы требуется, чтобы объект был единственным в своём классе.
На самом деле шаблон «Одиночка» считается антипаттерном, не следует им слишком увлекаться. Он необязательно плох и иногда бывает полезен. Но применяйте его с осторожностью, потому что «Одиночка» вносит в приложение глобальное состояние, так что изменение в одном месте может повлиять на все остальные случаи использования, а отлаживать такое — не самое простое занятие. Другие недостатки шаблона: он делает ваш код сильно связанным (tightly coupled), а создание прототипа (mocking) «Одиночки» может быть затруднено
 */

final class President
{
    private static $instance;

    private function __construct()
    {
        // Прячем конструктор
    }

    public static function getInstance(): President
    {
        if (!self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    private function __clone()
    {
        // Отключаем клонирование
    }

    private function __wakeup()
    {
        // Отключаем десериализацию
    }
}

$president1 = President::getInstance();
$president2 = President::getInstance();

var_dump($president1 === $president2); // true