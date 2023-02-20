-- Database: Daily-Challenge
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab
	
-- Instructions
-- In this puzzle you have to go through all the SQL queries 
-- and provide us the output of the requests before executing them 
-- (ie. make an assumption).
-- Then, execute them to make sure you were correct.


-- What will be the OUTPUT of the following statements?

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- 
--get the number of firstab( alias FT) which ID IS NOT (NULL from the second tab)
-- ==> 0 ?

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

 --> 2
 --get the number of firstab( alias FT) which ID IS NOT (5 from the second tab)

 
 SELECT COUNT(*) 
  FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
 --> 2
  --get the number of firstab( alias FT) which ID IS NOT (5 and null from the second tab)
  
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
 --> 2
 --get the number of firstab( alias FT) which ID IS NOT ( 5)



