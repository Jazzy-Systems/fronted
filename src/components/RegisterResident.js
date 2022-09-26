import React, { Component } from 'react';
import '../styles/modules.css';
const RegisterResident = (props) => {
    
    return(
        <div>
            <div className="form-floating" id="input-form">
                <input type="tel" className="form-control" id="floatingCompany" placeholder="telefono"></input>
                <label className = "text-input" htmlFor="floatingInput">Telefono</label>
            </div>
            <div className="form-floating" id="input-form">
                <input type="name" className="form-control" id="floatingPassword" placeholder="Apartamento"></input>
                <label className = "text-input" htmlFor="floatingPassword">Apartamento</label>
            </div>
        </div>
    )
}

export default RegisterResident;


                    