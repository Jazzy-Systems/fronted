import React, { Component } from 'react';
import {useEffect,useState } from 'react';
import '../styles/registerCard.css';
import ButtonGreen from './ButtonGreen';
import RegisterResident from './RegisterResident';
import RegisterVigilant from './RegisterVigilant';
import TitleCard from './TitleCard';

// const getRol = (props) => {
//     const idValue = document.getElementById('rol-selector').value;
//     props.rol = idValue;
//     return idValue;
// }

const Register = (props) => {
    //Uso de estados para renderizar el formulario según el rol escogido
    const[rol, setRol] = useState("Seleccione un rol");
    const[residentContentVisible, setresidentContentVisible] = useState(false);
    const[vigilantContentVisible, setvigilantContentVisible] = useState(false);
    //Uso de estados para capturar datos del formulario
    const[form,setForm] = useState({});

    const handleOnChange2 = (e) =>{

        setForm({...form,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        rol === "Residente"
            ? setresidentContentVisible(true)
            : setresidentContentVisible(false);
        rol === "Vigilancia" ? setvigilantContentVisible(true) : setvigilantContentVisible(false);
    },[rol]);

    const handleOnChange = (e) =>{
        setRol(e.target.value);
    }
   
    
    const enviarDatos = (e) =>{
        e.preDefault()
        console.log('enviando datos...' + form.name+form.lastname+form.email+form.password+rol)
    }

    const handleRegister = (e) => {
        const nombre = e.target[0].value;
        const apellidos = e.target[1].value;
        const mail = e.target[2].value;
        const contrasena = e.target[3].value;
        const rol = e.target[4].value;
        
        if(rol == "Residente"){
            const telefono = e.target[5].value;
            const apartamento = e.target[6].value;
            alert(nombre+","+apellidos+","+mail+","+contrasena+","+rol+","+telefono+","+apartamento)
        }
        if(rol == "Vigilancia"){
            const compania = e.target[5].value;
            const telefonoC = e.target[6].value;
            alert(nombre+","+apellidos+","+mail+","+contrasena+","+rol+","+compania+","+telefonoC)
        }

        e.preDefault()
    }
    return (
            <div className='contenedor-form-register'>
                <form className='form-register' onSubmit = {handleRegister}>
                    <img className="mb-4" src={require('../images/Logo.png')} alt="" width="120" height="120" />
                    <TitleCard text="Registro"/>
                    <div className="form-floating" id="input-form">
                        <input type="name" name = "nombre" className="form-control" id="floatingName" placeholder="name" value={form.name} onChange ={handleOnChange2}></input>
                        <label className = "form-label" htmlFor="floatingInput">Nombres</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="lastname" name = "apellidos" className="form-control" id="floatingLastNames" placeholder="lastname" value={form.lastname} onChange ={handleOnChange2}></input>
                        <label className = "form-label" htmlFor="floatingInput">Apellidos</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="email" name = "email" className="form-control" id="floatingEmail" placeholder="name@example.com" value={form.email} onChange ={handleOnChange2}></input>
                        <label className = "form-label" htmlFor="floatingInput">Correo electronico</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="password" name = "contrasena" className="form-control" id="floatingPassword" placeholder="Password" value={form.password} onChange ={handleOnChange2}></input>
                        <label className = "form-label" htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="selector" className="form-label">Rol</label>
                        <select className="form-select" id="rol-selector" required="" value={rol} onChange = {handleOnChange}>
                            <option>Seleccione un rol</option>
                            <option>Residente</option>
                            <option>Vigilancia</option>
                        </select>
                        <div className="invalid-feedback">
                            Seleccione un rol por favor.
                        </div>
                    </div>
                    {residentContentVisible && <RegisterResident/>}
                    {vigilantContentVisible && <RegisterVigilant/>}
                    <ButtonGreen id = "submit-button" text="Registrarme" type="Submit"/>
                    <p id= "text-extra">¿Ya tienes una cuenta?<br></br>
                        <a href = "" onClick = {props.fLogin}>Iniciar Sesión</a>
                    </p>
                </form>
            </div>
        )
}


export default Register;