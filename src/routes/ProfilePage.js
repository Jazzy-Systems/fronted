import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/generalPages.css';
import NavBarGeneral from '../components/NavBarGeneral';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {

  return (
    <div className="profilePage-container">
      <NavBarGeneral />
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center" id = "profilePage-body">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm" id = "cardProfile">
            <div className="card-header py-3" id = "cardHeaderProfile">
            </div>
            <div className="card-body" id = "cardBodyProfile">
              <h1 className="card-title pricing-card-title">Comunicados</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Conoce</li>
                <li>Enterate</li>
                <li>¿Que ha sucedido en el conjunto residencial?</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary" id = "botonCardProfile">Comunicados</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm" id = "cardProfile">
            <div className="card-header py-3" id = "cardHeaderProfile">
            </div>
            <div className="card-body" id = "cardBodyProfile">
              <h1 className="card-title pricing-card-title">Paqueteria</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>¿Tienes paquetes?</li>
                <li>¿Tienes recibos?</li>
                <li>¿Tienes domicilios?</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary" id = "botonCardProfile">Paqueteria</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm" id = "cardProfile">
            <div className="card-header py-3" id = "cardHeaderProfile">
            </div>
            <div className="card-body" id = "cardBodyProfile">
              <h1 className="card-title pricing-card-title">PQRS</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Petición</li>
                <li>Queja</li>
                <li>Reclamo</li>
                <li>Sugerencia</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary" id = "botonCardProfile">PQRS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;