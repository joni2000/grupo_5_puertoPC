create database puerto_pc;

use puerto_pc;

CREATE TABLE user
(
 id int(11) PRIMARY KEY auto_increment NOT NULL,
 first_name varchar(45) NOT NULL,
 last_name  varchar(45) NOT NULL,
 email    varchar(60) NOT NULL,
 password   varchar(70) NOT NULL,
 address    varchar(100) NULL,
 city       varchar(100) NULL,
 phone      varchar(30) NULL,
 rol       varchar(20) NOT NULL DEFAULT 0,
 image     varchar(100) NOT NULL default 'default_image',
 country    varchar(100) NULL,
 province   varchar(100) NULL,
 createdAt  timestamp NULL,
 updatedAt  timestamp NULL
);

CREATE TABLE categories
(
 id int(11)PRIMARY KEY NOT NULL,
 name varchar(80) NOT NULL,
 createdAt date NULL,
 updateAt date NULL
);

CREATE TABLE products
(
 id int(11)PRIMARY KEY auto_increment NOT NULL,
 name varchar(80) NOT NULL,
 category_id int(11) NOT NULL,
 description varchar(800) NOT NULL,
 price  int(11) NOT NULL,
 stock int(11) NOT NULL,
 discount  int(11) NOT NULL,
 createdAt  timestamp NULL,
 updatedAt  timestamp NULL,
 foreign key (category_id) REFERENCES categories( id )
);

CREATE TABLE images
(
 id int(11)PRIMARY KEY NOT NULL,
 name varchar(100) NOT null,
 product_id int(11) NOT NULL,
 FOREIGN key (product_id) REFERENCES products ( id )
);
CREATE TABLE colors
(
 id int(11)PRIMARY KEY NOT NULL,
 name varchar(45) NOT NULL,
 product_id int(11) NOT NULL,
 FOREIGN key (product_id) REFERENCES products ( id )
 );