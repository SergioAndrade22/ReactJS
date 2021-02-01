import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({ customer }) => {
    return (
        <div>
            <div className="customer-data">
                <h2 className="customer-title">
                    Client Data:
                </h2>
                    <div>
                        <strong>Nombre: </strong><i>{customer.name}</i>
                    </div>
                    <div>
                        <strong>DNI: </strong><i>{customer.dni}</i>
                    </div>
                    <div>
                        <strong>Edad: </strong><i>{customer.age}</i>
                    </div>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    customer: PropTypes.object.isRequired,
};

export default CustomerData;