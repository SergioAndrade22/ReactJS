import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';
import { Prompt } from 'react-router-dom';

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);

const validate = values => {
    const error = {};

    if (!values.name){
        error.name = "El campo nombre es requerido"
    }

    if (!values.dni){
        error.dni = "El campo dni es requerido"
    }

    return error;
}

const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type} name={name}/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const toNumber = value => value && Number(value);

const toUpperCase = value => value && value.toUpperCase();

const toLowerCase = value => value && value.toLowerCase();

const onlyGrowth = (value, previousValue, values) => 
                        value &&
                        (!previousValue ? value :
                        (value > previousValue ? value : previousValue))

const CustomerEdit = ({customer, handleSubmit, submitting, onBack, pristine, submitSucceeded}) => {
    return (
        <div>
            <h2>Customer Profile edit</h2>
            <form onSubmit={handleSubmit} action="">
                <Field name="name"
                    component={MyField}
                    label="Nombre"
                    parse={toUpperCase}
                    format={toLowerCase} />
                <Field name="dni"
                    component={MyField}
                    validate={isNumber}
                    label="DNI" />
                <Field name="age"
                    component={MyField}
                    type="number"
                    validate={isNumber}
                    label="Edad"
                    parse={toNumber}
                    normalize={onlyGrowth} />
                <CustomersActions>
                    <button type="submit" disabled={submitting || pristine}>Confirmar Cambios</button>
                    <button type="button" onClick={onBack} disabled={submitting}>Cancelar</button>
                </CustomersActions>
                <Prompt when={!pristine && !submitSucceeded} message="Cancelar Cambios?"></Prompt>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    customer: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({
    form: 'CustomerEdit',
    validate
})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);