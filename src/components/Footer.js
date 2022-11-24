import '../styles/modules.css';

const Footer = (props) => {

    const FRONT_URL = process.env.REACT_APP_FRONT_URL;

    const goAboutUs = () => {
        return FRONT_URL + "/AboutUs"
    };

    const goFaqs = () => {
        return FRONT_URL + "/FAQS"
    };

    const goPolicies = () => {
        return FRONT_URL + "/Policies"
    };

    const goConctact = () => {
        return FRONT_URL + "/Contact"
    };

    return (
        <footer className="d-flex justify-content-around flex-wrap align-items-center py-3 my-3 border-top bg-dark px-4" id="footer">
            <p className="col-md-4 mb-0 text-light h4">© 2022 Jazzy Systems</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img className="mb-4" src={require('../images/Logo.png')} alt="" width="80" height="80" />
            </a>

            <ul className="nav col-md-4 justify-content-end h4">
                <li className="nav-item"><a href={goAboutUs()} className="nav-link px-2 text-light"> Sobre Nosotros</a></li>
                <li className="nav-item"><a href={goFaqs()} className="nav-link px-2 text-light">FAQs</a></li>
                <li className="nav-item"><a href={goConctact()} className="nav-link px-2 text-light">Contactanos</a></li>
                <li className="nav-item"><a href={goPolicies()} className="nav-link px-2 text-light">Política y Privacidad</a></li>
            </ul>
        </footer>
    )
}

export default Footer;
