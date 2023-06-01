
CREATE DATABASE `TourTravel` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

use `TourTravel`;


CREATE TABLE `account` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL ,
  `email` varchar(100) NOT NULL UNIQUE,
  `password` varchar(100) NOT NULL,
  `role` varchar(50) DEFAULT 'customer',
  `creaed_at` date DEFAULT NOW(),
  `last_login` datetime DEFAULT NOW()
) ENGINE = InnoDB;


CREATE TABLE `category` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL UNIQUE,
  `status` tinyint
) ENGINE = InnoDB;


CREATE TABLE `tours` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(120) NOT NULL,
  `price` float NOT NULL,
  `sale_price` float NULL DEFAULT '0',
  `image` varchar(200) NOT NULL,
  `category_id` INT NOT NULL,
  `status` tinyint DEFAULT '1',
  `description` text NOT NULL,
  `created_at` date DEFAULT NOW(),
  FOREIGN KEY (`category_id`) REFERENCES `category`(`id`)
) ENGINE = InnoDB;
 
 CREATE TABLE`favourite` (
   `id` INT PRIMARY KEY AUTO_INCREMENT,
   `account_id` int NOT NULL,
   `tours_id` int NOT NULL,
   `creaed_at` date DEFAULT NOW(),
   FOREIGN KEY (`account_id`) REFERENCES `account`(`id`),
   FOREIGN KEY (`tours_id`) REFERENCES `tours`(`id`)
 ) ENGINE = InnoDB;
 


