-- Database: Daily-Challenge

-- DROP DATABASE IF EXISTS "Daily-Challenge";


-- Instructions
-- You are going to practice tables relationships
-- Part I

-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.
-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

CREATE TABLE Customer (
    customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL
)

CREATE TABLE Customer_profil (
    id SERIAL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT false,
	customer_id INTEGER UNIQUE REFERENCES Customer (customer_id)
)



SELECT * FROM customer;
SELECT * FROM Customer_profil 
INSERT into customer(first_name, last_name) 
VALUES ('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive')

-- Insert those customer profiles, use subqueries
-- John is loggedIn
-- Jerome is not logged in


INSERT into Customer_profil (isLoggedIn, customer_id) 
VALUES 
( TRUE, (SELECT customer_id FROM customer WHERE first_name = 'John')),
(FALSE, (SELECT customer_id FROM customer WHERE first_name = 'Jerome'))
--  TRUNCATE Customer_profil

-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers


SELECT first_name,isLoggedIn
FROM customer
INNER JOIN Customer_profil  
ON customer.customer_id = Customer_profil.customer_id
WHERE isLoggedIn = TRUE

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.

SELECT first_name,isLoggedIn
FROM customer
LEFT JOIN Customer_profil  
ON customer.customer_id = Customer_profil.customer_id

-- The number of customers that are not LoggedIn

SELECT COUNT(*) 
FROM customer
LEFT JOIN Customer_profil  
ON customer.customer_id = Customer_profil.customer_id
WHERE isLoggedIn = FALSE




-- Part II:

-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
	title VARCHAR(30) NOT NULL,
	author VARCHAR(30) NOT NULL
)

-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

INSERT into Book (title, author) 
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')

SELECT * FROM Book;

-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. 
-- Make sure that the age is never bigger than 15 (Find an SQL method);

CREATE TABLE student(
    student_id SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL UNIQUE,
	age integer CHECK(age<=15) NOT NULL
)

-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14

INSERT into student (name, age) 
VALUES ('John', '12'),
('Lera', '11'),
('Patrick', '10'),
('Bob', '14')

SELECT * FROM student;
SELECT * FROM Book;

-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date

-- junction table
CREATE TABLE library (
	borrowed_date DATE NOT NULL,
	book_fk_id INTEGER NOT NULL REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_id INTEGER NOT NULL REFERENCES student (student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP table library

-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table

-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
SELECT * FROM student   
SELECT * FROM Book;   

INSERT into library (borrowed_date,student_id,book_fk_id) 
VALUES 
( '2022-02-15', (SELECT student_id FROM student WHERE name = 'John'), (SELECT book_id FROM Book WHERE title ILIKE '%Alice%')),
( '2021-03-03', (SELECT student_id FROM student WHERE name = 'Bob'), (SELECT book_id FROM Book WHERE title ILIKE '%kill%')),
( '2021-05-23', (SELECT student_id FROM student WHERE name = 'Lera'), (SELECT book_id FROM Book WHERE title ILIKE '%Alice%')),
( '2021-08-12', (SELECT student_id FROM student WHERE name = 'Bob'), (SELECT book_id FROM Book WHERE title ILIKE '%Harry%'))


-- Display the data
-- Select all the columns from the junction table
SELECT * FROM library  

-- Select the name of the student and the title of the borrowed books

SELECT title, name
FROM Book
INNER JOIN student 
ON Book.book_id = student.student_id


-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG (age), title
FROM Book
INNER JOIN student 
ON Book.book_id = student.student_id
WHERE title ILIKE '%Alice%'
GROUP BY book_id

-- Delete a student from the Student table, what happened in the junction table ?

SELECT * FROM student   

DELETE FROM student WHERE name ='John'

SELECT * FROM library  
 --=> the student also dispaer from the junction table with all his informations







