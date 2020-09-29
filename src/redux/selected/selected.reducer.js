import {SelectedActionTypes} from './selected.types'

const INITIAL_STATE = {
    selectedCity: null
}

const selectedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SelectedActionTypes.SELECT_CITY: 
            return {...state, selectedCity: action.payload}
        default: 
        return state;
    }
}

export default selectedReducer;