import React from 'react';
import PropTypes from 'prop-types';
import { nameCard, image } from './nameCard.css';

const NameCard = ({ name, email, telephone, imageUrl }) => {
    return(
        <div className={nameCard}>
            <img className={ image } src={ imageUrl } alt="Cool guy" />
            <p>Name: { name }</p>
            <p>Email: { email }</p>
            <p>Telephone: { telephone }</p>
        </div>
    )
};

NameCard.propTypes = {
    //display the name
    name: PropTypes.string.isRequired,
    //display email
    email: PropTypes.string.isRequired,
    //display telephone number
    telephone: PropTypes.string.isRequired,
    //the location of the image for the card
    imageUrl: PropTypes.string
}

export default NameCard;