import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Auxiliar>
                <Burger ingredients={this.state.ingredients} />
                <Controls />
            </Auxiliar>
        );
    }
}

export default BurgerBuilder;