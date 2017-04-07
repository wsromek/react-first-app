import React from 'react';
import TodoItem from './TodoItem.jsx';
import TodoModel from '../model/Todo.model.jsx';

class TodoItemList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: TodoModel.STATUS_ALL
        };

        this.filter = this.filter.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.changeItemState = this.changeItemState.bind(this);
    }

    changeItemState(index) {
        this.props.onItemStateChange(index);
    }

    removeItem(index) {
        this.props.onItemDelete(index);
    }

    filter(state) {
        this.setState({
            filter: state
        });
    }

    render() {
        let filter = this.state.filter;

        const changeItemState = this.changeItemState;
        const removeItem = this.removeItem;

        return (
            <div className='todo-item-list-wrapper'>
                <div className='todo-item-list'>
                    {this.props.todos.map(function (todoItem, index) {
                        if (filter === TodoModel.STATUS_ALL || filter === todoItem.status) {
                            return <div key={index}>
                                <input type="checkbox" onClick={() => changeItemState(index)} />
                                <TodoItem item={todoItem} />
                                <button onClick={() => removeItem(index)}>X</button>
                            </div>;
                        }
                    })}
                </div>
                <button onClick={() => this.filter(TodoModel.STATUS_ALL)}>Show All</button>
                <button onClick={() => this.filter(TodoModel.STATUS_COMPLETED)}>Show Completed</button>
                <button onClick={() => this.filter(TodoModel.STATUS_ACTIVE)}>Show Active</button>
            </div>
        );
    }
}

export default TodoItemList;
