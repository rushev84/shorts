
SHOW DATABASES; - просмотр всех доступных БД
CREATE DATABASE <database_name>; - создание новой БД
USE <database_name>; - выбор БД для дальнейшей работы
SOURCE <file.sql> позволит выполнить сразу несколько SQL-команд, содержащихся в файле с расширением .sql.
DROP DATABASE; - Стандартная SQL-команда для удаления целой базы данных.
SHOW TABLES; - просмотр всех доступных таблиц в выбранной БД.

Создание новой таблицы
CREATE TABLE <table_name1> (
<col_name1><col_type1>,
<col_name2><col_type2>,
<col_name3><col_type3>
PRIMARY KEY(<col_name1>),
FOREIGN KEY(<col_name2>) REFERENCES <table_name2>(<col_name2>)
);

-- Пример:
CREATE TABLE instructor (
  ID CHAR(5) AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  dept_name VARCHAR(20),
  salary NUMERIC(8,2),
  PRIMARY KEY (ID),
  FOREIGN KEY (dept_name) REFERENCES department(dept_name)
);


Сведения о таблице:
DESCRIBE superheroes;

Добавление, удаление и переименование столбцов:
ALTER TABLE superheroes ADD COLUMN alive BOOLEAN;
ALTER TABLE superheroes DROP COLUMN year;
ALTER TABLE superheroes CHANGE `year` `ye` INTEGER;


Добавление данных в таблицу:
INSERT INTO superheroes (name, appearances, universe) VALUES ('Spider-Man', 4043, 'Marvel');

Обновление данных таблицы:
UPDATE superheroes SET name='Batman', universe='dc' WHERE id=69;
-- Несколько строк по условию
UPDATE superheroes SET gender='Man' WHERE gender='Male Characters';

Удаление строк из таблицы:
DELETE FROM superheroes WHERE id=69;
DELETE FROM superheroes WHERE gender='Male Characters';

Удаление всех данных из таблицы:
DELETE FROM superheroes;

Удалить всю таблицу целиком:
DROP TABLE superheroes;

Вывести все данные из таблицы:
SELECT * FROM superheroes;

Вывести только определенные столбцы:
SELECT name, appearances FROM superheroes;

Вывести столбец под псевдонимом:
SELECT name AS hero_name FROM superheroes;
SELECT name hero_name FROM superheroes;

Получение уникальных значений:
SELECT DISTINCT eye, hair FROM superheroes;

Первые 5 значений:
SELECT DISTINCT hair FROM superheroes LIMIT 5;

Условия в запросе:
SELECT * FROM superheroes WHERE gender = 'Female Characters';
SELECT * FROM superheroes WHERE year BETWEEN 1960 AND 1980;
SELECT * FROM superheroes WHERE hair IN ('Strawberry Blond Hair', 'Red Hair', 'Auburn Hair');
Другой способ:
SELECT * FROM superheroes WHERE hair = 'Red Hair' OR hair = 'Strawberry Blond Hair' OR hair = 'Auburn Hair';
-- Находим редкий цвет волос:
SELECT * FROM superheroes WHERE hair NOT IN ('Blond Hair', 'Black Hair', 'Brown Hair', 'Red Hair');

Шаблон выборки (% - любое кол-во символов (включая 0), _ - ровно 1 символ):
SELECT * FROM superheroes WHERE hair LIKE ('%Blond%');

Логические выражения:
SELECT * FROM superheroes WHERE gender = 'Female Characters' AND align = 'Bad Characters';

Сортировка:
SELECT * FROM superheroes ORDER BY year DESC;
-- Кол-во появлений отрицательных персонажей:
SELECT * FROM superheroes WHERE align = 'Bad Characters' ORDER BY appearances DESC;
-- Топ-3 супергероев-здодеев:
SELECT * FROM superheroes WHERE align = 'Bad Characters' AND gender = 'Male Characters' ORDER BY appearances DESC LIMIT 3;
Сортировка по нескольким столбцам (сначала по 1-ому, потом внутри 1-го - по 2-ому):
SELECT * FROM superheroes ORDER BY year, appearances;

Группировка:
-- по полу
SELECT gender, COUNT(*) FROM superheroes GROUP BY gender;
-- по типу героя
SELECT align, COUNT(*) FROM superheroes GROUP BY align;
-- многоуровневая группировка
SELECT universe, align, COUNT(*) FROM superheroes GROUP BY universe, align;
-- Какое кол-во женщин-супергероев с каждым цветом волос
SELECT hair, COUNT(*) FROM superheroes WHERE gender='Female Characters' GROUP BY hair;
-- Какое кол-во женщин-супергероев с каждым цветом волос, сортировка по популярности, топ-5
SELECT hair, COUNT(*) FROM superheroes WHERE gender='Female Characters' GROUP BY hair ORDER BY COUNT(*) DESC LIMIT 5;

Агрегатные функции:
-- находим общее кол-во появлений разных типов персонажей
SELECT align, COUNT(*), SUM(appearances) FROM superheroes GROUP BY align;
-- сколько раз появлялся наименее и наиболее популярный герой
SELECT year, MIN(appearances), MAX(appearances) FROM superheroes GROUP BY year;
-- агрегатные функции можно использовать и без группировки
SELECT COUNT(*), MIN(appearances), MAX(appearances), SUM(appearances), AVG(appearances) FROM superheroes;

Фильтрация результатов группировки:
SELECT hair, COUNT(*) FROM superheroes WHERE gender='Female Characters' GROUP BY hair HAVING COUNT(*) > 2;

Объединение данных из разных таблиц:
SELECT products.name, product_types.type_name
FROM products JOIN product_types
ON products.type_id = product_types.id;
-- с использованием псевдонимов:
SELECT p.name, t.type_name
FROM products AS p JOIN product_types AS t
ON p.type_id = t.id;



CREATE TABLE `evaluations` (`respondent_id` VARCHAR(255),`department_id` CHAR,`gender` BOOLEAN,`value` INT, PRIMARY KEY (`respondent_id`));
