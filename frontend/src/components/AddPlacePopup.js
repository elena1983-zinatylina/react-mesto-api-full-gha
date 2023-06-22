import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    React.useEffect(() => {
        setName('');
        setLink('');
    }, [props.isOpen]);

    const handleNameChange = (evt) => {
        setName(evt.target.value)
    }

    const handleLinkChange = (evt) => {
        setLink(evt.target.value)
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.onAddPlace({ name, link });
    }

    return (
        <PopupWithForm
            name={'new-card'}
            title={'Новое место'}
            isOpen={props.isOpen}
            onButtonClose={props.onButtonClose}
            onOverlayClose={props.onOverlayClose}
            buttonText={'Создать'}
            onSubmit={handleSubmit}
        >
            <input type="text" className="popup__input popup__input_plase-name" name="name" value={name}
                placeholder="Название" minLength="2" maxLength="40" required onChange={handleNameChange} />
            <span className="popup__input-error"></span>
            <input type="url" className="popup__input popup__input_link-images" name="link" value={link}
                placeholder="Ссылка на картинку" required onChange={handleLinkChange} />
            <span className="popup__input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup