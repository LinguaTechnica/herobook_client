import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

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
    expect(component).toBeTruthy();
  });

  it('should have search form', () => {
    const fb = new FormBuilder();
    const searchComponent = new SearchFormComponent(fb);
    const searchForm = searchComponent.form;
    expect(searchForm).toBeTruthy();
  });

  it('should have input for query', () => {
    const searchForm = component.form;
    expect(searchForm.controls.query).toBeTruthy();
  });

  it('should validate form', () => {
    const searchForm = component.form;
    expect(searchForm.valid).toBeFalsy('should be blank form');

    searchForm.controls.query.setValue('scarlet witch');
    expect(searchForm.controls.query).toBeTruthy('should have query');
    expect(searchForm.valid).toBeTruthy('should be filled form');
  });

  it('should return search results', () => {
    const searchForm = component.form;
    const searchResult = component.results;
    searchForm.setValue('scarlet witch');
  });

  xit('should return message if no results found', () => {

  });
});
