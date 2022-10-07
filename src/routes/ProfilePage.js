import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/generalPages.css';
import NavBarGeneral from '../components/NavBarGeneral';
import { useNavigate } from 'react-router-dom';
import ReleaseCard from '../components/ReleaseCard';
import AuthService from "../services/auth.service";

function ProfilePage() {

  const currentRoleNavBar = () =>{
    if(AuthService.getCurrentUser().roles[0]=== 'ROLE_RESIDENT'){
      return <NavBarGeneral itemOne = 'Comunicados' itemTwo = 'Paqueteria' itemThree = 'PQRS'/> 
    }else if(AuthService.getCurrentUser().roles[0]=== 'ROLE_GUARD'){
      return <NavBarGeneral itemOne = 'Comunicados' itemTwo = 'Paqueteria'/>
    }else if(AuthService.getCurrentUser().roles[0]=== 'ROLE_ADMIN'){
      return <NavBarGeneral itemOne = 'Comunicados' itemTwo = 'Gestion Usuarios' itemThree = 'PQRS'/>
    }
  }

  return (
    <div className="profilePage-container">
      {currentRoleNavBar()}
      <div className="profilePage-body">
        <ReleaseCard />
        <ReleaseCard />
        <ReleaseCard />
        <ReleaseCard />
        <ReleaseCard />
        <ReleaseCard />
      </div>

    </div>
  );
}

export default ProfilePage;