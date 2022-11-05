import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import TitleCard from './TitleCard';
import ButtonGreen from './ButtonGreen';
import '../styles/editPersonCard.css';
import { useLocation } from 'react-router-dom';

import authHeader from '../services/auth-header';
import PersonService from '../services/person-service';
import communiqueService from '../services/communique-service';

const CreatePackage = (props) => {
    const [apartment, setApartment] = useState("");

    const [apartments, setApartments] = useState(null);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        }
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "http://localhost:8081/api/v1/apartment/", requestOptions
                )
            ).json();
            console.log(data);
            // set state when the data received
            setApartments(data);
        };
        dataFetch();
    }, []);

    if (apartments) {
        return (
            <div>
                <div className="col-md-5">
                    <label htmlFor="selector" className="form-label">Torre-Apartamento</label>
                    <select required className="form-select" id="rol-selector" value={apartment} onChange={(e) => setApartment(e.target.value)}>
                        <option></option>

                        {apartments.map((apartment) => (
                            <option value={apartment.buildingName + "-" + apartment.apartmentNumber}>
                                {apartment.buildingName + "-" + apartment.apartmentNumber}
                            </option>
                        ))}
                    </select>
                    <div className="invalid-feedback">
                        Seleccione Torre-Apartamento por favor.
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>Cargando datos</div>
        )
    }
    // const [form, setForm] = useState({ type: "" });

    // const handleOnChange = (e) => {
    //     setForm({ ...form, [e.target.name]: e.target.value })
    //     console.log(form)
    // }

    // const newPackage = (e) => {
    //     e.preventDefault();
    //     console.log(form)
    //     communiqueService.save(form.nombre, form.descripcion, form.type).then(
    //         () => {
    //             alert("Se ha registrado el paquete, exitosamente.")
    //         },
    //         error => {
    //             const resMessage =
    //                 (error.response &&
    //                     error.response.data &&
    //                     error.response.data.message) ||
    //                 error.message ||
    //                 error.toString();
    //         }
    //     );
    // }

    // return (
    //     <div className='contenedor-createCommunique'>
    //         <TitleCard text="Registrar Paquete" />
    //         <form className='form-Communique' onSubmit={newPackage}>
    //             <div className="form-floating" id="input-form">
    //                 <input type="name" name="nombre" className="form-control" id="floatingName" placeholder="name" value={form.title} onChange={handleOnChange} required></input>
    //                 <label className="form-label" htmlFor="floatingInput">Titulo</label>
    //             </div>
    //             <div className="form-floating" id="input-formDescripcion">
    //                 <textarea type="text" name="descripcion" className="form-control" id="floatingDescripcion" placeholder="descripcion" value={form.descripcion} onChange={handleOnChange} required></textarea>
    //                 <label className="form-label" htmlFor="floatingInput">Descripcion</label>
    //             </div>
    //             <label htmlFor="selector" className="form-label">Tipo</label>
    //             <select required name="type" className="form-select" id="type-selector" value={form.type} onChange={handleOnChange}>
    //                 <option></option>
    //                 <option>Evento</option>
    //                 <option>Reparacion</option>
    //                 <option>Aviso</option>
    //             </select>
    //             <ButtonGreen id="submit-button" text="Crear" type="Submit" />
    //         </form>
    //     </div>
    // )
}

export default CreatePackage;
