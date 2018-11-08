import React, { Component } from 'react';
import {Test, Contact, Main, Portfolio} from './pages';
import {Nav} from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route
              path='/contact'
              component={Contact}
            />
            <Route 
              path='/portfolio'
              component={Portfolio}
            />
            <Route 
              path='/'
              component={Main}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
