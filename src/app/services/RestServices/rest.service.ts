import { Injectable } from '@angular/core';
import {Http,RequestOptions,Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestService{
    constructor(private _http:Http){}
    getCategories(){
        let url = "http://192.168.3.144:9000/categories";
        return this._http.get(url).map((response: Response)=>response.json());

    }
    postAd(newAdvertise:any) {
        console.log(newAdvertise.value.adTitle);
        let url = "http://192.168.3.144:9000/postAd"; //Akshay machine
        //let url = "http://192.168.3.242:9000/postAd"; //Anand's machine
        //let headers = new Headers([{ 'Content-Type': 'application/json' },
        //                            {'auth-token': '5976e85d29226d1aa3c8e17d'}]);
        let headers = new Headers();
        headers.append('auth-token', '5976ea541c0edf75e32798d6');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"title": newAdvertise.value.adTitle, "name": newAdvertise.value.adName, "category": newAdvertise.value.adCategory, "description": newAdvertise.value.adDescription};
        let respObj= this._http.post(url, jsonReq, options).map((response: Response)=>response.json());
        respObj.subscribe((data)=>{
            console.log('Received Products:',data);
        })
    }
}