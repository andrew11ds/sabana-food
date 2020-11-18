import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
  }

  Login(userName:any,userPass:any){
    console.log(this.data.getLogin(userName.value,userPass.value).subscribe(val => console.log(val)));
  }

}
