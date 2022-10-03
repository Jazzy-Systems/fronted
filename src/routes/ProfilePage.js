import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/generalPages.css';
import NavBarGeneral from '../components/NavBarGeneral';
import { useNavigate } from 'react-router-dom';
import ReleaseCard from '../components/ReleaseCard';

function ProfilePage() {

  return (
    <div className="profilePage-container">
      <NavBarGeneral />
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