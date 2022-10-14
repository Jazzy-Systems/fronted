import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import '../styles/registerCard.css';
import ButtonGreen from './ButtonGreen';

import ApartmentService from '../services/apartment.service';
import TitleCard from './TitleCard';

const SaveApartment = (props) => {


    const [formValue, setformValue] = useState({ buildingName: "", apartmentNumber: "" });

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (e) => {
        // store the states in the form data
        e.preventDefault()
        const loginFormData = new FormData();
        loginFormData.append("buildingName", formValue.buildingName)
        loginFormData.append("apartmentNumber", formValue.apartmentNumber)
        // test getALl
        try {
            ApartmentService.getAll().then(
                (response) => {
                    //this.props.router.navigate("/profile");
                    console.log(response.data);
                    props.fProfile();
                    window.location.reload();
                })
        } catch (error) {
            console.log("Pailas");
            alert("No se puede crear el apartmento")
            formValue.apartmentNumber = "";
            formValue.buildingName = "";

        }
        try {
            ApartmentService.save(formValue.buildingName, formValue.apartmentNumber).then(
                () => {
                    //this.props.router.navigate("/profile");
                    props.fProfile();
                    window.location.reload();
                })
        } catch (error) {
            console.log("Pailas");
            alert("No se puede crear el apartmento")
            formValue.apartmentNumber = "";
            formValue.buildingName = "";

        }
    }


    return (
        <div className='contenedor-form-login'>
            <form onSubmit={handleSubmit} className='form-login'>
                <img className="mb-4" src={require('../images/Logo.png')} alt="" width="120" height="120" />
                <TitleCard text="Login" />
                <div className="form-floating" id="input-form">
                    <input type="text" className="form-control" id="buildingName" placeholder="Edificio"
                        name="buildingName"
                        value={formValue.buildingName}
                        onChange={handleChange} required></input>
                    <label className="text-input" htmlFor="buildingName">Edificio</label>
                </div>
                <div className="form-floating" id="input-form">
                    <input type="text" className="form-control" id="text" placeholder="Número de Apartmento"
                        name="apartmentNumber"
                        value={formValue.apartmentNumber}
                        onChange={handleChange} required></input>
                    <label className="text-input" htmlFor="Número de Apartmento">Apartmento</label>
                </div>
                <ButtonGreen id="submit-button" text="Guardar" type="Submit" />
            </form>
        </div>
    )
}


export default SaveApartment;
