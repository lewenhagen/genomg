DROP DATABASE IF EXISTS kmom02;
CREATE DATABASE kmom02;

USE kmom02;

DROP TABLE IF EXISTS fruits;

CREATE TABLE fruits(id INT, fname VARCHAR(20), color VARCHAR(10), stock INT);

INSERT INTO fruits VALUES
	(1, "Apple", "green", 15),
    (2, "Banana", "yellow", 14),
    (3, "Cherry", "red", 765),
    (4, "Blueberry", "blue", 7),
    (5, "Orange", "orange", 76),
    (6, "Lemon", "yellow", 32),
    (7, "Grape", "green", 8),
    (8, "Honeyberry", "blue", 14),
    (9, "Jackfruit", "green", 65),
    (10, "Kumquat", "orange", 100),
	(10, "Strawberry", "red", 267)
;

-- 1
SELECT color, COUNT(*) AS amount FROM fruits GROUP BY color;
-- 2
SELECT color, COUNT(*) AS amount, stock FROM fruits GROUP BY color HAVING stock > 32;
-- 3
SELECT CONCAT('There are ', stock, ' ', fname, ' in stock') AS Result FROM fruits ORDER BY fname ASC;