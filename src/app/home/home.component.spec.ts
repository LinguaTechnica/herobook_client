import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {SearchFormComponent} from '../search-form/search-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HeroListComponent} from '../hero-list/hero-list.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      declarations: [
        HomeComponent,
        SearchFormComponent,
        HeroListComponent, HeroDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // TODO: Error Uncaught TypeError: this._subscribe is not a function thrown
    // const instance = new HomeComponent();
    expect(component).toBeTruthy();
  });

  it('should have nav brand logo', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const el = fixture.nativeElement;
    expect(el.querySelector('.brand-logo').innerText).toContain('Hero Book');
  });

  it('should have a search bar with placeholder text', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const el = fixture.nativeElement;
    expect(el.querySelector('input').placeholder).toEqual('Search');
  });
});
