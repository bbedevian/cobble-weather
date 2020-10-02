import { combineReducers } from 'redux';
import citiesReducer from './cities/cities.reducer'
import weatherReducer from './weather/weather.reducer';

export default combineReducers({
  cities: citiesReducer,
  weather: weatherReducer
})