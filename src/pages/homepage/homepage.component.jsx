import React from 'react';
import SideBar from '../../components/sidebar/sidebar.component';
import './homepage.styles.scss'

import {Route} from 'react-router-dom';
import Overview from '../../components/overview/overview.component';
import CityPage from '../city-page/city-page.component';
// import WithSpinner from '../../components/with-spinner/with-spinner.component'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'


// const CityPageWithSpinner = WithSpinner(CityPage)

const HomePage = ({weather}) => {    

    return (
        <div className='homepage'>
            <SideBar/>
            <Route exact path='/' component={Overview}/>
            <Route path={`/:city`} component={CityPage}/>
            {/* <Route path={`/:city`} render={(props) => <CityPageWithSpinner isLoading={!weather} {...props}/>}/> */}
        </div>
    );
}

const msp = ({weather}) => ({
    weather: weather.weather
})

export default withRouter(connect(msp)(HomePage));
