import React, { Component } from 'react';
import {useNavigate } from 'react-router-dom';
import {useEffect,useState } from 'react';
import '../styles/registerCard.css';
import ButtonGreen from './ButtonGreen';
import RegisterResident from './RegisterResident';
import RegisterVigilant from './RegisterVigilant';
import AuthService from '../services/auth.service';
import TitleCard from './TitleCard';

const Register = (props) => {
    let navigate = useNavigate();
    const[pageStatus, setpageStatus] = useState(false);
    //Uso de estados para renderizar el formulario según el rol escogido
    const[rolNamed, setRol] = useState("Seleccione un rol");
    const[residentContentVisible, setresidentContentVisible] = useState(false);
    const[vigilantContentVisible, setvigilantContentVisible] = useState(false);
    //Uso de estados para capturar datos del formulario
    const[form,setForm] = useState({email:"",rolName:"",cedula:""});

    const handleOnChange2 = (e) =>{

        setForm({...form,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        rolNamed === "ROLE_RESIDENT"
            ? setresidentContentVisible(true)
            : setresidentContentVisible(false);
        rolNamed === "ROLE_GUARD" ? setvigilantContentVisible(true) : setvigilantContentVisible(false);
    },[rolNamed]);

    const handleOnChange = (e) =>{
        setRol(e.target.value);
    }

    const handleOnChange3 = (e) =>{

        setpageStatus(AuthService.getCurrentUser())
      }
    
      useEffect(() => {
        if (AuthService.getCurrentUser() == null || !(AuthService.getCurrentUser().role=== 'ROLE_ADMIN')){
          //alert("No hay credenciales actuales o usted no ha iniciado sesión.")
          navigate("/profile")   
        }
      },[])

    const handleRegister2 = (e) => {
        e.preventDefault();
        let email = e.target[2].value;
        let roleName = e.target[5].value;
        let companyName = "";
        let isEnable = true;
        let personDTO ={
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            dni: e.target[4].value,
            phone: e.target[3].value
        }
        let apartmentDTO ={
            buildingName : e.target[6].value,
            number: e.target[6].value
        }
        if(roleName === "ROLE_RESIDENT"){
            apartmentDTO ={
                buildingName : e.target[6].value.split('-')[0],
                number: e.target[6].value.split('-')[1]
            }
            companyName = ""
        }
        if(roleName === "ROLE_GUARD"){
            apartmentDTO ={
                buildingName : "",
                number: ""
            }
            companyName = e.target[6].value;
        }

        AuthService.register(
            email,isEnable,personDTO,roleName,apartmentDTO,companyName
          ).then(
            response => {
              alert("Se ha registrado satisfactoriamente, dirijase a login e inicie sesion.")
              window.location.reload(true);
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
                alert("Ha ocurrido un error,por favor revise los datos ingresados")
              console.log(resMessage)
            }
          );
    }
    

    return (
            <div className='contenedor-form-register'>
                <form className='form-register' onSubmit = {handleRegister2}>
                    <img className="mb-4" src={require('../images/Logo.png')} alt="" width="120" height="120" />
                    <TitleCard text="Registro"/>
                    <div className="form-floating" id="input-form">
                        <input type="name" name = "nombre" className="form-control" id="floatingName" placeholder="name" value={form.name} onChange ={handleOnChange2} required></input>
                        <label className = "form-label" htmlFor="floatingInput">Nombres</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="lastname" name = "apellidos" className="form-control" id="floatingLastNames" placeholder="lastname" value={form.lastname} onChange ={handleOnChange2} required></input>
                        <label className = "form-label" htmlFor="floatingInput">Apellidos</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="email" name = "email" className="form-control" id="floatingEmail" placeholder="name@example.com" value={form.email} onChange ={handleOnChange2} required></input>
                        <label className = "form-label" htmlFor="floatingInput">Correo electronico</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="tel"  className="form-control" id="floatingCompany" placeholder="telefono" value={form.telefono} onChange ={handleOnChange2} required></input>
                        <label className = "form-label" htmlFor="floatingInput">Telefono</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="number" name = "cedula" className="form-control" id="floatingCedula" placeholder="Password" value={form.cedula} onChange ={handleOnChange2} required></input>
                        <label className = "form-label" htmlFor="floatingCedula">Cedula</label>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="selector" className="form-label">Seleccione rol</label>
                        <select required className="form-select" id="rol-selector" value={rolNamed} onChange = {handleOnChange}>
                            <option></option>
                            <option>ROLE_RESIDENT</option>
                            <option>ROLE_GUARD</option>
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


 
