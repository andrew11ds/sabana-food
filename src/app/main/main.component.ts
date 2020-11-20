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

  }

  get padding(): any{
    var y=screen.height;
    var finalpad= Math.ceil((y*10/768))+'px';
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
    $('#number1').val($('#number1Main').val().toString());
    $('#number2').val($('#number2Main').val().toString());
    $('#number3').val($('#number3Main').val().toString());
  }

}
