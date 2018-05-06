import React, { Component } from 'react';

import './App.css';

// own imports
import Titles from './components/Titles';
import Weather from './components/Weather';
import Form from './components/Form';


const API_KEY = "b6907d289e10d714a6e88b30761fae22";

class App extends Component {

  state = {
    temperature:undefined,
    minTemp: undefined,
    maxTemp: undefined,
    city: undefined,
    pressure: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    wind: undefined,
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
        minTemp: data.main.temp_max,
        maxTemp: data.main.temp_min,
        city: data.name,
        pressure: data.main.pressure,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        wind: data.wind.speed,
        error: ""
  
      }); //end setstate
    }//end if
    else{
      this.setState({
        temperature:undefined,
        minTemp: undefined,
        maxTemp: undefined,
        city: undefined,
        pressure: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        wind: undefined,
        error: "Please type your location properly!"
  
      }); //end setstate
    }//end else   

  }// end of getWeat func
 
  render() {

    return (
     <div className="container">
      <div className="row"> 
      <div className="col-xs-5 col-md-5">
      
       </div>
        <div className="col-xs-7 col-md-7"> 
        <div className="App">
       
       <Titles />
       <Form getWeather={this.getWeather}/>
       <Weather temperature={this.state.temperature}
                minTemp={this.state.minTemp}
                maxTemp={this.state.maxTemp}
                city={this.state.city}
                pressure={this.state.pressure}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                icon={this.state.icon}
                wind={this.state.wind}
                error={this.state.error}
        />
     
      </div>
        </div>
      </div>
      </div>
    );
  }//end render
}; // end class

export default App;
