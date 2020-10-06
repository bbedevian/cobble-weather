import { takeEvery, call, put } from 'redux-saga/effects'
import {fetchWeatherSuccess, fetchWeatherFailure} from './weather.actions'
import WeatherActionTypes from './weather.types'
import axios from 'axios';

const YEK_IPA = '51ff429ab612a79e8b0d67dd1f48e834';

export function* fetchWeatherAsync(action) {
    try {
        const response = yield call(apiCall, action.city)
        yield put(fetchWeatherSuccess(response.data))
    } catch(err){
        yield put(fetchWeatherFailure(err.message))
    }
}

export function* fetchWeatherStart() {
    yield takeEvery(WeatherActionTypes.FETCH_WEATHER_START, fetchWeatherAsync)
}

const apiCall = async (city) => {
    let query = encodeURI(city.toLowerCase())
    const URL1 = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${YEK_IPA}`
    let resp = await axios.get(URL1)
    let lat = resp.data.coord.lat
    let lon = resp.data.coord.lon
    const URL2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=${YEK_IPA}`
    return axios.get(URL2)
}