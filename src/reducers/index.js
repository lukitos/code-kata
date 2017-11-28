import { combineReducers } from 'redux';
import fish from './fishReducer';
import species from './speciesReducer';

const rootReducer = combineReducers({
  fish,
  species
});

export default rootReducer;
