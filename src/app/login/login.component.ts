import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import { AfterLoginComponent } from '../after-login/after-login.component';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('userPass') inputPass: any;
  @ViewChild('userName') inputUser: any;

  uName:string[]=[];

  constructor(private data: DataService, private router: Router, private afterLogin: AfterLoginComponent) {
    $('#LoginHTML').hide();
  }

  ngOnInit(): void {
  }

  Login(userName:any,userPass:any){
    if (userName.value != '' && userPass.value != '') {
      var userName = userName.value;
      var userPass = userPass.value;
      var url = 'http://localhost/hotelSabana/src/php/login.php';

      function getJson(url:any) {
          return JSON.parse($.ajax({
              type: 'POST',
              url: url,
              dataType: 'json',
              global: false,
              async: false,
              data: {userName,userPass},
              success: function (response) {
                  return response;
              }
          }).responseText);
      }

      var myJsonObj = getJson(url);

      if(myJsonObj!=null){
        this.uName[0]=myJsonObj[0].User_FirstName + myJsonObj[0].User_LastName;
        this.uName[1]=myJsonObj[0].User_Email;
        this.uName[2]=myJsonObj[0].User_ID;
        if ($('#usuario').text()=="" && $('#correo').text()=="") {
          $('#usuario').append('Usuario: '+this.uName[0]);
          $('#correo').append('Correo: '+this.uName[1])
          $('#cedula').append('Cedula: '+this.uName[2])
          $('#pefil').show();
          $('#cerrar').show();
        }
        $('#LoginHTML').hide();
        $('#AfterHTML').show();

        this.loadReservation(this.uName[2]);
      }else{
        $('#jqUser').addClass('is-invalid');
        $('#jqPass').addClass('is-invalid');
      }

    }else{
      $('#jqUser').addClass('is-invalid');
      $('#jqPass').addClass('is-invalid');
    }
  }

  removeInvalid(){
    this.inputUser.nativeElement.classList.remove('is-invalid');
    this.inputPass.nativeElement.classList.remove('is-invalid');
  }

  showMain(){
    $('#LoginHTML').hide();
    $('#MainHTML').show();
  }

  showSignUp(){
    $('#LoginHTML').hide();
    $('#SignHTML').show();
    $('#alertSuccess').hide();
  }

  loadReservation(cedula:any){
    $.ajax({
        type: 'POST',
        url: 'http://localhost/hotelSabana/src/php/getReservations.php',
        data: {cedula},
        success: function (response) {
          var results = JSON.parse(response);
          console.log(response);
          $('#tableBody').empty();
          for (const item in results) {
            if (results.hasOwnProperty(item)) {
              var id = results[item].Reservation_ID;
              var name = results[item].Restaurant_Name;
              var date = results[item].Reservation_DateTime;
              $('#tableBody').append('<tr class="table-light"><td>'+id+'</td><td>'+name+'</td><td>'+date+'</td></tr>');
            }
          }
        }
    })

  }

}
