import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/'>
                Home
            </NavigationItem>
            <NavigationItem link='/' active>
                Burger Builder
            </NavigationItem>
            <NavigationItem link='/'>
                About
            </NavigationItem>
        </ul>
    );
};

export default NavigationItems;