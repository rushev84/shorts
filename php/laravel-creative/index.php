<?php
$persons = [
    [
        'name' => 'Vasya',
        'age' => 20,
        'is_married' => true
    ],
    [
        'name' => 'Petya',
        'age' => 10,
        'is_married' => false
    ],
    [
        'name' => 'Kolya',
        'age' => 22,
        'is_married' => true
    ],
];

foreach ($persons as $person) {
    if ($person['is_married']) {
        print_r($person['name']);
    }
}