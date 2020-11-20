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

    if ( fName != "" && fLastName != "" && fEmail != "" && fCed != "" && fPass != "") {
      $.ajax({
          type: 'POST',
          url: 'http://localhost/hotelSabana/src/php/addUser2Db.php',
          data: {fName,fLastName,fEmail,fCed,fPass},
          success: function (response) {
          }
      });
      $('#sgupFN').val("");
      $('#sgupLN').val("");
      $('#sgupEM').val("");
      $('#sgupCD').val("");
      $('#sgupPS').val("");
      $('#SignHTML').hide();
      $('#LoginHTML').show();
    }else{
      $('#alertSuccess').show();
      $('#alertSuccess').fadeIn();
      setTimeout(function() {
           $("#alertSuccess").fadeOut();
      },2000);
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

  closeSign(){
    $('#SignHTML').hide();
    $('#LoginHTML').show();
  }

}
