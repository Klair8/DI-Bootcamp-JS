CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);

SELECT * FROM actors

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Meryl','Streep','06/22/1941', 4);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Jennifer','Garner','04/17/1972', 2);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
	('Gaspard','Ulliel','11/25/1981', 4),
	('Vincent','Cassel','11/23/1966', 3),
	('Jean','Reno','07/30/1948', 2)


-- Use the table actors to retrieve :
-- The first 4 actors
SELECT * FROM actors LIMIT 4;
-- The first 4 actors ordered in descending order of the last_name 
-- (ie. sorted DESCENDING by the "last_name" column)
SELECT * FROM actors ORDER BY last_name DESC LIMIT 4;
-- The actors that have the letter 'e' in their first_name
SELECT * FROM actors WHERE first_name LIKE '%e%';
-- The actors that got at least 3 oscars
SELECT * FROM actors WHERE number_oscars >='3';
 
 
-- Daily-Challenge
-- 1. Count how many actors are in the table.
 ==> there is 7 actors in the table
-- 2. Try to add a new actor with some blank fields. 
-- What do you think the outcome will be ?

 INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Juliette','Binoche');
-- ==> ERROR:  INSERT has more target columns than expressions

 INSERT INTO actors (first_name, last_name)
VALUES('Juliette','Binoche');
--==> and if you take off the target colum still have an error 
-- ERROR:  null value in column "age" of relation "actors" violates not-null constraint