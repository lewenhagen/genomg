USE course;



-- CREATE PERSON -----------------------------------

DROP PROCEDURE IF EXISTS createPerson;
DELIMITER //
CREATE PROCEDURE createPerson(
    pfname VARCHAR(20),
    plname VARCHAR(20),
    pborn DATE,
    pplace INT,
    ptvshow INT
)
BEGIN
    INSERT INTO people (firstname, lastname, born, tvshows_id, places_id) VALUES (pfname, plname, pborn, ptvshow, pplace);
END
//
DELIMITER ;



-- SHOW ONE PERSON -----------------------------------
 
DROP PROCEDURE IF EXISTS showOne;
DELIMITER //
CREATE PROCEDURE showOne(
    pid INT
)
BEGIN
    SELECT
		p.id, 
        p.firstname, 
        p.lastname, 
        DATE_FORMAT(p.born, "%Y-%m-%d") AS born, 
        ts.title, 
        CONCAT(pl.city, ", ", pl.country) AS place 
	FROM people AS p
		LEFT OUTER JOIN tvshows AS ts
			ON p.tvshows_id = ts.id
		LEFT OUTER JOIN places AS pl
			ON p.places_id = pl.id
    WHERE p.id = pid;
END
//
DELIMITER ;



-- SHOW ALL PERSONS EXTENDED -----------------------------------
 
DROP PROCEDURE IF EXISTS showAllExtended;
DELIMITER //
CREATE PROCEDURE showAllExtended()
BEGIN
    SELECT * FROM VpersonsExtended;
END
//
DELIMITER ;



-- GET PLACES -----------------------------------
 
DROP PROCEDURE IF EXISTS getPlaces;
DELIMITER //
CREATE PROCEDURE getPlaces()
BEGIN
    SELECT id, CONCAT(city, ", ", country) AS place FROM places;
END
//
DELIMITER ;



-- GET ALL PLACES -----------------------------------
 
DROP PROCEDURE IF EXISTS getAllPlaces;
DELIMITER //
CREATE PROCEDURE getAllPlaces()
BEGIN
    SELECT id,
    city, 
    country
FROM places;
END
//
DELIMITER ;



-- GET TVSHOWS -----------------------------------
 
DROP PROCEDURE IF EXISTS getTvshows;
DELIMITER //
CREATE PROCEDURE getTvshows()
BEGIN
    SELECT id, title FROM tvshows;
END
//
DELIMITER ;



-- EDIT PERSON -------------------------

DROP PROCEDURE IF EXISTS editPerson;
DELIMITER //
CREATE PROCEDURE editPerson(
    pId INT,
    pfname VARCHAR(20),
    plname VARCHAR(20),
    pborn DATE,
    ptvshow_id INT,
    pplace_id INT
)
BEGIN
    UPDATE people SET
        `firstname` = pfname,
        `lastname` = plname,
        `born` = pborn,
        `tvshows_id` = ptvshow_id,
        `places_id` = pplace_id
    WHERE
        `id` = pId;
END
//
DELIMITER ;



-- DELETE PERSON -------------------------

DROP PROCEDURE IF EXISTS deletePerson;
DELIMITER //
CREATE PROCEDURE deletePerson(
    pId INT
)
BEGIN
    DELETE FROM people WHERE `id` = pId;
END
//
DELIMITER ;
