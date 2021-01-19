import React from 'react';
import PropTypes from 'prop-types';
import WeatherData, { rangeCheck } from '../../WeatherLocation/WeatherData';
import { ValidValues } from '../../../constants/weathers';
import './styles.css';

const ForecastItem =({ weekDay, hour, data }) => {

    return (
        <div className="forecastItemContainer">
            <h1 className="forecastItemTitle">
                {weekDay} @ {hour}
            </h1>
            <div>
                <WeatherData data={data}/>
            </div>
        </div>
    )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.oneOf(ValidValues).isRequired,
        humidity: rangeCheck,
        wind: PropTypes.string.isRequired,
    }),
}

export default ForecastItem;