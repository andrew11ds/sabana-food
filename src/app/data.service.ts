import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getData(){
    var restaurante = 'subway+in+barranquilla';
    return this.http.post('../assets/PHP/test.php',{restaurante});
  }
  getcoordByAddress(){
    var address= 'Calle+70b+32';
    var restJson;
    var geojson=this.http.post('http://localhost/Gsus/src/php/getGeo.php',{address});//change to real adddress

    //var arrJson = JSON.parse( geojson );
  //  console.log(arrJson)
    /* geojson.subscribe(countries => {
      finaljson = countries as CountryData[]
  })*/

    //geojson.subscribe(val => console.log(val.results[0].geometry.location));


  //  console.log(val)

    return geojson

    //this.setAd("yeison")
    //var newVal=geojson.results[0];

  }
getRestByAddress(lat:any,lng:any,rad:any){

  return this.http.post('http://localhost/Gsus/src/php/getRestaurants.php',{lat,lng,rad})


}



  getLogin(userName:any,userPass:any){
    //http://localhost/hotelSabana/src/php/login.php
    //../assets/PHP/login.php
    return this.http.post('http://localhost/hotelSabana/src/php/login.php',{userName,userPass});
  }

  addUser2Db(fName:any,fLastName:any,fEmail:any,fCed:any,fPass:any){
    //http://localhost/hotelSabana/src/php/addUser2Db.php
    //../assets/PHP/addUser2Db.php
    return this.http.post('http://localhost/hotelSabana/src/php/addUser2Db.php',{fName,fLastName,fEmail,fCed,fPass});
  }
}
