import { useState } from 'react';
import ButtonGreen from './ButtonGreen';
import '../styles/basic.css';
import AuthService from "../services/auth.service";
import AlertNavigate from './AlertNavigate';

const RequestRecoverPassword = (props) => {
    const [form, setForm] = useState({ email: "" });
    const [resMessage, setResMessage] = useState(null);
    const [success, setSuccess] = useState(null);
    const [navigateTo, setNavigateTo] = useState("/")

    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const requestRecoveryPassword = (e) => {
        e.preventDefault();
        AuthService.requestRecoveryPassword(form.email).then(
            () => {
                setResMessage("Se ha enviado al correo los pasos para recuperar la contraseña.");
                setSuccess(true)
                setNavigateTo("/recoverPassword")
            },
            error => {
                setResMessage(
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString());
                setSuccess(false);
                setNavigateTo("/")
            }
        );
    }

    return (
        <div className='card container-sm d-flex justify-content-center align-items-center col-auto' id="card">
            <form className='container d-flex flex-column' id="form" onSubmit={requestRecoveryPassword} >
                <h3 className='mx-auto flex align-center fw-bold' id="title">Enviar correo electrónico para recuperar contraseña</h3>
                <div className="form-floating" id="input-form">
                    <input type="email" name="email" className="form-control" id="floatingName" placeholder="name" value={form.email} onChange={handleOnChange} required></input>
                    <label className="form-label" htmlFor="floatingInput">Email</label>
                </div>
                <div className="mx-auto my-auto">
                    <ButtonGreen id="submit-button" text="Recuperar contraseña" type="Submit" />
                </div>
            </form >
            {success != null && (<AlertNavigate success={success} resMessage={resMessage} navigateTo={navigateTo} />)}
        </div >
    )
}

export default RequestRecoverPassword;
