import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../App.css';

class Home extends Component {
  render() {
    return (
      <Link to="/form-app">
        <button>Formulario</button>
      </Link>
    );
  }
}

export default Home;
