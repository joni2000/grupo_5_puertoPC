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


DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orderId` (`orderId`),
  KEY `productId` (`productId`),
  KEY `userId` (`userId`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `carts_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

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
) ENGINE=InnoDB AUTO_INCREMENT=285 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (80,'1645747661515_img_.webp',40),(81,'1645747661516_img_.webp',40),(82,'1645747661517_img_.webp',40),(83,'1645747661518_img_.webp',40),(84,'1645747661519_img_.webp',40),(85,'1645747759942_img_.webp',42),(86,'1645747759943_img_.webp',42),(87,'1645747759945_img_.webp',42),(88,'1645747759949_img_.webp',42),(101,'1645827124562_img_.webp',43),(102,'1645827124563_img_.webp',43),(103,'1645827124563_img_.webp',43),(104,'1645827124564_img_.webp',43),(114,'1645827304729_img_.webp',44),(115,'1645827304730_img_.webp',44),(116,'1645827304730_img_.webp',44),(117,'1645827304733_img_.webp',44),(159,'1648079347916_img_.webp',59),(160,'1648079347917_img_.webp',59),(161,'1648079347917_img_.webp',59),(162,'1648079347918_img_.webp',59),(163,'1648079479657_img_.webp',60),(164,'1648079479658_img_.webp',60),(165,'1648079479658_img_.webp',60),(166,'1648079479659_img_.webp',60),(167,'1648079631131_img_.webp',61),(168,'1648079631132_img_.webp',61),(169,'1648079631132_img_.webp',61),(170,'1648079631133_img_.webp',61),(171,'1648079631134_img_.webp',61),(172,'1648079771908_img_.webp',62),(173,'1648079771908_img_.webp',62),(174,'1648080159148_img_.webp',63),(175,'1648080159149_img_.webp',63),(176,'1648080325617_img_.webp',64),(177,'1648080325617_img_.webp',64),(178,'1648080325619_img_.webp',64),(179,'1648080480880_img_.webp',65),(180,'1648080480881_img_.webp',65),(181,'1648080565325_img_.webp',66),(182,'1648080565326_img_.webp',66),(183,'1648080565327_img_.webp',66),(184,'1648080649890_img_.webp',67),(185,'1648080649890_img_.webp',67),(186,'1648080810387_img_.webp',68),(187,'1648080810387_img_.webp',68),(188,'1648080810387_img_.webp',68),(189,'1648080897733_img_.webp',69),(190,'1648080897734_img_.webp',69),(191,'1648082645870_img_.webp',70),(192,'1648082645871_img_.webp',70),(193,'1648082750442_img_.webp',71),(194,'1648082750443_img_.webp',71),(195,'1648082750444_img_.webp',71),(196,'1648082828416_img_.webp',72),(197,'1648082828418_img_.webp',72),(198,'1648082943654_img_.webp',73),(199,'1648082943655_img_.webp',73),(200,'1648083079113_img_.webp',74),(201,'1648083079114_img_.webp',74),(202,'1648083288718_img_.webp',75),(203,'1648083288718_img_.webp',75),(204,'1648083288719_img_.webp',75),(205,'1648083288719_img_.webp',75),(206,'1648083288720_img_.webp',75),(207,'1648083394814_img_.webp',76),(208,'1648083394814_img_.webp',76),(209,'1648083394814_img_.webp',76),(210,'1648083479300_img_.webp',77),(211,'1648083633182_img_.webp',78),(212,'1648083633182_img_.webp',78),(213,'1648083633183_img_.webp',78),(214,'1648083633184_img_.webp',78),(215,'1648083633185_img_.webp',78),(216,'1648083723705_img_.webp',79),(217,'1648083723705_img_.webp',79),(218,'1648083723706_img_.webp',79),(219,'1648083723707_img_.webp',79),(220,'1648083877282_img_.webp',80),(221,'1648083877283_img_.webp',80),(222,'1648083877283_img_.webp',80),(223,'1648083877284_img_.webp',80),(224,'1648083877285_img_.webp',80),(225,'1648083964573_img_.webp',81),(226,'1648083964573_img_.webp',81),(227,'1648083964574_img_.webp',81),(228,'1648084038627_img_.webp',82),(229,'1648084038628_img_.webp',82),(230,'1648084038630_img_.webp',82),(231,'1648084144310_img_.webp',83),(232,'1648084245195_img_.webp',84),(233,'1648084245196_img_.webp',84),(234,'1648084353146_img_.webp',85),(235,'1648084353147_img_.webp',85),(236,'1648084353148_img_.webp',85),(237,'1648084418627_img_.webp',86),(238,'1648084418628_img_.webp',86),(239,'1648084418628_img_.webp',86),(240,'1648084418632_img_.webp',86),(241,'1648084522907_img_.webp',87),(242,'1648084522908_img_.webp',87),(243,'1648084522908_img_.webp',87),(244,'1648084522909_img_.webp',87),(245,'1648084522909_img_.webp',87),(246,'1648084633149_img_.webp',88),(247,'1648084633150_img_.webp',88),(248,'1648084633150_img_.webp',88),(249,'1648084633151_img_.webp',88),(250,'1648084633151_img_.webp',88),(251,'1648084701111_img_.webp',89),(252,'1648084701111_img_.webp',89),(253,'1648084785224_img_.webp',90),(254,'1648084785224_img_.webp',90),(255,'1648084785226_img_.webp',90),(256,'1648084785227_img_.webp',90),(257,'1648084785228_img_.webp',90),(258,'1648084977626_img_.webp',91),(259,'1648084977626_img_.webp',91),(260,'1648084977627_img_.webp',91),(261,'1648084977628_img_.webp',91),(262,'1648085058050_img_.webp',92),(263,'1648085058050_img_.webp',92),(264,'1648085058051_img_.webp',92),(265,'1648085058054_img_.webp',92),(266,'1648085150556_img_.webp',93),(267,'1648085150556_img_.webp',93),(268,'1648085150557_img_.webp',93),(269,'1648085150577_img_.webp',93),(270,'1648085255885_img_.webp',94),(271,'1648085255886_img_.webp',94),(272,'1648085255887_img_.webp',94),(273,'1648085255888_img_.webp',94),(274,'1648085348498_img_.webp',95),(275,'1648085348498_img_.webp',95),(276,'1648085348499_img_.webp',95),(277,'1648085348518_img_.webp',95),(278,'1648085429684_img_.webp',96),(279,'1648085429685_img_.webp',96),(280,'1648085511622_img_.webp',97),(281,'1648085511623_img_.webp',97),(282,'1648085594903_img_.webp',98),(283,'1648085594903_img_.webp',98),(284,'1648085594903_img_.webp',98);
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
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (40,'Notebook Asus VivoBook X543UA gris oscura 15.6\"',2,'Pantalla con gran impacto visual\r\nSu pantalla LED de 15.6\" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\r\n\r\nEficiencia a tu alcance\r\nSu procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.',109999,10,10,'2022-02-10 01:04:45','2022-02-25 00:07:41'),(42,'Notebook HP 15-EF2127WM silver 15.6\", AMD Ryzen 5 5500U  8GB de RAM 256GB SSD',2,'Pantalla con gran impacto visual\r\nSu pantalla de 15.6\" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\r\n\r\nEficiencia a tu alcance\r\nSu procesador AMD Ryzen 5 de 6 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar.',96999,10,10,'2022-02-10 01:08:32','2022-02-25 00:09:19'),(43,'Notebook Dell Inspiron 3505 plata 15.6\", AMD Ryzen 5 3450U  8GB de RAM 256GB SSD',2,'Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento.\r\n\r\nPantalla con gran impacto visual\r\nSu pantalla LED de 15.6\" y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.',99999,10,10,'2022-02-10 01:09:33','2022-02-25 22:12:04'),(44,'Notebook Lenovo IdeaPad 15ITL6  arctic gray táctil Core i5 1135G7  12GB de RAM 2',2,'La notebook Lenovo IdeaPad 3 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento.\r\n\r\nPantalla con gran impacto visual\r\nSu pantalla LCD de 15.6\" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\r\n',120999,10,10,'2022-02-10 02:00:10','2022-02-25 22:15:04'),(59,'Mother Asus Prime A320m-k Am4 Ddr4 A320 Hdmi M2',3,'PRIME A320M-K\r\n\r\nCPU:\r\nAMD AM4 socket AMD Opteron ™ sharp de segunda generación / equipado con Dacentrurus ™ Radeon ™ Vega Graphics / Dacentrurus ™ Generation 1/7th generación A-series / Procesador Athlon X4\r\ncompatible con CPU de hasta 8 núcleos\r\n* Visite www. asus .com para ver la lista de compatibilidad con procesadores.\r\n\r\nChipset: AMD A320\r\n\r\nRAM:\r\nAMD Ryzen ™ 2nd Generation / Ryzen ™ con Radeon ™ Vega Graphics / Ryzen ™ 1st Generation Processor\r\n2 x DIMM, capacidad hasta 32GB, DDR4 3200 (overclockeado) / 3000 (overclockeado) / 2933 (overclockeado) / 2800 (OC) / 2666/2400/2133 MHz Memoria sin búfer\r\nProcesador AMD serie A -pass 7 / procesador Athlon X4\r\n2 x DIMM, capacidad de hasta 32 GB, DDR4 2400/2133 MHz Memoria sin búfer Memoria de\r\ndoble canal Arquitectura\r\n* La compatibilidad con Hyper DIMM depende de las características físicas de la CPU.\r\nLa compatibilidad con la memoria ECC (modelo ECC) depende de la CPU.\r\n* Visite www.asus.com o consulte el manual del usuario para obtener la Lista de soporte de proveedores calificados de memoria (QVL).',7359,10,8,'2022-03-23 23:49:07','2022-03-23 23:49:07'),(60,'Mother Gigabyte B450m Aorus Elite Amd Ryzen Rgb Fusion',3,'• CPU\r\nAMD Socket AM4, support for: AMD Ryzen™ 5000 series/ 3rd Generation AMD Ryzen™ processors/ 2nd Generation AMD Ryzen™ processors/ 1st Generation AMD Ryzen™ processors/ 2nd Generation AMD Ryzen™ with Radeon™ Vega Graphics processors/ 1st Generation AMD Ryzen™ with Radeon™ Vega Graphics processors/ AMD Ryzen™ with Radeon™ Vega Graphics processors\r\n\r\n• MEMORIA\r\n4 x DDR4 DIMM sockets supporting up to 128 GB (32 GB single DIMM capacity) of system memory\r\nDual channel memory architecture\r\nSupport for DDR4 3600(O.C.)/3466(O.C.)/3200(O.C.)/2933/2667/2400/2133 MHz memory modules\r\nSupport for ECC Un-buffered DIMM 1Rx8/2Rx8 memory modules (operate in non-ECC mode)\r\nSupport for non-ECC Un-buffered DIMM 1Rx8/2Rx8/1Rx16 memory modules\r\nSupport for Extreme Memory Profile (XMP) memory modules',16251,10,0,'2022-03-23 23:51:19','2022-03-23 23:51:19'),(61,'Motherboard Asus Prime B560m-a 1200 Hdmi Ddr4  Pc Gaming ',3,'MOTHER ASUS PRIME B560M-A\r\n\r\nSocket Intel LGA 1200: Listo para procesadores Intel Core de 11.va generación.\r\nSolución de potencia mejorada: 8 fases de poder, chokes de aleación y condensadores duraderos para una entrega de potencia estable.\r\n\r\nRefrigeración integral: Disipador de calor VRM más fuerte, disipador M.2 flexible, disipador de PCH, puertos de ventilador híbridos y Fan Xpert 2+.\r\n\r\nOverclocking de memoria: Admite overclocking de memoria hasta 5000 MHz.\r\n\r\nASUS OptiMem II: Enrutamiento cuidadoso para reducir significativamente la diafonía, preservando la integridad de la señal para mejorar la estabilidad de la memoria.\r\n\r\nConectividad ultrarrápida: PCIe 4.0, Intel 1 Gb Ethernet, USB 3.2 Gen 2 posterior (Tipo A y Tipo C) y VM. Puerto V-M.2 Key E para Wi-Fi.\r\n\r\n\r\nCPU\r\nIntel® Socket LGA1200 for 11th Gen Intel® Core™ Processors & 10th Gen Intel® Core™, Pentium® Gold and Celeron® Processors\r\nSupports Intel® 14 nm CPU\r\n',13999,10,0,'2022-03-23 23:53:51','2022-03-23 23:53:51'),(62,'Procesador AMD Ryzen 7 5700G 100-100000263BOX de 8 núcleos y  4.6GHz ',4,'Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles.\r\nAMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.\r\n\r\nNúcleos: el corazón del procesador\r\nEn este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto.\r\n\r\nMáxima potencia\r\nAl estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!',55247,10,0,'2022-03-23 23:56:11','2022-03-23 23:56:11'),(63,'Procesador gamer AMD Ryzen 5 5600X 100',4,'Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles.\r\nAMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.\r\n\r\nNúcleos: el corazón del procesador\r\nEn este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto.\r\n\r\nMáxima potencia\r\nAl estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!',41299,10,0,'2022-03-24 00:02:39','2022-03-24 00:02:39'),(64,'Procesador gamer Intel Core i9-10900F BX8070110900F de 10 núcleos y  5.2GHz ',4,'Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.\r\n\r\nNúcleos: el corazón del procesador\r\nEn este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto.',75444,10,0,'2022-03-24 00:05:25','2022-03-24 00:05:51'),(65,'Memoria RAM Vengeance LPX gamer color black  16GB ',5,'Descripción\r\nCon diseños únicos y modernos, Corsair es una de las marcas más elegidas por los usuarios al momento de comprar una memoria ram. Cargar programas más rápido, aumentar la capacidad de responder y ejecutar aplicaciones de uso intensivo son algunas de las características y ventajas que tendrás al momento de adquirir esta memoria. No esperes más para mejorar el rendimiento de tu computadora.\r\n\r\nPotenciá tu PC\r\nCon su tecnología DDR4, mejorará el desempeño de tu equipo, ya que opera en 3 y 4 canales, generando mayor fluidez y velocidad en la transferencia de datos. ¡Optimizá al máximo el rendimiento de tu ordenador!',13500,10,0,'2022-03-24 00:08:00','2022-03-24 00:08:00'),(66,'Memoria RAM Fury gamer color negro  4GB 1 HyperX HX426C16FB3/4',5,'Si notás que tu computadora tiene bajo rendimiento o que su capacidad no se adapta a tus necesidades de uso, es momento de renovar su memoria RAM. Aumentarás su productividad y podrás trabajar de manera rápida y en simultáneo con múltiples aplicaciones.\r\n\r\nPotenciá tu PC\r\nCon su tecnología DDR4, mejorará el desempeño de tu equipo, ya que aumentará la fluidez y la velocidad en la transferencia de datos ¡Optimizá al máximo el rendimiento de tu computadora y reducí el consumo energético!\r\n\r\nTu equipo como nuevo\r\nEsta memoria de formato DIMM es ideal para tu Computadoras de escritorio. ¡Instalala y comenzá a disfrutar de un óptimo funcionamiento!\r\n',5999,10,0,'2022-03-24 00:09:25','2022-03-24 00:09:25'),(67,'Memoria RAM XLR8 Gaming EPIC-X RGB gamer color negro  16GB ',5,'Si notás que tu computadora tiene bajo rendimiento o que su capacidad no se adapta a tus necesidades de uso, es momento de renovar su memoria RAM. Aumentarás su productividad y podrás trabajar de manera rápida y en simultáneo con múltiples aplicaciones.\r\n\r\nPotenciá tu PC\r\nCon su tecnología DDR4, mejorará el desempeño de tu equipo, ya que opera en 3 y 4 canales, generando mayor fluidez y velocidad en la transferencia de datos. ¡Optimizá al máximo el rendimiento de tu computadora!\r\n\r\nTu equipo como nuevo\r\nEsta memoria es ideal para tu Computadoras de escritorio. ¡Instalala y comenzá a disfrutar de un óptimo funcionamiento!',12023,10,5,'2022-03-24 00:10:49','2022-03-24 00:10:49'),(68,'Disco sólido interno Kingston SA400S37/480G 480GB negro',6,'Considerado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes. Mejora de forma notable la capacidad de respuesta de su sistema, ya que alcanza velocidades de lectura/escritura de hasta 500MB/seg y 450MB/seg. Por ende, es 10 veces más rápido que un disco duro tradicional.\r\nAl estar compuesta por una memoria flash es silenciosa y posee pocas probabilidades de tener fallas.\r\n\r\nIrrompible\r\nAdemás de su funcionalidad y soporte, la importancia de los discos de almacenamiento también radica en su calidad y resistencia. Despreocupate y disfrutá de la durabilidad de este producto debido a su capacidad de absorber y resistir fuertes impactos.',9002,10,0,'2022-03-24 00:13:30','2022-03-24 00:13:30'),(69,'Disco sólido interno Gigabyte GP-GSTFS31120GNTD 120GB negro',6,'Con la unidad en estado sólido Gigabyte vas a incrementar la capacidad de respuesta de tu equipo. Gracias a esta tecnología podrás invertir en velocidad y eficiencia para el inicio, la carga y la transferencia de datos.\r\n\r\nIrrompible\r\nAdemás de su funcionalidad y soporte, la importancia de los discos de almacenamiento también radica en su calidad y resistencia. Despreocupate y disfrutá de la durabilidad de este producto debido a su capacidad de absorber y resistir fuertes impactos.\r\n\r\nMás velocidad a tu alcance\r\nEste producto posee una interfaz SATA III que se encarga de transferir datos con la placa madre de tu computadora. Es de gran importancia y con su velocidad de envío de información mejora el rendimiento. Vas a poder cargar todo tipo de archivos en tu PC con rapidez.',3299,10,0,'2022-03-24 00:14:57','2022-03-24 00:14:57'),(70,'Placa de video Nvidia Asus  Dual GeForce GTX 16 Series GTX 1650',7,'Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.\r\n\r\nVelocidad en cada lectura\r\nComo cuenta con 896 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU.\r\n',67999,10,0,'2022-03-24 00:44:05','2022-03-24 00:44:05'),(71,'Placa de video Nvidia Zotac  Gaming GeForce GTX 16 Series GTX 1660 ',7,'Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.\r\n\r\nVelocidad en cada lectura\r\nComo cuenta con 1408 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU.',108420,10,6,'2022-03-24 00:45:50','2022-03-24 00:45:50'),(72,'Placa de video Nvidia Gigabyte  GeForce 10 Series GT 1030 GV-N1030D5-2GL 2GB',7,'Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.\r\n\r\nVelocidad en cada lectura\r\nComo cuenta con 384 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU.',30999,10,0,'2022-03-24 00:47:08','2022-03-24 00:47:08'),(73,'Fuente de alimentación para PC LNZ SX Series SX500-FC 500W negra 115V/230V',8,'Con la fuente de alimentación LNZ SX500-FC podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes.\r\n\r\nControl de temperatura\r\nA través de su sistema de refrigeración, podrás mantener la temperatura ideal de sus componentes y evitar su sobrecalentamiento.\r\n\r\nSin ruido ni distracciones\r\nDebido a su funcionamiento silencioso, tu equipo operará minimizando el nivel de ruido, para que tu jornada sea más agradable.',2399,10,0,'2022-03-24 00:49:03','2022-03-24 00:49:03'),(74,'Fuente de alimentación para PC Noga RGB Power ATX-700 RGB 700W negra 200V - 240V',8,'Con la fuente de alimentación Noga ATX-700 RGB podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes.',4849,10,6,'2022-03-24 00:51:19','2022-03-24 00:51:19'),(75,'Cpu Cooler Xigmatek Windpower 963 Intel 1200 Amd Am4 ',10,'Xigmatek HDT patentado\r\nTubos de calor de cobre ultraeficientes\r\nDisipador de calor de aluminio de alto rendimiento\r\nSoporta CPU Intel y AMD\r\nVentilador LED RGB - NO CONFIGURABLE - MULTICOLOR ESTATICO COMO LA FOTO\r\nExcelente enfriamiento y PWM RPM (800-1800 RPM)\r\nRodamiento hidráulico de larga duración\r\nMTBF hasta 35.000 horas\r\nFuncionamiento silencioso a 23,2 dBA\r\n',3048,10,0,'2022-03-24 00:54:48','2022-03-24 00:54:48'),(76,'Cooler Gamer Brainstorm Ar-10 120mm Led',10,'Cantidad de fans incluidos: 1\r\nTamaño: 120mm\r\nTipo de conexión: 3 pin o molex\r\nTipo de rodamiento: hidráulico\r\nConsumo: 2,9 W\r\nRuido maximo: 23 DBA\r\nVelocidad maxima: 1200 RPM\r\nFlujo de aire: 40 CFM\r\n\r\nIluminación LED: SI',1499,10,0,'2022-03-24 00:56:34','2022-03-24 00:56:34'),(77,'Turbina Cooler Fan Extractor 220v Ruleman 4 Pulgadas 120x38m',10,'Turbina 4 Pulgadas 220V Ball\r\n120x120x38mm. Ruleman\r\nMarca: VT FAN CT4A 38mm\r\nTurbina 220V. 4 Pulgadas Montada en Rulemán.\r\nSoplador / FAN / Cooler de 120mmx120mmx38mm\r\nDescripción\r\nTurbina de 120x120mm con rodamiento. Apta para la infinidad de aplicaciones donde sea necesario ventilar, extraer o inyectar aire.\r\nCarcasa de aluminio con paletas plásticas.\r\nSalida con chicote de cable de aproximadamente 15 centímetros\r\nSoplador / Turbina / Cooler VT FAN de 120mmx120mmx38mm',2182,10,30,'2022-03-24 00:57:59','2022-03-24 00:57:59'),(78,'Teclado gamer bluetooth Redragon Draconic K530 QWERTY ',11,'Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.\r\n\r\nDistinción a todo color\r\nSu retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.\r\n\r\nTecnología antighosting\r\nEste dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.',9329,10,8,'2022-03-24 01:00:33','2022-03-24 01:00:33'),(79,'Teclado gamer Redragon Dragonborn K630 QWERTY Redragon ',11,'Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.\r\n\r\nDistinción a todo color\r\nSu retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.\r\n',5317,10,0,'2022-03-24 01:02:03','2022-03-24 01:02:03'),(80,'Teclado bluetooth Logitech Master Series MX Keys QWERTY español color grafito co',11,'Descripción\r\nInnovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo.\r\n\r\nDistinción a todo color\r\nSu retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.',12163,10,0,'2022-03-24 01:04:37','2022-03-24 01:04:37'),(81,'Mouse de juego Logitech  G Series Lightsync G203 lila',11,'\r\nRapidez y confiabilidad de los botones\r\nCon sus 6 botones podrás tener mayor control e independencia para ejecutar.\r\n\r\nApto para fácil traslado\r\nNavegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.',2656,10,0,'2022-03-24 01:06:04','2022-03-24 01:06:04'),(82,'Mouse de juego Redragon  Griffin M607 negro',11,'Con más de 20 años de experiencia en fabricación de productos, Redragon innova día a día en diseño y calidad. Su objetivo es producir equipamiento de alta gama para jugadores, con excelentes prestaciones y a un precio accesible. Los mouses Redragon son adecuados para todas las ocasiones, ya sea para entretenerse en el hogar o usarlo en el trabajo. Experimentá el diseño cómodo y elegante de este dispositivo.\r\n\r\nAdaptado a tus movimientos\r\nEl mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.',1956,10,0,'2022-03-24 01:07:18','2022-03-24 01:07:18'),(83,'Mouse de juego inalámbrico recargable Logitech  G Series Lightspeed G502 negro',11,'Ahora puedes jugar con más rapidez y precisión con G502 LIGHTSPEED, dotado de conectividad inalámbrica superrápida de 1 ms. Un sensor HERO de próxima generación ofrece rendimiento de 16.000 dpi y eficiencia energética superiores, dándote hasta 60 horas de juego ininterrumpido.',10491,10,0,'2022-03-24 01:09:04','2022-03-24 01:09:04'),(84,'Parlante Logitech S150 portátil black',12,'Logitech S150 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.',1639,10,0,'2022-03-24 01:10:45','2022-03-24 01:10:45'),(85,'Auriculares gamer inalámbricos Corsair VOID Elite Wireless carbón con luz  rgb L',12,'¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Corsair VOID Elite Wireless no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.\r\n\r\nEl formato perfecto para vos\r\nEl diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.',29500,10,5,'2022-03-24 01:12:33','2022-03-24 01:13:56'),(86,'Auriculares gamer Kotion G2000 negro y rojo con luz LED',12,'¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Kotion G2000 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.\r\n\r\nEl formato perfecto para vos\r\nEl diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.',3151,10,0,'2022-03-24 01:13:38','2022-03-24 01:13:38'),(87,'Auriculares gamer Kotion G2000 negro y naranja con luz LED',12,'¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Kotion G2000 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.\r\n\r\nEl formato perfecto para vos\r\nEl diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.',2409,10,5,'2022-03-24 01:15:22','2022-03-24 01:15:22'),(88,'Monitor gamer Samsung F24T35 led 24 \" azul y gris oscuro 100V/240V',13,'amsung está fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa líder en la industria tecnológica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendrás y disfrutarás de una gran experiencia visual en todo momento.\r\n\r\nUn monitor a tu medida\r\nCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.\r\n',36900,24,22,'2022-03-24 01:17:13','2022-03-24 01:17:13'),(89,'Monitor gamer iQual iQ24H led 23.6 \" negro 100V/240V',13,'Disfrutá de todas las cualidades que el monitor iQual iQ24H tiene para ofrecerte. Percibí las imágenes de una manera completamente diferente y complementá cualquier espacio ya sea en tu casa u oficina.\r\n\r\nUn monitor a tu medida\r\nCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.\r\n\r\nUna experiencia visual de calidad\r\nEste monitor de 23.6\" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad.',20999,22,0,'2022-03-24 01:18:21','2022-03-24 01:18:21'),(90,'Monitor gamer curvo Samsung Odyssey G5 C27G55T led 27 \" negro 100V/240V',13,'Este monitor de 27\" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 2560 x 1440 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido. Su tiempo de respuesta de un milisegundo lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.',76649,10,0,'2022-03-24 01:19:45','2022-03-24 01:19:45'),(91,'Silla de escritorio Good Game Pro  negra y roja con tapizado de cuero sintético',14,'La selección de una silla adecuada es muy importante para prevenir futuras lesiones. Con esta silla Good Game, vas a tener la comodidad y el bienestar que necesitás a lo largo de tu jornada. Además, podés ubicarla en cualquier parte de tu casa u oficina ya que su diseño se adapta a múltiples entornos. ¡Dale a tus espacios un toque más moderno!\r\n\r\nJugá sin límites\r\nDiseñada para quienes pasan muchas horas frente a la computadora. El asiento y el respaldo se adaptan a tus diferentes posiciones a lo largo del juego. Disfrutá sin descuidar las zonas lumbar, dorsal y cervical.',34999,12,0,'2022-03-24 01:22:57','2022-03-24 01:22:57'),(92,'Silla de escritorio Good Game Pro  negra y turquesa con tapizado de cuero sintét',14,'La selección de una silla adecuada es muy importante para prevenir futuras lesiones. Con esta silla Good Game, vas a tener la comodidad y el bienestar que necesitás a lo largo de tu jornada. Además, podés ubicarla en cualquier parte de tu casa u oficina ya que su diseño se adapta a múltiples entornos. ¡Dale a tus espacios un toque más moderno!\r\n\r\nJugá sin límites\r\nDiseñada para quienes pasan muchas horas frente a la computadora. El asiento y el respaldo se adaptan a tus diferentes posiciones a lo largo del juego. Disfrutá sin descuidar las zonas lumbar, dorsal y cervical.',34999,15,6,'2022-03-24 01:24:18','2022-03-24 01:24:18'),(93,'Silla de escritorio Noga Stratos gamer ergonómica  rosa y blanca con tapizado de',14,'La selección de una silla adecuada es muy importante para prevenir futuras lesiones. Con esta silla Noga, vas a tener la comodidad y el bienestar que necesitás a lo largo de tu jornada. Además, podés ubicarla en cualquier parte de tu casa u oficina ya que su diseño se adapta a múltiples entornos. ¡Dale a tus espacios un toque más moderno!\r\n\r\nJugá sin límites\r\nDiseñada para quienes pasan muchas horas frente a la computadora. El asiento y el respaldo se adaptan a tus diferentes posiciones a lo largo del juego. Disfrutá sin descuidar las zonas lumbar, dorsal y cervical.',44007,10,0,'2022-03-24 01:25:50','2022-03-24 01:25:50'),(94,'Camara Web Webcam Logitech C922 Pro Stream Full Hd Pce Rt',15,'DISEÑADO PARA STREAMERS SERIOSOS\r\nConéctate con claridad superior cada vez que salga en vivo en canales como Twitch y YouTube. Transmití todo lo que deseas en Full 1080p a 30 fps o 720p HD a 60 fps. Transmití de forma magistral con audio confiable, enfoque automático y un campo de visión de 78 grados. Incluye la licencia premium gratuita de 3 meses de XSplit.',18669,10,10,'2022-03-24 01:27:35','2022-03-24 01:27:35'),(95,'Camara Web Webcam Usb Pc Notebook Microfono Video ',15,'Material: plástico ABS + PC\r\n- Interfaz USB: USB2.0\r\n- Cable USB: la longitud total del cable de anillo magnético USB2.0 es de 1.5 m\r\n- Sensor: CMOS\r\n- Ángulo de visión horizontal: 67.9 °\r\n- Longitud focal: 3.34\r\n- Formato de salida de imagen: JPEG\r\n- Mic: micrófono digital\r\n- Distancia efectiva de recogida: 0-6M\r\n- Formato de salida de audio: micrófono incorporado -48DB 16 bits codificación pcm\r\n- Funciones de control de imagen: enfoque automático, balance de blancos automático, control de exposición automático.\r\n',4800,15,0,'2022-03-24 01:29:08','2022-03-24 01:29:08'),(96,'Camara Web Webcam Logitech C505e Mic De Largo Alcance Full',15,'• UNA CÁMARA WEB CON ALCANCE AMPLIADO\r\nUna cámara web HD 720p con micrófono de gran alcance que permite mantener una conversación con claridad y sin alzar la voz hasta una distancia de 3 metros.\r\n\r\n• VIDEO HD 720P EN PANTALLA PANORÁMICA\r\nVe más allá de los componentes ópticos integrados en las laptops con video de calidad, colorido, fluido y nítido con formato panorámico y resolución HD 720p.',4899,13,0,'2022-03-24 01:30:29','2022-03-24 01:30:29'),(97,'Pack Cable Power Alimentación 220v / Pc Iram 1.5m X 100 Unid',16,'-Cable negro interlock para fuente\r\n-Cable con tensión certificado Iram\r\n-Cable importado confeccionado con material de máxima pureza\r\n-A prueba de golpes y tirones\r\n-100% reforzado\r\n-Largo: 1.5 mts\r\n-10 a 25V\r\n-3 x 0,75 mm',18999,100,0,'2022-03-24 01:31:51','2022-03-24 01:31:51'),(98,'Cable Hdmi 2.1 Premium 8k 60hz Ultra Hd 48 Gbps Ivanky 2 Mt ',16,'No todos los cables HDMI 2.1 de 8K están certificados como el cable HDMI iVANKY 8K.\r\nEl cable certificado ha pasado la rigurosa prueba de baja EMI para garantizar un video impecable.\r\n\r\n- Color profundo de 48 bits, Retorno de audio (ARC), Dolby TrueHD 7.1 audio y Hotplugging.',4650,15,0,'2022-03-24 01:33:14','2022-03-24 01:33:14');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jonathan','Ibarrola','joni@joni.com','$2a$10$oOsZeuONHMPt1Qz71BMIpuLTEwgE0lHr8jHobrpoW9N5crmqiT4se','Ruta 26 ','Pilar ','','rol_admin','default-image.png','Argentina','Misiones','2022-02-22 22:48:25','2022-03-22 19:34:10'),(4,'Ibarrola','Jonathan','joni@joni2.com','$2a$10$DF7y1S.CBg8/fuLM3O9pX.TSA/bmpurG64nDLfbDHut/Tk4LGmymm',NULL,'','03772522756','rol_admin','default-image.png','','','2022-03-23 00:35:49','2022-03-23 00:49:37');
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

-- Dump completed on 2022-03-23 22:38:29
