import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../commonService/common.service';
import { Router } from '@angular/router';
import { AuthService } from '../authservice/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // planet = "";
  count = 0;
  planetSearch=[]
  timeoutID = null;
  NotAllowed:boolean=false;
  constructor(private common: CommonService, private router: Router, private Auth: AuthService) { }

  ngOnInit() {
  }
  searchPlanet(newValue) {
    this.count++
   
    if (!this.timeoutID) {
      this.timeoutID = setTimeout(()=> {
        this.NotAllowed=false;
        this.count = 0
        this.timeoutID = null;
      }, 60000);

    }

    console.log(this.Auth.LoggedInUser)
    if (this.Auth.LoggedInUser === "Luke Skywalker" || this.count <= 15)
      this.common.getPlanetSearch(newValue).subscribe(response => {
        this.planetSearch = response['results'];
      })
      else{
         this.NotAllowed=true;
      }

  }
  logout() {
    this.router.navigate([''])
    this.Auth.setLoggedIn(false)
  }

}
