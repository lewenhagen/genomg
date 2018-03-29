USE course;

DROP TABLE IF EXISTS tvshows;

CREATE TABLE tvshows
(
    title VARCHAR(40),
    air_year CHAR(4), 
    nr_of_seasons INT
);

INSERT INTO tvshows VALUES
	("Lucifer", "2015", 3),
    ("Orange Is the New Black", "2013", 7),
    ("Altered Carbon", "2018", 1),
    ("The Walking Dead", "2010", 9),
    ("Peaky Blinders", "2013", 5),
    ("The Blue Planet", "2001", 1)
;

