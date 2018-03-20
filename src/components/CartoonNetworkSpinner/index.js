import React from 'react';
import PropTypes from 'prop-types';
import styles, { spinner, image } from './cartoonNetworkSpinner.css';

class CartoonNetworkSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images:['https://bein.net/en/wp-content/uploads/sites/3/2017/05/1024618-powerpuffgirls-new.jpg',
            'https://hdwallsource.com/img/2014/1/cartoon-network-wallpaper-hd-22905-23541-hd-wallpapers.jpg',
            'https://static1.squarespace.com/static/528a31e5e4b00863f1646510/t/532af9d4e4b025b2a0801ce1/1393444113470/Johhny.png',
            'http://worldartsme.com/images/cartoon-network-characters-clipart-1.jpg'
            ]
        };
    }


    render(){
        return(
            <div className={ spinner }>
                <img className={image} src={ this.state.images[1]} alt="spinner"/>
            </div>
        )
    }
}

CartoonNetworkSpinner.propTypes = {
    interval: PropTypes.number.isRequired
}

export default CartoonNetworkSpinner;