<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type': 'application/json");
  require 'conexion.php';
  $name = $_POST['restaurant_name'];
  $address = $_POST['address'];
  $array = Array();
  $array=null;

  if(!empty($name) && !empty($address)){
    if ($resultado = $conn->query("SELECT Restaurant_ID, Restaurant_Name, Restaurant_Fee,Tables_Available,Address FROM restaurants where Restaurant_Name = '$name' and Address = '$address'")) {
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
