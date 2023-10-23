-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: footwear-fusioon
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `adresses`
--

LOCK TABLES `adresses` WRITE;
/*!40000 ALTER TABLE `adresses` DISABLE KEYS */;
INSERT INTO `adresses` VALUES (1,'calle 123','Buenos Aires','2023-10-13 21:49:26','2023-10-13 21:49:26');
/*!40000 ALTER TABLE `adresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,1,1,'2023-10-13 21:49:26','2023-10-13 21:49:26');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Hombres','2023-10-13 21:49:26','2023-10-13 21:49:26'),(2,'Mujeres','2023-10-13 21:49:26','2023-10-13 21:49:26'),(3,'Nenes','2023-10-13 21:49:26','2023-10-13 21:49:26');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'naranja-01.jpg','naranja-02.jpg','naranja-03.jpg','naranja-04.jpg','0','0',1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(2,'azul-01.jpg','azul-02.jpg','azul-03.jpg','azul-04.jpg','0','0',2,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(3,'blanca-01.jpg','blanca-02.jpg','blanca-03.jpg','blanca-04.jpg','0','0',3,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(4,'rojo-01.jpg','rojo-02.jpg','rojo-03.jpg','rojo-04.jpg','0','0',4,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(5,'violeta-01.jpg','violeta-02.jpg','violeta-03.jpg','violeta-04.jpg','0','0',5,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(6,'negra-01.jpg','negra-02.jpg','negra-03.jpg','negra-04.jpg','0','0',6,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(7,'blanco-01.jpg','blanco-02.jpg','blanco-03.jpg','blanco-04.jpg','0','0',7,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(8,'negro-01.jpg','negro-02.jpg','negro-03.jpg','negro-04.jpg','0','0',8,'2023-10-13 21:49:26','2023-10-13 21:49:26');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2023-10-13 21:49:26',1,1,'2023-10-13 21:49:26','2023-10-13 21:49:26');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Fresh Foam X 1080v12 Wide',89000,15,'hombre','Empeine Hypoknit diseñado para proporcionar áreas estratégicas de sujeción y elasticidad La construcción tipo bootie envuelve el pie para brindar un ajuste ceñido y firme La suela exterior de goma soplada en la parte delantera del pie brinda un rebote superior','naranja','1',1,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26'),(2,'Vans Zapatillas U AUTHENTIC 2',28900,0,'mujer','Calzado skate icónico de la marca + Suela vulcanizada +\r\nCapellada de textil de algodón + Plantilla desmontable de EVA + Suela de caucho\r\nvulcanizada para un mejor agarre y menor desgaste + Excelente calce y confort.','azul','1',2,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26'),(3,'Botitas Jordan Air 7 Retro Cardinal',136000,0,'hombre','Botitas Jordan Air 7 Retro Cardinal De Moda Para Hombre Código: Cu9307-106','blanco','1',1,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26'),(4,'Vans Zapatillas K SK8-MID REISSUE V',29800,10,'nene','Ideales para todo tipo de rutinas y actividades. Su diseño y confort las convierten en el calzado perfecto.','rojo','1',3,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26'),(5,'FuelCell Rebel v3',81400,10,'mujer','Fusionando velocidad y amortiguación, la FuelCell Rebel v3 te aporta la energía que necesitas en tus quehaceres diarios, sesiones de entrenamiento o largas competiciones. Esta zapatilla de running para mujer incorpora la espuma FuelCell de alto rebote que te propulsa a cada zancada y está confeccionada en un empeine de punto técnico muy ligero, con la cantidad justa de estructura para que te desplaces a ritmos muy altos.','violeta','1',2,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26'),(6,'Zapatillas Lite Racer Rebold',41000,25,'nene','Inspiradas en el estilo running, estas zapatillas adidas le imprimen energía deportiva a tu look diario. La amortiguación liviana mantiene tus pies cómodos y preparados para todo lo que te depare el día.','negro','1',3,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26'),(7,'Nike Air Max SC',54000,30,'hombre','Con sus líneas simples, el look de atletismo tradicional y, por supuesto, la amortiguación Air visible, el Nike Air Max SC es el toque final perfecto para cualquier atuendo.','blanco','0',1,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26'),(8,'Nike Free Metcon 5',83000,5,'hombre','Cuando tus entrenamientos se ponen superespecíficos, el Nike Free Metcon 5 te ayuda a llegar a esos lugares profundos para encontrar ese último gramo de fuerza y salir del otro lado en un grito de victoria. Combina estilo con sustancia y flexibilidad en el antepié con estabilidad en la parte superior, perfecto para volar durante un día de cardio o mejorar tu agilidad.','negro','0',1,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','2023-10-13 21:49:26','2023-10-13 21:49:26'),(2,'User','2023-10-13 21:49:26','2023-10-13 21:49:26');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20231011191941-create-category.js'),('20231011192136-create-role.js'),('20231011192229-create-adress.js'),('20231011192528-create-user.js'),('20231011192705-create-order.js'),('20231011193235-create-product.js'),('20231011193350-create-image.js'),('20231011193430-create-size.js'),('20231013205538-create-cart.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,23,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(2,24,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(3,25,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(4,26,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(5,27,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(6,28,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(7,29,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(8,30,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(9,31,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(10,32,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(11,33,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(12,34,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(13,35,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(14,36,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(15,37,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(16,38,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(17,39,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(18,40,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(19,41,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(20,42,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(21,43,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(22,44,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(23,45,1,'2023-10-13 21:49:26','2023-10-13 21:49:26'),(24,46,1,'2023-10-13 21:49:26','2023-10-13 21:49:26');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ariel','Boxler','ariel@gmail.com','$2a$10$UxwoYZVswBHz1rQEnNzdLuaEhlbmqwleh9WBRD9c5UmK/qHW3D.e.','2023-09-13 00:00:00',1,1,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26'),(2,'Luciano','Carrizo','luciano@gmail.com','$2a$10$If/hkoZ27kwMA5WqXK0wfuON2rAsynUFPEgIqpIJTItkiOFvme6xC','2023-09-13 00:00:00',1,1,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26'),(3,'Lucas','Arroyo','lucas@gmail.com','$2a$10$SMOg/VtsEdsW5l3PDJogqe423plIU2OgXXmVm4j6EKjlmJEXqD5oe','2023-09-13 00:00:00',1,1,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26'),(4,'luciano','Cabral','luciano1@gmail.com','$2a$10$y.C4VV73Rp9nq/yLwy7vC.YVxHeNZj4megQfucUibjy65lbxoHeyC','2023-09-13 00:00:00',1,1,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26'),(5,'ISMAEL','callamullo','ismael@gmail.com','$2a$10$PsQEMpLUIlcKgUBr1NL2/OxPioUG8l7U/Is1NWoo.PUazIZ/Fabp2','2023-09-28 00:00:00',2,1,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26'),(6,'Eric','Mena','eric@gmail.com','$2a$10$Be6OdHr2D1J4wEp/81/FDeX8aIyaau7c.yP72W8KEIOFl/RgFDMlS','2023-09-13 00:00:00',2,1,'2023-10-13 21:49:26','2023-10-13 21:49:26','2023-10-13 21:49:26');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-13 18:56:01
