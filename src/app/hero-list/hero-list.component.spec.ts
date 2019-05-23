import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListComponent } from './hero-list.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HttpClientModule} from '@angular/common/http';

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ HeroListComponent, HeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
