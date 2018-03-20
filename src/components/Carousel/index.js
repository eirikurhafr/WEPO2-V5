import React from 'react';
import PropTypes from 'prop-types';
import styles, { prev, next, carousel } from './carousel.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgName: 0
        };
    }

    incrementPic() {
        if(this.state.imgName === this.props.images.length - 1) {
            this.setState({imgName: 0});
        }
        else {
            const num = this.state.imgName + 1;
            this.setState({imgName: num});
        }
    }

    decrementPic() {
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

Carousel.propTypes = {
    //display the name
    images: PropTypes.array.isRequired,
    //display email
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default Carousel;