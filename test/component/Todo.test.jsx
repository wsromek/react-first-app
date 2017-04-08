import React from 'react';
import Todo from '../../src/client/app/components/Todo.jsx';
import {render, mount} from 'enzyme';

describe('Todo component', () => {
    let todos = [
        {
            status: 'active',
            name: 'test1'
        },
        {
            status: 'active',
            name: 'test2'
        },
        {
            status: 'completed',
            name: 'test3'
        },
    ];

    it('renders todo component', () => {
        let component = render(<Todo todos={todos} />);

        expect(component.find('.todo-item-list').length).toBe(1);
        expect(component.find('.todo-submit-wrapper').length).toBe(1);
    });

    it('removes todo', () => {
        let component = mount(<Todo todos={todos.slice()} />);

        let removeFirstItem = () => {
            component.find('.todo-item-list-item button').first().simulate('click');
        };

        let expectElementsCount = (count) => {
            expect(component.find('.todo-item-list-item').length).toBe(count);
        };

        removeFirstItem();
        expectElementsCount(2);

        removeFirstItem();
        expectElementsCount(1);

        removeFirstItem();
        expectElementsCount(0);
    });

    it('changes todo state', () => {
        let component = mount(<Todo todos={todos.slice()} />);

        component.find('.todo-item-list-item input').first().simulate('click');
        expect(component.find('.completed').length).toBe(2);
    });
});
