import React, { Component } from 'react';
import Auxiliar from '../Auxiliar/Auxiliar';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    hideDrawer = () => this.setState({showSideDrawer: false});

    toggleDrawer = () => this.setState((prevState) =>
        ({showSideDrawer: !prevState.showSideDrawer})
        );

    render = () => {
        return (
            <Auxiliar>
                <Toolbar toggleDrawer={this.toggleDrawer}/>
                <SideDrawer open={this.state.showSideDrawer} hide={this.hideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliar>
        );
    }
};

export default Layout;