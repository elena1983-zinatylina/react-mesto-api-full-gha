import React, { useState } from "react";

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin({ email, password });
  }

  return (
    <div className="auth">
      <h3 className="auth__title">
        Вход
      </h3>
      <form className="auth__form" onSubmit={handleSubmit}>

        <div className="auth__input-container">
          <input
            type="email"
            name="email"
            value={email}
            className="auth__input auth__input_kind_email"
            placeholder="Email"
            required=""
            onChange={handleChangeEmail}
          />
        </div>
        <span className="auth__error email-input-error"></span>
        <div className="auth__input-container">
          <input
            type="password"
            name="password"
            value={password}
            className="auth__input auth__input_kind_password"
            placeholder="Пароль"
            minLength={8}
            maxLength={50}
            required=""
            onChange={handleChangePassword}
          />
          <span className="popup__error about-input-error"></span>
        </div>
        <button className="auth__submit-btn">Войти</button>

      </form>
    </div>
  );
}

export default Login;