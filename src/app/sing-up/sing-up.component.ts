import { Component, OnInit,Input } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor(private data:DataService, private router:Router) {
    $('#SignHTML').hide();
  }

  ngOnInit(): void {
  }

  addUser(name:any,lastName:any,email:any,ced:any,pass:any){
    var fName = name.value;
    var fLastName = lastName.value;
    var fEmail = email.value;
    var fCed = ced.value;
    var fPass = pass.value;

    var result;
    this.data.addUser2Db(fName,fLastName,fEmail,fCed,fPass).subscribe(val => result = val);
    if(result==null){
      $('#SignHTML').hide();
      $('#LoginHTML').show();
    }
  }

  back2Login(){
    $('#LoginHTML').show();
    $('#SignHTML').hide();
  }

  back2Main(){
    $('#MainHTML').show();
    $('#SignHTML').hide();
  }

}
