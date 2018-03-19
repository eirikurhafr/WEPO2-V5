import React from 'react';
import PropTypes from 'prop-types';
import styles, { progressBar, stripes } from './progressBar.css';



const ProgressBar = ({ progress, striped, animated, state }) => {
    return(
        <div className={progressBar}>
            <div className={`${styles[state]} ${animated}`} style={{width: `${progress}%`}}>
                <div className={ `${striped ? stripes : '' }`}>
                    {progress}%
                </div>
            </div>
        </div>
    )
};

ProgressBar.propTypes = {
    //progress of how full the bar is
    progress: (props, propName) => {
        if(props[propName] >= 0 && props[propName] <= 100){ return; }
        return new Error ('Number must be between 0 and 100');
    }, 
    //is the bar striped or not
    striped: PropTypes.bool.isRequired, 
    //is the bar animated or not
    animated: PropTypes.bool.isRequired, 
    //what is the stape of the bar
    state: PropTypes.oneOf( ['info', 'success', 'warning', 'danger' ])
}

export default ProgressBar;