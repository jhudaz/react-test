import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './containers/home';
import AppForm from './containers/form';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/form-app" component={AppForm} />
        </div>
      </Router>
    );
  }
}

export default App;
