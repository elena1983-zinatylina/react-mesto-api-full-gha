import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {

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
        props.handleRegister({ email, password });
    }

    return (
        <div className="auth">
            <h3 className="auth__title">
                Регистрация
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
                    <input type="password"
                        className="auth__input auth__input_kind_password"
                        name="password"
                        value={password}
                        placeholder="Пароль"
                        minLength="8"
                        maxLength="50"
                        required=""
                        onChange={handleChangePassword}
                    />
                    <span className="popup__error about-input-error"></span>
                </div>
                <button className="auth__submit-btn">Зарегестрироваться</button>
            </form>
            <Link to="/sign-in" className="auth__link">
                Уже зарегистрированы? Войти
            </Link>
        </div>

    );
}

export default Register;