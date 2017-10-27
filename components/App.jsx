import React, {Component} from 'react';
import WeatherSection from './weather/WeatherSection.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {}
        };
    }

    getWeather(zipCode) {
        fetch('http://localhost:3000/api/v1/weather/' + zipCode, {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            let {weather} = this.state;
            weather.location = responseJson.location.city + ", " + responseJson.location.state;
            weather.observation = responseJson.weather.observation;
            weather.temperature = responseJson.weather.temperature;
            weather.iconUrl = responseJson.weather.iconUrl;
            this.setState({weather});
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <div id="app">
                <WeatherSection {...this.state} getWeather={this.getWeather.bind(this)} />
            </div>
        );
    }
}

export default App;