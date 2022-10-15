import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/generalPages.css';
import NavBarGeneral from '../components/NavBarGeneral';
import { Routes,Route,useNavigate, useLocation,Switch } from 'react-router-dom';
import ReleaseCard from '../components/ReleaseCard';
import AuthService from "../services/auth.service";
import {useEffect,useState } from 'react';
import CreateCommunique from '../components/CreateCommunique';
import communiqueService from '../services/communique-service';

function ProfilePage() {

  let location = useLocation();
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
  const contentPage = () =>{

    console.log(location.pathname)
    
    if(location.pathname === "/profile"){
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "http://localhost:8081/api/v1/communique"
          )
        ).json();

      console.log(dataFetch)
      // fetch(communiqueService.getAll()).then((response)=>{
      //   console.log(response.json())
      // })
        
      // return <div className="profilePage-body">
      //           {communiqueService.getAll().map(communique) =>(
      //             <ReleaseCard/>
      //           )}
      //        </div>
    }
    dataFetch()
  }
    else if(location.pathname === "/profile/createCommunique" && AuthService.getCurrentUser().role == 'ROLE_ADMIN'){
      return <Routes>
              <Route path="createCommunique" element = {<CreateCommunique/>}/>
             </Routes>
    }
  }

  return (
    <div className="profilePage-container">
      {currentRoleNavBar()}
      <div className="profilePage-body">
      {contentPage()}     
      </div>
    </div>
  );
}

export default ProfilePage;