import WeatherActionTypes from './weather.types'

export const fetchWeatherStart = (city) => ({
    type: WeatherActionTypes.FETCH_WEATHER_START,
    city
  });

  
export const fetchWeatherSuccess = weather => ({
    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
    payload: weather
  });
  
export const fetchWeatherFailure = errorMessage => ({
    type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
    payload: errorMessage
  });
