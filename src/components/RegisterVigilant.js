import React, { Component } from 'react';
import {useEffect,useState } from 'react';
import '../styles/modules.css';
const RegisterVigilant = (props) => {
    const[nameCompany, setNameCompany] = useState("");

    return(
        <div>
            <div className="form-floating" id="input-form">
                <input type="name" className="form-control" id="floatingEmail" placeholder="nombre-compañia" value={nameCompany} onChange ={(e) => setNameCompany(e.target.value)} required></input>
                <label className = "form-label" htmlFor="floatingInput">Nombre Compañia</label>
            </div>
        </div>
    )
}

export default RegisterVigilant;