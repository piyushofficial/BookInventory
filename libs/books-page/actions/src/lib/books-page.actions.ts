import { createAction, props } from '@ngrx/store';
import { BookRequiredProps } from '@book-co/shared-models';

export const enter = createAction('[Books page] Enter');

export const selectAbook = createAction(
  '[Books page] Select a book',
  props<{ bookId: string }>()
);
export const clearBook = createAction('[Books page] Clear a selected book');
export const createAbook = createAction(
  '[Books page] Create a book',
  props<{ book: BookRequiredProps }>()
);
export const updateAbook = createAction(
  '[Books page] Update a book',
  props<{ bookId: string; changes: BookRequiredProps }>()
);
export const deleteAbook = createAction(
  '[Books page] Delete a book',
  props<{ bookId: string }>()
);