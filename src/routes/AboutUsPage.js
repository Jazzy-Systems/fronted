import React from 'react';
import '../styles/generalPages.css';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer.js';

const AboutUsPage = (props) =>{

  return (
    <div>      
      <div className="generalPage-container">
        <AboutUs/>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUsPage;
