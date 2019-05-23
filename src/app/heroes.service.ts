import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private APIURL = 'http://herobookapi.herokuapp.com/api/v1';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Hero[]>(`${this.APIURL}/heroes/`);
  }

}
