import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const instance = new HomeComponent();
    expect(instance).toBeTruthy();
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
