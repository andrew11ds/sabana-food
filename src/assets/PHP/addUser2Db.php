<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type': 'application/json");
  require 'conexion.php';
  $name = $_POST['fName'];
  $lastname = $_POST['fLastName'];
  $email = $_POST['fEmail'];
  $ced = $_POST['fCed'];
  $pass = $_POST['fPass'];

  if(isset($name)){

    $query = "INSERT INTO users(User_ID, User_FirstName, User_LastName, User_Email, User_Password)
              VALUES ('$ced','$name','$lastname','$email','$pass')";

    $result = mysqli_query($conn, $query);
    if(!$result){
      die('query failed');
    }

  }

?>
