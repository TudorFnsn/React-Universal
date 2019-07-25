import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = []
    let btnClass = ''

    if (props.showPerson) {
        btnClass = classes.Red

    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red) // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold) // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi</h1>
            <p className={assignedClasses.join(' ')}>How many persons there are</p>
            <button onClick={props.clicked}
                className={btnClass}
            >Toggle persons</button>
        </div>
    )

}

export default cockpit