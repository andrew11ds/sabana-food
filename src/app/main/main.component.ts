import { Component, OnInit,Input } from '@angular/core';
import { DataService } from "../data.service";
import * as $ from "jquery";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private dataService: DataService) {
    //this.dataService.getData().subscribe(val => console.log(val));

      //document.getElementById("yeison").style.padding = "padding-top:100px;";
  }

  ngOnInit(): void {
    $('#nameForm').hide();
  }

  get padding(): any{
    var y=screen.height;
    var finalpad= Math.ceil((y*250/768))+'px';
    return{
      'padding-top':finalpad
    };
  }

  hideMain(){
    $('#MainHTML').hide();
    $('#LoginHTML').show();
  }

  go2Manage(){
    $('#ManageHTML').show();
    $('#MainHTML').hide();
    $('#alerta').show();
    $('#alerta').fadeIn();
    setTimeout(function() {
         $("#alerta").fadeOut();
    },1000);
    var n1= $('#number1Main').val()+''
    var n2= $('#number2Main').val()+''
    var n3 = $('#number3Main').val()+''
    console.log(n1,n2,n3)
    if (n1!='') {
      console.log("entre")
     $('#number1').val(n1)
    }
    if (n2 !='') {
      $('#number2').val(n2)
    }
    if (n3 !='') {
      $('#number3').val(n3)
    }

    //  $('#number2').val($('#number2Main').val());
    //  $('#number3').val($('#number3Main').val());

  }

  go2Manage2(){
    $('#ManageHTML').show();
    $('#MainHTML').hide();
    var input = $('#inputName').val();
    if (input != '') {
      $('#nameInputForm').val(input);
    }
  }

  switch2Name(){
    $('#dirForm').hide();
    $('#nameForm').show();
    $('#dirRestForm').hide();
    $('#nameRestForm').show();
  }

}
