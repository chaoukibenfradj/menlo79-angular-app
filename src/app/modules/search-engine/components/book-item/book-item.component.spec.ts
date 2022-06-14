import { DatePipe } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Book } from '../../models/book.model';

import { BookItemComponent } from './book-item.component';

describe('BookItemComponent', () => {
  let component: BookItemComponent;
  let fixture: ComponentFixture<BookItemComponent>;
  let title: DebugElement;
  let thumbnailImg: DebugElement;
  let pubDate: DebugElement;

  let isbn: DebugElement;
  const book: Book = {
    title: 'title',
    thumbnailUrl: 'book.jpg',
    isbn: 'isbn',
    publishedDate: { $date: '2009-04-01T00:00:00.000-0700' },
    pageCount: 0,
    shortDescription: '',
    longDescription: '',
    status: '',
    authors: [],
    categories: []
  };
  const emptyBook: Book = {
    title: '',
    thumbnailUrl: '',
    isbn: '',
    publishedDate: { $date: '' },
    pageCount: 0,
    shortDescription: '',
    longDescription: '',
    status: '',
    authors: [],
    categories: []
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookItemComponent);
    component = fixture.componentInstance;

    title = fixture.debugElement.query(By.css('.book-item__info__title'));
    thumbnailImg = fixture.debugElement.query(By.css('.book-item__thumbnail'));
    isbn = fixture.debugElement.query(By.css('.book-item__info__isbn'));
    pubDate = fixture.debugElement.query(By.css('.book-item__info__publication-date'));
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render view with input', () => {
    component.book = book;
    fixture.detectChanges();
    expect(title.nativeElement.innerText).toBe(book.title);
    expect(thumbnailImg.nativeElement.src).toContain(book.thumbnailUrl);
    expect(isbn.nativeElement.innerText).toBe(`ISBN: ${book.isbn}`);
    expect(pubDate.nativeElement.innerText).toBe(`Published on: ${new DatePipe('en-US').transform(book.publishedDate.$date)}`);
  });


  it('should render view with empty input', () => {
    component.book = emptyBook;
    fixture.detectChanges();
    expect(title.nativeElement.innerText).toBe('');
    expect(thumbnailImg.nativeElement.src).toContain('http');
    expect(isbn.nativeElement.innerText).toBe(`ISBN:`);
    expect(pubDate.nativeElement.innerText).toBe(`Published on:`);
  });


});
