import React from 'react';
import BasicComponent from '../../src/client/app/components/BasicComponent.jsx';
import renderer from 'react-test-renderer';

test('BasicComponent increments counter on click ', () => {
    const component = renderer.create(
        <BasicComponent />
    );

    let tree = component.toJSON();
    let likeButton = tree.children[2].children[0];

    expect(tree).toMatchSnapshot();

    likeButton.props.onClick();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
