import React from "react";
import Modal from "react-modal";

const OptionModal = ({selectedOption, clearSelection}) => (
    <Modal
        isOpen={!!selectedOption}
        contentLabel="Selected Option"
        onRequestClose={clearSelection}
        appElement={document.getElementById("app")}
        closeTimeoutMS={200}
        className="modal"
    >
        <h1 className="modal__title">Selected Option:</h1>
        {
            selectedOption 
            &&
            <p className="modal__body">{selectedOption}</p>
        }
        <button className="button" type="button" onClick={clearSelection}>OK</button>
    </Modal>
);

export default OptionModal;