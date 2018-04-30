import React, { Component } from 'react';

import './App.css';

import Titles from './components/Titles';
import Weather from './components/Weather';
import Form from './components/Form';


const API_KEY = "b6907d289e10d714a6e88b30761fae22";

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    
  }
 
  render() {

    return (
      <div className="App">
       
       <Titles />
       <Form getWeather={this.getWeather}/>
       <Weather />
      </div>
    );
  }//end render
}; // end class

export default App;
