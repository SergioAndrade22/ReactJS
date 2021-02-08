import React, { Component } from 'react';
import axiosOrders from '../../axios-orders';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spiner from '../../components/UI/Spiner/Spiner';
import withErrorHandling from '../../hoc/withErrorHandling/withErrorHandling';

const INGREDIENT_PRICES = {
    salad: 0.3,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.9
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 0.5,
        canBuy: false,
        checkout: false,
        loading: false
    }
    
    componentDidMount = () => {
        axiosOrders.get('https://burger-builder-2f7ae-default-rtdb.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
            })
            .catch(error => {});
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

    finishCheckout = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Dummy name',
                address: {
                    street: 'Test Street',
                    zipCode: '8441',
                    country: 'Argelia'
                },
                email: 'test@test.com'
            },
            delivery: false
        }
        axiosOrders.post('/orders.json', order)
            .then(response => this.setState({loading: false, checkout: false}))
            .catch(error => this.setState({loading: false, checkout: false}));
    };

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] === 0;
        }

        let modalContent = null;
        if (this.state.loading){
            modalContent = <Spiner />;
        }
        if (!this.state.loading && this.state.ingredients){
            modalContent = <OrderSummary finish={this.finishCheckout} 
                                exit={this.cancelCheckout} 
                                price={this.state.totalPrice} 
                                ingredients={this.state.ingredients} />;
        }

        let burger = <Spiner />
        if(this.state.ingredients){
            burger = (
                <Auxiliar>
                    <Burger ingredients={this.state.ingredients} />
                <Controls 
                    price={this.state.totalPrice}
                    more={this.addIngredient} 
                    less={this.removeIngredient}
                    checkout={this.checkout}
                    disabledButtons={disableInfo}
                    canBuy={this.state.canBuy}/>
                </Auxiliar>
            )
        }
        return (
            <Auxiliar>
                <Modal show={this.state.checkout} exitModal={this.cancelCheckout}>
                    {modalContent}
                </Modal>
                {burger}
            </Auxiliar>
        );
    }
}

export default withErrorHandling(BurgerBuilder, axiosOrders);