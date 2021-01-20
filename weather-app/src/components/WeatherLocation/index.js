import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData, { rangeCheck } from './WeatherData';
import { ValidValues } from '../../constants/weathers'
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
    <div className="weatherLocationContainer" onClick={onWeatherLocationClick}> 
        <Location city={city}/>
        {data ? <WeatherData data={data}/> : <CircularProgress />}
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.oneOf(ValidValues).isRequired,
        humidity: rangeCheck,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherLocation;