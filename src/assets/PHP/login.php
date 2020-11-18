<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type': 'application/json");
  require 'conexion.php';
  $json = file_get_contents('php://input');
  $params = json_decode($json);
  $valor = $params->userName;
  $valor2 = $params->userPass;
  $array = Array();

  $array=null;

  if(!empty($valor) && !empty($valor2)){
    if ($resultado = $conn->query("SELECT User_Email FROM users where User_Email = '$valor' and User_Password = '$valor2'")) {
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
