import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { tap } from 'rxjs/internal/operators/tap';
import {Observable} from 'rxjs';

interface HeroAPIResponse {
  count: number;
  next?: string;
  previous?: string;
  results?: Hero[];
}

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private APIURL = 'http://herobookapi.herokuapp.com/api/v1';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<HeroAPIResponse>(`${this.APIURL}/heroes/`);
  }

}
