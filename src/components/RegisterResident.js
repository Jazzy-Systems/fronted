import React, { Component } from 'react';
import {useEffect,useState } from 'react';
import '../styles/modules.css';
const RegisterResident = (props) => {
    const[phone, setPhone] = useState("");
    const[apartment, setApartment] = useState("");

    
    return(
        <div>
            <div className="form-floating" id="input-form">
                <input type="tel" className="form-control" id="floatingCompany" placeholder="telefono" value={phone} onChange ={(e) => setPhone(e.target.value)}></input>
                <label className = "form-label" htmlFor="floatingInput">Telefono</label>
            </div>
            <div className="form-floating" id="input-form">
                <input type="name" className="form-control" id="floatingPassword" placeholder="Apartamento" value={apartment} onChange ={(e) => setApartment(e.target.value)}></input>
                <label className = "form-label" htmlFor="floatingPassword">Apartamento</label>
            </div>
        </div>
    )
}

export default RegisterResident;


                    