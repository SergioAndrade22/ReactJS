import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForecastExtended from '../ForecastExtended/ForecastExtended';
import { getForecastDataFromCity, getCity } from '../../reducers'
import './styles.css';

class ForecastExtendedContainer extends Component {
    render = () => {
        const {city, forecastData} = this.props;
        return (
            <div className="detail">
                {city && <ForecastExtended city={city} forecastData={forecastData}/>}
            </div>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

const mapStateToProps = (state) => ({ city: getCity(state), forecastData: getForecastDataFromCity(state)});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);