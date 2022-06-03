<?php

// ISP - Interface segregation principle

/*
 * Данный принцип гласит, что «Много специализированных интерфейсов лучше, чем один универсальный»
Соблюдение этого принципа необходимо для того, чтобы классы-клиенты использующий/реализующий интерфейс знали только о тех методах, которые они используют, что ведёт к уменьшению количества неиспользуемого кода.

Вернёмся к примеру с интернет-магазином.
Предположим наши товары могут иметь промокод, скидку, у них есть какая-то цена, состояние и т.д. Если это одежда то для неё устанавливается из какого материала сделана, цвет и размер.
Опишем следующий интерфейс
 */

interface IItem_
{
    public function applyDiscount($discount);
    public function applyPromocode($promocode);

    public function setColor($color);
    public function setSize($size);

    public function setCondition($condition);
    public function setPrice($price);
}

/*
 * Данный интефейс плох тем, что он включает слишком много методов. А что, если наш класс товаров не может иметь скидок или промокодов, либо для него нет смысла устанавливать материал из которого сделан (например, для книг). Таким образом, чтобы не реализовывать в каждом классе неиспользуемые в нём методы, лучше разбить интерфейс на несколько мелких и каждым конкретным классом реализовывать нужные интерфейсы.
 */

interface IItem
{
    public function setCondition($condition);
    public function setPrice($price);
}

interface IClothes
{
    public function setColor($color);
    public function setSize($size);
    public function setMaterial($material);
}

interface IDiscountable
{
    public function applyDiscount($discount);
    public function applyPromocode($promocode);
}

class Book implements IItem, IDiscountable
{
    public function setCondition($condition){/*...*/}
    public function setPrice($price){/*...*/}
    public function applyDiscount($discount){/*...*/}
    public function applyPromocode($promocode){/*...*/}
}

class KidsClothes implements IItem, IClothes
{
    public function setCondition($condition){/*...*/}
    public function setPrice($price){/*...*/}
    public function setColor($color){/*...*/}
    public function setSize($size){/*...*/}
    public function setMaterial($material){/*...*/}
}