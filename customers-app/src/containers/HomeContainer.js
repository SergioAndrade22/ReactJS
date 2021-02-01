import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';
import { withRouter } from 'react-router-dom';

class HomeContainer extends Component {
    handleClick = () => {
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame header='Home' body={
                        <div>
                            Pantalla inicial
                            <CustomersActions>
                                <button onClick={this.handleClick}>
                                    Listado de Clientes
                                </button>
                            </CustomersActions>
                        </div>    
                    }></AppFrame>
            </div>
        );
    }
}

// se agrega el decorador withRouter para siempre tener acceso a this.props.history
export default withRouter(HomeContainer);