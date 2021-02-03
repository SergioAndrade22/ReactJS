import React from 'react';
import './UserOutput.css';

const UserOutput = ({username}) => {
    const styles = {
        width: 'fit-content',
        margin: '.4rem auto',
        padding: '.2rem',
        border: '.3rem dashed #cfc'
    }
    
    return (
        <div className="UserOutput">
            <p style={styles}>My username is: {username}</p>
            <p style={styles}>Some Default Text</p>
            <p style={styles}>Gotta fulfill the task</p>
        </div>
    );
};

export default UserOutput;