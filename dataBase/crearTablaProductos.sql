create database susbasta;
use database subasta;
create table productos ( id int IDENTITY(1,1) PRIMARY KEY,  nombre varchar(100), descripcion text, precio int, imagen varchar(50));
