import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Picture extends Component {
    render() {
        let {weather} = this.props;

        return (
            <div>
                <img src={weather.iconUrl}/>
            </div>    
        );
    }
}

//Details.propTypes = {
//    weather: PropTypes.shape({
//        location: PropTypes.string
//    }).isRequired
//};

export default Picture;