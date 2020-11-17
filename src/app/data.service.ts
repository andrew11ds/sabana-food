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
    return this.http.get('https://maps.googleapis.com/maps/api/place/textsearch/xml?query=presto+in+barranquilla&type=restaurant&key=AIzaSyChDeekoou6-EnjGXvYPLeB1YuY_qXgHec')
  }
}
