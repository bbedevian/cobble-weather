import React from 'react';
import SidebarCard from '../sidebar-card/sidebar-card.component';
import './sidebar.styles.scss'
import {connect} from 'react-redux'

const SideBar = ({cities}) => {

    return (
        <div className='sidebar'>
         {cities.map(city => (
                <SidebarCard key={city.id} city={city}/>
            ))
            }
        </div>
    );
}

const msp = ({cities}) => ({cities })

export default connect(msp)(SideBar);
