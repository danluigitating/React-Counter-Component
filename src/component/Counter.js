import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    render() {
        return (
            <div>
                <button onClick= { ()=> this.setState({counter: this.state.counter + 1})}>+</button>
                <button onClick= { ()=> this.setState({counter: this.state.counter - 1})}>-</button>
                <p>Counter: {this.state.counter}</p>
            </div>
        );
    }
}

export default Counter;

