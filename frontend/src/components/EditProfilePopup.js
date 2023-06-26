import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        if (currentUser.name !== undefined && currentUser.about !== undefined) {
            setName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [currentUser, props.isOpen]);

    const handleNameChange = (evt) => {
        setName(evt.target.value)
    }

    const handleDescriptionChange = (evt) => {
        setDescription(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name={'profile'}
            title={'Редактировать профиль'}
            isOpen={props.isOpen}
            onButtonClose={props.onButtonClose}
            onOverlayClose={props.onOverlayClose}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit}
        >
            <input type="text" className="popup__input popup__input_user_name"
                name="name" value={name} placeholder="Имя"
                minLength="2" maxLength="40" required onChange={handleNameChange} />
            <span className="popup__input-error" ></span>
            <input type="text" className="popup__input popup__input_user_about"
                name="about" value={description} placeholder="Работа"
                minLength="2" maxLength="40" required onChange={handleDescriptionChange} />
            <span className="popup__input-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
