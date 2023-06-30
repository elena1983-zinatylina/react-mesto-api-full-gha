function ImagePopup(props) {
    const card = props.card;
    return (
        <div className={`popup popup_image ${props.isOpen && 'popup_opened'}`}
            onMouseDown={props.onOverlayClose}>
            <div className="popup__image-content">
                <button className="popup__close-button" type="button"
                    name="closeImg" onClick={props.onButtonClose}></button>
                <figure className="popup__figure">
                    <img src={card.link} alt={card.name} className="popup__figure-image" />
                    <figcaption className="popup__figure-caption">{card.name}</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup;