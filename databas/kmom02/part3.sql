-- 1 GROUP BY

SELECT COUNT(firstname) AS Antal, project FROM people GROUP BY project;

-- 2 HAVING

SELECT COUNT(firstname) AS Antal, project FROM people GROUP BY project HAVING Antal > 2;

-- 3 STRÄNGFUNKTIONER
-- concat

SELECT
	CONCAT(project, ' has ', COUNT(firstname), ' actors') AS Result
    FROM people
    GROUP BY project
;

-- datum/tid
-- https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html

SELECT
	firstname,
    lastname,
    CONCAT(MONTHNAME(born), ' ', DAY(born)) AS 'Born'
    FROM people
;

-- 3 VYER

DROP VIEW IF EXISTS Vbirthmonth;

CREATE VIEW Vbirthmonth
	AS
	SELECT
		firstname,
        lastname,
        MONTHNAME(born) AS 'Born'
        FROM people
;

SELECT * FROM Vbirthmonth WHERE Born = 'November';


-- 4 JOIN
SELECT
	p.firstname AS Firstname,
	p.lastname AS Lastname,
	p.project AS Project,
	ts.nr_of_seasons AS Seasons,
	ts.air_year AS Started
	FROM people AS p
		JOIN tvshows AS ts
			ON p.project = ts.title
;

-- CREATE VIEW FROM JOIN
DROP VIEW IF EXISTS Vavailable;

CREATE VIEW Vavailable
	AS
	SELECT
		p.firstname AS Firstname,
		p.lastname AS Lastname,
		p.project AS Project,
        ts.nr_of_seasons AS Seasons,
		ts.air_year AS Started
		FROM people AS p
			JOIN tvshows AS ts
				ON p.project = ts.title
;


SELECT * FROM Vavailable ORDER BY Started DESC;


SELECT
	COUNT(Firstname) AS Antal,
    Project,
    Started
FROM Vavailable
GROUP BY
	Project,
    Started
;
