import '../styles/modules.css';
import Pregunta from '../images/pregunta.png'

const FAQS = (props) => {
    

    return (
        <div className="container px-5 py-5" id="featured-3">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center mb-3">
                <img className="mb-3" src={Pregunta} alt="" width="150" height="150" id="cardIcon" />
            </div>
            <h1 className="pb-2 border-bottom" id="title-AboutUs">Preguntas Frecuentes</h1>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
                <div className="feature col" id="item-AboutUs">
                    <h3 className="fs-2" id = "title-card">¿Cómo puedo realizar una donación?</h3>
                    <p id="text-AboutUs">Para realizar una donación puede hacer lo atreves de Nequi al número de la empresa 3204795092.</p>
                </div>
                <div className="feature col" id="item-AboutUs">
                    <h3 className="fs-2">Al registrar me como usuario se me solicita un código ¿Cómo lo puedo obtener?</h3>
                    <p id="text-AboutUs">Para registrarse como usuario debe estar registrado/a como persona por parte del administrador del conjunto. Cuando ya este registrado/a como persona se le enviara a su correo un código.</p>
                </div>
                <div className="feature col" id="item-AboutUs">
                    <h3 className="fs-2">Deseo cambiar el correo con el cual ingreso ¿Cómo lo puedo hacer?</h3>
                    <p id="text-AboutUs">Debe comunicarse con el administrador{'\n'} quien debe enviar un correo{'\n'} electrónico con asunto: {'\n'}Eliminar cuenta donde {'\n'}se indique el motivo.</p>
                </div>
            </div>
        </div>
    )
}

export default FAQS;
