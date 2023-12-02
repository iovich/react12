import React, { Component } from 'react';
import DisplayCounter1 from '../DisplayCounter1';

class StepCounter1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }
  }
  handlerInput = ({ target: { value } }) => {
    this.setState({ step: Number(value) })
  }
  render() {
    console.log('render Parent: StepCounter');
    const { step } = this.state;
    return (
      <div>
        <h2>Counter#1 </h2>
        <input
          type="range"
          value={step}
          onChange={this.handlerInput}
          min="1"
          max="10"
          step="1"
        />
        <h2>step of parent:{step}</h2>
        <DisplayCounter1 step={step} />
      </div>
    );
  }
}

export default StepCounter1;
