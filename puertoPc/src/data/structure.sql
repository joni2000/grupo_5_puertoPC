-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: puerto_pc
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updateAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Escritorio','2022-02-03','2022-02-03'),(2,'Notebooks','2022-02-03','2022-02-03'),(3,'Motherboards','2022-02-03','2022-02-03'),(4,'Procesadores','2022-02-03','2022-02-03'),(5,'Memorias RAM','2022-02-03','2022-02-03'),(6,'Almacenamiento','2022-02-03','2022-02-03'),(7,'Placas de video','2022-02-03','2022-02-03'),(8,'Fuentes','2022-02-03','2022-02-03'),(9,'Gabinetes','2022-02-03','2022-02-03'),(10,'Collers','2022-02-03','2022-02-03'),(11,'Teclados y mouses','2022-02-03','2022-02-03'),(12,'Sonido','2022-02-03','2022-02-03'),(13,'Monitores','2022-02-03','2022-02-03'),(14,'Sillas','2022-02-03','2022-02-03'),(15,'Camaras web','2022-02-03','2022-02-03'),(16,'Cables','2022-02-03','2022-02-03');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `product_id` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `colors_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `product_id` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (72,'1644534824326_img_.webp',40),(73,'1644534888756_img_.webp',42),(74,'1644534899625_img_.webp',43),(76,'1644534925418_img_.webp',44);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `category_id` int(11) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (40,'Notebook Asus VivoBook X543UA gris oscura 15.6\"',2,'Pantalla con gran impacto visual\r\nSu pantalla LED de 15.6\" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\r\n\r\nEficiencia a tu alcance\r\nSu procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.',109999,10,10,'2022-02-10 01:04:45','2022-02-10 23:13:44'),(42,'Notebook HP 15-EF2127WM silver 15.6\", AMD Ryzen 5 5500U  8GB de RAM 256GB SSD',2,'Pantalla con gran impacto visual\r\nSu pantalla de 15.6\" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\r\n\r\nEficiencia a tu alcance\r\nSu procesador AMD Ryzen 5 de 6 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar.',96999,10,10,'2022-02-10 01:08:32','2022-02-10 23:14:48'),(43,'Notebook Dell Inspiron 3505 plata 15.6\", AMD Ryzen 5 3450U  8GB de RAM 256GB SSD',2,'Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento.\r\n\r\nPantalla con gran impacto visual\r\nSu pantalla LED de 15.6\" y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.',99999,10,10,'2022-02-10 01:09:33','2022-02-10 23:14:59'),(44,'Notebook Lenovo IdeaPad 15ITL6  arctic gray táctil Core i5 1135G7  12GB de RAM 2',2,'La notebook Lenovo IdeaPad 3 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento.\r\n\r\nPantalla con gran impacto visual\r\nSu pantalla LCD de 15.6\" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\r\n',120999,10,10,'2022-02-10 02:00:10','2022-02-10 23:15:25');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(70) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `rol` varchar(20) NOT NULL DEFAULT '0',
  `image` varchar(100) NOT NULL DEFAULT 'default_image',
  `country` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'puerto_pc'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-10 20:16:24
