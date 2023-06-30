class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _validateQuery(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  
  /**Установить токен*/
  setToken(token) {
    this._headers.Authorization = `Bearer ${token}`;
  }

  // карточеки с сервера
  getInitialCards() {
    return fetch(`${this._url}/cards`, { headers: this._headers })
    .then(this._validateQuery)
}

  // новые карточки 
  addCard({ name, link }) {
    return fetch(`${this._url}/cards`,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({ name, link })
      })
      .then(this._validateQuery)
  }

  // Удаление карточки
  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`,
      {
        method: 'DELETE',
        headers: this._headers
      })
      .then(this._validateQuery)
  }

  // like/dislike
  changeLike(id, isLiked) {
    if (isLiked) {
      return fetch(`${this._url}/cards/${id}/likes`,
        {
          method: 'PUT',
          headers: this._headers,
        })
        .then(this._validateQuery)
    } else {
      return fetch(`${this._url}/cards/${id}/likes`,
        {
          method: 'DELETE',
          headers: this._headers,
        })
        .then(this._validateQuery)
    }
  }

  // Получение информации о пользователе с сервера
    getUserInfo() {
    return fetch(`${this._url}/users/me`, 
    { 
      headers: this._headers })
      .then(this._validateQuery)
  }


  // Редактирование информации о пользователе 
  updateUserInfo({ name, about }) {
    return fetch(`${this._url}/users/me`,
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({ name, about })
      })
      .then(this._validateQuery)
  }

  // Редактирование аватара пользователя через попап
  changeAvatar( link ) {
    return fetch(`${this._url}/users/me/avatar`,
      {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify({ avatar: link })
      })
      .then(this._validateQuery)
  }
}

const api = new Api({
  url: 'https://api.zee.domainname.studen.nomoreparties.sbs',
  headers: {
    Authorization: '',
    'Content-Type': 'application/json'
  }
});

export default api;

  