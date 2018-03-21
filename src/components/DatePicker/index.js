import React from 'react';
import PropTypes from 'prop-types';
import { datePicker} from './datepicker.css';

class DatePicker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: new Date().toLocaleString(this.props.locale)
      };
    }

    render(){
        return(
            <div className={datePicker}>
                <button className="dateBtn">{this.state.date}</button>
            </div>      
        )
    }
};

DatePicker.propTypes = {
    onTimePick: PropTypes.func.isRequired,
    format: PropTypes.oneOf(['is-IS', 'en-EN'])
}

export default DatePicker;