import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {MockHeroesService} from '../heroes.service.mock';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ SearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fb = new FormBuilder();
    const searchComponent = new SearchFormComponent(fb);
    expect(searchComponent).toBeTruthy();
  });

  it('should have search form', () => {
    const fb = new FormBuilder();
    const searchComponent = new SearchFormComponent(fb);
    searchComponent.ngOnInit();
    const searchForm = searchComponent.searchForm;
    expect(searchForm).toBeTruthy();
  });

  it('should have input for query', () => {
    const searchForm = component.searchForm;
    expect(searchForm.controls.query).toBeTruthy();
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
    const results = [{"ID": "581", "Name": "Scarlet Witch", "Alignment": "bad", "Gender": "Female", "EyeColor": "blue", "Race": "Mutant", "HairColor": "Brown", "Publisher": "Marvel Comics", "SkinColor": "-", "Height": "170", "Weight": "59"}];
    component.results = results;
    const searchForm = component.searchForm.controls;

    // Exercise: the form must be valid
    searchForm.query.setValue('scarlet witch');

    // Assert
    expect(component.getResults()).toEqual(results,'should have results data');
  });

  it('should return message if no results found', () => {
    // Setup
    const results = 'No results.';
    component.results = results;
    const searchForm = component.searchForm.controls;

    // Exercise
    searchForm.query.setValue('super potato');

    // Assert
    expect(component.getResults()).toEqual(results,'should have results data');
  });
});
