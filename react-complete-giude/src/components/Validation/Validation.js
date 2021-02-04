import React from 'react';

const Validation = ({textLength}) => {
    const textValue = textLength > 5 ? 'That\'ll do!' : 'Too short!';
    return (
        <div>
            <p>{textValue}</p>        
        </div>
    );
};

export default Validation;