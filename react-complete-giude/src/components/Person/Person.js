import React from 'react';
import classes from './Person.css';

const Person = ({name, age, children, onChange, click}) => {
    return (
        <div className={classes.Person}>
            <p onClick={click}>I'm a {name} and I am {age} years old!</p>
            <input onChange={onChange} value={name} type="text"/>
            <p>{children}</p>
        </div>
    );
}

export default Person;