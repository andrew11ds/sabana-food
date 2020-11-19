import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DataService } from "./data.service";
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ManageClientsComponent } from './manage-clients/manage-clients.component';
import { AfterLoginComponent } from './after-login/after-login.component';

const routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SingUpComponent},
  {path: 'manageclients', component: ManageClientsComponent},
  {path: 'afterlogin', component: AfterLoginComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SingUpComponent,
    ManageClientsComponent,
    AfterLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
