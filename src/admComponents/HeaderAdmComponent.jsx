import React from "react";
import '../css/AdmHeader.css';
import camIcont from '../rsc/camicon.png'

const HeaderAdmComponent = () => {

  return (
    <div id="header-adm-container">
      <div id="home-icon-container">
        <img src={camIcont} alt="Icone de câmera" id="camicon"/>
      </div>
      <h1 id="Adm-title">Editor</h1>
    </div>
  )
};

export default HeaderAdmComponent;