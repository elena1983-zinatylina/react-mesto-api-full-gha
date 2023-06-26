import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeletedCardPopup(props) {
  function handleSubmit(e) {
		// Запрещаем браузеру переходить по адресу формы
		e.preventDefault();
	  
		// Передаём значения управляемых компонентов во внешний обработчик
    props.onDeleteClick(props.card);
	}

    return (
      <PopupWithForm
        name={'confirm'}
        title={'Вы уверены?'}
        buttonText={'Да'}
        isOpen={props.isOpen}
        onButtonClose={props.onButtonClose}
        onSubmit={handleSubmit}
     
      />
    )
  }

export default DeletedCardPopup;