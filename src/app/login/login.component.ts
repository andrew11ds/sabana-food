import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import { AfterLoginComponent } from '../after-login/after-login.component';
import $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('userPass') inputPass: any;
  @ViewChild('userName') inputUser: any;

  constructor(private data: DataService, private router: Router, private afterLogin: AfterLoginComponent) {
  }

  ngOnInit(): void {
  }

  Login(userName:any,userPass:any){
    if (userName.value != '' && userPass.value != '') {
      var userName = userName.value;
      var userPass = userPass.value;
      $.ajax({
  			url: 'http://localhost/hotelSabana/src/php/login.php',
  			type: 'POST',
  			data: {userName,userPass},
  			success: function (response) {
  					var user_state = JSON.parse(response);
  					if (response!="null") {

  					}else {
              $('#jqUser').addClass('is-invalid');
              $('#jqPass').addClass('is-invalid');
  					}
  			}
  	  });
    }
  }

  removeInvalid(){
    this.inputUser.nativeElement.classList.remove('is-invalid');
    this.inputPass.nativeElement.classList.remove('is-invalid');
  }

}
