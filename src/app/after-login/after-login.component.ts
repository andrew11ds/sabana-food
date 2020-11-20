import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../data.service";
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  items = [];
  @Input() uName:string[] =[];
  constructor(private dataService: DataService, private cRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {

  }

  hideAfter(){
    $('#AfterLoginHTML').hide();
    $('#LoginHTML').show();
    $('#jqUser').val("");
    $('#jqPass').val("");
  }

}
