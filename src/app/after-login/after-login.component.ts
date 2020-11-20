import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../data.service";
import { ChangeDetectorRef } from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  items = [];
  @Input() uName:string[] =[];
  constructor(private dataService: DataService, private cRef: ChangeDetectorRef) {
    $('#AfterHTML').hide();
  }

  ngOnInit(): void {

  }

  hideAfter(){
    $('#AfterHTML').hide();
    $('#LoginHTML').show();
    $('#jqUser').val("");
    $('#jqPass').val("");
    $('#usuario').empty();
    $('#correo').empty();
    $('#cedula').empty();
    $('#tableBody').empty();
  }

  go2Manage2(){
    $('#ManageHTML').show();
    $('#AfterHTML').hide();
    $('#alerta').hide();
  }

  toMain(){
    $('#AfterHTML').hide();
    $('#MainHTML').show();
  }

}
