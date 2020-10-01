import React from 'react';
import SideBar from '../../components/sidebar/sidebar.component';
import './homepage.styles.scss'

import {Route} from 'react-router-dom';
import Overview from '../../components/overview/overview.component';
import CityPage from '../city-page/city-page.component';
import {withRouter} from 'react-router-dom';


const HomePage = () => {    

    return (
        <div className='homepage'>
            <SideBar/>
            <Route exact path='/' component={Overview}/>
            <Route path={`/:city`} component={CityPage}/>
        </div>
    );
}

export default withRouter(HomePage);
