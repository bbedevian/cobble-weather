import React from 'react';
import './header.styles.scss'
import {withRouter} from 'react-router-dom';

const Header = ({history}) => {
    return (
        <div className='header' onClick={() => history.push('/')}>
            <span className='cobble-weather'>Cobble Weather</span>
        </div>
    );
}

export default withRouter(Header);
