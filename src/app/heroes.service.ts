import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { environment as env } from '../environments/environment';

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
  private APIURL = env.heroApiUrl;

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<HeroAPIResponse>(`${this.APIURL}/heroes/`);
  }

}
