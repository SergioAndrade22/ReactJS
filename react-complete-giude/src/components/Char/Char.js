import React from 'react';

const Char = ({char, click}) => {
    const style = {
        display: 'inline-block',
        padding: '1rem',
        textAlign: 'center',
        margin: '1rem',
        border: '1px solid black'
    }

    return (
        <p style={style} onClick={click}>{char}</p>
    );
};

export default Char;