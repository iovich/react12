import React, { Component } from 'react';

class DisplayCounter1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState((state, props) => ({
      count: state.count + props.step
    }))
  }
  decrement = () => {
    this.setState((state, props) => ({
      count: state.count - props.step
    }))
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('current', this.props);
    // console.log('next', nextProps);
    return this.props.step === nextProps.step;
  }
  render() {
    console.log('render Child: DisplayCounter');
    const { count } = this.state;
    return (
      <div>
        <h2>count:{count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>

      </div>
    );
  }
}

export default DisplayCounter1;
