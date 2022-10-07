import React from 'react';
import '../styles/releaseCard.css';
import aviso from '../images/megaphone.svg'
import ButtonGreen from './ButtonGreen';

function ReleaseCard() {

    return (

        <div className="d-md-flex flex-md-equal my-md-3 ps-md-3" id="container-cardRelease">
            <div className="row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id = "cardRelease">
                <div className="col p-4 d-flex flex-column position-static" id = "p-contentCard">
                    <strong className="d-inline-block mb-2 text-dark">Reparacion</strong>
                    <h3 className="mb-0" >Reparación Tuberias Piso 1</h3>
                    <div className="mb-1 text-muted">Octubre 31 2022</div>
                    <p className="card-text" id = "p-contentCard-text">El dia 8 de septiembre del 2022, se hara una reparación por parte de la empresa
                     PLOMERIA S.A.S a las tuberias del piso 1 por daños causados por un fuerte golpe a una tuberia, el servicio de 
                     acueduto sera cortado entre 2:00 pm - 4: 00 pm, lamentamos los inconvenientes. </p>
                    <div className='more-card'>
                        <div>
                            <a href="#" className="stretched-link">Leer mas...</a>
                        </div>
                        <div>
                            <ButtonGreen id = "edit-card" text="Editar" type="button"/>
                        </div>
                    </div>
                    
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img className="mb-4" src={aviso} alt="" width="150" height="150" id = "cardIcon" />
                </div>
            </div>
        </div>
    );
}

export default ReleaseCard;

// creation_date
// description
// communique_type
// communique_title