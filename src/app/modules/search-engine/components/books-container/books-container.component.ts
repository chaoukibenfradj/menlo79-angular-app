import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksContainerComponent {

  @Input() books: Book[] = [];
  constructor() { }

}
