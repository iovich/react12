import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeContext, UserContext } from './context';
import CounterSection from './components/CounterSection';
import { Component } from 'react';

class App extends Component {
  state = {
    theme: 'LIGHT',
  };

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'LIGHT' ? 'DARK' : 'LIGHT',
    }));
  };
  render() {
    return (
      <>
        <UserContext.Provider value={{ firstName: 'Ivan', lastName: 'Ivanov' }}>
          <ThemeContext.Provider value={this.state.theme}>
            <Header toggleTheme={this.toggleTheme} />
            <CounterSection />
            <Footer />
          </ThemeContext.Provider >
        </UserContext.Provider>
      </>
    );
  }
}

export default App;
