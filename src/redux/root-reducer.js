import { combineReducers } from 'redux';
import citiesReducer from './cities/cities.reducer'

export default combineReducers({
  cities: citiesReducer
})