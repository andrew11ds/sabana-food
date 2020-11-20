-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2020 at 11:48 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sabanafood_db`
--
CREATE DATABASE IF NOT EXISTS `sabanafood_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sabanafood_db`;

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `Reservation_ID` bigint(20) NOT NULL,
  `User_ID` varchar(50) DEFAULT NULL,
  `Restaurant_ID` bigint(20) DEFAULT NULL,
  `Reservation_DateTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`Reservation_ID`, `User_ID`, `Restaurant_ID`, `Reservation_DateTime`) VALUES
(1, '48', 0, '2020-11-20 05:36:20'),
(2, '48', 0, '2020-11-20 05:38:22'),
(3, '0', 51, '2020-11-20 05:44:04');

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `Restaurant_ID` bigint(20) NOT NULL,
  `Restaurant_Name` varchar(50) DEFAULT NULL,
  `Restaurant_Fee` float DEFAULT NULL,
  `Tables_Available` int(11) DEFAULT NULL,
  `Address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`Restaurant_ID`, `Restaurant_Name`, `Restaurant_Fee`, `Tables_Available`, `Address`) VALUES
(7, 'Restaurante y casa de eventos Los Farolitos', 17953, 5, 'Carrera 35 #69D-35'),
(8, 'Marinos Junior', 13380, 10, 'a 70b-92, Carrera 32 #702'),
(9, 'Restaurante King wings and burger', 10095, 6, 'Calle 70 ###32-111'),
(10, 'Restaurante \"Donde Merce\"', 24261, 1, 'Calle 70 ##32-111'),
(11, 'el velero restaurante cevicheria', 18991, 2, 'esq. Calle 70C Dg. 34 #70C-41'),
(12, 'Olaya Park Comida rapida, Pizzeria y Asadero', 17809, 0, 'Carrera 31 ##70B'),
(13, 'Toño Comidas Rápidas', 14958, 4, 'Carrera 38 #70-12'),
(14, 'Chicharrones el Guásimo', 24867, 2, 'esq. Diagonal 34, Local 1 Calle 71 #32-136'),
(15, 'Rincon Vegetariano', 25492, 0, 'Carrera 32 #70b-51'),
(16, 'El Sabor Del Chef', 23566, 14, 'Esquina Diagonal 34, Calle 71 #32-130'),
(17, 'Frupalette', 28835, 20, 'Cll 71, Carrera 32'),
(18, 'Restaurante Super Guásimo', 14817, 14, 'Carrera 35 #69a-40'),
(19, 'PARMESANOS PIZZAS', 26806, 19, 'Esquina con calle 71., Carrera 31 #S/N'),
(20, 'Sirvelo Food', 13925, 4, 'Carrera 34 ##71 - 09'),
(21, 'Parmesana Deliziosa', 26410, 16, 'Carrera 32 ###70B - 141'),
(22, 'A Tu Salud Comida Saludable', 10585, 0, 'Cra 31#70b 60 Carrera 31 #70b60'),
(23, 'Chorizo con Limon y Algo Mas', 28019, 0, 'Calle 71 #33-25'),
(24, 'Restaurante Kiguanos', 28089, 16, 'Local 105, Calle 71 #70C-62'),
(25, 'Crepes & Waffles', 13237, 0, 'Calle 99 #53-115 Centro Comercial Buena Vista'),
(26, 'Frisby Centro Comercial Buenavista 2', 11019, 10, 'Calle 98 # 52-115, Centro comercial Buenavista 2 P'),
(27, 'La Terraza De La Casa Buenavista', 20760, 13, 'buenavista 1, piso 2'),
(28, 'La Diva', 19108, 8, 'Cl. 98 #52-115 Centro Comercial Buenavista 2, Piso'),
(29, 'Subway', 10872, 0, 'Buenas Vista 2, Calle 99 #53-115 Piso 4 Local 412 '),
(30, 'Kokoriko Buenavista Barranquilla', 25225, 13, 'CC BUENAVISTA, CALLE 98 CRA 53 ESQUINA LOCAL 209'),
(31, 'Burger King®', 10923, 13, 'Cr 53 # 98 - 99 Local 422, CC Buenavista'),
(32, 'Frisby Divercity Buenavista', 19380, 13, 'Calle 98 # 52-115, Divercity Local 2 Centro comerc'),
(33, 'M Cocina Árabe', 10244, 9, 'Carrera 56 #98-65'),
(34, 'Donde Mama', 13852, 4, 'Carrera 53 Calle 99 Ccial Buenavista 2, Local 412A'),
(35, 'El Punto Multiple Del Sabor - Hot / C.C Plaza Del ', 17494, 19, 'Calle 99 No. 53 - 40 locales 40 - 47'),
(36, 'Takeaway Sushi', 18496, 0, 'Calle 94 #51B-107'),
(37, 'Fresh Bar', 26641, 8, 'Carrera 56 #94-93'),
(38, 'B&S Burger & Salad', 26908, 9, 'Calle 94 #5344'),
(39, 'Nancy Cabrera Plaza Del Parque', 14166, 0, 'Colombie, Carrera 56 #98-65'),
(40, 'Restaurante y Reposteria Nancy Cabrera', 25871, 16, 'PLAZA DEL PARQUE'),
(41, 'Wasabi', 23303, 16, 'Calle 98 #51B-76 Local 108'),
(42, 'Frisby Buenavista', 29035, 12, 'C.C. Buenavista, Calle 99 #53-115 Piso 4 Local 413'),
(43, 'La Pepita', 25184, 1, 'Cl. 98 #52-115 Centro Comercial Buenavista 2, Piso'),
(44, 'Subway Calle 70', 29757, 10, 'Carrera 43 ###70 10'),
(45, 'SALAM DOMICILIOS BARRANQUILLA', 25706, 0, 'Carrera 41 ##70-55'),
(46, 'El Grill Restaurant Y Comidas Rapidas', 13769, 11, 'Carrera 42F #73-157'),
(47, 'Mag Mondongo 43', 11300, 5, 'Carrera 43 # 70 – 24 Tel 3580076 -3580067'),
(48, 'Piko riko 20 De Julio', 26270, 0, 'Carrera 43 #72-53'),
(49, 'ASADERO Y RESTAURANTE EL POLLOTE QUILLERO', 19220, 7, '# 72, Carrera 43 #73164'),
(50, 'Cocteleria Curramba 72', 28196, 19, 'Calle 72 #41-88'),
(51, 'Fogón Marino', 28347, 13, 'Carrera 43 #72-46'),
(52, 'La Casona', 24906, 18, 'Carrera 43 #72-122'),
(53, 'Restaurante El Merendero', 13673, 6, 'Carrera 43 #70 - 48'),
(54, 'Piko Riko 70', 16488, 0, 'Carrera 43#70-12'),
(55, 'Restaurante El Torito Santandereano', 24616, 11, 'Carrera 46 #69-161'),
(56, 'Restaurante Los Techos Rojos', 23985, 0, 'Calle 70 ##45-52'),
(57, 'Sancochos La 72', 21009, 9, 'Calle 72 ##41B-81'),
(58, 'Fenix', 29587, 11, 'Calle 70 #43 - 27'),
(59, 'Floristeria Economica', 25255, 12, 'Calle 72 #4353'),
(60, 'Las Delicias Restaurant', 22129, 1, 'Calle 72 ##41C-32'),
(61, 'Restaurante el Oasis', 21302, 9, 'Carrera 44 #70-229');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `User_ID` bigint(20) NOT NULL,
  `User_FirstName` varchar(50) DEFAULT NULL,
  `User_LastName` varchar(50) DEFAULT NULL,
  `User_Email` varchar(50) DEFAULT NULL,
  `User_Password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`User_ID`, `User_FirstName`, `User_LastName`, `User_Email`, `User_Password`) VALUES
(1001424724, 'Yeison Daniel ', 'Fernandez Gamero', 'joseyeison@gmail.com', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`Reservation_ID`);

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`Restaurant_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`User_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `Reservation_ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `Restaurant_ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
