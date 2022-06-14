import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { SearchEngineComponent } from './search-engine.component';

const routes: Routes = [
  {
    path: '',
    component: SearchEngineComponent,
    children: [
      {
        path: '',
        component: ListBooksComponent
      },
      {
        path:'details/:isbn',
        component: BookDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchEngineRoutingModule { }
