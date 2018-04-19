USE course;

DROP PROCEDURE IF EXISTS createPerson;
DELIMITER //
CREATE PROCEDURE createPerson(
    pfname VARCHAR(20),
    plname VARCHAR(20),
    pborn DATE
)
BEGIN
    INSERT INTO people (firstname, lastname, born) VALUES (pfname, plname, pborn);
END
//
DELIMITER ;

-- -----------------------------------
 
DROP PROCEDURE IF EXISTS showOne;
DELIMITER //
CREATE PROCEDURE showOne(
    pid INT
)
BEGIN
    SELECT id, firstname, lastname, DATE_FORMAT(born, "%Y-%m-%d") AS born, tvshows_id, places_id from people WHERE id = pid;
END
//
DELIMITER ;

-- -------------------------

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

-- -------------------------

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


CALL showOne(1);