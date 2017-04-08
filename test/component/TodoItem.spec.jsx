import React from 'react';
import TodoItem from '../../src/client/app/components/TodoItem.jsx';
import {shallow, render} from 'enzyme';

describe('TodoItem component', () => {
    let testItem = {
        status: 'test_status',
        name: 'test_name'
    };

    it('renders as span tag', () => {
        let component = shallow(<TodoItem item={testItem} />);

        expect(component.find('span').length).toBe(1);
    });

    it('renders item based on status nad name', () => {
        let component = render(<TodoItem item={testItem} />);

        expect(component.find('span').hasClass(testItem.status)).toBeTruthy();
    });
});
