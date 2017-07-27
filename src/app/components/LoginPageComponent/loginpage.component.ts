import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';
import { RestService } from '../../services/RestServices/rest.service';
import { Router } from '@angular/router';
@Component({
    selector:'login-page',
    templateUrl:'./LoginPage.html',
    styleUrls:['./LoginPage.css'],
    providers:[RestService]
})

export class LoginPageComponent{
     categories:Array<any>=[];
     filteredAdvertises:Array<any>=[];
     userAdvertises:Array<any>=[];
     userActions:Array<any>=[];
    constructor(private restService:RestService){
        this.restService.getCategories().subscribe((category)=>{
            this.categories=category.data.itemList;
        });
        this.restService.getUserAds().subscribe((data)=>{
            console.log(data);
            this.userAdvertises=data.data.mypostList;
        });
        this.restService.getActions().subscribe((data)=>{
            this.userActions=data.data.actionList;
        });
    }
    onCategoryClick(category:any){
        console.log(category);
        let respObj=this.restService.getFilteredAds(category);
        respObj.subscribe((data)=>{
            console.log(data);
           this.filteredAdvertises=data.data.mypostList;
        });
    }


}