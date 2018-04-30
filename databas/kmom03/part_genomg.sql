USE course;
DROP VIEW IF EXISTS Vcurrentprojects;
CREATE VIEW Vcurrentprojects
AS
SELECT
	CONCAT(p.firstname, ' ', p.lastname) AS Namn,
    ts.title AS Serie,
    CONCAT(pl.city, ' ', pl.country) AS Från
FROM people AS p
	JOIN tvshows AS ts
		ON p.tvshows_id = ts.id
	JOIN places AS pl
		ON p.places_id = pl.id
;
SELECT * FROM Vcurrentprojects;

-- outer join

SELECT
	CONCAT(p.firstname, ' ', p.lastname) AS Namn,
    ts.title AS Serie
FROM people AS p
	LEFT OUTER JOIN tvshows AS ts
		ON p.tvshows_id = ts.id
WHERE ts.title IS NULL
;