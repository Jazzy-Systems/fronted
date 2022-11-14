import { useEffect, useState } from 'react';
import ButtonGreen from './ButtonGreen';
import '../styles/createCommunique.css';
import pqrsService from '../services/pqrs-service';
import authHeader from '../services/auth-header';


const ViewRequests = (props) => {
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
        console.log("this is" + request.descriptionRequest);
        setResMessage("TODO");
    }

    if (requests) {
        return (
            <div class="container-lg">
                {showEditForm && <div class="modal" id="exampleModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">{request.titleRequest}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form className='form-Communique' onSubmit={responseRequest}>

                                <div class="modal-body">
                                    <div className="form-floating" id="input-formDescripcion">
                                        <textarea type="text" className="form-control" id="floatingDescripcion" placeholder="tipo" value={request.typeRequest.typeRequestName} onChange={handleOnChange} required></textarea>
                                        <label className="form-label" htmlFor="floatingInput">Tipo</label>
                                    </div>
                                    <div className="form-floating" id="input-form">
                                        <input type="text" className="form-control" id="floatingName" placeholder="name" value={request.titleRequest} onChange={handleOnChange} required></input>
                                        <label className="form-label" htmlFor="floatingInput">Titulo</label>
                                    </div>

                                    <div className="form-floating" id="input-form">
                                        <input type="text" className="form-control" id="floatingName" placeholder="fecha" value={request.dateRequest} onChange={handleOnChange} required></input>
                                        <label className="form-label" htmlFor="floatingInput">Fecha:</label>
                                    </div>

                                    <div className="form-floating" id="input-form">
                                        <textarea type="text" className="form-control" id="floatingName" placeholder="name" value={request.descriptionRequest} onChange={handleOnChange} required></textarea>
                                        <label className="form-label" htmlFor="floatingInput">Descripción</label>
                                    </div>
                                    <div className="form-floating" id="input-formDescripcion">
                                        <textarea type="text" name="responseRequest" className="form-control" id="floatingDescripcion" placeholder="Respuesta" value={request.responseRequest} onChange={handleOnChange} required></textarea>
                                        <label className="form-label" htmlFor="floatingInput">Respuesta</label>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <ButtonGreen id="submit-button" text="Crear" type="Submit" />
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
                        {requests.map(request => (<tr>
                            <td>{request.dateRequest}</td>
                            <td>{request.person.firstName + " " + request.person.lastName}</td>
                            <td>{request.typeRequest.typeRequestName}</td>
                            <td>{request.descriptionRequest}</td>
                            <td>{request.responseRequest}</td>
                            <td>{request.statusRequest}</td>
                            <td><button data-bs-toggle="modal" data-bs-target="#exampleModal"
                                onClick={() => showSelectedRequest(request)}><span>Responder</span>
                            </button></td>
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

export default ViewRequests;
