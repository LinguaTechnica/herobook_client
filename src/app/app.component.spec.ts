import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SearchFormComponent } from './search-form/search-form.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  let component;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        HeroListComponent,
        HeroDetailComponent,
        SearchFormComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.createComponent(AppComponent);
    instance = component.componentInstance;
  });

  it('should create the app', () => {
    expect(instance).toBeTruthy();
  });

  it(`should have as title 'Hero Book'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hero Book');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hero Book');
  });
});
