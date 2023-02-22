-- Database: Daily-Challenge

-- DROP DATABASE IF EXISTS "Daily-Challenge";

CREATE TABLE product_orders(
	product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL, 
    manufacture_place VARCHAR(100) NOT NULL,
    materiels CHAR(10)
)

DROP TABLE product_orders

			
INSERT INTO product_orders (product_name, manufacture_place,materiels) 
VALUES ('Kistera Chaise', 'Lyon', 'wood'),
('Suzy Table', 'Marseille', 'inox'),
('Sofa Maria', 'Nice', 'fabric')

SELECT * FROM product_orders


CREATE TABLE items(
items_id INTEGER PRIMARY KEY,
sale_date DATE DEFAULT NOW(),
price integer NOT NULL,
product_id INTEGER REFERENCES product_orders(product_id)
)

DROP TABLE items

INSERT INTO items (sale_date, price) 
VALUES ('2023-04-04', '2000'),
('2022-12-12', '600'),
('2023-04-07', '1000')


-- Create a function that returns the total price for a given order.
