import React from 'react';
import { useState } from 'react';
import ButtonGreen from './ButtonGreen';
import AuthService from "../services/auth.service";
import AlertNavigate from './AlertNavigate';

const RecoverPassword = (props) => {
    const [form, setForm] = useState({ email: "", currentPassword: "", newPassword: "" });
    const [success, setSuccess] = useState(null);
    const [resMessage, setResMessage] = useState(null);
    const [navigateTo, setNavigateTo] = useState("/profile");

    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const recoverPassword = (e) => {
        e.preventDefault();
        console.log(form)
        AuthService.recoverPassword(form.email, form.currentPassword, form.newPassword).then(
            () => {
                setResMessage("Se ha cambiado la contraseña correctamente");
                setSuccess(true);
                setNavigateTo("/")
            },
            error => {
                setResMessage(
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString());
                setSuccess(false);
                setNavigateTo("/recoverPassword")
            }
        );
    }

    return (
        <div className='card container-sm d-flex justify-content-center align-items-center col-auto' id="login">
            <form className='container d-flex flex-column' id="form" onSubmit={recoverPassword}>
                <h3 className='mx-auto flex align-center fw-bold' id="title">Recuperar contraseña</h3>
                <div className="form-floating" id="input-form" >
                    <input type="email" name="email" className="form-control" id="floatingName" placeholder="name" value={form.email} onChange={handleOnChange} required></input>
                    <label className="form-label" htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating" id="input-form">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        name="currentPassword"
                        value={form.currentPassword}
                        onChange={handleOnChange} required></input>
                    <label className="form-label" htmlFor="floatingPassword">Contraseña actual</label>
                </div>
                <div className="form-floating" id="input-form">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        name="newPassword"
                        value={form.newPassword}
                        onChange={handleOnChange} required></input>
                    <label className="form-label" htmlFor="floatingPassword">Contraseña nueva</label>
                </div>
                <div className="mx-auto my-auto">
                    <ButtonGreen id="submit-button" text="Guardar contraseña" type="Submit" />
                </div>
            </form>
            {success != null && (<AlertNavigate success={success} resMessage={resMessage} navigateTo={navigateTo} />)}
        </div>
    )
}

export default RecoverPassword;
