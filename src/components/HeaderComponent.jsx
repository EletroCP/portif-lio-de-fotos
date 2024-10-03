import React from "react";
import '../css/HeaderGalery.css'
import camIcont from '../rsc/camicon.png'
import heartHeader from '../rsc/heartHeader.png'

const HeaderComponent = () => {
  return (
    <div id="header-container">
      <div id="nav-container">
        <div id="home-icon-container">
          <img src={camIcont} alt="Icone de câmera" id="camicon"/>
        </div>
        <nav id="nav-links-container">
            <p className="nav-button">Sobre</p>
            <p className="nav-button">Fotos</p>
            <p className="nav-button">Editar</p>
        </nav>
      </div>
      <div id="author-name-container">
        <p id="author-label">Fotos tiradas por</p>
        <p id="author-name">Andrey</p>
      </div>
      <div id='sub-header'>
        <img src={heartHeader} alt="Corações decorativos"/>
        <div id="patron-name-container">
          <p id="patron-label">Patrocinio</p>
          <p id="patron-name">Andrey</p>
        </div>
      </div>
    </div>
  )
};

export default HeaderComponent;