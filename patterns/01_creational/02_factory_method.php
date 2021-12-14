<?php

/*
Фабричный метод

Аналогия

Одна кадровичка не в силах провести собеседования со всеми кандидатами на все должности. В зависимости от вакансии она может делегировать разные этапы собеседований разным сотрудникам.

Вкратце

Это способ делегирования логики создания объектов (instantiation logic) дочерним классам.

Википедия

В классо-ориентированном программировании (class-based programming) фабричным методом называют порождающий шаблон проектирования, использующий генерирующие методы (factory method) для решения проблемы создания объектов без указания для них конкретных классов. Объекты создаются посредством вызова не конструктора, а генерирующего метода, определённого в интерфейсе и реализованного дочерними классами либо реализованного в базовом классе и, опционально, переопределённого (overridden) производными классами (derived classes).
 */

interface Interviewer
{
    public function askQuestions();
}

class Developer implements Interviewer
{
    public function askQuestions()
    {
        echo 'Asking about design patterns!';
    }
}

class CommunityExecutive implements Interviewer
{
    public function askQuestions()
    {
        echo 'Asking about community building';
    }
}