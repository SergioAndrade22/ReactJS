import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import { getWeatherForecast, transformWeather } from '../../services/apiWeather';
import ForecastItem from './ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null,
            loading: false
        };
    }

    renderForecastItemDays = () => {
        const { forecastData } = this.state;
        return forecastData.map(dayData => (<ForecastItem weekDay={dayData.day} hour={dayData.hour} key={dayData.day + dayData.hour} data={dayData.data}/>));        
    }

    makeForecastRequest = (city) => {
        getWeatherForecast(city).then(weatherData => {
            const forecastData = [];
            for (let timestamp of weatherData.list){
                const dayString = new Date(timestamp.dt_txt).toString().split(' G')[0];
                const {day, hour} = this.getDatHour(dayString);
                const data = transformWeather(timestamp);
                const forecastItemData = {
                    day,
                    hour,
                    data
                }
                forecastData.push(forecastItemData);
            }
            this.setState({ forecastData });
        });
    }

    getFullDay = (day) => {
        switch (day) {
            case 'Sun':
                return 'Sunday';
            case 'Mon':
                return 'Monday';
            case 'Tue':
                return 'Tuesday';
            case 'Wed':
                return 'Wednesday';
            case 'Thu':
                return 'Thursday';
            case 'Fri':
                return 'Friday';
            case 'Sat':
                return 'Saturday';        
            default:
                break;
        }
    }

    getDatHour = (dayString) => {
        let day = '';
        let hour = '';
        const aux = dayString.split(' ');
        day += this.getFullDay(aux[0]);
        day += ' ' + aux[1] + '/' + aux[2] + '/' + aux[3];
        hour = aux[4].slice(0, 5);
        return {day, hour};

    }

    componentDidMount = () => {
        this.makeForecastRequest(this.props.city);
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.city !== this.state.city) {
          this.setState({forecastData: null});
          this.makeForecastRequest(this.state.city);
        }
      }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.city !== prevState.city){
            return {
                city : nextProps.city
            };
        } else {
            return null;
        }
    }

    render = () => {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecastTitle">
                    Extended Forecast for: {city}
                </h2>
                {forecastData ? this.renderForecastItemDays() : <CircularProgress/>}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;