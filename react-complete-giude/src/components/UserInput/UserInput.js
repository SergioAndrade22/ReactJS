import React from 'react';
import './UserInput.css';

const UserInput = ({username, updateUsername}) => {
    return (
        <div className="UserInput">
            <input className="UserInput--input" type="text" onChange={updateUsername} value={username} />
        </div>
    );
};

export default UserInput;