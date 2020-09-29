import { combineReducers } from 'redux';
import selectedReducer from './selected/selected.reducer';

export default combineReducers({
  selectedCity: selectedReducer
})