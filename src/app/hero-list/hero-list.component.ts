import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroesService) { }

  ngOnInit() {
    this.heroService.all().subscribe(heroes => this.heroes = heroes );
  }

}
