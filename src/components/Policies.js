import React from 'react';
import '../styles/aboutUs.css';
import Personal from '../images/personal.png'
import Privacidad from '../images/privacidad.png'

const Policies = (props) => {

    return (
        <div className="container" id="featured-3">
            <h1 className="border-bottom" id="title-AboutUs">Politicas y tratamiento de datos</h1>
            <div className="row container justify-content-center">
                <div className="col" id="item-AboutUs">
                    <div className="feature-icon align-items-center justify-content-center mb-3">
                        <img className="rounded mx-auto d-block mb-5 mt-3" src={Privacidad} alt="" width="150" height="150" id="cardIcon" />
                    </div>
                    <h3 className="fs-2" id="title-card">Términos de uso</h3>
                    <p id="text-AboutUs">Los datos ingresados como cedula, nombre y apellidos al sistema deben ser verídicos tal como se registran en el documento de identificación nacional (DNI).
                        El uso de la plataforma se debe hacer de forma responsable e integral, cualquier tipo de suplantación será tratado como se indica en el código penal Artículo 296.</p>
                </div>
                <div className="col" id="item-AboutUs">
                    <div className="feature-icon align-items-center justify-content-center mb-3">
                        <img className="rounded mx-auto d-block mb-5 mt-3" src={Personal} alt="" width="150" height="150" id="cardIcon" />
                    </div>
                    <h3 className="fs-2">Política de privacidad</h3>
                    <p id="text-AboutUs">Recuerde que sus datos son almacenados y tratados según la ley de Protección de Datos Personales en Colombia o Ley 1581 de 2012. Donde se reconoce y protege el derecho que tienen todas las personas a conocer, actualizar y rectificar la información que se haya recogido sobre ellas en bases de datos.
                        Para más información puede consultar <a href='https://www.minambiente.gov.co/' target="_blank" rel="noopener noreferrer">https://www.minambiente.gov.co/</a> Protección de datos personales o en el <a href="https://www.minambiente.gov.co/politica-de-proteccion-de-datos-personales/#:~:text=Ley%20de%20Protecci%C3%B3n%20de%20Datos,de%20naturaleza%20p%C3%BAblica%20o%20privada">enlace.</a></p>
                </div>
            </div>
        </div>
    )
}


export default Policies;
