import { Component, OnInit,  ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../../services/RestServices/rest.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../NavbarComponent/navbar.component';
@Component({
    selector:'home-page',
   //template:'<h1>PostUserAd</h1>',
    templateUrl:'./HomePage.html',
    styleUrls:['./HomePage.css'],
    providers:[RestService]
})

export class HomePageComponent {
    categories:Array<any>=[];
    constructor(private restService:RestService,private router:Router){
        this.restService.getCategories().subscribe((category)=>{
            this.categories=category.data.itemList;
        });
    } 
}