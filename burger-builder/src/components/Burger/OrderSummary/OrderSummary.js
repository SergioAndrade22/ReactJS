import React, { Component } from 'react';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render = () => {
        const ingredientsSummary = Object.entries(this.props.ingredients).map(pair => 
            <li key={pair[0]}>
                <span style={{textTransform: 'capitalize'}}>{pair[0]}</span>: {pair[1]}
            </li>
        );
        return (
            <Auxiliar>
                <h3>Your order: <strong>${this.props.price.toFixed(2)}</strong></h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul style={{listStyle: 'none'}}>
                    {
                        ingredientsSummary
                    }
                </ul>
                <p>Continue to Checkout?</p>
                <Button type={'Danger'} click={this.props.exit}>CANCEL</Button>
                <Button type={'Success'} click={this.props.finish}>CONTINUE</Button>
            </Auxiliar>
        );
    }
};

export default OrderSummary;