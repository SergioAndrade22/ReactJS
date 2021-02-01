import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomerListItem = ({customer, editAction, delAction, baseURL}) => {
    return (
        <div>
            <div className="customers-list-item">
                <div className="field">
                    <Link to={`${baseURL}${customer.dni}`}>{customer.name}</Link>
                </div>
                <div className="field">
                    <Link to={`${baseURL}${customer.dni}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${baseURL}${customer.dni}/del`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    customer: PropTypes.object.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    baseURL: PropTypes.string.isRequired,
};

export default CustomerListItem;