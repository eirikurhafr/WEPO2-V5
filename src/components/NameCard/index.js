import React from 'react';
import PropTypes from 'prop-types';
import { nameCard, image, attr} from './nameCard.css';

const NameCard = ({ name, email, telephone, imageUrl }) => {
    return(
        <div className={nameCard}>
            <img className={ image } src={ imageUrl } alt="Cool guy" />
            <h4 className={attr}>Name: </h4>
            <p>{ name }</p>
            <h4 className={attr}>Email: </h4>
            <p>{ email }</p>
            <h4 className={attr}>Telephone: </h4>
            <p>{ telephone }</p>
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