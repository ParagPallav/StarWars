import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserValueFromApi;
  LoggedInUser;
  private loggedInStatus = false
  constructor(private http: HttpClient) { }
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }
  getUserDetails(UserData) {
  
    const UserName=this.UserValueFromApi.filter(usr=>usr.name===UserData.value.username && usr.birth_year===UserData.value.password);
    if(UserName.length){
      this.LoggedInUser=UserData.value.username;
    }
    // return this.http.get('https://swapi.co/api/peoples').subscribe(response => {
    //   this.UserValueFromApi = response['results'];
    // })
    // if ((UserData.value.username.replace(/ /g, "")) === "LukeSkywalker" && UserData.value.password === "19BBY") {
    //   return true
    // }
     return !!UserName.length
  }
  intialUserData(){
    return this.http.get('https://swapi.co/api/people').subscribe(response => {
      this.UserValueFromApi = response['results'];
    })
  }
  
}
