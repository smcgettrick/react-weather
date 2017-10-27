import React, {Component} from 'react';
import WeatherSection from './weather/WeatherSection.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {}
        };
    }

    componentWillMount() {
        let {weather} = this.state;
        weather.location = "Philadelphia, PA";
        this.setState({weather});
    }

    render() {
        return (
            <div id="app">
                <WeatherSection {...this.state} />
            </div>
        );
    }
}

export default App;