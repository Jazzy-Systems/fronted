import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/generalPages.css';
import NavBarGeneral from '../components/NavBarGeneral';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {

    return (
      <div className="profilePage-container">
        <NavBarGeneral/>
      </div>
    );
  }
  
  export default ProfilePage;