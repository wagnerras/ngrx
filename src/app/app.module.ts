import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


/* import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer'; */
import { booksReducer as books } from './state/books.reducer';
import { collectionReducer as collection} from './state/collection.reducer';

import { StoreModule } from '@ngrx/store';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';

import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/books.effects';

@NgModule({
  declarations: [
    AppComponent, BookCollectionComponent, BookListComponent
  ],
  imports: [
    BrowserModule,
   /*  StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }), */
    StoreModule.forRoot({ books, collection }),
    HttpClientModule,
    EffectsModule.forRoot([BookEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
