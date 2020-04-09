import React, { Component } from 'react';
import {Contact, Main, Home, Portfolio} from './pages';
import {Nav} from './components/Nav';
import {Footer} from './components/Footer';
import {BackgroundDancer} from './components/BackgroundDancer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <section id="app-cont">
          <div id="wrap">
            <div id="main" className="App">
              <BackgroundDancer />
              <Switch>
                <Route path='/*' component={Nav} />
              </Switch>
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
          </div>
          <Footer />
        </section>
      </Router>
    );
  }
}

export default App;
