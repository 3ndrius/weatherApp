import React, { Component } from 'react';

import './App.css';

// own imports
import Titles from './components/Titles';
import Weather from './components/Weather';
import Form from './components/Form';


const API_KEY = "b6907d289e10d714a6e88b30761fae22";

class App extends Component {

  state = {

  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    
  }// end of getWeat func
 
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
