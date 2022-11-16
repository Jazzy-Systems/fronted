import React from 'react';
import '../styles/generalPages.css';
import RegisterUser from '../components/RegisterCardUser';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.js';

function RegisterUserPage() {

  let navigate = useNavigate();

  const goLoginUser = () => {
    navigate('/login');
  };

  return (
    <div>      
      <div className="generalPage-container">
        <RegisterUser fLogin={goLoginUser} />
      </div>
      <Footer/>
    </div>
  );
}

export default RegisterUserPage;
