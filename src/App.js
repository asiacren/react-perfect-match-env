import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from '@/components/header';
import Footer from '@/components/footer';
import store from './store';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Header  pages={this.props.children} />
        <div className="container">
          {this.props.children}
        </div>
        <Footer/>
      </div>
      </Provider>
    );
  }
}

export default App;
