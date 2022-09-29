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

  const goProfile = () => {
    navigate('/profile');
  };  

    return (
      <div className="generalPage-container">
        <Login fRecovered = {goRecovered} fRegister = {goRegister} fProfile = {goProfile}/>
      </div>
    );
  }
  
  export default LoginPage;