import { useState } from 'react';
import ButtonGreen from './ButtonGreen';
import authService from '../services/auth.service';
import '../styles/basic.css';
import AlertNavigate from './AlertNavigate';

const ChangePassword = (props) => {
    const [form, setForm] = useState({ email: "", currentPassword: "", newPassword: "" });
    const [resMessage, setResMessage] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    const changePassword = (e) => {
        e.preventDefault();
        console.log(form)
        authService.changePassword(form.email, form.currentPassword, form.newPassword).then(
            () => {
                setResMessage("se ha cambiado la contraseña");
                setSuccess(true)
            },
            error => {
                setResMessage(
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString());
                setSuccess(false);
            }
        );
    }

    return (
        <div className='card container-sm d-flex justify-content-center align-items-center col-auto' id="card">
            <form className='container d-flex flex-column' id="form" onSubmit={changePassword}>
                <h3 className='mx-auto flex align-center fw-bold' id="title">Cambiar contraseña</h3>
                <div className="form-floating" id="input-form">
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
            {success != null && (<AlertNavigate success={success} resMessage={resMessage} navigateTo='/profile' />)}
        </div>
    )
}

export default ChangePassword;
