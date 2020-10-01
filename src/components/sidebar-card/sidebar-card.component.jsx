import React from 'react';
import './sidebar-card.styles.scss'
import {withRouter} from 'react-router-dom';

const SidebarCard = (props) => {
    const {city, history} = props

    return (
        <div className='side-card' onClick={() => history.push(`${city.linkURL}`)}>
            <h1>{city.name}</h1>
        </div>
    );
}

export default withRouter(SidebarCard);
