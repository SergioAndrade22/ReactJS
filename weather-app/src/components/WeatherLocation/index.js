import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import { getWeatherNow, transformWeather } from '../../services/apiWeather';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

class WeatherLocation extends Component{

    constructor( { city }) {
        super();
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.setNowData();
    }

    setNowData = () => {
        getWeatherNow(this.state.city).then(weatherData => {
            const data = transformWeather(weatherData);
            this.setState({ data });
        });
    }

    handleUpdateClick = () => {
        this.setNowData();
    };

    render = () => {
        const { onWeatherLocationClick } = this.props; 
        const {city, data} = this.state;
        return (
            <div className="weatherLocationContainer" onClick={onWeatherLocationClick}> 
                <Location city={city}/>
                {data ? <WeatherData data={data}/> : <CircularProgress />}
            </div>
        );
    };
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;