import React from 'react';
import '../styles/generalPages.css';
import RecoverPassword from '../components/RecoverPassword';
import Footer from '../components/Footer.js';

function RecoveredPage() {
  return (
    <div>
      <div className="generalPage-container">
        <RecoverPassword />
      </div>
      <Footer />
    </div>
  );
}

export default RecoveredPage;
