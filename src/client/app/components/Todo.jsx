import React from 'react';
import TodoItemList from './TodoItemList.jsx';
import TodoFooter from './TodoFooter.jsx';
import TodoItemInput from './TodoItemInput.jsx';
import TodoModel from '../model/Todo.model.jsx';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: props.todos,
            filter: TodoModel.STATUS_ALL
        };
    }

    onSubmit = (value) => {
        let todos = this.state.todos.slice();

        todos.push({
            name: value,
            status: TodoModel.STATUS_ACTIVE
        });

        this.setState({
            todos: todos
        });
    };

    onItemStateChange = (index) => {
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
    };

    onItemDelete = (index) => {
        this.setState({
            todos: this.state.todos.filter((item, i) => {
                return index !== i;
            })
        });
    };

    onFilterChange = (filter) => {
        this.setState({
            filter: filter
        });
    };

    getActiveTodosCount = () => {
        return this.state.todos.reduce((prevVal, item) => {
            return prevVal += item.status === TodoModel.STATUS_ACTIVE ? 1 : 0;
        }, 0);
    };

    render() {
        return (
            <section className="todoapp">
                <TodoItemInput onSubmit={this.onSubmit}/>
                <TodoItemList
                    onItemStateChange={this.onItemStateChange}
                    onItemDelete={this.onItemDelete}
                    todos={this.state.todos}
                    filter={this.state.filter}
                />
                <TodoFooter
                    onFilterChange={this.onFilterChange}
                    todosCount={this.getActiveTodosCount()}
                    filter={this.state.filter}
                />
            </section>
        );
    }
}

export default Todo;
