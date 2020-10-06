const INITIAL_STATE =  {
    'newyork': {name: 'New York'},
    'losangeles': {name: 'Los Angeles'},
    'miami': {name: 'Miami'},
}
   

const citiesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_CITY': 
            let key = action.payload.toLowerCase().split(' ').join('')
            return {...state, [key]: {name: action.payload}}
        default:
            return state
    }

}

export default citiesReducer