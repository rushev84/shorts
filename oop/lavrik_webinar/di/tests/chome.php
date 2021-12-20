<?php

include_once('../contracts/controller.php');
include_once('../contracts/model.php');
include_once('../contracts/storage.php');

include_once('../controllers/shop.php');

// пишем заглушки для тестирования

class MockModel implements Model
{
    public function all(): array
    {
        return [];
    }
}

class MockStorage implements Storage
{
    protected array $hash = [];

    public function set(string $name, $value)
    {
        $this->hash[$name] = $value;
    }

    public function get(string $name)
    {
        return $this->hash[$name] ?? null;
    }

    public function slice(string $name)
    {
        $val = null;

        if (isset($this->hash[$name])) {
            $val = $this->hash[$name];
            unset($this->hash[$name]);
        }

        return $val;
    }
}

$m = new MockModel();
$s = new MockStorage();

$controller = new CShop($m, $s);
echo $s->get('test');
