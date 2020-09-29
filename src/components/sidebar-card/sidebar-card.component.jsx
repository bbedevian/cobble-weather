import React from 'react';
import './sidebar-card.styles.scss'
import {withRouter} from 'react-router-dom';

const SidebarCard = ({name, history, match}) => {
    const url = name.toLowerCase().split(' ').join('')
    return (
        <div className='side-card' onClick={() => history.push(`${match.url}${url}`)}>
            <h1>{name}</h1>
        </div>
    );
}


export default withRouter(SidebarCard);
