import React from 'react';
const Weather = props => (
    <div> 
        {props.city && props.country && <p>Location: {props.city} | { props.country} </p>}
        {props.temperature && <p>Temp: {props.temperature} °C </p>}
        {props.minTemp && props.maxTemp && <p>MinMaxTemp: {props.minTemp} °C  | {props.maxTemp} °C  </p>}
        {props.humidity && <p>Humidity: {props.humidity} </p>}
        {props.pressure && <p>Pressure: {props.pressure} hPa </p>}
        {props.description && <p> Condition: {props.description} </p> }
        {props.wind && <p> Wind: {props.wind} km/h</p> }
        {props.icon && <span className="icon"><img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon" /> </span>  } 
        {props.error && <p>{props.error} </p>}
    </div>

);

export default Weather;
