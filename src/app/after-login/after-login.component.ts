import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {


  /*items = ['info restaurante',
            'info restauranteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            'info restaurante',
            'info restaurante',
            'info restauranteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeinfo restauranteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            'info restaurante',
            'info restaurante',
            'info restaurante'
          ];*/


  constructor(private dataService: DataService) {
    this.items=[]
   }

  ngOnInit(): void {

    var newOb=this.dataService.getcoordByAddress()//Lat,lng
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
  })






  }

}
