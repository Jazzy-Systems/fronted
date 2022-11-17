import { useEffect, useState } from 'react';
import ButtonGreen from './ButtonGreen';
import '../styles/basic.css';
import pqrsService from '../services/pqrs-service';
import authHeader from '../services/auth-header';
import AlertNavigate from './AlertNavigate';

const CreatePqrs = (props) => {
  const [form, setForm] = useState({ type: "" });
  const [resMessage, setResMessage] = useState(null);
  const [typeRequests, setTypeRequests] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;
  const [navigateTo, setNavigateTo] = useState("/profile");
  const [success, setSuccess] = useState(null);

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader()
    }
    const dataFetch = async () => {
      const data = await (
        await fetch(
          API_URL + "/api/v1/typerequest/", requestOptions
        )
      ).json();
      setTypeRequests(data);
    };
    dataFetch();
  }, [API_URL]);

  const newPQRS = (e) => {
    e.preventDefault();
    const responseRequest = null;
    const statusRequest = false;
    const typeRequest = {
      typeRequestName: form.typeRequestName
    }
    pqrsService.save(form.titleRequest,
      form.descriptionRequest,
      responseRequest,
      statusRequest,
      typeRequest
    ).then(
      () => {
        setSuccess(true);
        setResMessage("Se ha enviado la PQRS, existosamente.")
        setNavigateTo("/profile")
      },
      error => {
        setResMessage(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString());
        setSuccess(false);
        setNavigateTo("/profile/createpqrs")
      }
    );
  }

  if (typeRequests) {
    return (
      <div className='card container-sm d-flex justify-content-center align-items-center col-auto' id="card">
        <form className='container d-flex flex-column' id="form" onSubmit={newPQRS}>
          <h3 className='mx-auto flex align-center fw-bold' id="title">Formulario PQRS</h3>
          <label htmlFor="type-selector" className="form-label">Tipo</label>
          <select required name="typeRequestName" className="form-select" id="type-selector"
            value={form.typeRequestName} onChange={handleOnChange}>
            <option>Seleccione el tipo de PQRS</option>
            {typeRequests.map((typeRequest) => (
              <option value={typeRequest.typeRequestName}>
                {typeRequest.typeRequestName}
              </option>
            ))}
          </select>
          <div className="form-floating" id="input-form">
            <input type="text" name="titleRequest" className="form-control" id="floatingInput" placeholder="name" value={form.titleRequest} onChange={handleOnChange} required></input>
            <label className="form-label" htmlFor="floatingInput">Titulo</label>
          </div>
          <div className="mb-4">
            <div className="form-floating" id="input-form">
              <textarea id="textarea" type="textarea" name="descriptionRequest" className="form-control" placeholder="descripcion" value={form.descriptionRequest} onChange={handleOnChange} required></textarea>
              <label className="form-label" htmlFor="floatingInput">Descripcion</label>
            </div>
          </div>

          <div className="mx-auto my-auto mt-4">
            <ButtonGreen id="submit-button" text="Realizar PQRS" type="Submit" />
          </div>
        </form>
        {success != null && (<AlertNavigate success={success} resMessage={resMessage} navigateTo={navigateTo} />)}
      </div>
    )
  }
  else return (<div><h2>Cargando</h2></div>)
}

export default CreatePqrs;
