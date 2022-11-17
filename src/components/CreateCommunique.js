import { useState } from 'react';
import ButtonGreen from './ButtonGreen';
import '../styles/basic.css';
import communiqueService from '../services/communique-service';

const CreateCommunique = (props) => {
    const [form, setForm] = useState({ type: "" });
    const [resMessage, setResMessage] = useState(null);

    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const newCommunique = (e) => {
        e.preventDefault();
        communiqueService.save(form.nombre, form.descripcion, form.type).then(
            () => {
                alert("Se ha publicado el comunicado, existosamente.")
                window.location.reload(true);
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
        <div className='card container-sm d-flex justify-content-center align-items-center col-auto' id="card">
            <form className='container d-flex flex-column' onSubmit={newCommunique}>
                <h3 className='mx-auto flex align-center fw-bold' id="title">Publicar Comunicado</h3>
                <label htmlFor="type-selector" className="form-label">Tipo</label>
                <select required name="type" className="form-select" id="type-selector" value={form.type} onChange={handleOnChange}>
                    <option>Seleccione el tipo de comunicado</option>
                    <option>Evento</option>
                    <option>Reparacion</option>
                    <option>Aviso</option>
                </select>
                <div className="form-floating" id="input-form">
                    <input type="name" name="nombre" className="form-control" id="floatingName" placeholder="name" value={form.title} onChange={handleOnChange} required></input>
                    <label className="form-label" htmlFor="floatingInput">Titulo</label>
                </div>
                <div className="form-floating mb-5" id="input-form">
                    <textarea id="textarea" type="text" name="descripcion" className="form-control"
                        placeholder="descripcion" value={form.descripcion} onChange={handleOnChange} required></textarea>
                    <label className="form-label" htmlFor="floatingInput">Descripcion</label>
                </div>
                <div className="mx-auto my-auto mt-4">
                    <ButtonGreen id="submit-button" text="Crear" type="Submit" />
                </div>
            </form>
            <div>
                <span>{resMessage}</span>
            </div>
        </div>
    )
}

export default CreateCommunique;
