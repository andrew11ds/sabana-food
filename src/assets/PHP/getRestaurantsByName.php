<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type': 'application/json");
  require 'conexion.php';
  $name = $_POST['restaurant_name'];
  $array = Array();
  $array=null;

  if(!empty($name){
    if ($resultado = $conn->query("SELECT * FROM restaurants where Restaurant_Name LIKE '$name%'")) {
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
