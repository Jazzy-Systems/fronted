import { useEffect, useState } from 'react';
import TitleCard from './TitleCard';
import ButtonGreen from './ButtonGreen';
import '../styles/createCommunique.css';
import pqrsService from '../services/pqrs-service';
import authHeader from '../services/auth-header';

const CreatePqrs = (props) => {
    const [form, setForm] = useState({ type: "" });
    const [resMessage, setResMessage] = useState(null);
    const [typeRequests, setTypeRequests] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;

    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        }
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    API_URL + "/api/v1/typerequest/", requestOptions
                )
            ).json();
            setTypeRequests(data);
        };
        dataFetch();
    }, [API_URL]);

    const newPQRS = (e) => {
        e.preventDefault();
        console.log(form)
        const responseRequest = null;
        const statusRequest = false;
        const typeRequest = {
            typeRequestName: form.typeRequestName
        }
        pqrsService.save(form.titleRequest,
            form.descriptionRequest,
            responseRequest,
            statusRequest,
            typeRequest
        ).then(
            () => {
                alert("Se ha enviado la PQRS, existosamente.")
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

    if (typeRequests) {
        return (
            <div className='contenedor-createCommunique'>
                <TitleCard text="Realizar una PQRS" />
                <form className='form-Communique' onSubmit={newPQRS}>
                    <select required name="typeRequestName" className="form-select" id="type-selector" value={form.typeRequestName} onChange={handleOnChange}>
                        <option></option>
                        {typeRequests.map((typeRequest) => (
                            <option value={typeRequest.typeRequestName}>
                                {typeRequest.typeRequestName}
                            </option>
                        ))}
                    </select>
                    <div className="form-floating" id="input-form">
                        <input type="text" name="titleRequest" className="form-control" id="floatingName" placeholder="name" value={form.titleRequest} onChange={handleOnChange} required></input>
                        <label className="form-label" htmlFor="floatingInput">Titulo</label>
                    </div>
                    <div className="form-floating" id="input-formDescripcion">
                        <textarea type="text" name="descriptionRequest" className="form-control" id="floatingDescripcion" placeholder="descripcion" value={form.descriptionRequest} onChange={handleOnChange} required></textarea>
                        <label className="form-label" htmlFor="floatingInput">Descripcion</label>
                    </div>
                    <label htmlFor="selector" className="form-label">Tipo</label>

                    <ButtonGreen id="submit-button" text="Crear" type="Submit" />
                </form>
                <div>
                    <span>{resMessage}</span>
                </div>
            </div>
        )
    }
    else return (<div><h2>Cargando</h2></div>)
}

export default CreatePqrs;
