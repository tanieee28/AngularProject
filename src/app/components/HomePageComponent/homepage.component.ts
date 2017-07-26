import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector:'home-page',
   //template:'<h1>PostUserAd</h1>',
    templateUrl:'./HomePage.html',
    styleUrls:['./HomePage.css']
})

export class HomePageComponent implements OnInit{
    ngOnInit(){
        this.alertCondition = this.activatedRoute.snapshot.params['value'];
    }
    RegisterationForm=new FormGroup({
        firstname:new FormControl(null,[Validators.required,Validators.minLength(6)]),
        useremail:new FormControl(null,[Validators.email]),
        mobile:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
        username:new FormControl(null,[Validators.required]),
        password:new FormControl(null,[Validators.minLength(8)])
    });
    alertCondition:boolean;
    constructor(private activatedRoute: ActivatedRoute) {}
    
    onSubmit(){
       console.log(this.RegisterationForm.value.firstname);
    }
    resetForm(){
        this.RegisterationForm.reset();
    }
}