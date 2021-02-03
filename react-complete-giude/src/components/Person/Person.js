import React from 'react';
import './Person.css';

const Person = ({name, age, children, nameChange, click}) => (
    <div className="Person">
        <p onClick={click} >I'm a {name} and I am {age} years old!</p>
        <p>{children}</p>
        <input type="text" onChange={nameChange} value={name}/>
    </div>
);

export default Person;