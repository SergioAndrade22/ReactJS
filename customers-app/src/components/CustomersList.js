import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({customers, baseURL}) => {
    return (
        <div className="customers-list">
            {
                customers.map( c => 
                    <CustomerListItem 
                        key={c.dni}
                        customer={c}
                        editAction={'Edit'}
                        delAction={'Delete'}
                        baseURL={baseURL}
                    />
                )
            }
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    baseURL: PropTypes.string.isRequired,
};

export default CustomersList;