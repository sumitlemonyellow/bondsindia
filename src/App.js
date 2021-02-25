import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

import "./style.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo_div"><img width="200"  src="./images/logo.png" /></div> 
        <Form />
      </div>
    );
  }
}

export default App;
