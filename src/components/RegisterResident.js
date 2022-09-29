import React, { Component } from 'react';
import {useEffect,useState } from 'react';
import '../styles/modules.css';
const RegisterResident = (props) => {
    const[apartment, setApartment] = useState("");

    
    return(
        <div>
            <div className="col-md-5">
                <label htmlFor="selector" className="form-label">Torre-Apartamento</label>
                <select required className="form-select" id="rol-selector" value={apartment} onChange ={(e) => setApartment(e.target.value)}>
                    <option></option>
                    <option>A-101</option>
                    <option>A-102</option>
                </select>
                <div className="invalid-feedback">
                    Seleccione Torre-Apartamento por favor.
                </div>
            </div>
        </div>
        
    )
}

export default RegisterResident;
