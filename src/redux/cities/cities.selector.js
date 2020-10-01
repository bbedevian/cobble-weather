import {createSelector} from 'reselect'

const CITY_ID_MAP = {
    newyork: 1,
    losangeles: 2,
    miami: 3
}

const selectCities = state => state.cities 

export const selectCity = cityURLParam => 
    createSelector([selectCities], 
        cities => cities.find(city => city.id === CITY_ID_MAP[cityURLParam]))