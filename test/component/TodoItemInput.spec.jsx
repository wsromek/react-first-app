import React from 'react';
import TodoItemInput from '../../src/client/app/components/TodoItemInput.jsx';
import {shallow, mount} from 'enzyme';

describe('TodoItemInput component', () => {
    it('renders input field', () => {
        let component = shallow(<TodoItemInput />);
        expect(component.find('input.new-todo').length).toBe(1);
    });

    it('sets input field value when it is passed', () => {
        let component = shallow(<TodoItemInput value='test-value'/>);

        expect(component.find('input.new-todo').props().value).toBe('test-value');
    });

    it('calls onTodoSubmit when input is filled and enter is clicked', () => {
        const ENTER_KEY = 13;
        let onTodoSubmitMock = jest.fn();
        let component = mount(<TodoItemInput onSubmit={onTodoSubmitMock} value="test-value"/>);

        component.find('input').simulate('keyup', {
            keyCode: ENTER_KEY
        });

        expect(onTodoSubmitMock).toHaveBeenCalledWith('test-value');
    });
});
