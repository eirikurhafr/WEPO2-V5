import React from 'react';
import PropTypes from 'prop-types';
import { datePicker} from './datepicker.css';

const DatePicker = ({ onTimePick, format }) => {
    return(
        <div className={datePicker}>
            <img className={ image } src={ imageUrl } alt="Cool guy" />
            <h4 className={attr}>Name: </h4>
            <p>{ name }</p>
            <br />
            <h4 className={attr}>Email: </h4>
            <p>{ email }</p>
            <br />
            <h4 className={attr}>Telephone: </h4>
            <p>{ telephone }</p>
        </div>
    )
};

DatePicker.propTypes = {
    onTimePick: PropTypes.func.isRequired,
    format: PropTypes.oneOf(['is-IS', 'en-EN'])
}

export default DatePicker;