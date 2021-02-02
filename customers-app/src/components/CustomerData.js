import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ({ customer, onBack }) => {
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
                    <CustomersActions>
                        <button onClick={onBack}>Volver</button>
                    </CustomersActions>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    customer: PropTypes.object,
    onBack: PropTypes.func.isRequired,
};

export default CustomerData;