import React, { Component } from 'react';
import '../styles/loginCard.css';
import ButtonGreen from './ButtonGreen';
import TitleCard from './TitleCard';

import AuthService from "../services/auth.service";
const LoginCard = (props) => {
    const [formValue, setformValue] = React.useState({
        email: '',
        password: ''
    });

    const handleSubmit = async () => {
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("username", formValue.email)
        loginFormData.append("password", formValue.password)

        try {
            AuthService.login(formValue.email, formValue.password).then(
                () => {
                    this.props.router.navigate("/profile");
                    window.location.reload();
                })
            // make axios post request
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className='contenedor-form-login'>
            <form onSubmit={handleSubmit} className='form-login'>
                <img className="mb-4" src={require('../images/Logo.png')} alt="" width="120" height="120" />
                <TitleCard text="Login" />
                <div className="form-floating" id="input-form">
                    <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"
                        value={formValue.email}
                        onChange={handleChange}>
                    </input>
                    <label className="text-input" htmlFor="floatingInput">Correo electronico</label>
                </div>
                <div className="form-floating" id="input-form">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        value={formValue.password}
                        onChange={handleChange}></input>
                    <label className="text-input" htmlFor="floatingPassword">Contraseña</label>
                </div>
                <ButtonGreen id="submit-button" text="Entrar" type="Submit" />
                <p id="text-extra">¿No tienes una cuenta?<br></br>
                    <a href="" onClick={props.fRegister}>Registrarse</a><br></br><br></br>
                    <a href="" onClick={props.fRecovered}>¿Olvidaste tu contraseña?</a>
                </p>
            </form>
        </div>
    )
}


export default LoginCard;
