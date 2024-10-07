import React from "react";
import '../css/HeaderGalery.css'
import camIcont from '../rsc/camicon.png'
import heartHeader from '../rsc/heartHeader.png'
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <div id="header-container">
      <div id="nav-container">
        <div id="home-icon-container">
          <img src={camIcont} alt="Icone de câmera" id="camicon" onClick={() => navigate('/')}/>
        </div>
        <nav id="nav-links-container">
            <a className="nav-button" href='#about-container'>Sobre</a>
            <a className="nav-button" href='#photos-main-container'>Fotos</a>
            <p className="nav-button"  onClick={() => navigate('/adm')}>Editar</p>
        </nav>
      </div>
      <div id="author-name-container">
        <p id="author-label">Fotos tiradas por</p>
        <p id="author-name">Tei</p>
      </div>
      <div id='sub-header'>
        <img src={heartHeader} alt="Corações decorativos" id="header-hearts"/>
        <div id="patron-name-container">
          <p id="patron-label">Patrocinio</p>
          <p id="patron-name">2chocolaa</p>
        </div>
      </div>
    </div>
  )
};

export default HeaderComponent;