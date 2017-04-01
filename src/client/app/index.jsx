import React from 'react';
import {render} from 'react-dom';
import BasicComponent from './components/BasicComponent.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <p>Hello React after change!</p>
                <BasicComponent/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
