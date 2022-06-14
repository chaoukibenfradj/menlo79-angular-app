import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksService } from '../../services/books.service';

import { ListBooksComponent } from './list-books.component';

describe('ListBooksComponent', () => {
  let component: ListBooksComponent;
  let fixture: ComponentFixture<ListBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBooksComponent ],
      imports: [HttpClientTestingModule],
      providers: [ BooksService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
