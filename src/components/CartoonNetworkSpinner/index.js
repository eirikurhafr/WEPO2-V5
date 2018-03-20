import React from 'react';
import PropTypes from 'prop-types';
import styles, { spinner, img } from './cartoonNetworkSpinner.css';

class CartoonNetworkSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images:['http://blogs.herald.com/.a/6a00d83451587d69e201901df83045970b-pi',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsBsyagjBiUm9vwwkSTDAdX9-Z3F4-wCtNEV1GSD5L5rNfQPNrg',
            'https://i.imgur.com/SdaR26h.png'
            ]
        };
    }

    render(){
        return(
            <div className={ spinner }>
                <img  src={this.state.images} alt="spinner"/>
            </div>
        )
    }
}

CartoonNetworkSpinner.propTypes = {
    interval: PropTypes.number.isRequired
}

export default CartoonNetworkSpinner;