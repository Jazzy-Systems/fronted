import React from 'react';
import '../styles/packageCard.css';
import Entregado from '../images/Entregado.png'
import NoEntregado from '../images/NoEntregado.png'
import ButtonGreen from './ButtonGreen';

function PQRScard(props) {

    const getIcon = () => {
        if (props.request.statusRequest === true) {
            return <div className="col-auto d-none d-lg-block">
                <img className="mb-4" src={Entregado} alt="" width="150" height="150" id="cardIcon" />
            </div>
        }
        if (props.request.statusRequest === false) {
            return <div className="col-auto d-none d-lg-block">
                <img className="mb-4" src={NoEntregado} alt="" width="150" height="150" id="cardIcon" />
            </div>
        }
    }
    const getState = () => {
        if (props.package.received === true) {
            return "Entregado"
        }
        if (props.package.received === false) {
            return "No Entregado"
        }
    }

    return (

        <div className="d-md-flex flex-md-equal my-md-3 ps-md-3" id="container-cardRelease">
            <div className="row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cardRelease">
                <div className="col p-4 d-flex flex-column position-static" id="p-contentCard">
                    <strong className="d-inline-block mb-2 text-dark">Fecha de solicitud: {props.request.dateRequest}</strong>
                    <h2 className="mb-0" >Tipo paquete: {props.request.typeRequest.typeRequestName}</h2>
                    <div className="mb-1 text-muted">Descripción: {props.request.requestDescription}</div>
                    <p className="card-text" id="p-contentCard-text">Respuesta: {props.request.requestResponse}</p>
                    <div className='more-card'>
                        <div>
                            <ButtonGreen id="edit-card" text={"Estado: " + getState()} type="button" />
                        </div>
                    </div>

                </div>
                {getIcon()}
            </div>
        </div>
    );
}

export default PQRScard;
