import React from 'react';
import { useEffect, useState } from 'react';
import ButtonGreen from './ButtonGreen';
import '../styles/basic.css';
import authHeader from '../services/auth-header';
import PersonService from '../services/person-service';
import PackService from '../services/pack-service';

const CreatePackage = (props) => {
  const [apartment, setApartment] = useState("");
  const [apartments, setApartments] = useState(null);
  const [packages, setPackages] = useState({ messengerName: "", typePack: "", observation: "", id: "" });
  const [person, setPerson] = useState("");
  const [persons, setPersons] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;
  const handleOnChange = (event) => {
    event.preventDefault();
    setPackages({
      ...packages,
      [event.target.name]: event.target.value
    });
  }
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader()
    }
    const dataFetch = async () => {
      const data = await (
        await fetch(
          API_URL + "/api/v1/apartment/all", requestOptions
        )
      ).json();
      setApartments(data);
    };
    dataFetch();
  }, [API_URL]);

  const handleFindByApartment = (e) => {
    e.preventDefault();
    PersonService.findByApartment(findIdApartment(apartment)).then(
      (response) => {
        setPersons(response.data);
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

  const findIdApartment = (apartamento) => {
    for (let i = 0; i < apartments.length; i++) {
      if ((apartments[i].buildingName + "-" + apartments[i].apartmentNumber) === apartamento) {
        return apartments[i].apartmentId
      }
    }
  }
  const findIdPerson = (personChoosed) => {
    for (let i = 0; i < persons.length; i++) {
      if ((persons[i].firstName + " " + persons[i].lastName) === personChoosed) {
        return persons[i].personId
      }
    }
  }

  const handleRegister2 = (e) => {
    e.preventDefault();
    let messengerName = e.target[0].value;
    let typePack = e.target[1].value;
    let observation = e.target[2].value;
    let personDTO = {
      personId: findIdPerson(e.target[3].value),
    }
    console.log(messengerName + " , " + typePack + " , " + observation + " , " + personDTO.personId)
    PackService.save(
      messengerName, typePack, observation, personDTO
    ).then(
      response => {
        alert("Se ha registrado el paquete satisfactoriamente")
        window.location.reload(true);
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        alert("Ha ocurrido un error,por favor revise los datos ingresados." + resMessage)
      }
    );
  }

  if (apartments) {
    return (
      <div className='card container-sm d-flex justify-content-center align-items-center col-auto' id="card">
        <form className='form-find-dni' onSubmit={handleFindByApartment}>
          <div className="col-md-7">
            < label htmlFor="selector" className="form-label" > Torre - Apartamento</label >
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
          </div >
          <ButtonGreen id="submit-button" text="Buscar Residente" type="Submit" />

          {Object.keys(persons).length > 0 && <div className='card container-sm d-flex justify-content-center align-items-center col-auto' id="create-package ">
            <form className='container d-flex flex-column py-3' id="form" onSubmit={handleRegister2}>
              <label htmlFor="rol-selector" className="form-label">Residente asignado al paquete</label>
              <select required className="form-select" id="rol-selector" value={person.id} onChange={(e) => setPerson(e.target.value)}>
                <option></option>
                {persons.map((person) => (
                  <option value={person.firstName + " " + person.lastName}>
                    {person.firstName + " " + person.lastName}
                  </option>
                ))}
              </select>
              <div className="invalid-feedback">
                Seleccione un residente por favor
              </div>
              <div className="form-floating" id="input-form">
                <input type="text" name="messengerName" className="form-control" id="floatingName" value={packages.messengerName}
                  onChange={handleOnChange} required></input>
                <label className="form-label" htmlFor="floatingmessengerName">Nombre mensajero</label>
              </div>
              <div className="form-floating" id="input-form">
                <input type="text" name="typePack" className="form-control" id="floatingTypePack" placeholder="lastname"
                  value={packages.typePack} onChange={handleOnChange} required></input>
                <label className="form-label" htmlFor="floatingTypePack">Tipo paquete</label>
              </div>
              <div className="form-floating" id="input-form">
                <textarea id="textarea" type="textarea" name="observation" className="form-control"
                  value={packages.observation} onChange={handleOnChange} required></textarea>
                <label className="form-label" htmlFor="textarea">Observaciones</label>
              </div>
              <div className="mx-auto my-auto mt-5">
                <ButtonGreen id="submit-button" text="Guardar Paquete" type="Submit" />
              </div>
            </form>
          </div>}
        </form >

      </div >
    )
  }
  else {
    return (
      <div>Cargando datos</div>
    )
  }
}

export default CreatePackage;
