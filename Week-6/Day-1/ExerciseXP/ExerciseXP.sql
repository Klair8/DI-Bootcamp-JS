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

-- Use SQL to fetch the following data from the database:
-- All the items.
SELECT size FROM items

-- All the items with a price above 80 (80 not included).
SELECT * FROM items WHERE price >'80';

-- All the items with a price below 300. (300 included)
 SELECT * FROM items WHERE price <'300';


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
	
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
 ==> SELECT * FROM customers  WHERE last_name='Smith';
--  ==> the table will be empty 

-- All customers whose last name is ‘Jones’.
SELECT * FROM customers  WHERE last_name='Jones';
-- 1	"Greg"	"Jones"
-- 2	"Sandra"	"Jones"

-- All customers whose firstname is not ‘Scott’.
SELECT * FROM customers  WHERE first_name='Scott';
-- 3	"Scott"	"Scott"
