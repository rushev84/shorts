<?php
require_once './function.php';

if (isset($_GET['action'])) {
    $action = trim($_GET['action']);
    switch ($action) {
        case 1:
            echo t1();
            break;
        case 2:
            echo t2();
            break;
        case 3:
            echo t3();
            break;
        case 4:
            echo t4();
            break;
        case 5:
            echo t5();
            break;
        case 6:
            echo t6();
            break;
    }
}

if (isset($_POST['action'])) {
    $action = trim($_POST['action']);
    switch ($action) {
        case 1:
            echo t7();
            break;
        case 2:
            echo t8();
            break;
        case 3:
            echo t9();
            break;
        case 4:
            echo t10();
            break;
    }
}