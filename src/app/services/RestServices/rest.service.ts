import { Injectable } from '@angular/core';
import {Http,RequestOptions,Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestService{
    static auth_token:any;
    constructor(private _http:Http){}
    getCategories(){
        let url = "http://192.168.3.144:9000/categories";
        return this._http.get(url).map((response: Response)=>response.json());

    }
    postAd(newAdvertise:any) {
        let url = "http://192.168.3.144:9000/postAd"; //Akshay machine
        //let url = "http://192.168.3.242:9000/postAd"; //Anand's machine
        //let headers = new Headers([{ 'Content-Type': 'application/json' },
        //                            {'auth-token': '5976e85d29226d1aa3c8e17d'}]);
        let headers = new Headers();
        console.log(RestService.auth_token);
        headers.append('auth-token', RestService.auth_token);
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"title": newAdvertise.value.adTitle, "name": newAdvertise.value.adName, "category": newAdvertise.value.adCategory, "description": newAdvertise.value.adDescription};
        let respObj= this._http.post(url, jsonReq, options).map((response: Response)=>response.json());
        respObj.subscribe((data)=>{
            console.log('Received Products:',data);
        });
    }
    registerUser(userCredentials:any){
         //console.log(userCredentials.value);
        let url="http://192.168.3.144:9000/register";
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        let jsonReq = { "firstName": userCredentials.value.firstname,"lastName":  userCredentials.value.lastname,"userName": userCredentials.value.username,"password":userCredentials.value.password,"email": userCredentials.value.useremail,"phone": userCredentials.value.mobile};
        let respObj= this._http.post(url,jsonReq,options).map((response:Response)=>response.json());
         respObj.subscribe((data)=>{
            console.log('Received Products:',data);
        })
    }
    loginUser(userCredentials:any){
        // console.log(userCredentials.value);
         let flag:number;
        // console.log(flag);
        let url="http://192.168.3.144:9000/login";
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"userName": userCredentials.value.username, "password": userCredentials.value.password};
        return this._http.post(url,jsonReq,options).map((response:Response)=>response.json());
       
    }
    logoutUser(){
        let url="http://192.168.3.144:9000/logout";
        let headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        headers.append('auth-token', RestService.auth_token);
        let options = new RequestOptions({ headers: headers });
         this._http.delete(url,options).map((response:Response)=>response.json());
         RestService.auth_token=null;
    }
    getFilteredAds(category:any){
        let url="http://192.168.3.144:9000/posts/search?category="+category;
        let headers = new Headers();
        console.log(RestService.auth_token);
        headers.append('auth-token', RestService.auth_token); 
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url,options).map((response: Response)=>response.json());
    }
    getUserAds(){
        let url="http://192.168.3.144:9000/posts";
        let headers = new Headers();
        //console.log(RestService.auth_token);
        headers.append('auth-token', RestService.auth_token); 
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url,options).map((response: Response)=>response.json());
    }
    getActions(){
        let url="http://192.168.3.144:9000/actions";
        let headers = new Headers();
        //console.log(RestService.auth_token);
        headers.append('auth-token', RestService.auth_token); 
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url,options).map((response: Response)=>response.json());
    }

}