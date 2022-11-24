import React from 'react';
import '../styles/generalPages.css';
import Footer from '../components/Footer.js';
import Policies from '../components/Policies.js';

const PoliciesPage = (props) => {

  return (
    <div className="profilePage-container">
      <div className="profilePage-body">
        <Policies />
      </div>
      <Footer />
    </div>
  );
}

export default PoliciesPage;
