-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;


-- Instructions
--1/ Get a list of all film languages.

SELECT * FROM language

--2/ Get a list of all films joined with their languages – 
-- select the following details : 
-- film title, description, and language name. 
-- Try your query with different joins:
-- Get all films, even if they don’t have languages.
-- Get all languages, even if there are no films in those languages.


SELECT * FROM film

SELECT title, description, name
FROM film
LEFT JOIN language
ON film.language_id = language.language_id

SELECT title, description, name
FROM film
INNER JOIN language
ON film.language_id = language.language_id

SELECT title, description, name
FROM film
RIGHT JOIN language
ON film.language_id = language.language_id

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.

CREATE TABLE new_film (
id SERIAL PRIMARY KEY,
name VARCHAR (50) NOT NULL
)

INSERT INTO new_film (name)
VALUES ('The MARTIAN'),
  	('GOTHICA'),
  	 ('SPIRIT AWAY')
	 
	 SELECT * FROM new_film

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns: 
-- 	review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

CREATE TABLE customer_review (
 	review_id SERIAL PRIMARY KEY NOT NULL,
 	review VARCHAR (50) NOT NULL,
	film_id INTEGER REFERENCES new_film (id) ON DELETE CASCADE,
 	language_id INTEGER REFERENCES language (language_id) ON DELETE CASCADE,
	title VARCHAR (50) NOT NULL,
	score INTEGER CHECK (score BETWEEN 1 AND 10),
	review_text TEXT ,
	last_update  TIMESTAMP DEFAULT NOW()
	)
	
	DROP TABLE customer_review 
	
	CHECK (
	price > 0
	AND discount >= 0
	AND price > discount
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

 
INSERT INTO customer_review (review ,film_id ,language_id ,title, score, review_text, last_update)
VALUES ('Really Good Movie', (SELECT id FROM new_film WHERE name= 'The MARTIAN'), (SELECT language_id FROM language WHERE name= 'English'), 'AMAZING', 10, 'This moving is transporting, amazing,blah blah','2010-03-06' )
    
INSERT INTO customer_review (review ,film_id ,language_id ,title, score, review_text, last_update)
VALUES ('Horrible', (SELECT id FROM new_film WHERE name= 'GOTHICA'), (SELECT language_id FROM language WHERE name= 'Italian'), 'STUPIFY', 7, 'This movie is really psychologically hard','2010-03-06')
    
SELECT * FROM customer_review 
  	 
-- Delete a film that has a review from the new_film table

DELETE FROM new_film  WHERE name = 'The MARTIAN';


SELECT * FROM customer_review 
-- what happens to the customer_review table?
 -- it delete the line
 
--  🌟 Exercise 2 : DVD Rental
-- Instructions

-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

UPDATE customer_review 
SET language_id = 1 -- what i want to change
WHERE film_id = 2;

-- Which foreign keys (references) are defined for the customer table? 
--     FK : address_id

-- How does this affect the way in which we INSERT into the customer table?
--  you need  to insert using SELECT in () like  (SELECT id FROM new_film WHERE name= 'The MARTIAN')

-- We created a new table called customer_review. 
-- Drop this table. Is this an easy step, or does it need extra checking?


-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
	SELECT * FROM rental
	
	SELECT COUNT (*) FROM rental 
	WHERE return_date  IS NULL;
	--183 
	
-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT * FROM film

    SELECT *
	FROM film
	ORDER BY rental_rate DESC LIMIT 30
	
-- Your friend is at the store, and decides to rent a movie. 
-- He knows he wants to see 4 movies, but he can’t remember their names. 
-- Can you help him find which movies he wants to rent?

-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title, description,first_name,last_name
FROM film
INNER JOIN film_actor
ON film.film_id = film_actor.film_id
INNER JOIN actor
ON film_actor.actor_id = actor.actor_id
WHERE description ILIKE '%sumo wrestler%'  AND first_name ='Penelope' AND last_name = 'Monroe'

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT * FROM film
SELECT * FROM category

SELECT title, rating, length, name
FROM film
INNER JOIN film_category
ON film.film_id = film_category.film_id
INNER JOIN category
ON film_category.category_id = category.category_id 
WHERE name = 'Documentary' AND rating ='R' AND length < 60

-- The 3rd film : A film that his friend Matthew Mahan rented. 
-- He paid over $4.00 for the rental,
-- and he returned it between the 28th of July and the 1st of August, 2005.


SELECT * FROM rental    
SELECT * FROM customer  
SELECT * FROM film.  


SELECT title, rental_rate,return_Date, first_name,last_name
FROM film
INNER JOIN inventory
ON film.film_id = inventory.film_id
INNER JOIN rental
ON inventory.inventory_id = rental.inventory_id 
INNER JOIN customer
ON rental.customer_id = customer.customer_id 
WHERE first_name = 'Matthew' AND last_name='Mahan' AND rental_rate > 4  AND return_date BETWEEN '2005-07-28' AND '2005-07-31'


-- The 4th film : His friend Matthew Mahan watched this film, as well. 
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT * FROM customer  
SELECT * FROM film   

SELECT title, description, replacement_cost,first_name,last_name
FROM film
INNER JOIN inventory
ON film.film_id = inventory.film_id
INNER JOIN rental
ON inventory.inventory_id = rental.inventory_id 
INNER JOIN customer
ON rental.customer_id = customer.customer_id 
WHERE first_name = 'Matthew' AND last_name='Mahan' AND description || title ILIKE '%boat%' ORDER BY replacement_cost LIMIT 1

