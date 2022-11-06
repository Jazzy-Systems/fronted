import React from 'react';
import '../styles/generalPages.css';
import RequestRecoverPassword from '../components/RequestRecoverPassword';
function RecoveredPage() {
  return (
    <div className="generalPage-container">
      <RequestRecoverPassword />
    </div>
  );
}

export default RecoveredPage;
