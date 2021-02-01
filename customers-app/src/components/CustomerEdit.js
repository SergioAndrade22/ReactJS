import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

const CustomerEdit = ({customer}) => {
    return (
        <div>
            <h2>Customer Profile edit</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <Field name="name" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="dni">DNI:</label>
                    <Field name="dni" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="age">Edad:</label>
                    <Field name="age" component="input" type="number"></Field>
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    customer: PropTypes.object,
};

const CustomerEditForm = reduxForm({form: 'CustomerEdit'})(CustomerEdit);

const mapStateToProps = (state, props) => ({initialValues: props.customer});

export default connect(mapStateToProps, null)(CustomerEditForm);