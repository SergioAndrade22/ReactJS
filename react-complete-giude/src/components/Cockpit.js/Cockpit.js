import React from 'react';
import classes from './Cockpit.css';

const Cockpit = ({toggle}) => {
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.Paragraph}>This really works!</p>
            <button onClick={toggle}>Display People!</button>
        </div>
    );
};

export default Cockpit;