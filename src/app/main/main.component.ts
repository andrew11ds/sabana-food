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
  }

  ngOnInit(): void {
  }

}
