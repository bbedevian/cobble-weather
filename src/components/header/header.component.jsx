import React from 'react';
import './header.styles.scss'
import {withRouter} from 'react-router-dom';

const Header = ({history}) => {
    return (
        <div className='header' onClick={() => history.push('/')}>
            <h1>Cobble Weather</h1>
        </div>
    );
}

export default withRouter(Header);
