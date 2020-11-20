import { Component, OnInit,Input } from '@angular/core';
import { DataService } from "../data.service";
import * as $ from "jquery";
@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.css']
})
export class ManageClientsComponent implements OnInit {

  items:any[] = [];

  constructor(private dataService: DataService) {
    $('#ManageHTML').hide();
  }

  ngOnInit(): void {
    $('#nameRestForm').hide();
    $('#alerta1').hide();
    $('#alerta2').hide();
    $('#alerta3').hide();
  }

getRestaurants(combo:any,number1:any,number2:any,number3:any){
    console.log(combo.value)
    console.log(number1.value)
    console.log(number2.value)
    console.log(number3.value)

    var address2 = combo.value
    var address2 = address2.concat('+',number1.value.toString(),'+',number2.value.toString())
    if (number3.value.toString() != '') {
      var address2 = address2.concat('+',number3.value.toString())
    }
    console.log(address2);
    var address = address2
    var geojson=this.getGeoByAddress(address).results[0].geometry.location
    console.log(geojson)
    var lat=geojson.lat
    var lng=geojson.lng
    var rad= 500
    var restaurants:any =this.getRestaurantsByGeo(lat,lng,rad).results
    for (let i = 0; i < restaurants.length; i++) {
        var restname= restaurants[i].name
        var restaddress = restaurants[i].vicinity
        var restaurant = this.getPartner(restname,restaddress)
      if (restaurant!=null) {
          this.items.push(restaurant[0])
      }else{
        console.log("no address")

      }

    }
    console.log(this.items)
}
getPartner(restaurant_name:string ,address:string){
  return JSON.parse($.ajax({
    url: 'http://localhost/hotelSabana/src/php/getRestDb.php', //'http://localhost/hotelSabana/src/php/getRestDb.php'
    type: 'POST',
    global: false,
    async: false,
    data: { restaurant_name, address },
    success: function(response) {
        return response
    }
 }).responseText);
}
getRestaurantsByGeo(lat:any,lng:any,rad:any){
  return JSON.parse($.ajax({
   url: 'http://localhost/hotelSabana/src/php/getRestByGeo.php', //'http://localhost/hotelSabana/src/php/getRestByGeo.php'
   type: 'POST',
   global: false,
   async: false,
   data: {lat,lng,rad},
   success: function(response) {
     return response
   }
 }).responseText);
}

getGeoByAddress(address:string){
   return JSON.parse($.ajax({
    url: 'http://localhost/hotelSabana/src/php/getGeoByAddress.php', //'http://localhost/hotelSabana/src/php/getGeoByAddress.php'
    type: 'POST',
    global: false,
    async: false,
    data: { address },
    success: function(response) {
      return response

    }
  }).responseText);
}


/*
getR(){ //This method is ONLY FOR ADDING NEW RESTAURANTS TO THE DATABASE, LEAVE IT COMMENTED!
 var address = 'Calle+72+43'
//var address= 'Calle+70b+32'

$.ajax({
  url: 'http://localhost/hotelSabana/src/php/getGeoByAddress.php',
  type: 'POST',
  data: { address },
  success: function(response) {
    if (response != null) {
      var geojson = JSON.parse(response).results[0].geometry.location
      var lat = geojson.lat
      var lng = geojson.lng
      var rad = 500
      console.log(lat, lng)
      $.ajax({
        url: 'http://localhost/hotelSabana/src/php/getRestByGeo.php',
        type: 'POST',
        data: { lat, lng, rad },
        success: function(response) {
          if (response != null) {
            var restaurants = JSON.parse(response).results
            for (let i = 0; i < restaurants.length; i++) {
              var restaurant_name = restaurants[i].name
              var restaurant_fee = Math.floor(Math.random() * 20000 + 10000)
              var tables_available
              if (i % 5 == 0) {
                tables_available = 0
              } else {
                tables_available = Math.floor(Math.random() * 20 + 1)
              }
              var address = restaurants[i].vicinity
              console.log(restaurant_name, restaurant_fee, tables_available, address)
              if(address!=""){
                $.ajax({
                  url: 'http://localhost/hotelSabana/src/php/addRest2Db.php',
                  type: 'POST',
                  data: {restaurant_name,restaurant_fee,tables_available,address},
                  success: function(response) {
                      console.log("Restaurant added")

                  }

                })
              }else{
                console.log("No address")
              }


            }

          }

        }

      })
    }
  }
});
}
*/

  go2Main(){
    $('#ManageHTML').hide();
    $('#MainHTML').show();
    $('#number1').val("");
    $('#number2').val("");
    $('#number3').val("");
    $('#nameInputForm').val("");
    for (const item in this.items) {
      if (this.items.hasOwnProperty(item)) {
        var id = this.items[item].Restaurant_ID;
        $('#'+id).remove();
      }
    }
    this.items=[];
  }

  isLogged(){
    if ($('#usuario').text() != "") {
      $('#ManageHTML').hide();
      $('#AfterHTML').show();
      for (const item in this.items) {
        if (this.items.hasOwnProperty(item)) {
          var id = this.items[item].Restaurant_ID;
          $('#'+id).remove();
        }
      }
      this.items=[];
      $('#number1').val("");
      $('#number2').val("");
      $('#number3').val("");
      $('#nameInputForm').val("");
    }

  }

  go2login(){
    $('#ManageHTML').hide();
    $('#LoginHTML').show();
    $('#jqUser').val("");
    $('#jqPass').val("");
    $('#usuario').empty();
    $('#correo').empty();
    $('#cedula').empty();
    $('#number1').val("");
    $('#number2').val("");
    $('#number3').val("");
    $('#nameInputForm').val("");
    for (const item in this.items) {
      if (this.items.hasOwnProperty(item)) {
        var id = this.items[item].Restaurant_ID;
        $('#'+id).remove();
      }
    }
    this.items=[];
  }

  addReserva(rID:any,taba:any){
        var taba = taba;
        var rest = rID;
        var user = $('#cedula').text();
        var div =  user.split(" ");
        var user = div[1];
        var today = new Date();
        var datetime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'|'+ today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        if(user == null ){
        console.log(user);
        $('#alerta').show();
        $('#alerta').fadeIn();
        setTimeout(function() {
             $("#alerta").fadeOut();
        },1700);

  }else{
    if(taba > 0 ){
    $.ajax({
      url: 'http://localhost/hotelSabana/src/php/addReserve2Db.php',
      type: 'POST',
      data: { user,rest,datetime},
      success: function(response) {
      }
      });
      $('#alerta3').show();
      $('#alerta3').fadeIn();
      setTimeout(function() {
           $("#alerta3").fadeOut();
      },1700);
    }else{
      $('#alerta2').show();
      $('#alerta2').fadeIn();
      setTimeout(function() {
           $("#alerta2").fadeOut();
      },1700);
    }
    }
  }

}
