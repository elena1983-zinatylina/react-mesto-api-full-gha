import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const linkInputRef = React.useRef();

    React.useEffect(() => {
        linkInputRef.current.value = ''
    }, [props.isOpen]
    )

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.onUpdateAvatar(linkInputRef.current.value);
    }

    return (
        <PopupWithForm
            name={'avatar'}
            title={'Обновить аватар'}
            isOpen={props.isOpen}
            onButtonClose={props.onButtonClose}
            onOverlayClose={props.onOverlayClose}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit}
        >
            <div className="popup__avatar-container">
                <input type="url" className="popup__input popup__input-avatar" name="avatar" id="avatar"
                    defaultValue="" placeholder="Ссылка на картинку" required ref={linkInputRef} />
                <span id="avatar-error" className="popup__input-error"></span>
            </div>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;
