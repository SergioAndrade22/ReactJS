import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'None'
  }

  updateUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render = () => {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <UserInput updateUsername={this.updateUsername} username={this.state.username}/>
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
