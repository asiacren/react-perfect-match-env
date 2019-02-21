import React, { Component } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <header className="App-header">
          <div className="style">
            <h2>Test less</h2>
          </div>
          <div className="scss">
            <h2>Test scss</h2>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Footer/>
      </div>
    );
  }
}

export default App;
