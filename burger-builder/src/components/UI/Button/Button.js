import React from 'react';
import classes from './Button.module.css';

const Button = ({children, click, type}) => {
    return (
        <button className={[classes.Button, classes[type]].join(' ')} 
                onClick={click}>
            {children}
        </button>
    );
};

export default Button;