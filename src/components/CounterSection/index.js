import React, { Component } from 'react';
import StepCounter1 from './StepCounter1';
import StepCounter2 from './StepCounter2';

class CounterSection extends Component {
  render() {
    return (
      <section>
        <h2>COUNTER SECTION:</h2>
        {/* <StepCounter1 /> */}
        <StepCounter2 />

      </section>
    );
  }
}

export default CounterSection;
