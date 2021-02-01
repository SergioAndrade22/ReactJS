import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={HomeContainer}/>
          <Route exact path='/customers' component={CustomersContainer}/>
          <Switch>
            {/* <Route path='/customers/new' component={}/> */}
            <Route path='/customers/:dni' render={props => <CustomerContainer {...props} dni={props.match.params.dni}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
