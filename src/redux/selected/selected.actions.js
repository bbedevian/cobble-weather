import {SelectedActionTypes} from './selected.types';

export const selectCity = city => ({
    type: SelectedActionTypes.SELECT_CITY,
    payload: city
})