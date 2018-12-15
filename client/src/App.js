import React, { Component } from 'react';
import {Contact, Main, Home, Portfolio} from './pages';
import {Nav} from './components/Nav';
import {BackgroundDancer} from './components/BackgroundDancer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <BackgroundDancer />
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
