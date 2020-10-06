import React from 'react';
import './sidebar-card.styles.scss'
import {withRouter} from 'react-router-dom';

const SidebarCard = (props) => {
    const {city, history} = props
    const url = city.name.toLowerCase().split(' ').join('')
    return (
        <div className='side-card' onClick={() => history.push(`${url}`)}>
            <h1>{city.name}</h1>
        </div>
    );
}

export default withRouter(SidebarCard);
