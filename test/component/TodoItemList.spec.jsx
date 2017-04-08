import React from 'react';
import TodoItemList from '../../src/client/app/components/TodoItemList.jsx';
import {mount, render} from 'enzyme';

describe('TodoItemList component', () => {
    let itemSelector = '.todo-item-list-item';

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

    it('renders list of todo items', () => {
        let component = render(<TodoItemList todos={todos} />);

        expect(component.find(itemSelector).length).toBe(3);
    });

    it('renders list of todo items based on filter', () => {
        let component = mount(<TodoItemList todos={todos} />);

        let changeVisibleStateTo = (state) => {
            component.find(`button#todos-show-${state}-button`).simulate('click');
        };

        let expectElementsCount = (count) => {
            expect(component.find(itemSelector).length).toBe(count);
        };

        expectElementsCount(3);

        changeVisibleStateTo('completed');
        expectElementsCount(1);

        changeVisibleStateTo('active');
        expectElementsCount(2);

        changeVisibleStateTo('all');
        expectElementsCount(3);
    });

    it('calls onItemStateChange on checkbox click', () => {
        let stateChangeMock = jest.fn();
        let component = mount(<TodoItemList todos={todos} onItemStateChange={stateChangeMock} />);
        let completedTodo = component.find(itemSelector).first();

        completedTodo.find('input').simulate('click');

        expect(stateChangeMock).toHaveBeenCalledWith(0);
    });

    it('calls onItemDelete on X button click', () => {
        let lastItemIndex = 2;
        let removeItemMock = jest.fn();
        let component = mount(<TodoItemList todos={todos} onItemDelete={removeItemMock} />);
        let completedTodo = component.find(itemSelector).last();

        completedTodo.find('button').simulate('click');

        expect(removeItemMock).toHaveBeenCalledWith(lastItemIndex);
    });
});
