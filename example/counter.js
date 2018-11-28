import React, { Component } from 'react';
export default class Counter extends Component {
    constructor() {
        super(...arguments);
        this.state = { value: 0 };
        this.handleIncrement = () => {
            console.log('Hello world4');
            this.setState({ value: this.state.value + 40 });
        };
        this.handleDecrement = () => this.setState({ value: this.state.value + 1 });
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", null, this.state.value),
            React.createElement("button", { onClick: this.handleIncrement }, "+"),
            React.createElement("button", { onClick: this.handleDecrement }, "-")));
    }
}
//# sourceMappingURL=counter.js.map