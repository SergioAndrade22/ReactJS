import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';

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
      people = (
        <div>
          {
            this.state.people.map((p, index) => 
              <Person click={() => this.deletePerson(index)} 
                      onChange={(event) => this.onNameChange(event, p.id)}
                      key={p.id} 
                      name={p.name} 
                      age={p.age}/>
            )
          }
        </div>
      );
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This really works!</p>
          <button onClick={this.togglePeople}>Display People!</button>
          {people}
        </div>
    );
  }
}

export default App;
