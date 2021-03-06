import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
  effectBooks,
} from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {


  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) { }

  ngOnInit() {
    /* this.booksService
      .getBooks()
      .subscribe((Book) => {
        //console.log('book subscribe ->', Book)
        this.store.dispatch(retrievedBookList({ Book }))
      });*/
    //this.store.dispatch(testParameter({parameter: 'teste ok'}))
    this.store.dispatch(effectBooks());
  }

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }




}