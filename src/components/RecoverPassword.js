import React from 'react';
import { useState } from 'react';
import TitleCard from './TitleCard';
import ButtonGreen from './ButtonGreen';
import '../styles/createCommunique.css';
import AuthService from "../services/auth.service";

const RecoverPassword = (props) => {
    const [form, setForm] = useState({ email: "", currentPassword: "", newPassword: "" });

    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    const recoverPassword = (e) => {
        e.preventDefault();
        console.log(form)
        AuthService.recoverPassword(form.email, form.currentPassword, form.newPassword).then(
            () => {
                alert("Se ha cambiado la contraseña")
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                alert(resMessage);
            }
        );
    }

    return (
        <div className='contenedor-createCommunique'>
            <TitleCard text="Recuperar Contraseña" />
            <form className='form-Communique' onSubmit={recoverPassword}>
                <div className="form-floating" id="input-form">
                    <input type="email" name="email" className="form-control" id="floatingName" placeholder="name" value={form.email} onChange={handleOnChange} required></input>
                    <label className="form-label" htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating" id="input-form">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        name="currentPassword"
                        value={form.currentPassword}
                        onChange={handleOnChange} required></input>
                    <label className="text-input" htmlFor="floatingPassword">Contraseña Actual</label>
                </div>
                <div className="form-floating" id="input-form">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        name="newPassword"
                        value={form.newPassword}
                        onChange={handleOnChange} required></input>
                    <label className="text-input" htmlFor="floatingPassword">Contraseña Nueva</label>
                </div>
                <ButtonGreen id="submit-button" text="Guardar contraseña" type="Submit" />
            </form>
        </div>
    )
}

export default RecoverPassword;
