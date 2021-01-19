import React from 'react';
import WeatherTemperature from './WeatherTemperatue';
import WeatherExtraInfo from './WeatherExtraInfo';
import { ValidValues } from '../../../constants/weathers'
import PropTypes from 'prop-types';

const MIN = 0;
const MAX = 100;
const rangeCheck = function(props, propName, componentName) {
    const propType = typeof props[propName];
    if(!(propType === 'number'))
        return new Error(`Error found on ${componentName}, ${propName} must be a number`);
    if(props[propName] < MIN || props[propName] > MAX) {
        return new Error(`Error found on ${componentName}, ${propName} must be between ${MIN} and ${MAX}`);
    }
}

const WeatherData = ({ data }) => {
    const {temperature, weatherState, humidity, wind} = data;
    return (
        <div className="weatherDataContainer">
            <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
            <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
        </div>
    );
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.oneOf(ValidValues).isRequired,
        humidity: rangeCheck,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherData;