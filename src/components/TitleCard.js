import React, { Component } from 'react';
import '../styles/modules.css';
const TitleCard = (props) => {
    
    return <h1 className="h3 mb-3 fw-normal" id="title-card">{props.text}</h1>
}

export default TitleCard;