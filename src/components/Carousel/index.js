import React from 'react';
import PropTypes from 'prop-types';
import styles, { prev, next, carousel, img } from './carousel.css';

const Carousel = ({ images, size }) => {
    var imgName = 0;
    var changePic = (incDec) => {
        if(imgName === this.images.size - 1 && incDec === 1) {
            imgName = 0;
        }
        else if(imgName === 0 && incDec === -1) {
            imgName = this.images.size - 1;
        }
        else {
            imgName += incDec;
        }
    }
    return(
        <div className={ carousel }>
            <button className={{ prev }} onClick={ changePic(-1) }> Prev </button>
            <img className={ `${styles[size]}` } src={images[imgName]} alt="carousel"/>
            <button className={{ next }} onClick={ changePic(1) }> Next </button>
        </div>
    )
}

Carousel.propTypes = {
    //display the name
    images: PropTypes.array,
    //display email
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default Carousel;