import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/registerCard.css';
import ButtonGreen from './ButtonGreen';
import AuthService from '../services/auth.service';
import authHeader from '../services/auth-header';
import TitleCard from './TitleCard';


const RegisterUser = (props) => {
    const FRONT_URL = process.env.REACT_APP_FRONT_URL;
    const [form, setForm] = useState({ email: "" });
    const [roles, setRoles] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
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
    }, [API_URL]);

    const handleOnChange2 = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleRegister2 = (e) => {
        e.preventDefault();
        let email = e.target[0].value;
        let password = e.target[1].value;
        let codigo = e.target[2].value;
        let roleName = e.target[3].value;
        console.log(email + " , " + password + " , " + codigo, ", " + roleName)
        AuthService.signUp(
            email, password, roleName, codigo
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
                    <TitleCard text="Registro Usuario" />
                    <div className="form-floating" id="input-form">
                        <input type="email" name="email" className="form-control" id="floatingEmail" placeholder="name@example.com" value={form.email} onChange={handleOnChange2} required></input>
                        <label className="form-label" htmlFor="floatingInput">Correo electronico</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="password" name="contrasena" className="form-control" id="floatingPassword" placeholder="Password" value={form.password} onChange={handleOnChange2} required></input>
                        <label className="form-label" htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="text" name="codigo" className="form-control" id="floatingCode" placeholder="Codigo" value={form.codigo} onChange={handleOnChange2} required></input>
                        <label className="form-label" htmlFor="floatingCode">Codigo Usuario</label>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="selector" className="form-label">Seleccione rol</label>
                        <select required className="form-select" id="rol-selector" value={form.roleName}>
                            <option></option>
                            {roles.map((role) => (
                                <option value={role.roleName}>
                                    {role.roleName}
                                </option>
                            ))}
                        </select>
                        <div className="invalid-feedback">
                            Seleccione un rol por favor.
                        </div>
                    </div>
                    <ButtonGreen id="submit-button" text="Registrarme" type="Submit" />
                    <p id="text-extra">¿Ya tienes una cuenta?<br></br>
                        <a href={FRONT_URL + "/login"} onClick={props.fLogin}>Iniciar Sesión</a>
                    </p>
                </form>
            </div>
        )
    }
    else {
        return (<div>Cargando aplicación, por favor espere ...</div>)
    }

}



export default RegisterUser;
