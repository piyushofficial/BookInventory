import { createAction, props } from '@ngrx/store';
import { BookModel, BookRequiredProps } from '@book-co/shared-models';

export const booksLoaded = createAction(
  '[Books API] Books Loaded Success',
  props<{ books: BookModel[] }>()
);

export const bookCreated = createAction(
  '[Books API] Book Created',
  props<{ book: BookModel }>()
);
export const bookUpdated = createAction(
  '[Books API] Book Updated',
  props<{ book: BookModel }>()
);
export const booksDeleted = createAction(
  '[Books API] Books Deleted',
  props<{ bookId: string }>()
);
