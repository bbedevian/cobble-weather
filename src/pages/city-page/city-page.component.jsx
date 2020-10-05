import React from 'react';
import './city-page.styles.scss'
import {connect} from 'react-redux'

// import {fetchWeatherStartAsync} from '../../redux/weather/weather.actions'
import {fetchWeatherStart} from '../../redux/weather/weather.actions'
import {selectCity} from '../../redux/cities/cities.selector'
import ForecastCard from '../../components/forecast-card/forecast-card.component';
import JustSpinner from '../../components/with-spinner/just-spinner.component';


class CityPage extends React.Component {
    
    componentDidMount(){
        const {fetchWeatherStart, city} = this.props
        fetchWeatherStart(city.lat, city.lon)
    }
    
    componentDidUpdate(prevProps) {
        const {fetchWeatherStart, city} = this.props
        if (prevProps.city.id !== city.id) {
            fetchWeatherStart(city.lat, city.lon)
        }
      }

    render(){
        const {city, weather} = this.props 
        
            return (
                <div className='city-page'>
                    <div className='city-name'>{city.name}</div>
                    {
                        weather ? 
                        weather.daily.map((day, index) => (
                        <ForecastCard key={index} weather={day} />
                    ))
                    :
                    <JustSpinner/>
                    }
                </div>
            );
        }
}

const msp = (state, ownProps) => ({
    city: selectCity(ownProps.match.params.city)(state),
    weather: state.weather.weather,
})

const mdp = (dispatch) => {
    return {
      fetchWeatherStart: (lat, lon) => dispatch(fetchWeatherStart(lat, lon))
    }
  }

export default connect(msp, mdp)(CityPage);
