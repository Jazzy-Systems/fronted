import React, { Component } from 'react';
import { useState } from 'react';
import TitleCard from './TitleCard';
import ButtonGreen from './ButtonGreen';
import '../styles/createCommunique.css';
import { useLocation } from 'react-router-dom';
import communiqueService from '../services/communique-service';

const CreateCommunique = (props) => {
    const [form, setForm] = useState({ type: "" });

    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    const newCommunique = (e) => {
        e.preventDefault();
        console.log(form)
        communiqueService.save(form.nombre, form.descripcion, form.type).then(
            () => {
                alert("Se ha publicado el comunicado, existosamente.")
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
            <TitleCard text="Crear Comunicado" />
            <form className='form-Communique' onSubmit={newCommunique}>
                <div className="form-floating" id="input-form">
                    <input type="name" name="nombre" className="form-control" id="floatingName" placeholder="name" value={form.title} onChange={handleOnChange} required></input>
                    <label className="form-label" htmlFor="floatingInput">Titulo</label>
                </div>
                <div className="form-floating" id="input-formDescripcion">
                    <textarea type="text" name="descripcion" className="form-control" id="floatingDescripcion" placeholder="descripcion" value={form.descripcion} onChange={handleOnChange} required></textarea>
                    <label className="form-label" htmlFor="floatingInput">Descripcion</label>
                </div>
                <label htmlFor="selector" className="form-label">Tipo</label>
                <select required name="type" className="form-select" id="type-selector" value={form.type} onChange={handleOnChange}>
                    <option></option>
                    <option>Evento</option>
                    <option>Reparacion</option>
                    <option>Aviso</option>
                </select>
                <ButtonGreen id="submit-button" text="Crear" type="Submit" />
            </form>
        </div>
    )
}

export default CreateCommunique;
