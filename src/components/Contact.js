import React from 'react';
import '../styles/aboutUs.css';
import Llamada from '../images/llamada.png'
import Facebook from '../images/facebook.png'

const Contact = (props) => {
    

    return (
        <div className="container px-5 py-5" id="featured-3">
            <h1 className="pb-2 border-bottom" id="title-AboutUs">Contactanos</h1>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col" id="item-AboutUs">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center mb-3">
                        <img className="mb-4" src={Llamada} alt="" width="150" height="150" id="cardIcon" />
                    </div>
                    <h3 className="fs-2" id = "title-card">Información contacto</h3>
                    <p id="text-AboutUs">Correo: jazzysystem2022@gmail.com{'\n'}Cel: 3204795092</p>
                </div>
                <div className="feature col" id="item-AboutUs">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center mb-3">
                        <img className="mb-4" src={Facebook} alt="" width="150" height="150" id="cardIcon" />
                    </div>
                    <h3 className="fs-2">Red Social</h3>
                    <p id="text-AboutUs">Siganos en nuestra red social <a href = "https://www.facebook.com/JazzySystem">Facebook</a></p>
                </div>
            </div>
        </div>
    )
}


export default Contact;
