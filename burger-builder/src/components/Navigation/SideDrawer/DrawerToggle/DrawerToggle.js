import React from 'react';
import classes from './DrawerToggle.module.css';

const DrawerToggle = ({toggleDrawer}) => {
    return (
        <div className={classes.DrawerToggle} onClick={toggleDrawer}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default DrawerToggle;