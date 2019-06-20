import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HeroesService} from '../heroes.service';
import {Hero} from '../hero';

@Component({
  selector: 'search-form',
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
    this.heroService.all().subscribe(heroes => this.heroes = heroes.results );
  }

  /**
   * @desc search results handler
   */
  getResults() {
    if (this.searchForm.valid) {
      this.results = this.find(this.searchForm.controls.query.value);
      return this.results;
    } else {
      console.log('Invalid form!');
    }
  }

  /**
   * @desc simple search query filter
   * @param query: string, user query text
   */
  find(query) {
    // TODO: create a dynamic query that searches as the user types
    return this.heroes.reduce((acc, hero) => {
      Object.keys(hero)
        .map(k => {
          if (hero[k] && hero[k].toLowerCase().includes(query.toLowerCase())) {
            acc.push(hero);
          }
        });
      return acc;
    }, []);
  }

}
