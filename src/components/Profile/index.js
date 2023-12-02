import React, { Component } from 'react';
import { ThemeContext } from '../../context';

class Profile extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div style={{ background: theme === 'LIGHT' ? 'white' : 'black', color: theme === 'LIGHT' ? 'black' : 'white' }}>
            <h2>Profile... theme:{this.context}</h2>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
Profile.contextType = ThemeContext;
export default Profile;
