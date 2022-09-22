import React, { Component } from 'react';
import '../styles/registerCard.css';
import ButtonGreen from './ButtonGreen';
import TitleCard from './TitleCard';
const Register = (props) => {
        return (
            <div className='contenedor-form-register'>
                <form className='form-register'>
                    <img className="mb-4" src={require('../images/Logo.png')} alt="" width="120" height="120" />
                    <TitleCard text="Registro"/>
                    <div className="form-floating" id="input-form">
                        <input type="name" className="form-control" id="floatingName" placeholder="name"></input>
                        <label className = "text-input" htmlFor="floatingInput">Nombres</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="lastname" className="form-control" id="floatingLastNames" placeholder="lastname"></input>
                        <label className = "text-input" htmlFor="floatingInput">Apellidos</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"></input>
                        <label className = "text-input" htmlFor="floatingInput">Correo electronico</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                        <label className = "text-input" htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <ButtonGreen id = "submit-button" text="Registrarme" type="Submit"/>
                    <p id= "text-extra">¿Ya tienes una cuenta?<br></br>
                        <a href = "" onClick = {props.fLogin}>Iniciar Sesión</a>
                    </p>
                </form>
            </div>
        )
}


export default Register;