import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: ''
    };

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option;
        const error = this.props.handleAddOption(option.value.trim());
        error && this.setState(() => ( {error} ) );
        if (!error) {
            this.setState(() => ( {error: false} ) );
            option.value = "";
        }
    };

    render() {
        return (
            <div>
                {
                    this.state.error && <p className="add-option__error" style={{color: "red", border: "1px solid red", width: "fit-content", borderRadius: "5px", padding: "4px"}}>{this.state.error}</p>
                }
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button" type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}
