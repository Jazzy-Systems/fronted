import React, { useState } from 'react';
import '../styles/basic.css';
import ButtonGreen from './ButtonGreen';
import TitleCard from './TitleCard';

import AuthService from "../services/auth.service";
const LoginCard = (props) => {
    const [formValue, setformValue] = useState({
        email: '',
        password: ''
    });

    const FRONT_URL = process.env.REACT_APP_FRONT_URL;
    const handleSubmit = async (e) => {
        // store the states in the form data
        e.preventDefault()
        const loginFormData = new FormData();
        loginFormData.append("email", formValue.email)
        loginFormData.append("password", formValue.password)

        AuthService.login(formValue.email, formValue.password).then(
            () => {
                props.fProfile();
                window.location.reload();
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                alert("Las credenciales son incorrectas o el usuario no existe." + resMessage)
            }
        );
    }

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className='card container-sm d-flex justify-content-center align-items-center col-auto' id="card">
            <form onSubmit={handleSubmit} className='form-login' id="form">
                <img className="mb-4" src={require('../images/Logo.png')} alt="" width="120" height="120" />
                <TitleCard text="Login" />
                <div className="form-floating" id="input-form">
                    <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"
                        name="email"
                        value={formValue.email}
                        onChange={handleChange} required></input>
                    <label className="text-input" htmlFor="floatingInput">Correo electronico</label>
                </div>
                <div className="form-floating" id="input-form">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        name="password"
                        value={formValue.password}
                        onChange={handleChange} required></input>
                    <label className="text-input" htmlFor="floatingPassword">Contraseña</label>
                </div>
                <ButtonGreen id="submit-button" text="Entrar" type="Submit" />
                <p id="text-extra">¿No tienes una cuenta?<br></br>
                    <a href={FRONT_URL + "/registerUser"} onClick={props.fRegister}>Registrarse</a><br></br><br></br>
                    <a href={FRONT_URL + "/recover"} onClick={props.fRecovered}>¿Olvidaste tu contraseña?</a>
                </p>
            </form>
        </div>
    )
}


export default LoginCard;
