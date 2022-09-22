import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/generalPages.css';
import Recovered from '../components/RecoveredCard';
function RecoveredPage() {
    return (
      <div className="generalPage-container">
        <Recovered/>
      </div>
    );
  }
  
  export default RecoveredPage;