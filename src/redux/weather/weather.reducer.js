const INITIAL_STATE = {
    weather: {}
}

const weatherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER': 
            return {...state, weather: action.payload}
        default: 
        return state;
    }
}

export default weatherReducer;