import React from 'react';
import PropTypes from 'prop-types';
import { modalOverlay, modal, modalClose, hidden, modalBody, modalTitle, modalFooter } from './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    return(
        <div className={`${modalOverlay} ${isOpen ? '' : hidden}`}>
            <div className={ modal }>
                <div className={ modalClose } onClick={ onClose }><i className="fa fa-times"></i></div>
                { children }
            </div>
        </div>
    )
};

Modal.Title = ({ children }) => <div className={ modalTitle }>{ children }</div>;
Modal.Body = ({ children }) => <div className={ modalBody }>{ children }</div>;
Modal.Footer = ({ children }) => <div className={ modalFooter }>{ children }</div>;

Modal.propTypes = {
    //see if modal is visible
    isOpen: PropTypes.bool.isRequired,
    //called when modal is closed
    onClose: PropTypes.func.isRequired,
    //the children rendered within the modal
    children: PropTypes.node
}


export default Modal;