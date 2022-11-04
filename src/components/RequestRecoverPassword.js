import React, { Component } from 'react';
import { useState } from 'react';
import TitleCard from './TitleCard';
import ButtonGreen from './ButtonGreen';
import '../styles/createCommunique.css';
import AuthService from "../services/auth.service";


const RequestRecoverPassword = (props) => {
    const [form, setForm] = useState({ email: "" });

    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    const requestRecoveryPassword = (e) => {
        e.preventDefault();
        console.log(form)
        AuthService.requestRecoveryPassword(form.email).then(
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
            }
        );
    }

    return (
        <div className='contenedor-createCommunique'>
            <TitleCard text="Change Password" />
            <form className='form-Communique' onSubmit={requestRecoveryPassword}>
                <div className="form-floating" id="input-form">
                    <input type="email" name="email" className="form-control" id="floatingName" placeholder="name" value={form.email} onChange={handleOnChange} required></input>
                    <label className="form-label" htmlFor="floatingInput">Email</label>
                </div>
                <ButtonGreen id="submit-button" text="Recuperar contraseña" type="Submit" />
            </form>
        </div>
    )
}

export default RequestRecoverPassword;
