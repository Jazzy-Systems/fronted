import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import '../styles/modules.css';
import authHeader from '../services/auth-header';
const RegisterResident = (props) => {
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
                <div className="col-md-7">
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
}

export default RegisterResident;
