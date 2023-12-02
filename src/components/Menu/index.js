import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <nav>
        <h2>Menu...</h2>
        <select onChange={this.props.toggleTheme}>
          <option value="LIGHT">Світла тема</option>
          <option value="DARK">Темна тема</option>
        </select>
      </nav>
    );
  }
}

export default Menu;
