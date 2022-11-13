import React from 'react';
import '../styles/packageCard.css';
import Entregado from '../images/Entregado.png'
import NoEntregado from '../images/NoEntregado.png'
import ButtonGreen from './ButtonGreen';

function PackageCard(props) {

    const getIcon = () => {
        if (props.package.received === true) {
            return <div className="col-auto d-none d-lg-block">
                <img className="mb-4" src={Entregado} alt="" width="150" height="150" id="cardIcon" />
            </div>
        }
        if (props.package.received === false) {
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
                    <strong className="d-inline-block mb-2 text-dark">Fecha recibido: {props.package.dateArrival}</strong>
                    <h2 className="mb-0" >Tipo paquete: {props.package.typePack}</h2>
                    <div className="mb-1 text-muted">Entregado por: {props.package.messengerName}</div>
                    <p className="card-text" id="p-contentCard-text">Observaciones: {props.package.observation}</p>
                    <div className='more-card'>
                        <div>
                            <ButtonGreen id="edit-card" text={"Estado: "+getState()} type="button" />
                        </div>
                    </div>

                </div>
                {getIcon()}
            </div>
        </div>
    );
}

export default PackageCard;