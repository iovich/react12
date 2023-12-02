import React, { Component } from 'react';
import { ThemeContext } from '../../context';

class Address extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div style={{ background: theme === 'LIGHT' ? 'white' : 'black', color: theme === 'LIGHT' ? 'black' : 'white' }}>
            <h2>Address...</h2>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Address;
