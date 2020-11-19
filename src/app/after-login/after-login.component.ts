import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  items = ['info restaurante',
            'info restauranteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            'info restaurante',
            'info restaurante',
            'info restauranteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeinfo restauranteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            'info restaurante',
            'info restaurante',
            'info restaurante'
          ];

  constructor() { }

  ngOnInit(): void {
  }

}
