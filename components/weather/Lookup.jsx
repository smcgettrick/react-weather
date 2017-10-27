import React, {Component} from 'react';

class Lookup extends Component {
    onSubmit(e) {
        e.preventDefault();
        let zipCode = this.refs.zipCode;
        this.props.getWeather(zipCode.value);
        zipCode.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div>
                    <input type="text" ref="zipCode" />
                    <input type="submit" value="Lookup" />
                </div>
            </form>
        );
    }
}

export default Lookup;