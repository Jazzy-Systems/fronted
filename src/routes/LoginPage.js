import React from 'react';
import '../styles/generalPages.css';
import Login from '../components/LoginCard';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.js';

function LoginPage() {

  let navigate = useNavigate();

  const goRegister = () => {
    navigate('/registerUser');
  };

  const goRecovered = () => {
    navigate('/recover');
  };

  const goProfile = () => {
    navigate('/profile');
  };

  return (
    <div>
      <div className="generalPage-container">
        <Login fRecovered={goRecovered} fRegister={goRegister} fProfile={goProfile} />
      </div>
      <Footer/>
    </div>
  );
}

export default LoginPage;
