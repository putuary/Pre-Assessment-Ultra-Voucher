CREATE TABLE people(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	parent_id INT,
	FOREIGN KEY (parent_id)REFERENCES people(id)
);

INSERT INTO people(name, parent_id) VALUES
('Zaki', 2), ('Ilham', null), 
('Irwan', 2), ('Arka', 3);

SELECT 
	t1.id, t1.name, t2.name AS parent_name 
FROM people as t1 
LEFT JOIN people as t2 
ON t1.parent_id = t2.id
ORDER BY t1.id;