<?php
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type': 'application/json");
  require 'conexion.php';
  $json = file_get_contents('php://input');

  $name = $_POST['restaurant_name'];
  $fee=$_POST['restaurant_fee'];
  $tables=$_POST['tables_available'];
  $address=$_POST['address'];


  if(isset($name)){

    $query = "INSERT INTO restaurants(Restaurant_Name,Restaurant_Fee,Tables_Available,Address)
              VALUES ('$name','$fee','$tables','$address')";

    $result = mysqli_query($conn, $query);
    if(!$result){
      die('query failed');
    }


  }

?>
