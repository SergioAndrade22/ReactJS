import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliar from '../Auxiliar/Auxiliar';

const withErrorHandling = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        constructor(props) {
            super(props);
            axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });
            axios.interceptors.response.use(response => response, error => {
                this.setState(error);
            });
        }

        exitModal = () => {
            this.setState({error: null});
        }

        render () {
            return (
                <Auxiliar>
                    <Modal show={this.state.error} exit={this.exitModal}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliar>
            )
        }
    }
}

export default withErrorHandling;