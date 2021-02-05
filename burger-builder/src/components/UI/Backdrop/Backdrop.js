import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = ({show, exit}) => {
    return (
        show ? <div onClick={exit} className={classes.Backdrop}></div> : null
    );
};

export default Backdrop;