import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { withRouter } from 'react-router-dom';
import { apiPostCustomer } from '../api';

class NewCustomerContainer extends Component {
    handleSubmit = (values) => {
        return this.props.apiPostCustomer(values);
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerEdit onSubmit={this.handleSubmit}
                        onSubmitSuccess={this.handleOnSubmitSuccess}
                        onBack={this.handleBack}></CustomerEdit>
    }

    render() {
        return (
            <div>
                <AppFrame header={`Creación de cliente`}
                        body={this.renderBody()}></AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    apiPostCustomer: PropTypes.func.isRequired,
};

export default withRouter(connect(null, {apiPostCustomer})(NewCustomerContainer));