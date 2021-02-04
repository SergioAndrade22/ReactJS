import React from 'react';

const Person = ({name, age, children, onChange, click}) => {
    return (
        <div>
            <p onClick={click}>I'm a {name} and I am {age} years old!</p>
            <input onChange={onChange} value={name} type="text"/>
            <p>{children}</p>
        </div>
    );
}

export default Person;