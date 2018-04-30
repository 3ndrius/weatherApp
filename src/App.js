import React, { Component } from 'react';

import './App.css';

import Titles from './components/Titles';
import Weather from './components/Weather';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
       
       <Titles />
       <Form />
       <Weather />
      </div>
    );
  }
}

export default App;
