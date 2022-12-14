import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/basic.css';
import ButtonGreen from './ButtonGreen';
import RegisterResident from './RegisterResident';
import RegisterVigilant from './RegisterVigilant';
import AuthService from '../services/auth.service';
import authHeader from '../services/auth-header';


const Register = (props) => {
    let navigate = useNavigate();
    //Uso de estados para renderizar el formulario según el rol escogido
    const [rolNamed, setRol] = useState("Seleccione un rol");
    const [residentContentVisible, setresidentContentVisible] = useState(false);
    const [vigilantContentVisible, setvigilantContentVisible] = useState(false);
    //Uso de estados para capturar datos del formulario
    const [form, setForm] = useState({ email: "", rolName: "", cedula: "" });
    const [roles, setRoles] = useState(null);

    const API_URL = process.env.REACT_APP_API_URL;
    const handleOnChange2 = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (AuthService.getCurrentUser() == null || !(AuthService.getCurrentUser().role === 'ROLE_ADMIN')) {
            //alert("No hay credenciales actuales o usted no ha iniciado sesión.")
            navigate("/profile")
        }
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        }
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    API_URL + "/api/v1/role/", requestOptions
                )
            ).json();
            console.log(data);
            // set state when the data received
            setRoles(data);
        };

        dataFetch();
        rolNamed === "ROLE_RESIDENT"
            ? setresidentContentVisible(true)
            : setresidentContentVisible(false);
        rolNamed === "ROLE_GUARD" ? setvigilantContentVisible(true) : setvigilantContentVisible(false);
    }, [API_URL, navigate, rolNamed]);

    const handleOnChange = (e) => {
        setRol(e.target.value);
    }

    const handleRegister2 = (e) => {
        e.preventDefault();
        let roleName = e.target[5].value;
        let companyName = "";
        let personDTO = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            dni: e.target[4].value,
            phone: e.target[3].value,
            email: e.target[2].value
        }
        let apartmentDTO = {
            buildingName: e.target[6].value,
            apartmentNumber: e.target[6].value
        }
        if (roleName === "ROLE_RESIDENT") {
            apartmentDTO = {
                buildingName: e.target[6].value.split('-')[0],
                apartmentNumber: e.target[6].value.split('-')[1]
            }
            companyName = ""
        }
        if (roleName === "ROLE_GUARD") {
            apartmentDTO = {
                buildingName: "",
                apartmentNumber: ""
            }
            companyName = e.target[6].value;
        }

        AuthService.registerPerson(
            personDTO, roleName, apartmentDTO, companyName
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

    if (roles) {
        return (
            <div className='card container-sm d-flex justify-content-center align-items-center col-auto' id="card">
                <form className='container d-flex flex-column' id="form" onSubmit={handleRegister2}>
                    <img className="mb-4" src={require('../images/Logo.png')} alt="" width="120" height="120" />
                    <h3 className='mx-auto flex align-center fw-bold' id="title">Registro</h3>
                    <div className="form-floating" id="input-form">
                        <input type="name" name="nombre" className="form-control" id="floatingName" placeholder="name" value={form.name} onChange={handleOnChange2} required></input>
                        <label className="form-label" htmlFor="floatingInput">Nombres</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="lastname" name="apellidos" className="form-control" id="floatingLastNames" placeholder="lastname" value={form.lastname} onChange={handleOnChange2} required></input>
                        <label className="form-label" htmlFor="floatingInput">Apellidos</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="email" name="email" className="form-control" id="floatingEmail" placeholder="name@example.com" value={form.email} onChange={handleOnChange2} required></input>
                        <label className="form-label" htmlFor="floatingInput">Correo electronico</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="tel" className="form-control" id="floatingCompany" placeholder="telefono" value={form.telefono} onChange={handleOnChange2} required></input>
                        <label className="form-label" htmlFor="floatingInput">Telefono</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="number" name="cedula" className="form-control" id="floatingCedula" placeholder="Password" value={form.cedula} onChange={handleOnChange2} required></input>
                        <label className="form-label" htmlFor="floatingCedula">Cedula</label>
                    </div>
                    <label htmlFor="rol-selector" className="form-label">Seleccione rol</label>
                    <select required className="form-select" id="rol-selector" value={rolNamed} aria-label="Seleccionar Rol" onChange={handleOnChange}>
                        <option>Seleccione el Rol</option>
                        {roles.map((role) => (
                            <option value={role.roleName}>
                                {role.roleName}
                            </option>
                        ))}
                    </select>
                    <div className="invalid-feedback">
                        Seleccione un rol por favor.
                    </div>
                    {residentContentVisible && <RegisterResident />}
                    {vigilantContentVisible && <RegisterVigilant />}
                    <ButtonGreen id="submit-button" text="Registrar persona" type="Submit" />
                </form>
            </div>
        )
    }
    else {
        return (<div> Cargando datos. Por favor contactar el administrador de la aplicación si toma mucho tiempo.</div>)
    }
}


export default Register;
