import React from 'react';
import './city-page.styles.scss'
import {connect} from 'react-redux'

import {fetchWeather} from '../../redux/weather/weather.actions'
import {selectCity} from '../../redux/cities/cities.selector'
import ForecastCard from '../../components/forecast-card/forecast-card.component';



class CityPage extends React.Component {
    
    componentDidMount(){
        const {fetchWeather, city} = this.props
        fetchWeather(city.lat, city.lon)

    }
    
    componentDidUpdate(prevProps) {
        const {fetchWeather, city} = this.props
        if (prevProps.city.id !== city.id) {
            fetchWeather(city.lat, city.lon)
        }
      }

    render(){
        const {city, weather} = this.props 
        
            return (
                <div className='city-page'>
                    <div className='city-name'>{city.name}</div>
                    {
                        weather.daily ? 
                        weather.daily.map((day, index) => (
                        <ForecastCard key={index} weather={day} />
                    ))
                    :
                    null
                    }
                </div>
            );
        }
}

const msp = (state, ownProps) => ({
    city: selectCity(ownProps.match.params.city)(state),
    weather: state.weather.weather
})

const mdp = (dispatch) => {
    return {
      fetchWeather: (lat, lon) => dispatch(fetchWeather(lat, lon))
    }
  }

export default connect(msp, mdp)(CityPage);
