import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { PostUserAdComponent } from './components/PostuserAdComponent/postuserad.component';
import { HomePageComponent } from './components/HomePageComponent/homepage.component';
import { CarosalComponent } from './components/HomePageComponent/CarosalComponent/carosal.component';
import { NavbarComponent } from './components/NavbarComponent/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule, RouterModule.forRoot([{path:'',component:HomePageComponent},{path:'postUserAd',component:PostUserAdComponent}]),HttpModule ],
  declarations: [ AppComponent, PostUserAdComponent, HomePageComponent, CarosalComponent, NavbarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
