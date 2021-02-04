import React from 'react';
import classes from './Controls.module.css';
import ButtonsPanel from './ButtonsPanel/ButtonsPanel';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
]

const Controls = () => {
    return (
        <div className={classes.Controls}>
            {controls.map(c => <ButtonsPanel key={c.label} label={c.label} />)}
        </div>
    );
};

export default Controls;