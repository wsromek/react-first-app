import React from 'react';
import TodoItemList from "./TodoItemList.jsx";
import TodoItemInput from "./TodoItemInput.jsx";

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: props.todos || (() => {
                return [1,2,3,4,5,6,7,8].map((number) => {
                    return `TodoItem ${number}`;
                })
            })()
        };

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(value) {
        var todos = this.state.todos.slice();

        todos.push(value);

        this.setState({
            todos: todos
        })
    }

    render() {
        return (
            <div className="todo-wrapper">
                <TodoItemInput onSubmit={this.onSubmit} />
                <TodoItemList todos={this.state.todos} />
            </div>
        );
    }

}

export default Todo;
