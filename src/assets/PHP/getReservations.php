<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type': 'application/json");
  require 'conexion.php';
  $user = $_POST['cedula'];
  $array = Array();
  $array=null;

  if(!empty($valor) && !empty($valor2)){
    if ($resultado = $conn->query("SELECT Reservation_ID, Restaurant_Name, Reservation_DateTime FROM reservations join restaurants on reservations.Restaurant_ID = restaurants.Restaurant_ID where User_ID = '$user'")) {
        while ($t1 = $resultado ->fetch_assoc()) {
          $array[]=$t1;
        }
        if (!empty($array)) {

        }else{
          $array = null;
        }
    }
  }

  echo json_encode($array);

?>
