import React from 'react';
import '../styles/generalPages.css';
import FAQS from '../components/FAQS.js';
import Footer from '../components/Footer.js';

const FaqsPage = (props) =>{

  return (
    <div>      
      <div className="generalPage-container">
        <FAQS/>
      </div>
      <Footer/>
    </div>
  );
}

export default FaqsPage;
