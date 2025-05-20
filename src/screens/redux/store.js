import {createStore, combineReducers} from 'redux';
import {formReducer} from './Reducers';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;
