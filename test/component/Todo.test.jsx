import React from 'react';
import Todo from '../../src/client/app/components/Todo.jsx';
import {render, mount} from 'enzyme';

describe('Todo component', () => {
    const todos = [
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
        const component = render(<Todo todos={todos} />);

        expect(component.find('header').length).toBe(1);
        expect(component.find('section.main').length).toBe(1);
        expect(component.find('footer').length).toBe(1);
    });

    it('removes todo', () => {
        const component = mount(<Todo todos={todos.slice()} />);

        const removeFirstItem = () => {
            component.find('.view button').first().simulate('click');
        };

        const expectElementsCount = (count) => {
            expect(component.find('div.view').length).toBe(count);
        };

        removeFirstItem();
        expectElementsCount(2);

        removeFirstItem();
        expectElementsCount(1);

        removeFirstItem();
        expectElementsCount(0);
    });

    it('changes todo state', () => {
        const component = mount(<Todo todos={todos.slice()} />);

        component.find('.view input').first().simulate('change');
        expect(component.find('li.completed').length).toBe(2);
    });
});
