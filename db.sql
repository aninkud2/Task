-- DROP DATABASE practicedb;
CREATE DATABASE practicedb;
use practicedb;
CREATE table newtable(
Id int auto_increment,
Hub varchar(100) not null,
Riders varchar(200)not null,
Apointment varchar(200) not null,
primary key(Id)
);
INSERT INTO newtable(Hub,Riders,Apointment)
values("Abule-Egba","Bayo","In-House"),("Abule-Egba","Kareem","3pl");
SELECT * FROM newtable