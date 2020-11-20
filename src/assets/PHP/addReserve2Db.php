<?php
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type': 'application/json");
  require 'conexion.php';
  $json = file_get_contents('php://input');

  $rest = $_POST['rest'];
  $user=$_POST['user'];
  $datetime=$_POST['datetime'];



  if(isset($rest)){

    $query = "INSERT INTO reservations(User_ID,Restaurant_ID,Reservation_DateTime)
              VALUES ('$user','$rest','$datetime')";

    $result = mysqli_query($conn, $query);
    if(!$result){
      die('query failed');
    }


  }

?>
