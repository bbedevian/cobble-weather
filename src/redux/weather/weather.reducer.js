import WeatherActionTypes from './weather.types'

const INITIAL_STATE = {
    weather: null,
    isFetching: false,
    errorMessage: ''
}

const weatherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER_START:
            return {
                ...state,
                isFetching: true
            }; 
        case WeatherActionTypes.FETCH_WEATHER_SUCCESS: 
            return {
                ...state, 
                isFetching: false,
                weather: action.payload
            };
        case WeatherActionTypes.FETCH_WEATHER_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default: 
        return state;
    }
}

export default weatherReducer;