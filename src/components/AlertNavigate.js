import { useNavigate } from 'react-router-dom';
import '../styles/basic.css';

const AlertNavigate = (props) => {
  let navigate = useNavigate();

  const goNavigate = () => {
    navigate(props.navigateTo)
  };

  if (props.success === true) {
    return <div class="alert alert-success" role="alert">
      <div>{props.resMessage}</div>
      <div className="mx-auto my-auto">
        <button className="btn btn-md btn-primary" id="submit-button" onClick={goNavigate} >Aceptar</button>
      </div>
    </div>
  }
  return (
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <div>{props.resMessage}</div>
      <div>
        <button className="btn btn-md btn-danger" id="error-button" data-bs-dismiss="alert" aria-label="Close" >Volver</button>
      </div>
    </div>)

}

export default AlertNavigate;
