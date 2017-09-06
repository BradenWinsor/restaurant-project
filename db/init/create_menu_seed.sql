CREATE TABLE menu (
id serial primary key,
menuItem TEXT,
price TEXT,
picture TEXT
);

INSERT INTO menu (menuItem, price, picture)
VALUES
('Pulled Pork', '11.98', 'pulledPork.jpg'),
('Top Serloin', '11.99', 'topserlion.jpg'),
('Hamburger', '8.99', 'hamburger.jpg'),
('Double Burger', '9.50', 'doubleburger.jpg'),
('Cheese Burger', '8.99', 'cheeseburger.jpg'),
('Double Cheese Burger', '11.99', 'doublecheese.jpg'),
('Mega Cheese Burger', '15.89', 'megacheese.jpg'),
('Ultra Burger', '22.11', 'ultra.jpg'),
('Mega Ultra Burger', '35.00', 'megaultra.jpg'),
('Half Rack of Ribs', '9.99', 'halfrack.jpg'),
('Full Rack', '15.89', 'fullrack.jpg'),
('Bison Ribs', '20.00', 'bisonribs.jpg'),
('Dino Ribs', '40.55', 'dinoribs.jpg')

