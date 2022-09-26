import React, { Component } from 'react';
import '../styles/modules.css';
const RegisterVigilant = (props) => {
    
    return(
        <div>
            <div className="form-floating" id="input-form">
                <input type="name" className="form-control" id="floatingEmail" placeholder="nombre-compañia"></input>
                <label className = "text-input" htmlFor="floatingInput">Nombre Compañia</label>
            </div>
            <div className="form-floating" id="input-form">
                <input type="tel" className="form-control" id="floatingPassword" placeholder="Telefono"></input>
                <label className = "text-input" htmlFor="floatingPassword">Telefono Compañia</label>
            </div>
        </div>
    )
}

export default RegisterVigilant;