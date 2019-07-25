import React, { Component } from 'react';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
                 persons={this.state.persons} 
                 clicked={this.togglePersonHandler}/>
        {persons}
      </div>


    )
  }
}

export default App
