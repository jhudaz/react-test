import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../App.scss';

class Home extends Component {
  render() {
    return (
      <div class="home">
        <Link to="/form-app">
          <button>Formulario</button>
        </Link>
      </div>
    );
  }
}

export default Home;
