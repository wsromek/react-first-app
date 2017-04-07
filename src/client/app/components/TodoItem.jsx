import React from 'react';

class TodoItem extends React.Component {
    render() {
        return (
            <span className={this.props.item.status}>{this.props.item.name}</span>
        );
    }
}

export default TodoItem;
