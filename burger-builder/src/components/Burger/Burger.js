import React from 'react';
import classes from './Burger.module.css';
import Ingredient from './Ingerdient/Ingredient';

const Burger = ({ingredients}) => {
    let parsedIngredients = Object.keys(ingredients).map(key$ => 
            [...Array(ingredients[key$])].map( (_, index) =>
                <Ingredient key={key$ + index} type={key$} />
            )
        ).reduce((arr, el) => arr.concat(el), []);
    if (parsedIngredients.length === 0){
        parsedIngredients = <p>Please start adding some ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <Ingredient type='bread-top' />
            {parsedIngredients}
            <Ingredient type='bread-bottom' />
        </div>
    );
};

export default Burger;