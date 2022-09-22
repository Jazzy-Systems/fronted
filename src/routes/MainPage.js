import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/generalPages.css';
import Home from '../components/HomeCard';
import { useNavigate } from 'react-router-dom';

function MainPage() {

  let navigate = useNavigate();

  const goLoginUser = () => {
      navigate('/login');
  };

  const goRegister = () => {
      navigate('/register');
  };

    return (
      <div className="generalPage-container">
        <Home fLogin = {goLoginUser} fRegister = {goRegister}/>
      </div>
    );
  }
  
  export default MainPage;