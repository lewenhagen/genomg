USE course;

SELECT 
	COUNT(*) AS Antal,
    ts.title AS Serie,
    ts.nr_of_seasons AS Säsonger
FROM people AS p
	JOIN tvshows AS ts
		ON p.tvshows_id = ts.id
GROUP BY Serie, Säsonger
;
-- joina 3 tabeller
SELECT
	CONCAT(p.firstname, ' ', p.lastname) AS Namn,
    ts.title AS Serie,
    CONCAT(pl.city, ', ', pl.country) AS Plats
FROM people AS p
	JOIN tvshows AS ts
		ON p.tvshows_id = ts.id
	JOIN places AS pl
		ON p.places_id = pl.id
;

SELECT
	CONCAT(p.firstname, ' ', p.lastname) AS Namn,
    ts.title AS Serie,
    CONCAT(pl.city, ', ', pl.country) AS Från
FROM people AS p
	JOIN tvshows AS ts
		ON p.tvshows_id = ts.id
	JOIN places AS pl
		ON p.places_id = pl.id
ORDER BY pl.country
;

DROP VIEW IF EXISTS Vcurrentprojects;
CREATE VIEW Vcurrentprojects
AS
SELECT
	CONCAT(p.firstname, ' ', p.lastname) AS Namn,
    ts.title AS Serie,
    CONCAT(pl.city, ', ', pl.country) AS Från
FROM people AS p
	JOIN tvshows AS ts
		ON p.tvshows_id = ts.id
	JOIN places AS pl
		ON p.places_id = pl.id
ORDER BY pl.country
;

SELECT
   *
FROM Vcurrentprojects;

-- outer join no tvshows
SELECT
	CONCAT(p.firstname, ' ', p.lastname) AS Namn,
    ts.title AS Serie
FROM people AS p
LEFT OUTER JOIN tvshows AS ts
	ON p.tvshows_id = ts.id
WHERE ts.title IS NULL
;
-- outer join no shows 3 tabeller
SELECT
	CONCAT(p.firstname, ' ', p.lastname) AS Namn,
    pl.country AS Från,
    ts.title AS Serie
FROM people AS p
LEFT OUTER JOIN tvshows AS ts
	ON p.tvshows_id = ts.id
JOIN places AS pl
	ON p.places_id = pl.id
WHERE ts.title IS NULL
;

SELECT
	CONCAT(firstname, ' ', lastname) AS Namn
    
FROM people WHERE firstname LIKE '%Gu%';
