import React from 'react';
import '../styles/homeCard.css';
import ButtonGreen from './ButtonGreen';
import TitleCard from './TitleCard';
const Home = (props) => {
    const FRONT_URL = process.env.REACT_APP_FRONT_URL;
    return (
        <div className='contenedor-form-home'>
            <form className='form-home'>
                <img className="mb-4" src={require('../images/Logo.png')} alt="" width="120" height="120" />
                <TitleCard text="Escoja Su Rol" />
                <ButtonGreen id="choose-rol" text="Administrador" type="button" />
                <ButtonGreen id="choose-rol" text="Residente" type="button" fLogin={props.fLogin} />
                <ButtonGreen id="choose-rol" text="Vigilancia" type="button" />
                <p id="text-extra">¿No tienes una cuenta?<br></br>
                    <a href={FRONT_URL + "/registerUser"} onClick={props.fRegister}>Registrarse</a>
                </p>

            </form>
        </div>
    )
}

export default Home;
