import React from 'react';
import { cols } from './col.css';

const Col = ({ size }) => {
    return(
        <div className={ cols } style={{width: `${size/12 * 100}%`}}>
            Col object {size} / 12
        </div>
        
    )
};

Col.propTypes = {
    size: (props, propName) => {
        const prop = props[propName];
        if (prop >= 1 && prop <= 12) { return; }
        return new Error('Col size must be between 1 and 12');
    }
};

export default Col;