import React from 'react';
import './forecast-card.styles.scss'

const ForecastCard = (props) => {
    const {weather} = props
    let d = new Date(weather.dt * 1000);
    console.log(d)
    let date =  d.getMonth() + '/' + (d.getDate() )+ '/' + d.getYear()
    return (
        <div className='forecast-card'>
            <span>{date}</span>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='icon' />
            <div className='temps'>
                <span>High: {weather.temp.max}</span>
                <span>Low: {weather.temp.min}</span>
            </div>
        </div>
    );
}

export default ForecastCard;
