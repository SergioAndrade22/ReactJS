import {
    RAINY,
    CLOUDY,
    SUNNY,
    SNOWY,
    THUNDER,
    DRIZZLY,
} from '../constants/weathers';

const baseURL = '//api.openweathermap.org/data/2.5';
const currentWeather = '/weather';
const hourlyForecast = '/forecast';
const apiKey = 'b1827e0da926bd7cf8d378edf0afba7e';
const options = 'units=metric';

const getWeatherState = (weather) => {
    const { id } = weather;
    if (id < 300)
        return THUNDER;
    else if (id < 400)
        return DRIZZLY;
    else if (id < 600)
        return RAINY;
    else if (id < 700)
        return SNOWY;
    else if (id === 800)
        return SUNNY;
    else if (id < 900)
        return CLOUDY;
    else {
        return SUNNY;
    }
}

export const transformWeather = (weatherData) => {
    const {humidity, temp} = weatherData.main;
    return {
        humidity,
        temperature: Math.round(temp),
        wind: `${Math.round(weatherData.wind.speed * 3.6)} km/h`,
        weatherState: getWeatherState(weatherData.weather[0]),
    };
}

export const getWeatherNow = (city) => {
    const apiWeather = `${baseURL}${currentWeather}?q=${city}&${options}&appid=${apiKey}`;
    return fetch(apiWeather)
        .then( data => data.json())
        .catch( err => console.error(err));
}

export const getWeatherForecast = (city) => {
    const apiWeather = `${baseURL}${hourlyForecast}?q=${city}&${options}&appid=${apiKey}`;
    return fetch(apiWeather)
        .then(data => data.json())
        .catch( err => console.error(err));
}