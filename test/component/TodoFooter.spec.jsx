import React from 'react';
import TodoFooter from '../../src/client/app/components/TodoFooter.jsx';
import {shallow, mount} from 'enzyme';

describe('TodoFooter component', () => {
    it('renders statuses list', () => {
        let component = shallow(<TodoFooter />);
        expect(component.find('footer li').length).toBe(3);
    });

    it('sets todos count based on parameter', () => {
        let component = shallow(<TodoFooter todosCount='5' />);

        expect(component.find('span.todo-count').text()).toBe('5 left');
    });

    it('calls onFilterChange on link click', () => {
        let filterChangeMock = jest.fn();
        let component = mount(<TodoFooter onFilterChange={filterChangeMock} />);

        component.find('a').first().simulate('click');

        expect(filterChangeMock).toHaveBeenCalled();
    });
});
