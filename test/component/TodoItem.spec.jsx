import React from 'react';
import TodoItem from '../../src/client/app/components/TodoItem.jsx';
import {shallow, render} from 'enzyme';

describe('TodoItem component', () => {
    const testItem = {
        status: 'test_status',
        name: 'test_name'
    };

    it('renders as span tag', () => {
        const component = shallow(<TodoItem item={testItem} />);

        expect(component.find('span').length).toBe(1);
    });

    it('renders item based on status nad name', () => {
        const component = render(<TodoItem item={testItem} />);

        expect(component.find('span').hasClass(testItem.status)).toBeTruthy();
    });
});
