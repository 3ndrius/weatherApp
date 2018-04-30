import React from 'react';

class Weather extends React.Component {

    render() {

        return (
            <div> 
                <p>{this.props.temperature} </p>
            </div>
        );
    }
};

export default Weather;