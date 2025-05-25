import {BOOKS, FORM, USER} from './Actions';

const initialState = {
  genreSelection: [],
  user: [],
  books : [],
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM:
      return {
        ...state,
        genreSelection: action.payload,
      };
    case USER:
      return {
        ...state,
        user: action.payload,
      };

    case BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};
