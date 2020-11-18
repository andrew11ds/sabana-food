import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(val => console.log(val));
      //document.getElementById("yeison").style.padding = "padding-top:100px;";
  }

  ngOnInit(): void {
  }

  get padding(): any{
    var y=screen.height;
    var finalpad= Math.ceil((y*250/768))+'px';
    return{
      'padding-top':finalpad
    };
  }

}
