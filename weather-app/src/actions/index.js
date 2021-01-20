import { getWeatherForecast, getWeatherNow, transformWeather } from '../services/apiWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER = 'SET_WEATHER';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = (payload) => {
    return { 
        type: SET_CITY,
        payload,
    }
}

const setForecastData = (payload) => {
    return {
        type: SET_FORECAST_DATA,
        payload,
    }
}

const getFullDay = (day) => {
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

const getDayHour = (dayString) => {
    let day = '';
    let hour = '';
    const aux = dayString.split(' ');
    day += getFullDay(aux[0]);
    day += ' ' + aux[1] + '/' + aux[2] + '/' + aux[3];
    hour = aux[4].slice(0, 5);
    return {day, hour};
}

export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        dispatch(setCity(payload));

        const state = getState();
        const lastDate = state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();

        if (lastDate && (now - lastDate) < 1 * 60 * 1000) {
            return;
        }

        return getWeatherForecast(payload).then(weatherData => {
            const forecastData = [];
            for (let timestamp of weatherData.list){
                const dayString = new Date(timestamp.dt_txt).toString().split(' G')[0];
                const {day, hour} = getDayHour(dayString);
                const data = transformWeather(timestamp);
                const forecastItemData = {
                    day,
                    hour,
                    data
                }
                forecastData.push(forecastItemData);
            }
            dispatch(setForecastData({city: payload, forecastData}));
        });
    };
};

const getWeatherCity = payload => (
    {
        type: GET_WEATHER_CITY, 
        payload,
    }
);

const setWeatherCity = payload => (
    {
        type: SET_WEATHER_CITY,
        payload,
    }
);


export const setWeather = payload => {
    return dispatch => {
        payload.forEach ( city => {
            dispatch(getWeatherCity(city));

            getWeatherNow(city).then(weatherData => {
                const weather = transformWeather(weatherData);

                dispatch(setWeatherCity({city, weather}));
            });
        });
    };
};