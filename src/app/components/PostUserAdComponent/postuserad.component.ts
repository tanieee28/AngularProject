import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';
import { RestService } from '../../services/RestServices/rest.service';
import { Router } from '@angular/router';
@Component({
    selector:'post-user-ad',
    templateUrl:'./PostUserAd.html',
    styleUrls:['./PostUserAd.css'],
    providers:[RestService]
})

export class PostUserAdComponent{
    categories:Array<any>=[];
    PostAdForm=new FormGroup({
        adTitle:new FormControl(null,[]),
        adName:new FormControl(null,[]),
        adCategory:new FormControl(null,[]),
        adDescription:new FormControl(null,[])
    });
    constructor(private restService:RestService,private router:Router){
        this.restService.getCategories().subscribe((category)=>{
            this.categories=category.data.itemList;
        });
        this.PostAdForm.reset();
    }
    onAdSubmit(){
        this.restService.postAd(this.PostAdForm);
        this.router.navigate(['/loginpage']);
    }
    onResetClick(){
        this.PostAdForm.reset();
        
    }
}