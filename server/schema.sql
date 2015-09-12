DROP DATABASE chat;


CREATE DATABASE chat;

USE chat;


/*Messages*/
CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userId INT NOT NULL,
  text VARCHAR(255),
  createdAt DATE,
  roomName VARCHAR(255)
);

/* Create other tables and define schemas for them here! */   

/*All users*/
CREATE TABLE users(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userName VARCHAR(255) NOT NULL
);

/*Friends*/
CREATE TABLE friends(
  idA INT NOT NULL,
  idB INT NOT NULL
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/*
SELECT friendsOfOne.idB AS friends From ((select idB from u2u where idA=1 and idB<>1) union (select idA from u2u where idB = 1 and idA <> 1)) AS friendsOfOne;;;;;
*/