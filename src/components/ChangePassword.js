import { useState } from 'react';
import TitleCard from './TitleCard';
import ButtonGreen from './ButtonGreen';
import '../styles/createCommunique.css';
import authService from '../services/auth.service';

const ChangePassword = (props) => {
    const [form, setForm] = useState({ email: "", currentPassword: "", newPassword: "" });
    const [resMessage, setResMessage] = useState(null);
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
                setResMessage(
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString());
            }
        );
    }

    return (
        <div className='contenedor-createCommunique'>
            <TitleCard text="Recuperar Contraseña" />
            <form className='form-Communique' onSubmit={changePassword}>
                <div className="form-floating" id="input-form">
                    <input type="email" name="email" className="form-control" id="floatingName" placeholder="name" value={form.email} onChange={handleOnChange} required></input>
                    <label className="form-label" htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating" id="input-form">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        name="currentPassword"
                        value={form.currentPassword}
                        onChange={handleOnChange} required></input>
                    <label className="text-input" htmlFor="floatingPassword">Contraseña</label>
                </div>
                <div className="form-floating" id="input-form">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        name="newPassword"
                        value={form.newPassword}
                        onChange={handleOnChange} required></input>
                    <label className="text-input" htmlFor="floatingPassword">Contraseña</label>
                </div>
                <ButtonGreen id="submit-button" text="Guardar contraseña" type="Submit" />
            </form>
            <div>
                <span>{resMessage}</span>
            </div>
        </div>
    )
}

export default ChangePassword;
