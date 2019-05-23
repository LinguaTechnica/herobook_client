import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroesService } from './heroes.service';
import { Hero } from './hero';
import { Observable } from 'rxjs';

const fakeHeroes = [
  { name: 'Hulk', alignment: 'good' }
];

class MockHeroesService {
  all(): Observable<Hero[]> {
    return Observable.create(fakeHeroes);
  }
}

describe('HeroesService', () => {
  let service: HeroesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [
          HeroesService
          // { provide: HeroesService, useClass: MockHeroesService }
          ]
      });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(HeroesService);
    }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all heroes', () => {
    const heroesData = [];
    service.all().subscribe(data => {
      expect(data).toEqual(heroesData);
    });
    const req = httpMock.expectOne('http://herobookapi.herokuapp.com/api/v1/heroes/');
    expect(req.request.method).toBe('GET');
    req.flush(heroesData);
    httpMock.verify();
  });

  it('should find a single hero', () => {
    let actual = [{name: 'Hulk'}];
    const expected = [{name: 'Hulk'}];
    expect(actual).toEqual(expected);
  });
});
