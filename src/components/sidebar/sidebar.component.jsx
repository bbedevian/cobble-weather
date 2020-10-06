import React from 'react';
import SidebarCard from '../sidebar-card/sidebar-card.component';
import './sidebar.styles.scss'
import {connect} from 'react-redux'
import AddCity from '../add-city/add-city.component';

const SideBar = ({cities}) => {
    let cityNames = Object.keys(cities)
    return (
        <div className='sidebar'>
         {cityNames.map((city, index) => (
                <SidebarCard key={index} city={cities[city]}/>
            ))
            }
        <AddCity/>
        </div>
    );
}

const msp = ({cities}) => ({cities })

export default connect(msp)(SideBar);
