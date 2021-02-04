import React from 'react';
import classes from './ButtonsPanel.module.css';

const ButtonsPanel = ({label}) => {
    return (
        <div className={classes.ButtonsPanel}>
            <div className={classes.Label}>{label}</div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>
    );
};

export default ButtonsPanel;