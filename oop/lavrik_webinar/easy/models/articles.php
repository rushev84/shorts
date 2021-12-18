<?php

class MArticles
{
    public function all(): array
    {
        return [
            ['id' => 1, 'title' => 'Article from db'],
            ['id' => 2, 'title' => 'Other art from db']
        ];
    }
}
