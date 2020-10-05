const INITIAL_STATE =  [
    {id: 1, name: 'New York', lat: 40.7831, lon: -73.9712, linkURL: 'newyork'},
    {id: 2, name: 'Los Angeles', lat: 34.0522, lon: -118.2437, linkURL: 'losangeles'},
    {id: 3, name: 'Miami', lat: 25.7617, lon: -80.1918, linkURL: 'miami'}
]

const citiesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }

}

export default citiesReducer