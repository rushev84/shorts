<pre>
<?php
// 1. Прочитать json файл
$res = file_get_contents('s.json');
$data = json_decode($res, true);
print_r($data);

for ($i = 0; $i < count($data); $i++){
    $data[$i]['age'] = $data[$i]['age'] + 5;
}

print_r($data);

$jsonData = json_encode($data);
file_put_contents('t.json', $jsonData);

