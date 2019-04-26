import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HeroesService} from '../heroes.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  heroes: Hero[];
  searchForm: FormGroup;
  results: any;

  constructor(private fb: FormBuilder, private heroService: HeroesService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      query: ['', Validators.required]
    });
    this.heroService.all().subscribe(heroes => this.heroes = heroes );
  }

  getResults() {
    if (this.searchForm.valid) {
      this.results = this.heroService.find(this.searchForm.controls.query);
      console.log('Searching...');
      // this.results = this.heroes.filter(hero => hero.Name === this.searchForm.controls.query.value);
      if (this.results.length) {
        return this.results;
      }
      return 'No results.';
    } else {
      console.log('Invalid form!');
    }
  }

}
