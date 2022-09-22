import React, { Component } from 'react';
import '../styles/loginCard.css';
import ButtonGreen from './ButtonGreen';
import TitleCard from './TitleCard';
const LoginCard = (props) => {

        return (
            <div className='contenedor-form-login'>
                <form className='form-login'>
                    <img className="mb-4" src={require('../images/Logo.png')} alt="" width="120" height="120" />
                    <TitleCard text="Login"/>
                    <div className="form-floating" id="input-form">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"></input>
                        <label className = "text-input" htmlFor="floatingInput">Correo electronico</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                        <label className = "text-input" htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <ButtonGreen id = "submit-button" text="Entrar" type="Submit"/>
                    <p id= "text-extra">¿No tienes una cuenta?<br></br>
                        <a href = "" onClick = {props.fRegister}>Registrarse</a><br></br><br></br>
                        <a href = "" onClick = {props.fRecovered}>¿Olvidaste tu contraseña?</a>
                    </p>
                </form>
            </div>
        )
}


export default LoginCard;