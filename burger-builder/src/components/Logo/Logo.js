import React from 'react';
import logo from '../../assets/img/28.1 burger-logo.png';
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="Buger Logo"/>
        </div>
    );
};

export default Logo;