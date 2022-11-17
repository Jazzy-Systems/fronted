import React from 'react';
import { useState } from 'react';
import '../styles/editPersonCard.css';
import ButtonGreen from './ButtonGreen';
import TitleCard from './TitleCard';
import PersonService from '../services/person-service';

const EditPerson = (props) => {

    const [formDni, setFormDni] = useState({ dni: "" });
    const [person, setPerson] = useState(null);

    const handleDniChange = (event) => {
        setFormDni({
            ...formDni,
            [event.target.name]: event.target.value
        });
    }
    const handleOnChange = (event) => {
        event.preventDefault();
        setPerson({
            ...person,
            [event.target.name]: event.target.value
        });
    }

    const handleFindByDNI = (e) => {
        e.preventDefault();
        PersonService.findByDni(formDni.dni).then(
            (response) => {
                // todo setVisible = true
                setPerson(response.data);

            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                alert(resMessage + "error");
            }
        );
    }


    const handleRegister2 = (e) => {
        e.preventDefault();
        PersonService.update(
            person
        ).then(
            response => {
                alert("Se ha editado satisfactoriamente al usuario con dni " + response.data.dni)
                window.location.reload(true);
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                alert("Ha ocurrido un error,por favor revise los datos ingresados")
                console.log(resMessage)
            }
        );
    }

    return (
        <div className='card container-sm d-flex justify-content-center align-items-center col-auto' id="card">
            <form className='form-find-dni' onSubmit={handleFindByDNI}>
                <img className="mb-4" src={require('../images/Logo.png')} alt="" width="120" height="120" />
                <TitleCard text="Editar Persona" />
                <div className="form-floating" id="input-form">
                    <input type="number" name="dni" className="form-control" id="floatingFindDni"
                        value={formDni.dni} onChange={handleDniChange} required></input>
                    <label className="form-label" htmlFor="floatingFindDni">Cédula</label>
                </div>
                <ButtonGreen id="submit-button" text="Buscar Persona" type="Submit" />
            </form>

            {person && <div>
                <form className='form-register' onSubmit={handleRegister2}>
                    <div className="form-floating" id="input-form">
                        <input type="text" name="firstName" className="form-control" id="floatingName" value={person.firstName}
                            onChange={handleOnChange} required></input>
                        <label className="form-label" htmlFor="floatingName">Nombres</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="text" name="lastName" className="form-control" id="floatingLastNames" placeholder="lastname"
                            value={person.lastName} onChange={handleOnChange} required></input>
                        <label className="form-label" htmlFor="floatingLastNames">Apellidos</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="email" name="email" className="form-control" id="floatingEmail" placeholder="name@example.com"
                            value={person.email} onChange={handleOnChange} required></input>
                        <label className="form-label" htmlFor="floatingEmail">Correo</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="number" name="phone" className="form-control" id="floatingPhone" value={person.phone}
                            onChange={handleOnChange} required></input>
                        <label className="form-label" htmlFor="floatingPhone">Telefono</label>
                    </div>
                    <div className="form-floating" id="input-form">
                        <input type="number" name="dni" className="form-control" id="floatingCedula" placeholder="Password" value={person.dni}
                            onChange={handleOnChange} required></input>
                        <label className="form-label" htmlFor="floatingCedula">Cédula</label>
                    </div>
                    <ButtonGreen id="submit-button" text="Guardar" type="Submit" />
                </form>
            </div>
            }
        </div>
    )

}

export default EditPerson;
