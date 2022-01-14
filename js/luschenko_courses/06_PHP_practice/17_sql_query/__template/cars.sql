-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 06 2020 г., 10:22
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `php_17`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cars`
--

CREATE TABLE `cars` (
  `id` int(3) NOT NULL,
  `cars` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `cost` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `cars`
--

INSERT INTO `cars` (`id`, `cars`, `image`, `cost`) VALUES
(1, 'Audi Q8 RS', 'http://elite.cars.ua/img/upload/cache/zc-1_iar-1_h-357_w-570_5f282fc05642e3_94197956.jpg', 160000),
(2, 'Mercedes-Benz G-Class 63 AMG', 'http://elite.cars.ua/img/upload/cache/zc-1_iar-1_h-357_w-570_5f356382bacc69_66810028.jpg', 205000),
(3, 'McLaren 650S', 'http://elite.cars.ua/img/upload/cache/zc-1_iar-1_h-357_w-570_5f241a85872b43_21398487.jpg', 170000),
(4, 'BMW 550 M', 'http://elite.cars.ua/img/upload/cache/zc-1_iar-1_h-357_w-570_5f118bbd529ed6_48853022.jpg', 65000),
(5, 'Chevrolet Explorer Limited SE', 'http://elite.cars.ua/img/upload/cache/zc-1_iar-1_h-357_w-570_5f0dbbc159b0d3_30458547.jpg', 85600);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
