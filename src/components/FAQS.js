import '../styles/modules.css';
import Pregunta from '../images/pregunta.png'

const FAQS = (props) => {


    return (
        <div className="container " id="featured-3">
            <div className="feature-icon align-items-center justify-content-center mb-3">
                <img className="rounded mx-auto d-block mb-5 mt-3" src={Pregunta} alt="" width="150" height="150" />
            </div>
            <h1 className="border-bottom" id="title-AboutUs">Preguntas Frecuentes</h1>
            <div className="row container pb-3">
                <div className="feature col pb-2" id="item-AboutUs">
                    <h3 className="fs-2" id="title-card">¿Cómo puedo realizar una donación?</h3>
                    <p id="text-AboutUs">Para realizar una donación puede hacer por Nequi al número de la empresa: 3204795092.</p>
                </div>
                <div className="feature col pb-2" id="item-AboutUs">
                    <h3 className="fs-2">Al registrarme como usuario se me solicita un código ¿Cómo lo puedo obtener?</h3>
                    <p id="text-AboutUs">Para registrarse como usuario debe estar registrado/a como persona por parte del administrador del conjunto. Cuando ya este registrado/a como persona se le enviara a su correo un código.</p>
                </div>
                <div className="feature col pb-2" id="item-AboutUs">
                    <h3 className="fs-2">Deseo cambiar el correo con el cual ingreso ¿Cómo lo puedo hacer?</h3>
                    <p id="text-AboutUs">Debe comunicarse con el administrador{'\n'} quien debe enviar un correo{'\n'} electrónico con asunto: {'\n'}Eliminar cuenta donde {'\n'}se indique el motivo.</p>
                </div>
                <div className="row container pb-3">
                    <div className="feature col" id="item-AboutUs">
                        <h3 className="fs-1">Manual de usuario</h3>
                        <p id="text-AboutUs">Descarguelo aqui: <a href='https://drive.google.com/drive/u/1/folders/1h1ZC7CTDEpg1CpgEH4BbjAnJRgxU3iin' target="_blank" rel="noopener noreferrer">Google Drive</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQS;
