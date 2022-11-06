import '../styles/modules.css';
const ButtonGreen = (props) => {

    return <button className="btn btn-lg btn-primary" id={props.id} type={props.type} onClick={props.fLogin}>{props.text}</button>
}

export default ButtonGreen;
