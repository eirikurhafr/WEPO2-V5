import React from 'react';
import PropTypes from 'prop-types';
import styles, { prev, next, carousel, img } from './carousel.css';

const Carousel = ({ images, size }) => {
    var imgName = 0;
    
    var incrementPic = () => {
        if(imgName === images.size - 1) {
            imgName = 0;
        }
        else {
            imgName += 1;
        }
    }

    var decrementPic = () => {
        if(imgName === 0) {
            imgName = images.size - 1;
        }
        else {
            imgName -= 1;
        }
    }


    return(
        <div className={ carousel }>
            <button className={{ prev }} onClick={ decrementPic() }> Prev </button>
            <img className={ `${styles[size]}` } src={images[imgName]} alt="carousel"/>
            <button className={{ next }} onClick={ incrementPic() }> Next </button>
        </div>
    )
}

Carousel.propTypes = {
    //display the name
    images: PropTypes.array.isRequired,
    //display email
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default Carousel;