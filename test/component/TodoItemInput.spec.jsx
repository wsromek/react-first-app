import React from 'react';
import TodoItemInput from '../../src/client/app/components/TodoItemInput.jsx';
import {shallow, mount} from 'enzyme';

describe('TodoItemInput component', () => {
    it('renders input field', () => {
        let component = shallow(<TodoItemInput />);
        expect(component.find('input#todo-submit-input').length).toBe(1);
    });

    it('renders submit button', () => {
        let component = shallow(<TodoItemInput />);
        expect(component.find('button#todo-submit-button').length).toBe(1);
    });

    it('sets input field value when it is passed', () => {
        let component = shallow(<TodoItemInput value='test-value'/>);

        expect(component.find('input#todo-submit-input').props().value).toBe('test-value');
    });

    it('calls onTodoSubmit when submit button is clicked', () => {
        let onTodoSubmitMock = jest.fn();
        let component = mount(<TodoItemInput onSubmit={onTodoSubmitMock} value="test-value"/>);

        component.find('button').simulate('click');

        expect(onTodoSubmitMock).toHaveBeenCalledWith('test-value');
    });
});
