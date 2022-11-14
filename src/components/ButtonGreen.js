import '../styles/modules.css';
const ButtonGreen = (props) => {

    return <button className="btn btn-md btn-primary" id={props.id} type={props.type} onClick={props.fLogin}>{props.text}</button>
}

export default ButtonGreen;
