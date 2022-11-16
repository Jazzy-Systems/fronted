import { useNavigate } from 'react-router-dom';

const AlertNavigate = (props) => {
    let navigate = useNavigate();
    const goNavigate = () => {
        navigate(props.navigate)

    };
    if (props.success === true) {
        return <div class="alert alert-success" role="alert">
            {props.resMessage}
            <button className="btn btn-md btn-primary" onClick={goNavigate} >Aceptar</button>
        </div>
    }
    return (
        <div class="alert alert-danger" role="alert">
            {props.resMessage}
            <button className="btn btn-md btn-danger" onClick={goNavigate}>Volver</button>
        </div>)

}

export default AlertNavigate;
