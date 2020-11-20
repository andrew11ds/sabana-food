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
        $('#LoginHTML').hide();
        $('#AfterLoginHTML').show();
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

}
