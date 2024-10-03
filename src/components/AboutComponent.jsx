import React from "react";
import '../css/About.css';
import heartAbout from '../rsc/heartAbout.png'
const AboutComponent = () => {
  return (
    <div id="about-container">
      <h1 id="about-title">
        Sobre
      </h1>
      <p id="about-text">
        Esse site foi feito com o proposito de divulgar
        belas fotos da Shiva espro que vocÇes gostem tanto
        quanto eu, agradeço pela atenção
      </p>
      <img src={heartAbout} alt="Corações decorativos"/>
      <hr/>
    </div>
  ); 
};

export default AboutComponent;