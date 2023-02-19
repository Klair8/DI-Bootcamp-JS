CREATE TABLE students (
 id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 birth_date DATE NOT NULL
)

INSERT INTO students
  (first_name, last_name, birth_date)
VALUES
  ('Marc', 'Benichou','11/02/1998'),
   ('Yoan', 'Cohen','12/03/2010'),
    ('Lea', 'Benichou','07/27/1987'),
	 ('	Amelia', 'Dux','04/07/1996'),
	  ('David', 'Grez','06/14/2003'),
	   ('Omer', 'Simpson','10/03/1980')
	   

-- 1/Fetch all of the data from the table.
	SELECT*FROM students

-- Fetch all of the students first_names and last_names.
	SELECT first_name,last_name FROM students

-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
    SELECT * FROM students WHERE id = 2
	
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
	SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';
	
-- Fetch the students whose last_names are Benichou OR first_names are Marc.
	SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';
	
-- Fetch the students whose first_names contain the letter a.
	SELECT * FROM students WHERE first_name LIKE '%a%';
	
-- Fetch the students whose first_names start with the letter a.
	SELECT * FROM students WHERE first_name LIKE 'a%';
	
-- Fetch the students whose first_names end with the letter a.
	SELECT * FROM students WHERE first_name LIKE '%a';
	
-- Fetch the students whose second to last letter of their 
-- first_names are a (Example: Leah).
	SELECT * FROM students WHERE first_name LIKE '%a_'
	
-- Fetch the students whose id’s are equal to 1 AND 3 .
	SELECT * FROM students WHERE id IN (1,3);
	
-- Fetch the students whose birth_dates are equal to 
-- or come after 1/01/2000. (show all their info).
     SELECT * FROM students WHERE birth_date >='2000/1/01';
	 
	 
-- EXERCISE XP GOLD
-- Select
-- For the following questions, you have to fetch the first_names, 
-- last_names and birth_dates of the students.
	SELECT*FROM students
-- Fetch the first four students. 
-- You have to order the four students alphabetically by last_name.
	SELECT * FROM students ORDER BY last_name ASC LIMIT 4;
-- Fetch the details of the youngest student.
    SELECT * FROM students WHERE birth_date = '2010-12-03';
-- Fetch three students skipping the first two students.
  	SELECT * FROM Students OFFSET 2 ROWS ;
 
 
 
 
 
 
 
 
 
 
 
