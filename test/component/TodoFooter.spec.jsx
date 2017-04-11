import React from 'react';
import TodoFooter from '../../src/client/app/components/TodoFooter.jsx';
import {shallow, mount} from 'enzyme';

describe('TodoFooter component', () => {
    it('renders statuses list', () => {
        const component = shallow(<TodoFooter />);
        expect(component.find('footer li').length).toBe(3);
    });

    it('sets todos count based on parameter', () => {
        const component = shallow(<TodoFooter todosCount='5' />);

        expect(component.find('span.todo-count').text()).toBe('5 left');
    });

    it('calls onFilterChange on link click', () => {
        const filterChangeMock = jest.fn();
        const component = mount(<TodoFooter onFilterChange={filterChangeMock} />);

        component.find('a').first().simulate('click');

        expect(filterChangeMock).toHaveBeenCalled();
    });
});
