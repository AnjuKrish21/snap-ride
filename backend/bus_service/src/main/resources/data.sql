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

--TRUNCATE table locations;

INSERT INTO locations (id, name) VALUES (1, 'Taj Mahal') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (2, 'Qutub Minar') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (3, 'Red Fort') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (4, 'Gateway of India') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (5, 'Mysore Palace') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (6, 'Charminar') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (7, 'Hawa Mahal') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (8, 'Amber Fort') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (9, 'Meenakshi Temple') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (10, 'Backwaters of Kerala') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (11, 'Golden Temple') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (12, 'Victoria Memorial') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (13, 'Ajanta Caves') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (14, 'Ellora Caves') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (15, 'Sundarbans') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (16, 'Ranthambore National Park') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (17, 'Kaziranga National Park') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (18, 'Jaisalmer Fort') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (19, 'Dal Lake') ON CONFLICT (id) DO NOTHING;
INSERT INTO locations (id, name) VALUES (20, 'Lotus Temple') ON CONFLICT (id) DO NOTHING;
