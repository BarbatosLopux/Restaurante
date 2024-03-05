CREATE DATABASE Plato; 
USE Plato; 

CREATE TABLE plato (
  id_plato int PRIMARY KEY,
  nombre_plato varchar(30) NOT NULL,
  descripcion text NOT NULL,
  precio double NOT NULL,
  categoria_plato varchar(30) NOT NULL,
  disponibilidad boolean NOT NULL,
  tiempo_preparacion varchar(30) NOT NULL
);

INSERT INTO plato (id_plato, nombre_plato, descripcion, precio, categoria_plato, disponibilidad, tiempo_preparacion) 
VALUES (1, 'Albondigas', 'Bolas de carne con tomate', 10.99, 'Categoría 1', true, '30 minutos');


INSERT INTO plato (id_plato, nombre_plato, descripcion, precio, categoria_plato, disponibilidad, tiempo_preparacion) 
VALUES (2, 'Carne', 'Carne Asada', 12.58, 'Categoría 2', true, '10 minutos');

-- Ejemplo para el metodo POST 
--{
--  "nombrePlato": "Nuevo Plato",
--  "descripcion": "Descripción del nuevo plato",
--  "precio": 10.99,
--  "categoriaPlato": "Categoria del nuevo plato",
--  "disponibilidad": true,
--  "tiempoPreparacion": "30 min"
--}
--

