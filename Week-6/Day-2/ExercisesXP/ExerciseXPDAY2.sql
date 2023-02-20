CREATE TABLE items (
Object_id SERIAL PRIMARY KEY,
size VARCHAR NOT NULL, 
price decimal NOT NULL
)

SELECT * FROM items;

INSERT INTO items (size, price)
VALUES ('Small Desk', '100')

INSERT INTO items (size, price)
VALUES ('Large Desk', '300')

INSERT INTO items (size, price)
VALUES ('Fan', '80')



CREATE TABLE customers (
client_id SERIAL PRIMARY KEY,
first_name VARCHAR NOT NULL, 
last_name VARCHAR NOT NULL
)

SELECT * FROM customers ;

INSERT INTO customers (first_name, last_name)
VALUES 
	('Greg','Jones'),
	('Sandra', 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Melanie', 'Johnson')


-- Exercise 1 : Items And Customers
-- Instructions
-- We will work on the public database that we created yesterday.
-- Use SQL to get the following from the database:

-- All items, ordered by price (lowest to highest).
SELECT * FROM items ORDER BY price ASC

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).

SELECT * FROM items WHERE price >= 80

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name FROM customers ORDER BY first_name ASC LIMIT 3

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
	SELECT last_name FROM customers ORDER BY last_name DESC


