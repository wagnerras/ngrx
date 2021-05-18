import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GoogleBooksService  } from '../book-list/books.service';
 
@Injectable()
export class BookEffects {
 
  /* = createEloadBooks$ ffect(() => this.actions$.pipe(
    ofType(''),
    mergeMap(() => this.GoogleBooksService.getBooks()
      .pipe(
        map(books => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
        catchError(() => EMPTY)
      ))
    )
  );  */
 
  constructor(
    private actions$: Actions,
    private moviesService: GoogleBooksService
  ) {}
}