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
  planet = "sky";
  planetSearch;
  constructor(private common: CommonService, private router: Router, private Auth: AuthService) { }

  ngOnInit() {
  }
  searchPlanet() {
    this.common.getPlanetSearch(this.planet).subscribe(response => {
      this.planetSearch = response['results'];
    })

  }
  logout() {
    this.router.navigate([''])
    this.Auth.setLoggedIn(false)
  }

}
