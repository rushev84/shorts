<?php

// подход ниже не самый лучший

$cat = [
    'age' => 1,
    'eat' => function () {
        echo 'cat eats';
    }
];

//$cat['eat'](); // cat eats

// ...и вот мы эволюционируем!

class Cat
{
    public $age = 1;

    public function eat()
    {
        $this->age++;
    }
}

$cat = new Cat();
$cat->eat();
//echo $cat->age; // 2

// В процедурном подходе каждая функция работает с чистого листа, у неё нет какого-либо сохранённого состояния. В примере ниже мы вынуждены постоянно передавать переменную $db в каждую функцию:

//$db = mysqli_connect('localhost', 'root', '', 'dbname');
//mysqli_query($db, "SET NAMES UTF8");
//$res = mysqli_query($db, "SELECT * FROM articles");
//$posts = mysqli_fetch_all($res);
//var_dump(count($posts));

// а в примере ниже мы один раз объявили $db и теперь каждый раз обращаемся к её методам, без необходимости её постоянно куда-то передававать:

//$db = new mysqli('localhost', 'root', '', 'dbname');
//$db->query("SET NAMES UTF8");
//$posts = $db->query("SELECT * FROM articles")->fetch_all();
//var_dump(count($posts));

// Теперь пример с парсером. Процедурный подход:

$text = (string)'...
        <span>1</span>
        ...
        <a href="./buy">
            Пойти на курс PHP
            <span>35000</span>
        </a>...';

function moveTo(string $str, string $find, int $start = 0): int
{
    // перемещает каретку в конец найденной строки
    return strpos($str, $find, $start) + strlen($find);
}

function readString(string $str, string $find, int $start = 0): string
{
    // точка остановки - каретка справа от $find (в данном случае справа от '<'), именно поэтому нужно впоследствии вычесть длину этого $find
    $stop = moveTo($str, $find, $start);
    return substr($str, $start, $stop - $start - strlen($find));
}

$pos = (int)moveTo($text, '<a href="./buy">');
$pos = (int)moveTo($text, '<span>', $pos);
$res = (string)readString($text, '<', $pos);
//echo $res;

// Подход ООП:

class Parser
{
    protected $text;
    protected $pos;

    public function __construct($text)
    {
        $this->text = $text;
        $this->pos = 0;
    }

    public function moveTo($find)
    {
        $this->pos = strpos($this->text, $find, $this->pos) + strlen($find);
        // Возвращает инстанс текущего класса
        return $this;
    }

    public function readString($find)
    {
        $start = $this->pos;
        $this->moveTo($find);
        return substr($this->text, $start, $this->pos - $start - strlen($find));
    }
}

$parser = new Parser($text);
echo $parser->moveTo('<a href="./buy">')->moveTo('<span>')->readString('<');