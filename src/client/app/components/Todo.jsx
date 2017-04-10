import React from 'react';
import TodoItemList from './TodoItemList.jsx';
import TodoItemInput from './TodoItemInput.jsx';
import TodoModel from '../model/Todo.model.jsx';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: props.todos
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onItemDelete = this.onItemDelete.bind(this);
        this.onItemStateChange = this.onItemStateChange.bind(this);
    }

    onSubmit(value) {
        let todos = this.state.todos.slice();

        todos.push({
            name: value,
            status: TodoModel.STATUS_ACTIVE
        });

        this.setState({
            todos: todos
        });
    }

    onItemStateChange(index) {
        let todos = this.state.todos.slice();
        let currentItem = todos[index];

        if (currentItem.status === TodoModel.STATUS_COMPLETED) {
            currentItem.status = TodoModel.STATUS_ACTIVE;
        } else {
            currentItem.status = TodoModel.STATUS_COMPLETED;
        }

        this.setState({
            todos: todos
        });
    }

    onItemDelete(index) {
        this.setState({
            todos: this.state.todos.filter((item, i) => {return index !== i})
        });
    }

    render() {
        return (
            <div className='todo-wrapper'>
                <TodoItemInput onSubmit={this.onSubmit} />
                <TodoItemList
                    onItemStateChange={this.onItemStateChange}
                    onItemDelete={this.onItemDelete}
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

export default Todo;
