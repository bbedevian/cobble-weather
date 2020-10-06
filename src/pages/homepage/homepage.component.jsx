import React from 'react';
import SideBar from '../../components/sidebar/sidebar.component';
import './homepage.styles.scss'

import {Route, Redirect} from 'react-router-dom';
import CityPage from '../city-page/city-page.component';
import {withRouter} from 'react-router-dom';

const HomePage = () => {    

    return (
        <div className='homepage'>
            <SideBar/>
            <Route exact path='/' render={() => <Redirect to='/newyork' />}/>
            <Route path={`/:city`} component={CityPage}/>
        </div>
    );
}

export default withRouter(HomePage);
