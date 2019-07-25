import React from 'react'
import classes from './Person.css'


const person = (props) => {
   
    return(
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {/* children refers to any elements between the opening and closing tags of component (when we call Person) */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} 
                               value={props.name}/>
        </div>
    ) 
}

export default person