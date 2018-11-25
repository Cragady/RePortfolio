import React, { Component } from 'react';
import {Test, Contact, Main, Home, Portfolio} from './pages';
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
              path='/about'
              component={Main}
            />
            <Route 
              path='/'
              component={Home}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
