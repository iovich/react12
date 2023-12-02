import React, { Component } from 'react';
import DisplayCounter2 from '../DisplayCounter2';

class StepCounter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: null
    }
  }
  handlerInput = ({ target: { value } }) => {
    this.setState({ step: Number(value) })
  }
  render() {
    console.log('render Parent: StepCounter');
    const { sign } = this.state;
    return (
      <div>
        <h2>Counter#1 </h2>
        <button onClick={() => this.setState({ sign: true })}>+</button>
        <button onClick={() => this.setState({ sign: false })}>-</button>
        <DisplayCounter2 sign={sign} />
      </div>
    );
  }
}

export default StepCounter2;
