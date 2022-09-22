import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/generalPages.css';
import Login from '../components/LoginCard';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  let navigate = useNavigate();

  const goRegister = () => {
    navigate('/register');
  };

  const goRecovered = () => {
    navigate('/recovered-password');
};

    return (
      <div className="generalPage-container">
        <Login fRecovered = {goRecovered} fRegister = {goRegister}/>
      </div>
    );
  }
  
  export default LoginPage;