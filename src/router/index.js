import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from '@/App';
import Index from '@/pages/index';
import List from '@/pages/list';
import Me from '@/pages/me';
import Details from '@/pages/details';
import About from '@/pages/about';

class Routers extends Component {
  render() {
    let AppRouter = (
      <App>
        <Switch>
          <Route exact path="/" component={Index} visible={false}></Route>
          <Route path="/list" component={List}></Route>
          <Route path="/me" component={Me} visible={true}></Route>
          <Route path="/details/:id" component={Details} visible={true}></Route>
          <Route path="/about" component={About} visible={true}></Route>
        </Switch>
      </App>
    );
    return (
      <Router>
        <Switch>
          <Route path="/" render={ props => AppRouter }></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routers;