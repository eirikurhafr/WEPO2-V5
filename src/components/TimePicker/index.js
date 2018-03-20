import React from 'react';
import PropTypes from 'prop-types';
import { timePicker } from './timePicker.css';

class TimePicker extends React.Component {
    

    onTimeSet() {
        if(this.state.imgName === 0) {
            this.setState({imgName: this.props.images.length - 1});
        }
        else {
            const num = this.state.imgName - 1;
            this.setState({imgName: num});
        }
    }

    render(){
        return(
            <div className={ carousel }>
                <button className={{ prev }} onClick={ this.decrementPic.bind(this) }> Prev </button>
                <img className={ `${styles[this.props.size]}` } src={this.props.images[this.state.imgName]} alt="carousel"/>
                <button className={{ next }} onClick={ this.incrementPic.bind(this) }> Next </button>
            </div>
        )
    }
}


export default TimePicker;