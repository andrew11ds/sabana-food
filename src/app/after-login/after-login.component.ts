import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  items = [];
  uName:string[] =[];
  constructor(private dataService: DataService, private cRef: ChangeDetectorRef) {
   }

  ngOnInit(): void {

  }

  loadUserInfo(name:any,email:any){
    this.uName=name;
    console.log(this.uName);
    this.cRef.detectChanges();
  }

}
