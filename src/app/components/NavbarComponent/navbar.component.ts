import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../../services/RestServices/rest.service';
import { Router } from '@angular/router';
@Component({
    selector: 'nav-bar',
    //template:'<h1>PostUserAd</h1>',
    templateUrl: './Navbar.html',
    styleUrls: ['./Navbar.css'],
    providers: [RestService]
})

export class NavbarComponent implements OnInit {
    isLoggedIn: boolean;
    ngOnInit() {
        this.alertCondition = this.activatedRoute.snapshot.params['value'];
    }
    RegisterationForm = new FormGroup({
        firstname: new FormControl(null, [Validators.required, Validators.minLength(6)]),
        lastname: new FormControl(null, []),
        useremail: new FormControl(null, [Validators.email]),
        mobile: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        username: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
    LoginForm = new FormGroup({
        username: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
    alertCondition: boolean;
    constructor(private activatedRoute: ActivatedRoute, private restService: RestService, private router: Router) { }

    onSubmit(condition_value: any) {
        if (condition_value === 1) {
            this.restService.registerUser(this.RegisterationForm);
            this.router.navigate(['/homepage']);
        }
        if (condition_value === 0) {
            let flag: number;
            let respObj = this.restService.loginUser(this.LoginForm);
            respObj.subscribe((data) => {
                let authToken = 'auth-token';
                let auth_token = data.data[authToken];
                RestService.auth_token = auth_token;
                if (auth_token === null) {
                    alert("Please Enter Valid Credentials");
                    this.LoginForm.reset();
                }
                else {
                    alert("User Successful Login");
                    this.isLoggedIn = true;
                    this.router.navigate(['/loginpage']);
                }
            });
        }
    }
    resetForm(condition_value: any) {
        if (condition_value === 1)
            this.RegisterationForm.reset();
        if (condition_value === 0)
            this.LoginForm.reset();
    }
    onMenuClick() {
        this.restService.logoutUser();
        alert("Logout Successfully");
        this.router.navigate(['']);
    }
}