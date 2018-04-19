USE course;
-- DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS tvshows;
DROP TABLE IF EXISTS places;


CREATE TABLE tvshows
(
	id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(40) NOT NULL,
    air_year CHAR(4), 
    nr_of_seasons INT,
    
    PRIMARY KEY (id)
);

CREATE TABLE places
(
	id INT AUTO_INCREMENT NOT NULL,
    city VARCHAR(40),
    country VARCHAR(20),
    
    PRIMARY KEY(id)
);

CREATE TABLE people
(
	id INT AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    born DATE,
    tvshows_id INT,
    places_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (tvshows_id) REFERENCES tvshows(id),
    FOREIGN KEY (places_id) REFERENCES places(id)
);

INSERT INTO tvshows (title, air_year, nr_of_seasons) VALUES
	("Lucifer", "2015", 3),
    ("Orange Is the New Black", "2013", 7),
    ("Altered Carbon", "2018", 1),
    ("The Walking Dead", "2010", 9),
    ("Peaky Blinders", "2013", 5),
    ("The Blue Planet", "2001", 1),
    ("Vikings", "2013", 6)
;
-- SELECT * FROM tvshows;

INSERT INTO places (city, country) VALUES
	("Toronto", "Canada"),
    ("Stockholm", "Sweden"),
    ("Cardiff", "Wales"),
    ("Boston", "USA"),
    ("Kathmandu", "Nepal"),
    ("Mobile", "USA"),
    ("Augusta", "USA"),
    ("London", "England"),
    ("Donalda", "Canada"),
    ("Hollywood", "USA"),
    ("Silver City", "USA"),
    ("Douglas", "Ireland"),
    ("Lexington", "USA"),
    ("Philadelphia", "USA")
;


INSERT INTO people (firstname, lastname, born, tvshows_id, places_id) VALUES
	("Tom", "Ellis", "1978-11-17", 1, 3),
    ("Taylor", "Shilling", "1984-07-27", 2, 4),
    ("Dichen", "Lachman", "1982-02-22", 3, 5),
    ("Laverne", "Cox", "1972-05-29", 2, 6),
    ("Danielle", "Brooks", "1989-11-17", 2, 7),
    ("Andrew", "Lincoln", "1973-11-14", 4, 8),
    ("Tricia", "Helfer", "1974-04-11", 1, 9),
    ("Norman", "Reedus", "1969-01-06", 4, 10),
    ("Joel", "Kinnaman", "1979-11-25", 3, 2),
    ("Chris", "Conner", "1975-04-04", 3, 11),
    ("Cillian", "Murphy", "1976-05-25", 5, 12),
    ("Melissa", "McBride", "1965-05-23", 4, 13),
    ("Paul", "Anderson", "1978-02-12", 5, 8),
    ("Helen", "McCrory", "1968-08-17", 5, 8),
	("David", "Attenborough", "1926-05-08", 6, 8),
	("Lauren", "Cohan", "1982-01-07", 4, 14)
;

-- Add some people without tvshow
INSERT INTO people (firstname, lastname, born, places_id) VALUES
	("Gustaf", "Skarsgård", "1980-11-12", 2),
    ("Katheryn", "Winnick", "1977-12-17", 1)
;

SELECT * FROM places;