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
    return this.http.post('http://localhost/hotelSabana/src/php/login.php',{userName,userPass});
  }
}
