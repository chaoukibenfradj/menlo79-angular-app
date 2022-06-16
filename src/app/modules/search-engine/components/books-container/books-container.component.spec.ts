import { ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BookItemComponent } from '../book-item/book-item.component';

import { BooksContainerComponent } from './books-container.component';

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

describe('BooksContainerComponent', () => {
  let component: BooksContainerComponent;
  let fixture: ComponentFixture<BooksContainerComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksContainerComponent, BookItemComponent],
      imports: [RouterTestingModule]
    })
      .overrideComponent(BooksContainerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();

    fixture = TestBed.createComponent(BooksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive data', () => {
    component.books = mockData;
    expect(component.books.length).toEqual(mockData.length);
    expect(component.books).toBe(mockData);
  });

  it('should get input correctly', () => {
    component.books = mockData;
    fixture.detectChanges();
    const notFound = fixture.nativeElement.querySelector('.books-container__not-found');
    const booksContainerItem = fixture.nativeElement.querySelector('.books-container__book-item');
    const resultFound = fixture.debugElement.query(By.css('.books-container-header__result-found'));
    expect(component.books.length).toEqual(mockData.length);
    expect(resultFound.nativeElement.innerHTML).toEqual(`${mockData.length} found`);
    expect(component.books).toBe(mockData);
    expect(booksContainerItem).toBeTruthy();
    expect(notFound).toBeNull();
  });

  it('should show message when books input is empty', () => {
    component.books = [];
    fixture.detectChanges();
    const notFound = fixture.nativeElement.querySelector('.books-container__not-found');
    const booksContainerItem = fixture.nativeElement.querySelector('.books-container__book-item');
    const resultFound = fixture.debugElement.query(By.css('.books-container-header__result-found'));
    expect(component.books.length).toEqual(0);
    expect(resultFound.nativeElement.innerHTML).toEqual(`0 found`);
    expect(booksContainerItem).toBeFalsy();
    expect(notFound).toBeTruthy();
  });

  it('should render data correctly', () => {
    component.books = mockData;
    fixture.detectChanges();
    let booksContainerItem = fixture.debugElement.queryAll(By.css('.books-container__book-item'));
    expect(booksContainerItem.length).toBe(mockData.length);
  });

});
