import React, { Component } from 'react';
import {useEffect,useState } from 'react';
import '../styles/registerCard.css';
import ButtonGreen from './ButtonGreen';
import AuthService from '../services/auth.service';
import TitleCard from './TitleCard';


const RegisterUser = (props) => {

    const[form,setForm] = useState({email:""});

    const handleOnChange2 = (e) =>{

        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleRegister2 = (e) => {
        e.preventDefault();
        let email = e.target[0].value;
        let password = e.target[1].value;
        let codigo = e.target[2].value;
        console.log(email+" , "+password+" , "+codigo)
        // AuthService.register(
        //     email, password
        //   ).then(
        //     response => {
        //       alert("Se ha registrado satisfactoriamente, dirijase a login e inicie sesion.")
        //       window.location.reload(true);
        //     },
        //     error => {
        //       const resMessage =
        //         (error.response &&
        //           error.response.data &&
        //           error.response.data.message) ||
        //         error.message ||
        //         error.toString();
        //         alert("Ha ocurrido un error,por favor revise los datos ingresados")
        //       console.log(resMessage)
        //     }
        //   );
    }
    return (
            <div className='contenedor-form-register'>
                <form className='form-register' onSubmit = {handleRegister2}>
                    <img className="mb-4" src={require('../images/Logo.png')} alt="" width="120" height="120" />
                    <TitleCard text="Registro Usuario"/>
                    <div className="form-floating" id="input-form">
                        <input type="email" name = "email" className="form-control" id="floatingEmail" placeholder="name@example.com" value={form.email} onChange ={handleOnChange2} required></input>
                        <label className = "form-label" htmlFor="floatingInput">Correo electronico</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="password" name = "contrasena" className="form-control" id="floatingPassword" placeholder="Password" value={form.password} onChange ={handleOnChange2} required></input>
                        <label className = "form-label" htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="text" name = "codigo" className="form-control" id="floatingCode" placeholder="Codigo" value={form.password} onChange ={handleOnChange2} required></input>
                        <label className = "form-label" htmlFor="floatingCode">Codigo Usuario</label>
                    </div>
                    <ButtonGreen id = "submit-button" text="Registrarme" type="Submit"/>
                    <p id= "text-extra">¿Ya tienes una cuenta?<br></br>
                        <a href = "" onClick = {props.fLogin}>Iniciar Sesión</a>
                    </p>
                </form>
            </div>
        )
}



export default RegisterUser;

