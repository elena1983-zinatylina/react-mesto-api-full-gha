import React from 'react'
import Card from './Card.js';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardsContext } from "../contexts/CardsContext";

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const cards = React.useContext(CardsContext);

    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                    <button className="profile__avatar-button"></button>
                    <img className="profile__avatar" src={currentUser.avatar} alt="Аватар пользователя" name="avatar" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <button onClick={props.onEditProfile} type="button" className="profile__edit-button"></button>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
            </section>
            <section className="elements">
                <ul className="elements__container">
                    {cards.map((card) =>
                        <Card
                            onCardClick={props.onCardClick}
                            onLikeClick={props.onLikeClick}
                            onDeleteClick={props.onDeleteClick}
                            key={card._id}
                            card={card}
                        />
                    )}
                </ul>
            </section>
        </main>
    )
}
export default Main

