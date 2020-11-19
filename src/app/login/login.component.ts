import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('userPass') inputPass: any;
  @ViewChild('userName') inputUser: any;

  constructor(private data: DataService, private router: Router) {
  }

  ngOnInit(): void {
  }

  Login(userName:any,userPass:any){
    if (userName.value != '' && userPass.value != '') {
      this.data.getLogin(userName.value,userPass.value).subscribe(val => {
        if (val !=null) {
          this.router.navigate(['/afterlogin']);
        }else{
          this.inputUser.nativeElement.classList.add('is-invalid');
          this.inputPass.nativeElement.classList.add('is-invalid');
        }
      });
    }else{
      this.inputUser.nativeElement.classList.add('is-invalid');
      this.inputPass.nativeElement.classList.add('is-invalid');
    }

  }

  removeInvalid(){
    this.inputUser.nativeElement.classList.remove('is-invalid');
    this.inputPass.nativeElement.classList.remove('is-invalid');
  }

}
