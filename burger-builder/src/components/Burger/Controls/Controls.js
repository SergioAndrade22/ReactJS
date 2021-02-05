import React from 'react';
import classes from './Controls.module.css';
import ButtonsPanel from './ButtonsPanel/ButtonsPanel';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
]

const Controls = ({price, more, less, checkout, disabledButtons, canBuy}) => {
    return (
        <div className={classes.Controls}>
            <p>Current Price: <strong>${price.toFixed(2)}</strong></p>
            {
                controls.map(c => 
                    <ButtonsPanel key={c.label} 
                                  label={c.label} 
                                  more={() => more(c.type)} 
                                  less={() => less(c.type)}
                                  disabledButton={disabledButtons[c.type]}/>
                )
            }
            <button disabled={!canBuy} 
                    className={classes.BuyButton}
                    onClick={checkout}
                >
                ORDER NOW!
            </button>
        </div>
    );
};

export default Controls;