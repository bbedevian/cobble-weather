import React from 'react';
import './city-page.styles.scss'
import {connect} from 'react-redux'

import {selectCity} from '../../redux/cities/cities.selector'


const CityPage = ({city}) => {
    return (
        <div className='city-page'>
            <h1>{city.name}</h1>
        </div>
    );
}

const msp = (state, ownProps) => ({
    city: selectCity(ownProps.match.params.city)(state)
})

export default connect(msp)(CityPage);
