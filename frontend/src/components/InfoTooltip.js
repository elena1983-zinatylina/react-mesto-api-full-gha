import React from 'react';
//import InfoTooltipFail from "./InfoTooltipFail";
//import InfoTooltipSuccess from "./InfoTooltipSuccess";
import regFail from '../images/unsuccess-icon.svg';
import regSuccess from '../images/success-icon.svg';


function InfoTooltip(props) {
    const img = props.success ? regSuccess :regFail;
	const title = props.success ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.';

    
    return (
        <div className={`popup ${props.isOpen && 'popup_opened'}`} onMouseDown={props.onOverlayClose}>
            <div className="popup__content popup__content_tooltip">
                <button className="popup__close-button" type="button" onClick={props.onButtonClose}/>
                <div className="popup__auth-result">
					<img className="tooltip__image" src={img} alt={title} />
					<p className="tooltip__text">{title}</p>
				</div>
            </div>
        </div>
    );
}

export default InfoTooltip;
