import React from 'react';
import '../styles/generalPages.css';
import NavBarGeneral from '../components/NavBarGeneral';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ReleaseCard from '../components/ReleaseCard';
import AuthService from "../services/auth.service";
import { useEffect, useState } from 'react';
import CreateCommunique from '../components/CreateCommunique';
import authHeader from '../services/auth-header';
import EditPerson from '../components/EditPerson';

function ProfilePage() {

  let location = useLocation();
  let navigate = useNavigate();

  const [communiques, setCommuniques] = useState(null);

  useEffect(() => {
    if (AuthService.getCurrentUser() == null) {
      //alert("No hay credenciales actuales o usted no ha iniciado sesión.")
      navigate("/login")
    }
    const requestOptions = {
      method: 'GET',
      headers: authHeader()
    }
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "http://localhost:8081/api/v1/communique/", requestOptions
        )
      ).json();
      console.log(data);
      // set state when the data received
      setCommuniques(data);
    };

    dataFetch();
  }, [navigate])



  useEffect(() => {

  }, [])

  const currentRoleNavBar = () => {
    if (!(AuthService.getCurrentUser() == null)) {
      if (AuthService.getCurrentUser().role === 'ROLE_RESIDENT') {
        return <NavBarGeneral itemOne='Comunicados' itemTwo='Paqueteria' itemThree='PQRS' itemFour={AuthService.logout} />
      } else if (AuthService.getCurrentUser().role === 'ROLE_GUARD') {
        return <NavBarGeneral itemOne='Comunicados' itemTwo='Paqueteria' itemFour={AuthService.logout} />
      } else if (AuthService.getCurrentUser().role === 'ROLE_ADMIN') {
        return <NavBarGeneral itemOne='Comunicados' itemTwo='Gestion Usuarios' itemFour={AuthService.logout} />
      }
    }

  }
  const contentPage = () => {

    if (location.pathname === "/profile") {
      if (communiques) {
        return (
          <div className="profilePage-body">
            {communiques.map((elem) => {
              return (
                <ReleaseCard communique={elem} />
              );
            })}
          </div>
        )
      }
    }
    else if (location.pathname === "/profile/createCommunique" && AuthService.getCurrentUser().role === 'ROLE_ADMIN') {
      return <Routes>
        <Route path="createCommunique" element={<CreateCommunique />} />
      </Routes>
    }
    else if (location.pathname === "/profile/editarpersona" && AuthService.getCurrentUser().role === 'ROLE_ADMIN') {
      return <Routes>
        <Route path="editarpersona" element={<EditPerson />} />
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
