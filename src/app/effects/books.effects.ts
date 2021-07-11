import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap, concatMap } from 'rxjs/operators';
import { GoogleBooksService } from '../book-list/books.service';
import { effectBooks, retrievedBookList} from '../state/books.actions';



@Injectable()
export class BookEffects {

  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService,
  ) { }


  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(effectBooks),
    switchMap(() => this.booksService.getBooks()
      .pipe(
        tap(Book => console.log('effects =>>', Book)),
        concatMap(Book => of(retrievedBookList({ Book })))
      ))
  )
  );


  /* testeParameter$ =  createEffect(() => this.actions$.pipe(
    ofType(testParameter),
    switchMap(payload => {
      console.log('payload:', payload.parameter);
      return this.booksService.getBooks()
      .pipe(
        tap(Book => console.log('effects =>>', Book)),
       concatMap(Book => of(retrievedBookList({ Book })))
      )
    })
  )
  ); */

}