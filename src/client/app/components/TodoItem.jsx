import React from 'react';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }

    render() {
        return (
            <div>{this.props.name}</div>
        );
    }

}

export default TodoItem;
