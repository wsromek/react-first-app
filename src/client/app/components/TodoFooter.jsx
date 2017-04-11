import React from 'react';
import TodoModel from '../model/Todo.model.jsx';

class TodoFooter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: TodoModel.STATUS_ALL
        };
    }

    filter = (state) => {
        this.props.onFilterChange(state);
    };

    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{this.props.todosCount}</strong> left</span>
                <ul className='filters'>
                    <li>
                        <a className="todo-show-all" onClick={() => this.filter(TodoModel.STATUS_ALL)}>All</a>
                    </li>
                    <li>
                        <a className="todo-show-completed" onClick={() => this.filter(TodoModel.STATUS_COMPLETED)}>Completed</a>
                    </li>
                    <li>
                        <a className="todo-show-active" onClick={() => this.filter(TodoModel.STATUS_ACTIVE)}>Active</a>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default TodoFooter;
