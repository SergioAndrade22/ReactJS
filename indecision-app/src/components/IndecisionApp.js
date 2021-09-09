import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import OptionModal from './OptionModal';
import OptionsContainer from './OptionsContainer';

export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    };

    arrayEquals(arr1, arr2) {
        let i = 0;
        let equals = arr1.length === arr2.length;
        while (i < arr1.length && equals) {
            equals = arr2.includes(arr1[i]);
            i++;
        }
        return equals;
    };

    componentDidMount = () => {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            if (options)
                this.setState(() => ( {options} ) );
        } catch (e) {
            console.error("Failed to fetch data", e.message);
        }
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (!this.arrayEquals(prevState.options, this.state.options)) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };

    componentWillUnmount = () => {
        console.log("Component Will Unmount");
    };

    handleSingleDelete = (toDel) => {
        this.setState((prevState) => ({ options: prevState.options.filter(option => option != toDel) }));
    };

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };
    
    handlePick = () => {
        const chosen = this.state.options[Math.floor(Math.random() * this.state.options.length)];

        this.setState(() => ({selectedOption: chosen}));
    };

    handleAddOption = (newOption) => {
        if (!newOption) {
            return "Please enter a valid option to add";
        } else if (this.state.options.includes(newOption)) {
            return "This options is already included";
        } else {
            this.setState((prevState) => ({options: [...prevState.options, newOption]}));
        }
    };

    clearSelection = () => this.setState(() => ({selectedOption: undefined}));

    render() {
        const subtitle = "Put your life in the nads of a computer";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action
                        handlePick={this.handlePick}
                        hasOptions={this.state.options.length > 0}
                    />
                    <div className="widget">
                        <OptionsContainer 
                            handleDeleteOptions={this.handleDeleteOptions} 
                            options={this.state.options}
                            handleSingleDelete={this.handleSingleDelete}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} clearSelection={this.clearSelection}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};
