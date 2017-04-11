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

        expect(component.find('header').length).toBe(1);
        expect(component.find('section.main').length).toBe(1);
        expect(component.find('footer').length).toBe(1);
    });

    it('removes todo', () => {
        let component = mount(<Todo todos={todos.slice()} />);

        let removeFirstItem = () => {
            component.find('.view button').first().simulate('click');
        };

        let expectElementsCount = (count) => {
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
        let component = mount(<Todo todos={todos.slice()} />);

        component.find('.view input').first().simulate('change');
        expect(component.find('li.completed').length).toBe(2);
    });
});
