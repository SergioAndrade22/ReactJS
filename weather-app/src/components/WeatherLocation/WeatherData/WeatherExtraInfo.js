import React from 'react';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
        <div className="weatherExtraInfoContainer">
            <span className="extraInfoText">{`Humidity: ${humidity} %`}</span>
            <span className="extraInfoText">{`Wind: ${wind}`}</span>
        </div>
    );
}

export default WeatherExtraInfo;