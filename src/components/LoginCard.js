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

    const handleSubmit = async (e) => {
        // store the states in the form data
        e.preventDefault()
        const loginFormData = new FormData();
        loginFormData.append("email", formValue.email)
        loginFormData.append("password", formValue.password)
        try {
            AuthService.login(formValue.email, formValue.password).then(
                () => {
                    //this.props.router.navigate("/profile");
                    props.fProfile();
                    window.location.reload();
                })
        } catch (error) {
            console.log("Pailas");
            alert("Las credenciales son incorrectas o el usuario no existe")
            formValue.email = ""; 
            formValue.password = ";"
            
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
                    <a href="" onClick={props.fRegister}>Registrarse</a><br></br><br></br>
                    <a href="" onClick={props.fRecovered}>¿Olvidaste tu contraseña?</a>
                </p>
            </form>
        </div>
    )
}


export default LoginCard;
