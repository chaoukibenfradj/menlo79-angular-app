import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  bookDetails$ = this.activatedRoute.paramMap
  .pipe(
    map(params=>params.get('isbn'))
  )
  .pipe(
    switchMap((isbn) => this.booksService.getBookDetails(isbn??''))
  );

  constructor(private activatedRoute: ActivatedRoute, private booksService: BooksService) { }

}
