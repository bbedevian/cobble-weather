import axios from 'axios';
const YEK_IPA = '51ff429ab612a79e8b0d67dd1f48e834';

export function fetchWeather(lat, lon) {
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=${YEK_IPA}`
    return dispatch => {
        return axios.get(URL)
        .then(weather => {
            return dispatch(getWeather(weather.data));
        }).catch(err => {
            console.log('error', err)
        });
    }
}


const getWeather = weather => ({
    type: 'FETCH_WEATHER',
    payload: weather
})