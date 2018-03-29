DROP DATABASE IF EXISTS course;
CREATE DATABASE course;

USE course;

DROP TABLE IF EXISTS people;

CREATE TABLE people
(
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    born DATE, 
    project VARCHAR(40)
);

INSERT INTO people VALUES
	("Tom", "Ellis", "1978-11-17", "Lucifer"),
    ("Taylor", "Shilling", "1984-07-27", "Orange Is the New Black"),
    ("Dichen", "Lachman", "1982-02-22", "Altered Carbon"),
    ("Laverne", "Cox", "1972-05-29", "Orange Is the New Black"),
    ("Danielle", "Brooks", "1989-11-17", "Orange Is the New Black"),
    ("Andrew", "Lincoln", "1973-11-14", "The Walking Dead"),
    ("Tricia", "Helfer", "1974-04-11", "Lucifer"),
    ("Norman", "Reedus", "1969-01-06", "The Walking Dead"),
    ("Joel", "Kinnaman", "1979-11-25", "Altered Carbon"),
    ("Chris", "Conner", "1975-04-04", "Altered Carbon"),
    ("Cillian", "Murphy", "1976-05-25", "Peaky Blinders"),
    ("Melissa", "McBride", "1965-05-23", "The Walking Dead"),
    ("Paul", "Anderson", "1978-02-12", "Peaky Blinders"),
    ("Helen", "McCrory", "1968-08-17", "Peaky Blinders"),
	("David", "Attenborough", "1926-05-08", "The Blue Planet"),
	("Lauren", "Cohan", "1982-01-07", "The Walking Dead")
;

