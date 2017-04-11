import React from 'react';

const ENTER_KEY = 13;

class TodoItemInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: props.value || ''
        };
    }

    updateInputValue = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    checkIfEnter = (event) => {
        if (event.keyCode === ENTER_KEY) {
            this.props.onSubmit(this.state.inputValue);
        }
    };

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo"
                       placeholder="What needs to be done?"
                       type="text"
                       value={this.props.value}
                       onChange={this.updateInputValue}
                       onKeyUp={this.checkIfEnter}
                />
            </header>
        );
    }
}

export default TodoItemInput;
