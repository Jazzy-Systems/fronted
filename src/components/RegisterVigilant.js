import React, { Component } from 'react';
import {useEffect,useState } from 'react';
import '../styles/modules.css';
const RegisterVigilant = (props) => {
    const[nameCompany, setNameCompany] = useState("");
    const[phoneCompany, setPhoneCompany] = useState("");

    return(
        <div>
            <div className="form-floating" id="input-form">
                <input type="name" className="form-control" id="floatingEmail" placeholder="nombre-compañia" value={nameCompany} onChange ={(e) => setNameCompany(e.target.value)} required></input>
                <label className = "form-label" htmlFor="floatingInput">Nombre Compañia</label>
            </div>
            <div className="form-floating" id="input-form">
                <input type="tel" className="form-control" id="floatingPassword" placeholder="Telefono" value={phoneCompany} onChange ={(e) => setPhoneCompany(e.target.value)} required></input>
                <label className = "form-label" htmlFor="floatingPassword">Telefono Compañia</label>
            </div>
        </div>
    )
}

export default RegisterVigilant;