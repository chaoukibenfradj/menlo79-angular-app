import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, startWith, switchMap } from 'rxjs';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent {

  searchInputFormControl = new FormControl<string>('');
  books$ = this.searchInputFormControl
    .valueChanges
    .pipe(debounceTime(300))
    .pipe(startWith(''))
    .pipe(
      switchMap((val) => this.booksService.getBookList(val ?? ''))
    );

  constructor(private booksService: BooksService) { }





}
