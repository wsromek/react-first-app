import React from 'react';
import TodoItemInput from '../../src/client/app/components/TodoItemInput.jsx';
import {shallow, mount} from 'enzyme';

describe('TodoItemInput component', function () {
    it('renders input filed', () => {
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

    it('should be selectable by class "todo-submit-wrapper"', () => {
        expect(shallow(<TodoItemInput />).is('.todo-submit-wrapper')).toBe(true);
    });

    it('should mount in a full DOM', () => {
        expect(mount(<TodoItemInput />).find('.todo-submit-wrapper').length).toBe(1);
    });
});
