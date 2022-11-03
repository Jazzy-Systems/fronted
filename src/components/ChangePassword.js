import React, { Component } from 'react';
import { useState } from 'react';
import TitleCard from './TitleCard';
import ButtonGreen from './ButtonGreen';
import '../styles/createCommunique.css';
import { useLocation } from 'react-router-dom';
import authService from '../services/auth-service';

const ChangePassword = (props) => {
    const [form, setForm] = useState({ email: "", currentPassword: "", newPassword: "" });

    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    const changePassword = (e) => {
        e.preventDefault();
        console.log(form)
        authService.changePassword(form.email, form.currentPassword, form.newPassword).then(
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
            <form className='form-Communique' onSubmit={changePassword}>
                <div className="form-floating" id="input-form">
                    <input type="email" name="email" className="form-control" id="floatingName" placeholder="name" value={form.title} onChange={handleOnChange} required></input>
                    <label className="form-label" htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating" id="input-formDescripcion">
                    <textarea type="password" name="currentPassword" className="form-control" id="floatingDescripcion" placeholder="descripcion" value={form.currentPassword} onChange={handleOnChange} required></textarea>
                    <label className="form-label" htmlFor="floatingInput">Contraseña Actual</label>
                </div>
                <div className="form-floating" id="input-formDescripcion">
                    <textarea type="text" name="newPassword" className="form-control" id="floatingDescripcion" placeholder="descripcion" value={form.newPassword} onChange={handleOnChange} required></textarea>
                    <label className="form-label" htmlFor="floatingInput">Contraseña nueva</label>
                </div>
                <ButtonGreen id="submit-button" text="Cambiar contraseña" type="Submit" />
            </form>
        </div>
    )
}

export default ChangePassword;
