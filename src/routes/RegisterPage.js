import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/generalPages.css';
import Register from '../components/RegisterCard';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

  let navigate = useNavigate();

  const goLoginUser = () => {
      navigate('/login');
  };
  
    return (
      <div className="generalPage-container">
        <Register fLogin = {goLoginUser}/>
      </div>
    );
  }
  
  export default RegisterPage;