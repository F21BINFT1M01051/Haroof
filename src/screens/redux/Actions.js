export const FORM = 'FORM';
export const USER = 'USER';
export const BOOKS = 'BOOKS';

export const formData = data => ({
  type: FORM,
  payload: data,
});

export const userData = data => ({
  type: USER,
  payload: data,
});

export const booksData = data => ({
  type: BOOKS,
  payload: data,
});
