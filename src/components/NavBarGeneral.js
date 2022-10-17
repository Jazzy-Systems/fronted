import React, { Component } from 'react';
import '../styles/modules.css';
const NavBarGeneral = (props) => {

    const navBarRoutes= ()=>{
        if(props.itemTwo === "Paqueteria"){
            return "http://localhost:3000/profile"
        }else if(props.itemTwo === "Gestion Usuarios"){
            return "http://localhost:3000/register"
        }
    }

    return (
        <nav className="navbar navbar-expand navbar-dark" id ="navBar" aria-label="Second navbar example">
            <div className="container-fluid" id = "container-navBar">
                <h1 className="d-flex align-items-center fs-1 text-black mb-0" id = "navBar-text">
                    <img className="mb-4" src={require('../images/Logo.png')} width="100" height="100" alt="JS" id = "navBar-logo"/>
                    Jazzy Systems
                </h1>

                <div id = "navBar-content">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/profile">{props.itemOne}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={navBarRoutes()}>{props.itemTwo}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/profile">{props.itemThree}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/login" onClick = {props.itemFour}>Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
}

export default NavBarGeneral;