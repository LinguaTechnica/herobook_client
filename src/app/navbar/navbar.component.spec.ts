import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {HeroListComponent} from '../hero-list/hero-list.component';
import {AppComponent} from '../app.component';
import {Hero} from '../hero';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ReactiveFormsModule, AppRoutingModule ],
      declarations: [
        NavbarComponent,
        AppComponent,
        SearchFormComponent,
        HeroListComponent,
        HeroDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const instance = new NavbarComponent();
    expect(instance).toBeTruthy();
  });

  it('should have nav brand logo', () => {
    fixture = TestBed.createComponent(NavbarComponent);
    const el = fixture.nativeElement;
    expect(el.querySelector('.brand-logo').innerText).toContain('Hero Book');
  });

  it('links should route to each component', fakeAsync(() => {
    const routes = ['search', 'heroes'];
    routes.map(route => {
      router.navigate([route]);
      tick();
      expect(location.path()).toEqual(`/${route}`);
    });
  }));
});
