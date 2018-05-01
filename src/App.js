import React, { Component } from 'react';

import './App.css';

// own imports
import Titles from './components/Titles';
import Weather from './components/Weather';
import Form from './components/Form';


const API_KEY = "b6907d289e10d714a6e88b30761fae22";

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
  
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country) {

      const api_call = await fetch(`http://openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
      const data = await api_call.json();
      console.log(data);
      this.setState( {
        temperature:data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.humidity,
        description: data.weather[0].description,
        error: ""
  
      }); //end setstate
    }//end if
    else{
      this.setState({
        temperature:undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please type your location properly!"
  
      }); //end setstate
    }//end else   

  }// end of getWeat func
 
  render() {

    return (
      <div className="App">
       
       <Titles />
       <Form getWeather={this.getWeather}/>
       <Weather temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
        />
       
      </div>
    );
  }//end render
}; // end class

export default App;
