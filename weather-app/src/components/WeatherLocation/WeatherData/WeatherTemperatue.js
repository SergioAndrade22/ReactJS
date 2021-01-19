import React from 'react';
import {
    WiCelsius,
    WiUmbrella,
    WiNA,
    WiCloudy,
    WiDaySunny,
    WiThunderstorm,
    WiShowers,
    WiSnow
} from "weather-icons-react";
import {
    RAINY,
    CLOUDY,
    SUNNY,
    SNOWY,
    THUNDER,
    DRIZZLY,
} from '../../../constants/weathers';
import './styles.css';

const icon_size = 40;

const getWeatherIcon = weatherState => {
    switch (weatherState) {
        case RAINY:
            return <WiUmbrella className="wiIcon" size={icon_size}/>
        case CLOUDY:
            return <WiCloudy className="wiIcon" size={icon_size}/>
        case SUNNY:
            return <WiDaySunny className="wiIcon" size={icon_size}/>
        case SNOWY:
            return <WiSnow className="wiIcon" size={icon_size}/>
        case THUNDER:
            return <WiThunderstorm className="wiIcon" size={icon_size}/>
        case DRIZZLY:
            return <WiShowers className="wiIcon" size={icon_size}/>
        default:
            return <WiNA className="wiIcon" size={icon_size}/>
    }
}

const WeatherTemperature = ({temperature, weatherState}) => {
    return (
        <div className="weatherTemperatureContainer">
            {getWeatherIcon(weatherState)}
            <span className="temperature">{temperature}</span>
            <WiCelsius className="wiIcon degrees" size={icon_size}/>
        </div>
    );
};

export default WeatherTemperature;