import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
    render() {
        let {weather} = this.props;

        return (
            <div>
                <label>Location: </label><span>{weather.location}</span><br/>
                <label>Observation: </label><span>{weather.observation}</span><br/>
                <label>Temperature: </label><span>{weather.temperature}</span>
            </div>    
        );
    }
}

//Details.propTypes = {
//    weather: PropTypes.shape({
//        location: PropTypes.string
//    }).isRequired
//};

export default Details;