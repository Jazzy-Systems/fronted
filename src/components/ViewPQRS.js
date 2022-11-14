import { useEffect, useState } from 'react';
import ButtonGreen from './ButtonGreen';
import '../styles/createCommunique.css';
import pqrsService from '../services/pqrs-service';
import authHeader from '../services/auth-header';

const ViewPQRS = (props) => {
  const [resMessage, setResMessage] = useState(null);
  const [requests, setRequests] = useState();
  const [request, setRequest] = useState();
  const [showEditForm, setShowEditForm] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;

  const handleOnChange = (e) => {
    setRequest({ ...request, [e.target.name]: e.target.value })
    console.log(request)
  }

  const responseRequest = (e) => {
    e.preventDefault();

    pqrsService.update(
      request.requestId,
      request.titleRequest,
      request.descriptionRequest,
      request.responseRequest,
      request.statusRequest,
      request.typeRequest
    ).then(
      () => {
        alert("Se ha dado respuesta a la PQRS, existosamente.")
      },
      error => {
        setResMessage(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString());
        alert(resMessage)
      }
    );
  }
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader()
    }
    const dataFetch = async () => {
      const data = await (
        await fetch(
          API_URL + "/api/v1/request/", requestOptions
        )
      ).json();
      setRequests(data);
    };
    dataFetch();
  }, [API_URL]);

  const showSelectedRequest = (data) => {
    setShowEditForm(true);
    setRequest(data);
  }

  if (requests) {
    return (
      <div class="container-lg ">
        {showEditForm && <div class="modal" id="exampleModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">{"PQRS: " + request.titleRequest}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
              </div>
              <form className='form' id="card" onSubmit={responseRequest}>
                <div class="modal-body">
                  <div className="form-floating mb-3" >
                    <input type="text" className="form-control" id="floatingType" placeholder="tipo"
                      value={request.typeRequest.typeRequestName}
                      onChange={handleOnChange} disabled></input>
                    <label className="form-label" for="floatingType">Tipo</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingTitle" placeholder="name" value={request.titleRequest}
                      onChange={handleOnChange} disabled></input>
                    <label className="form-label fw-bold" for="floatingTitle">Título</label>
                  </div>
                  <div className="form-floating mb-3" >
                    <input type="datetime" className="form-control" id="floatingDate" placeholder="fecha" value={request.dateRequest} onChange={handleOnChange} disabled></input>
                    <label className="form-label fw-bold" for="floatingDate">Fecha:</label>
                  </div>
                  <div className="form-floating mb-3" >
                    <textarea type="text" className="form-control" id="floatingDescription" placeholder="Descripción" value={request.descriptionRequest} onChange={handleOnChange} disabled></textarea>
                    <label className="form-label fw-bold" for="floatingDescription">Descripción</label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea type="text" name="responseRequest" className="form-control" id="floatingResponse"
                      placeholder="Dar respuesta a la PQRS" onChange={handleOnChange} required></textarea>
                    <label className="form-label fw-bold" for="floatingResponse">Respuesta</label>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <ButtonGreen id="submit-button" text="Responder" type="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>}
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Persona</th>
              <th scope="col">Tipo</th>
              <th scope="col">Descripción</th>
              <th scope="col">Respuesta</th>
              <th scope="col">Estado</th>
              <th scope="col">Dar respuesta</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(request => (<tr key={request.requestId}>
              <td>{request.dateRequest}</td>
              <td>{request.person.firstName + " " + request.person.lastName}</td>
              <td>{request.typeRequest.typeRequestName}</td>
              <td>{request.descriptionRequest}</td>
              <td>{request.responseRequest}</td>
              <td>{request.statusRequest === false && <span>Sin responder</span>}</td>
              <td>{request.statusRequest === false && <button className="btn btn-md btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                onClick={() => showSelectedRequest(request)}> <span>Responder</span></button>}
              </td>
            </tr>))}
          </tbody>
        </table>
        <div>
          <span>{resMessage}</span>
        </div>

      </div >
    )
  }
  else return (<div><h2>Cargando</h2></div>)
}

export default ViewPQRS;
