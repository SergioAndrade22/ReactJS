import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItems = (forecastData) => {
    return forecastData.map(dayData => (<ForecastItem weekDay={dayData.day} hour={dayData.hour} key={dayData.day + dayData.hour} data={dayData.data}/>));        
}

const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className="forecastTitle">
            Extended Forecast for: {city}
        </h2>
        {forecastData ? renderForecastItems(forecastData) : <CircularProgress/>}
    </div>
)

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;