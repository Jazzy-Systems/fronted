import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/generalPages.css';
import RegisterUser from '../components/RegisterCardUser';
import { useNavigate } from 'react-router-dom';

function RegisterUserPage() {

  let navigate = useNavigate();

  const goLoginUser = () => {
      navigate('/login');
  };
  
    return (
      <div className="generalPage-container"> 
        <RegisterUser fLogin = {goLoginUser}/>
        </div>
    );
  }
  
  export default RegisterUserPage;