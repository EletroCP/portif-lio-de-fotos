import React from "react";
import '../css/AdmHeader.css';
import camIcont from '../rsc/camicon.png'
import { useNavigate } from "react-router-dom";

const HeaderAdmComponent = () => {
  const navigate = useNavigate();

  return (
    <div id="header-adm-container">
      <div id="home-icon-container" >
      <img src={camIcont} alt="Ícone de câmera" id="camicon" onClick={() => navigate('/')} />
      </div>
      <h1 id="Adm-title">Editor</h1>
    </div>
  )
};

export default HeaderAdmComponent;