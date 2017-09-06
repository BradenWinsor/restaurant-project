CREATE TABLE menuDescription (
id serial primary key,
menuItemId integer REFERENCES menu(id),
description TEXT
);

INSERT INTO menuDescription (menuItemId, description)
VALUES
('1', 'pulledpork'),
('2', 'topserloin'),
('3', 'hamburger'),
('4', 'doubleburger'),
('5', 'cheese burger'),
('6', 'double cheese'),
('7', 'mega cheese'),
('8', 'ultra burger'),
('9', 'mega ultra'),
('10', 'half rack'),
('11', 'full rack'),
('12', 'bison ribs'),
('13', 'dino ribs')