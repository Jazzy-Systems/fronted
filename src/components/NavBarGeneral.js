import React from 'react';
import '../styles/modules.css';
import AuthService from "../services/auth.service";

const NavBarGeneral = (props) => {

    const showDropDownCommunique = () => {
        let elementOne = document.getElementById("dropDownComOne");
        let elementTwo = document.getElementById("dropDownComTwo");

        if (elementOne.classList.contains("show")) {
            elementOne.classList.remove("show");
            elementTwo.classList.remove("show");
        } else {
            elementOne.classList.add("show");
            elementTwo.classList.add("show");
        }
        console.log(elementOne.classList)
    }
    const showDropDownUser = () => {
        let elementOne = document.getElementById("dropDownUserOne");
        let elementTwo = document.getElementById("dropDownUserTwo");

        if (elementOne.classList.contains("show")) {
            elementOne.classList.remove("show");
            elementTwo.classList.remove("show");
        } else {
            elementOne.classList.add("show");
            elementTwo.classList.add("show");
        }
        console.log(elementOne.classList)
    }
    const communiqueByRol = () => {
        if (AuthService.getCurrentUser().role === 'ROLE_ADMIN') {
            return <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" id="dropDownComOne" href="#" data-bs-toggle="dropdown" aria-expanded="false" onClick={showDropDownCommunique}>{props.itemOne}</button>
                <ul className="dropdown-menu" id="dropDownComTwo" data-bs-popper="static">
                    <li><a className="dropdown-item" href="http://localhost:3000/profile">Ver comunicados</a></li>
                    <li><a className="dropdown-item" href="http://localhost:3000/profile/createCommunique">Crear Comunicado</a></li>
                </ul>
            </li>
        } else {
            return <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/profile">{props.itemOne}</a>
            </li>
        }
    }

    const navBarRoutes = () => {
        if (props.itemTwo === "Paqueteria") {
            return <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/profile">{props.itemTwo}</a>
            </li>
        } else if (props.itemTwo === "Gestion Usuarios") {
            return <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" id="dropDownUserOne" href="#" data-bs-toggle="dropdown" aria-expanded="false" onClick={showDropDownUser}>{props.itemTwo}</button>
                <ul className="dropdown-menu" id="dropDownUserTwo" data-bs-popper="static">
                    <li><a className="dropdown-item" href="http://localhost:3000/register">Crear Persona</a></li>
                    <li><a className="dropdown-item" href="http://localhost:3000/profile/editarpersona">Editar Persona</a></li>
                </ul>
            </li>
        }
    }
    return (
        <nav className="navbar navbar-expand navbar-dark" id="navBar" aria-label="Second navbar example">
            <div className="container-fluid" id="container-navBar">
                <h1 className="d-flex align-items-center fs-1 text-black mb-0" id="navBar-text">
                    <img className="mb-4" src={require('../images/Logo.png')} width="100" height="100" alt="JS" id="navBar-logo" />
                    Jazzy Systems
                </h1>

                <div id="navBar-content">
                    <ul className="navbar-nav me-auto">
                        {communiqueByRol()}
                        {navBarRoutes()}
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/profile">{props.itemThree}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/login">Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBarGeneral;
