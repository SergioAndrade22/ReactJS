import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import classes from './App.module.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render = () => {
    return (
      <div className={classes.App}>
        <Layout>
          <BurgerBuilder />  
        </Layout>
      </div>
    );
  }
}

export default App;
