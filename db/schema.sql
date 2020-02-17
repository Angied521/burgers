CREATE Database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL auto_increment,
    burger_name varchar (45),
    devoured boolean DEFAULT FALSE,
    PRIMARY KEY (id)
),