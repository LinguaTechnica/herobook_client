import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesService } from '../heroes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Hero } from '../hero';


describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let heroesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      declarations: [ SearchFormComponent ],
      providers: [
        HeroesService,
        // { provide: HeroesService, useValue: MockHeroesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    heroesService = TestBed.get(HeroesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have search form', () => {
    expect(component.searchForm.controls).toBeTruthy();
  });

  it('should have input for query', () => {
    const searchForm = component.searchForm.controls;
    expect(searchForm.query).toBeTruthy();
  });

  it('should validate form', () => {
    const searchForm = component.searchForm;
    expect(searchForm.valid).toBeFalsy('should be blank form');

    searchForm.controls.query.setValue('scarlet witch');
    expect(searchForm.controls.query).toBeTruthy('should have query');
    expect(searchForm.valid).toBeTruthy('should be filled form');
  });

  it('should return search results', () => {
    // Setup
    const hero = new Hero();
    component.results = [hero];
    hero.name = 'Scarlet Witch';
    hero.alignment = 'bad';
    component.heroes = [hero];
    const expected = [hero];
    const searchForm = component.searchForm.controls;

    // Exercise: the form must be valid
    spyOn(heroesService, 'all').and.returnValue([hero]);
    searchForm.query.setValue('Scarlet Witch');

    // Assert
    expect(component.getResults()).toEqual(expected,'should have results data');
  });

  it('should return message if no results found', () => {
    // Setup
    const heroes = [new Hero()];
    const expected = [];
    const searchForm = component.searchForm.controls;
    component.heroes = heroes;
    component.results = [];

    // Exercise
    searchForm.query.setValue('super potato');
    spyOn(heroesService, 'all').and.returnValue(heroes);

    // Assert
    expect(component.getResults()).toEqual(expected, 'should have results data');
  });
});
