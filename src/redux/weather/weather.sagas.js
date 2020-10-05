import { takeEvery, call, put } from 'redux-saga/effects'
import {fetchWeatherSuccess, fetchWeatherFailure} from './weather.actions'
import WeatherActionTypes from './weather.types'
import axios from 'axios';

const YEK_IPA = '51ff429ab612a79e8b0d67dd1f48e834';

export function* fetchWeatherAsync(action) {
    yield console.log('i am being fired!')
    try {
        const response = yield call(apiCall, action.lat, action.lon)
        yield put(fetchWeatherSuccess(response.data))
    } catch(err){
        yield put(fetchWeatherFailure(err.message))
    }
}

export function* fetchWeatherStart(lat, lon) {
    yield takeEvery(WeatherActionTypes.FETCH_WEATHER_START, fetchWeatherAsync)
}

function apiCall(lat, lon){
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=${YEK_IPA}`
    return axios({
        method: "get",
        url: URL
      })
}