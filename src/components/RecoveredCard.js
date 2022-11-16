import React, { Component } from 'react';
import '../styles/recoveredCard.css';
import ButtonGreen from './ButtonGreen';
import TitleCard from './TitleCard';
const RecoveredCard = () => {
        return (
            <div className='contenedor-form-recovered'>
                <form className='form-recovered'>
                    <TitleCard text="Recuperar Contraseña"/>
                    <div className="form-floating" id="input-form">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" required></input>
                        <label className = "text-input" htmlFor="floatingInput">Correo electronico</label>
                    </div>
                    <ButtonGreen id = "submit-button" text="Enviar Link" type="Submit"/>
                    <img className="mb-4" src={require('../images/mail-symbol.png')} alt="" width="180" height="120" />
                </form>
            </div>
        )
}

export default RecoveredCard;