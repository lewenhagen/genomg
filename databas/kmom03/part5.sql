USE course;

SELECT 
	COUNT(*) AS Antal,
    ts.title AS Tvshow,
    ts.nr_of_seasons AS Säsonger
FROM people AS p
	JOIN tvshows AS ts
		ON p.tvshow_id = ts.id
GROUP BY Tvshow, Säsonger
;
-- joina 3 tabeller
SELECT
	CONCAT(p.firstname, ' ', p.lastname) AS Namn,
    ts.title AS Tvshow,
    CONCAT(pl.city, ', ', pl.country) AS Plats
FROM people AS p
	JOIN tvshows AS ts
		ON p.tvshow_id = ts.id
	JOIN places AS pl
		ON p.country_id = pl.id
;

SELECT
	CONCAT(p.firstname, ' ', p.lastname) AS Namn,
    ts.title AS Tvshow,
    CONCAT(pl.city, ', ', pl.country) AS Plats
FROM people AS p
	JOIN tvshows AS ts
		ON p.tvshow_id = ts.id
	JOIN places AS pl
		ON p.country_id = pl.id
ORDER BY pl.country
;

-- outer join no tvshows
SELECT
	CONCAT(p.firstname, ' ', p.lastname) AS Namn,
    ts.title AS Tvshow
FROM people AS p
LEFT OUTER JOIN tvshows AS ts
	ON p.tvshow_id = ts.id
WHERE ts.title IS NULL
;
-- outer join no shows 3 tabeller
SELECT
	CONCAT(p.firstname, ' ', p.lastname) AS Namn,
    pl.country AS Från,
    ts.title AS Tvshow
FROM people AS p
LEFT OUTER JOIN tvshows AS ts
	ON p.tvshow_id = ts.id
JOIN places AS pl
	ON p.country_id = pl.id
WHERE ts.title IS NULL
;
