import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService { 

  constructor(private http:HttpClient) { }
  
  getPlanetSearch(planet) {
    return this.http.get('https://swapi.co/api/people/?search='+planet);
  }
  
}
