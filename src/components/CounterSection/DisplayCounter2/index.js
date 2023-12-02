import React, { Component } from 'react';

class DisplayCounter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState((state, props) => ({
      count: state.count + 1
    }))
  }
  decrement = () => {
    this.setState((state, props) => ({
      count: state.count - 1
    }))
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('current', this.props);
    // console.log('next', nextProps);
    return this.props.sign !== nextProps.sign || nextState.count !== this.state.count;
  }
  render() {
    console.log('render Child: DisplayCounter');
    const { count } = this.state;
    const { sign } = this.props;
    const btnText = sign === null ? "?" : sign ? "+" : "-";
    return (
      <div>
        <h2>count:{count}</h2>
        <button
          onClick={sign === null ? null : sign ? this.increment : this.decrement}>
          {btnText}
        </button>

      </div>
    );
  }
}

export default DisplayCounter2;
