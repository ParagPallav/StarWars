import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authservice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Loginvalue;
  message: boolean = false;
  // @ViewChild('f', { static: false }) signupForm: NgForm;
  constructor(private router: Router, private Auth: AuthService) { }
  
  ngOnInit() {
  }


  onSubmit(signupForm: NgForm) {
    this.Loginvalue = this.Auth.getUserDetails(signupForm)
    if (this.Loginvalue == true) {

      this.router.navigate(['home'])
      this.Auth.setLoggedIn(true)
    }
    else {
      this.message = true
    }
    signupForm.reset();
  }
}
