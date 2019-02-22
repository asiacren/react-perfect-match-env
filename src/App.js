import React, { Component } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
