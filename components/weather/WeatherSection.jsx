import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Details from './Details.jsx';

class WeatherSection extends Component {
    render() {
        return (
            <div>
                <Details {...this.props} />
            </div>
        );
    }
}

WeatherSection.propTtypes = {
    weather: PropTypes.shape({
        location: PropTypes.string
    }).isRequired
};

export default WeatherSection;