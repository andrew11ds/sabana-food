<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type': 'application/json");
  require 'conexion.php';
  $valor = $_POST['userName'];
  $valor2 = $_POST['userPass'];
  $array = Array();
  $array=null;

  if(!empty($valor) && !empty($valor2)){
    if ($resultado = $conn->query("SELECT User_FirstName, User_LastName, User_Email, User_ID FROM users where User_Email = '$valor' and User_Password = '$valor2'")) {
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
