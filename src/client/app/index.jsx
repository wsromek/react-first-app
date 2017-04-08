import React from 'react';
import {render} from 'react-dom';
import Todo from './components/Todo.jsx';
import TodoModel from './model/Todo.model.jsx';

let todos = (() => {
    return [1,2,3,4,5,6,7,8].map((number) => {
        return {
            name: `TodoItem ${number}`,
            status: TodoModel.STATUS_ACTIVE
        };
    });
})();

render(
    <Todo todos={todos} />,
    document.getElementById('app')
);
