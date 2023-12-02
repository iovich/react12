import React, { Component } from 'react';
import { ThemeContext, UserContext } from '../../context';

class Contact extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {
          (user) => (
            <ThemeContext.Consumer>
              {
                (theme) => (
                  <div style={{ background: theme === 'LIGHT' ? 'white' : 'black', color: theme === 'LIGHT' ? 'black' : 'white' }}>
                    <h2>Contact... theme:{theme}</h2>
                    <p>first name: {user.firstName}</p>
                    <p>last name: {user.lastName}</p>
                  </div>
                )
              }
            </ThemeContext.Consumer>
          )
        }
      </UserContext.Consumer>
    );
  }
}



export default Contact;
