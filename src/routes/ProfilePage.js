import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/generalPages.css';
import NavBarGeneral from '../components/NavBarGeneral';
import { useNavigate } from 'react-router-dom';
import ReleaseCard from '../components/ReleaseCard';
import AuthService from "../services/auth.service";
import {useEffect,useState } from 'react';

function ProfilePage() {

  let navigate = useNavigate();
  const[pageStatus, setpageStatus] = useState(false);

  const handleOnChange = (e) =>{

    setpageStatus(AuthService.getCurrentUser())
  }

  useEffect(() => {
    if (AuthService.getCurrentUser() == null){
      //alert("No hay credenciales actuales o usted no ha iniciado sesión.")
      navigate("/login")   
    }
  },[])

  const currentRoleNavBar = () =>{
    if(!(AuthService.getCurrentUser() == null)){
      if(AuthService.getCurrentUser().role=== 'ROLE_RESIDENT'){
        return <NavBarGeneral itemOne = 'Comunicados' itemTwo = 'Paqueteria' itemThree = 'PQRS' itemFour = {AuthService.logout} /> 
      }else if(AuthService.getCurrentUser().role=== 'ROLE_GUARD'){
        return <NavBarGeneral itemOne = 'Comunicados' itemTwo = 'Paqueteria' itemFour = {AuthService.logout}/>
      }else if(AuthService.getCurrentUser().role=== 'ROLE_ADMIN'){
        return <NavBarGeneral itemOne = 'Comunicados' itemTwo = 'Gestion Usuarios' itemThree = 'PQRS' itemFour = {AuthService.logout}/>
      }
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