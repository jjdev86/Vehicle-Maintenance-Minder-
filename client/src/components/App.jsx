import React, {Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 'hello'
        }
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

export default App;