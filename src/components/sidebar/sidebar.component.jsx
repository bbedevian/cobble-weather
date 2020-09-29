import React from 'react';
import SidebarCard from '../sidebar-card/sidebar-card.component';
import './sidebar.styles.scss'

const SideBar = () => {
   let cities = [{id: 1, name: 'New York'}, {id: 2, name: 'Los Angeles'}, {id: 3, name: 'Miami'}]
    return (
        <div className='sidebar'>
         {cities.map(city => (
                <SidebarCard key={city.id} {...city}/>
            ))
            }
        </div>
    );
}

export default SideBar;
