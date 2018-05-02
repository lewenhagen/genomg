USE course;

DROP VIEW IF EXISTS VpersonsExtended;
CREATE VIEW VpersonsExtended
AS
SELECT
	p.id,
	p.firstname,
    p.lastname,
    DATE_FORMAT(p.born, "%Y-%m-%d") AS born,
    pl.city,
    pl.country,
    ts.title
FROM people AS p
	LEFT OUTER JOIN places AS pl
		ON p.places_id = pl.id
	LEFT OUTER JOIN tvshows AS ts
		ON p.tvshows_id = ts.id
ORDER BY p.id
;

-- SELECT * FROM VpersonsExtended;

