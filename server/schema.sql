DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;


/*Messages*/
CREATE TABLE messages (
  /* Describe your table here.*/
  objectId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  text VARCHAR(255),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  roomname VARCHAR(255)
);

/* Create other tables and define schemas for them here! */   

/*All users*/
CREATE TABLE users(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL
);

/*Friends*/
CREATE TABLE friends(
  idA INT NOT NULL,
  idB INT NOT NULL
);

/*Create fake datass*/
INSERT INTO messages (username, text, roomname) values("Jess", "lolo", "Lobby"),("Alex", "also lolo", "Lobby"),("Fredd :hand:", "Han Yolo", "Lobby");

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/*
SELECT friendsOfOne.idB AS friends From ((select idB from u2u where idA=1 and idB<>1) union (select idA from u2u where idB = 1 and idA <> 1)) AS friendsOfOne;;;;;
*/