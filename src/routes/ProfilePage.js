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
import CreatePackage from '../components/CreatePackage';
import EditPackage from '../components/EditPackage';
import EditMyProfile from '../components/EditMyProfile';
import PackageCard from '../components/PackageCard';
import RegisterCard from '../components/RegisterCard';
import Footer from '../components/Footer.js';
import PQRScard from '../components/PQRScard';
import CreatePqrs from '../components/CreatePQRS';
import ViewPQRS from '../components/ViewPQRS';

function ProfilePage() {

  let location = useLocation();
  let navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;
  const [communiques, setCommuniques] = useState(null);
  const [packages, setPackages] = useState(null);
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    if (AuthService.getCurrentUser() === null) {
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
          API_URL + "/api/v1/communique/", requestOptions
        )
      ).json();
      setCommuniques(data);
    };

    dataFetch();
  }, [API_URL, navigate])

  useEffect(() => {

    if (AuthService.getCurrentUser().role === 'ROLE_RESIDENT') {
      const requestOptions = {
        method: 'GET',
        headers: authHeader()
      }
      const dataFetch = async () => {
        const data = await (
          await fetch(
            API_URL + "/api/v1/pack/mypacks", requestOptions
          )
        ).json();
        setPackages(data);
      };

      dataFetch();
    }
  }, [API_URL, navigate])

  useEffect(() => {

    if (AuthService.getCurrentUser().role === 'ROLE_RESIDENT') {
      const requestOptions = {
        method: 'GET',
        headers: authHeader()
      }
      const dataFetch = async () => {
        const data = await (
          await fetch(
            API_URL + "/api/v1/request/myallrequest", requestOptions
          )
        ).json();
        setRequests(data);
      };
      dataFetch();
    }
  },
    [API_URL, navigate
    ])

  useEffect(() => {
    if (AuthService.getCurrentUser().role === 'ROLE_ADMIN') {
      const requestOptions = {
        method: 'GET',
        headers: authHeader()
      }
      const dataFetch = async () => {
        const data = await (
          await fetch(
            API_URL + "/api/v1/request/", requestOptions
          )
        ).json();
        setRequests(data);
      };
      dataFetch();
    }
  }, [API_URL]);

  const currentRoleNavBar = () => {
    if (!(AuthService.getCurrentUser() == null)) {
      if (AuthService.getCurrentUser().role === 'ROLE_RESIDENT') {
        return <NavBarGeneral itemOne='Comunicados' itemTwo='Paqueteria' itemThree='Mi perfil' itemFour='PQRS' itemFive={AuthService.logout} />
      } else if (AuthService.getCurrentUser().role === 'ROLE_GUARD') {
        return <NavBarGeneral itemOne='Comunicados' itemTwo='Paqueteria' itemFive={AuthService.logout} />
      } else if (AuthService.getCurrentUser().role === 'ROLE_ADMIN') {
        return <NavBarGeneral itemOne='Comunicados' itemTwo='Gestion Usuarios' itemThree='Mi perfil' itemFour='PQRS' itemFive={AuthService.logout} />
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
    else if (location.pathname === "/profile/myPackages" && AuthService.getCurrentUser().role === 'ROLE_RESIDENT') {
      if (packages) {
        return (
          <div className="profilePage-body">
            {packages.map((elem) => {
              return (
                <PackageCard package={elem} />
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
    else if (location.pathname === "/profile/viewRequests" && AuthService.getCurrentUser().role === 'ROLE_ADMIN') {
      return <Routes>
        <Route path="viewRequests" element={<ViewPQRS pqrs={requests} />} />
      </Routes>
    }
    else if (location.pathname === "/profile/createPerson" && AuthService.getCurrentUser().role === 'ROLE_ADMIN') {
      return <Routes>
        <Route path="createPerson" element={<RegisterCard />} />
      </Routes>
    }
    else if (location.pathname === "/profile/editarpersona" && AuthService.getCurrentUser().role === 'ROLE_ADMIN') {
      return <Routes>
        <Route path="editarpersona" element={<EditPerson />} />
      </Routes>
    }
    else if (location.pathname === "/profile/createPackage" && AuthService.getCurrentUser().role === 'ROLE_GUARD') {
      return <Routes>
        <Route path="createPackage" element={<CreatePackage />} />
      </Routes>
    }
    else if (location.pathname === "/profile/editPackage" && AuthService.getCurrentUser().role === 'ROLE_GUARD') {
      return <Routes>
        <Route path="editPackage" element={<EditPackage />} />
      </Routes>
    }
    else if ((location.pathname === "/profile/editProfile") &&
      (AuthService.getCurrentUser().role === 'ROLE_RESIDENT' ||
        AuthService.getCurrentUser().role === 'ROLE_ADMIN')) {
      return <Routes>
        <Route path="editProfile" element={<EditMyProfile />} />
      </Routes>
    }
    else if (location.pathname === "/profile/myallrequests" && AuthService.getCurrentUser().role === 'ROLE_RESIDENT') {
      if (requests) {
        return (
          <div className="profilePage-body">
            {requests.map((elem) => {
              return (
                <PQRScard request={elem
                } />
              );
            })
            }
          </div>
        )
      }
    }
    else if (location.pathname === "/profile/createpqrs" && AuthService.getCurrentUser().role === 'ROLE_RESIDENT') {
      return <Routes>
        <Route path="/createpqrs" element={<CreatePqrs />} />
      </Routes>
    }
  }

  return (
    <div className="profilePage-container">
      {currentRoleNavBar()}
      <div className="profilePage-body">
        {contentPage()}
      </div>
      <Footer />
    </div>

  );
}

export default ProfilePage;
