import React from 'react';
import PropTypes from 'prop-types';
import { rows } from './row.css';

const Row = ({ children }) => {
    return(
        <div className={ rows }>
            { children }
        </div>
    )
};

Row.propTypes = {
    //the children col objects in the row
    children: PropTypes.node
}

export default Row;