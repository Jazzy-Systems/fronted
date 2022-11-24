import React from 'react';
import '../styles/generalPages.css';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer.js';

const AboutUsPage = (props) => {

  return (
    <div className="profilePage-container">
      <div className="profilePage-body">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
