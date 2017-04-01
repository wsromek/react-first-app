import React from 'react';
import TodoItem from './TodoItem.jsx';

class TodoItemList extends React.Component {
    render() {
        return (
            <ul className='todo-item-list'>
                {this.props.todos.map(function(name, index){
                    return <li key={index}><TodoItem name={name} /></li>;
                })}
            </ul>
        );
    }

}

export default TodoItemList;
