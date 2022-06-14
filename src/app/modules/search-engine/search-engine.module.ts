import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchEngineRoutingModule } from './search-engine-routing.module';
import { SearchEngineComponent } from './search-engine.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { BooksService } from './services/books.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksContainerComponent } from './components/books-container/books-container.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';


@NgModule({
  declarations: [
    SearchEngineComponent,
    ListBooksComponent,
    BooksContainerComponent,
    BookItemComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    SearchEngineRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    BooksService
  ]
})
export class SearchEngineModule { }
