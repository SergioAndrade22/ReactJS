import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from '../LocationListComponent/LocationList';
import { setSelectedCity, setWeather }  from '../../actions';
import { getWeatherCities, getCity } from '../../reducers';


class LocationListContainer extends Component {
    componentDidMount() {
        const { setWeather, cities, setSelectedCity, city } = this.props;
        setWeather(cities);
        if (city !== '')
            setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    }

    render = () => {
        return (
            <LocationList cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectedLocation}/>
        )
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.arrayOf(PropTypes.string).isRequired,
    city: PropTypes.string,
    citiesWeather: PropTypes.array,
}

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state),
});

// Alternative using Redux bindActionCreators
// import * as actions from '../../actions';
// import { bindActionCreators } from 'redux';
// const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapDispatchToProps = dispatch => (
    { 
        setSelectedCity: value => dispatch(setSelectedCity(value)),
        setWeather: cities => dispatch(setWeather(cities)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);