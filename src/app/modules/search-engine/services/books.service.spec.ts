import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BooksService } from './books.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('BooksService', () => {
  let service: BooksService;
  let httpSpy: { get: jasmine.Spy };

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

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BooksService,
        {
          provide: HttpClient, useValue: httpSpy
        }
      ]
    });
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calls getBookList()', () => {
    httpSpy.get.and.returnValue(of(mockData));
    service.getBookList().subscribe(data => {
      expect(data).toBe(mockData);
    });
    expect(httpSpy.get).toHaveBeenCalledTimes(1);
  });

  it('calls getBookDetails()', ()=>{
    httpSpy.get.and.returnValue(of(mockData));
    service.getBookDetails('1933988673').subscribe(data=>{
      expect(data).toEqual(mockData[0]);
    });
    expect(httpSpy.get).toHaveBeenCalledTimes(1);
  });

});
