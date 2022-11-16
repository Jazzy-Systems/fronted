import { useState } from 'react';
import TitleCard from './TitleCard';
import ButtonGreen from './ButtonGreen';
import '../styles/createCommunique.css';
import AuthService from "../services/auth.service";

const RequestRecoverPassword = (props) => {
    const [form, setForm] = useState({ email: "" });

    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const [resMessage, setResMessage] = useState(null);
    const requestRecoveryPassword = (e) => {
        e.preventDefault();
        AuthService.requestRecoveryPassword(form.email).then(
            () => {
                alert("A su correo llegara")
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
            <TitleCard text="Change Password" />
            <form className='form-Communique' onSubmit={requestRecoveryPassword}>
                <div className="form-floating" id="input-form">
                    <input type="email" name="email" className="form-control" id="floatingName" placeholder="name" value={form.email} onChange={handleOnChange} required></input>
                    <label className="form-label" htmlFor="floatingInput">Email</label>
                </div>
                <ButtonGreen id="submit-button" text="Recuperar contraseña" type="Submit" />
            </form>
            <div>
                <span>{resMessage}</span>
            </div>
        </div>
    )
}

export default RequestRecoverPassword;
