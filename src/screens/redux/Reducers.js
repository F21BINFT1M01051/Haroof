import {FORM} from './Actions';

const initialState = {
  genreSelection: [],
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM:
      return {
        ...state,
        genreSelection: action.payload,
      };
    default:
      return state;
  }
};
