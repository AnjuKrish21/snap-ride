CREATE TABLE IF NOT EXISTS bus_type (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

TRUNCATE table bus_type;

INSERT INTO bus_type (id,name) VALUES (1,'AC');
INSERT INTO bus_type (id,name) VALUES (2,'Non AC');
INSERT INTO bus_type (id,name) VALUES (3,'Sleeper');
INSERT INTO bus_type (id,name) VALUES (4,'Seater');

CREATE TABLE IF NOT EXISTS locations (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

TRUNCATE table locations;

INSERT INTO locations (id, name) VALUES (1, 'Taj Mahal');
INSERT INTO locations (id, name) VALUES (2, 'Qutub Minar');
INSERT INTO locations (id, name) VALUES (3, 'Red Fort');
INSERT INTO locations (id, name) VALUES (4, 'Gateway of India');
INSERT INTO locations (id, name) VALUES (5, 'Mysore Palace');
INSERT INTO locations (id, name) VALUES (6, 'Charminar');
INSERT INTO locations (id, name) VALUES (7, 'Hawa Mahal');
INSERT INTO locations (id, name) VALUES (8, 'Amber Fort');
INSERT INTO locations (id, name) VALUES (9, 'Meenakshi Temple');
INSERT INTO locations (id, name) VALUES (10, 'Backwaters of Kerala');
INSERT INTO locations (id, name) VALUES (11, 'Golden Temple');
INSERT INTO locations (id, name) VALUES (12, 'Victoria Memorial');
INSERT INTO locations (id, name) VALUES (13, 'Ajanta Caves');
INSERT INTO locations (id, name) VALUES (14, 'Ellora Caves');
INSERT INTO locations (id, name) VALUES (15, 'Sundarbans');
INSERT INTO locations (id, name) VALUES (16, 'Ranthambore National Park');
INSERT INTO locations (id, name) VALUES (17, 'Kaziranga National Park');
INSERT INTO locations (id, name) VALUES (18, 'Jaisalmer Fort');
INSERT INTO locations (id, name) VALUES (19, 'Dal Lake');
INSERT INTO locations (id, name) VALUES (20, 'Lotus Temple');
