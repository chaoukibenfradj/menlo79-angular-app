import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './../models/book.model';
@Injectable()
export class BooksService {

  constructor(private httpClient: HttpClient) {
  }

  getBookList(searchTerm?: string): Observable<Book[]> {
    const queryParams = new HttpParams()
      .append('title_like', searchTerm ?? '');
    return this.httpClient
      .get<Book[]>(
        `${environment.SERVER_URL}/books`,
        {
          params: queryParams
        }
      );
  }
  getBookDetails(isbn: string): Observable<Book> {
    const queryParams = new HttpParams()
      .append('isbn', isbn);
    return this.httpClient.get<Book[]>(
      `${environment.SERVER_URL}/books`,
      {
        params: queryParams
      }
    )
      .pipe(
        map(val => val[0])
      );
  }
}
