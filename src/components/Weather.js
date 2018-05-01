import React from 'react';

class Weather extends React.Component {

    render() {

        return (
            <div> 
               
                {this.props.city && this.props.country && <p>Location: {this.props.city} | { this.props.country} </p>}
                {this.props.temperature && <p>Temp: {this.props.temperature} </p>}
                {this.props.humidity && <p>Humidity: {this.props.himidity} </p>}
                {this.props.description && <p> Condition: {this.props.description} </p> }
                <p>{this.props.error} </p>
            </div>
        );
    }
};

export default Weather;