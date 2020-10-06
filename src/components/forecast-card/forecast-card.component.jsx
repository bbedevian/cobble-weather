import React from 'react';
import './forecast-card.styles.scss'
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const weekdays = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
]

const ForecastCard = (props) => {
    const {weather} = props
    let d = new Date(weather.dt * 1000);
    let day = weekdays[d.getDay()]
    let date = day + '  ' + (d.getMonth()+1) + '/' + (d.getDate() )+ '/' + d.getFullYear()
    let sunrise = new Date(weather.sunrise * 1000)
    sunrise = sunrise.getHours() + ':' + (sunrise.getMinutes() < 10 ? '0'+sunrise.getMinutes() : sunrise.getMinutes())+ ' AM'
    let sunset = new Date(weather.sunset * 1000)
    sunset = (sunset.getHours() - 12)+ ':' + (sunset.getMinutes() < 10 ? '0'+sunset.getMinutes() : sunset.getMinutes()) + ' PM'


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className='forecast-card'>
                <span className='date'>{date}</span>
                <div className='forecast-overview'>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='icon' />
                    <span className='temps'>
                        <span>High: {weather.temp.max}°</span>
                        <span>Low: {weather.temp.min}°</span>
                    </span>
                </div>
         
            <Button onClick={handleClickOpen}>See More</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                <DialogTitle id="form-dialog-title">{date}</DialogTitle>
                    <DialogContentText>
                    <div className='details'>
                        <span>Sunrise: {sunrise} </span>
                        <span>Sunset: {sunset}</span>
                        <span>Wind Speed: {weather.wind_speed} mph</span>
                        <span>Notes: {weather.weather[0].description}</span>
                    </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ForecastCard;


