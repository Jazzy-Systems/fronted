import React from 'react';
import '../styles/aboutUs.css';
import Mision from '../images/mision.png'
import Vision from '../images/objetivo.png'
import Valores from '../images/grupo-de-trabajo.png'

const AboutUs = (props) => {
    

    return (
        <div className="container px-5 py-5" id="featured-3">
            <h1 className="pb-2 border-bottom" id="title-AboutUs">Sobre Nosotros</h1>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
                <div className="feature col" id="item-AboutUs">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center mb-3">
                        <img className="mb-4" src={Mision} alt="" width="150" height="150" id="cardIcon" />
                    </div>
                    <h3 className="fs-2" id = "title-card">Misión</h3>
                    <p id="text-AboutUs">Jazzy System es una plataforma web que brinda apoyo en los procesos  relacionados a la interacción y comunicación entre vigilantes, residentes y administración, con ello mejorar la convivencia y bienestar dentro de un conjunto residencial.</p>
                </div>
                <div className="feature col" id="item-AboutUs">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center mb-3">
                        <img className="mb-4" src={Vision} alt="" width="150" height="150" id="cardIcon" />
                    </div>
                    <h3 className="fs-2">Visión</h3>
                    <p id="text-AboutUs">Para año 2024, Jazzy System será una plataforma web que realiza seguimiento a los diferentes procesos  en los conjuntos residenciales de Colombia de forma agil y transparente permitiendo que aumente el nivel de confianza entre los involucrados.</p>
                </div>
                <div className="feature col" id="item-AboutUs">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center mb-3">
                        <img className="mb-4" src={Valores} alt="" width="150" height="150" id="cardIcon" />
                    </div>
                    <h3 className="fs-2">Valores</h3>
                    <p id="text-AboutUs">Autodisciplina,Responsabilidad,{'\n'}Cooperación,Constancia y Respeto.</p>
                </div>
            </div>
        </div>
    )
}


export default AboutUs;
