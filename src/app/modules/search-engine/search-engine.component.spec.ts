import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchEngineComponent } from './search-engine.component';

@Component({
  selector: 'app-list-books',
  template: 'ListBooksComponent'
})
class ListBooksComponent { }

@Component({
  selector: 'app-book-details',
  template: 'BookDetailsComponent'
})
class BookDetailsComponent { }


describe('SearchEngineComponent', () => {
  let component: SearchEngineComponent;
  let fixture: ComponentFixture<SearchEngineComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '', component: ListBooksComponent
          },
          {
            path: 'details/:isbn', component: BookDetailsComponent
          },
          {
            path: '**', redirectTo: ''
          }
        ])
      ],
      providers: [Location],
      declarations: [SearchEngineComponent, ListBooksComponent, BookDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home page correctly', fakeAsync(() => {
    router.initialNavigation();
    tick();
    expect(location.path()).toBe('');
  }));

  it('should navigate to details page correctly', fakeAsync(() => {
    router.navigate(['/details/isbn']);
    tick();
    expect(location.path()).toBe('/details/isbn');
  }));

  it('should navigate to default route', fakeAsync(() => {
    router.navigate(['/wrong']);
    tick();
    expect(location.path()).toBe('');
  }));

});
