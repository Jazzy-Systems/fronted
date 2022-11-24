import React from 'react';
import '../styles/aboutUs.css';
import Mision from '../images/mision.png'
import Vision from '../images/objetivo.png'
import Valores from '../images/grupo-de-trabajo.png'

const AboutUs = (props) => {


    return (
        <div className="container" id="featured-3">
            <div className="container row justify-content-center">
                <h1 className="border-bottom" id="title-AboutUs">Sobre Nosotros</h1>
                <div className="col" id="item-AboutUs">
                    <div className="align-items-center">
                        <img className="rounded mx-auto d-block mb-5 mt-3" src={Mision} alt="" width="150" height="150" />
                    </div>
                    <h3 id="title-card">Misión</h3>
                    <p id="text-AboutUs">Jazzy System es una plataforma web que brinda apoyo en los procesos relacionados a la interacción y comunicación entre vigilantes, residentes y administración, con ello mejorar la convivencia y bienestar dentro de un conjunto residencial.</p>
                </div>
                <div className="col" id="item-AboutUs">
                    <div className=" align-items-center">
                        <img className="rounded mx-auto d-block mb-5 mt-3" src={Vision} alt="" width="150" height="150" />
                    </div>
                    <h3 id="title-card">Visión</h3>
                    <p id="text-AboutUs">Para año 2024, Jazzy System será una plataforma web que realiza seguimiento a los diferentes procesos  en los conjuntos residenciales de Colombia de forma agil y transparente permitiendo que aumente el nivel de confianza entre los involucrados.</p>
                </div>
                <div className="col" id="item-AboutUs">
                    <div className="align-items-center">
                        <img className="rounded mx-auto d-block mb-5 mt-3" src={Valores} alt="" width="150" height="150" />
                    </div>
                    <h3 id="title-card">Valores</h3>
                    <p id="text-AboutUs">Autodisciplina,Responsabilidad,{'\n'}Cooperación,Constancia y Respeto.</p>
                </div>
            </div>
        </div>
    )
}


export default AboutUs;
