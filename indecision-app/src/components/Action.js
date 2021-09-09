import React from 'react';

const Action = ({handlePick, hasOptions}) => ( 
    <div>
        <button 
            onClick={handlePick} 
            type="button"
            disabled={!hasOptions}
            className="button button--big"
        >
            What should I do?
        </button>
    </div>
);

export default Action;
