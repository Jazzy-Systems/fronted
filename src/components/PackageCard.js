import React from 'react';
import '../styles/releaseCard.css';
import Entregado from '../images/Entregado.png'
import NoEntregado from '../images/NoEntregado.png'
import ButtonGreen from './ButtonGreen';

function PackageCard(props) {

        return (

        <div className="d-md-flex flex-md-equal my-md-3 ps-md-3" id="container-cardRelease">
            <div className="row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cardRelease">
                <div className="col p-4 d-flex flex-column position-static" id="p-contentCard">
                    <strong className="d-inline-block mb-2 text-dark">Fecha recibido</strong>
                    <h3 className="mb-0" >Tipo paquete</h3>
                    <div className="mb-1 text-muted">Entregado por</div>
                    <p className="card-text" id="p-contentCard-text">Observaciones</p>
                    <div className='more-card'>
                        <div>
                            <ButtonGreen id="edit-card" text="Estado" type="button" />
                        </div>
                    </div>

                </div>
                <div className="col-auto d-none d-lg-block">
                    <img className="mb-4" src={NoEntregado} alt="" width="150" height="150" id="cardIcon" />
                </div>
            </div>
        </div>
    );
}

export default PackageCard;