import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('Servidor');
  }

  getData(){
    var restaurante = 'subway+in+barranquilla';
    return this.http.post('../assets/PHP/test.php',{restaurante});
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
