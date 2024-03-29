import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomberByDni } from '../selectors/customers';
import { Route, withRouter } from 'react-router-dom';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import { fetchCustomers } from '../actions/fetchCustomers';
import { updateCustomer } from '../actions/updateCustomer';

class CustomerContainer extends Component {
    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers();
        }
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));
        const { id } = values
        return this.props.updateCustomer(id, values);
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return (
            <Route path='/customers/:dni/edit' children={
                ({match}) => {
                    if (this.props.customer){
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl customer={this.props.customer} 
                                            onSubmit={this.handleSubmit}
                                            onSubmitSuccess={this.handleOnSubmitSuccess}
                                            onBack={this.handleOnBack} /> 
                    }
                    return null;
                }                   
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
    customer: PropTypes.object,
    updateCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomberByDni(state, props),
    updateCustomer: updateCustomer
});



export default withRouter(connect(mapStateToProps, {fetchCustomers})(CustomerContainer));