import React from 'react';
import TodoItem from './TodoItem.jsx';
import TodoModel from '../model/Todo.model.jsx';

class TodoItemList extends React.Component {
    changeItemState = (index) => {
        this.props.onItemStateChange(index);
    };

    removeItem = (index) => {
        this.props.onItemDelete(index);
    };

    render() {
        let filter = this.props.filter || TodoModel.STATUS_ALL;

        const changeItemState = this.changeItemState;
        const removeItem = this.removeItem;

        return (
            <section className="main">
                <ul className='todo-list'>
                    {this.props.todos.map(function (todoItem, index) {
                        if (filter === TodoModel.STATUS_ALL || filter === todoItem.status) {
                            return <li key={index} className={todoItem.status}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" onChange={() => changeItemState(index)} checked={todoItem.status === TodoModel.STATUS_COMPLETED} />
                                    <TodoItem item={todoItem}/>
                                    <button className="destroy" onClick={() => removeItem(index)}/>
                                </div>
                            </li>;
                        }
                    })}
                </ul>
            </section>
        );
    }
}

export default TodoItemList;
