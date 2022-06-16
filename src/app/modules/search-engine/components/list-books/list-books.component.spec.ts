import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { BooksService } from '../../services/books.service';
import { ListBooksComponent } from './list-books.component';

const mockData = [{
  "title": "Unlocking Android",
  "isbn": "1933988673",
  "pageCount": 416,
  "publishedDate": {
    "$date": "2009-04-01T00:00:00.000-0700"
  },
  "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
  "shortDescription": "",
  "longDescription": "",
  "status": "PUBLISH",
  "authors": [
    "W. Frank Ableson",
    "Charlie Collins",
    "Robi Sen"
  ],
  "categories": [
    "Open Source",
    "Mobile"
  ]
},
{
  "title": "Android in Action, Second Edition",
  "isbn": "1935182722",
  "pageCount": 592,
  "publishedDate": {
    "$date": "2011-01-14T00:00:00.000-0800"
  },
  "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
  "shortDescription": "",
  "longDescription": "",
  "status": "PUBLISH",
  "authors": [
    "W. Frank Ableson",
    "Robi Sen"
  ],
  "categories": [
    "Java"
  ]
}];

describe('ListBooksComponent', () => {
  let component: ListBooksComponent;
  let fixture: ComponentFixture<ListBooksComponent>;
  let bookServiceSpy: { getBookList: jasmine.Spy };

  beforeEach(async () => {
    bookServiceSpy = jasmine.createSpyObj('BooksService', ['getBookList']);

    await TestBed.configureTestingModule({
      declarations: [ListBooksComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [{
        provide: BooksService, useValue: bookServiceSpy
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send value to input', (done) => {
    const searchInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#search-input');
    searchInput.value = 'Keyword';
    searchInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.searchInputFormControl.value).toBe('Keyword');
      done();
    });
  });

  it('shoud generate books data', () => {
    bookServiceSpy.getBookList.and.returnValue(of(mockData));
    
    component.books$.subscribe(data => {
      expect(data).toBe(mockData);
    });
  })

});
