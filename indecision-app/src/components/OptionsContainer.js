import React from "react";
import Option from './Option';

const OptionsContainer = ({handleDeleteOptions, handleSingleDelete, options}) => (
    <div id="options-container">
        <div className="widget__header">
            <h3 className="widget__title">Your Options:</h3>
            <button
                className="button button--link"
                onClick={handleDeleteOptions}
            >
                Remove All!
            </button>
        </div>
        {
            options.length > 0 ?
            options.map((option, key) => (
                <div className="option" key={key}>
                    <p className="option__text">{key+"."} <Option value={option} /></p>                    
                    <button className="button button--link" onClick={() => handleSingleDelete(option)} type="button">Remove</button>
                </div>
                )
            ) :
            <p className="widget__message">Provide options to start operations</p>
        }
    </div>
);

export default OptionsContainer;
