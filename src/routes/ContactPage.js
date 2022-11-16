import React from 'react';
import '../styles/generalPages.css';
import Contact from '../components/Contact';
import Footer from '../components/Footer.js';

const ContactPage = (props) =>{

  return (
    <div>      
      <div className="generalPage-container">
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactPage;