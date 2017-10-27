import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Details from './Details.jsx';
import Picture from './Picture.jsx';

class WeatherSection extends Component {
    render() {
        return (
            <div>
                <Details {...this.props} />
                <Picture {...this.props} />
            </div>
        );
    }
}

//WeatherSection.propTypes = {
//    weather: PropTypes.shape({
//        location: PropTypes.string
//    }).isRequired
//};

export default WeatherSection;