import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
    render() {
        let {weather} = this.props;

        return (
            <div>
                <label>Location</label><span>{weather.location}</span>
            </div>    
        );
    }
}

Details.propTypes = {
    weather: PropTypes.shape({
        location: PropTypes.string
    }).isRequired
};

export default Details;