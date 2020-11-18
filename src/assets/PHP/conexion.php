<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type': 'application/json");
$servername = 'localhost';
$user = 'root';
$pass = '';
$db = 'sabanafood_db';

$conn = new mysqli ($servername,$user, $pass, $db) or die("No se puedo conectar.");

if ($conn->connect_error) {
  die("Connection error: " . $conn->connect_error);
}

?>
