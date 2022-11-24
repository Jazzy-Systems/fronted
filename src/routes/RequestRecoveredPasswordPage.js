import React from 'react';
import '../styles/generalPages.css';
import RequestRecoverPassword from '../components/RequestRecoverPassword';
import Footer from '../components/Footer.js';

const RequestRecoverPasswordPage = (props) => {

    return (
        <div >
            <div className="generalPage-container">
                <RequestRecoverPassword />
            </div>
            <Footer />
        </div>
    );
}

export default RequestRecoverPasswordPage;
