import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_edit_${props.name} ${props.isOpen && 'popup_opened'}`} onMouseDown={props.onOverlayClose}>
            <div className="popup__content">
                <button className="popup__close-button" type="button" onClick={props.onButtonClose}></button>
                <form className="popup__info popup__info_profile"
                    name={props.name}
                    action="#" onSubmit={props.onSubmit}>
                    <h3 className="popup__header"> {props.title}</h3>
                    {props.children}
                    <button className="popup__submit-button" type="submit">{props.buttonText}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;