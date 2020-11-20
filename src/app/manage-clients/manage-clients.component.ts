import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import * as $ from "jquery";
@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.css']
})
export class ManageClientsComponent implements OnInit {

  items = [];

  constructor(private dataService: DataService) {
    //this.items=[]
  }

  ngOnInit(): void {

    /*var newOb=this.dataService.getcoordByAddress()//Lat,lng
    newOb.subscribe(val =>{
      var lat=val.results[0].geometry.location.lat
      var lng=val.results[0].geometry.location.lng
     var rad=500 //Radius should be variable


      //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=$lat,$lng&radius=$rad&type=restaurant&key=AIzaSyChDeekoou6-EnjGXvYPLeB1YuY_qXgHec
      var restOb =this.dataService.getRestByAddress(lat,lng,rad)//Gets address by lat,lng,rad
      restOb.subscribe(val2 =>{
        var restaurants=val2.results
        for (let i = 0; i < restaurants.length; i++) {
          console.log(restaurants[i])
          this.items.push(restaurants[i])//displays restaurants

        }


      //  this.items.push(val2)

    })
  })*/






  }

  getGeo(){
    var address= 'Calle+70b+32'
    $.ajax({
      url: 'http://localhost/hotelSabana/src/php/getGeoByAddress.php',
      type: 'POST',
      data: {address},
      success: function (response) {
        var yeison=5
        $.ajax({
          url: 'http://localhost/hotelSabana/src/php/getGeoByAddress.php',
          type: 'POST',
          data: {address},
          success: function (response) {
              console.log(yeison)
              if (response!="null") {
              //  this.getRestaurants(response)
                //this.getRestaurants()
                console.log("hello world")
              }
          }

        })
      }

    });

  }


  getR(){ //This class is ONLY FOR ADDING NEW RESTAURANTS TO THE DATABASE
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




}
