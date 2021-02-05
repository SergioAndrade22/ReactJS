import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.3,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.9
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0.5,
        canBuy: false,
        checkout: false
    }
    
    addIngredient = (type) => {
        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[type] = this.state.ingredients[type] + 1;
        this.setState({
            ingredients: newIngredients,
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
        })
        this.updateCanBuy(newIngredients);
    }
    
    removeIngredient = (type) => {
        if (this.state.ingredients[type] > 0){
            const newIngredients = {
                ...this.state.ingredients
            };
            newIngredients[type] = this.state.ingredients[type] - 1;
            this.setState({
                ingredients: newIngredients,
                totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
            });
            this.updateCanBuy(newIngredients);
        }
    }
    
    updateCanBuy = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map( key$ => ingredients[key$])
            .reduce((sum, el) => sum + el, 0);
        this.setState({
            canBuy: sum > 0
        });
    }

    checkout = () => (this.setState({checkout: true}));

    cancelCheckout = () => (this.setState({checkout: false}));

    finishCheckout = () => (alert('You fool!'));

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] === 0;
        }
        return (
            <Auxiliar>
                <Modal show={this.state.checkout} exitModal={this.cancelCheckout}>
                    <OrderSummary finish={this.finishCheckout} 
                                  exit={this.cancelCheckout} 
                                  price={this.state.totalPrice} 
                                  ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <Controls 
                    price={this.state.totalPrice}
                    more={this.addIngredient} 
                    less={this.removeIngredient}
                    checkout={this.checkout}
                    disabledButtons={disableInfo}
                    canBuy={this.state.canBuy}/>
            </Auxiliar>
        );
    }
}

export default BurgerBuilder;