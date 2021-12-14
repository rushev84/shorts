<?php

// -------------------------------------------------------------------------------

class ShoppingCard
{

}

$product1 = new ShoppingCard();
$product2 = new ShoppingCard();
$product3 = new ShoppingCard();

// проверка, является ли объект экземпляром класса
//var_dump($product1 instanceof ShoppingCard);

class Shop
{
    private $name;

    public function naming()
    {
        $this->name = "Adidas";
        echo $this->name;
    }
}

$product = new Shop();
$product->naming(); // Adidas
//$product->name = "Nike";

// -------------------------------------------------------------------------------

class User
{
    public $name = "Имя";
    public $surname = "Фамилия";
    public $password = "Пароль";
    public $email = "Емейл";
    public $city = "Город";

    public function hello()
    {
        echo "Hello $this->name";
    }

    function getInfo()
    {
        return "$this->name" . " " . "$this->surname";
    }
}

$admin = new User();
$admin->name = "Alexey";
$admin->hello(); // Hello Alexey
$admin->surname = "Ivanov";
echo "Пользователь: {$admin->getInfo()}";
echo "<br><br>";
$admin = new User();
$user1 = new User();
$admin->name = "Alexey";
$user1->name = "Andrey";

echo $admin->name; // Alexey
echo $user1->name; // Andrey

$user1->surname = "Ivanov";
echo $user1->surname; // Ivanov

// -------------------------------------------------------------------------------

class Userr
{
    function __construct($name, $password, $email, $city)
    {
        $this->name = $name;
        $this->password = $password;
        $this->email = $email;
        $this->city = $city;
    }

    function getInfo()
    {
        return "{$this->name}" . "{$this->password}" . "{$this->email}" . "{$this->city}";
    }
}

$user1 = new Userr("Alex", "123456", "alexey@gmail.com", "Kiev");
echo $user1->getInfo();

// -------------------------------------------------------------------------------

class DestructableClass
{
    function __construct()
    {
        print "Конструктор";
        $this->name = "DestructableClass";
    }

    function __destruct()
    {
        print "Уничтожение" . $this->name;
    }
}

$obj = new DestructableClass();

// -------------------------------------------------------------------------------

class User
{
    public $name;
    public $password;
    public $email;
    public $city;

    public function getName()
    {
        echo $this->name;
        $this->test();
    }

    public function test()
    {
        echo "Test";
    }
}

$user1 = new User();
$user1->name = "Alexey";
$user1->getName();

$user2 = new User();
$user2->name = "Ivan";
$user2->getName();

// статические свойства и методы
// свойства, к кот. можно обратиться без создания объекта в конктексте самого класса
class User
{
    private static $name;

    public static function setName($name1)
    {
        self::$name = $name1;
    }

    public static function getName()
    {
        return self::$name;
    }
}

User::setName('Ivan');
echo User::getName();

// -------------------------------------------------------------------------------
// Наследование

class User
{
    function __construct($name, $password, $email, $city)
    {
        $this->name = $name;
        $this->password = $password;
        $this->email = $email;
        $this->city = $city;
    }

    function getInfo()
    {
        $information = "{$this->name}" . "{$this->password}" . "{$this->email}" . "{$this->city}";
        return $information;
    }
}

$user1 = new User("Alex", "123456", "alexey@gmail.com", "Kiev");

echo $user1->getInfo();

class Moderator extends User
{
    public $info;
    public $rights;

    function __construct($name, $password, $email, $city, $info, $rights)
    {
        parent::__construct($name, $password, $email, $city);
        $this->info = $info;
        $this->rights = $rights;
    }

    function getInfo()
    {
        $information = parent::getInfo();
        $information .= "{$this->info}" . "{$this->rights}";
        return $information;
    }

}

$moderator = new Moderator("Andrey", "654321", "andrey@gmail.com", "Odessa", "Moderator", true);
echo $moderator->getInfo();

// -------------------------------------------------------------------------------
// protected

class Test
{
    // protected - используются только внутри класса или внутри дочернего класса
    protected $info;
}

class Test2 extends Test
{
    public function test()
    {
        $this->info = "info";
        echo $this->info;
    }
}

$test2 = new Test2();
$test2->test(); // info
$test2->info = "information"; // Fatal error: can't access to protected var

// final function test() - запрещает переопределение функции
// final class User - запрещает наследование

// -------------------------------------------------------------------------------
// Полиморфизм - разное поведение одного и того же метода в разных классах
class A
{
// Выводит: функция какого класса была вызвана
    function test()
    {
        echo "Test from A";
    }

// Тестовая функция — просто переадресует на Test()
    function call()
    {
        $this->test();
    }
}

class B extends A
{
// Функция Test() для класса B
    function test()
    {
        echo "Test from B";
    }
}

$a = new A();
$b = new B();
////    Используем следующие следующие команды:
//$a->call(); // выводит "Test from A"
//$b->test(); // выводит "Test from B"
//$b->call(); // Внимание! Выводит "Test from B"! Ф-ция test() переопределяется при вызове производного класса

// -------------------------------------------------------------------------------
// Инкапсуляция - регулирование доступа к компонентам
// public, private, protected

// -------------------------------------------------------------------------------
// Статические методы и свойства. Это методы и свойства, к кот. можно обратиться в контексте самого класса (без создания объекта).

class User
{
    public static $name;

    public static function hello()
    {
        echo "Hello " . self::$name . " ";
    }
}

User::$name = "Alexey";
echo User::$name;
User::hello();

// -------------------------------------------------------------------------------
// Константы класса

class User
{
    // константы содержат только данные элементарного типа
    const SOME_CONST = 314;
}

echo User::SOME_CONST;

// -------------------------------------------------------------------------------
// Абстрактные классы (заготовки). Может содержать реализацию отдельных методов (отличие от interface). Множественное наследование НЕвозможно.
// нельзя создать экземпляр класса

abstract class User
{
    public $name;
    public $status;

    abstract public function getStatus();
}

class Admin extends User
{
    public function getStatus()
    {
        echo "Admin";
    }
}

$user = new Admin();
$user->getStatus();

// -------------------------------------------------------------------------------
// Интерфейсы
// !!! Не содержит реализации указанных методов, только перечисление. Множественное наследование возможно.

interface FirstInterface
{
    public function getName();
}

interface SecondInterface
{
    public function getStatus();
}

// интерфейс поддерживает множественное наследование
interface ThirdInterface extends FirstInterface, SecondInterface
{
}

// в классах обязательно должна быть реализация всех методов наследуемого интерфейса
class Test implements FirstInterface, SecondInterface
{
    public $name = "Alexey";
    public $status = "Admin";

    public function getName()
    {
        echo $this->name;
    }

    public function getStatus()
    {
        echo $this->status;
    }
}

$user1 = new Test();
$user1->getStatus();
$user1->getName();

//Трейты(примеси)

trait Hello
{
    public function sayHello()
    {
        echo "Hello";
    }
}

trait World
{
    public function sayWorld()
    {
        echo " World";
    }
}

class myHelloWorld
{
    use Hello, World;
}

$obj = new myHelloWorld();
$obj->sayHello();
$obj->sayWorld();

// -------------------------------------------------------------------------------
//Методы get, set, clone

//clone

class User
{
    private $name;
    private $city;
    private $id;

    function __construct($name, $city)
    {
        $this->name = $name;
        $this->city = $city;
    }

    function setId($id)
    {
        $this->id = $id;
    }

    public function __clone()
    {
        $this->id = 0;
    }
}

$user1 = new User("Alexey", "Kiev");
$user1->setId(5663);
$user2 = clone $user1;
echo "<pre>";
var_dump($user1); // id: 5663
var_dump($user2); // id: 0

// get, set
// Если переменная класса закрыта, то обращение к ней (получение, установка) возможно только через открытые методы

class GetSet
{
    private $number = 1;

    public function __get($name_of_var)
    {
        return $this->$name_of_var; // возвращает значение переменной, переданной под именем $name_of_var
    }

    public function __set($name_of_var, $new_value)
    {
        $this->$name_of_var = $new_value; // Установка нового значения переменной
    }

    public function show()
    {
        echo $this->number;
    }
}
$obj = new GetSet();
echo $obj->number; // 1. Метод get вернул значение переменной number (именно его мы передали как $name)
echo '<br>';
echo $obj->number = 689; // 689. Метод set по умолчанию возвращает переданное значение $value
echo '<br>';
echo $obj->number; // 689. Это новое установленное значение (его вернул метод get)
echo '<br>';
$obj->show(); // 689. Новое установленное значение распечатывает функция show()

// -------------------------------------------------------------------------------
// Пространства имён
//namespace Home;
// !!! ПОСМОТРЕТЬ ДЕТАЛЬНЕЕ ПРИ НЕОБХОДИМОСТИ
