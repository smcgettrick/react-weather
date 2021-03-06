import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Details from './Details.jsx';
import Picture from './Picture.jsx';
import Lookup from './Lookup.jsx';

class WeatherSection extends Component {
    render() {
        return (
            <div>
                <div>
                    <Details {...this.props} />
                    <Picture {...this.props} />
                </div>
                <div>
                    <Lookup {...this.props} />
                </div>
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