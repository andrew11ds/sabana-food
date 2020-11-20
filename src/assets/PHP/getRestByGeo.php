<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type': 'application/json");
require 'conexion.php';
  $lat = $_POST['lat'];
  $lng = $_POST['lng'];
  $rad = $_POST['rad'];
  //En url se obtiene el json con toda la informacion del lugar a buscar
  $url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=$lat,$lng&radius=$rad&type=restaurant&key=AIzaSyChDeekoou6-EnjGXvYPLeB1YuY_qXgHec";
  //$url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=$valor&type=restaurant&key=AIzaSyChDeekoou6-EnjGXvYPLeB1YuY_qXgHec";
  $curl = curl_init();
  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_HEADER, false);
  curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_ENCODING, "");
  $curlData = curl_exec($curl);
  curl_close($curl);
  echo $curlData;
?>
