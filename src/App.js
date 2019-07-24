import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      {
        id: 'dhqshdh2',
        name: 'Jack',
        age: 25
      },
      {
        id: '31jpej3p',
        name: 'Anna',
        age: 23
      },
      {
        id: 'rn23in2',
        name: 'Jackie',
        age: 20
      }
    ]
  }



  nameChangedHandler = (event, personId) => {

    const personIndex = this.state.persons.findIndex(pers => pers.id === personId)
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // we use the .slice() function to copy the persons array from the state to the local persons const
    // otherwise, if we'd just assign this.state.persons to the const, it would only hold a pointer to it
    // and it would work but it's bad practice to change the data directly from the state and not using a copy
    // const persons = this.state.persons.slice()
    // or get a copy with the spread operator
    const persons = [...this.state.persons]

    persons.splice(personIndex, 1)

    this.setState({
      persons: persons
    })
  }


  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid white',
      padding: '8 px',
      cursor: 'pointer',
      // from the Radium package
      // :hover is a pseudo selector (something like button:hover)
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => <Person name={person.name}
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />)}
        </div>
      )
      style.backgroundColor = 'red'
  

      // // from the Radium package
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red') // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold ') // classes = ['red', 'bold']
    }

    return (
      // we wrap all the app into the StyleRoot component for the Radium package to manipulate media queries 
      // (in the Person component) - if we use Radium localy - here it's erased because we start using scoped css components
        <div className="App">
          <h1>Hi</h1>
          <p className={classes.join(' ')}>How many persons there are</p>
          {/* 2 methods to pass data as param to the method (cica ii mai bine cu bind) */}
          {/* sau asa cu anon. arrow function care returneaza apelul functiei cu param */}
          <button onClick={this.togglePersonHandler}
            style={style}>Toggle persons</button>
          {persons}
        </div>
      
    )
  }
}

export default App
