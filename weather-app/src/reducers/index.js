import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { cityReducer } from './city';
import { citiesReducer, getForecastDataFromCity as _getForecastDataFromCity, getWeatherCities as _getWeatherCities } from './cities';

export default combineReducers({
    city: cityReducer,
    cities: citiesReducer,
});

export const getCity = createSelector(state => (state.city), city => city);

export const getForecastDataFromCity = createSelector(state => state.cities, getCity, _getForecastDataFromCity);

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);