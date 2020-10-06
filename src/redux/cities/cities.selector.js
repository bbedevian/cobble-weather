import {createSelector} from 'reselect'

const selectCities = state => state.cities 

export const selectCity = cityURLParam => 
    createSelector([selectCities], cities => 
        cities[cityURLParam])