import React from 'react';
import '../styles/generalPages.css';
import AboutUs from '../components/AboutUs';
import { useNavigate } from 'react-router-dom';

const AboutUsPage = (props) =>{

  return (
    <div className="generalPage-container">
      <AboutUs/>
    </div>
  );
}

export default AboutUsPage;
