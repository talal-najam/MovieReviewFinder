import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar'
import InputForm from './components/InputForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <InputForm />
      </div>
    );
  }
}

export default App;
