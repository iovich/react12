import React, { Component } from 'react';
import Address from '../Address';
import Contact from '../Contact';

class Info extends Component {
  render() {
    return (
      <div>
        <h2>Info:</h2>
        <Address />
        <Contact />
      </div>
    );
  }
}

export default Info;
