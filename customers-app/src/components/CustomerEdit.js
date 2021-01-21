import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({customer}) => {
    return (
        <div>
            <h2>Customer Profile edit</h2>
            <h3>Name: {customer.name} / DNI: {customer.dni} / AGE:{customer?.age}</h3>
        </div>
    );
};

CustomerEdit.propTypes = {
    customer: PropTypes.object,
};

export default CustomerEdit;