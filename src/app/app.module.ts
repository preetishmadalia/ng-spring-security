import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, RequestOptions} from '@angular/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-component';
import { LoginComponent } from './components/login-component';

import {routing} from './app.routing';

import {RouterOptionsService} from './services/routeroptions-service';
import {AppService} from './services/app-service';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, routing
  ],
  providers: [RouterOptionsService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
