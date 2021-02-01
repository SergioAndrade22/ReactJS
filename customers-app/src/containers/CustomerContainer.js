import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomberByDni } from '../selectors/customers';
import { Route } from 'react-router-dom';
import CustomerEdit from '../components/CustomerEdit'
import CustomerData from '../components/CustomerData'

class CustomerContainer extends Component {
    renderBody = () => {
        return (
            <Route path='/customers/:dni/edit' children={
                ({match}) => {
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl customer={this.props.customer} /> }
            }></Route>
        );
    }

    render() {
        return (
            <div>
                <AppFrame header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()}></AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomberByDni(state, props)
});

export default connect(mapStateToProps, null)(CustomerContainer);