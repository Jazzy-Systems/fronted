import React from 'react';
import '../styles/releaseCard.css';
import aviso from '../images/aviso.svg'
import evento from '../images/evento.svg'
import reparacion from '../images/reparacion.svg'
import ButtonGreen from './ButtonGreen';

function ReleaseCard(props) {

    const getIcon = ()=>{
        if(props.communique.typeCommunique.typeName === "Aviso"){
            return <div className="col-auto d-none d-lg-block">
                <img className="mb-4" src={aviso} alt="" width="150" height="150" id = "cardIcon" />
            </div>
        }
        if(props.communique.typeCommunique.typeName === "Evento"){
            return <div className="col-auto d-none d-lg-block">
                <img className="mb-4" src={evento} alt="" width="150" height="150" id = "cardIcon" />
            </div> 
        }
        if(props.communique.typeCommunique.typeName === "Reparacion"){
            return <div className="col-auto d-none d-lg-block">
                <img className="mb-4" src={reparacion} alt="" width="150" height="150" id = "cardIcon" />
            </div>
        }
    }

    return (

        <div className="d-md-flex flex-md-equal my-md-3 ps-md-3" id="container-cardRelease">
            <div className="row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id = "cardRelease">
                <div className="col p-4 d-flex flex-column position-static" id = "p-contentCard">
                    <strong className="d-inline-block mb-2 text-dark">{props.communique.typeCommunique.typeName}</strong>
                    <h3 className="mb-0" >{props.communique.titleCommunique}</h3>
                    <div className="mb-1 text-muted">{props.communique.datePublished}</div>
                    <p className="card-text" id = "p-contentCard-text">{props.communique.description}</p>
                    <div className='more-card'>
                        <div>
                            <a href="#" className="stretched-link">Leer mas...</a>
                        </div>
                        <div>
                            <ButtonGreen id = "edit-card" text="Editar" type="button"/>
                        </div>
                    </div>
                    
                </div>
                {getIcon()}
            </div>
        </div>
    );
}

export default ReleaseCard;

// creation_date
// description
// communique_type
// communique_title