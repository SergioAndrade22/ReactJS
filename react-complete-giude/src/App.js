import React, { Component } from 'react';
import People from './components/People/People';
import classes from './App.css';
import Cockpit from './components/Cockpit.js/Cockpit';

class App extends Component {
  state = {
    people: [{name: 'Josh',age: 29,id: 'asdf2316512'},
             {name: 'Mary',age: 23,id: 'asdf23165as'},
             {name: 'Eithan',age: 18,id: 'asdf23165f44'},],
    display: false,
    text: '',
    textLength: 0
  }

  togglePeople = (event) => {
    this.setState({
      display: !this.state.display
    });
  }

  deletePerson = (index) => {
    const people = [...this.state.people];
    people.splice(index, 1);
    this.setState({
      people
    });
  }

  onNameChange = (event, id) => {
    const personIndex = this.state.people.findIndex(p => p.id === id);
    const person = {...this.state.people[personIndex]};
    person.name = event.target.value;
    const people = [...this.state.people];
    people[personIndex] = person;
    this.setState({
      people
    });
  }

  render = () => {
    let people = null;
    if (this.state.display){
      people = <People people={this.state.people} clicked={this.deletePerson} changed={this.onNameChange}/>
    }
    return (
        <div className={classes.App}>
          <Cockpit toggle={this.togglePeople}/>
          {people}
        </div>
    );
  }
}

export default App;
