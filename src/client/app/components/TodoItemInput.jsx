import React from 'react';

class TodoItemInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };

        this.updateInputValue = this.updateInputValue.bind(this);
        this.onTodoSubmit = this.onTodoSubmit.bind(this);
    }

    updateInputValue(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    onTodoSubmit() {
        this.props.onSubmit(this.state.inputValue);
    }

    render() {
        return (
            <div className="todo-submit-wrapper">
                <input id="todo-submit-input"
                       type="text"
                       value={this.props.value}
                       onChange={this.updateInputValue}
                />
                <button id="todo-submit"
                        onClick={this.onTodoSubmit}
                >Submit</button>
            </div>
        );
    }
}

export default TodoItemInput;
