import WeatherActionTypes from './weather.types'
// import axios from 'axios';
// const YEK_IPA = '51ff429ab612a79e8b0d67dd1f48e834';

export const fetchWeatherStart = (lat, lon) => ({
    type: WeatherActionTypes.FETCH_WEATHER_START,
    lat,
    lon
  });
  
export const fetchWeatherSuccess = weather => ({
    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
    payload: weather
  });
  
export const fetchWeatherFailure = errorMessage => ({
    type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
    payload: errorMessage
  });


// written for original thunk 
// export function fetchWeatherAsync(lat, lon) {
//     const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=${YEK_IPA}`
//     return dispatch => {
//         dispatch(fetchWeatherStart());
//         axios.get(URL)
//         .then(weather => {
//             dispatch(fetchWeatherSuccess(weather.data));
//         }).catch(err => dispatch(fetchWeatherFailure(err)));
//     }
// }