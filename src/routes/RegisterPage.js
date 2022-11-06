import React from 'react';
import '../styles/generalPages.css';
import Register from '../components/RegisterCard';
import { useNavigate } from 'react-router-dom';
import NavBarGeneral from '../components/NavBarGeneral';
import AuthService from "../services/auth.service";

function RegisterPage() {

  let navigate = useNavigate();

  const goLoginUser = () => {
    navigate('/login');
  };

  const currentRoleNavBar = () => {
    if (!(AuthService.getCurrentUser() == null)) {
      if (AuthService.getCurrentUser().role === 'ROLE_RESIDENT') {
        return <NavBarGeneral itemOne='Comunicados' itemTwo='Paqueteria' itemThree='PQRS' itemFour={AuthService.logout} />
      } else if (AuthService.getCurrentUser().role === 'ROLE_GUARD') {
        return <NavBarGeneral itemOne='Comunicados' itemTwo='Paqueteria' itemFour={AuthService.logout} />
      } else if (AuthService.getCurrentUser().role === 'ROLE_ADMIN') {
        return <NavBarGeneral itemOne='Comunicados' itemTwo='Gestion Usuarios' itemThree='Crear Comunicados' itemFour={AuthService.logout} />
      }
    }
  }
  return (
    <div className="profilePage-container">
      {currentRoleNavBar()}
      <div className="register-body">
        <Register fLogin={goLoginUser} />
      </div>
    </div>
  );
}

export default RegisterPage;
