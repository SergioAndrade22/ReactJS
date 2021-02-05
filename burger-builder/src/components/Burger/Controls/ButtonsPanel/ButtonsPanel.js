import React from 'react';
import classes from './ButtonsPanel.module.css';

const ButtonsPanel = ({label, more, less, disabledButton}) => {
    return (
        <div className={classes.ButtonsPanel}>
            <div className={classes.Label}>{label}</div>
            <button disabled={disabledButton} 
                    className={classes.Less} 
                    onClick={less}
                >
                Less
            </button>
            <button className={classes.More} 
                    onClick={more}
                >
                More
            </button>
        </div>
    );
};

export default ButtonsPanel;